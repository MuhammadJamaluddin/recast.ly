var VideoListEntry = (props) => (
  <div key={props.key} className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

/*
{
  kind: 'youtube#searchResult',
  etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
  id: {
    kind: 'youtube#video',
    videoId: '4ZAEBxGipoA'
  },
  snippet: {
    publishedAt: '2015-08-02T20:52:58.000Z',
    channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
    title: 'React JS Tutorial for Beginners - 1 - Introduction',
    description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
        width: 120,
        height: 90
      },
      medium: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
        width: 320,
        height: 180
      },
      high: {
        url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
        width: 480,
        height: 360
      }
    },
    channelTitle: 'thenewboston',
    liveBroadcastContent: 'none'
  }
}
*/
