import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [],
      videoPlayer: exampleVideoData[0]
    };
    this.addVideoList = this.addVideoList.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //componentDidMount, just not a separate function.
    searchYouTube('react', this.addVideoList);
  }

  // data of new videos is provided in searchYouTube, as a parameter to the success callback function.
  addVideoList (newVideoList) {
    // console.log(newVideoList);
    this.setState({videoList: newVideoList, videoPlayer: newVideoList[0]});
  }

  handleSubmit(event, query) {
    event.preventDefault();

    searchYouTube(query, this.addVideoList);
    // use the returned list of videos
    // grab the first video within the list and occupy the video player
    // use the rest of the list to occupy videolist
  }

  onVideoClick(videoObj) {
    this.setState({videoPlayer: videoObj});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSubmit={this.handleSubmit}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlayer}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} click={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

//
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
