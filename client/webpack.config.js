const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.tsx', // Entry point of your React application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle filename
        publicPath: '/', // Public path for assets (e.g., '/static/')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
             // TypeScript files
             {
                test: /\.tsx?$/,                
                exclude: /node_modules|test\.tsx?$/,
                use: {
                    loader: 'ts-loader', // Use ts-loader to transpile TypeScript
                },
            },
            // JavaScript/JSX files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel to transpile JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
                    },
                },
            },
            // CSS files (optional)
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Path to HTML template
            // favicon: './public/favicon.ico', // Ppath to favicon (optional)
        }),
    ],
    devServer: {
        historyApiFallback: true, // Enable HTML5 History API fallback
        proxy: {
            '/api': { 
                target: 'http://localhost:5001', 
                secure: false,
                changeOrigin: true
            }            
        },        
    },
};
