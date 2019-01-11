import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    // states
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
  }

  componentDidMount() {
    var updateState = (data) => {
      console.log(this);
      this.setState({
        currentVideo: data[0],
        currentVideoList: data
      });
    };

    var initialResults = this.props.searchYouTube({
      max: 5,
      query: 'funny cats',
      key: YOUTUBE_API_KEY
    }, updateState);

    console.log(initialResults);

  }

  handleDisplayVideo(video) {
    console.log(this);
    this.setState({
      currentVideo: video
    });
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
            <VideoList videos={this.state.currentVideoList} onClickDisplayVideo={this.handleDisplayVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

/*
{
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
}
*/
