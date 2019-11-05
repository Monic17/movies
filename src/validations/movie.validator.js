const { validate, clean } = require('./validation.helper');
const schema = require('./movie.schema');

async function getMoviePathUrlAttributes(event) {
  const attributes = clean({
    moviePathUrl: event.pathParameters.movie_path_url
  });

  return validate(attributes, schema.moviePathUrlAttributes);
}

module.exports = {
  getMoviePathUrlAttributes
};
