INSERT INTO travelateur_users 
(firstName, lastName, city, country, email, password, pic)
VALUES
($1,$2,$3,$4,$5,$6,'')

RETURNING *;