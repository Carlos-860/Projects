import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import moviesImageData from '../moviesImageData';

const Movie = () => {
  const { stringify } = require('roman-numerals-convert');

  const { movieId } = useParams();

  const url = 'https://swapi.dev/api/films/';

  // State Object
  const [movies, setMovies] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });

  const fetchData = async () => {
    // get the data from the api
    const response = await fetch(url);
    // convert the data to json
    const json = await response.json();

    // set state with the result
    setMovies(() => {
      return {
        ...movies,
        isLoaded: true,
        items: json.results,
      };
    });
  };

  useEffect(() => {
    // declare the async data fetching function

    // call the function
    fetchData().catch((error) =>
      setMovies({
        ...movies,
        isLoaded: true,
        error: error,
      })
    );
  }, []);

  const movieShow = movies.items.map((items) => items).find((item) => item.episode_id == movieId);
  const movieImg = moviesImageData.find((movie) => {
    return movie.id === Number(movieId);
  });

  return (
    <section className="p-5">
      {movieShow && (
        <Helmet>
          <title>{movieShow.title} - Star Wars</title>
          <meta name="description" content={movieShow.opening_crawl.slice(0, 120)} />
          <link rel="canonical" href={`http://localhost:3000/movie/${Number(movieId)}`} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${movieShow.title} - Star Wars`} />
          <meta property="og:description" content={movieShow.opening_crawl.slice(0, 120)} />
          <meta property="og:url" content={`http://localhost:3000/movie/${Number(movieId)}`} />
          <meta property="og:site_name" content="Star Wars" />
          <meta property="og:image" content={require(`../images/star-wars-logo.svg`).default} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={`${movieShow.title} - Star Wars`} />
          <meta name="twitter:url" content={`http://localhost:3000/movie/${Number(movieId)}`} />
          <meta name="twitter:image" content={require(`../images/star-wars-logo.svg`).default} />
        </Helmet>
      )}

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
        <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-3">
          <div className="col-span-1">
            <img src={require(`../images/${movieImg.imgUrl}`)} alt={`${movieShow.title} Poster`} width="300" className="mx-auto" />
          </div>
          <div className="md:col-span-2">
            <span className="text-lg">Episode {stringify(movieShow.episode_id)}</span>
            <h1 className="my-4 text-3xl font-bold uppercase">{movieShow.title}</h1>

            <div className="flex flex-col flex-wrap items-start gap-4 my-4 lg:gap-8 sm:flex-row">
              <ul className="md:basis-44">
                <li className="text-light-gray">Director</li>
                <li className="font-bold">{movieShow.director}</li>
              </ul>
              <ul className="md:basis-44">
                <li className="text-light-gray">Producer</li>
                <li className="font-bold">{movieShow.producer}</li>
              </ul>
              <ul className="md:basis-44">
                <li className="text-light-gray">Release Date</li>
                <li className="font-bold">{movieShow.release_date}</li>
              </ul>
            </div>

            <p className="text-xl text-light-gray">{movieShow.opening_crawl}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Movie;
