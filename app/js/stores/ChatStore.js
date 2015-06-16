
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');
var EventEmitter = require('events').EventEmitter;

var chatroomUrl = 'http://ec2-52-69-53-3.ap-northeast-1.compute.amazonaws.com:8080';
var arrMessages = [];
var ioNsp = null;

var ChatStore = {};

Object.assign(ChatStore, EventEmitter.prototype, {
  getAll: function() {
    return {
      arrMessages: arrMessages,
      screenSize: screenSize
    };
  }
});

ChatStore.dispatchToken = AppDispatcher.register(function eventHandlers(event) {
  var action = event.action;
  switch (action.actionType) {
    case AppConstants.CHANNEL_CREATE:
      console.log(action.item);
      ioNsp = io(chatroomUrl + '/' + action.item.name);
      ioNsp.connect();
      ioNsp.on('namespace broadcast', function (res) {
        console.log(res);
        arrMessages.push(res);
        ChatStore.emit(AppConstants.CHANGE_EVENT);
      });
      break;
    case AppConstants.CHANNEL_DESTROY:
      arrMessages.length = 0;
      // ChatStore.emit(AppConstants.CHANGE_EVENT);
      break;
    case AppConstants.MESSAGE_ADD:
      arrMessages.push(action.item);
      // console.log(arrMessages);
      ChatStore.emit(AppConstants.CHANGE_EVENT);

      break;
  }
});

// 為了 RWD 偷放的 screenSize 判斷
window.addEventListener('resize', handleResize);
handleResize();
var idResize;
var screenSize;

function handleResize() {

  clearTimeout(idResize);

  idResize = setTimeout(function() {

    var body = document.body;
    var size;

    if (body.scrollWidth > 1024) {
      size = 'desktop';
    } else if (body.scrollWidth > 480) {
      size = 'tablet';
    } else {
      size = 'phone';
    }

    console.log('resize: ', body.scrollWidth, body.scrollHeight, ' >size: ', size);

    screenSize = size;

  }.bind(this), 0)

}

module.exports = ChatStore;