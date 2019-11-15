"use strict";

var cov_ilq492vw3 = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/utils/getReactNativeVersion.ts";
  var hash = "045464b143110175f6186b5cf25337d2e5ff6474";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/utils/getReactNativeVersion.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 22
        },
        end: {
          line: 10,
          column: 4
        }
      },
      "1": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 12,
          column: 45
        }
      },
      "2": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 21
        }
      },
      "4": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "getReactNativeVersion",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 45
          }
        },
        loc: {
          start: {
            line: 6,
            column: 29
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }, {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        }],
        line: 13
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "045464b143110175f6186b5cf25337d2e5ff6474"
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
exports.default = getReactNativeVersion;

var _path = _interopRequireDefault(require("path"));

var _semver = _interopRequireDefault(require("semver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getReactNativeVersion(cwd) {
  cov_ilq492vw3.f[0]++;
  const {
    version
  } = (cov_ilq492vw3.s[0]++, require(_path.default.join(cwd, 'node_modules/react-native/package.json')));
  const parsedVersion = (cov_ilq492vw3.s[1]++, _semver.default.parse(version));
  cov_ilq492vw3.s[2]++;

  if (!parsedVersion) {
    cov_ilq492vw3.b[0][0]++;
    cov_ilq492vw3.s[3]++;
    return undefined;
  } else {
    cov_ilq492vw3.b[0][1]++;
  }

  cov_ilq492vw3.s[4]++;
  return parsedVersion;
}
//# sourceMappingURL=getReactNativeVersion.js.map