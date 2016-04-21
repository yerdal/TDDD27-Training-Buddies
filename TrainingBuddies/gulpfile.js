var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var react = require("gulp-react");
var babel = require("gulp-babel");
 

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});
gulp.task("bundle", function () {
    return browserify({
        entries: "./app/activityPage.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("activityPage.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css",
        "app/style.css", "app/activity.html"])
        .pipe(gulp.dest("app/dist"));
});


gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});