"use strict";

var cov_14j4i18htd = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/config/getNormalizedProjectConfigBuilder.ts";
  var hash = "9e8c128d1740adc4e068ea76a82143ed925cd6da";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/config/getNormalizedProjectConfigBuilder.ts",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "1": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 54
        }
      },
      "2": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 19,
          column: 15
        }
      },
      "3": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 57
        }
      },
      "4": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "5": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "6": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "getNormalizedProjectConfigBuilder",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 57
          }
        },
        loc: {
          start: {
            line: 8,
            column: 34
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        }, {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 20,
            column: 13
          },
          end: {
            line: 20,
            column: 56
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 20,
            column: 47
          }
        }, {
          start: {
            line: 20,
            column: 50
          },
          end: {
            line: 20,
            column: 56
          }
        }],
        line: 20
      },
      "2": {
        loc: {
          start: {
            line: 23,
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
            line: 23,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }, {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        }],
        line: 23
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9e8c128d1740adc4e068ea76a82143ed925cd6da"
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
exports.default = getNormalizedProjectConfigBuilder;

var _importModule = _interopRequireDefault(require("../utils/importModule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNormalizedProjectConfigBuilder(runtime, configPath) {
  cov_14j4i18htd.f[0]++;
  let config;
  /**
   * When it doesn't have DEFAULT_CONFIG_FILENAME and it's not specified another file
   * we will use default configuration based on main file from package.json
   */

  cov_14j4i18htd.s[0]++;

  if (!configPath) {
    cov_14j4i18htd.b[0][0]++;
    cov_14j4i18htd.s[1]++;
    throw new Error("Couldn't find `haul.config.js`");
  } else {
    cov_14j4i18htd.b[0][1]++;
    cov_14j4i18htd.s[2]++;
    config = (0, _importModule.default)(configPath, {
      resolve: require.resolve,
      runtime
    }).exports;
    cov_14j4i18htd.s[3]++;
    config = config.__esModule ? (cov_14j4i18htd.b[1][0]++, config.default) : (cov_14j4i18htd.b[1][1]++, config);
  }

  cov_14j4i18htd.s[4]++;

  if (typeof config !== 'function') {
    cov_14j4i18htd.b[2][0]++;
    cov_14j4i18htd.s[5]++;
    throw new Error(`Exported value from ${configPath} does not seem to be a valid Haul config - did you forget to use "makeConfig"?`);
  } else {
    cov_14j4i18htd.b[2][1]++;
  }

  cov_14j4i18htd.s[6]++;
  return config;
}
//# sourceMappingURL=getNormalizedProjectConfigBuilder.js.map