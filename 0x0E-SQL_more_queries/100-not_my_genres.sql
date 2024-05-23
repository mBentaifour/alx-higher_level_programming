-- This script uses the database to list all genres not linked to the
-- show Dexter
SELECT tv_genres.name
FROM tv_genres
LEFT JOIN(
	SELECT tv_genres.id, tv_genres.name -- Query to get Dexter genres
	FROM tv_genres
