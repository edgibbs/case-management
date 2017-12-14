const environment = require('./environment');
const devConfig = environment.toWebpackConfig();

if (process.env.DOCKER_DEV) {
  process.stdout.write('Using watcher for docker webpack-dev-server\n');
  devConfig.devServer.watchOptions = {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 500,
  };
}

module.exports = devConfig;
