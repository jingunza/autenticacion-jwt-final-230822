"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# create Flask app
api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)













# @api.route("/token", methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     # Consulta la base de datos por el email y la contraseña
#     user = User.filter.query(email=email, password=password).first()
#     if user is None:
#         # the user was not found on the database
#         return jsonify({"msg": "Bad username or password"}), 401
#     else:
#         # crea un nuevo token con el id de usuario dentro
#         access_token = create_access_token(identity=user.id)
#         return jsonify({ "token": access_token, "user_id": user.id })

# @api.route("/user", methods=["POST"])
# def register_user():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email is None or password is None:
#         return jsonify({"msg": "invalid request"}), 401
#     else: 
#         user1 = User(email=email, password=password)
#         db.session.add(user1)
#         db.session.commit()
#         return jsonify("ok"), 200