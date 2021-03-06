import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: ''
            }
          }
        }
      },
      currentVideoList: []
    };

    this.throttledSearch = _.throttle(this.componentDidMount.bind(this), 500);
  }

  componentDidMount(query = 'funny cats') {
    console.log('sent');
    var updateState = (data) => {
      this.setState({
        currentVideo: data[0],
        currentVideoList: data
      });
    };

    this.props.searchYouTube({
      max: 5,
      query: query,
      key: YOUTUBE_API_KEY
    }, updateState);
  }

  handleDisplayVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.throttledSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentVideoList} DisplayVideoOnClick={this.handleDisplayVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
