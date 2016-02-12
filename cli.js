#!/usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');

const app = require('commander');
const mongodb = require('mongodb');
const mime = require('mime');

app.version('0.0.1')
    .usage('[options] [files...]')
    .description('Upload files to MongoDB GridFS using cli.')
    .option('-H, --host <string>', 'MongoDB URI')
    .option('-v, --verbose', 'Verbose output')
    .parse(process.argv);

if (!app.args.length || !app.host) app.help();

mongodb.MongoClient.connect(app.host, (error, db) => {
    let successCount = 0
    if (error) {
        process.exit(1);
    }

    app.args.forEach((item, index, arr) => {
        let file = path.resolve(item)
        let fileName = path.basename(file)

        let bucket = new mongodb.GridFSBucket(db);
        let uploadStream = bucket.openUploadStream(fileName, {contentType: mime.lookup(file)});

        uploadStream.on('error', (error) => {
            if (app.verbose) console.log('Error for', file);
        });

        uploadStream.on('finish', fileInfo => {
            successCount++;
            if (app.verbose) console.log('Success for', fileName, '->', fileInfo._id);
            if (successCount === arr.length) db.close();
        });

        fs.createReadStream(file).pipe(uploadStream);
    })
});
