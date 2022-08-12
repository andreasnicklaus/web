module.exports = {
    devServer: {
        port: 12345,
        headers: {
            'Access-Control-Allow-Private-Network': true,
            'Access-Control-Allow-Origin': '*',
        },
        publicPath: process.env.NODE_ENV === "production" ? "/mywebsite/": "/"
    },
}
