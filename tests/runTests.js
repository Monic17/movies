const jest = require('jest');

console.log('Running tests');

process.env.NODE_ENV = 'test';

let envPath = './testEnv';

require('dotenv').config({
  path: envPath
});

jest.run('./.*.test.js$');
