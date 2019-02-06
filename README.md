# Usage of gulp-clean-dir
[![NPM version](https://img.shields.io/npm/v/gulp-clean-dir.svg)](https://npmjs.org/package/gulp-clean-dir)
[![Downloads](https://img.shields.io/npm/dm/gulp-clean-dir.svg)](https://npmjs.org/package/gulp-clean-dir)
[![Build Status](https://travis-ci.org/Dev-Wito/gulp-clean-dir.svg?branch=master)](https://travis-ci.org/Dev-Wito/gulp-clean-dir)
[![Coverage Status](https://coveralls.io/repos/github/Dev-Wito/gulp-clean-dir/badge.svg?branch=master)](https://coveralls.io/github/Dev-Wito/gulp-clean-dir?branch=master)

It's plugin for gulp clean a directory.

## Installation

````
npm i gulp-clean-dir
````
or
```
npm i -D gulp-clean-dir
```

## Example of the clearDir() function

Here is an example of how to use the clearDir() function in your gulpfile.js file:
```js
const gulp     = require('gulp');
const cleanDir = require('gulp-clean-dir');

gulp.task('assemble', function() {
return gulp.src('./assembly.json')
	.pipe(cleanDir('./dist'))
	.pipe(gulp.dest('./dist'))
});
```

### Only some extensions
Clean directory files that match extensions
```js
const gulp     = require('gulp');
const cleanDir = require('gulp-clean-dir');

gulp.task('assemble', function() {
return gulp.src('./assembly.json')
	.pipe(cleanDir('./dist',{
        ext:['.js']
    }))
    .pipe(gulp.dest('./dist'))
});
```