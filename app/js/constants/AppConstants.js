/**
 * TodoConstants
 */

var keyMirror = require('react/lib/keyMirror');

// Constructs an enumeration with keys equal to their value.
// 也就是讓 hash 的 key 與 value 值一樣
// 不然原本 value 都是 null
// 不過既然如此，為何不乾脆用 set 之類只有key 的就好
module.exports = keyMirror({

  SOURCE_VIEW_ACTION: null,
  SOURCE_SERVER_ACTION: null,
  SOURCE_ROUTER_ACTION: null,

  OBJECT_SERVER_RESULT: null,
  OBJECT_SERVER_ERROR: null,

  CHANGE_EVENT: null,
  
  // FILES_LOAD: null,
  // FILE_SELECT: null,
  // VIDEO_BROADCAST: null,
  STREAMING_LOAD: null,

  PAGE_NOT_FOUND: null,
  STREAMING_LOAD_VIEW: null,

  CHANNEL_CONNECT: null,
  CHANNEL_DISCONNECT: null,
  MESSAGE_ADD: null,

  noop: null
});
