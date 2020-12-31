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

var _jsxFileName = "C:\\Users\\Alan\\Documents\\GitHub\\Churrascometro\\pages\\index.js";


function Barbecue() {
  var _s = $RefreshSig$();

  function calculation() {
    _s();

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        adults = _useState[0],
        setAdults = _useState[1];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        adult = _useState2[0],
        setAdult = _useState2[1];

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        kids = _useState3[0],
        setKids = _useState3[1];

    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        kid = _useState4[0],
        setKid = _useState4[1];

    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        durations = _useState5[0],
        setDurations = _useState5[1];

    var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        duration = _useState6[0],
        setDuration = _useState6[1];

    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
        resultado = _useState7[0],
        setResultado = _useState7[1];

    setAdults([adults, adult]);
    setKids([kids, kid]);
    setDurations([durations, duration]);
    var inputAdults = adults.shift(adult);
    var inputKids = kids.shift(kid);
    var inputDurations = durations.shift(duration);
    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var screenDiv = "\n  <p>".concat(todalAmountOfMeat / 1000, "Kg de Meat<p/>\n  <p>").concat(Math.ceil(todalAmountOfBeer / 355), " Beer Cans<p/>\n  <p>").concat(Math.ceil(todalAmountOfDrink / 2000), " Drink Bottle<p/>\n  ");
    return setResultado( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      columnNumber: 23
    }, this));
  }

  _s(calculation, "QXn9ToQviyzToBZ0yWr3VGVzPDI=");

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
      lineNumber: 68,
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
      lineNumber: 69,
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
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJjYWxjdWxhdGlvbiIsInVzZVN0YXRlIiwiYWR1bHRzIiwic2V0QWR1bHRzIiwiYWR1bHQiLCJzZXRBZHVsdCIsImtpZHMiLCJzZXRLaWRzIiwia2lkIiwic2V0S2lkIiwiZHVyYXRpb25zIiwic2V0RHVyYXRpb25zIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsInJlc3VsdGFkbyIsInNldFJlc3VsdGFkbyIsImlucHV0QWR1bHRzIiwic2hpZnQiLCJpbnB1dEtpZHMiLCJpbnB1dER1cmF0aW9ucyIsInRvZGFsQW1vdW50T2ZNZWF0IiwibWVhdFBlclBlcnNvbiIsInRvZGFsQW1vdW50T2ZCZWVyIiwiYmVlclBlclBlcnNvbiIsInRvZGFsQW1vdW50T2ZEcmluayIsImRyaW5rUGVyUGVyc29uIiwic2NyZWVuRGl2IiwiTWF0aCIsImNlaWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUduQixXQUFTQyxXQUFULEdBQXNCO0FBQUE7O0FBQUEsb0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLFFBQ2JDLE1BRGE7QUFBQSxRQUNMQyxTQURLOztBQUFBLHFCQUVJRixzREFBUSxFQUZaO0FBQUEsUUFFZkcsS0FGZTtBQUFBLFFBRVJDLFFBRlE7O0FBQUEscUJBSUVKLHNEQUFRLENBQUMsRUFBRCxDQUpWO0FBQUEsUUFJZkssSUFKZTtBQUFBLFFBSVRDLE9BSlM7O0FBQUEscUJBS0FOLHNEQUFRLEVBTFI7QUFBQSxRQUtmTyxHQUxlO0FBQUEsUUFLVkMsTUFMVTs7QUFBQSxxQkFPWVIsc0RBQVEsQ0FBQyxFQUFELENBUHBCO0FBQUEsUUFPZlMsU0FQZTtBQUFBLFFBT0pDLFlBUEk7O0FBQUEscUJBUVVWLHNEQUFRLEVBUmxCO0FBQUEsUUFR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QyxRQUEzRjtBQUFvRyxVQUFJLEVBQUMsUUFBekc7QUFBa0gsaUJBQVcsRUFBQztBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixXQUFLLEVBQUV2QixHQUF0QztBQUEyQyxjQUFRLEVBQUUsa0JBQUNxQixDQUFEO0FBQUEsZUFBS3BCLE1BQU0sQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQSxPQUFyRDtBQUFrRixVQUFJLEVBQUMsTUFBdkY7QUFBOEYsVUFBSSxFQUFDLFFBQW5HO0FBQTRHLGlCQUFXLEVBQUM7QUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsV0FBSyxFQUFFbkIsUUFBdEM7QUFBZ0QsY0FBUSxFQUFFLGtCQUFDaUIsQ0FBRDtBQUFBLGVBQUtoQixXQUFXLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBLE9BQTFEO0FBQTRGLFVBQUksRUFBQyxTQUFqRztBQUEyRyxVQUFJLEVBQUMsUUFBaEg7QUFBeUgsaUJBQVcsRUFBQztBQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFRLGVBQVMsRUFBQyxtQkFBbEI7QUFBc0MsYUFBTyxFQUFFL0IsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1LYyxTQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUM7O0tBekVRZixRO0FBMkVNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MmM4YzJmYTM5Yjk3NGRlMjQ3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcblxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBjb25zdCBbYWR1bHRzLCBzZXRBZHVsdHNdID0gdXNlU3RhdGUoW10pXHJcbmNvbnN0IFthZHVsdCwgc2V0QWR1bHRdID0gdXNlU3RhdGUoKVxyXG5cclxuY29uc3QgW2tpZHMsIHNldEtpZHNdID0gdXNlU3RhdGUoW10pXHJcbmNvbnN0IFtraWQsIHNldEtpZF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5jb25zdCBbZHVyYXRpb25zLCBzZXREdXJhdGlvbnNdID0gdXNlU3RhdGUoW10pXHJcbmNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoKVxyXG5cclxuY29uc3QgW3Jlc3VsdGFkbywgc2V0UmVzdWx0YWRvXSA9IHVzZVN0YXRlKClcclxuICBzZXRBZHVsdHMoW2FkdWx0cywgYWR1bHRdKVxyXG4gIHNldEtpZHMoW2tpZHMsa2lkXSlcclxuICBzZXREdXJhdGlvbnMoW2R1cmF0aW9ucyxkdXJhdGlvbl0pXHJcblxyXG4gIGNvbnN0IGlucHV0QWR1bHRzID0gYWR1bHRzLnNoaWZ0KGFkdWx0KVxyXG4gIGNvbnN0IGlucHV0S2lkcyA9IGtpZHMuc2hpZnQoa2lkKVxyXG4gIGNvbnN0IGlucHV0RHVyYXRpb25zID0gZHVyYXRpb25zLnNoaWZ0KGR1cmF0aW9uKVxyXG5cclxuICBjb25zdCB0b2RhbEFtb3VudE9mTWVhdCA9IG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHMgKyAobWVhdFBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgLyAyICogaW5wdXRLaWRzKVxyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZCZWVyID0gYmVlclBlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0c1xyXG4gIGNvbnN0IHRvZGFsQW1vdW50T2ZEcmluayA9IGRyaW5rUGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpIC8gMiAqIGlucHV0S2lkcylcclxuXHJcbiAgY29uc3Qgc2NyZWVuRGl2ID0gYFxyXG4gIDxwPiR7dG9kYWxBbW91bnRPZk1lYXQgLyAxMDAwfUtnIGRlIE1lYXQ8cC8+XHJcbiAgPHA+JHtNYXRoLmNlaWwodG9kYWxBbW91bnRPZkJlZXIgLyAzNTUpfSBCZWVyIENhbnM8cC8+XHJcbiAgPHA+JHtNYXRoLmNlaWwodG9kYWxBbW91bnRPZkRyaW5rIC8gMjAwMCl9IERyaW5rIEJvdHRsZTxwLz5cclxuICBgXHJcbiAgcmV0dXJuIHNldFJlc3VsdGFkbyg8ZGl2PlxyXG4gICAgPHA+e3RvZGFsQW1vdW50T2ZNZWF0IC8gMTAwMH1LZyBkZSBNZWF0PC9wPlxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mQmVlciAvIDM1NSl9IEJlZXIgQ2FuczwvcD4gXHJcbiAgICA8cD57TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZEcmluayAvIDIwMDApfSBEcmluayBCb3R0bGU8L3A+IFxyXG4gIDwvZGl2PilcclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5cclxucmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nYmFyYmVjdWUnPkJhcmJlY3VlPC9oMT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2FkdWx0fSBvbkNoYW5nZT17KGUpPT5zZXRBZHVsdChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2FkdWx0cycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nQWR1bHRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2tpZH0gb25DaGFuZ2U9eyhlKT0+c2V0S2lkKGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0na2lkcycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nS2lkcycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtkdXJhdGlvbn0gb25DaGFuZ2U9eyhlKT0+c2V0RHVyYXRpb24oZS50YXJnZXQudmFsdWUpfSBuYW1lPSdkdXJhdGlvJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdEdXJhdGlvJyAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufT5DYWxjdWxhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgIHtyZXN1bHRhZG99XHJcbiAgICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhcmJlY3VlIl0sInNvdXJjZVJvb3QiOiIifQ==