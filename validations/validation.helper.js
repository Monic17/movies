const _ = require('lodash');

const {
  InvalidParameterError,
  getJoiErrorMessage
} = require('../errors/error.handler');

async function validate(attributes, validateFunction) {
  const result = validateFunction().validate(attributes, {
    allowUnknown: true,
    abortEarly: false
  });

  if (result.error) {
    throw new InvalidParameterError(getJoiErrorMessage(result));
  }

  return attributes;
}

function clean(object) {
  return _.omitBy(object, _.isNil);
}

module.exports = {
  validate,
  clean
};
