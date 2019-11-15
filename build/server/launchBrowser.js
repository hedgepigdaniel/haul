"use strict";

var cov_1t8afuw488 = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/server/launchBrowser.ts";
  var hash = "bc4c20e4c6b4b7622f51b77f5d4a3c3411bb6f4e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/server/launchBrowser.ts",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 19
        },
        end: {
          line: 9,
          column: 60
        }
      },
      "1": {
        start: {
          line: 9,
          column: 36
        },
        end: {
          line: 9,
          column: 60
        }
      },
      "2": {
        start: {
          line: 9,
          column: 42
        },
        end: {
          line: 9,
          column: 60
        }
      },
      "3": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "4": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 35,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "launchBrowser",
        decl: {
          start: {
            line: 8,
            column: 24
          },
          end: {
            line: 8,
            column: 37
          }
        },
        loc: {
          start: {
            line: 8,
            column: 69
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 19
          },
          end: {
            line: 9,
            column: 20
          }
        },
        loc: {
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 9,
            column: 60
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 9,
            column: 37
          }
        },
        loc: {
          start: {
            line: 9,
            column: 42
          },
          end: {
            line: 9,
            column: 60
          }
        },
        line: 9
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 32,
            column: 10
          },
          end: {
            line: 32,
            column: 11
          }
        },
        loc: {
          start: {
            line: 32,
            column: 28
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 32
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "bc4c20e4c6b4b7622f51b77f5d4a3c3411bb6f4e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = launchBrowser;

var _open = _interopRequireDefault(require("open"));

var _platformSelect = _interopRequireDefault(require("platform-select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Launches given `url` in browser based on platform
 */
function launchBrowser(runtime, url) {
  cov_1t8afuw488.f[0]++;
  cov_1t8afuw488.s[0]++;

  const openWith = app => {
    cov_1t8afuw488.f[1]++;
    cov_1t8afuw488.s[1]++;
    return () => {
      cov_1t8afuw488.f[2]++;
      cov_1t8afuw488.s[2]++;
      return (0, _open.default)(url, {
        app
      });
    };
  };
  /**
   * Run Chrome (Chrome Canary) or supported platform.
   * In case of macOS, we can eventually fallback to Safari.
   *
   * select(attemp1, attemp2, attemp3,...) // attempt to run is from left to right
   */


  cov_1t8afuw488.s[3]++;
  (0, _platformSelect.default)({
    // try to find & run Google Chrome
    darwin: openWith('google chrome'),
    win32: openWith('chrome'),
    _: openWith('google-chrome')
  }, {
    // On macOS let's try to find & run Canary
    darwin: openWith('google chrome canary')
  }, {
    // No Canary / Chrome, let's run Safari
    darwin: openWith('safari')
  }).catch(error => {
    cov_1t8afuw488.f[3]++;
    cov_1t8afuw488.s[4]++;
    runtime.logger.warn(`Cannot start browser for debugging. Navigate manually to "${url}": ${error.message}`);
  });
}
//# sourceMappingURL=launchBrowser.js.map