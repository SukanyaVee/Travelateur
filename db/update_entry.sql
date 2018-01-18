UPDATE travelateur_entries SET title=$2, type=$3, journal=$4, location=$5, year=$6 WHERE eid=$1  
RETURNING *;