from app import app, db, Genre, User, Book, Review

def seed_genres():
    with app.app_context():
        genres = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery','Biography', 'Romance', 'History']
        for genre_name in genres:
            if not Genre.query.filter_by(name=genre_name).first():
                genre = Genre(name=genre_name)
                db.session.add(genre)
        db.session.commit()
        print("Genres seeded successfully!")

def seed_users_books_reviews():
    with app.app_context():
        # Seed some initial users, books, and reviews for demonstration
        user1 = User(username='user1', email='user1@example.com', password='password1')
        user2 = User(username='user2', email='user2@example.com', password='password2')

        # Add users to the session
        db.session.add_all([user1, user2])
        db.session.commit()

        book1 = Book(
            title='Book 1',
            author='Author A',
            description='Description of Book 1',
            publication_year=2023,
            genre_id=1,  # Replace with the ID of the genre 'Science Fiction'
            image_url='https://example.com/book1.jpg',
            user_id=user1.id
        )
        book2 = Book(
            title='Book 2',
            author='Author B',
            description='Description of Book 2',
            publication_year=2024,
            genre_id=2,  # Replace with the ID of the genre 'Fantasy'
            image_url='https://example.com/book2.jpg',
            user_id=user2.id
        )

        # Add books to the session
        db.session.add_all([book1, book2])
        db.session.commit()

        review1 = Review(comment='Great book!', user_id=user1.id, book_id=book1.id)
        review2 = Review(comment='Interesting read!', user_id=user2.id, book_id=book2.id)

        # Add reviews to the session
        db.session.add_all([review1, review2])
        db.session.commit()

        print("Users, Books, and Reviews seeded successfully!")

if __name__ == '__main__':
    seed_genres()
    seed_users_books_reviews()