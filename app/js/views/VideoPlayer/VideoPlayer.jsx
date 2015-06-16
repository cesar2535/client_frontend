// var Video = require('./Video.jsx');
// var MediaControl = require('./MediaControl.jsx');

var VideoPlayer = React.createClass({
  displayName: 'VideoPlayer',
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return {
      duration: 0,
      currentTime: 0,
      buffering: false,
      playing: false
    };
  },
  componentDidMount: function () {
    console.info('VideoPlayer Did Mount');
    this.jwplayer = jwplayer('video').setup({
      file: this.props.src,
      width: "100%",
      height: "100%",
      autostart: true
    });

    this.jwplayer.onPlay(this.onPlay);
    this.jwplayer.onPause(this.onPause);
    this.jwplayer.onBuffer(this.onBuffer);
    this.jwplayer.onIdle(this.onIdle);
    this.jwplayer.onComplete(this.onComplete);
    this.jwplayer.onError(this.onError);
  },
  render: function () {
    return (
      <div className="video-player">
        <div id="video"></div>
        
      </div>
    );
  },
  onPlay: function (event) {
    console.info('onPlay');
    this.setState({
      buffering: false,
      playing: true
    });

  },
  onPause: function (event) {
    console.info('onPause');
    this.setState({
      buffering: false,
      playing: false
    });
  },
  onBuffer: function (event) {
    console.log(event);
    console.info('onBuffer');
    this.setState({
      buffering: true,
      playing: false
    });
  },
  onIdle: function (event) {
    console.info('onIdle');
    this.setState({
      buffering: false,
      playing: false
    });
  },
  onComplete: function (event) {
    console.log(event);
    console.info('onComplete');
    this.setState({
      buffering: false,
      playing: false
    });
  },
  onError: function (event) {
    console.error('onError');
    this.setState({
      buffering: false,
      playing: false
    });
  },
  // play: function () {
  //   console.info('Play func');
  //   if (!this.state.playing) {
  //     this.jwplayer.play(true);
  //   } else {
  //     this.jwplayer.pause(true);
  //   }
  // }
});

module.exports = VideoPlayer;