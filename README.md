Personal Project - created during immersive web development bootcamp at DevMountain, Phoenix


**Travelateur** Travel centric photo-blogging website
========================================
A react-based website that lets user register, login and upload photos and journal notes and displays them in a gallery. Users upload their photo and journal entries along with geolocation information from Google Maps API. Users can also search for other users' posts based on destination. Google Places API is used to make recommendations on users' search. 3rd party API Unsplash was used to create an inspiration board of popular attractions. The app was designed to be responsive to different devices. The site is available at www.travelateur.com. Users are authenticated at each session, and use full CRUD to communicate through HTTP and express server to manipulate a Postgres database that stores user data as well as the photo/journal entries of each user. 

This was my first full stack website, and I am particularly proud of the front end design and interactivity. The app is fully responsive to handheld media.

Technologies used
--------------------------
1. React based front end
2. Express/NodeJS based backend
3. POstgreSQL database
4. geolocation
5. bcrypt

Working views
------------------------------
Below are some screenshots from the working site. 

Sign in page: 

![Alt text](/src/components/assets/travel1.png "Sign in exncrypted by bcryt-hash")


Dashboard with user uploads:

![Alt text](/src/components/assets/travel2.png "Dashboard")


User entries using geolocation:

![Alt text](/src/components/assets/travel3.png "geolocation for photo or note upload")


Pinterest style travel inspiration board from unsplash:

![Alt text](/src/components/assets/travel4.png "Pinterest style travel inspiration board from unsplash")


Country search that returns user 'pins' as well as google laces results:

![Alt text](/src/components/assets/travel5.png "country search that returns user 'pins' as well as google laces results")