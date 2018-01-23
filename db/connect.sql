SELECT travelateur_users.firstname, travelateur_users.lastname, travelateur_entries.title, travelateur_entries.image 
FROM travelateur_entries JOIN travelateur_users ON travelateur_entries.location=travelateur_users.COUNTRY 
WHERE travelateur_entries.location=$1;