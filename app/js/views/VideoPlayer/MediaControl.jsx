var actions = require('../../actions/AppActionCreator');

var MediaControl = React.createClass({
  displayName: 'MediaControl',
  render: function () {
    var playBtn = 'Play';

    if (!this.props.playing) {
      playBtn = 'Play';
    } else {
      playBtn = 'Pause';
    }
    return (
      <div className="media-control">
        <div className="play" onClick={this.props.handlePlayPause}>{playBtn}</div>
        <div className="fullscreen"></div>
      </div>
    );
  },
});

module.exports = MediaControl;