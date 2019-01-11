var searchYouTube = (options, callback, errorCB) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      maxResults: options.max,
      q: options.query,
      type: 'video',
      key: options.key,
      videoEmbeddable: true
    },
    success: function(data) {
      const videoData = data.items;
      return callback(videoData);
    },
    error: errorCB || function (error) {
      console.error('recastly: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;
