var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var actions = require('../actions/AppActionCreator');
var EventEmitter = require('events').EventEmitter;

var RouteStore = {};
var currentView;

Object.assign(RouteStore, EventEmitter.prototype, {
  getCurrentView: function() {
    return currentView;
  }
});

if ('undefined' !== typeof window) {
  page.base('');
}