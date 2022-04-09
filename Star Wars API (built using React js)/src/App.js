// Import React, useState Hook, useEffect Hook.
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import Partials
import Header from './components/Header';
import Footer from './components/Footer';

// Import Pages Components
import MovieList from './components/MovieList';
import Movie from './components/Movie';

// Import Other Functional Components
import StructuredData from './components/StructuredData';

const App = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header />

        <Helmet>
          <script type="application/ld+json">{JSON.stringify(StructuredData)}</script>
        </Helmet>

        <main>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:movieId" element={<Movie />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
