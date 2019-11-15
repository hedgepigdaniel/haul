"use strict";

var cov_3scacq0ic = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/utils/runAdbReverse.ts";
  var hash = "2940ac29d37d106da0f4e638957c2c0e4c7724eb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/utils/runAdbReverse.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 46
        }
      },
      "1": {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 9,
          column: 71
        }
      },
      "2": {
        start: {
          line: 10,
          column: 18
        },
        end: {
          line: 10,
          column: 58
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 24,
          column: 5
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 23,
          column: 7
        }
      },
      "5": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 20,
          column: 7
        }
      },
      "6": {
        start: {
          line: 16,
          column: 24
        },
        end: {
          line: 16,
          column: 73
        }
      },
      "7": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 77
        }
      },
      "8": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 18
        }
      },
      "9": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 15
        }
      },
      "10": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 58
        }
      },
      "11": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "runAdbReverse",
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 37
          }
        },
        loc: {
          start: {
            line: 7,
            column: 31
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 21
          },
          end: {
            line: 12,
            column: 22
          }
        },
        loc: {
          start: {
            line: 12,
            column: 32
          },
          end: {
            line: 24,
            column: 3
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 13,
            column: 18
          },
          end: {
            line: 13,
            column: 19
          }
        },
        loc: {
          start: {
            line: 13,
            column: 27
          },
          end: {
            line: 23,
            column: 5
          }
        },
        line: 13
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 14
          },
          end: {
            line: 9,
            column: 71
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 63
          }
        }, {
          start: {
            line: 9,
            column: 66
          },
          end: {
            line: 9,
            column: 71
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }, {
          start: {
            line: 14,
            column: 6
          },
          end: {
            line: 20,
            column: 7
          }
        }],
        line: 14
      },
      "2": {
        loc: {
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 16,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 16,
            column: 24
          },
          end: {
            line: 16,
            column: 56
          }
        }, {
          start: {
            line: 16,
            column: 60
          },
          end: {
            line: 16,
            column: 73
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2940ac29d37d106da0f4e638957c2c0e4c7724eb"
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
exports.default = runAdbReverse;

var _child_process = require("child_process");

function runAdbReverse(runtime, port) {
  cov_3scacq0ic.f[0]++;
  const androidHome = (cov_3scacq0ic.s[0]++, process.env.ANDROID_HOME);
  const adb = (cov_3scacq0ic.s[1]++, androidHome ? (cov_3scacq0ic.b[0][0]++, `${androidHome}/platform-tools/adb`) : (cov_3scacq0ic.b[0][1]++, 'adb'));
  const command = (cov_3scacq0ic.s[2]++, `${adb} reverse tcp:${port} tcp:${port}`);
  cov_3scacq0ic.s[3]++;
  return new Promise(resolve => {
    cov_3scacq0ic.f[1]++;
    cov_3scacq0ic.s[4]++;
    (0, _child_process.exec)(command, error => {
      cov_3scacq0ic.f[2]++;
      cov_3scacq0ic.s[5]++;

      if (error) {
        cov_3scacq0ic.b[1][0]++;
        // Get just the error message
        const message = (cov_3scacq0ic.s[6]++, (cov_3scacq0ic.b[2][0]++, error.message.split('error:')[1]) || (cov_3scacq0ic.b[2][1]++, error.message));
        cov_3scacq0ic.s[7]++;
        runtime.logger.warn(`Failed to run: ${command} - ${message.trim()}`);
        cov_3scacq0ic.s[8]++;
        resolve();
        cov_3scacq0ic.s[9]++;
        return;
      } else {
        cov_3scacq0ic.b[1][1]++;
      }

      cov_3scacq0ic.s[10]++;
      runtime.logger.done(`Successfully run: ${command}`);
      cov_3scacq0ic.s[11]++;
      resolve();
    });
  });
}
//# sourceMappingURL=runAdbReverse.js.map