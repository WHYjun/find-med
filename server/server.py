# -*- coding: utf-8 -*-

from flask import Flask, request
app = Flask(__name__)

users = [] # TODO: Remove after creating DB

@app.route(/)
def hello():
    return 'hello\n'

@app.route('/login', methods = ['POST']
def login():
    username = request.json['username']
    userExisted = username in users
    if userExisted:
        abort(400)
    pass

if __name__ == '__main__':
    app.run(debug=True)