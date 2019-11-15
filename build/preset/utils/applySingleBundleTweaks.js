"use strict";

var cov_12zmch8cpk = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/applySingleBundleTweaks.ts";
  var hash = "119489262a32f185f61d169a9112aedb22feb813";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/applySingleBundleTweaks.ts",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "1": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 22,
          column: 10
        }
      },
      "2": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 34,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "applySingleBundleTweaks",
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 47
          }
        },
        loc: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 15
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
            line: 35,
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
            line: 35,
            column: 3
          }
        }, {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 17,
            column: 37
          },
          end: {
            line: 22,
            column: 9
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 18,
            column: 8
          },
          end: {
            line: 18,
            column: 68
          }
        }, {
          start: {
            line: 19,
            column: 8
          },
          end: {
            line: 22,
            column: 9
          }
        }],
        line: 17
      },
      "2": {
        loc: {
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 26,
            column: 76
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 26,
            column: 40
          },
          end: {
            line: 26,
            column: 52
          }
        }, {
          start: {
            line: 26,
            column: 55
          },
          end: {
            line: 26,
            column: 76
          }
        }],
        line: 26
      },
      "3": {
        loc: {
          start: {
            line: 31,
            column: 14
          },
          end: {
            line: 31,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 33
          },
          end: {
            line: 31,
            column: 38
          }
        }, {
          start: {
            line: 31,
            column: 41
          },
          end: {
            line: 31,
            column: 77
          }
        }],
        line: 31
      },
      "4": {
        loc: {
          start: {
            line: 31,
            column: 41
          },
          end: {
            line: 31,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 31,
            column: 60
          },
          end: {
            line: 31,
            column: 65
          }
        }, {
          start: {
            line: 31,
            column: 68
          },
          end: {
            line: 31,
            column: 77
          }
        }],
        line: 31
      },
      "5": {
        loc: {
          start: {
            line: 32,
            column: 14
          },
          end: {
            line: 32,
            column: 47
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 32,
            column: 33
          },
          end: {
            line: 32,
            column: 38
          }
        }, {
          start: {
            line: 32,
            column: 41
          },
          end: {
            line: 32,
            column: 47
          }
        }],
        line: 32
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "119489262a32f185f61d169a9112aedb22feb813"
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
exports.default = applySingleBundleTweaks;

var _path = _interopRequireDefault(require("path"));

var _compileTemplate = _interopRequireDefault(require("./compileTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applySingleBundleTweaks(env, templatesConfig, bundleConfig, webpackConfig) {
  cov_12zmch8cpk.f[0]++;
  cov_12zmch8cpk.s[0]++;

  if (env.bundleOutput) {
    cov_12zmch8cpk.b[0][0]++;
    cov_12zmch8cpk.s[1]++;
    webpackConfig.output.filename = _path.default.isAbsolute(env.bundleOutput) ? (cov_12zmch8cpk.b[1][0]++, _path.default.relative(webpackConfig.output.path, env.bundleOutput)) : (cov_12zmch8cpk.b[1][1]++, _path.default.relative(webpackConfig.output.path, _path.default.join(bundleConfig.root, env.bundleOutput)));
  } else {
    cov_12zmch8cpk.b[0][1]++;
    cov_12zmch8cpk.s[2]++;
    webpackConfig.output.filename = (0, _compileTemplate.default)(templatesConfig.filename[env.bundleTarget === 'server' ? (cov_12zmch8cpk.b[2][0]++, '__server__') : (cov_12zmch8cpk.b[2][1]++, bundleConfig.platform)], {
      bundleName: bundleConfig.name,
      platform: bundleConfig.platform,
      type: bundleConfig.dll ? (cov_12zmch8cpk.b[3][0]++, 'dll') : (cov_12zmch8cpk.b[3][1]++, bundleConfig.app ? (cov_12zmch8cpk.b[4][0]++, 'app') : (cov_12zmch8cpk.b[4][1]++, 'default')),
      mode: bundleConfig.dev ? (cov_12zmch8cpk.b[5][0]++, 'dev') : (cov_12zmch8cpk.b[5][1]++, 'prod')
    });
  }
}
//# sourceMappingURL=applySingleBundleTweaks.js.map