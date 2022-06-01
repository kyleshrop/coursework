from flask import Flask, request

app = Flask(__name__)
app.config['DEBUG'] = True


@app.route('/tocaps', methods=['GET'])
def search():
    args = request.args.to_dict()
    s = args.get('s')
    return s.upper()
