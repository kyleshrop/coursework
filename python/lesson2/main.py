import json
from flask import request
from flask import jsonify
from flask import Flask, request

app = Flask(__name__)
app.config['DEBUG'] = True


@app.route('/tocaps', methods=['GET'])
def search():
    args = request.args.to_dict()
    s = args.get('s')
    return s.upper()


@app.route('/tocaps', methods=['POST'])
def grabtheip():
    args = request.args.to_dict()
    s = args.get('s')
    ip_addr = request.remote_addr
    finalip = str(ip_addr)
    return s.upper() + " " + finalip