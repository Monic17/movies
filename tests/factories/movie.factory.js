const videoDataFactory1 = {
  id: 398173,
  results: [
    {
      id: '5ad8e85cc3a3686c1f000d11',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'BAaLDuEPglI',
      name: 'The House That Jack Built - Cannes 2018 teaser',
      site: 'YouTube',
      size: 720,
      type: 'Teaser'
    },
    {
      id: '5b74cc3bc3a368754b0073f5',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: '8RcExsA-8FI',
      name: 'The House That Jack Built - Official Trailer 2018',
      site: 'YouTube',
      size: 1080,
      type: 'Trailer'
    },
    {
      id: '5bde913d92514137dd01d368',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'c6DuLPGZIoQ',
      name: 'The House That Jack Built - Official US Trailer | HD | IFC Films',
      site: 'YouTube',
      size: 1080,
      type: 'Trailer'
    }
  ]
};
const videoDataFactory2 = {
  id: 299537,
  results: [
    {
      id: '5c8ad99b9251410cf7c3b52b',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'mbyd2kvRPnw',
      name: '“Connection” TV Spot',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser'
    },
    {
      id: '5c8ad9f5c3a36805f30b4877',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'Lf2JIPI8pQU',
      name: 'Special Film Clip',
      site: 'YouTube',
      size: 1080,
      type: 'Clip'
    },
    {
      id: '5c8adb890e0a26042bc541bb',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'PJSnd_cCGd0',
      name: '“Idea” TV Spot',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser'
    },
    {
      id: '5c8adc7fc3a36864610e8fe2',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'beniCXIdnTQ',
      name: 'Monday Motivation: Captain Marvel is…',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette'
    },
    {
      id: '5c8adc9f0e0a260b60c470e1',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'FHFhDl2UgZQ',
      name: 'Captain Marvel',
      site: 'YouTube',
      size: 1080,
      type: 'Featurette'
    },
    {
      id: '5c8add5bc3a36805f30b4d46',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'S1xIsfnHcxc',
      name: '“Play” TV Spot',
      site: 'YouTube',
      size: 1080,
      type: 'Teaser'
    },
    {
      id: '5c8bd59ac3a368216e0f582c',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: 'Z1BCujX3pw8',
      name: 'Official Trailer #1',
      site: 'YouTube',
      size: 1080,
      type: 'Trailer'
    },
    {
      id: '5c8bd5a9c3a36824bf0f518b',
      iso_639_1: 'en',
      iso_3166_1: 'US',
      key: '0LHxvxdRnYc',
      name: 'Official Trailer #2',
      site: 'YouTube',
      size: 1080,
      type: 'Trailer'
    }
  ]
};

const videoDataResponse1 = '8RcExsA-8FI';
const videoDataResponse2 = 'Z1BCujX3pw8';

const movieDataFactory1 = {
  type: 'page',
  pageType: 'product',
  sectionId: '2037b330-d411-11e2-8b8b-0800200c9a66',
  title: 'The House That Jack Built - Film online på Viaplay.se',
  description:
    'Se filmen The House That Jack Built med Matt Dillon, Uma Thurman, Riley Keough, Bruno Ganz, Sofie Gråbøl, Jeremy Davies på nätet. Se filmer online på Viaplay.se!',
  styles: [],
  _embedded: {
    'viaplay:blocks': [
      {
        client: { module: 'movie', template: 'movie' },
        totalProductCount: 1,
        type: 'product',
        styles: ['movie-product', 'product'],
        _embedded: {
          'viaplay:product': {
            type: 'movie',
            publicPath: 'the-house-that-jack-built-2018',
            content: {
              duration: { milliseconds: 8764832, readable: '2h 26min' },
              promoVideos: {
                promoVideo169: {
                  href:
                    'https://promo-videos-cdn2-vp.cdn.viaplay.tv/editorial_pages/Promos/20534860_169.mp4'
                }
              },
              parentalRating: '18',
              people: {
                actors: [
                  'Matt Dillon',
                  'Uma Thurman',
                  'Riley Keough',
                  'Bruno Ganz',
                  'Sofie Gråbøl',
                  'Jeremy Davies'
                ],
                directors: ['Lars von Trier']
              },
              production: { country: 'Danmark', year: 2018 },
              imdb: {
                id: 'tt4003440',
                rating: '6.8',
                votes: '43 296',
                url: 'http://www.imdb.com/title/tt4003440?ref_ext_viaplay'
              },
              synopsis:
                'Under 12 års tid följer vi seriemördaren Jack, och tar del av de mord som fick honom att gå från misslyckad arkitekt till sann galning.',
              title: 'The House That Jack Built'
            },
            user: { starred: false, entitled: false, rented: false },

            notice: {
              message: 'User must login to view content',
              code: 1002,
              _links: {
                curies: [
                  {
                    name: 'viaplay',
                    href: 'http://docs.viaplay.tv/rel/{rel}',
                    templated: true
                  }
                ],
                'viaplay:accountPurchasePackage': {
                  href: '/package?recommended=viaplay',
                  templated: false,
                  redirect: false
                }
              }
            }
          }
        }
      }
    ]
  },
  responseCode: { httpStatus: 200, statusCode: 200, code: 1 }
};
const movieDataFactory2 = {
  type: 'page',
  pageType: 'product',
  sectionId: '2037b330-d411-11e2-8b8b-0800200c9a66',
  title: 'Captain Marvel - Film online på Viaplay.se',
  description:
    'Se filmen Captain Marvel med Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law, Annette Bening på nätet. Se filmer online på Viaplay.se!',
  styles: [],
  _links: {},
  _embedded: {
    'viaplay:blocks': [
      {
        client: { module: 'movie', template: 'movie' },
        totalProductCount: 1,
        type: 'product',
        styles: ['movie-product', 'product'],
        _embedded: {
          'viaplay:product': {
            type: 'movie',
            publicPath: 'captain-marvel-2019',
            content: {
              duration: { milliseconds: 7116096, readable: '1h 58min' },
              images: {},
              promoVideos: {
                promoVideo169: {
                  href:
                    'https://promo-videos-cdn2-vp.cdn.viaplay.tv/editorial_pages/Promos/20552257_169.mp4'
                }
              },
              parentalRating: '12',
              people: {
                actors: [
                  'Brie Larson',
                  'Samuel L. Jackson',
                  'Ben Mendelsohn',
                  'Jude Law',
                  'Annette Bening'
                ],
                directors: ['Anna Boden', 'Ryan Fleck']
              },
              production: { country: 'USA', year: 2019 },
              imdb: {
                id: 'tt4154664',
                rating: '7.0',
                votes: '370 167',
                url: 'http://www.imdb.com/title/tt4154664?ref_ext_viaplay'
              },
              synopsis:
                'Carol Danvers blir en av universums mäktigaste hjältar när jorden hamnar mitt i ett galaktiskt krig mellan två utomjordiska raser.',
              title: 'Captain Marvel'
            },
            user: { starred: false },
            system: {},
            _links: {},
            notice: {}
          }
        }
      }
    ]
  },
  responseCode: { httpStatus: 200, statusCode: 200, code: 1 }
};

const imdbId1='tt4003440';
const imdbId2='tt4154664';

const moviePathUrl2 = 'captain-marvel-2019';

const trailerData2 = { 
  movie_path_url: moviePathUrl2, 
  trailer_url: `https://www.youtube.com/watch?v=${videoDataResponse2}`
};

const controllerTrailerResponse2 = { 
  statusCode: 200,
  body: '{"movie_path_url":"captain-marvel-2019","trailer_url":"https://www.youtube.com/watch?v=Z1BCujX3pw8"}' 
};

const event2 = { pathParameters: { movie_path_url: moviePathUrl2 } };

const validatorResponse = { moviePathUrl: moviePathUrl2 };

const errorEvent = { pathParameters: { movie_path_url: '' } };

const validationErrorMessage = `* "moviePathUrl" is not allowed to be empty   ... 
* "moviePathUrl" length must be at least 1 characters long   ... 
`;

module.exports = {
  videoDataFactory1,
  videoDataFactory2,
  videoDataResponse1,
  videoDataResponse2,
  movieDataFactory1,
  movieDataFactory2,
  imdbId1,
  imdbId2,
  trailerData2,
  moviePathUrl2,
  controllerTrailerResponse2,
  event2,
  validatorResponse,
  errorEvent,
  validationErrorMessage
};
