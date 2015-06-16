var VideoStore = require('../../stores/VideoStore');
var AppConstants = require('../../constants/AppConstants');
var actions = require('../../actions/AppActionCreator');
var VideoDetail = require('./VideoDetail.jsx');
var VideosList = require('./VideosList.jsx');

var VideosBrowser = React.createClass({
  displayName: 'VideosBrowser',
  propTypes: {

  },
  getInitialState: function () {
    return this.getTruth();
  },
  componentWillMount: function () {
    VideoStore.addListener( AppConstants.CHANGE_EVENT, this._onChange );
  },
  componentDidMount: function () {
    actions.loadFiles();
  },
  render: function () {
    var video = {
      image: '/assets/images/default_file.png',
      title: 'default filename'
    };

    var o = this.state;

    return (
      <div id="main">
        <section className="videos-browser">
          <VideosList arrVideos={o.arrVideos} selectedItem={o.selectedItem} />
        </section>
        <aside>
          <VideoDetail video={o.selectedItem} />
        </aside>
      </div>
    );
  },
  _onChange: function () {
    this.setState( this.getTruth() );
  },
  getTruth: function () {
    return VideoStore.getAll();
  }
});

module.exports = VideosBrowser;