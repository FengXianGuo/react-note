define(["module", "exports"], function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var sum = function sum(a, b) {
    console.log(a + b);
  };
  sum(1, 3);

  var max = function () {
    function max() {
      _classCallCheck(this, max);
    }

    max.prototype.add = function add() {
      console.log("123");
    };

    return max;
  }();

  exports.default = max;
  module.exports = exports["default"];
});