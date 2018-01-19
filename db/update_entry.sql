UPDATE travelateur_entries SET title=$2, type=$3, image=$4, location=$5, year=$6 WHERE eid=$1  
RETURNING *;

-- UPDATE travelateur_entries SET image=$2 WHERE eid=$1  
-- RETURNING *;