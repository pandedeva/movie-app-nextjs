"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto md:space-x-6">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt="poster"
            width={500}
            height={300}
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.backdrop_path
            }`}
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          className="p-2 space-y-3"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Movie;
