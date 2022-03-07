// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4Ifvo":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "04f904df689c6fb6";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"elKqW":[function(require,module,exports) {
var _store = require("../store/store");
var _renderingLogic = require("../js/renderingLogic");
var _todoHandlers = require("../js/todoHandlers");
_store.updateUserName(_store.store.user.name);
_renderingLogic.renderHeader(_store.store.user.name);
_store.retrieveDefaultTodos(_store.store.user.id, _renderingLogic.renderTodoList);

},{"../store/store":"cEhL8","../js/renderingLogic":"lhBDt","../js/todoHandlers":"53PRm"}],"cEhL8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store
);
// State updating user name
parcelHelpers.export(exports, "updateUserName", ()=>updateUserName
);
// State adding todo
parcelHelpers.export(exports, "addStoreTodo", ()=>addStoreTodo
);
//State delete todo
parcelHelpers.export(exports, "deleteStoreTodo", ()=>deleteStoreTodo
);
//State edit todo
parcelHelpers.export(exports, "editStoreTodo", ()=>editStoreTodo
);
//State saving todo edit
parcelHelpers.export(exports, "saveTodoEdit", ()=>saveTodoEdit
);
// State retrieve default list
parcelHelpers.export(exports, "retrieveDefaultTodos", ()=>retrieveDefaultTodos
);
let store = {
    todos: [],
    user: {
        id: 1,
        name: 'David',
        profileImageSrc: 'https://media-exp1.licdn.com/dms/image/C4E03AQEc-_IeGQYaLA/profile-displayphoto-shrink_400_400/0/1517454647694?e=1652313600&v=beta&t=9ihhjWg-BUoEVdUebwfCZZq9ys4e0_R5rAySBgM_1AM'
    }
};
function updateUserName(newName) {
    store.user.name = newName;
}
function addStoreTodo(inputElement, renderFunction) {
    newTodo = {
        userId: store.user.id,
        id: store.todos.length + 1,
        title: inputElement.value
    };
    store.todos = store.todos.concat(newTodo);
    inputElement.value = '';
    renderFunction(store.todos);
}
function deleteStoreTodo(todoTitle, renderFunction) {
    store.todos = store.todos.filter((i)=>i.title !== todoTitle
    );
    renderFunction(store.todos);
}
function editStoreTodo(todoTitle, renderFunction) {
    renderFunction(todoTitle);
}
function saveTodoEdit(todoTitle, changedTitle, renderFunction) {
    console.log('test');
    let editedTodo = store.todos.find((i)=>i.title == todoTitle
    );
    editedTodo.title = changedTitle;
    renderFunction(store.todos);
}
function retrieveDefaultTodos(userId, renderFunction) {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>response.json()
    ).then((data)=>data.filter((todo)=>todo.userId == userId
        )
    ).then((data)=>store.todos = data
    ).then(()=>renderFunction(store.todos)
    );
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"c0Xo8"}],"c0Xo8":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lhBDt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHeader", ()=>renderHeader
);
parcelHelpers.export(exports, "renderTodoList", ()=>renderTodoList
);
parcelHelpers.export(exports, "renderEditPopup", ()=>renderEditPopup
);
parcelHelpers.export(exports, "closeEditPopup", ()=>closeEditPopup
);
var _todoHandlers = require("./todoHandlers");
let listElement = document.querySelector(".todos");
let edit = document.querySelector('.editpopup');
let usertitle = document.querySelector('.usertitle');
function renderHeader(userName) {
    usertitle.innerHTML = `<h1>${userName}'s todo's</h1>`;
}
function renderTodoList(storeTodoList) {
    listElement.innerHTML = null;
    for (let i of storeTodoList)listElement.innerHTML += `<div id='${i.title}' class='todo'>
                <div>${i.title}</div>
                <button class='edit'>edit</button>
                <button class='delete'>delete</button>
            </div>`;
    _todoHandlers.addDeleteButtonEventHandler();
    _todoHandlers.addEditButtonEventHandler();
}
function renderEditPopup(todoTitle) {
    edit.style.display = 'block';
    edit.innerHTML = `
        <div class='shadow'>
            <div class='popup'>
                <h1>Enter new todo title:</h1>
                <input class='editinput' value='${todoTitle}'>
                <button id='${todoTitle}' class='save'>SAVE</button>
            </div
        </div
        `;
    _todoHandlers.addSaveButtonEventHandler();
}
function closeEditPopup() {
    edit.style.display = 'none';
    edit.innerHTML = '<div></div>';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"c0Xo8","./todoHandlers":"53PRm"}],"53PRm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addDeleteButtonEventHandler", ()=>addDeleteButtonEventHandler
);
parcelHelpers.export(exports, "addEditButtonEventHandler", ()=>addEditButtonEventHandler
);
parcelHelpers.export(exports, "addSaveButtonEventHandler", ()=>addSaveButtonEventHandler
);
var _store = require("../store/store");
var _renderingLogic = require("../js/renderingLogic");
var _sweetalert = require("sweetalert");
var _sweetalertDefault = parcelHelpers.interopDefault(_sweetalert);
// HTML element variables
let addButton = document.querySelector(".addtodo");
let todoInput = document.querySelector(".newtodo");
function swallDelete(deleteFunction) {
}
// Event handlers
addButton.addEventListener("click", function() {
    _store.addStoreTodo(todoInput, _renderingLogic.renderTodoList);
});
function addDeleteButtonEventHandler() {
    let deleteButtonArray = document.querySelectorAll(".delete");
    for (let i of deleteButtonArray)i.addEventListener("click", function() {
        _sweetalertDefault.default({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this todo?",
            icon: "warning",
            dangerMode: true
        }).then((willDelete)=>{
            if (willDelete) {
                _sweetalertDefault.default("Deleted!", "Your todo has been deleted!", "success");
                _store.deleteStoreTodo(i.parentElement.id, _renderingLogic.renderTodoList);
            }
        });
    });
}
function addEditButtonEventHandler() {
    let editButtonArray = document.querySelectorAll(".edit");
    for (let i of editButtonArray)i.addEventListener("click", function() {
        _renderingLogic.renderEditPopup(i.parentElement.id, _renderingLogic.renderEditPopup);
    });
}
function addSaveButtonEventHandler() {
    let saveButton = document.querySelector(".save");
    let editButton = document.querySelector(".editinput");
    saveButton.addEventListener("click", function() {
        _store.saveTodoEdit(saveButton.id, editButton.value, _renderingLogic.renderTodoList);
        _renderingLogic.closeEditPopup();
    });
}

},{"../store/store":"cEhL8","../js/renderingLogic":"lhBDt","@parcel/transformer-js/src/esmodule-helpers.js":"c0Xo8","sweetalert":"gXHwi"}],"gXHwi":[function(require,module,exports) {
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.swal = e() : t.swal = e();
}(this, function() {
    return (function(t1) {
        function e1(o) {
            if (n1[o]) return n1[o].exports;
            var r = n1[o] = {
                i: o,
                l: !1,
                exports: {
                }
            };
            return t1[o].call(r.exports, r, r.exports, e1), r.l = !0, r.exports;
        }
        var n1 = {
        };
        return e1.m = t1, e1.c = n1, e1.d = function(t, n, o) {
            e1.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            });
        }, e1.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return e1.d(n, "a", n), n;
        }, e1.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e1.p = "", e1(e1.s = 8);
    })([
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = "swal-button";
            e.CLASS_NAMES = {
                MODAL: "swal-modal",
                OVERLAY: "swal-overlay",
                SHOW_MODAL: "swal-overlay--show-modal",
                MODAL_TITLE: "swal-title",
                MODAL_TEXT: "swal-text",
                ICON: "swal-icon",
                ICON_CUSTOM: "swal-icon--custom",
                CONTENT: "swal-content",
                FOOTER: "swal-footer",
                BUTTON_CONTAINER: "swal-button-container",
                BUTTON: o,
                CONFIRM_BUTTON: o + "--confirm",
                CANCEL_BUTTON: o + "--cancel",
                DANGER_BUTTON: o + "--danger",
                BUTTON_LOADING: o + "--loading",
                BUTTON_LOADER: o + "__loader"
            }, e.default = e.CLASS_NAMES;
        },
        function(t2, e2, n2) {
            "use strict";
            Object.defineProperty(e2, "__esModule", {
                value: !0
            }), e2.getNode = function(t) {
                var e = "." + t;
                return document.querySelector(e);
            }, e2.stringToNode = function(t) {
                var e = document.createElement("div");
                return e.innerHTML = t.trim(), e.firstChild;
            }, e2.insertAfter = function(t, e) {
                var n = e.nextSibling;
                e.parentNode.insertBefore(t, n);
            }, e2.removeNode = function(t) {
                t.parentElement.removeChild(t);
            }, e2.throwErr = function(t) {
                throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim());
            }, e2.isPlainObject = function(t) {
                if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype;
            }, e2.ordinalSuffixOf = function(t) {
                var e = t % 10, n = t % 100;
                return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th";
            };
        },
        function(t3, e, n3) {
            "use strict";
            function o(t) {
                for(var n in t)e.hasOwnProperty(n) || (e[n] = t[n]);
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), o(n3(25));
            var r = n3(26);
            e.overlayMarkup = r.default, o(n3(27)), o(n3(28)), o(n3(29));
            var i = n3(0), a = i.default.MODAL_TITLE, s = i.default.MODAL_TEXT, c = i.default.ICON, l = i.default.FOOTER;
            e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n';
        },
        function(t4, e3, n4) {
            "use strict";
            Object.defineProperty(e3, "__esModule", {
                value: !0
            });
            var o1 = n4(1);
            e3.CONFIRM_KEY = "confirm", e3.CANCEL_KEY = "cancel";
            var r1 = {
                visible: !0,
                text: null,
                value: null,
                className: "",
                closeModal: !0
            }, i = Object.assign({
            }, r1, {
                visible: !1,
                text: "Cancel",
                value: null
            }), a1 = Object.assign({
            }, r1, {
                text: "OK",
                value: !0
            });
            e3.defaultButtonList = {
                cancel: i,
                confirm: a1
            };
            var s1 = function(t) {
                switch(t){
                    case e3.CONFIRM_KEY:
                        return a1;
                    case e3.CANCEL_KEY:
                        return i;
                    default:
                        var n = t.charAt(0).toUpperCase() + t.slice(1);
                        return Object.assign({
                        }, r1, {
                            text: n,
                            value: t
                        });
                }
            }, c = function(t, e) {
                var n = s1(t);
                return !0 === e ? Object.assign({
                }, n, {
                    visible: !0
                }) : "string" == typeof e ? Object.assign({
                }, n, {
                    visible: !0,
                    text: e
                }) : o1.isPlainObject(e) ? Object.assign({
                    visible: !0
                }, n, e) : Object.assign({
                }, n, {
                    visible: !1
                });
            }, l = function(t) {
                for(var e = {
                }, n = 0, o = Object.keys(t); n < o.length; n++){
                    var r = o[n], a = t[r], s = c(r, a);
                    e[r] = s;
                }
                return e.cancel || (e.cancel = i), e;
            }, u = function(t) {
                var n = {
                };
                switch(t.length){
                    case 1:
                        n[e3.CANCEL_KEY] = Object.assign({
                        }, i, {
                            visible: !1
                        });
                        break;
                    case 2:
                        n[e3.CANCEL_KEY] = c(e3.CANCEL_KEY, t[0]), n[e3.CONFIRM_KEY] = c(e3.CONFIRM_KEY, t[1]);
                        break;
                    default:
                        o1.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!");
                }
                return n;
            };
            e3.getButtonListOpts = function(t) {
                var n = e3.defaultButtonList;
                return "string" == typeof t ? n[e3.CONFIRM_KEY] = c(e3.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o1.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([
                    !0,
                    !0
                ]) : !1 === t ? n = u([
                    !1,
                    !1
                ]) : void 0 === t && (n = e3.defaultButtonList), n;
            };
        },
        function(t5, e4, n5) {
            "use strict";
            Object.defineProperty(e4, "__esModule", {
                value: !0
            });
            var o = n5(1), r = n5(2), i = n5(0), a = i.default.MODAL, s = i.default.OVERLAY, c = n5(30), l = n5(31), u = n5(32), f = n5(33);
            e4.injectElIntoModal = function(t) {
                var e = o.getNode(a), n = o.stringToNode(t);
                return e.appendChild(n), n;
            };
            var d = function(t) {
                t.className = a, t.textContent = "";
            }, p = function(t, e) {
                d(t);
                var n = e.className;
                n && t.classList.add(n);
            };
            e4.initModalContent = function(t) {
                var e = o.getNode(a);
                p(e, t), c.default(t.icon), l.initTitle(t.title), l.initText(t.text), f.default(t.content), u.default(t.buttons, t.dangerMode);
            };
            var m = function() {
                var t = o.getNode(s), e = o.stringToNode(r.modalMarkup);
                t.appendChild(e);
            };
            e4.default = m;
        },
        function(t6, e5, n6) {
            "use strict";
            Object.defineProperty(e5, "__esModule", {
                value: !0
            });
            var o2 = n6(3), r = {
                isOpen: !1,
                promise: null,
                actions: {
                },
                timer: null
            }, i = Object.assign({
            }, r);
            e5.resetState = function() {
                i = Object.assign({
                }, r);
            }, e5.setActionValue = function(t) {
                if ("string" == typeof t) return a(o2.CONFIRM_KEY, t);
                for(var e in t)a(e, t[e]);
            };
            var a = function(t, e) {
                i.actions[t] || (i.actions[t] = {
                }), Object.assign(i.actions[t], {
                    value: e
                });
            };
            e5.setActionOptionsFor = function(t, e) {
                var n = (void 0 === e ? {
                } : e).closeModal, o = void 0 === n || n;
                Object.assign(i.actions[t], {
                    closeModal: o
                });
            }, e5.default = i;
        },
        function(t7, e6, n7) {
            "use strict";
            Object.defineProperty(e6, "__esModule", {
                value: !0
            });
            var o = n7(1), r = n7(3), i1 = n7(0), a = i1.default.OVERLAY, s = i1.default.SHOW_MODAL, c = i1.default.BUTTON, l = i1.default.BUTTON_LOADING, u = n7(5);
            e6.openModal = function() {
                o.getNode(a).classList.add(s), u.default.isOpen = !0;
            };
            var f = function() {
                o.getNode(a).classList.remove(s), u.default.isOpen = !1;
            };
            e6.onAction = function(t) {
                void 0 === t && (t = r.CANCEL_KEY);
                var e = u.default.actions[t], n = e.value;
                if (!1 === e.closeModal) {
                    var i = c + "--" + t;
                    o.getNode(i).classList.add(l);
                } else f();
                u.default.promise.resolve(n);
            }, e6.getState = function() {
                var t = Object.assign({
                }, u.default);
                return delete t.promise, delete t.timer, t;
            }, e6.stopLoading = function() {
                for(var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++)t[e].classList.remove(l);
            };
        },
        function(t, e) {
            var n;
            n = (function() {
                return this;
            })();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (t8) {
                "object" == typeof window && (n = window);
            }
            t.exports = n;
        },
        function(t, e7, n) {
            (function(e) {
                t.exports = e.sweetAlert = n(9);
            }).call(e7, n(7));
        },
        function(t, e8, n) {
            (function(e) {
                t.exports = e.swal = n(10);
            }).call(e8, n(7));
        },
        function(t, e, n) {
            "undefined" != typeof window && n(11), n(16);
            var o = n(23).default;
            t.exports = o;
        },
        function(t, e, n) {
            var o = n(12);
            "string" == typeof o && (o = [
                [
                    t.i,
                    o,
                    ""
                ]
            ]);
            var r = {
                insertAt: "top"
            };
            r.transform = void 0;
            n(14)(o, r);
            o.locals && (t.exports = o.locals);
        },
        function(t, e, n) {
            e = t.exports = n(13)(void 0), e.push([
                t.i,
                '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',
                ""
            ]);
        },
        function(t9, e9) {
            function n8(t10, e) {
                var n = t10[1] || "", r = t10[3];
                if (!r) return n;
                if (e && "function" == typeof btoa) {
                    var i = o3(r);
                    return [
                        n
                    ].concat(r.sources.map(function(t) {
                        return "/*# sourceURL=" + r.sourceRoot + t + " */";
                    })).concat([
                        i
                    ]).join("\n");
                }
                return [
                    n
                ].join("\n");
            }
            function o3(t) {
                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
            }
            t9.exports = function(t11) {
                var e10 = [];
                return e10.toString = function() {
                    return this.map(function(e) {
                        var o = n8(e, t11);
                        return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
                    }).join("");
                }, e10.i = function(t, n) {
                    "string" == typeof t && (t = [
                        [
                            null,
                            t,
                            ""
                        ]
                    ]);
                    for(var o = {
                    }, r = 0; r < this.length; r++){
                        var i = this[r][0];
                        "number" == typeof i && (o[i] = !0);
                    }
                    for(r = 0; r < t.length; r++){
                        var a = t[r];
                        "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e10.push(a));
                    }
                }, e10;
            };
        },
        function(t12, e11, n9) {
            function o4(t, e) {
                for(var n = 0; n < t.length; n++){
                    var o = t[n], r = m[o.id];
                    if (r) {
                        r.refs++;
                        for(var i = 0; i < r.parts.length; i++)r.parts[i](o.parts[i]);
                        for(; i < o.parts.length; i++)r.parts.push(u1(o.parts[i], e));
                    } else {
                        for(var a = [], i = 0; i < o.parts.length; i++)a.push(u1(o.parts[i], e));
                        m[o.id] = {
                            id: o.id,
                            refs: 1,
                            parts: a
                        };
                    }
                }
            }
            function r2(t, e) {
                for(var n = [], o = {
                }, r = 0; r < t.length; r++){
                    var i = t[r], a = e.base ? i[0] + e.base : i[0], s = i[1], c = i[2], l = i[3], u = {
                        css: s,
                        media: c,
                        sourceMap: l
                    };
                    o[a] ? o[a].parts.push(u) : n.push(o[a] = {
                        id: a,
                        parts: [
                            u
                        ]
                    });
                }
                return n;
            }
            function i2(t, e) {
                var n = v(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = w[w.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e);
                else {
                    if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(e);
                }
            }
            function a2(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = w.indexOf(t);
                e >= 0 && w.splice(e, 1);
            }
            function s2(t) {
                var e = document.createElement("style");
                return t.attrs.type = "text/css", l1(e, t.attrs), i2(t, e), e;
            }
            function c1(t) {
                var e = document.createElement("link");
                return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l1(e, t.attrs), i2(t, e), e;
            }
            function l1(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function u1(t, e12) {
                var n, o, r, i;
                if (e12.transform && t.css) {
                    if (!(i = e12.transform(t.css))) return function() {
                    };
                    t.css = i;
                }
                if (e12.singleton) {
                    var l = h++;
                    n = g || (g = s2(e12)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0);
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c1(e12), o = p.bind(null, n, e12), r = function() {
                    a2(n), n.href && URL.revokeObjectURL(n.href);
                }) : (n = s2(e12), o = d.bind(null, n), r = function() {
                    a2(n);
                });
                return o(t), function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        o(t = e);
                    } else r();
                };
            }
            function f(t, e, n, o) {
                var r = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, r);
                else {
                    var i = document.createTextNode(r), a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
            function d(t, e) {
                var n = e.css, o = e.media;
                if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for(; t.firstChild;)t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n));
                }
            }
            function p(t, e, n) {
                var o = n.css, r = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && r;
                (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                var a = new Blob([
                    o
                ], {
                    type: "text/css"
                }), s = t.href;
                t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
            }
            var m = {
            }, b = function(t) {
                var e;
                return function() {
                    return void 0 === e && (e = t.apply(this, arguments)), e;
                };
            }(function() {
                return window && document && document.all && !window.atob;
            }), v = function(t) {
                var e = {
                };
                return function(n) {
                    return void 0 === e[n] && (e[n] = t.call(this, n)), e[n];
                };
            }(function(t) {
                return document.querySelector(t);
            }), g = null, h = 0, w = [], y = n9(15);
            t12.exports = function(t13, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                e = e || {
                }, e.attrs = "object" == typeof e.attrs ? e.attrs : {
                }, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = r2(t13, e);
                return o4(n, e), function(t) {
                    for(var i = [], a = 0; a < n.length; a++){
                        var s = n[a], c = m[s.id];
                        c.refs--, i.push(c);
                    }
                    if (t) o4(r2(t, e), e);
                    for(var a = 0; a < i.length; a++){
                        var c = i[a];
                        if (0 === c.refs) {
                            for(var l = 0; l < c.parts.length; l++)c.parts[l]();
                            delete m[c.id];
                        }
                    }
                };
            };
            var x = function() {
                var t = [];
                return function(e, n) {
                    return t[e] = n, t.filter(Boolean).join("\n");
                };
            }();
        },
        function(t14, e13) {
            t14.exports = function(t15) {
                var e14 = "undefined" != typeof window && window.location;
                if (!e14) throw new Error("fixUrls requires window.location");
                if (!t15 || "string" != typeof t15) return t15;
                var n = e14.protocol + "//" + e14.host, o = n + e14.pathname.replace(/\/[^\/]*$/, "/");
                return t15.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e15) {
                    var r = e15.trim().replace(/^"(.*)"$/, function(t, e) {
                        return e;
                    }).replace(/^'(.*)'$/, function(t, e) {
                        return e;
                    });
                    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
                    var i;
                    return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")";
                });
            };
        },
        function(t16, e16, n10) {
            var o5 = n10(17);
            "undefined" == typeof window || window.Promise || (window.Promise = o5), n10(21), String.prototype.includes || (String.prototype.includes = function(t, e) {
                return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e);
            }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function(t17, e17) {
                    if (null == this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this), o = n.length >>> 0;
                    if (0 === o) return !1;
                    for(var r = 0 | e17, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;){
                        if ((function(t, e) {
                            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e);
                        })(n[i], t17)) return !0;
                        i++;
                    }
                    return !1;
                }
            }), "undefined" != typeof window && (function(t18) {
                t18.forEach(function(t) {
                    t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: function() {
                            this.parentNode.removeChild(this);
                        }
                    });
                });
            })([
                Element.prototype,
                CharacterData.prototype,
                DocumentType.prototype
            ]);
        },
        function(t19, e18, n11) {
            (function(e19) {
                !function(n12) {
                    function o6() {
                    }
                    function r3(t, e) {
                        return function() {
                            t.apply(e, arguments);
                        };
                    }
                    function i3(t) {
                        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
                    }
                    function a3(t20, e) {
                        for(; 3 === t20._state;)t20 = t20._value;
                        if (0 === t20._state) return void t20._deferreds.push(e);
                        t20._handled = !0, i3._immediateFn(function() {
                            var n = 1 === t20._state ? e.onFulfilled : e.onRejected;
                            if (null === n) return void (1 === t20._state ? s3 : c)(e.promise, t20._value);
                            var o;
                            try {
                                o = n(t20._value);
                            } catch (t) {
                                return void c(e.promise, t);
                            }
                            s3(e.promise, o);
                        });
                    }
                    function s3(t, e) {
                        try {
                            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                            if (e && ("object" == typeof e || "function" == typeof e)) {
                                var n = e.then;
                                if (e instanceof i3) return t._state = 3, t._value = e, void l(t);
                                if ("function" == typeof n) return void f(r3(n, e), t);
                            }
                            t._state = 1, t._value = e, l(t);
                        } catch (e20) {
                            c(t, e20);
                        }
                    }
                    function c(t, e) {
                        t._state = 2, t._value = e, l(t);
                    }
                    function l(t) {
                        2 === t._state && 0 === t._deferreds.length && i3._immediateFn(function() {
                            t._handled || i3._unhandledRejectionFn(t._value);
                        });
                        for(var e = 0, n = t._deferreds.length; e < n; e++)a3(t, t._deferreds[e]);
                        t._deferreds = null;
                    }
                    function u(t, e, n) {
                        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
                    }
                    function f(t21, e) {
                        var n = !1;
                        try {
                            t21(function(t) {
                                n || (n = !0, s3(e, t));
                            }, function(t) {
                                n || (n = !0, c(e, t));
                            });
                        } catch (t) {
                            if (n) return;
                            n = !0, c(e, t);
                        }
                    }
                    var d = setTimeout;
                    i3.prototype.catch = function(t) {
                        return this.then(null, t);
                    }, i3.prototype.then = function(t, e) {
                        var n = new this.constructor(o6);
                        return a3(this, new u(t, e, n)), n;
                    }, i3.all = function(t22) {
                        var e = Array.prototype.slice.call(t22);
                        return new i3(function(t23, n) {
                            function o(i, a) {
                                try {
                                    if (a && ("object" == typeof a || "function" == typeof a)) {
                                        var s = a.then;
                                        if ("function" == typeof s) return void s.call(a, function(t) {
                                            o(i, t);
                                        }, n);
                                    }
                                    e[i] = a, 0 == --r && t23(e);
                                } catch (t) {
                                    n(t);
                                }
                            }
                            if (0 === e.length) return t23([]);
                            for(var r = e.length, i4 = 0; i4 < e.length; i4++)o(i4, e[i4]);
                        });
                    }, i3.resolve = function(t) {
                        return t && "object" == typeof t && t.constructor === i3 ? t : new i3(function(e) {
                            e(t);
                        });
                    }, i3.reject = function(t) {
                        return new i3(function(e, n) {
                            n(t);
                        });
                    }, i3.race = function(t) {
                        return new i3(function(e, n) {
                            for(var o = 0, r = t.length; o < r; o++)t[o].then(e, n);
                        });
                    }, i3._immediateFn = "function" == typeof e19 && function(t) {
                        e19(t);
                    } || function(t) {
                        d(t, 0);
                    }, i3._unhandledRejectionFn = function(t) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
                    }, i3._setImmediateFn = function(t) {
                        i3._immediateFn = t;
                    }, i3._setUnhandledRejectionFn = function(t) {
                        i3._unhandledRejectionFn = t;
                    }, void 0 !== t19 && t19.exports ? t19.exports = i3 : n12.Promise || (n12.Promise = i3);
                }(this);
            }).call(e18, n11(18).setImmediate);
        },
        function(t24, e21, n) {
            function o(t, e) {
                this._id = t, this._clearFn = e;
            }
            var r = Function.prototype.apply;
            e21.setTimeout = function() {
                return new o(r.call(setTimeout, window, arguments), clearTimeout);
            }, e21.setInterval = function() {
                return new o(r.call(setInterval, window, arguments), clearInterval);
            }, e21.clearTimeout = e21.clearInterval = function(t) {
                t && t.close();
            }, o.prototype.unref = o.prototype.ref = function() {
            }, o.prototype.close = function() {
                this._clearFn.call(window, this._id);
            }, e21.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
            }, e21.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
            }, e21._unrefActive = e21.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout();
                }, e));
            }, n(19), e21.setImmediate = setImmediate, e21.clearImmediate = clearImmediate;
        },
        function(t25, e22, n13) {
            (function(t26, e23) {
                !function(t27, n14) {
                    function o7(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for(var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)e[n] = arguments[n + 1];
                        var o = {
                            callback: t,
                            args: e
                        };
                        return l[c] = o, s(c), c++;
                    }
                    function r(t) {
                        delete l[t];
                    }
                    function i(t) {
                        var e = t.callback, o = t.args;
                        switch(o.length){
                            case 0:
                                e();
                                break;
                            case 1:
                                e(o[0]);
                                break;
                            case 2:
                                e(o[0], o[1]);
                                break;
                            case 3:
                                e(o[0], o[1], o[2]);
                                break;
                            default:
                                e.apply(n14, o);
                        }
                    }
                    function a(t) {
                        if (u) setTimeout(a, 0, t);
                        else {
                            var e = l[t];
                            if (e) {
                                u = !0;
                                try {
                                    i(e);
                                } finally{
                                    r(t), u = !1;
                                }
                            }
                        }
                    }
                    if (!t27.setImmediate) {
                        var s, c = 1, l = {
                        }, u = !1, f = t27.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t27);
                        d = d && d.setTimeout ? d : t27, "[object process]" === ({
                        }).toString.call(t27.process) ? (function() {
                            s = function(t) {
                                e23.nextTick(function() {
                                    a(t);
                                });
                            };
                        })() : (function() {
                            if (t27.postMessage && !t27.importScripts) {
                                var e = !0, n = t27.onmessage;
                                return t27.onmessage = function() {
                                    e = !1;
                                }, t27.postMessage("", "*"), t27.onmessage = n, e;
                            }
                        })() ? (function() {
                            var e = "setImmediate$" + Math.random() + "$", n15 = function(n) {
                                n.source === t27 && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length));
                            };
                            t27.addEventListener ? t27.addEventListener("message", n15, !1) : t27.attachEvent("onmessage", n15), s = function(n) {
                                t27.postMessage(e + n, "*");
                            };
                        })() : t27.MessageChannel ? (function() {
                            var t28 = new MessageChannel;
                            t28.port1.onmessage = function(t) {
                                a(t.data);
                            }, s = function(e) {
                                t28.port2.postMessage(e);
                            };
                        })() : f && "onreadystatechange" in f.createElement("script") ? (function() {
                            var t = f.documentElement;
                            s = function(e) {
                                var n = f.createElement("script");
                                n.onreadystatechange = function() {
                                    a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
                                }, t.appendChild(n);
                            };
                        })() : (function() {
                            s = function(t) {
                                setTimeout(a, 0, t);
                            };
                        })(), d.setImmediate = o7, d.clearImmediate = r;
                    }
                }("undefined" == typeof self ? void 0 === t26 ? this : t26 : self);
            }).call(e22, n13(7), n13(20));
        },
        function(t29, e24) {
            function n16() {
                throw new Error("setTimeout has not been defined");
            }
            function o() {
                throw new Error("clearTimeout has not been defined");
            }
            function r(t) {
                if (u === setTimeout) return setTimeout(t, 0);
                if ((u === n16 || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
                try {
                    return u(t, 0);
                } catch (e) {
                    try {
                        return u.call(null, t, 0);
                    } catch (e) {
                        return u.call(this, t, 0);
                    }
                }
            }
            function i(t) {
                if (f === clearTimeout) return clearTimeout(t);
                if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
                try {
                    return f(t);
                } catch (e) {
                    try {
                        return f.call(null, t);
                    } catch (e) {
                        return f.call(this, t);
                    }
                }
            }
            function a() {
                b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s());
            }
            function s() {
                if (!b) {
                    var t = r(a);
                    b = !0;
                    for(var e = m.length; e;){
                        for(p = m, m = []; ++v < e;)p && p[v].run();
                        v = -1, e = m.length;
                    }
                    p = null, b = !1, i(t);
                }
            }
            function c(t, e) {
                this.fun = t, this.array = e;
            }
            function l() {
            }
            var u, f, d = t29.exports = {
            };
            !function() {
                try {
                    u = "function" == typeof setTimeout ? setTimeout : n16;
                } catch (t) {
                    u = n16;
                }
                try {
                    f = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (t30) {
                    f = o;
                }
            }();
            var p, m = [], b = !1, v = -1;
            d.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for(var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
                m.push(new c(t, e)), 1 !== m.length || b || r(s);
            }, c.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, d.title = "browser", d.browser = !0, d.env = {
            }, d.argv = [], d.version = "", d.versions = {
            }, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function(t) {
                return [];
            }, d.binding = function(t) {
                throw new Error("process.binding is not supported");
            }, d.cwd = function() {
                return "/";
            }, d.chdir = function(t) {
                throw new Error("process.chdir is not supported");
            }, d.umask = function() {
                return 0;
            };
        },
        function(t, e, n) {
            "use strict";
            n(22).polyfill();
        },
        function(t31, e, n17) {
            "use strict";
            function o8(t, e) {
                if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
                for(var n = Object(t), o = 1; o < arguments.length; o++){
                    var r = arguments[o];
                    if (void 0 !== r && null !== r) for(var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++){
                        var c = i[a], l = Object.getOwnPropertyDescriptor(r, c);
                        void 0 !== l && l.enumerable && (n[c] = r[c]);
                    }
                }
                return n;
            }
            function r4() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: o8
                });
            }
            t31.exports = {
                assign: o8,
                polyfill: r4
            };
        },
        function(t32, e25, n18) {
            "use strict";
            Object.defineProperty(e25, "__esModule", {
                value: !0
            });
            var o = n18(24), r = n18(6), i = n18(5), a = n18(36), s = function() {
                for(var t33 = [], e26 = 0; e26 < arguments.length; e26++)t33[e26] = arguments[e26];
                if ("undefined" != typeof window) {
                    var n = a.getOpts.apply(void 0, t33);
                    return new Promise(function(t, e) {
                        i.default.promise = {
                            resolve: t,
                            reject: e
                        }, o.default(n), setTimeout(function() {
                            r.openModal();
                        });
                    });
                }
            };
            s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e25.default = s;
        },
        function(t34, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(0), i = r.default.MODAL, a = n(4), s = n(34), c = n(35), l = n(1);
            e.init = function(t) {
                o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t), c.default(t);
            }, e.default = e.init;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.MODAL;
            e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e.default = e.modalMarkup;
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.OVERLAY, i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
            e.default = i;
        },
        function(t35, e27, n) {
            "use strict";
            Object.defineProperty(e27, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.ICON;
            e27.errorIconMarkup = function() {
                var t = r + "--error", e = t + "__line";
                return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ';
            }, e27.warningIconMarkup = function() {
                var t = r + "--warning";
                return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ';
            }, e27.successIconMarkup = function() {
                var t = r + "--success";
                return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ';
            };
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.CONTENT;
            e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n';
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(0), r = o.default.BUTTON_CONTAINER, i = o.default.BUTTON, a = o.default.BUTTON_LOADER;
            e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
        },
        function(t36, e28, n19) {
            "use strict";
            Object.defineProperty(e28, "__esModule", {
                value: !0
            });
            var o9 = n19(4), r = n19(2), i = n19(0), a = i.default.ICON, s = i.default.ICON_CUSTOM, c = [
                "error",
                "warning",
                "success",
                "info"
            ], l = {
                error: r.errorIconMarkup(),
                warning: r.warningIconMarkup(),
                success: r.successIconMarkup()
            }, u = function(t, e) {
                var n = a + "--" + t;
                e.classList.add(n);
                var o = l[t];
                o && (e.innerHTML = o);
            }, f = function(t, e) {
                e.classList.add(s);
                var n = document.createElement("img");
                n.src = t, e.appendChild(n);
            }, d = function(t) {
                if (t) {
                    var e = o9.injectElIntoModal(r.iconMarkup);
                    c.includes(t) ? u(t, e) : f(t, e);
                }
            };
            e28.default = d;
        },
        function(t37, e29, n20) {
            "use strict";
            Object.defineProperty(e29, "__esModule", {
                value: !0
            });
            var o10 = n20(2), r = n20(4), i = function(t) {
                navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "");
            };
            e29.initTitle = function(t) {
                if (t) {
                    var e = r.injectElIntoModal(o10.titleMarkup);
                    e.textContent = t, i(e);
                }
            }, e29.initText = function(t38) {
                if (t38) {
                    var e = document.createDocumentFragment();
                    t38.split("\n").forEach(function(t, n, o) {
                        e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"));
                    });
                    var n21 = r.injectElIntoModal(o10.textMarkup);
                    n21.appendChild(e), i(n21);
                }
            };
        },
        function(t39, e30, n23) {
            "use strict";
            Object.defineProperty(e30, "__esModule", {
                value: !0
            });
            var o11 = n23(1), r5 = n23(4), i5 = n23(0), a4 = i5.default.BUTTON, s = i5.default.DANGER_BUTTON, c = n23(3), l = n23(2), u = n23(6), f = n23(5), d1 = function(t40, e, n) {
                var r = e.text, i = e.value, d = e.className, p = e.closeModal, m = o11.stringToNode(l.buttonMarkup), b = m.querySelector("." + a4), v = a4 + "--" + t40;
                if (b.classList.add(v), d) (Array.isArray(d) ? d : d.split(" ")).filter(function(t) {
                    return t.length > 0;
                }).forEach(function(t) {
                    b.classList.add(t);
                });
                n && t40 === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
                var g = {
                };
                return g[t40] = i, f.setActionValue(g), f.setActionOptionsFor(t40, {
                    closeModal: p
                }), b.addEventListener("click", function() {
                    return u.onAction(t40);
                }), m;
            }, p1 = function(t, e) {
                var n = r5.injectElIntoModal(l.footerMarkup);
                for(var o in t){
                    var i = t[o], a = d1(o, i, e);
                    i.visible && n.appendChild(a);
                }
                0 === n.children.length && n.remove();
            };
            e30.default = p1;
        },
        function(t41, e31, n24) {
            "use strict";
            Object.defineProperty(e31, "__esModule", {
                value: !0
            });
            var o12 = n24(3), r6 = n24(4), i = n24(2), a5 = n24(5), s = n24(6), c = n24(0), l = c.default.CONTENT, u = function(t42) {
                t42.addEventListener("input", function(t) {
                    var e = t.target, n = e.value;
                    a5.setActionValue(n);
                }), t42.addEventListener("keyup", function(t) {
                    if ("Enter" === t.key) return s.onAction(o12.CONFIRM_KEY);
                }), setTimeout(function() {
                    t42.focus(), a5.setActionValue("");
                }, 0);
            }, f = function(t, e, n) {
                var o = document.createElement(e), r = l + "__" + e;
                o.classList.add(r);
                for(var i in n){
                    var a = n[i];
                    o[i] = a;
                }
                "input" === e && u(o), t.appendChild(o);
            }, d = function(t) {
                if (t) {
                    var e = r6.injectElIntoModal(i.contentMarkup), n = t.element, o = t.attributes;
                    "string" == typeof n ? f(e, n, o) : e.appendChild(n);
                }
            };
            e31.default = d;
        },
        function(t43, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = n(1), r = n(2), i = function() {
                var t = o.stringToNode(r.overlayMarkup);
                document.body.appendChild(t);
            };
            e.default = i;
        },
        function(t44, e32, n) {
            "use strict";
            Object.defineProperty(e32, "__esModule", {
                value: !0
            });
            var o13 = n(5), r = n(6), i = n(1), a = n(3), s = n(0), c = s.default.MODAL, l = s.default.BUTTON, u = s.default.OVERLAY, f = function(t) {
                t.preventDefault(), v();
            }, d = function(t) {
                t.preventDefault(), g();
            }, p = function(t) {
                if (o13.default.isOpen) switch(t.key){
                    case "Escape":
                        return r.onAction(a.CANCEL_KEY);
                }
            }, m = function(t) {
                if (o13.default.isOpen) switch(t.key){
                    case "Tab":
                        return f(t);
                }
            }, b = function(t) {
                if (o13.default.isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0;
            }, v = function() {
                var t = i.getNode(l);
                t && (t.tabIndex = 0, t.focus());
            }, g = function() {
                var t = i.getNode(c), e = t.querySelectorAll("." + l), n = e.length - 1, o = e[n];
                o && o.focus();
            }, h = function(t) {
                t[t.length - 1].addEventListener("keydown", m);
            }, w = function(t) {
                t[0].addEventListener("keydown", b);
            }, y = function() {
                var t = i.getNode(c), e = t.querySelectorAll("." + l);
                e.length && (h(e), w(e));
            }, x = function(t) {
                if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY);
            }, _ = function(t) {
                var e = i.getNode(u);
                e.removeEventListener("click", x), t && e.addEventListener("click", x);
            }, k = function(t) {
                o13.default.timer && clearTimeout(o13.default.timer), t && (o13.default.timer = window.setTimeout(function() {
                    return r.onAction(a.CANCEL_KEY);
                }, t));
            }, O = function(t) {
                t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer);
            };
            e32.default = O;
        },
        function(t45, e33, n25) {
            "use strict";
            Object.defineProperty(e33, "__esModule", {
                value: !0
            });
            var o14 = n25(1), r7 = n25(3), i6 = n25(37), a6 = n25(38), s4 = {
                title: null,
                text: null,
                icon: null,
                buttons: r7.defaultButtonList,
                content: null,
                className: null,
                closeOnClickOutside: !0,
                closeOnEsc: !0,
                dangerMode: !1,
                timer: null
            }, c = Object.assign({
            }, s4);
            e33.setDefaults = function(t) {
                c = Object.assign({
                }, s4, t);
            };
            var l = function(t) {
                var e = t && t.button, n = t && t.buttons;
                return void 0 !== e && void 0 !== n && o14.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {
                    confirm: e
                } : n;
            }, u2 = function(t) {
                return o14.ordinalSuffixOf(t + 1);
            }, f = function(t, e) {
                o14.throwErr(u2(e) + " argument ('" + t + "') is invalid");
            }, d = function(t, e) {
                var n = t + 1, r = e[n];
                o14.isPlainObject(r) || void 0 === r || o14.throwErr("Expected " + u2(n) + " argument ('" + r + "') to be a plain object");
            }, p = function(t, e) {
                var n = t + 1, r = e[n];
                void 0 !== r && o14.throwErr("Unexpected " + u2(n) + " argument (" + r + ")");
            }, m = function(t, e, n, r) {
                var i = typeof e, a = "string" === i, s = e instanceof Element;
                if (a) {
                    if (0 === n) return {
                        text: e
                    };
                    if (1 === n) return {
                        text: e,
                        title: r[0]
                    };
                    if (2 === n) return d(n, r), {
                        icon: e
                    };
                    f(e, n);
                } else {
                    if (s && 0 === n) return d(n, r), {
                        content: e
                    };
                    if (o14.isPlainObject(e)) return p(n, r), e;
                    f(e, n);
                }
            };
            e33.getOpts = function() {
                for(var t46 = [], e34 = 0; e34 < arguments.length; e34++)t46[e34] = arguments[e34];
                var n = {
                };
                t46.forEach(function(e, o) {
                    var r = m(0, e, o, t46);
                    Object.assign(n, r);
                });
                var o15 = l(n);
                n.buttons = r7.getButtonListOpts(o15), delete n.button, n.content = i6.getContentOpts(n.content);
                var u = Object.assign({
                }, s4, c, n);
                return Object.keys(u).forEach(function(t) {
                    a6.DEPRECATED_OPTS[t] && a6.logDeprecation(t);
                }), u;
            };
        },
        function(t47, e35, n) {
            "use strict";
            Object.defineProperty(e35, "__esModule", {
                value: !0
            });
            var o = n(1), r = {
                element: "input",
                attributes: {
                    placeholder: ""
                }
            };
            e35.getContentOpts = function(t) {
                var e = {
                };
                return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {
                    element: t
                } : "input" === t ? r : null;
            };
        },
        function(t48, e, n26) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.logDeprecation = function(t) {
                var n = e.DEPRECATED_OPTS[t], o = n.onlyRename, r = n.replacement, i = n.subOption, a = n.link, s = o ? "renamed" : "deprecated", c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
                if (r) c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.';
                var l = "https://sweetalert.js.org";
                c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c);
            }, e.DEPRECATED_OPTS = {
                type: {
                    replacement: "icon",
                    link: "/docs/#icon"
                },
                imageUrl: {
                    replacement: "icon",
                    link: "/docs/#icon"
                },
                customClass: {
                    replacement: "className",
                    onlyRename: !0,
                    link: "/docs/#classname"
                },
                imageSize: {
                },
                showCancelButton: {
                    replacement: "buttons",
                    link: "/docs/#buttons"
                },
                showConfirmButton: {
                    replacement: "button",
                    link: "/docs/#button"
                },
                confirmButtonText: {
                    replacement: "button",
                    link: "/docs/#button"
                },
                confirmButtonColor: {
                },
                cancelButtonText: {
                    replacement: "buttons",
                    link: "/docs/#buttons"
                },
                closeOnConfirm: {
                    replacement: "button",
                    subOption: "closeModal",
                    link: "/docs/#button"
                },
                closeOnCancel: {
                    replacement: "buttons",
                    subOption: "closeModal",
                    link: "/docs/#buttons"
                },
                showLoaderOnConfirm: {
                    replacement: "buttons"
                },
                animation: {
                },
                inputType: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                inputValue: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                inputPlaceholder: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                html: {
                    replacement: "content",
                    link: "/docs/#content"
                },
                allowEscapeKey: {
                    replacement: "closeOnEsc",
                    onlyRename: !0,
                    link: "/docs/#closeonesc"
                },
                allowClickOutside: {
                    replacement: "closeOnClickOutside",
                    onlyRename: !0,
                    link: "/docs/#closeonclickoutside"
                }
            };
        }
    ]);
});

},{}]},["4Ifvo","elKqW"], "elKqW", "parcelRequire94c2")

//# sourceMappingURL=index.689c6fb6.js.map
