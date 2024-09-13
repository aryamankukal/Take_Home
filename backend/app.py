from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from qr_code_generator import generate_qr_code
import os
from models import db, Badge

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///badges.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# need to add multiple resourcs???? - fix
CORS(app, resources={
    r"/api/*": {"origins": "http://localhost:3000"},
    r"/qrcodes/*": {"origins": "http://localhost:3000"}
})

@app.route('/qrcodes/<filename>')
def serve_qrcode(filename):
    return send_from_directory('qrcodes', filename)

@app.route('/api/badges', methods=['POST'])
def create_badge():
    data = request.json
    badge = Badge(
        name=data['name'],
        university=data['university'],
        major=data['major'],
        graduation_date=data['graduation_date'],
        github=data['github']
    )
    db.session.add(badge)
    db.session.commit()


    profile_url = f"http://localhost:3000/profile/{badge.id}"
    qr_path = generate_qr_code(profile_url, badge.id)
    badge.qr_code_url = qr_path  
    db.session.commit()

    return jsonify(badge.to_dict()), 201

@app.route('/api/badges/<int:id>', methods=['GET'])
def get_badge(id):
    badge = Badge.query.get_or_404(id)
    return jsonify(badge.to_dict())

# @app.route('/api/badges', methods=['GET'])
# def get_all_badges():
#     badges = Badge.query.all()
#     return jsonify([badge.to_dict() for badge in badges])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
