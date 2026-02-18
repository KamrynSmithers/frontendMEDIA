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

