from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

convention = {
    "ix": 'ix_%(column_0_label)s',
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}
metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(80), nullable=False)
    lastname = db.Column(db.String(80), nullable=False)
    username = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)
    books = db.relationship('Book', back_populates='user')
    reviews = db.relationship('Review', back_populates='user')
    reservations = db.relationship('Reservation', back_populates='user')

    def serialize(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'username': self.username,
            'email': self.email,
        }

class Genre(db.Model, SerializerMixin):
    __tablename__ = 'genres'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    books = db.relationship('Book', back_populates='genre')

class Book(db.Model, SerializerMixin):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    publication_year = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(200), nullable=True)
    genre_id = db.Column(db.Integer, db.ForeignKey('genres.id'), nullable=False)
    genre = db.relationship('Genre', back_populates='books')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', back_populates='books')
    reviews = db.relationship('Review', back_populates='book')
    reservations = db.relationship('Reservation', back_populates='book')

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'description': self.description,
            'publication_year': self.publication_year,
            'image_url': self.image_url,
            'genre': self.genre.name if self.genre else None,
            'user': self.user.username if self.user else None
        }

class Reservation(db.Model, SerializerMixin):
    __tablename__ = 'reservations'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    reservation_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    user = db.relationship('User', back_populates='reservations')
    book = db.relationship('Book', back_populates='reservations')

    def serialize(self):
        return {
            'id': self.id,
            'user': self.user.username if self.user else None,
            'book': self.book.title if self.book else None,
            'reservation_date': self.reservation_date.isoformat()
        }

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    user = db.relationship('User', back_populates='reviews')
    book = db.relationship('Book', back_populates='reviews')

    def serialize(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'user': self.user.username if self.user else None,
            'book': self.book.title if self.book else None
        }
