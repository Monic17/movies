const request = require('request-promise-native');

function getHttpResponse(uri) {
  return request({
    method: 'GET',
    uri: uri,
    headers: {
      'content-type': 'application/json;charset=utf-8'
    },
    json: true
  });
}

module.exports = { getHttpResponse };
