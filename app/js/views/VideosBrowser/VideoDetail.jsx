var actions = require('../../actions/AppActionCreator');
var page = require('page');

var VideoDetail = React.createClass({
  displayName: 'VideoDetail',
  propTypes: {
    video: React.PropTypes.shape({
      image: React.PropTypes.string,
      fileName: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function () {
    var video = this.props.video;
    if(!video.fileName) {
      return (
        <div className="video-detail">
          <span className="no-selected">Select a file to view its details.</span>
        </div>
      );
    }

    return (
      <div className="video-detail">
        <div className="preview">
          <img src={video.image} />
        </div>
        <div className="description">
          <h4 className="title">{video.fileName}</h4>
        </div>
        <div className="btns-group">
          <button id="broadcast" onClick={this.onBroadcastClick}>Broadcast</button>
        </div>
      </div>
    );
  },
  onBroadcastClick: function (event) {
    // console.log(event);
    console.log(this.props.video);
    actions.broadcastVideo(this.props.video);
    // page('/broadcast/' + this.props.video.uid);
  }
});

module.exports = VideoDetail;