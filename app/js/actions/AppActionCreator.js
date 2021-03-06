require('whatwg-fetch');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var shortid = require('shortid');
var chatroomUrl = 'http://ec2-52-69-53-3.ap-northeast-1.compute.amazonaws.com:8080';
var serverUrl = '';
// var nasUrl = 'http://localhost:8081';
/**
 * 這是一個 singleton 物件
 */
var AppActionCreators = {

  /**
   * app 啟動後，從 server 取回一包初始資料
   * 這支目前沒用到
   */
  load: function() {
    // AppDispatcher.handleServerAction({
    //     actionType: AppConstants.TODO_READ,
    //     items: [] // 送一包假資料進去
    // });
  },
  setPageNotFound: function () {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PAGE_NOT_FOUND
    });
  },
  getStreamingData: function (id) {
    var that = this;
    // fetch( serverUrl, {
    //   method: 'get'
    // }).then(function(res) {
    //   res.json().then(function (body) {
    //     console.log(body.data);
        that.loadStreamingData('test');
      //   return body.data;
      // }).then(function (data) {
        AppDispatcher.handleViewAction({
          actionType: AppConstants.STREAMING_LOAD_VIEW,
          item: 'test'
        });
    //   })
    // });
  },
  loadStreamingData: function (streamingData) {
    AppDispatcher.handleServerAction({
      actionType: AppConstants.STREAMING_LOAD,
      item: streamingData
    });
  },
  connectChat: function (item) {
    // Connect the existing chat channel
    AppDispatcher.handleServerAction({
      actionType: AppConstants.CHANNEL_CONNECT,
      item: item
    });
  },
  disconnectChat: function (item) {
    // Disconnect the chat
    AppDispatcher.handleServerAction({
      actionType: AppConstants.CHANNEL_DISCONNECT,
      item: item
    });
  },
  createChannel: function (item) {
    fetch( chatroomUrl + '/channel/create', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(function (res) {
      console.info('Action: Create Channel');
      console.log(res);
      AppDispatcher.handleServerAction({
        actionType: AppConstants.CHANNEL_CONNECT,
        item: item
      });
    });
  },
  destroyChannel: function (item) {
    fetch( chatroomUrl + '/channel/destory', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(function (res) {
      console.info('Action: Destroy Channel');
      console.log(res);
      AppDispatcher.handleServerAction({
        actionType: AppConstants.CHANNEL_DISCONNECT,
        item: item
      });
    });
  },
  sendMessage: function (item) {
    var tid = "m_" + shortid.generate();
    item.tid = tid;
    item.uid = shortid.generate();
    // console.log(item);
    // AppDispatcher.handleViewAction({
    //   actionType: AppConstants.MESSAGE_ADD,
    //   item: item
    // });
    AppDispatcher.handleServerAction({
      actionType: AppConstants.MESSAGE_SEND,
      item: item
    });
  },
  addMessage: function (item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.MESSAGE_ADD,
      item: item
    });
  },
  // dummy
  noop: function() {}
};

module.exports = AppActionCreators;
