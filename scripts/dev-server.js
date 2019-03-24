const chalk = require('chalk');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../config/webpack.config.js');
const paths = require('../config/paths');

const host = process.env.HOST;
const port = process.env.PORT;

const compiler = Webpack(config);

const server = new WebpackDevServer(compiler, {
    contentBase: paths.public,
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    quiet: true,
    watchContentBase: true,
    watchOptions: {
        ignored: /node_modules/,
    },
});

server.listen(port, host, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`${chalk.cyan(`Starting the development server at http://localhost:${port}`)}\n`);
});
