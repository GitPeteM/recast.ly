import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      videoPlayer: exampleVideoData[0]
    };
    // console.log(this.state.videoList[0]);
  }


  // addVideoList () {
  //   // create a newVideoList variable
  //   let newVideoList = [];
  //   let tempObj = {};
  //   // loop through exampleVideoData
  //   for (let i = 0; i < exampleVideoData.length; i++) {
  //     tempObj.keyId = i;
  //     tempObj.Video = exampleVideoData[i];
  //     newVideoList.push(tempObj);
  //   }
  //   this.setState({videoList: newVideoList});
  //   // reset state with .setState to newVideoList
  // }


  onVideoClick(event, videoObj) {
    this.setState({videoPlayer: videoObj});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
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
