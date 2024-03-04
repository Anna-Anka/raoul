import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

plugins.gulp.task('zip', () => {
    plugins.del.sync([`${paths.productFolder}/*.zip`]);
    return plugins.gulp.src(`${paths.productFolder}/**/*.*`, {})
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'ZIP',
                message: 'Error: <%= error.message %>',
            }),
        ))
        .pipe(plugins.zip(`../${paths.rootFolder}.zip`))
        .pipe(plugins.gulp.dest(paths.productFolder))
        .pipe(plugins.debug({
            title: 'Zip',
        }));
});
