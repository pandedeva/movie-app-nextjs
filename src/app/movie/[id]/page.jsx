import Movie from "@/components/movie/Movie";
import React from "react";

const MoviePage = async ({ params }) => {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json();

  return (
    <>
      <Movie movie={movie} />
    </>
  );
};

export default MoviePage;
