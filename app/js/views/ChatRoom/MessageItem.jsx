var MessageItem = React.createClass({
  displayName: 'MessageItem',
  propTypes: {
    item: React.PropTypes.shape({
      username: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function () {
    var item = this.props.item;
    return (
      <li className="message-item">
        <span className="username">{item.username + ': '}</span>
        <span className="content">{item.content}</span>
      </li>
    );
  }
});

module.exports = MessageItem;