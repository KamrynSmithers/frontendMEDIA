interface MoviePlayerProps {
  imdbId?: string;
  tmdbId?: string;
  type: 'movie' | 'tv';
  season?: number;
  episode?: number;
  onClose?: () => void;
}

function MoviePlayer ({ imdbId, tmdbId, type, season, episode, onClose }: MoviePlayerProps) {
  const getEmbedUrl = () => {
    const baseUrl = `https://vidsrc-embed.ru/embed/${type}`;
    
    if (type === 'movie') {
      if (imdbId) return `${baseUrl}?imdb=${imdbId}`;
      if (tmdbId) return `${baseUrl}?tmdb=${tmdbId}`;
    } else {
      if (season && episode) {
        if (imdbId) return `${baseUrl}?imdb=${imdbId}&season=${season}&episode=${episode}`;
        if (tmdbId) return `${baseUrl}?tmdb=${tmdbId}&season=${season}&episode=${episode}`;
      } else {
        if (imdbId) return `${baseUrl}?imdb=${imdbId}`;
        if (tmdbId) return `${baseUrl}?tmdb=${tmdbId}`;
      }
    }
    return '';
  };