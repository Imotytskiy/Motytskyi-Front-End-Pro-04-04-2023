import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss)
    .pipe(app.plugins.concat("styles.scss"))
    .pipe(app.plugins.plumber())
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true,
        })
      )
    )
    .pipe(
      sass({ outputStyle: app.isBuild ? "compressed" : "expanded" }).on(
        "error",
        sass.logError
      )
    )
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(app.gulp.dest(app.path.build.scss))
    .pipe(app.plugins.browserSync.stream());
};
