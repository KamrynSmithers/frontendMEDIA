interface MoviePlayerProps {
  imdbId?: string;
  tmdbId?: string;
  type: 'movie' | 'tv';
  season?: number;
  episode?: number;
}

function MoviePlayer 