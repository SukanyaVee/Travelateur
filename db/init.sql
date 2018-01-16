CREATE TABLE travelateur_users (
    uid SERIAL,
    firstName TEXT,
    lastName TEXT,
    city TEXT,
    country TEXT,
    username TEXT,
    password TEXT
);

CREATE TABLE travelateur_entries (
    eid SERIAL,
    type TEXT,
    title TEXT,
    image TEXT,
    journal TEXT,
    location TEXT,
    year INT,
    uid INT foreign key
);

