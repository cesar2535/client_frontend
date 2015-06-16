var cx = require('classnames');

var VideoItem = React.createClass({
  displayName: 'VideoItem',
  propType: {
    video: React.PropTypes.shape({
      image: React.PropTypes.string.isRequired,
      fileName: React.PropTypes.string.isRequired,
      selected: React.PropTypes.bool
    }),
    onClick: React.PropTypes.func.isRequired
  },
  render: function () {
    var video = this.props.video;
    if (!video.image) {
      video.image = '/assets/images/default_file.png';
    }
    var classes = cx({
      'video-item': true,
      'selected': this.props.selected
    });
    return (
      <div className={classes} onClick={this.props.onClick}>
        <img className="item-img" src={video.image} />
        <span className="item-title">{video.fileName}</span>
      </div>
    );
  }
});

module.exports = VideoItem;