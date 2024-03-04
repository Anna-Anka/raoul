import { paths } from '../../gulpfile.babel';
import { plugins } from '../plugins';

plugins.gulp.task('clean', () => plugins.del([`${paths.productFolder}/*`]));
