import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

plugins.gulp.task('serve', () => {
    plugins.browsersync.init({
        server: `${paths.productFolder}/`,
        host: '192.168.1.1',
        port: 3000,
        notify: true,
        tunnel: true,
    });

    plugins.gulp.watch(paths.html.watch, plugins.gulp.parallel('views'));
    plugins.gulp.watch(paths.styles.watch, plugins.gulp.parallel('styles'));
    plugins.gulp.watch(paths.scripts.watch, plugins.gulp.parallel('scripts'));
    plugins.gulp.watch(paths.sprites.watch, plugins.gulp.parallel('sprites'));
    plugins.gulp.watch(paths.images.watch, plugins.gulp.parallel('images'));
    plugins.gulp.watch(paths.avifWebp.watch, plugins.gulp.parallel('avif'));
    plugins.gulp.watch(paths.avifWebp.watch, plugins.gulp.parallel('webp'));
    plugins.gulp.watch(paths.fonts.watch, plugins.gulp.parallel('fonts'));
});
