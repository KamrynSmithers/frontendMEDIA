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
