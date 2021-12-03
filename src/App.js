import { Suspense } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Loader from './components/Loader';
import Layout from './components/Layout';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/HomePage';
import NoMatch from './views/NotFound';

import Cast from './components/Cast';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
