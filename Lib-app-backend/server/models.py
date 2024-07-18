from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    password = db.Column(db.String(120), nullable=False)
    books = db.relationship('Book', back_populates='user')
    reviews = db.relationship('Review', back_populates='user')

    @validates('username')
    def validate_username(self, key, username):
        if not username:
            raise ValueError("Username is required")
        if User.query.filter(User.username == username).first():
            raise ValueError("Username is already taken")
        return username

    @validates('email')
    def validate_email(self, key, email):
        if not email:
            raise ValueError("Email is required")
        if '@' not in email:
            raise ValueError("Invalid email address")
        if User.query.filter(User.email == email).first():
            raise ValueError("Email is already taken")
        return email

    def serialize(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

class Genre(db.Model):
    __tablename__ = 'genres'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    books = db.relationship('Book', back_populates='genre')

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    publication_year = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey('genres.id'), nullable=False)
    image_url = db.Column(db.String(200), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    genre = db.relationship('Genre', back_populates='books')
    user = db.relationship('User', back_populates='books')
    reviews = db.relationship('Review', back_populates='book')

    @validates('title')
    def validate_title(self, key, title):
        if not title:
            raise ValueError("Title is required")
        return title

    @validates('author')
    def validate_author(self, key, author):
        if not author:
            raise ValueError("Author is required")
        return author

    @validates('publication_year')
    def validate_publication_year(self, key, publication_year):
        if not publication_year:
            raise ValueError("Publication year is required")
        if not isinstance(publication_year, int):
            raise ValueError("Publication year must be an integer")
        return publication_year

    @validates('genre_id')
    def validate_genre_id(self, key, genre_id):
        if not genre_id:
            raise ValueError("Genre is required")
        if not Genre.query.get(genre_id):
            raise ValueError("Invalid genre")
        return genre_id

    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'description': self.description,
            'publication_year': self.publication_year,
            'genre': self.genre.serialize() if self.genre else None,
            'image_url': self.image_url,
            'user': self.user.serialize() if self.user else None
        }

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    user = db.relationship('User', back_populates='reviews')
    book = db.relationship('Book', back_populates='reviews')

    @validates('user_id')
    def validate_user_id(self, key, user_id):
        if not user_id:
            raise ValueError("User is required")
        if not User.query.get(user_id):
            raise ValueError("Invalid user")
        return user_id

    @validates('book_id')
    def validate_book_id(self, key, book_id):
        if not book_id:
            raise ValueError("Book is required")
        if not Book.query.get(book_id):
            raise ValueError("Invalid book")
        return book_id

    def serialize(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'user': self.user.serialize() if self.user else None,
            'book': self.book.serialize() if self.book else None
        }
