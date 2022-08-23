"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Animals
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# create Flask app
api = Blueprint('api', __name__)

@api.route("/token", methods=["POST"])
def create_token():
    body_user = request.get_json()
    if body_user is None:
        return jsonify({"error": "Body is empty or null"}), 400

    email = body_user["email"]
    password = body_user["password"]

    user1 = User.query.filter_by(email=email, password=password).first()
    if user1 is None:
        return jsonify({"msg": "Email or password is wrong"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route("/register", methods=["POST"])
def post_user():
    request_body_user = request.get_json()
    user1 = User(email = request_body_user["email"], password = request_body_user["password"])
    db.session.add(user1)
    db.session.commit()
    return jsonify(request_body_user), 200

# @api.route("/name", methods=["GET"])
# @jwt_required()
# def query_name():
#     return jsonify("msg: Gato con Botas"), 200

@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():
    dictionary = {
        "message":"El Gato con Botas"
    }
    return jsonify(dictionary), 200


# @api.route("/name", methods=["GET"])
# @jwt_required()
# def query_name():
#     name = Animals.query.get(1)
#     name_ser = name.serialize()
#     return jsonify(name_ser), 200











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