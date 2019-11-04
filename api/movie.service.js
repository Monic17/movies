const request = require('request-promise-native');
const _ = require('lodash');

const { ResourceMissingError } = require('../errors/error.handler');
const { getExternalMovieData } = require('./external.service');

async function getMovieData({ moviePathUrl }) {
  try {
    const movieDataResponse = await request({
      method: 'GET',
      uri: `https://content.viaplay.se/pc-se/film/${moviePathUrl}`,
      headers: {
        'content-type': 'application/json;charset=utf-8'
      },
      json: true
    });

    return movieDataResponse;
  } catch (err) {
    throw new ResourceMissingError(`Movie not found: '${moviePathUrl}' `);
  }
}

async function getTrailerUrl({ moviePathUrl }) {
  const movieData = await getMovieData({ moviePathUrl });

  const imdbId = _.get(
    movieData,
    `_embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id`
  );

  if (!imdbId) {
    throw new ResourceMissingError('Missing IMDB data: ${moviePathUrl}');
  }

  const trailerUrl = await getExternalMovieData(imdbId, moviePathUrl);

  return { movie_path_url: moviePathUrl, trailer_url: trailerUrl };
}

module.exports = { getMovieData, getTrailerUrl };
