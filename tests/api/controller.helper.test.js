const controller = require('../../src/api/controller.helper');
const serviceHelper = require('../../src/api/service.helper');
const movieService = require('../../src/api/movie.service');
const { 
  movieDataFactory2, 
  moviePathUrl2, 
  videoDataFactory2 ,
  controllerTrailerResponse2
} = require('../factories/movie.factory');
const { getMoviePathUrlAttributes } = require('../../src/validations/movie.validator');

afterEach(() => {
  jest.clearAllMocks();
});

describe('controller helper', () => {
  test('should run controller with validator, service and get correct response', async () => {
    const getHttpResponseSpy = jest.spyOn(serviceHelper, 'getHttpResponse')
      .mockImplementation(() => Promise.resolve(videoDataFactory2));

    const getMovieDataSpy = jest.spyOn(movieService, 'getMovieData')
      .mockImplementation(() => Promise.resolve(movieDataFactory2));

    const event = { pathParameters: { movie_path_url: moviePathUrl2 } }
      
    try {
      const trailerData = await controller({
        service: movieService.getTrailerUrl,
        validator: getMoviePathUrlAttributes, 
        event
      });

      expect(getHttpResponseSpy).toHaveBeenCalledTimes(1);
      expect(getMovieDataSpy).toHaveBeenCalledTimes(1);

      expect(trailerData).toEqual(controllerTrailerResponse2);
    } catch (err) { 
      expect(err).toBeNull();
    }
  });

  test('should return error if trailer not found', async () => {
    const getHttpResponseSpy = jest.spyOn(serviceHelper, 'getHttpResponse')
      .mockImplementation(() => Promise.reject(new Error(`Trailer not found`)));

    const getMovieDataSpy = jest.spyOn(movieService, 'getMovieData')
      .mockImplementation(() => Promise.resolve(movieDataFactory2));

    const event = { pathParameters: { movie_path_url: moviePathUrl2 } };
      
    try {
      const trailerData = await controller({
        service: movieService.getTrailerUrl,
        validator: getMoviePathUrlAttributes, 
        event
      });

      expect(getHttpResponseSpy).toHaveBeenCalledTimes(1);
      expect(getMovieDataSpy).toHaveBeenCalledTimes(1);

      expect(trailerData).toEqual({ statusCode: undefined,
        body: '{"message":"Trailer not found"}' });
    } catch (err) { 
      expect(err).toBeNull();
    }
  });
});
