const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const path = require('path');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    output: {
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new WebpackPwaManifestPlugin({
            name: 'Petgram - Your favorite app',
            short_name: 'Petgram',
            description: 'Whit Petgram you can found pics of domestica animals',
            background_color: '#fff',
            theme_color: '#b1a',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512],
                    purpose: 'maskable any'
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            maximumFileSizeToCacheInBytes: 5000000,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',

                    },

                },
                {
                    urlPattern: new RegExp('https://petgram-api-fredyflemus.vercel.app'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api'
                    }
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}
