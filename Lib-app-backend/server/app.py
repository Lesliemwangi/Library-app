from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api, Resource
from flask_cors import CORS
from sqlalchemy.orm import validates
from models import db, User, Book, Genre, Review

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)  # Enable CORS

db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)

# Route to initialize genres
@app.route('/initialize_genres', methods=['POST'])
def initialize_genres():
    genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery','Biography', 'Romance', 'History']
    for genre_name in genres:
        if not Genre.query.filter_by(name=genre_name).first():
            genre = Genre(name=genre_name)
            db.session.add(genre)
    db.session.commit()
    return jsonify({"message": "Genres added successfully!"}), 201

# Routes for CRUD operations
class UserResource(Resource):
    def post(self):
        data = request.get_json()
        try:
            new_user = User(username=data['username'], email=data['email'], password=data['password'])
            db.session.add(new_user)
            db.session.commit()
            return new_user.serialize(), 201
        except KeyError as e:
            return {'error': f'Missing required field: {e.args[0]}'}, 400
        except ValueError as e:
            return {'error': str(e)}, 400

class BookResource(Resource):
    def get(self, book_id=None):
        if book_id:
            book = Book.query.get_or_404(book_id)
            return book.serialize()
        else:
            books = Book.query.all()
            return [book.serialize() for book in books]
    
    def post(self):
        data = request.get_json()
        required_fields = ['title', 'author', 'description', 'publication_year', 'genre_id', 'image_url', 'user_id']
        
        for field in required_fields:
            if field not in data:
                return {'error': f'Missing required field: {field}'}, 400
        
        # Check if genre_id exists
        if not Genre.query.filter_by(id=data['genre_id']).first():
            return {'error': 'Invalid genre_id'}, 400
        
        try:
            new_book = Book(
                title=data['title'],
                author=data['author'],
                description=data['description'],
                publication_year=data['publication_year'],
                genre_id=data['genre_id'],
                image_url=data['image_url'],
                user_id=data['user_id']
            )
            db.session.add(new_book)
            db.session.commit()
            return new_book.serialize(), 201
            
        except ValueError as e:
            db.session.rollback()
            return {'error': str(e)}, 400

class ReviewResource(Resource):
    def post(self):
        data = request.get_json()
        try:
            new_review = Review(
                comment=data['comment'],
                user_id=data['user_id'],
                book_id=data['book_id']
            )
            db.session.add(new_review)
            db.session.commit()
            return new_review.serialize(), 201
        except KeyError as e:
            return {'error': f'Missing required field: {e.args[0]}'}, 400
        except ValueError as e:
            return {'error': str(e)}, 400

class GenreResource(Resource):
    def get(self):
        genres = Genre.query.all()
        return [genre.serialize() for genre in genres]

api.add_resource(UserResource, '/users')
api.add_resource(BookResource, '/books', '/books/<int:book_id>')
api.add_resource(ReviewResource, '/reviews')
api.add_resource(GenreResource, '/genres')

if __name__ == '__main__':
    app.run(debug=True)
