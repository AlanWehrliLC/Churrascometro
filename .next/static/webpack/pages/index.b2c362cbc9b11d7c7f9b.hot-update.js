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

    if (inputAdults) {
      return calculation;
    }
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
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 86,
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
      lineNumber: 87,
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
      lineNumber: 88,
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
      lineNumber: 89,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0Iiwic2V0QWR1bHQiLCJhZHVsdHMiLCJzZXRBZHVsdHMiLCJraWQiLCJzZXRLaWQiLCJraWRzIiwic2V0S2lkcyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbnMiLCJzZXREdXJhdGlvbnMiLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxsQ2FsY3VsYXRpb24iLCJpbnB1dEFkdWx0cyIsInBvcCIsImlucHV0S2lkcyIsImlucHV0RHVyYXRpb25zIiwiY2FsY3VsYXRpb24iLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImxpbXBlemEiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxFQURmO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLFFBREs7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FGakI7QUFBQSxNQUVaRyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFBQSxtQkFJR0osc0RBQVEsRUFKWDtBQUFBLE1BSVpLLEdBSlk7QUFBQSxNQUlQQyxNQUpPOztBQUFBLG1CQUtLTixzREFBUSxDQUFDLENBQUMsQ0FBRCxDQUFELENBTGI7QUFBQSxNQUtaTyxJQUxZO0FBQUEsTUFLTkMsT0FMTTs7QUFBQSxtQkFPYVIsc0RBQVEsRUFQckI7QUFBQSxNQU9aUyxRQVBZO0FBQUEsTUFPRkMsV0FQRTs7QUFBQSxt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QyxRQUFoSDtBQUF5SCxpQkFBVyxFQUFDO0FBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQVEsZUFBUyxFQUFDLG1CQUFsQjtBQUFzQyxhQUFPLEVBQUVmLFdBQS9DO0FBQTRELGNBQVEsRUFBRVksT0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1LbkIsU0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVDOztHQTNGUWQsUTs7S0FBQUEsUTtBQTZGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjJjMzYyY2JjOWIxMWQ3YzdmOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBCYXJiZWN1ZSgpe1xyXG5jb25zdCBbYWR1bHQsIHNldEFkdWx0XSA9IHVzZVN0YXRlKClcclxuY29uc3QgW2FkdWx0cywgc2V0QWR1bHRzXSA9IHVzZVN0YXRlKFswXSlcclxuXHJcbmNvbnN0IFtraWQsIHNldEtpZF0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFtraWRzLCBzZXRLaWRzXSA9IHVzZVN0YXRlKFswXSlcclxuXHJcbmNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoKVxyXG5jb25zdCBbZHVyYXRpb25zLCBzZXREdXJhdGlvbnNdID0gdXNlU3RhdGUoWzBdKVxyXG5cclxuY29uc3QgW3Jlc3VsdGFkbywgc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKClcclxuXHJcbmZ1bmN0aW9uIGNhbGxDYWxjdWxhdGlvbigpe1xyXG4gIHNldEFkdWx0cyhbYWR1bHRzLCBhZHVsdF0pXHJcbiAgc2V0S2lkcyhba2lkcywga2lkXSlcclxuICBzZXREdXJhdGlvbnMoW2R1cmF0aW9ucywgZHVyYXRpb25dKVxyXG4gIGNvbnN0IGlucHV0QWR1bHRzID0gYWR1bHRzLnBvcChhZHVsdClcclxuICBjb25zdCBpbnB1dEtpZHMgPSBraWRzLnBvcChraWQpXHJcbiAgY29uc3QgaW5wdXREdXJhdGlvbnMgPSBkdXJhdGlvbnMucG9wKGR1cmF0aW9uKVxyXG5cclxuICBpZihpbnB1dEFkdWx0cyl7XHJcbiAgICByZXR1cm4gY2FsY3VsYXRpb25cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0aW9uKCl7XHJcbiAgc2V0QWR1bHRzKFthZHVsdHMsIGFkdWx0XSlcclxuICBzZXRLaWRzKFtraWRzLCBraWRdKVxyXG4gIHNldER1cmF0aW9ucyhbZHVyYXRpb25zLCBkdXJhdGlvbl0pXHJcbiAgY29uc3QgaW5wdXRBZHVsdHMgPSBhZHVsdHMucG9wKGFkdWx0KVxyXG4gIGNvbnN0IGlucHV0S2lkcyA9IGtpZHMucG9wKGtpZClcclxuICBjb25zdCBpbnB1dER1cmF0aW9ucyA9IGR1cmF0aW9ucy5wb3AoZHVyYXRpb24pXHJcbiBcclxuICBjb25zdCB0b2RhbEFtb3VudE9mTWVhdCA9IG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZCZWVyID0gYmVlclBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0c1xyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZEcmluayA9IGRyaW5rUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpIC8gMiAqIGlucHV0S2lkcylcclxuXHJcbiAgY29uc3Qgc2NyZWVuRGl2ID0gKDxkaXY+XHJcbiAgICA8cD57dG9kYWxBbW91bnRPZk1lYXQgLyAxMDAwfUtnIGRlIE1lYXQ8L3A+XHJcbiAgICA8cD57TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZCZWVyIC8gMzU1KX0gQmVlciBDYW5zPC9wPiBcclxuICAgIDxwPntNYXRoLmNlaWwodG9kYWxBbW91bnRPZkRyaW5rIC8gMjAwMCl9IERyaW5rIEJvdHRsZTwvcD4gXHJcbiAgPC9kaXY+KVxyXG4gIFxyXG5cclxuY29uc29sZS5sb2coaW5wdXRBZHVsdHMsIGlucHV0S2lkcywgaW5wdXREdXJhdGlvbnMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBzZXRSZXN1bHRhZG8oc2NyZWVuRGl2KVxyXG4gICAgXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaW1wZXphKCl7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtZWF0UGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiA2NTBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiA0MDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZXJQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDIwMDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMjAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmlua1BlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMTUwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEwMDBcclxuICB9XHJcbn1cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17YWR1bHR9IG9uQ2hhbmdlPXsoZSk9PnNldEFkdWx0KGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nYWR1bHRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdBZHVsdHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17a2lkfSBvbkNoYW5nZT17KGUpPT5zZXRLaWQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdraWRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdLaWRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2R1cmF0aW9ufSBvbkNoYW5nZT17KGUpPT5zZXREdXJhdGlvbihlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2R1cmF0aW8nIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0R1cmF0aW8nICAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdjYWxjdWxhdGlvbkdsb2JhbCcgb25DbGljaz17Y2FsY3VsYXRpb259IG9uQ2hhbmdlPXtsaW1wZXphfT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIHtyZXN1bHRhZG99XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==