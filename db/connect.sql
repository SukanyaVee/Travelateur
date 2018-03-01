SELECT travelateur_users.firstname, travelateur_users.lastname, travelateur_users.pic, travelateur_entries.title, travelateur_entries.type, travelateur_entries.image, travelateur_entries.journal, travelateur_users.uid, travelateur_entries.eid, travelateur_faves.fid
FROM travelateur_entries JOIN travelateur_users ON travelateur_entries.uid=travelateur_users.uid 
JOIN travelateur_faves ON travelateur_users.uid=travelateur_faves.fuid
WHERE travelateur_entries.location=$1;