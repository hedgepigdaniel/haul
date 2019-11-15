"use strict";

var cov_ax6qvy8vg = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/config/getProjectConfigPath.ts";
  var hash = "d966fc6bc33290b24ca4be690aa5df0df0f225b0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/config/getProjectConfigPath.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 12,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "getProjectConfigPath",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 44
          }
        },
        loc: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 12,
            column: 46
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 11,
            column: 35
          }
        }, {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 46
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 6
          },
          end: {
            line: 11,
            column: 35
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 10,
            column: 8
          },
          end: {
            line: 10,
            column: 18
          }
        }, {
          start: {
            line: 11,
            column: 8
          },
          end: {
            line: 11,
            column: 35
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d966fc6bc33290b24ca4be690aa5df0df0f225b0"
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
exports.default = getProjectConfigPath;

var _path = _interopRequireDefault(require("path"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProjectConfigPath(root, configPath) {
  cov_ax6qvy8vg.f[0]++;
  cov_ax6qvy8vg.s[0]++;
  return configPath ? (cov_ax6qvy8vg.b[0][0]++, _path.default.isAbsolute(configPath) ? (cov_ax6qvy8vg.b[1][0]++, configPath) : (cov_ax6qvy8vg.b[1][1]++, _path.default.join(root, configPath))) : (cov_ax6qvy8vg.b[0][1]++, _path.default.join(root, _constants.DEFAULT_CONFIG_FILENAME));
}
//# sourceMappingURL=getProjectConfigPath.js.map