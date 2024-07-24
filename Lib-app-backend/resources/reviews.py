# resources/reviews.py
from flask_restful import Resource
from models import Review, db
from flask import request, jsonify

class ReviewsResource(Resource):
    def get(self):
        book_id = request.args.get('book_id')
        if not book_id:
            return {"message": "Book ID is required"}, 400

        reviews = Review.query.filter_by(book_id=book_id).all()
        serialized_reviews = [review.serialize() for review in reviews]
        return jsonify({"reviews": serialized_reviews})

    def post(self):
        data = request.get_json()
        new_review = Review(
            comment=data['comment'],
            user_id=data['user_id'],
            book_id=data['book_id']
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.serialize(), 201
