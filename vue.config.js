console.log(process.env.NODE_ENV)

module.exports = {
    publicPath: "/mywebsite/",
    devServer: {
        port: 12345,
        headers: {
            'Access-Control-Allow-Private-Network': true,
            'Access-Control-Allow-Origin': '*',
        },
    },
}
