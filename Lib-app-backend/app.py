from flask import Flask, request, jsonify
from flask_restful import Api
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import logging

from models import db, Reservation, User, Book
from resources.users import Signup, Login
from resources.books import BookResource
from resources.add_book import AddBookResource
from resources.reviews import ReviewsResource

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///books.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['DEBUG'] = True

CORS(app)
db.init_app(app)
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

api = Api(app)

@app.route('/books/<int:book_id>', methods=['GET', 'DELETE'])
def get_or_delete_book(book_id):
    if request.method == 'GET':
        book = Book.query.get_or_404(book_id)
        return jsonify(book.serialize()), 200
    elif request.method == 'DELETE':
        book = Book.query.get_or_404(book_id)
        db.session.delete(book)
        db.session.commit()
        return {'message': 'Book deleted successfully'}, 200
    
@app.route('/reserve', methods=['POST'])
def reserve_book():
    data = request.get_json()
    user_id = data.get('user_id')
    book_id = data.get('book_id')

    user = User.query.get(user_id)
    book = Book.query.get(book_id)

    if not user or not book:
        return jsonify({'error': 'Invalid user or book ID'}), 400

    reservation = Reservation(user_id=user_id, book_id=book_id)
    db.session.add(reservation)
    db.session.commit()

    return jsonify(reservation.serialize()), 201

@app.route('/reservations/<int:user_id>', methods=['GET'])
def get_user_reservations(user_id):
    reservations = Reservation.query.filter_by(user_id=user_id).all()
    return jsonify([reservation.serialize() for reservation in reservations]), 200

@app.route('/reservations/book/<int:book_id>', methods=['GET'])
def get_book_reservations(book_id):
    reservations = Reservation.query.filter_by(book_id=book_id).all()
    return jsonify([reservation.serialize() for reservation in reservations]), 200

@app.route('/books/<int:id>', methods=['GET'])
def get_book(id):
    try:
        book = Book.query.get(id)
        if book is None:
            return jsonify({"error": "Book not found"}), 404
        return jsonify(book.serialize())
    except Exception as e:
        app.logger.error(f"Error fetching book: {e}")
        return jsonify({"message": "Internal Server Error"}), 500

api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')
api.add_resource(BookResource, '/books', '/books/<int:id>')
api.add_resource(AddBookResource, '/add_book')
api.add_resource(ReviewsResource, '/reviews', '/reviews/<int:book_id>')

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    app.run(debug=True)
