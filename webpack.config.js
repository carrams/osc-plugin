const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: true
    },
    entry: {
        popup: path.resolve(__dirname, "./src/index_js/index-popup.js"),
        search: path.resolve(__dirname, "./src/index_js/index-search-page.js"),
        sasb: path.resolve(__dirname, "./src/index_js/index-sasb-browser.js"),
        metrics: path.resolve(__dirname, "./src/index_js/index-company-metrics.js"),
        metricComp: path.resolve(__dirname, "./src/index_js/index-metric-comparison.js"),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                {
                                    'plugins': ['@babel/plugin-proposal-class-properties']
                                }
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: 'src/html/popup.html',
            chunks: ['popup']
        }),
        new HtmlWebpackPlugin({
            filename: 'sasb-browser.html',
            template: 'src/html/sasb-browser.html',
            chunks: ['sasb']
        }),
        new HtmlWebpackPlugin({
            filename: 'search-page.html',
            template: 'src/html/search-page.html',
            chunks: ['search']
        }),
        new HtmlWebpackPlugin({
            filename: 'company-metrics.html',
            template: 'src/html/company-metrics.html',
            chunks: ['metrics']
        }),
        new HtmlWebpackPlugin({
            filename: 'metric-comparison.html',
            template: 'src/html/metric-comparison.html',
            chunks: ['metricComp']
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/manifest.json', to: '[name].[ext]' },
                { from: 'src/background.js', to: '[name].[ext]' },
                { from: 'src/*.png', to: '[name].[ext]' }
            ]
        }),
        new CleanWebpackPlugin()
    ]
}