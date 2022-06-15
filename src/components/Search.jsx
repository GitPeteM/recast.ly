
// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );
import searchYouTube from '../lib/searchYouTube.js';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      entry: '',
    };
  }

  handleChange(event) {
    this.setState({ entry: event.target.value });
  }

  render() {
    //return
    return (
      <div className="search-bar form-inline">
        <form onSubmit= {(e) => { this.props.handleSubmit(e, this.state.entry); }}>
          <input className="form-control" type="text" placeholder="Hack Reactor Rules!..." value={this.state.entry} onChange={this.handleChange.bind(this)} />
          <button type="submit" className="btn hidden-sm-down" >
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </form>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
