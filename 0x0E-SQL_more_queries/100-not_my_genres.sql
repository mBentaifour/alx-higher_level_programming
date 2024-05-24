--  uses the hbtn_0d_tvshows database to list all genres not linked to the show
--  Dexter
SELECT DISTINCT tv_genres.name
FROM tv_shows
LEFT JOIN tv_show_genres ON tv_show_genres.show_id = tv_shows.id
LEFT JOIN tv_genres ON tv_show_genres.genre_id = tv_genres.id
