import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

const { argv } = plugins.yargs;
const production = !!argv.production;

plugins.gulp.task('fonts', () => {
    plugins.gulpif(production, plugins.del.sync([paths.fonts.app]));
    return plugins.gulp.src(paths.fonts.src)
        .pipe(plugins.fonter({
            formats: ['woff', 'ttf'],
        }))
        .pipe(plugins.gulp.src(`${paths.fonts.src}/*.ttf`))
        .pipe(plugins.ttf2woff2())
        .pipe(plugins.gulp.dest(paths.fonts.app))
        .pipe(plugins.debug({
            title: 'Fonts',
        }));
});
