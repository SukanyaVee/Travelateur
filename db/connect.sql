SELECT travelateur_users.firstname, travelateur_users.lastname, travelateur_entries.title, travelateur_entries.type, travelateur_entries.image, travelateur_entries.journal, travelateur_users.uid 
FROM travelateur_entries JOIN travelateur_users ON travelateur_entries.uid=travelateur_users.uid 
WHERE travelateur_entries.location=$1;