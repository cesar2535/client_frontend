// 這是 root view，也稱為 controller-view

var VideoStore = require('../stores/VideoStore');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');
// var Container = require('./Container.jsx');
var Header = require('./Header/Header.jsx');
var VideoPlayer = require('./VideoPlayer/VideoPlayer.jsx');
var MessageBox = require('./ChatRoom/MessageBox.jsx');
var Webcam = require('./WebcamPlayer/Webcam.jsx');

//
var BroadcastRoute = React.createClass({

  propType: {
    streamingId: React.PropTypes.string.isRequired
  },
  getInitialState: function () {
    return this.getTruth();
  },
  //
  componentWillMount: function() {
    // VideoStore.addListener( AppConstants.CHANGE_EVENT, this._onChange );
  },

  //
  componentDidMount: function() {
    console.info('BroadcastRoute Did Mount');
  },

  // 元件將從畫面上移除時，要做善後工作
  componentWillUnmount: function() {
    // VideoStore.removeListener( AppConstants.CHANGE_EVENT, this._onChange );
    // actions.stopBroadcast();
  },

  componentDidUnmount: function() {
  },

  // 在 render() 前執行，有機會可先處理 props 後用 setState() 存起來
  componentWillReceiveProps: function(nextProps) {
    //
  },

  //
  shouldComponentUpdate: function(nextProps, nextState) {
  },

  // 這時已不可用 setState()
  componentWillUpdate: function(nextProps, nextState) {
  },

  //
  componentDidUpdate: function(prevProps, prevState) {
  },

  //
  render: function() {
    // var o = this.state;
    // console.log(o);
    var streamingId = this.props.streamingId;
    var videoSrc = 'rtmp://192.168.0.108:1935/rtmp/video_' + streamingId;
    var webcamSrc = 'rtmp://192.168.0.108:1935/rtmp/webcam_' + streamingId;

    return (
      <div className="wrapper">
        <Header />
        <div id="main">
          <section>
            <div className="title">
              <h1>Title</h1>
            </div>
            <VideoPlayer src={videoSrc} />
          </section>
          <aside>
            <Webcam src={webcamSrc} />
            <MessageBox streamingId={streamingId}/>
          </aside>
        </div>
      </div>
    );
  },
  _onChange: function () {
    return this.getTruth();
  },
  getTruth: function () {
    return VideoStore.getRTMP();
  }

});

module.exports = BroadcastRoute;
