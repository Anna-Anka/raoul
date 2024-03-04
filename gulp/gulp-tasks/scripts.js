import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';
import webpackConfig from '../../webpack.config';

const { argv } = plugins.yargs;
const production = !!argv.production;

webpackConfig.mode = production ? 'production' : 'development';
webpackConfig.devtool = production ? false : 'source-map';

plugins.gulp.task('scripts', () => {
    plugins.gulpif(production, plugins.del.sync([paths.scripts.app]));
    const result = plugins.gulp.src(paths.scripts.src)
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>',
            }),
        ))
        .pipe(plugins.webpackStream(webpackConfig), plugins.webpack)
        .pipe(plugins.gulp.dest(paths.scripts.app))
        .pipe(plugins.debug({
            title: 'JS files',
        }))
        .pipe(plugins.browsersync.stream());
    return result;
});
