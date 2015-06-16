var actions = require('../../actions/AppActionCreator');
var VideoItem = require('./VideoItem.jsx');

var VideosList = React.createClass({
  displayName: 'VideosList',
  propTypes: {
    arrVideos: React.PropTypes.array.isRequired,
    selectedItem: React.PropTypes.object
  },
  render: function () {
    var arrVideos = this.props.arrVideos;

    var that = this;
    var arr = arrVideos.map(function (item) {
      return <VideoItem key={item.uid} 
                        video={item} 
                        selected={this.props.selectedItem.uid == item.uid} 
                        onClick={this.handleClick.bind(this, item)} />
    }, this);

    return (
      <div className="videos-list">
        {arr}
      </div>
    );
  },
  handleClick: function (item) {
    // console.log(item);
    actions.selectFile(item);
  }
});

module.exports = VideosList;