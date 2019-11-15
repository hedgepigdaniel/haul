"use strict";

var cov_228jt6kp88 = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/webpack/resolvers/HasteResolver.ts";
  var hash = "48796f5dab83b7f230956cc5682e9a7c1b2e62cc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/webpack/resolvers/HasteResolver.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "1": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 45,
          column: 6
        }
      },
      "2": {
        start: {
          line: 27,
          column: 29
        },
        end: {
          line: 27,
          column: 44
        }
      },
      "3": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 31,
          column: 9
        }
      },
      "4": {
        start: {
          line: 30,
          column: 10
        },
        end: {
          line: 30,
          column: 28
        }
      },
      "5": {
        start: {
          line: 33,
          column: 20
        },
        end: {
          line: 35,
          column: 10
        }
      },
      "6": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 43,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 40
          },
          end: {
            line: 16,
            column: 42
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 23
          },
          end: {
            line: 46,
            column: 3
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 6
          },
          end: {
            line: 26,
            column: 7
          }
        },
        loc: {
          start: {
            line: 26,
            column: 66
          },
          end: {
            line: 44,
            column: 7
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }, {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }],
        line: 29
      },
      "1": {
        loc: {
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 12
          },
          end: {
            line: 29,
            column: 25
          }
        }, {
          start: {
            line: 29,
            column: 29
          },
          end: {
            line: 29,
            column: 52
          }
        }],
        line: 29
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
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "48796f5dab83b7f230956cc5682e9a7c1b2e62cc"
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
exports.default = void 0;

var _findProvidesModule = _interopRequireDefault(require("./findProvidesModule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolver plugin that allows requiring haste modules with Webpack
 */
class HasteResolver {
  constructor(options) {
    this.options = options;
    cov_228jt6kp88.f[0]++;
  }

  apply(resolver) {
    cov_228jt6kp88.f[1]++;
    const hasteMap = (cov_228jt6kp88.s[0]++, (0, _findProvidesModule.default)(this.options.directories, this.options.hasteOptions));
    cov_228jt6kp88.s[1]++;
    resolver.hooks.resolve.tapAsync('described-resolve', (request, context, callback) => {
      cov_228jt6kp88.f[2]++;
      const innerRequest = (cov_228jt6kp88.s[2]++, request.request);
      cov_228jt6kp88.s[3]++;

      if ((cov_228jt6kp88.b[1][0]++, !innerRequest) || (cov_228jt6kp88.b[1][1]++, !hasteMap[innerRequest])) {
        cov_228jt6kp88.b[0][0]++;
        cov_228jt6kp88.s[4]++;
        return callback();
      } else {
        cov_228jt6kp88.b[0][1]++;
      }

      const obj = (cov_228jt6kp88.s[5]++, Object.assign({}, request, {
        request: hasteMap[innerRequest]
      }));
      cov_228jt6kp88.s[6]++;
      return resolver.doResolve(resolver.hooks.resolve, obj, `Aliased ${innerRequest} with haste mapping: ${hasteMap[innerRequest]}`, context, callback);
    });
  }

}

exports.default = HasteResolver;
//# sourceMappingURL=HasteResolver.js.map