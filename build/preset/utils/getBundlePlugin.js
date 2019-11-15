"use strict";

var cov_1kdl51qiuo = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/getBundlePlugin.ts";
  var hash = "957996d2b360644a79a9c554f9f9333d6dac5079";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/getBundlePlugin.ts",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 15,
          column: 7
        }
      },
      "2": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 24,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "getBundlePlugin",
        decl: {
          start: {
            line: 6,
            column: 24
          },
          end: {
            line: 6,
            column: 39
          }
        },
        loc: {
          start: {
            line: 9,
            column: 18
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }],
        line: 10
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
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "957996d2b360644a79a9c554f9f9333d6dac5079"
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
exports.default = getBundlePlugin;

var _ramBundleWebpackPlugin = _interopRequireDefault(require("@haul-bundler/ram-bundle-webpack-plugin"));

var _basicBundleWebpackPlugin = _interopRequireDefault(require("@haul-bundler/basic-bundle-webpack-plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBundlePlugin(env, bundleConfig) {
  cov_1kdl51qiuo.f[0]++;
  cov_1kdl51qiuo.s[0]++;

  if (bundleConfig.type === 'basic-bundle') {
    cov_1kdl51qiuo.b[0][0]++;
    cov_1kdl51qiuo.s[1]++;
    return new _basicBundleWebpackPlugin.default({
      bundle: Boolean(env.bundleTarget === 'file'),
      sourceMap: Boolean(bundleConfig.sourceMap),
      preloadBundles: bundleConfig.dependsOn
    });
  } else {
    cov_1kdl51qiuo.b[0][1]++;
    cov_1kdl51qiuo.s[2]++;
    return new _ramBundleWebpackPlugin.default({
      minify: bundleConfig.minify,
      minifyOptions: bundleConfig.minifyOptions,
      sourceMap: Boolean(bundleConfig.sourceMap),
      indexRamBundle: bundleConfig.type === 'indexed-ram-bundle',
      singleBundleMode: env.bundleMode === 'single-bundle',
      preloadBundles: bundleConfig.dependsOn
    });
  }
}
//# sourceMappingURL=getBundlePlugin.js.map