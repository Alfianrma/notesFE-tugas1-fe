"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/utils/storage.js":
/*!******************************!*\
  !*** ./lib/utils/storage.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBaseURL\": function() { return /* binding */ getBaseURL; },\n/* harmony export */   \"setBaseURL\": function() { return /* binding */ setBaseURL; }\n/* harmony export */ });\nvar setBaseURL = function() {\n    if (window) {\n        var newHost = prompt(\"Masukkan URL Web Server:\");\n        if (!newHost) {\n            return;\n        }\n        if (!newHost.startsWith(\"https://\")) {\n            newHost = \"http://\".concat(newHost);\n        }\n        if (newHost[newHost.length - 1] !== \"/\") {\n            newHost += \"/\";\n        }\n        localStorage.setItem(\"BASE_URL\", newHost);\n        window.location.reload();\n    }\n};\nvar getBaseURL = function() {\n    return localStorage.getItem(\"BASE_URL\") || \"\";\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbHMvc3RvcmFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxXQUFNO0lBQzlCLElBQUlDLE1BQU0sRUFBRTtRQUNWLElBQUlDLE9BQU8sR0FBR0MsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBRWhELElBQUksQ0FBQ0QsT0FBTyxFQUFFO1lBQ1osT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUNBLE9BQU8sQ0FBQ0UsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25DRixPQUFPLEdBQUcsU0FBUSxDQUFVLE9BQVJBLE9BQU8sQ0FBRSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxJQUFJQSxPQUFPLENBQUNBLE9BQU8sQ0FBQ0csTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUN2Q0gsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBRURJLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsRUFBRUwsT0FBTyxDQUFDLENBQUM7UUFDMUNELE1BQU0sQ0FBQ08sUUFBUSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUssSUFBTUMsVUFBVSxHQUFHO1dBQU1KLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Q0FBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91dGlscy9zdG9yYWdlLmpzPzdmOWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldEJhc2VVUkwgPSAoKSA9PiB7XHJcbiAgaWYgKHdpbmRvdykge1xyXG4gICAgbGV0IG5ld0hvc3QgPSBwcm9tcHQoJ01hc3Vra2FuIFVSTCBXZWIgU2VydmVyOicpO1xyXG5cclxuICAgIGlmICghbmV3SG9zdCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFuZXdIb3N0LnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcclxuICAgICAgbmV3SG9zdCA9IGBodHRwOi8vJHtuZXdIb3N0fWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld0hvc3RbbmV3SG9zdC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XHJcbiAgICAgIG5ld0hvc3QgKz0gJy8nO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdCQVNFX1VSTCcsIG5ld0hvc3QpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYXNlVVJMID0gKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0JBU0VfVVJMJykgfHwgJyc7XHJcbiJdLCJuYW1lcyI6WyJzZXRCYXNlVVJMIiwid2luZG93IiwibmV3SG9zdCIsInByb21wdCIsInN0YXJ0c1dpdGgiLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRCYXNlVVJMIiwiZ2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/utils/storage.js\n"));

/***/ })

});