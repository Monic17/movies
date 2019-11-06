const movieValidator = require('../../src/validations/movie.validator');
const { 
  event2, 
  validatorResponse, 
  errorEvent, 
  validationErrorMessage 
} = require('../factories/movie.factory');

afterEach(() => {
  jest.clearAllMocks();
});

describe('movie validator', () => {
  test('should get and validate the input attributes', async () => {
    const validatorSpy = jest.spyOn(movieValidator, 'getMoviePathUrlAttributes');

    try{
      const validAttributes = await movieValidator.getMoviePathUrlAttributes(event2);

      expect(validAttributes).toEqual(validatorResponse);
      expect(validatorSpy).toHaveBeenCalledTimes(1);
    } catch (err) {
      expect(err).toBeNull();
    }
  });

  test('should return error if movie_path_url empty string', async () => {
    const validatorSpy = jest.spyOn(movieValidator, 'getMoviePathUrlAttributes');

    try{
      const validAttributes = await movieValidator.getMoviePathUrlAttributes(errorEvent);

      expect(validAttributes).toBeNull();
    } catch (err) {
      expect(validatorSpy).toHaveBeenCalledTimes(1);
      expect(err.error).toEqual('Invalid parameters');
      expect(err.message).toEqual(validationErrorMessage);
      expect(err.statusCode).toEqual('400');
    }
  });
});
