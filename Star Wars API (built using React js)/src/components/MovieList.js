import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import MovieCard from './MovieCard';

const MovieList = () => {
  // store api link in a variable
  const url = 'https://swapi.dev/api/films/';

  // declare a movies state variable that will store the api call response object
  const [movies, setMovies] = useState({
    error: null,
    isLoaded: false,
    items: {},
  });

  const fetchData = async () => {
    // get the data from the api
    const response = await fetch(url);
    // convert the data to json
    const json = await response.json();

    // set state with the result
    setMovies({
      ...movies,
      isLoaded: true,
      items: json,
    });
  };

  useEffect(() => {
    // call the async function
    fetchData().catch((error) =>
      setMovies({
        ...movies,
        error: error,
      })
    );
  }, []);

  return (
    <section className="container p-5 mx-auto">
      <Helmet>
        <title>Classical Movie Collection - Star Wars</title>
        <meta name="description" content="A collection of classical movie for your viewing." />
        <link rel="canonical" href="http://localhost:3000/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Classical Movie Collection - Star Wars" />
        <meta property="og:description" content="A collection of classical movie for your viewing." />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:site_name" content="Star Wars" />
        <meta property="og:image" content={require(`../images/star-wars-logo.svg`).default} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Classical Movie Collection - Star Wars" />
        <meta name="twitter:url" content="http://localhost:3000/" />
        <meta name="twitter:image" content={require(`../images/star-wars-logo.svg`).default} />
      </Helmet>

      {movies.error ? (
        <div className="my-40 text-center">
          <p className="text-lg">Error: {movies.error.message}</p>
        </div>
      ) : !movies.isLoaded ? (
        <div className="my-40 text-center">
          <svg className="inline-block w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Proccessing...</span>
        </div>
      ) : (
        <div>
          <h1 className="mb-5 text-3xl text-center uppercase">
            <span className="font-bold">Classical Movie</span> Collection
          </h1>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {movies.items.results.map((item, index) => (
              <MovieCard title={item.title} id={item.episode_id} key={index} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieList;
