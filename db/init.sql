DROP TABLE travelateur_entries;
DROP TABLE travelateur_users;

CREATE TABLE travelateur_users (
    uid SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    city TEXT,
    country TEXT,
    email TEXT UNIQUE,
    password TEXT
);

CREATE TABLE travelateur_entries (
    eid SERIAL PRIMARY KEY,
    type TEXT,
    title TEXT,
    image TEXT,
    journal TEXT,
    location TEXT,
    year INTEGER,
    uid INTEGER REFERENCES travelateur_users (uid)
);

SELECT * FROM travelateur_entries;
SELECT * FROM travelateur_users;