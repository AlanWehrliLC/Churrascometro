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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0]),
      adults = _useState2[0],
      setAdults = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      kid = _useState3[0],
      setKid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0]),
      kids = _useState4[0],
      setKids = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      duration = _useState5[0],
      setDuration = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0]),
      durations = _useState6[0],
      setDurations = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      resultado = _useState7[0],
      setResultado = _useState7[1];

  function callCalculation() {
    setAdults([adults, adult]);
    setKids([kids, kid]);
    setDurations([durations, duration]);
    var inputAdults = adults.pop(adult);
    var inputKids = kids.pop(kid);
    var inputDurations = durations.pop(duration);
  }

  function calculation() {
    setAdults([adults, adult]);
    setKids([kids, kid]);
    setDurations([durations, duration]);
    var inputAdults = adults.pop(adult);
    var inputKids = kids.pop(kid);
    var inputDurations = durations.pop(duration);
    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }, this);

    console.log(inputAdults, inputKids, inputDurations);
    return setResultado(screenDiv);
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
      lineNumber: 82,
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
      lineNumber: 83,
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
      lineNumber: 84,
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
      lineNumber: 85,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "RzSUQnV0fUfn5jqLJP45+nk+lPg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0Iiwic2V0QWR1bHQiLCJhZHVsdHMiLCJzZXRBZHVsdHMiLCJraWQiLCJzZXRLaWQiLCJraWRzIiwic2V0S2lkcyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbnMiLCJzZXREdXJhdGlvbnMiLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxsQ2FsY3VsYXRpb24iLCJpbnB1dEFkdWx0cyIsInBvcCIsImlucHV0S2lkcyIsImlucHV0RHVyYXRpb25zIiwiY2FsY3VsYXRpb24iLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImxpbXBlemEiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxFQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FGakI7QUFBQSxNQUVaRyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFBQSxtQkFJR0osc0RBQVEsRUFKWDtBQUFBLE1BSVpLLEdBSlk7QUFBQSxNQUlQQyxNQUpPOztBQUFBLG1CQUtLTixzREFBUSxDQUFDLENBQUMsQ0FBRCxDQUFELENBTGI7QUFBQSxNQUtaTyxJQUxZO0FBQUEsTUFLTkMsT0FMTTs7QUFBQSxtQkFPYVIsc0RBQVEsRUFQckI7QUFBQSxNQU9aUyxRQVBZO0FBQUEsTUFPRkMsV0FQRTs7QUFBQSxt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QUE7QUFBQSxZQUpKLGVBS0k7QUFBUSxlQUFTLEVBQUMsbUJBQWxCO0FBQXNDLGFBQU8sRUFBRWYsV0FBL0M7QUFBNEQsY0FBUSxFQUFFWSxPQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUtuQixTQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0dBdkZRZCxROztLQUFBQSxRO0FBeUZNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNTQwZDNjNDIxMjliNDczOWM1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW2tpZCwgc2V0S2lkXSA9IHVzZVN0YXRlKClcclxuY29uc3QgW2tpZHMsIHNldEtpZHNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFtkdXJhdGlvbnMsIHNldER1cmF0aW9uc10gPSB1c2VTdGF0ZShbMF0pXHJcblxyXG5jb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoKVxyXG5cclxuZnVuY3Rpb24gY2FsbENhbGN1bGF0aW9uKCl7XHJcbiAgc2V0QWR1bHRzKFthZHVsdHMsIGFkdWx0XSlcclxuICBzZXRLaWRzKFtraWRzLCBraWRdKVxyXG4gIHNldER1cmF0aW9ucyhbZHVyYXRpb25zLCBkdXJhdGlvbl0pXHJcbiAgY29uc3QgaW5wdXRBZHVsdHMgPSBhZHVsdHMucG9wKGFkdWx0KVxyXG4gIGNvbnN0IGlucHV0S2lkcyA9IGtpZHMucG9wKGtpZClcclxuICBjb25zdCBpbnB1dER1cmF0aW9ucyA9IGR1cmF0aW9ucy5wb3AoZHVyYXRpb24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0aW9uKCl7XHJcbiAgc2V0QWR1bHRzKFthZHVsdHMsIGFkdWx0XSlcclxuICBzZXRLaWRzKFtraWRzLCBraWRdKVxyXG4gIHNldER1cmF0aW9ucyhbZHVyYXRpb25zLCBkdXJhdGlvbl0pXHJcbiAgY29uc3QgaW5wdXRBZHVsdHMgPSBhZHVsdHMucG9wKGFkdWx0KVxyXG4gIGNvbnN0IGlucHV0S2lkcyA9IGtpZHMucG9wKGtpZClcclxuICBjb25zdCBpbnB1dER1cmF0aW9ucyA9IGR1cmF0aW9ucy5wb3AoZHVyYXRpb24pXHJcbiBcclxuICBjb25zdCB0b2RhbEFtb3VudE9mTWVhdCA9IG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZCZWVyID0gYmVlclBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0c1xyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZEcmluayA9IGRyaW5rUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpIC8gMiAqIGlucHV0S2lkcylcclxuXHJcbiAgY29uc3Qgc2NyZWVuRGl2ID0gKDxkaXY+XHJcbiAgICA8cD57dG9kYWxBbW91bnRPZk1lYXQgLyAxMDAwfUtnIGRlIE1lYXQ8L3A+XHJcbiAgICA8cD57TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZCZWVyIC8gMzU1KX0gQmVlciBDYW5zPC9wPiBcclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkRyaW5rIC8gMjAwMCl9IERyaW5rIEJvdHRsZTwvcD4gXHJcbiAgPC9kaXY+KVxyXG4gIFxyXG5cclxuY29uc29sZS5sb2coaW5wdXRBZHVsdHMsIGlucHV0S2lkcywgaW5wdXREdXJhdGlvbnMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBzZXRSZXN1bHRhZG8oc2NyZWVuRGl2KVxyXG4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaW1wZXphKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtZWF0UGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiA2NTBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiA0MDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZXJQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDIwMDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMjAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmlua1BlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMTUwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEwMDBcclxuICB9XHJcbn1cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17YWR1bHR9IG9uQ2hhbmdlPXsoZSk9PnNldEFkdWx0KGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nYWR1bHRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdBZHVsdHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17a2lkfSBvbkNoYW5nZT17KGUpPT5zZXRLaWQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdraWRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdLaWRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2R1cmF0aW9ufSBvbkNoYW5nZT17KGUpPT5zZXREdXJhdGlvbihlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2R1cmF0aW8nIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0R1cmF0aW8nICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjYWxjdWxhdGlvbkdsb2JhbCcgb25DbGljaz17Y2FsY3VsYXRpb259IG9uQ2hhbmdlPXtsaW1wZXphfT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIHtyZXN1bHRhZG99XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==