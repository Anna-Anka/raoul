import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

const sass = plugins.gulpsass(plugins.dartsass);

const { argv } = plugins.yargs;
const normal = !!argv.normal;
const production = !!argv.production;

plugins.gulp.task('styles', () => {
    plugins.gulpif(production || normal, plugins.del.sync([paths.styles.app]));
    return plugins.gulp.src(paths.styles.src)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>',
            }),
        ))
        .pipe(sass())
        .pipe(plugins.groupmedia())
        .pipe(plugins.autoprefixer({
            cascade: false,
            grid: true,
            overrideBrowserslist: ['last 5 versions'],
        }))
        .pipe(plugins.gulpif(!normal, plugins.mincss({
            compatibility: 'ie8',
            level: {
                1: {
                    specialComments: 0,
                    removeEmpty: true,
                    removeWhitespace: true,
                },
                2: {
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false,
                },
            },
        })))
        .pipe(plugins.plumber.stop())
        .pipe(plugins.gulpif(normal, plugins.sourcemaps.write('./maps/')))
        .pipe(plugins.gulp.dest(paths.styles.app))
        .pipe(plugins.debug({
            title: 'CSS files',
        }))
        .on('end', plugins.browsersync.reload);
});
