var actions = require('../../actions/AppActionCreator');
var shortid = require('shortid');

var MessageInput = React.createClass({
  displayName: 'MessageInput',
  propTypes: {

  },
  getInitialState: function () {
    this.username = shortid.generate();
    return {
      currentItem: {
        username: this.username,
        content: '',
        uid: null,
        created: null
      }
    }
  },
  componentWillMount: function () {

  },
  componentDidMount: function () {

  },
  render: function () {
    return (
      <div className='message-input' onSubmit={this.handleSubmit}>
        <input type='text' 
               value={this.state.currentItem.content} 
               placeholder="Send a message"
               onChange={this.handleChange} 
               onKeyDown={this.handleKeyDown} />
        <button type='button' onClick={this.handleClick}>{""}</button>
      </div>
    );
  },
  handleChange: function (event) {
    this.state.currentItem.content = event.target.value;
    this.setState({
      currentItem: this.state.currentItem
    });
  },
  handleClick: function (event) {
    var item = this.state.currentItem;

    // Block the submit of message if text was empty
    if (item.content.trim().length == 0) return;
    item.created = Date.now();

    // Send the message to server
    actions.sendMessage(item);

    // Clear the input field
    this.setState({
      currentItem: {
        username: this.username,
        content: '',
        uid: null,
        created: null
      }
    });
  },
  handleKeyDown: function (event) {
    if (event.keyCode == 13) {
      this.handleClick();
    }
  }
});

module.exports = MessageInput;