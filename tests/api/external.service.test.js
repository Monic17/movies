const {
  getVideoKey,
  getExternalMovieData
} = require('../../src/api/external.service');
const {
  videoDataFactory1,
  videoDataFactory2,
  videoDataResponse1,
  videoDataResponse2
} = require('../factories/movie.factory');
const { getHttpResponse } = require('../../src/api/service.helper');

jest.mock('../../src/api/service.helper', () => ({
  getHttpResponse: jest.fn()
}));

describe('getVideoKey', () => {
  test('should get the videoKey', async () => {
    try {
      const videoKey = getVideoKey(videoDataFactory1);

      expect(videoKey).toEqual(videoDataResponse1);
    } catch (err) {
      expect(err).toBeNull();
    }
  });

  test('should return error if empty object', async () => {
    try {
      const videoKey = getVideoKey({});

      expect(videoKey).toBeNull();
    } catch (err) {
      expect(err.error).toEqual('Resource missing');
      expect(err.message).toEqual('Movie trailer data not found');
      expect(err.statusCode).toEqual('404');
    }
  });
});

describe('getExternalMovieData', () => {
  test('should get the movie trailer url', async () => {
    getHttpResponse.mockImplementation(() =>
      Promise.resolve(videoDataFactory2)
    );

    try {
      const trailerUrl = await getExternalMovieData('trailer_path');

      expect(trailerUrl).toEqual(
        `https://www.youtube.com/watch?v=${videoDataResponse2}`
      );
    } catch (err) {
      expect(err).toBeNull();
    }
  });

  test('should return error if empty object', async () => {
    getHttpResponse.mockImplementation(() =>
      Promise.resolve(videoDataFactory2)
    );

    try {
      const trailerUrl = await getExternalMovieData('trailer_path');

      expect(trailerUrl).toEqual(
        `https://www.youtube.com/watch?v=${videoDataResponse2}`
      );
    } catch (err) {
      expect(err).toBeNull();
    }
  });
});
