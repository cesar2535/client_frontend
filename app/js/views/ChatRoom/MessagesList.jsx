var MessageItem = require('./MessageItem.jsx');

var MessagesList = React.createClass({
  displayName: 'MessagesList',
  propTypes: {
    arrMessages: React.PropTypes.array
  },
  componentDidUpdate: function () {
    var elem = document.querySelector('.messages-list');
    elem.scrollTop = elem.scrollHeight - elem.offsetHeight;
  },
  render: function () {
    var arrMessages = this.props.arrMessages;
    var messages = arrMessages.map(function (item) {
      return <MessageItem key={item.uid} item={item} />;
    });
    return (
      <ul className='messages-list'>
        {messages}
      </ul>
    );
  }
});

module.exports = MessagesList;