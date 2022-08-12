console.log(process.env.NODE_ENV)

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/mywebsite/" : "/",
    devServer: {
        port: 12345,
        headers: {
            'Access-Control-Allow-Private-Network': true,
            'Access-Control-Allow-Origin': '*',
        },
    },
}
