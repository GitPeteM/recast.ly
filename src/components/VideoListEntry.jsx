// var VideoListEntry = () => (
//   <div className="video-list-entry media">
//     <div className="media-left media-middle">
//       <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">Video Title</div>
//       <div className="video-list-entry-detail">Video Description</div>
//     </div>
//   </div>
// );


var VideoListEntry = ({video, click}) => {
  return (
    //so because we have an onclick function, rather than grabbing the "event" which is the entire div below
    //we refactored our onclick to take in a video obj as a parameter that is passed in to videoentry since it's the current video, this happens because the onclick attaches the video obj itself to the div so we can reference it/callback to our click function with it. At first we only had a onclick that contained the entire div as the event.target, we refactored it into a callback to contain both. Idk if I explained that poorly. I'm sorry lol
    //              cb        invoke our click function
    <div onClick={(event) => { click(video); }} className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{video.snippet.title}</div>
        <div className="video-list-entry-detail">{video.snippet.description}</div>
      </div>
    </div>
  );


};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
