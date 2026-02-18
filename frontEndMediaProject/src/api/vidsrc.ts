import axios from 'axios';

export const getLatestMovies = async (page: number = 1) => {
  const response = await axios.get(`https://vidsrc-embed.ru/movies/latest/page-${page}.json`);
  return response.data;
};

export const getLatestTVShows = async (page: number = 1) => {
  const response = await axios.get(`https://vidsrc-embed.ru/tvshows/latest/page-${page}.json`);
  return response.data;
};

export const getLatestEpisodes = async (page: number = 1) => {
  const response = await axios.get(`https://vidsrc-embed.ru/episodes/latest/page-${page}.json`);
  return response.data;
};