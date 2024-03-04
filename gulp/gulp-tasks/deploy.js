import { plugins } from '../plugins';

plugins.gulp.task('deploy', (cb) => {
    plugins.deploy.publish(plugins.path.join(process.cwd(), 'app'), cb);
});
