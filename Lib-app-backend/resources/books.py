from flask_restful import Resource, reqparse
from models import Book, Genre, db

book_parser = reqparse.RequestParser()
book_parser.add_argument('title', type=str, required=True, help='Title is required')
book_parser.add_argument('author', type=str, required=True, help='Author is required')
book_parser.add_argument('description', type=str, required=True, help='Description is required')
book_parser.add_argument('publication_year', type=int, required=True, help='Publication year is required')
book_parser.add_argument('image_url', type=str, required=True, help='Image URL is required')
book_parser.add_argument('genre', type=str, required=True, help='Genre is required')
book_parser.add_argument('user_id', type=int, required=True, help='User ID is required')
book_parser.add_argument('reviews', type=list, help='List of reviews', location='json')

class BookResource(Resource):
    def get(self, book_id=None):
        if book_id:
            book = Book.query.get_or_404(book_id)
            return book.serialize(), 200
        else:
            books = Book.query.all()
            return [book.serialize() for book in books], 200

    def post(self):
        args = book_parser.parse_args()
        genre = Genre.query.filter_by(name=args['genre']).first()
        if not genre:
            genre = Genre(name=args['genre'])
            db.session.add(genre)
            db.session.commit()
        book = Book(
            title=args['title'],
            author=args['author'],
            description=args['description'],
            publication_year=args['publication_year'],
            image_url=args['image_url'],
            genre_id=genre.id,
            user_id=args['user_id'],
            reviews=args['reviews'] if args['reviews'] else []
        )
        db.session.add(book)
        db.session.commit()
        return book.serialize(), 201
