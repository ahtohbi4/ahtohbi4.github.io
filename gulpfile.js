var gulp = require('gulp');
var rename = require('gulp-rename');
// @see: https://github.com/jonschlinkert/gulp-htmlmin
var htmlmin = require('gulp-htmlmin');

var paths = {
    src: {
        html: 'app/resources/views/**.html',
        css: [
            'vendors/normalize.css/*.css',
            'app/resources/views/blocks/**/*.css'
        ],
        js: 'app/resources/views/**.js'
    },
    dest: {
        html: './',
        css: 'compiled/css/',
        js: 'compiled/js/'
    }
};

gulp.task('html', function () {
    gulp.src(paths.src.html)
        .pipe(rename('index.html'))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(paths.dest.html));
});

// @see: https://github.com/contra/gulp-concat
var concat = require('gulp-concat');

gulp.task('css', function () {
    gulp.src(paths.src.css)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(paths.dest.css));
});

gulp.task('js', function () {});

gulp.task('default', [
    'css',
    'js',
    'html'
]);

gulp.task('watch', ['default'], function() {
    gulp.watch(paths.src.js, ['js']);
    gulp.watch(paths.src.css, ['css']);
    gulp.watch(paths.src.html, ['html']);
});
