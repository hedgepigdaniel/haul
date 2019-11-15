"use strict";

var cov_h1u6t87cm = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/compileTemplate.ts";
  var hash = "63a988ec2b265e7bd776814aebeb7803df949373";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/preset/utils/compileTemplate.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 15
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 6,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "compileTemplate",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 39
          }
        },
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 5,
            column: 34
          },
          end: {
            line: 5,
            column: 35
          }
        },
        loc: {
          start: {
            line: 5,
            column: 69
          },
          end: {
            line: 7,
            column: 3
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "63a988ec2b265e7bd776814aebeb7803df949373"
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
exports.default = compileTemplate;

function compileTemplate(template, data) {
  cov_h1u6t87cm.f[0]++;
  cov_h1u6t87cm.s[0]++;
  return Object.keys(data).reduce((compiled, key) => {
    cov_h1u6t87cm.f[1]++;
    cov_h1u6t87cm.s[1]++;
    return compiled.replace(`[${key}]`, data[key]);
  }, template);
}
//# sourceMappingURL=compileTemplate.js.map