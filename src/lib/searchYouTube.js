import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  // $.ajax({
  //   url: Parse.server,
  //   type: 'GET',
  //   data: { order: '-createdAt' },
  //   contentType: 'application/json',
  //   success: successCB,
  //   error: errorCB || function(error) {
  //     console.error('chatterbox: Failed to fetch messages', error);
  //   }
  // });
  $.ajax({
    url:'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { input: query },
    dataType: 'application/json',
    success: callback(data),
    error: function (error) {
      console.error('Recast: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;
