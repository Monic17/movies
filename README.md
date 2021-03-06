# movies api

Simple Node.js API with Lambda and API Gateway to get movie data and trailers

==================================================

Install all dependencies: `npm install`

`npm install -g serverless`

Add AWS Credentials
`serverless config credentials --provider aws --key xxxxx --secret zzzzzz --profile yyyyy-profile`
change profile value in serverless.yaml provider

Add a  `secrets.test.yml` file with the help of `secrets.test.yml.template` to add the apiKey for themoviedb service

Start the API Offline: `npm start`

Deploy to AWS: `sls deploy`



-----------
** Routes 
-----------

* GET `/movies/{movie_path_url}`

Get data about the movie

In AWS:    GET - https://7ygtsx8w9f.execute-api.eu-west-1.amazonaws.com/dev/movies/{movie_path_url}

ex:. 
test localy
http://localhost:3000/movies/elliot-minirenen-2018



* GET `/movies/{movie_path_url}/trailer`

Get the movie trailer

In AWS:    GET - https://7ygtsx8w9f.execute-api.eu-west-1.amazonaws.com/dev/movies/{movie_path_url}/trailer

ex:. 
test localy
http://localhost:3000/movies/elliot-minirenen-2018/trailer



-----------
** Next Steps
-----------

* update the folder structure
* add more endpoints using the data from the existing external services
* add more tests
* change the response data to have more context
* add the rest of the stage environments
* add codepipiline
* add logging Loggly/Sentry
