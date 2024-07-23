import logging
from flask import Flask, jsonify
from flask_restful import Api
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from models import db, Book
from resources.users import Signup, Login
from resources.books import BookResource
from resources.add_book import AddBookResource

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

# Add routes for resources
api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')
api.add_resource(BookResource, '/books', '/books/<int:book_id>')
api.add_resource(AddBookResource, '/add_book')

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)  
    app.run(debug=True)
