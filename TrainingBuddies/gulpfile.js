var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var react = require("gulp-react");
var babel = require("gulp-babel");
var ejs = require("gulp-ejs");

/*gulp.task("bundle", function () {

    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});*/

gulp.task("bundle", function(){
    console.log("hej");
    browserify([
            "./app/main.jsx"
        ]).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"));


    browserify([
            "./app/loginPage.jsx"
        ]).transform(reactify)
        .bundle()
        .pipe(source("loginPage.js"))
        .pipe(gulp.dest("app/dist"));

});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.ejs", "app/profile.ejs","app/lib/bootstrap-css/css/bootstrap.min.css",
        "app/style.css"])
        .pipe(gulp.dest("app/dist"));
});


gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});