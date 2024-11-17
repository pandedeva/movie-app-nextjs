import Image from "next/image";
import React from "react";

const MoviePage = async ({ params }) => {
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json();
  console.log(movie);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto md:space-x-6">
        <Image
          alt="poster"
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          className="rounded-lg"
        />

        <div className="p-2 space-y-3">
          <h2 className="text-xl font-bold ">
            {movie.title || movie.original_name}
          </h2>
          <p className="text-lg ">{movie.overview}</p>
          <p className="">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p>
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
