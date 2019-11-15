"use strict";

var cov_1ykdrr1i41 = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/webpack/resolvers/resolveModule.ts";
  var hash = "b71823585ec0f79e031131448243d0a493e2bda5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/webpack/resolvers/resolveModule.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 10,
          column: 75
        }
      },
      "1": {
        start: {
          line: 11,
          column: 19
        },
        end: {
          line: 11,
          column: 44
        }
      },
      "2": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "resolveModule",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 37
          }
        },
        loc: {
          start: {
            line: 9,
            column: 74
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "b71823585ec0f79e031131448243d0a493e2bda5"
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
exports.default = resolveModule;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _resolve = _interopRequireDefault(require("resolve"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolves the real path to a given module
 * We point to 'package.json', then remove it to receive a path to the directory itself
 */
function resolveModule(root, name) {
  cov_1ykdrr1i41.f[0]++;
  const filePath = (cov_1ykdrr1i41.s[0]++, _resolve.default.sync(`${name}/package.json`, {
    basedir: root
  }));
  const realPath = (cov_1ykdrr1i41.s[1]++, _fs.default.realpathSync(filePath));
  cov_1ykdrr1i41.s[2]++;
  return _path.default.dirname(realPath);
}
//# sourceMappingURL=resolveModule.js.map