"use strict";

var cov_13iohjxaou = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/server/websocketProxy.ts";
  var hash = "ad23b2c5f2ebfb55b4396c2b1b2752cf0e2a4cc6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/server/websocketProxy.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 27,
          column: 4
        }
      },
      "1": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 25,
          column: 9
        }
      },
      "2": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "3": {
        start: {
          line: 23,
          column: 10
        },
        end: {
          line: 23,
          column: 35
        }
      }
    },
    fnMap: {
      "0": {
        name: "createWebSocketProxy",
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 44
          }
        },
        loc: {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 28,
            column: 1
          }
        },
        line: 18
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 61
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 21,
            column: 39
          },
          end: {
            line: 21,
            column: 40
          }
        },
        loc: {
          start: {
            line: 21,
            column: 60
          },
          end: {
            line: 25,
            column: 7
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        }, {
          start: {
            line: 22,
            column: 8
          },
          end: {
            line: 24,
            column: 9
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 22,
            column: 12
          },
          end: {
            line: 22,
            column: 23
          }
        }, {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 55
          }
        }],
        line: 22
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
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
    hash: "ad23b2c5f2ebfb55b4396c2b1b2752cf0e2a4cc6"
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
exports.default = createWebSocketProxy;

/**
 * Proxy connection from single WebSocketServer by given path.
 */
function createWebSocketProxy(webSocketServer, path) {
  cov_13iohjxaou.f[0]++;
  cov_13iohjxaou.s[0]++;
  return {
    onConnection(handler) {
      cov_13iohjxaou.f[1]++;
      cov_13iohjxaou.s[1]++;
      webSocketServer.on('connection', (socket, request) => {
        cov_13iohjxaou.f[2]++;
        cov_13iohjxaou.s[2]++;

        if ((cov_13iohjxaou.b[1][0]++, request.url) && (cov_13iohjxaou.b[1][1]++, request.url.startsWith(path))) {
          cov_13iohjxaou.b[0][0]++;
          cov_13iohjxaou.s[3]++;
          handler(socket, request);
        } else {
          cov_13iohjxaou.b[0][1]++;
        }
      });
    }

  };
}
//# sourceMappingURL=websocketProxy.js.map