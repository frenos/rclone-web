from flask import Flask
from flask_cors import CORS
from flask import request
import requests

app = Flask(__name__)
CORS(app)

rclone_host = 'http://192.168.1.249:5572/'
#rclone_host = 'http://localhost:5572/'
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>', methods=['GET','OPTIONS'])
def catch_all(path):
    return path

@app.route('/<path:path>', methods=['POST'])
def catch_all_post(path):
    if path != '':
        json = request.get_json()
        r = requests.post(rclone_host + path, data=request.get_json())

    return r.content

if __name__ == '__main__':
    app.run()
