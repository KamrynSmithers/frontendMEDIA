import { useState, useEffect } from 'react';
import { getLatestMovies } from '../api/vidsrc.ts';
import MoviePlayer from '../components/MoviePlayer';
import '../movies.css';

interface Movie {
  imdb_id: string;
  tmdb_id: string;
  title: string;
  img: string;
  quality: string;
  year: string;
}

function Movies () {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getLatestMovies(page)
      .then((data) => {
        console.log('API Response:', data);
        setMovies(data.result || []);
        setLoading(false);
      })
       .catch((err) => {
        console.error('Error fetching movies:', err);
        setLoading(false);
      });
      }, [page]); 
      if (selectedMovie) {
    return (
      <MoviePlayer
        imdbId={selectedMovie.imdb_id}
        type="movie"
        onClose={() => setSelectedMovie(null)}
      />
    )
  }

  if (loading) {
    return <div className="loading">Loading movies...</div>
  }
  return (
    <div className="movies-container">
      <h1>Latest Movies</h1>
      
      {/* Pagination Controls */}
      <div className="pagination">
        <button 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)}>
          Next
        </button>
      </div>
      