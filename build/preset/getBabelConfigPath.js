"use strict";

var cov_8karohs22 = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/getBabelConfigPath.ts";
  var hash = "27266694c4b78bf2463fb4e09b5c5722fbe2fdfa";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/getBabelConfigPath.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 59
        }
      },
      "1": {
        start: {
          line: 6,
          column: 22
        },
        end: {
          line: 6,
          column: 48
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "3": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 27
        }
      },
      "4": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "getBabelConfigPath",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 42
          }
        },
        loc: {
          start: {
            line: 4,
            column: 76
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }, {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "27266694c4b78bf2463fb4e09b5c5722fbe2fdfa"
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
exports.default = getBabelConfigPath;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBabelConfigPath(cwd) {
  cov_8karohs22.f[0]++;
  const babelConfigPath = (cov_8karohs22.s[0]++, _path.default.join(cwd, 'babel.config.js'));
  const babelrcPath = (cov_8karohs22.s[1]++, _path.default.join(cwd, '.babelrc'));
  cov_8karohs22.s[2]++;

  if (_fs.default.existsSync(babelConfigPath)) {
    cov_8karohs22.b[0][0]++;
    cov_8karohs22.s[3]++;
    return babelConfigPath;
  } else {
    cov_8karohs22.b[0][1]++;
  }

  cov_8karohs22.s[4]++;

  if (_fs.default.existsSync(babelrcPath)) {
    cov_8karohs22.b[1][0]++;
    cov_8karohs22.s[5]++;
    return babelrcPath;
  } else {
    cov_8karohs22.b[1][1]++;
  }
}
//# sourceMappingURL=getBabelConfigPath.js.map