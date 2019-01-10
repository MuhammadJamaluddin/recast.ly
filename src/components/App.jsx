import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // states
    this.state = {
      currentVideo: this.props.videos[0],
      currentVideoList: this.props.videos
    };
  }

  onClickDisplayVideo() {
    console.log(this);
    // this.setState({
    //   currentVideo: true;
    // });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentVideoList} onClickDisplayVideo={this.onClickDisplayVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={props.videos[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={props.videos} />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
