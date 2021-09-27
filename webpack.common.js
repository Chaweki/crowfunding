
const cleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path');


module.exports = {
    entry:'./js/main.js',
    module:{
        rules:[
          
            {
                test: /\.html$/i,
                use:["html-loader"]
            },{
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    
}