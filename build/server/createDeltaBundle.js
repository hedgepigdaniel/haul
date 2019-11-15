"use strict";

var cov_1fxdjrxxp5 = function () {
  var path = "/home/daniel/code/oss/js/haul/packages/haul-core/src/server/createDeltaBundle.ts";
  var hash = "6c4d914a3c48c98491bbf6e601c990ee9b0dcdcf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/daniel/code/oss/js/haul/packages/haul-core/src/server/createDeltaBundle.ts",
    statementMap: {
      "0": {
        start: {
          line: 68,
          column: 41
        },
        end: {
          line: 78,
          column: 3
        }
      },
      "1": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 80,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "createDeltaBundle",
        decl: {
          start: {
            line: 65,
            column: 24
          },
          end: {
            line: 65,
            column: 41
          }
        },
        loc: {
          start: {
            line: 65,
            column: 58
          },
          end: {
            line: 81,
            column: 1
          }
        },
        line: 65
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "6c4d914a3c48c98491bbf6e601c990ee9b0dcdcf"
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
exports.default = createDeltaBundle;

// The delta format is implemented in com.facebook.react.devsupport.BundleDeltaClient
// The logic it uses is quite simple: the app keeps an initially empty copy of this data:
//
// ```
// constructor() {
//   this.id = null;
//   this.pre = {};
//   this.delta = {};
//   this.post = {};
// }
// ```
//
// Whenever a reload is requested, it appends `&deltaBundleId=${id}` to the url if
// `this.id` is set, and on receiving a result performs something like:
//
// ```
// deltaToBundle(delta) {
//   if ('id' in delta) this.id = delta.id;
//   for (const name of ['pre', 'delta', 'post']) {
//     if (name in delta) {
//       for (const [id, content] of delta[name]) {
//         if (content !== null) {
//           this[name][id] = content;
//         } else {
//           delete this[name][id];
//         }
//       }
//     }
//   }
//   return [
//     ...Object.values(this.pre),
//     ...Object.values(this.delta),
//     ...Object.values(this.post),
//   ].join('\n');
// }
// ```
//
// Note in particular that the map type it uses is LinkedHashMap,
// which preserves *initial* insertion order, but ideally your modules
// don't have order dependencies other than pre before delta before post.
//
// As you might imagine, react native packager uses pre for polyfills and
// the module system, and post for the entry calls to require() and the
// source[Mapping]URL comment.
//
// After all that, though, it's clear the simplest implementation of
// delta bundles is to simply have a one module bundle that contains
// the entire source.
//
// I assume the idea is the react native bundler looks at the deltaBundleId
// and a mapping of modules that have changed since that id so it knows
// what to rebuild - a better version of deltas could track the webpack
// asset and module hashes in the same way, but it would probably not help
// that much unless network transfer time is the limiting factor?
function createDeltaBundle(source) {
  cov_1fxdjrxxp5.f[0]++;
  // pre and post has to be declared, if not,
  // app will crash when Android tries to write null to file
  const deltaObject = (cov_1fxdjrxxp5.s[0]++, {
    // Put bundle in `pre` segment, so that the stack trace will be correct.
    // RN when building bundle code from `pre`, `modules` and `post` will add `\n` as a separator
    // between them, which results in stacktrace incorrectly having +1 line offset. By putting bundle
    // in `pre` we ensure that the generated bundle won't have any prefix.
    pre: source,
    // We still need to send some modules, otherwise RN will treat it as an empty delta bundle
    // and won't read it.
    modules: [[0, '']],
    post: ''
  });
  cov_1fxdjrxxp5.s[1]++;
  return Buffer.from(JSON.stringify(deltaObject));
}
//# sourceMappingURL=createDeltaBundle.js.map