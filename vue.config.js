module.exports = {
    publicPath: "/web/",
    devServer: {
        port: 12345,
        headers: {
            'Access-Control-Allow-Private-Network': true,
            'Access-Control-Allow-Origin': '*',
        },
    },
}
