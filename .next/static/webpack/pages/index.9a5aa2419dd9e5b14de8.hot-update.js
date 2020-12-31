webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Alan\\Documents\\GitHub\\Churrascometro\\pages\\index.js",
    _s = $RefreshSig$();



function Barbecue() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      adult = _useState[0],
      setAdult = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([null]),
      adults = _useState2[0],
      setAdults = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      kid = _useState3[0],
      setKid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([null]),
      kids = _useState4[0],
      setKids = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      duration = _useState5[0],
      setDuration = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([null]),
      durations = _useState6[0],
      setDurations = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      resultado = _useState7[0],
      setResultado = _useState7[1];

  function calculation() {
    setAdults([adults, adult]);
    setKids([kids, kid]);
    setDurations([durations, duration]); //pop, includes, shift

    var inputAdults = adults.pop(adult);
    var inputKids = kids.pop(kid);
    var inputDurations = durations.pop(duration); //inputAdults
    //inputKids
    //inputDurations

    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 22
    }, this);

    function reset() {
      if (adults > 0 || kids > 0 || durations > 0) {
        setAdults([adults]), setKids([kids]), setDurations([durations]);
      }
    }

    console.log(inputAdults, inputKids, inputDurations);
    return setResultado(screenDiv), reset;
  }

  function limpeza() {}

  function meatPerPerson(duration) {
    if (duration >= 6) {
      return 650;
    } else {
      return 400;
    }
  }

  function beerPerPerson(duration) {
    if (duration >= 6) {
      return 2000;
    } else {
      return 1200;
    }
  }

  function drinkPerPerson(duration) {
    if (duration >= 6) {
      return 1500;
    } else {
      return 1000;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: adult,
      onChange: function onChange(e) {
        return setAdult(e.target.value);
      },
      name: "adults",
      type: "number",
      placeholder: "Adults"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: kid,
      onChange: function onChange(e) {
        return setKid(e.target.value);
      },
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      value: duration,
      onChange: function onChange(e) {
        return setDuration(e.target.value);
      },
      name: "duratio",
      type: "number",
      placeholder: "Duratio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "bzUSsioqqF3NjqRykLZ/smt02PA=");

_c = Barbecue;
/* harmony default export */ __webpack_exports__["default"] = (Barbecue);

var _c;

$RefreshReg$(_c, "Barbecue");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0Iiwic2V0QWR1bHQiLCJhZHVsdHMiLCJzZXRBZHVsdHMiLCJraWQiLCJzZXRLaWQiLCJraWRzIiwic2V0S2lkcyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbnMiLCJzZXREdXJhdGlvbnMiLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwicG9wIiwiaW5wdXRLaWRzIiwiaW5wdXREdXJhdGlvbnMiLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwicmVzZXQiLCJjb25zb2xlIiwibG9nIiwibGltcGV6YSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUFBLG1CQUlHSixzREFBUSxFQUpYO0FBQUEsTUFJWkssR0FKWTtBQUFBLE1BSVBDLE1BSk87O0FBQUEsbUJBS0tOLHNEQUFRLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FMYjtBQUFBLE1BS1pPLElBTFk7QUFBQSxNQUtOQyxPQUxNOztBQUFBLG1CQU9hUixzREFBUSxFQVByQjtBQUFBLE1BT1pTLFFBUFk7QUFBQSxNQU9GQyxXQVBFOztBQUFBLG1CQVFlVixzREFB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QixPQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUtuQixTQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0dBL0ZRZCxROztLQUFBQSxRO0FBaUdNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YTVhYTI0MTlkZDllNWIxNGRlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoW251bGxdKVxyXG5cclxuY29uc3QgW2tpZCwgc2V0S2lkXSA9IHVzZVN0YXRlKClcclxuY29uc3QgW2tpZHMsIHNldEtpZHNdID0gdXNlU3RhdGUoW251bGxdKVxyXG5cclxuY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFtkdXJhdGlvbnMsIHNldER1cmF0aW9uc10gPSB1c2VTdGF0ZShbbnVsbF0pXHJcblxyXG5jb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoKVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBzZXRBZHVsdHMoW2FkdWx0cywgYWR1bHRdKVxyXG4gIHNldEtpZHMoW2tpZHMsIGtpZF0pXHJcbiAgc2V0RHVyYXRpb25zKFtkdXJhdGlvbnMsIGR1cmF0aW9uXSlcclxuXHJcbiAgXHJcbi8vcG9wLCBpbmNsdWRlcywgc2hpZnRcclxuICBjb25zdCBpbnB1dEFkdWx0cyA9IGFkdWx0cy5wb3AoYWR1bHQpXHJcbiAgY29uc3QgaW5wdXRLaWRzID0ga2lkcy5wb3Aoa2lkKVxyXG4gIGNvbnN0IGlucHV0RHVyYXRpb25zID0gZHVyYXRpb25zLnBvcChkdXJhdGlvbilcclxuIFxyXG4vL2lucHV0QWR1bHRzXHJcbi8vaW5wdXRLaWRzXHJcbi8vaW5wdXREdXJhdGlvbnNcclxuXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZk1lYXQgPSBtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpIC8gMiAqIGlucHV0S2lkcylcclxuICBjb25zdCB0b2RhbEFtb3VudE9mQmVlciA9IGJlZXJQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHNcclxuICBjb25zdCB0b2RhbEFtb3VudE9mRHJpbmsgPSBkcmlua1BlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcblxyXG4gIGNvbnN0IHNjcmVlbkRpdiA9ICg8ZGl2PlxyXG4gICAgPHA+e3RvZGFsQW1vdW50T2ZNZWF0IC8gMTAwMH1LZyBkZSBNZWF0PC9wPlxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mQmVlciAvIDM1NSl9IEJlZXIgQ2FuczwvcD4gXHJcbiAgICA8cD57TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZEcmluayAvIDIwMDApfSBEcmluayBCb3R0bGU8L3A+IFxyXG4gIDwvZGl2PilcclxuXHJcbiAgZnVuY3Rpb24gcmVzZXQoKXtcclxuICAgIGlmKGFkdWx0cyA+IDAgfHwga2lkcyA+IDAgfHwgZHVyYXRpb25zID4gMCl7XHJcbiAgICAgIHNldEFkdWx0cyhbYWR1bHRzXSksXHJcbiAgICAgIHNldEtpZHMoW2tpZHNdKSxcclxuICAgICAgc2V0RHVyYXRpb25zKFtkdXJhdGlvbnNdKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG5jb25zb2xlLmxvZyhpbnB1dEFkdWx0cywgaW5wdXRLaWRzLCBpbnB1dER1cmF0aW9ucylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHNldFJlc3VsdGFkbyhzY3JlZW5EaXYpLFxyXG4gICAgcmVzZXRcclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gbGltcGV6YSgpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5cclxucmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nYmFyYmVjdWUnPkJhcmJlY3VlPC9oMT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2FkdWx0fSBvbkNoYW5nZT17KGUpPT5zZXRBZHVsdChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2FkdWx0cycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nQWR1bHRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2tpZH0gb25DaGFuZ2U9eyhlKT0+c2V0S2lkKGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0na2lkcycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nS2lkcycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtkdXJhdGlvbn0gb25DaGFuZ2U9eyhlKT0+c2V0RHVyYXRpb24oZS50YXJnZXQudmFsdWUpfSBuYW1lPSdkdXJhdGlvJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdEdXJhdGlvJyAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufSBvbkNoYW5nZT17bGltcGV6YX0+Q2FsY3VsYXRpb248L2J1dHRvbj5cclxuICAgICAgICB7cmVzdWx0YWRvfVxyXG4gICAgICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJiZWN1ZSJdLCJzb3VyY2VSb290IjoiIn0=