from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'{self.email}'

    def serialize(self):
        return {
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Animals(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    animal_name = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "animal_name": self.animal_name,
        }