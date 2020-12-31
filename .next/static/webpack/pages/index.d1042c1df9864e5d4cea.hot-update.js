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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([undefined]),
      adults = _useState2[0],
      setAdults = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      kid = _useState3[0],
      setKid = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([undefined]),
      kids = _useState4[0],
      setKids = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      duration = _useState5[0],
      setDuration = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([undefined]),
      durations = _useState6[0],
      setDurations = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      resultado = _useState7[0],
      setResultado = _useState7[1];

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
        lineNumber: 28,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 22
    }, this);

    var screenAlert = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Preencha todos os campos!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 24
    }, this);

    var welcome = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Welcome!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, this);

    console.log(inputAdults, inputKids, inputDurations);

    if (typeof inputAdults === 'undefined' && typeof inputKids === 'undefined' && typeof inputDurations === 'undefined') {
      return setResultado(welcome);
    }

    if (inputAdults > 0 && inputKids > 0 && inputDurations > 0) {
      return setResultado(screenDiv);
    } else {
      setResultado(screenAlert);
    }
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
      lineNumber: 81,
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
      lineNumber: 82,
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
      lineNumber: 83,
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
      lineNumber: 84,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: "calculationGlobal",
      type: "button",
      onClick: calculation,
      value: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "YJR+euJZOe0Tn4ghuCrYJ6J0eYY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0Iiwic2V0QWR1bHQiLCJ1bmRlZmluZWQiLCJhZHVsdHMiLCJzZXRBZHVsdHMiLCJraWQiLCJzZXRLaWQiLCJraWRzIiwic2V0S2lkcyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJkdXJhdGlvbnMiLCJzZXREdXJhdGlvbnMiLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwicG9wIiwiaW5wdXRLaWRzIiwiaW5wdXREdXJhdGlvbnMiLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwic2NyZWVuQWxlcnQiLCJ3ZWxjb21lIiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLEVBRGY7QUFBQSxNQUNaQyxLQURZO0FBQUEsTUFDTEMsUUFESzs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxDQUFDRyxTQUFELENBQUQsQ0FGakI7QUFBQSxNQUVaQyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFBQSxtQkFJR0wsc0RBQVEsRUFKWDtBQUFBLE1BSVpNLEdBSlk7QUFBQSxNQUlQQyxNQUpPOztBQUFBLG1CQUtLUCxzREFBUSxDQUFDLENBQUNHLFNBQUQsQ0FBRCxDQUxiO0FBQUEsTUFLWkssSUFMWTtBQUFBLE1BS05DLE9BTE07O0FBQUEsbUJBT2FULHNEQUFRLEVBUHJCO0FBQUEsTUFPWlUsUUFQWTtBQUFBLE1BT0ZDLFdB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QVYsQ0FBaEI7QUFBQSxPQUExRDtBQUE0RixVQUFJLEVBQUMsU0FBakc7QUFBMkcsVUFBSSxFQUFDLFFBQWhIO0FBQXlILGlCQUFXLEVBQUM7QUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0k7QUFBTyxlQUFTLEVBQUMsbUJBQWpCO0FBQXFDLFVBQUksRUFBQyxRQUExQztBQUFvRCxhQUFPLEVBQUVwQixXQUE3RDtBQUEwRSxXQUFLLEVBQUM7QUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLEVBTUtGLFNBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVQzs7R0F0RlFmLFE7O0tBQUFBLFE7QUF3Rk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxMDQyYzFkZjk4NjRlNWQ0Y2VhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gQmFyYmVjdWUoKXtcclxuY29uc3QgW2FkdWx0LCBzZXRBZHVsdF0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFthZHVsdHMsIHNldEFkdWx0c10gPSB1c2VTdGF0ZShbdW5kZWZpbmVkXSlcclxuXHJcbmNvbnN0IFtraWQsIHNldEtpZF0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFtraWRzLCBzZXRLaWRzXSA9IHVzZVN0YXRlKFt1bmRlZmluZWRdKVxyXG5cclxuY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgpXHJcbmNvbnN0IFtkdXJhdGlvbnMsIHNldER1cmF0aW9uc10gPSB1c2VTdGF0ZShbdW5kZWZpbmVkXSlcclxuXHJcbmNvbnN0IFtyZXN1bHRhZG8sIHNldFJlc3VsdGFkb10gPSB1c2VTdGF0ZSgpXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvbigpe1xyXG4gIHNldEFkdWx0cyhbYWR1bHRzLCBhZHVsdF0pXHJcbiAgc2V0S2lkcyhba2lkcywga2lkXSlcclxuICBzZXREdXJhdGlvbnMoW2R1cmF0aW9ucywgZHVyYXRpb25dKVxyXG4gIGNvbnN0IGlucHV0QWR1bHRzID0gYWR1bHRzLnBvcChhZHVsdClcclxuICBjb25zdCBpbnB1dEtpZHMgPSBraWRzLnBvcChraWQpXHJcbiAgY29uc3QgaW5wdXREdXJhdGlvbnMgPSBkdXJhdGlvbnMucG9wKGR1cmF0aW9uKVxyXG4gXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZk1lYXQgPSBtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpIC8gMiAqIGlucHV0S2lkcylcclxuICBjb25zdCB0b2RhbEFtb3VudE9mQmVlciA9IGJlZXJQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHNcclxuICBjb25zdCB0b2RhbEFtb3VudE9mRHJpbmsgPSBkcmlua1BlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcblxyXG4gIGNvbnN0IHNjcmVlbkRpdiA9ICg8ZGl2PlxyXG4gICAgPHA+e3RvZGFsQW1vdW50T2ZNZWF0IC8gMTAwMH1LZyBkZSBNZWF0PC9wPlxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mQmVlciAvIDM1NSl9IEJlZXIgQ2FuczwvcD4gXHJcbiAgICA8cD57TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZEcmluayAvIDIwMDApfSBEcmluayBCb3R0bGU8L3A+IFxyXG4gIDwvZGl2PilcclxuXHJcbiAgY29uc3Qgc2NyZWVuQWxlcnQgPSAoPGRpdj5cclxuICAgIDxwPlByZWVuY2hhIHRvZG9zIG9zIGNhbXBvcyE8L3A+XHJcbiAgPC9kaXY+KVxyXG5cclxuICBjb25zdCB3ZWxjb21lID0gKFxyXG4gICAgPGRpdj5cclxuICAgIDxwPldlbGNvbWUhPC9wPlxyXG4gIDwvZGl2PlxyXG4gIClcclxuXHJcbiAgY29uc29sZS5sb2coaW5wdXRBZHVsdHMsIGlucHV0S2lkcywgaW5wdXREdXJhdGlvbnMpXHJcblxyXG4gIGlmKHR5cGVvZiBpbnB1dEFkdWx0cyA9PT0gJ3VuZGVmaW5lZCcgICYmIHR5cGVvZiBpbnB1dEtpZHMgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbnB1dER1cmF0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgcmV0dXJuIHNldFJlc3VsdGFkbyh3ZWxjb21lKVxyXG4gIH1pZihpbnB1dEFkdWx0cyA+IDAgJiYgaW5wdXRLaWRzID4gMCAmJiBpbnB1dER1cmF0aW9ucyA+IDApe1xyXG4gICAgcmV0dXJuIHNldFJlc3VsdGFkbyhzY3JlZW5EaXYpXHJcbiAgfWVsc2V7XHJcbiAgICBzZXRSZXN1bHRhZG8oc2NyZWVuQWxlcnQpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZWF0UGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiA2NTBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiA0MDBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZXJQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDIwMDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMjAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmlua1BlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gMTUwMFxyXG4gIH1lbHNle1xyXG4gICAgcmV0dXJuIDEwMDBcclxuICB9XHJcbn1cclxuXHJcblxyXG5yZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdiYXJiZWN1ZSc+QmFyYmVjdWU8L2gxPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17YWR1bHR9IG9uQ2hhbmdlPXsoZSk9PnNldEFkdWx0KGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0nYWR1bHRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdBZHVsdHMnICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0R2xvYmFsJyB2YWx1ZT17a2lkfSBvbkNoYW5nZT17KGUpPT5zZXRLaWQoZS50YXJnZXQudmFsdWUpfSBuYW1lPSdraWRzJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdLaWRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2R1cmF0aW9ufSBvbkNoYW5nZT17KGUpPT5zZXREdXJhdGlvbihlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2R1cmF0aW8nIHR5cGU9J251bWJlcicgcGxhY2Vob2xkZXI9J0R1cmF0aW8nICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2NhbGN1bGF0aW9uR2xvYmFsJyB0eXBlPSdidXR0b24nICBvbkNsaWNrPXtjYWxjdWxhdGlvbn0gdmFsdWU9J0NhbGN1bGF0aW9uJyAvPlxyXG4gICAgICAgIHtyZXN1bHRhZG99XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==