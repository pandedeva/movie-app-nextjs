import Results from "@/components/Results";
import React from "react";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  const data = await res.json();

  const results = data.results;

  return (
    <div>
      {results && results.length > 0 ? (
        <Results results={results} />
      ) : (
        <h1 className="text-3xl text-center pt-6">No results found!</h1>
      )}
    </div>
  );
};

export default SearchPage;
