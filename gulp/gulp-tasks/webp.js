import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

const { argv } = plugins.yargs;
const production = !!argv.production;

plugins.gulp.task('webp', () => {
    plugins.gulpif(production, plugins.del.sync([`${paths.avifWebp.app}/*.webp`]));
    return plugins.gulp.src(paths.avifWebp.src)
        .pipe(plugins.gulpif(!production, plugins.newer(paths.avifWebp.app)))
        .pipe(plugins.webp())
        .pipe(plugins.gulp.dest(paths.avifWebp.app))
        .pipe(plugins.debug({
            title: 'Images',
        }))
        .on('end', plugins.browsersync.reload);
});
