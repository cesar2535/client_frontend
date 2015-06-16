var Webcam = React.createClass({
  displayName: 'Webcam',
  propTypes: {
    src: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    this.jwplayer = jwplayer('webcam').setup({
      file: this.props.src,
      width: "100%",
      autostart: true,
      aspectratio: "16:9"
    });

  },
  render: function () {
    return (
      <div className="webcam" onClick={this.handleClick}>
        <div id="webcam"></div>
      </div>
    );
  }
});

module.exports = Webcam;