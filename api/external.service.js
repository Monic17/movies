const request = require('request-promise-native');

const { ResourceMissingError } = require('../errors/error.handler');

async function getExternalMovieData(imdbId, moviePathUrl) {
  const apiKey = process.env.themoviedb_api_key;
  const themoviedbVideoData = await request({
    method: 'GET',
    uri: `https://api.themoviedb.org/3/movie/${imdbId}/videos?language=en-US&api_key=${apiKey}`,
    headers: {
      'content-type': 'application/json;charset=utf-8'
    },
    json: true
  });

  if (
    !themoviedbVideoData ||
    !themoviedbVideoData.results ||
    themoviedbVideoData.results.length === 0
  ) {
    throw new ResourceMissingError(
      `Movie trailer data not found: ${moviePathUrl}`
    );
  }

  const youtubeClips = themoviedbVideoData.results.filter(
    result => result.site === 'YouTube'
  );

  const trailer = youtubeClips.find(clip => clip.type === 'Trailer');

  let videoKey;

  if (trailer) {
    videoKey = trailer.key;
  } else {
    videoKey = youtubeClips[0].key;
  }

  return `https://www.youtube.com/watch?v=${videoKey}`;
}

module.exports = { getExternalMovieData };
