import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

plugins.gulp.task('views', () => {
    const result = plugins.gulp.src(paths.html.src)
        .pipe(plugins.include({
            prefix: '@',
            basepath: '@file',
        }))
        .pipe(plugins.gulp.dest(paths.html.app))
        .pipe(plugins.browsersync.stream());
    return result;
});
