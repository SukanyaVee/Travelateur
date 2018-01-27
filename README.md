Personal Project - created during immersive web development bootcamp at DevMountain, Phoenix


**Travelateur** Travel centric photo-blogging website
========================================
A react-based website that lets user register, login and upload photos and journal notes and displays them in a gallery. Users upload their photo and journal entries along with geolocation information from Google Maps API. Users can also search for other users' posts based on destination. Google Places API is used to make recommendations on users' search. 3rd party API Unsplash was used to create an inspiration board of popular attractions. The app was designed to be responsive to different devices. The site is available at www.travelateur.com. Users are authenticated at each session, and use full CRUD to communicate through HTTP and express server to manipulate a Postgres database that stores user data as well as the photo/journal entries of each user. 

Technologies used
--------------------------
1. React based front end
2. Express/NodeJS based backend
2. POstgreSQL database