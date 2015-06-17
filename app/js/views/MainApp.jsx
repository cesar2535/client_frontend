// 這是 root view，也稱為 controller-view

// var Container = require('./Container.jsx');
var RouteStore = require('../stores/RouteStore');
var AppConstants = require('../constants/AppConstants');
var Header = require('./Header/Header.jsx');
var VideoPlayer = require('./VideoPlayer/VideoPlayer.jsx');
var MessageBox = require('./ChatRoom/MessageBox.jsx');
var VideosBrowser = require('./VideosBrowser/VideosBrowser.jsx');
//
var MainApp = React.createClass({

  //
  getInitialState: function () {
    return this.getTruth();
  },
  componentWillMount: function() {
    RouteStore.addListener( AppConstants.CHANGE_EVENT, this._onChange );
  },

  //
  componentDidMount: function() {
    console.info('MainApp Did Mount');
  },

  // 元件將從畫面上移除時，要做善後工作
  componentWillUnmount: function() {
    RouteStore.removeListener( AppConstants.CHANGE_EVENT, this._onChange );
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
    return (
      <div className="wrapper">
        <Header />
        <VideosBrowser />
      </div>
    );
  },

  _onChange: function () {
    return this.setState( this.getTruth() );
  },
  getTruth: function () {
    return {
      currentView: RouteStore.getCurrentView()
    };
  }

});

module.exports = MainApp;
