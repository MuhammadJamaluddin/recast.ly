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
  }

  componentDidMount(query = 'funny cats') {
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

  handleSearch(query) {
    var debouncedSearch = _.debounce(this.componentDidMount.bind(this), 500, {leading: true, trailing: true});
    debouncedSearch(query);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.handleSearch.bind(this)}/>
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
