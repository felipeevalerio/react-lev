const path = require("path");

module.exports = {
    entry: path.resolve(__dirname,"src","index.js"),
    output:{
        path: path.resolve(__dirname,"public"),
        filename:"bundle.js"
    },
    devServer:{
        publicPath: "/",
        contentBase: "./public",
        hot:true
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }

}