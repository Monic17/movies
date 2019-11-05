const Joi = require('joi');

function moviePathUrlAttributes() {
  return Joi.object().keys({
    moviePathUrl: Joi.string()
      .required()
      .min(1)
  });
}

module.exports = {
  moviePathUrlAttributes
};
