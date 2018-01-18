INSERT INTO travelateur_entries 
(title, type, image, journal, location, year, uid)
VALUES
($1,$2,$3,$4,$5,$6,$7)
RETURNING *;