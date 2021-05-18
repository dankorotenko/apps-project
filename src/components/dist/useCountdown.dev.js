"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useCountdown = function useCountdown() {
  var newYears = '1 Jan 2022';

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      days = _useState2[0],
      setDays = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      hours = _useState4[0],
      setHours = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      minutes = _useState6[0],
      setMinutes = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      seconds = _useState8[0],
      setSeconds = _useState8[1];

  var _useState9 = (0, _react.useState)(true),
      _useState10 = _slicedToArray(_useState9, 2),
      isPending = _useState10[0],
      setIsPending = _useState10[1];

  (0, _react.useEffect)(function () {
    var abortCont = new AbortController();
    setInterval(function () {
      var newYearsDate = new Date(newYears);
      var currentDate = new Date();
      var totalSeconds = (newYearsDate - currentDate) / 1000;
      setDays(Math.floor(totalSeconds / 3600 / 24));
      setHours(Math.floor(totalSeconds / 3600) % 24);
      setMinutes(Math.floor(totalSeconds / 60) % 60);
      setSeconds(Math.floor(totalSeconds) % 60);
      setIsPending(false);
    }, 1000);
    return function () {
      return abortCont.abort();
    };
  }, []);
  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
    isPending: isPending
  };
};

var _default = useCountdown;
exports["default"] = _default;