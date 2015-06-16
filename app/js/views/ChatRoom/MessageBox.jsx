var ChatStore = require('../../stores/ChatStore');
var AppConstants = require('../../constants/AppConstants');
var actions = require('../../actions/AppActionCreator');
var MessagesList = require('./MessagesList.jsx');
var MessageInput = require('./MessageInput.jsx');

var MessageBox = React.createClass({
  displayName: 'MessageBox',
  propTypes: {

  },
  getInitialState: function () {
    return this.getTruth();
  },
  componentWillMount: function () {
    // console.info('MessageBox will mount');
    var channel = {
      name: 'test'
    };
    ChatStore.addListener( AppConstants.CHANGE_EVENT, this._onChange );
    actions.createChannel(channel);
    // this.ioNsp = io('http://ec2-52-69-53-3.ap-northeast-1.compute.amazonaws.com:8080/' + channel.name);
  },
  componentDidMount: function () {
    console.info('componentDidMount');
    // this.ioNsp.on('private', function (res) {
    //   console.log(res);
    // });
    // this.ioNsp.on('namespace broadcast', function (res) {
    //   // console.log(res);
    //   actions.addMessage(res);
    // });
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
    var channel = {
      name: 'test'
    };
    actions.destroyChannel(channel);
  },
  render: function () {
    var o = this.state;
    return (
      <div className="message-box">
        <MessagesList arrMessages={o.arrMessages} />
        <MessageInput />
      </div>
    );
  },
  _onChange: function () {
    // console.log("_onChange")
    this.setState( this.getTruth() );
  },
  getTruth: function () {
    return ChatStore.getAll();
  }
});

module.exports = MessageBox;