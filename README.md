# Usage of gulp-clean-dir

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