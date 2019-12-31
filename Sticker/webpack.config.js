var webpack =require('webpack');
var path=require('path');
var WriteFilePlugin =require('write-file-webpack-plugin');
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "dist/public"),
        filename:"bundle.js",
		publicPath : "public"
    },
    devServer :{	
inline:true,
contentBase:'dist/public',
port:3000
    },
	  plugins: [
       new WriteFilePlugin()
    ],
   module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /("C:\\Users\\AMG\Documents\\ReactBasic\\node_modules"|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    },
	{
		test : /\.s(a|c)ss$/,
		exclude: /("C:\\Users\\AMG\\Documents\\ReactBasic\\node_modules"|bower_components)/,
		use:[
      {loader : 'style-loader'},
      {loader : 'css-loader'},
      ///{loader : 'postcss-loader'},
     {loader : 'sass-loader'}
    ]
		
	},
	{
		test : /\.css$/,
		exclude: /("C:\\Users\\AMG\\Documents\\ReactBasic\\node_modules"|bower_components)/,
		use:[
      {loader : 'style-loader'},
      {loader : 'css-loader'},
      //if it does need to process some extra feature using this (notice that a config file is needed !)
      ///{loader : 'postcss-loader'}
      

    ]
		
	}
  ]
}
}