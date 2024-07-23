from flask_restful import Resource, reqparse
from flask_bcrypt import Bcrypt
from werkzeug.security import check_password_hash
from models import User, db
from flask import current_app as app

bcrypt = Bcrypt()


class Signup(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('firstname', required=True, help="First name is required")
    parser.add_argument('lastname', required=True, help="Last name is required")
    parser.add_argument('username', required=True, help="Username is required")
    parser.add_argument('email', required=True, help="Email address is required")
    parser.add_argument('password', required=True, help="Password is required")

    def post(self):
        try:
            data = self.parser.parse_args()
            hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

            email = User.query.filter_by(email=data['email']).first()
            if email:
                return {"message": "Email address already taken", "status": "fail"}, 422

            user = User(
                firstname=data['firstname'],
                lastname=data['lastname'],
                username=data['username'],
                email=data['email'],
                password=hashed_password
            )
            db.session.add(user)
            db.session.commit()

            return {"message": "User registered successfully", "status": "success", "user": user.serialize()}
        except Exception as e:
            app.logger.error(f"Error registering user: {e}")
            return {"message": "Internal Server Error"}, 500
        
class Login(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('email', required=True, help="Email address is required")
    parser.add_argument('password', required=True, help="Password is required")

    def post(self):
        try:
            data = self.parser.parse_args()
            user = User.query.filter_by(email=data['email']).first()
            if user and bcrypt.check_password_hash(user.password, data['password']):
                return {"message": "Login successful", "status": "success", "user": user.serialize()}
            return {"message": "Invalid email/password", "status": "fail"}, 403
        except Exception as e:
            app.logger.error(f"Error during login: {e}")
            return {"message": "Internal Server Error"}, 500