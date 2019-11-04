const { getMovieData, getTrailerUrl } = require('./api/movie.service');
const { getMoviePathUrlAttributes } = require('./validations/movie.validator');
const controller = require('./api/controller.helper');

function getMovie(event) {
  return controller({
    event,
    validator: getMoviePathUrlAttributes,
    service: getMovieData
  });
}

function getTrailer(event) {
  return controller({
    event,
    validator: getMoviePathUrlAttributes,
    service: getTrailerUrl
  });
}

module.exports = { getTrailer, getMovie };
