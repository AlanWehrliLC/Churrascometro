webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Alan\\Documents\\GitHub\\Churrascometro\\pages\\index.js",
    _s = $RefreshSig$();



function Barbecue() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      adults = _useState[0],
      setAdults = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      adult = _useState2[0],
      setAdult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      kids = _useState3[0],
      setKids = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      kid = _useState4[0],
      setKid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      durations = _useState5[0],
      setDurations = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      duration = _useState6[0],
      setDuration = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      resultado = _useState7[0],
      setResultado = _useState7[1];

  function calculation() {
    setAdults([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(adults), [adult]));
    setKids([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(kids), [kid]));
    setDurations([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(durations), [duration])); //pop, includes, shift

    var inputAdults = adults.map(function (adult) {
      return adult;
    });
    var inputKids = kids.map(function (kid) {
      return kid;
    });
    var inputDurations = durations.map(function (duration) {
      return duration;
    }); //inputAdults
    //inputKids
    //inputDurations

    var todalAmountOfMeat = meatPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;
    var todalAmountOfBeer = beerPerPerson(inputDurations) * inputAdults;
    var todalAmountOfDrink = drinkPerPerson(inputDurations) * inputAdults + meatPerPerson(inputDurations) / 2 * inputKids;

    var screenDiv = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [todalAmountOfMeat / 1000, "Kg de Meat"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: [Math.ceil(todalAmountOfBeer / 355), " Beer Cans"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "barbecue",
      children: "Barbecue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      lineNumber: 78,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      lineNumber: 79,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
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
      lineNumber: 80,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "calculationGlobal",
      onClick: calculation,
      onChange: limpeza,
      children: "Calculation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, this), resultado]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

_s(Barbecue, "QXn9ToQviyzToBZ0yWr3VGVzPDI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFyYmVjdWUiLCJ1c2VTdGF0ZSIsImFkdWx0cyIsInNldEFkdWx0cyIsImFkdWx0Iiwic2V0QWR1bHQiLCJraWRzIiwic2V0S2lkcyIsImtpZCIsInNldEtpZCIsImR1cmF0aW9ucyIsInNldER1cmF0aW9ucyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJyZXN1bHRhZG8iLCJzZXRSZXN1bHRhZG8iLCJjYWxjdWxhdGlvbiIsImlucHV0QWR1bHRzIiwibWFwIiwiaW5wdXRLaWRzIiwiaW5wdXREdXJhdGlvbnMiLCJ0b2RhbEFtb3VudE9mTWVhdCIsIm1lYXRQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mQmVlciIsImJlZXJQZXJQZXJzb24iLCJ0b2RhbEFtb3VudE9mRHJpbmsiLCJkcmlua1BlclBlcnNvbiIsInNjcmVlbkRpdiIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImxpbXBlemEiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQTJFO0FBQzVEO0FBQ2YsaUNBQWlDLDJGQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZFO0FBQ0o7QUFDc0I7QUFDbEI7QUFDOUQ7QUFDZixTQUFTLDRGQUFpQixTQUFTLDBGQUFlLFNBQVMscUdBQTBCLFNBQVMsNEZBQWlCO0FBQy9HLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUEyRTtBQUM1RDtBQUNmO0FBQ0Esb0NBQW9DLDJGQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsMkZBQWdCO0FBQ3RHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUVBLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDWkMsTUFEWTtBQUFBLE1BQ0pDLFNBREk7O0FBQUEsbUJBRU9GLHNEQUFRLEVBRmY7QUFBQSxNQUVaRyxLQUZZO0FBQUEsTUFFTEMsUUFGSzs7QUFBQSxtQkFJS0osc0RBQVEsQ0FBQyxFQUFELENBSmI7QUFBQSxNQUlaSyxJQUpZO0FBQUEsTUFJTkMsT0FKTTs7QUFBQSxtQkFLR04sc0RBQVEsRUFMWDtBQUFBLE1BS1pPLEdBTFk7QUFBQSxNQUtQQyxNQUxPOztBQUFBLG1CQU9lUixzREFBUSxDQUFDLEVBQUQsQ0FQdkI7QUFBQSxNQU9aUyxTQVBZO0FBQUEsTUFPREMsWUFQQzs7QUFBQSxtQkFRYVYsc0RBQVEsRUFSckI7QUFBQSxNQVFaVyxRQVJZO0FBQUEsTUFRRkMsV0FSRTs7QUFBQSxtQkFVZVosc0RBQVEsRUFWdkI7QUFBQSxNQVVaYSxTQVZZO0FBQUEsTUFVREMsWUFWQzs7QUFZbkIsV0FBU0MsV0FBVCxHQUFzQjtBQUNwQmIsYUFBUyx3R0FBTUQsTUFBTixJQUFjRSxLQUFkLEdBQVQ7QUFDQUcsV0FBTyx3R0FBTUQsSUFBTixJQUFZRSxHQUFaLEdBQVA7QUFDQUcsZ0JBQVksd0dBQU1ELFNBQU4sSUFBaUJFLFFBQWpCLEdBQVosQ0FIb0IsQ0FNdEI7O0FBQ0UsUUFBTUssV0FBVyxHQUFHZixNQUFNLENBQUNnQixHQUFQLENBQVcsVUFBQWQsS0FBSztBQUFBLGFBQUlBLEtBQUo7QUFBQSxLQUFoQixDQUFwQjtBQUNBLFFBQU1lLFNBQVMsR0FBR2IsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQVYsR0FBRztBQUFBLGFBQUdBLEdBQUg7QUFBQSxLQUFaLENBQWxCO0FBQ0EsUUFBTVksY0FBYyxHQUFHVixTQUFTLENBQUNRLEdBQVYsQ0FBYyxVQUFBTixRQUFRO0FBQUEsYUFBSUEsUUFBSjtBQUFBLEtBQXRCLENBQXZCLENBVG9CLENBV3RCO0FBQ0E7QUFDQTs7QUFFRSxRQUFNUyxpQkFBaUIsR0FBR0MsYUFBYSxDQUFDRixjQUFELENBQWIsR0FBZ0NILFdBQWhDLEdBQStDSyxhQUFhLENBQUNGLGNBQUQsQ0FBYixHQUFnQyxDQUFoQyxHQUFvQ0QsU0FBN0c7QUFDQSxRQUFNSSxpQkFBaUIsR0FBR0MsYUFBYSxDQUFDSixjQUFELENBQWIsR0FBZ0NILFdBQTFEO0FBQ0EsUUFBTVEsa0JBQWtCLEdBQUdDLGNBQWMsQ0FBQ04sY0FBRCxDQUFkLEdBQWlDSCxXQUFqQyxHQUFnREssYUFBYSxDQUFDRixjQUFELENBQWIsR0FBZ0MsQ0FBaEMsR0FBb0NELFNBQS9HOztBQUVBLFFBQU1RLFNBQVMsZ0JBQUk7QUFBQSw4QkFDakI7QUFBQSxtQkFBSU4saUJBQWlCLEdBQUcsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGlCLGVBRWpCO0FBQUEsbUJBQUlPLElBQUksQ0FBQ0MsSUFBTCxDQUFVTixpQkFBaUIsR0FBRyxHQUE5QixDQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZpQixlQUdqQjtBQUFBLG1CQUFJSyxJQUFJLENBQUNDLElBQUwsQ0FBVUosa0JBQWtCLEdBQUcsSUFBL0IsQ0FBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQW5COztBQUtGSyxXQUFPLENBQUNDLEdBQVIsQ0FBWWQsV0FBWixFQUF5QkUsU0FBekIsRUFBb0NDLGNBQXBDO0FBRUUsV0FDRUwsWUFBWSxDQUFDWSxTQUFELENBRGQ7QUFHRDs7QUFFRCxXQUFTSyxPQUFULEdBQWtCLENBRWpCOztBQUVELFdBQVNWLGFBQVQsQ0FBdUJWLFFBQXZCLEVBQWdDO0FBQzlCLFFBQUdBLFFBQVEsSUFBSSxDQUFmLEVBQWlCO0FBQ2YsYUFBTyxHQUFQO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsYUFBTyxHQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTWSxhQUFULENBQXVCWixRQUF2QixFQUFnQztBQUM5QixRQUFHQSxRQUFRLElBQUksQ0FBZixFQUFpQjtBQUNmLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU2MsY0FBVCxDQUF3QmQsUUFBeEIsRUFBaUM7QUFDL0IsUUFBR0EsUUFBUSxJQUFJLENBQWYsRUFBaUI7QUFDZixhQUFPLElBQVA7QUFDRCxLQUZELE1BRUs7QUFDSCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUdELHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixXQUFLLEVBQUVSLEtBQXRDO0FBQTZDLGNBQVEsRUFBRSxrQkFBQzZCLENBQUQ7QUFBQSxlQUFLNUIsUUFBUSxDQUFDNEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUFBLE9BQXZEO0FBQXNGLFVBQUksRUFBQyxRQUEzRjtBQUFvRyxVQUFJLEVBQUMsUUFBekc7QUFBa0gsaUJBQVcsRUFBQztBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFPLGVBQVMsRUFBQyxhQUFqQjtBQUErQixXQUFLLEVBQUUzQixHQUF0QztBQUEyQyxjQUFRLEVBQUUsa0JBQUN5QixDQUFEO0FBQUEsZUFBS3hCLE1BQU0sQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQSxPQUFyRDtBQUFrRixVQUFJLEVBQUMsTUFBdkY7QUFBOEYsVUFBSSxFQUFDLFFBQW5HO0FBQTRHLGlCQUFXLEVBQUM7QUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBTyxlQUFTLEVBQUMsYUFBakI7QUFBK0IsV0FBSyxFQUFFdkIsUUFBdEM7QUFBZ0QsY0FBUSxFQUFFLGtCQUFDcUIsQ0FBRDtBQUFBLGVBQUtwQixXQUFXLENBQUNvQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBLE9BQTFEO0FBQTRGLFVBQUksRUFBQyxTQUFqRztBQUEyRyxVQUFJLEVBQUMsUUFBaEg7QUFBeUgsaUJBQVcsRUFBQztBQUFySTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFRLGVBQVMsRUFBQyxtQkFBbEI7QUFBc0MsYUFBTyxFQUFFbkIsV0FBL0M7QUFBNEQsY0FBUSxFQUFFZ0IsT0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1LbEIsU0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVDOztHQWxGUWQsUTs7S0FBQUEsUTtBQW9GTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ2YTljNmFmNGM5MWI1NzQzMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIEJhcmJlY3VlKCl7XHJcbmNvbnN0IFthZHVsdHMsIHNldEFkdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2FkdWx0LCBzZXRBZHVsdF0gPSB1c2VTdGF0ZSgpXHJcblxyXG5jb25zdCBba2lkcywgc2V0S2lkc10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2tpZCwgc2V0S2lkXSA9IHVzZVN0YXRlKClcclxuXHJcbmNvbnN0IFtkdXJhdGlvbnMsIHNldER1cmF0aW9uc10gPSB1c2VTdGF0ZShbXSlcclxuY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgpXHJcblxyXG5jb25zdCBbcmVzdWx0YWRvLCBzZXRSZXN1bHRhZG9dID0gdXNlU3RhdGUoKVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRpb24oKXtcclxuICBzZXRBZHVsdHMoWy4uLiBhZHVsdHMsIGFkdWx0XSlcclxuICBzZXRLaWRzKFsuLi4ga2lkcywga2lkXSlcclxuICBzZXREdXJhdGlvbnMoWy4uLiBkdXJhdGlvbnMsIGR1cmF0aW9uXSlcclxuXHJcbiAgXHJcbi8vcG9wLCBpbmNsdWRlcywgc2hpZnRcclxuICBjb25zdCBpbnB1dEFkdWx0cyA9IGFkdWx0cy5tYXAoYWR1bHQgPT4gYWR1bHQpXHJcbiAgY29uc3QgaW5wdXRLaWRzID0ga2lkcy5tYXAoa2lkID0+a2lkKVxyXG4gIGNvbnN0IGlucHV0RHVyYXRpb25zID0gZHVyYXRpb25zLm1hcChkdXJhdGlvbiA9PiBkdXJhdGlvbilcclxuIFxyXG4vL2lucHV0QWR1bHRzXHJcbi8vaW5wdXRLaWRzXHJcbi8vaW5wdXREdXJhdGlvbnNcclxuXHJcbiAgY29uc3QgdG9kYWxBbW91bnRPZk1lYXQgPSBtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAqIGlucHV0QWR1bHRzICsgKG1lYXRQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpIC8gMiAqIGlucHV0S2lkcylcclxuICBjb25zdCB0b2RhbEFtb3VudE9mQmVlciA9IGJlZXJQZXJQZXJzb24oaW5wdXREdXJhdGlvbnMpICogaW5wdXRBZHVsdHNcclxuICBjb25zdCB0b2RhbEFtb3VudE9mRHJpbmsgPSBkcmlua1BlclBlcnNvbihpbnB1dER1cmF0aW9ucykgKiBpbnB1dEFkdWx0cyArIChtZWF0UGVyUGVyc29uKGlucHV0RHVyYXRpb25zKSAvIDIgKiBpbnB1dEtpZHMpXHJcblxyXG4gIGNvbnN0IHNjcmVlbkRpdiA9ICg8ZGl2PlxyXG4gICAgPHA+e3RvZGFsQW1vdW50T2ZNZWF0IC8gMTAwMH1LZyBkZSBNZWF0PC9wPlxyXG4gICAgPHA+e01hdGguY2VpbCh0b2RhbEFtb3VudE9mQmVlciAvIDM1NSl9IEJlZXIgQ2FuczwvcD4gXHJcbiAgICA8cD57TWF0aC5jZWlsKHRvZGFsQW1vdW50T2ZEcmluayAvIDIwMDApfSBEcmluayBCb3R0bGU8L3A+IFxyXG4gIDwvZGl2PilcclxuY29uc29sZS5sb2coaW5wdXRBZHVsdHMsIGlucHV0S2lkcywgaW5wdXREdXJhdGlvbnMpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBzZXRSZXN1bHRhZG8oc2NyZWVuRGl2KVxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gbGltcGV6YSgpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbWVhdFBlclBlcnNvbihkdXJhdGlvbil7XHJcbiAgaWYoZHVyYXRpb24gPj0gNil7XHJcbiAgICByZXR1cm4gNjUwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gNDAwXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZWVyUGVyUGVyc29uKGR1cmF0aW9uKXtcclxuICBpZihkdXJhdGlvbiA+PSA2KXtcclxuICAgIHJldHVybiAyMDAwXHJcbiAgfWVsc2V7XHJcbiAgICByZXR1cm4gMTIwMFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJpbmtQZXJQZXJzb24oZHVyYXRpb24pe1xyXG4gIGlmKGR1cmF0aW9uID49IDYpe1xyXG4gICAgcmV0dXJuIDE1MDBcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiAxMDAwXHJcbiAgfVxyXG59XHJcblxyXG5cclxucmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nYmFyYmVjdWUnPkJhcmJlY3VlPC9oMT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2FkdWx0fSBvbkNoYW5nZT17KGUpPT5zZXRBZHVsdChlLnRhcmdldC52YWx1ZSl9IG5hbWU9J2FkdWx0cycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nQWR1bHRzJyAgLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dEdsb2JhbCcgdmFsdWU9e2tpZH0gb25DaGFuZ2U9eyhlKT0+c2V0S2lkKGUudGFyZ2V0LnZhbHVlKX0gbmFtZT0na2lkcycgdHlwZT0nbnVtYmVyJyBwbGFjZWhvbGRlcj0nS2lkcycgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXRHbG9iYWwnIHZhbHVlPXtkdXJhdGlvbn0gb25DaGFuZ2U9eyhlKT0+c2V0RHVyYXRpb24oZS50YXJnZXQudmFsdWUpfSBuYW1lPSdkdXJhdGlvJyB0eXBlPSdudW1iZXInIHBsYWNlaG9sZGVyPSdEdXJhdGlvJyAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2FsY3VsYXRpb25HbG9iYWwnIG9uQ2xpY2s9e2NhbGN1bGF0aW9ufSBvbkNoYW5nZT17bGltcGV6YX0+Q2FsY3VsYXRpb248L2J1dHRvbj5cclxuICAgICAgICB7cmVzdWx0YWRvfVxyXG4gICAgICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXJiZWN1ZSJdLCJzb3VyY2VSb290IjoiIn0=