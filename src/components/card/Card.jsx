import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="group ">
      <Link href={`/movie/${result.id}`}>
        <Image
          alt="poster"
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            result.poster_path || result.backdrop_path
          }`}
          className="rounded-lg group-hover:opacity-60 transition-opacity duration-300"
        />
        <div className="">
          {/* <p className="line-clamp-2">{result.overview}</p> */}
          <h2 className="text-lg font-bold truncate">
            {result.title || result.original_name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-2 ml-5" />
            <span>{result.vote_count}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
