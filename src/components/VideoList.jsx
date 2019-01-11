import VideoListEntry from './VideoListEntry.js';

class VideoList extends React.Component {
  // props.onClickDisplayVideo <- this references the arg passed in from app.jsx
  constructor(props) {
    super(props);
  }

  // handleDisplayVideo(video) {
  //   console.log(this);
  //   this.props.onClickDisplayVideo(video);
  // }

  render() {
    return (
      <div className="video-list">
        {this.props.videos.map((video) =>
          <VideoListEntry key={video.id.videoId} video={video} onClickDisplayVideo={this.props.onClickDisplayVideo} />
        )}
      </div>
    )
  }
}

// SAVE for stateless functional test
// var VideoList = (props) => (
//   var handleDisplayVideo = (video) => {
//     props.onClickDisplayVideo(video);
//   }
//   return(
//     <div className="video-list">
//       {props.videos.map((video) =>
//         <VideoListEntry key={video.id.videoId} video={video} onClickDisplayVideo={handleDisplayVideo.bind(this)} />
//       )}
//     </div>
//   )
// )


// var handleDisplayVideo = (video, props = VideoList.props) => {
//   console.log(this);
//   props.onClickDisplayVideo(video);
// };

// var VideoList = (props) => (
//   // props.onClickDisplayVideo <- this references the arg passed in from app.jsx
//   <div className="video-list">
//     {props.videos.map((video) =>
//       <VideoListEntry key={video.id.videoId} video={video} onClickDisplayVideo={props.onClickDisplayVideo} />
//     )}

//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
