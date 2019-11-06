const { 
  movieDataFactory1, 
  movieDataFactory2, 
  videoDataFactory2, 
  trailerData2, 
  moviePathUrl2 
} = require('../factories/movie.factory');
const serviceHelper = require('../../src/api/service.helper');
const movieService = require('../../src/api/movie.service');

afterEach(() => {
  jest.clearAllMocks();
});

describe('movie.service', () => {
  describe('getMovieData', () => {
    test('should get movie data', async () => {
      const getHttpResponseSpy = jest.spyOn(serviceHelper, 'getHttpResponse')
        .mockImplementation(() => Promise.resolve(movieDataFactory1));
        
      try {
        const movieData = await movieService.getMovieData({ moviePathUrl: 'trailer_path' });  
        
        expect(getHttpResponseSpy).toHaveBeenCalledTimes(1);
        expect(movieData).toEqual(movieDataFactory1);
      } catch (err) {
        expect(err).toBeNull();
      }
    });

    test('should return error if movie data not found', async () => {
      const moviePathUrl = 'trailer_path';
      const getHttpResponseSpy = jest.spyOn(serviceHelper, 'getHttpResponse')
        .mockImplementation(() => Promise.reject(new Error('404')));
    
      try {
        const movieData = await movieService.getMovieData({ moviePathUrl });
        
        expect(getHttpResponseSpy).toHaveBeenCalledTimes(0);
        expect(movieData).toEqual(movieDataFactory1);
      } catch (err) {
        expect(err.error).toEqual('Resource missing');
        expect(err.message).toEqual(`Movie not found: '${moviePathUrl}'`);
        expect(err.statusCode).toEqual('404');
      }
    });
  });

  describe('getTrailerUrl', () => {
    test('should movie trailer', async () => { 
      const getHttpResponseSpy = jest.spyOn(serviceHelper, 'getHttpResponse')
        .mockImplementation(() => Promise.resolve(videoDataFactory2));

      const getMovieDataSpy = jest.spyOn(movieService, 'getMovieData')
        .mockImplementation(() => Promise.resolve(movieDataFactory2));
        
      try {
        const trailerData = await movieService.getTrailerUrl({ moviePathUrl: moviePathUrl2 });

        expect(getHttpResponseSpy).toHaveBeenCalledTimes(1);
        expect(getMovieDataSpy).toHaveBeenCalledTimes(1);
        expect(trailerData).toEqual(trailerData2);
      } catch (err) {
        expect(err).toBeNull();
      }
    });

    test('should error if movie data not found', async () => { 
      const getHttpResponseSpy = jest.spyOn(serviceHelper, 'getHttpResponse')
        .mockImplementation(() => Promise.resolve(videoDataFactory2));

      const getMovieDataSpy = jest.spyOn(movieService, 'getMovieData')
        .mockImplementation(() => Promise.reject(new Error(`Movie not found: '${moviePathUrl2}'`)));
        
      try {
        const trailerData = await movieService.getTrailerUrl({ moviePathUrl: moviePathUrl2 });

        expect(getHttpResponseSpy).toHaveBeenCalledTimes(0);
        expect(getMovieDataSpy).toHaveBeenCalledTimes(0);
        expect(trailerData).toBeNull();
      } catch (err) { 
        expect(err.message).toEqual(`Movie not found: '${moviePathUrl2}'`);
      }
    });

    test('should error if trailer not found', async () => { 
      const getHttpResponseSpy = jest.spyOn(serviceHelper, 'getHttpResponse')
        .mockImplementation(() => Promise.reject(new Error(`Trailer not found`)));

        const getMovieDataSpy = jest.spyOn(movieService, 'getMovieData')
        .mockImplementation(() => Promise.resolve(movieDataFactory2));
        
      try {
        const trailerData = await movieService.getTrailerUrl({ moviePathUrl: moviePathUrl2 });

        expect(getHttpResponseSpy).toHaveBeenCalledTimes(0);
        expect(getMovieDataSpy).toHaveBeenCalledTimes(0);
        expect(trailerData).toBeNull();
      } catch (err) { 
        expect(err.message).toEqual(`Trailer not found`);
      }
    });
  });
});
