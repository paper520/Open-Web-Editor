/*!
* Open Web Editor - ✍️ An Editor Used on the Browser Side.
* git+https://github.com/hai2007/Open-Web-Editor.git
*
* author hai2007
*
* version 0.0.0-alpha
*
* Copyright (c) 2020 hai2007 走一步，再走一步。
* Released under the MIT license
*
* Date:Mon Nov 30 2020 10:30:21 GMT+0800 (GMT+08:00)
*/

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  'use strict';

  var OpenWebEditor = function OpenWebEditor(options) {
    if (!(this instanceof OpenWebEditor)) {
      throw new Error('Open Web Editor is a constructor and should be called with the `new` keyword');
    } // todo

  };

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = OpenWebEditor;
  } else {
    window.OpenWebEditor = OpenWebEditor;
  }
})();