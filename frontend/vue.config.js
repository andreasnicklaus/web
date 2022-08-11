module.exports = {
    devServer: {
        port: 12345,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {'/api/': '/'}
            }
        },
        headers: {
            'Access-Control-Allow-Private-Network': true,
            'Access-Control-Allow-Origin': '*',
        }
    },
}
