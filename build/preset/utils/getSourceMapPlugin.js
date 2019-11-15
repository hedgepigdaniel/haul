"use strict";

var cov_231upwbgnx = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/getSourceMapPlugin.ts";
  var hash = "8d5cfbb191680fda1284b3fe0c5149afe0d6faed";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/getSourceMapPlugin.ts",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "1": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 20,
          column: 52
        }
      },
      "3": {
        start: {
          line: 21,
          column: 9
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "4": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 26,
          column: 7
        }
      },
      "5": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "getSourceMapPlugin",
        decl: {
          start: {
            line: 7,
            column: 24
          },
          end: {
            line: 7,
            column: 42
          }
        },
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 21,
            column: 9
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 21
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
    hash: "8d5cfbb191680fda1284b3fe0c5149afe0d6faed"
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
exports.default = getSourceMapPlugin;

var _webpack = _interopRequireDefault(require("webpack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSourceMapPlugin(bundleConfig, serverConfig) {
  cov_231upwbgnx.f[0]++;
  const baseOptions = (cov_231upwbgnx.s[0]++, {
    test: /\.(js|jsx|css|ts|tsx|(js)?bundle)($|\?)/i,
    module: true
  });
  cov_231upwbgnx.s[1]++;

  if (bundleConfig.sourceMap === 'inline') {
    cov_231upwbgnx.b[0][0]++;
    cov_231upwbgnx.s[2]++;
    return new _webpack.default.EvalSourceMapDevToolPlugin({ ...baseOptions,
      publicPath: `http://${serverConfig.host}:${serverConfig.port}/`
    });
  } else {
    cov_231upwbgnx.b[0][1]++;
    cov_231upwbgnx.s[3]++;

    if (bundleConfig.sourceMap) {
      cov_231upwbgnx.b[1][0]++;
      cov_231upwbgnx.s[4]++;
      return new _webpack.default.SourceMapDevToolPlugin({ ...baseOptions,
        filename: '[file].map',
        moduleFilenameTemplate: '[absolute-resource-path]'
      });
    } else {
      cov_231upwbgnx.b[1][1]++;
    }
  }

  cov_231upwbgnx.s[5]++;
  return undefined;
}
//# sourceMappingURL=getSourceMapPlugin.js.map