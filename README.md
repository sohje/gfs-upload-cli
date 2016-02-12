# gfs-upload-cli
[![Build Status](https://travis-ci.org/sohje/gfs-upload-cli.svg?branch=master)](https://travis-ci.org/sohje/gfs-upload-cli)  
Upload files to MongoDB GridFS using cli

## Install

```
$ npm install --global gfs-upload-cli
```

## Usage

```
$ gfs-upload --help

  Usage: gfs-upload [options] [files...]

  Upload files to MongoDB GridFS using cli.

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -H, --host <string>  MongoDB URI
    -v, --verbose        Verbose output

  Examples:
    $ gfs-upload -v -H mongodb://localhost:27107/testDB /tmp/test.jpg
    $ gfs-upload -H mongodb://localhost/testDB ../images/* ../js/*.js ../css/*
```

## License

MIT © [Nikolay Spiridonov](https://github.com/sohje)
