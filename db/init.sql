CREATE TABLE travelateur_users (
    uid SERIAL UNIQUE,
    firstName TEXT,
    lastName TEXT,
    city TEXT,
    country TEXT,
    email TEXT UNIQUE,
    password TEXT
);

CREATE TABLE travelateur_entries (
    eid SERIAL,
    type TEXT,
    title TEXT,
    image TEXT,
    journal TEXT,
    location TEXT,
    year INTEGER,
    uid INTEGER REFERENCES travelateur_users (uid)
);

