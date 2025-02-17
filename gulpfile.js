const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Process JavaScript files and output to public/js
function scripts() {
    return gulp.src('./src/scripts/*.js') // Source folder for JS files
        .pipe(uglify()) // Minify JavaScript
        .pipe(gulp.dest('./public/js')); // Output to public/js
}

// Compile SCSS to CSS and output to public/css
function styles() {
    return gulp.src('./src/styles/*.scss') // Source folder for SCSS files
        .pipe(sass({ outputStyle: 'compressed' })) // Compile and compress the CSS
        .pipe(gulp.dest('./public/css')); // Output to public/css
}

// Optimize images and output to public/images
function images() {
    return gulp.src('./src/images/**/*') // Source folder for images
        .pipe(imagemin()) // Optimize images
        .pipe(gulp.dest('./public/images')); // Output to public/images
}

// Define the default task to run all tasks in parallel
exports.default = gulp.parallel(styles, images, scripts);

// Watch files for changes
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Watch for SCSS changes
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts)); // Watch for JS changes
    gulp.watch('./src/images/**/*', gulp.parallel(images)); // Watch for image changes
};
