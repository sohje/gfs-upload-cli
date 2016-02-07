# gfs-upload-cli
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

  Examples
    $ gfs-upload -v -H mongodb://localhost:8080/testDB /tmp/*.jpg
    $ gfs-upload -H mongodb://localhost:8080/testDB ../images/* ../js/*.js ../css/*
```

## License

MIT © [Nikolay Spiridonov](https://github.com/sohje)