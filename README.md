# Clone repo
```
git clone https://github.com/aryamankukal/Take_Home_Hacker_Profile.git
```
# get into backend directory
```
cd Take_Home_Hacker_Profile/backend
```
# create virtual env
```
python3 -m venv venv
source venv/bin/activate
```
# install dependencies
```
pip install -r requirements.txt
```
# run flask app
```
flask run
```
or
```
python app.py
```
# set up react
```
cd ../frontend
```
# go to frontend dir
```
npm install
npm start
```

# How I approached the project

- I used React.js for the frontend user interface and to manage the badge creation process
- Used Flask for the backend, setting up a REST api with it to handle the form submissions, database storage/access, and generating the QR code 
- Used SQLite with SQLAlchemy to store badge data (all data can be seen through some SQL calls on the badges.db file in the instances folder
- Implemented QR code generation with the qrcode library 
- Used Axios to handle communication between the frontend and backend

# What Id do with more time 

I spent around 8-9 hours on this and still was not able to implement a few things I would've liked to. Specifically:

- I would store the QR codes in the badges.db database instead of in a folder
- I would like to have added some more fields with more info about the user, like their skillsets, work style, etc.
- Implement a dropdown for the university part of the form where user can search up their college and pick it from the csv, but I resorted to just having them type it out normally
- Better UI/UX/transitions
