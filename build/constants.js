"use strict";

var cov_2oeeuldk7t = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/constants.ts";
  var hash = "eb3535fa1f9dfca56cb8bec76583203a9f7dcb6c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/constants.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 40
        },
        end: {
          line: 3,
          column: 44
        }
      },
      "1": {
        start: {
          line: 4,
          column: 39
        },
        end: {
          line: 4,
          column: 55
        }
      },
      "2": {
        start: {
          line: 5,
          column: 28
        },
        end: {
          line: 5,
          column: 32
        }
      },
      "3": {
        start: {
          line: 6,
          column: 33
        },
        end: {
          line: 9,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "eb3535fa1f9dfca56cb8bec76583203a9f7dcb6c"
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
exports.ASSET_LOADER_PATH = exports.DEFAULT_PORT = exports.DEFAULT_CONFIG_FILENAME = exports.INTERACTIVE_MODE_DEFAULT = void 0;

var _path = require("path");

const INTERACTIVE_MODE_DEFAULT = (cov_2oeeuldk7t.s[0]++, true);
exports.INTERACTIVE_MODE_DEFAULT = INTERACTIVE_MODE_DEFAULT;
const DEFAULT_CONFIG_FILENAME = (cov_2oeeuldk7t.s[1]++, 'haul.config.js');
exports.DEFAULT_CONFIG_FILENAME = DEFAULT_CONFIG_FILENAME;
const DEFAULT_PORT = (cov_2oeeuldk7t.s[2]++, 8081);
exports.DEFAULT_PORT = DEFAULT_PORT;
const ASSET_LOADER_PATH = (cov_2oeeuldk7t.s[3]++, (0, _path.join)(__dirname, './webpack/loaders/assetLoader'));
exports.ASSET_LOADER_PATH = ASSET_LOADER_PATH;
//# sourceMappingURL=constants.js.map