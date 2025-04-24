from flask import Flask


server = Flask(__name__, static_url_path='', static_folder='../user')


@server.route("/", defaults={"path": ""})
def serveringing(path):
    """Serve the basic client... always."""
    return server.send_static_file('index.html')


if __name__ == "__main__":
    # development server; gunicorn imports server in production
    server.run(host="0.0.0.0", port=44448, debug=True)
