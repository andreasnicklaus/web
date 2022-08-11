from backend.server import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(host=app.config.get('HOST'), port=app.config.get('PORT'))
