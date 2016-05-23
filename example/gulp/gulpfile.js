var gulp = require("gulp");
var cleanCss = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var less = require("gulp-less");
var nodemon = require("gulp-nodemon");
gulp.task("mincss",function(){
	gulp.src("src/css/*.css")
		.pipe(cleanCss())
		.pipe(gulp.dest("dist/css"))
});
gulp.task("minjs",function(){
	gulp.src("src/script/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/script"))
});
gulp.task("less",function(){
	gulp.src("src/less/*.less")
		.pipe(less())
		.pipe(gulp.dest("dist/css"))
})
gulp.task('develop', function () {
  nodemon({ script: 'server.js'
          , ext: 'html js'
          , ignore: ['ignored.js']
          , tasks: ['lint'] })
    .on('restart', function () {
      console.log('restarted!')
    })
})
gulp.task("watch",function(){
	gulp.watch("src/css/*.css",["mincss"]);
	gulp.watch("src/script/*.js",["minjs"]);
	gulp.watch("src/less/*.less",["less"]);
	gulp.watch("server.js",["develop"]);

});
gulp.task("default",["mincss","minjs","less","develop","watch"]);
