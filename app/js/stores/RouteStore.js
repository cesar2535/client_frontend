var page = require('page');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');
var EventEmitter = require('events').EventEmitter;

var RouteStore = {};
var currentView;

Object.assign(RouteStore, EventEmitter.prototype, {
  streamingWatch: function (ctx, next) {
    var id = ctx.params.id;
    actions.getStreamingData(id);
  },
  pageNotFound: function (ctx, next) {
    actions.setPageNotFound();
  },
  getCurrentView: function () {
    return currentView;
  }
});

RouteStore.dispatchToken = AppDispatcher.register(function routeEventHandler(event) {
  var action = event.action;
  switch (action.actionType) {
    case AppConstants.PAGE_NOT_FOUND:
    console.info('RouteStore: PAGE_NOT_FOUND');
      currentView = 'pageNotFound';
      RouteStore.emit( AppConstants.CHANGE_EVENT );
      break;
    case AppConstants.STREAMING_LOAD_VIEW:
      console.info('RouteStore: STREAMING_LOAD_VIEW');
      console.log(action.item);
      currentView = 'streamingRoom';
      RouteStore.emit( AppConstants.CHANGE_EVENT );
      break;
    default:
      break;
  }
});

if ('undefined' !== typeof window) {
  page.base('');
  page('/streaming/:id', RouteStore.streamingWatch.bind(RouteStore) );
  page('*', RouteStore.pageNotFound.bind(RouteStore) );
  setTimeout(function () {
    page({
      hashbang: true
    });
    console.info('----- Client Router starting! -----');
  }, 0);
}

module.exports = RouteStore;