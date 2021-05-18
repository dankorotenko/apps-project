"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _quizData = _interopRequireDefault(require("../data/quizData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useLoadQuiz = function useLoadQuiz(currentPosition) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      question = _useState2[0],
      setQuestion = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      answerA = _useState4[0],
      setAnswerA = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      answerB = _useState6[0],
      setAnswerB = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      answerC = _useState8[0],
      setAnswerC = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      finished = _useState10[0],
      setFinished = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      correct = _useState12[0],
      setCorrect = _useState12[1];

  (0, _react.useEffect)(function () {
    var abortCont = new AbortController();
    var currentQuiz = _quizData["default"][currentPosition];

    if (currentPosition < _quizData["default"].length) {
      setQuestion(currentQuiz.question);
      setAnswerA(currentQuiz.a);
      setAnswerB(currentQuiz.b);
      setAnswerC(currentQuiz.c);
      setCorrect(currentQuiz.correct);
    } else {
      setFinished(true);
    }

    return function () {
      return abortCont.abort();
    };
  }, [currentPosition]);
  return {
    question: question,
    answerA: answerA,
    answerB: answerB,
    answerC: answerC,
    correct: correct,
    finished: finished
  };
};

var _default = useLoadQuiz;
exports["default"] = _default;