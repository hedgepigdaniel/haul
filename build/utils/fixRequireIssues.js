"use strict";

var cov_eti0nb9oz = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/utils/fixRequireIssues.ts";
  var hash = "4efa33f01cae54753fa2eb0a3b74e7f07047282b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/utils/fixRequireIssues.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "2": {
        start: {
          line: 5,
          column: 8
        },
        end: {
          line: 23,
          column: 9
        }
      },
      "3": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 6,
          column: 36
        }
      },
      "4": {
        start: {
          line: 8,
          column: 10
        },
        end: {
          line: 10,
          column: 11
        }
      },
      "5": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 19
        }
      },
      "6": {
        start: {
          line: 12,
          column: 29
        },
        end: {
          line: 12,
          column: 33
        }
      },
      "7": {
        start: {
          line: 14,
          column: 10
        },
        end: {
          line: 22,
          column: 11
        }
      },
      "8": {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "fixRequireIssue",
        decl: {
          start: {
            line: 1,
            column: 26
          },
          end: {
            line: 1,
            column: 41
          }
        },
        loc: {
          start: {
            line: 1,
            column: 44
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 4,
            column: 7
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 24,
            column: 7
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 8
          },
          end: {
            line: 23,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 8
          },
          end: {
            line: 23,
            column: 9
          }
        }, {
          start: {
            line: 5,
            column: 8
          },
          end: {
            line: 23,
            column: 9
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 10,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 10,
            column: 11
          }
        }, {
          start: {
            line: 8,
            column: 10
          },
          end: {
            line: 10,
            column: 11
          }
        }],
        line: 8
      },
      "2": {
        loc: {
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 22,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 22,
            column: 11
          }
        }, {
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 22,
            column: 11
          }
        }],
        line: 14
      },
      "3": {
        loc: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 19,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 13
          },
          end: {
            line: 16,
            column: 41
          }
        }, {
          start: {
            line: 16,
            column: 45
          },
          end: {
            line: 16,
            column: 70
          }
        }, {
          start: {
            line: 18,
            column: 13
          },
          end: {
            line: 18,
            column: 49
          }
        }, {
          start: {
            line: 19,
            column: 14
          },
          end: {
            line: 19,
            column: 50
          }
        }],
        line: 16
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4efa33f01cae54753fa2eb0a3b74e7f07047282b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_eti0nb9oz.s[0]++;

module.exports = function fixRequireIssue() {
  cov_eti0nb9oz.f[0]++;
  cov_eti0nb9oz.s[1]++;
  return {
    visitor: {
      AssignmentExpression(path) {
        cov_eti0nb9oz.f[1]++;
        cov_eti0nb9oz.s[2]++;

        if (path.node.operator === '=') {
          cov_eti0nb9oz.b[0][0]++;
          const {
            left
          } = (cov_eti0nb9oz.s[3]++, path.node);
          cov_eti0nb9oz.s[4]++;

          if (left.type !== 'MemberExpression') {
            cov_eti0nb9oz.b[1][0]++;
            cov_eti0nb9oz.s[5]++;
            return;
          } else {
            cov_eti0nb9oz.b[1][1]++;
          }

          const {
            object
          } = (cov_eti0nb9oz.s[6]++, left);
          cov_eti0nb9oz.s[7]++;

          if ( // require.xxx
          (cov_eti0nb9oz.b[3][0]++, object.type === 'Identifier') && (cov_eti0nb9oz.b[3][1]++, object.name === 'require') || // (require: any).xxx
          (cov_eti0nb9oz.b[3][2]++, object.type === 'TypeCastExpression') && (cov_eti0nb9oz.b[3][3]++, object.expression.name === 'require')) {
            cov_eti0nb9oz.b[2][0]++;
            cov_eti0nb9oz.s[8]++;
            path.remove();
          } else {
            cov_eti0nb9oz.b[2][1]++;
          }
        } else {
          cov_eti0nb9oz.b[0][1]++;
        }
      }

    }
  };
};
//# sourceMappingURL=fixRequireIssues.js.map