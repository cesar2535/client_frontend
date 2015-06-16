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
      return (
        <li className="message-item" key={item.uid}>
          <span className="username">{item.username + ': '}</span>
          <span className="content">{item.content}</span>
        </li>
      );
    });
    return (
      <ul className='messages-list'>
        {messages}
      </ul>
    );
  }
});

module.exports = MessagesList;