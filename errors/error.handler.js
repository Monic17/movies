function InvalidParameterError(message) {
  this.error = `Invalid parameters`;
  this.message = message;
  this.statusCode = '400';
}

function ResourceMissingError(message) {
  this.error = `Resource missing`;
  this.message = message;
  this.statusCode = '404';
}

function getJoiErrorMessage({ error }) {
  let message = '';

  error.details.map(detail => {
    message += `* ${detail.message}   ... \n`;
  });

  return message;
}

module.exports = {
  ResourceMissingError,
  InvalidParameterError,
  getJoiErrorMessage
};
