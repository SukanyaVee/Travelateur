UPDATE travelateur_users SET firstName = $2, lastname = $3, city=$4, country=$5, email=$6, password=$7 WHERE uid = $1
RETURNING *;
