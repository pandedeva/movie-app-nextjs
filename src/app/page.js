import Results from "@/components/Results";
import React from "react";
const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  // mencari genre yang dipilih, kalau tidak ada maka default trending
  const genre = searchParams?.genre || "trending";

  const res = await fetch(
    // kalau genre topRated maka ambil data topRated kalau tidak maka ambil data trending

    `https://api.themoviedb.org/3/${
      genre === "topRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    // nextjs akan merefresh setiap 10000 detik
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
