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
      adults = _useState[0],
      setAdults = _useState[1]; //const kids = window.document.getElementById('kids').value
  //const duration = window.document.getElementById('duration').value
  //const result = window.document.getElementById('result')


  function calculation() {
    var inputAdults = adults;
    var inputKids = kids;
    var inputDuratio = duration;
    var todalAmountOfMeat = meatPerPerson(inputDuratio) * inputAdults + meatPerPerson(inputDuratio) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDuratio) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDuratio) * inputAdults + meatPerPerson(inputDuratio) / 2 * inputKids;
    result.innerHTML = "<p>".concat(todalAmountOfMeat / 1000, "Kg de Meat<p/>");
    result.innerHTML += "<p>".concat(Math.ceil(todalAmountOfBeer / 355), " Beer Cans<p/>");
    result.innerHTML += "<p>".concat(Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle<p/>");
  }

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
      lineNumber: 49,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "adults",
      name: "adults",
      type: "number",
      placeholder: "Adults",
      value: adults
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "kids",
      name: "kids",
      type: "number",
      placeholder: "Kids"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "inputGlobal",
      id: "duration",
      name: "duration",
      type: "number",
      placeholder: "Duration (h)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "result"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "O7edndZExDC2F+hh2XWwSuFQ4ko=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImNhbGN1bGF0aW9uIiwiaW5wdXRBZHVsdHMiLCJpbnB1dEtpZHMiLCJraWRzIiwiaW5wdXREdXJhdGlvIiwiZHVyYXRpb24iLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInJlc3VsdCIsImlubmVySFRNTCIsIk1hdGgiLCJjZWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsRUFEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESSxpQkFFbkI7QUFDQTtBQUNBOzs7QUFFQSxXQUFTQyxXQUFULEdBQXNCO0FBQ3BCLFFBQU1DLFdBQVcsR0FBR0gsTUFBcEI7QUFDQSxRQUFNSSxTQUFTLEdBQUdDLElBQWxCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQyxRQUFyQjtBQUVBLFFBQU1DLGlCQUFpQixHQUFHQyxhQUFhLENBQUNILFlBQUQsQ0FBYixHQUE4QkgsV0FBOUIsR0FBNkNNLGFBQWEsQ0FBQ0gsWUFBRCxDQUFiLEdBQThCLENBQTlCLEdBQWtDRixTQUF6RztBQUNBLFFBQU1NLGlCQUFpQixHQUFHQyxhQUFhLENBQUNMLFlBQUQsQ0FBYixHQUE4QkgsV0FBeEQ7QUFDQSxRQUFNUyxrQkFBa0IsR0FBR0MsY0FBYyxDQUFDUCxZQUFELENBQWQsR0FBK0JILFdBQS9CLEdBQThDTSxhQUFhLENBQUNILFlBQUQsQ0FBYixHQUE4QixDQUE5QixHQUFrQ0YsU0FBM0c7QUFFQVUsVUFBTSxDQUFDQyxTQUFQLGdCQUF5QlAsaUJBQWlCLEdBQUcsSUFBN0M7QUFDQU0sVUFBTSxDQUFDQyxTQUFQLGlCQUEwQkMsSUFBSSxDQUFDQyxJQUFMLENBQVVQLGlCQUFpQixHQUFHLEdBQTlCLENBQTFCO0FBQ0FJLFVBQU0sQ0FBQ0MsU0FBUCxpQkFBMEJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxrQkFBa0IsR0FBRyxJQUEvQixDQUExQjtBQUNEOztBQUVELFdBQVNILGFBQVQsQ0FBdUJGLFFBQXZCLEVBQWdDO0FBQzlCLFFBQUdBLFFBQVEsSUFBSSxDQUFmLEVBQWlCO0FBQ2YsYUFBTyxHQUFQO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsYUFBTyxHQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTSSxhQUFULENBQXVCSixRQUF2QixFQUFnQztBQUM5QixRQUFHQSxRQUFRLElBQUksQ0FBZixFQUFpQjtBQUNmLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU00sY0FBVCxDQUF3Qk4sUUFBeEIsRUFBaUM7QUFDL0IsUUFBR0EsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFDZixhQUFPLElBQVA7QUFDRCxLQUZELE1BRUs7QUFDSCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixRQUFFLEVBQUMsUUFBbEM7QUFBMkMsVUFBSSxFQUFDLFFBQWhEO0FBQXlELFVBQUksRUFBQyxRQUE5RDtBQUF1RSxpQkFBVyxFQUFDLFFBQW5GO0FBQTRGLFdBQUssRUFBRVA7QUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsUUFBRSxFQUFDLE1BQWxDO0FBQXlDLFVBQUksRUFBQyxNQUE5QztBQUFxRCxVQUFJLEVBQUMsUUFBMUQ7QUFBbUUsaUJBQVcsRUFBQztBQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixRQUFFLEVBQUMsVUFBbEM7QUFBNkMsVUFBSSxFQUFDLFVBQWxEO0FBQTZELFVBQUksRUFBQyxRQUFsRTtBQUEyRSxpQkFBVyxFQUFDO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQVEsZUFBUyxFQUFDLG1CQUFsQjtBQUFzQyxhQUFPLEVBQUVFLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSTtBQUFLLFFBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdDOztHQXZEUUosUTs7S0FBQUEsUTtBQXlETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTJkYmY2MjVlMjk0OWFkY2RiMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCYXJiZWN1ZSgpe1xyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoKVxyXG4vL2NvbnN0IGtpZHMgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tpZHMnKS52YWx1ZVxyXG4vL2NvbnN0IGR1cmF0aW9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdXJhdGlvbicpLnZhbHVlXHJcbi8vY29uc3QgcmVzdWx0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBjb25zdCBpbnB1dEFkdWx0cyA9IGFkdWx0c1xyXG4gIGNvbnN0IGlucHV0S2lkcyA9IGtpZHNcclxuICBjb25zdCBpbnB1dER1cmF0aW8gPSBkdXJhdGlvblxyXG5cclxuICBjb25zdCB0b2RhbEFtb3VudE9mTWVhdCA9IG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvKSAvIDIgKiBpbnB1dEtpZHMpXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZkJlZXIgPSBiZWVyUGVyUGVyc29uKGlucHV0RHVyYXRpbykgKiBpbnB1dEFkdWx0c1xyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZEcmluayA9IGRyaW5rUGVyUGVyc29uKGlucHV0RHVyYXRpbykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpbykgLyAyICogaW5wdXRLaWRzKVxyXG5cclxuICByZXN1bHQuaW5uZXJIVE1MID0gYDxwPiR7dG9kYWxBbW91bnRPZk1lYXQgLyAxMDAwfUtnIGRlIE1lYXQ8cC8+YFxyXG4gIHJlc3VsdC5pbm5lckhUTUwgKz0gYDxwPiR7TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZCZWVyIC8gMzU1KX0gQmVlciBDYW5zPHAvPmBcclxuICByZXN1bHQuaW5uZXJIVE1MICs9IGA8cD4ke01hdGguY2VpbCh0b2RhbEFtb3VudE9mRHJpbmsgLyAyMDAwKX0gRHJpbmsgQm90dGxlPHAvPmBcclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyBpZD0nYWR1bHRzJyBuYW1lPSdhZHVsdHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0FkdWx0cycgdmFsdWU9e2FkdWx0c30gLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgaWQ9J2tpZHMnIG5hbWU9J2tpZHMnIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0tpZHMnIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIGlkPSdkdXJhdGlvbicgbmFtZT0nZHVyYXRpb24nIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0R1cmF0aW9uIChoKScgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgaWQ9J3Jlc3VsdCc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJiZWN1ZSJdLCJzb3VyY2VSb290IjoiIn0=