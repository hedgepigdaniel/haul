"use strict";

var cov_6bns8ve3x = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/withPolyfillsFactory.ts";
  var hash = "84d413afbefcca871844ff9a494ce45a069fdcb0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/withPolyfillsFactory.ts",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 20,
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
          column: 62
        }
      },
      "2": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "3": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 37
        }
      },
      "4": {
        start: {
          line: 15,
          column: 11
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "5": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 40
        }
      },
      "6": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 69
        }
      }
    },
    fnMap: {
      "0": {
        name: "withPolyfillsFactory",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 44
          }
        },
        loc: {
          start: {
            line: 5,
            column: 66
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "withPolyfills",
        decl: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 6,
            column: 31
          }
        },
        loc: {
          start: {
            line: 11,
            column: 14
          },
          end: {
            line: 20,
            column: 3
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 10,
            column: 19
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 10,
            column: 17
          },
          end: {
            line: 10,
            column: 19
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
            line: 9,
            column: 78
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 9,
            column: 31
          },
          end: {
            line: 9,
            column: 78
          }
        }],
        line: 9
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 13
      },
      "3": {
        loc: {
          start: {
            line: 15,
            column: 11
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 11
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 15,
            column: 11
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 15
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
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "84d413afbefcca871844ff9a494ce45a069fdcb0"
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
exports.default = withPolyfillsFactory;

function withPolyfillsFactory(polyfills) {
  cov_6bns8ve3x.f[0]++;
  cov_6bns8ve3x.s[0]++;
  return function withPolyfills(entry, {
    initializeCoreLocation = (cov_6bns8ve3x.b[1][0]++, 'react-native/Libraries/Core/InitializeCore.js')
  } = (cov_6bns8ve3x.b[0][0]++, {})) {
    cov_6bns8ve3x.f[1]++;
    const entryPrefix = (cov_6bns8ve3x.s[1]++, [...polyfills, initializeCoreLocation]);
    cov_6bns8ve3x.s[2]++;

    if (typeof entry === 'string') {
      cov_6bns8ve3x.b[2][0]++;
      cov_6bns8ve3x.s[3]++;
      return [...entryPrefix, entry];
    } else {
      cov_6bns8ve3x.b[2][1]++;
      cov_6bns8ve3x.s[4]++;

      if (Array.isArray(entry)) {
        cov_6bns8ve3x.b[3][0]++;
        cov_6bns8ve3x.s[5]++;
        return [...entryPrefix, ...entry];
      } else {
        cov_6bns8ve3x.b[3][1]++;
        cov_6bns8ve3x.s[6]++;
        throw new Error(`${typeof entry} is not supported as a entry`);
      }
    }
  };
}
//# sourceMappingURL=withPolyfillsFactory.js.map