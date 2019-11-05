const { ResourceMissingError } = require('../errors/error.handler');
const { getHttpResponse } = require('./service.helper');
const { videoTypes, sites } = require('./movie.enums');

function getVideoKey(themoviedbVideoData) {
  if (
    !themoviedbVideoData ||
    !themoviedbVideoData.results ||
    themoviedbVideoData.results.length === 0
  ) {
    throw new ResourceMissingError(`Movie trailer data not found`);
  }

  const youtubeClips = themoviedbVideoData.results.filter(
    result => result.site === sites.youtube
  );

  const trailer = youtubeClips.find(clip => clip.type === videoTypes.trailer);

  return trailer ? trailer.key : youtubeClips[0].key;
}

async function getExternalMovieData(imdbId) {
  const apiKey = process.env.themoviedb_api_key;
  const uri = `https://api.themoviedb.org/3/movie/${imdbId}/videos?language=en-US&api_key=${apiKey}`;
  const themoviedbVideoData = await getHttpResponse(uri);

  const videoKey = getVideoKey(themoviedbVideoData);

  return `https://www.youtube.com/watch?v=${videoKey}`;
}

module.exports = { getExternalMovieData, getVideoKey };
