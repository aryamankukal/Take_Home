from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Badge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    university = db.Column(db.String(100))
    major = db.Column(db.String(100))
    graduation_date = db.Column(db.String(20))
    github = db.Column(db.String(100))
    qr_code_url = db.Column(db.String(200))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "university": self.university,
            "major": self.major,
            "graduation_date": self.graduation_date,
            "github": self.github,
            "qr_code_url": self.qr_code_url
        }

