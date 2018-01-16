require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/ 	
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "1f502d701ba0c4926eb8"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.spinrc.json":
/***/ (function(module, exports) {

module.exports = {"builders":{"server":{"stack":["react-native-web","server"],"enabled":true},"web":{"stack":["react-native-web","web"],"openBrowser":true,"enabled":true},"android":{"stack":["react-native","android"],"enabled":false},"ios":{"stack":["react-native","ios"],"enabled":false},"test":{"stack":["react-native-web","server"],"roles":["test"]}},"options":{"backendBuildDir":"build/server","frontendBuildDir":"build/client","dllBuildDir":"build/dll","overridesConfig":"tools/webpackAppConfig.js","stack":["apollo","react","styled-components","css","sass","less","es6","webpack"],"backendUrl":"http://localhost:8080/graphql","ssr":true,"webpackDll":true,"devProxy":true,"reactHotLoader":false,"persistGraphQL":false,"frontendRefreshOnBackendChange":true}}

/***/ }),

/***/ "./config/analytics.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  ga: {
    trackingId: 'UA-000000-01'
  },
  apolloEngine: {
    key: 'service:sysgears-Apollo-Universal-Starter-Kit:mZvnMtAgDE93vAtk8Cj-1Q' // Set your Apollo Engine key here
  }
});

/***/ }),

/***/ "./config/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Apollo Starter Kit',
  logging: {
    debugSQL: false,
    apolloLogging: false
  },
  // Check here for Windows and Mac OS X: https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls
  // Use this protocol handler for Linux: https://github.com/sysgears/vscode-handler
  stackFragmentFormat: 'vscode://file/{0}:{1}:{2}'
});

/***/ }),

/***/ "./config/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var DB_TYPE = process.env.DB_TYPE || 'sqlite';
var client = '';
var connectionDevelopment = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  socketPath: process.env.DB_SOCKET_PATH,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true,
  charset: 'utf8'
};
var connectionProduction = connectionDevelopment;
var pool = {};
if (DB_TYPE === 'mysql') {
  // mysql
  client = 'mysql2';
} else if (DB_TYPE === 'pg') {
  // postgres
  client = 'pg';
} else {
  // sqlite
  client = 'sqlite3';
  connectionDevelopment = {
    filename: './dev-db.sqlite3'
  };
  connectionProduction = {
    filename: './prod-db.sqlite3'
  };
  pool = {
    afterCreate: function afterCreate(conn, cb) {
      conn.run('PRAGMA foreign_keys = ON', cb);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  dbType: DB_TYPE,
  client: client,
  connection: {
    development: connectionDevelopment,
    production: connectionProduction
  },
  pool: pool
});

/***/ }),

/***/ "./config/engine.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  engineConfig: {
    apiKey: '', // Set your Engine API key here
    logging: {
      level: 'DEBUG' // Engine Proxy logging level. DEBUG, INFO, WARN or ERROR
    }
  },
  dumpTraffic: true // Debug configuration that logs traffic between Proxy and GraphQL server
});

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__("./config/app.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__("./config/db.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return __WEBPACK_IMPORTED_MODULE_1__db__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine__ = __webpack_require__("./config/engine.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "engine", function() { return __WEBPACK_IMPORTED_MODULE_2__engine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("./config/user.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return __WEBPACK_IMPORTED_MODULE_3__user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailer__ = __webpack_require__("./config/mailer.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mailer", function() { return __WEBPACK_IMPORTED_MODULE_4__mailer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analytics__ = __webpack_require__("./config/analytics.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "analytics", function() { return __WEBPACK_IMPORTED_MODULE_5__analytics__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subscription__ = __webpack_require__("./config/subscription.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "subscription", function() { return __WEBPACK_IMPORTED_MODULE_6__subscription__["a"]; });








/***/ }),

/***/ "./config/mailer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

/***/ }),

/***/ "./config/subscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  enabled: true,
  stripePublishableKey: '',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeEndpointSecret: process.env.STRIPE_ENDPOINT_SECRET
});

/***/ }),

/***/ "./config/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CERTIFICATE_DEVSERIAL = '00';

/* harmony default export */ __webpack_exports__["a"] = ({
  secret: process.env.AUTH_SECRET,
  auth: {
    password: {
      confirm: true,
      sendConfirmationEmail: true,
      sendAddNewUserEmail: true,
      enabled: true
    },
    certificate: {
      devSerial: CERTIFICATE_DEVSERIAL,
      enabled: false
    },
    facebook: {
      enabled: false,
      clientID: process.env.FACEBOOK_CLIENTID,
      clientSecret: process.env.FACEBOOK_CLIENTSECRET,
      scope: ['email'],
      profileFields: ['id', 'emails', 'displayName']
    },
    google: {
      enabled: false,
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
      scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
    }
  }
});

/***/ }),

/***/ "./knexdata.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "development", function() { return development; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "production", function() { return production; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return test; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__("./settings.js");


var development = {
  client: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].db.client,
  connection: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].db.connection.development,
  pool: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].db.pool,
  seeds: {
    directory: './src/server/database/seeds'
  },
  migrations: {
    directory: './src/server/database/migrations'
  },
  useNullAsDefault: true
};

var production = {
  client: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].db.client,
  connection: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].db.connection.production,
  pool: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* default */].db.pool,
  seeds: {
    directory: './src/server/database/seeds'
  },
  migrations: {
    directory: './src/server/database/migrations'
  },
  useNullAsDefault: true
};

var test = {
  client: 'sqlite3',
  connection: {
    filename: ':memory:'
  },
  seeds: {
    directory: './src/server/database/seeds'
  },
  migrations: {
    directory: './src/server/database/migrations'
  },
  useNullAsDefault: true
};

/***/ }),

/***/ "./node_modules/babel-polyfill/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("core-js/shim");

__webpack_require__("regenerator-runtime/runtime");

__webpack_require__("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"styles.scss","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/home/containers/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".fixed { height:500px; overflow:hidden;  }\n.scrollit { height:500px; overflow-y:scroll; }\n", "", {"version":3,"sources":["/Users/bartelverkruijssen/Google Drive/Talqs/Talqs General/development/investCoin/apollo-universal-starter-kit-master/styles.css"],"names":[],"mappings":"AAAA,SAAS,aAAa,CAAC,gBAAgB,GAAG;AAC1C,YAAY,aAAa,CAAC,kBAAkB,EAAE","file":"styles.css","sourcesContent":[".fixed { height:500px; overflow:hidden;  }\n.scrollit { height:500px; overflow-y:scroll; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/android-chrome-192x192.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e3feec9e4d0d27f8533afb28120fe551.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/android-chrome-256x256.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2cf4795b437543bf4ccac41f66ad9ece.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/apple-touch-icon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "208ea04fbd15095c204dd8602f3f4848.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/browserconfig.xml":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c19724cfb965a1d50be44057beea825f.xml";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/favicon-16x16.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "80fcb677483d442f67fbb2208cda19a0.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/favicon-32x32.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "062d17ab30b41f728dc58dd1b3bfda2f.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/favicon.ico":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "90f438cdd91c5593a9ad4f10c191a513.ico";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/manifest.json":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a96402b6a4add55f58d514d9aef3a9ad.json";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/mstile-150x150.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ce4cc2003b65eb5b5484403f0592035.png";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/safari-pinned-tab.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c541e1960c95659ec7e61d32c919e487.svg";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/client/modules/favicon/assets/favicon.ico":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),

/***/ "./node_modules/persisted_queries.json":
/***/ (function(module, exports) {

module.exports = {}

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	if(unacceptedModules.length > 0) {
		log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if(typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog = (logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if(shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if(shouldLog(level)) {
		if(level === "info") {
			console.log(msg);
		} else if(level === "warning") {
			console.warn(msg);
		} else if(level === "error") {
			console.error(msg);
		}
	}
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/signal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if(true) {
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");
	var checkForUpdate = function checkForUpdate(fromUpdate) {
		module.hot.check().then(function(updatedModules) {
			if(!updatedModules) {
				if(fromUpdate)
					log("info", "[HMR] Update applied.");
				else
					log("warning", "[HMR] Cannot find update.");
				return;
			}

			return module.hot.apply({
				ignoreUnaccepted: true,
				onUnaccepted: function(data) {
					log("warning", "Ignored an update to unaccepted module " + data.chain.join(" -> "));
				},
			}).then(function(renewedModules) {
				__webpack_require__("./node_modules/webpack/hot/log-apply-result.js")(updatedModules, renewedModules);

				checkForUpdate(true);
			});
		}).catch(function(err) {
			var status = module.hot.status();
			if(["abort", "fail"].indexOf(status) >= 0) {
				log("warning", "[HMR] Cannot apply update.");
				log("warning", "[HMR] " + err.stack || err.message);
				log("warning", "[HMR] You need to restart the application!");
			} else {
				log("warning", "[HMR] Update failed: " + err.stack || err.message);
			}
		});
	};

	process.on(__resourceQuery.substr(1) || "SIGUSR2", function() {
		if(module.hot.status() !== "idle") {
			log("warning", "[HMR] Got signal but currently in " + module.hot.status() + " state.");
			log("warning", "[HMR] Need to be in idle state to start hot update.");
			return;
		}

		checkForUpdate();
	});
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}

/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ "./settings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__("dotenv/config");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./config/index.js");





var envSettings = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.pickBy(__WEBPACK_IMPORTED_MODULE_3__config__, function (v, k) {
  return k !== 'env';
}), __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(__WEBPACK_IMPORTED_MODULE_3__config__, 'env.' + "development"));

/* harmony default export */ __webpack_exports__["a"] = (envSettings);

/***/ }),

/***/ "./src/client/app/Routes.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_Header__ = __webpack_require__("./src/client/components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules__ = __webpack_require__("./src/client/modules/index.js");
// import React, { Component } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { Container } from 'reactstrap';
//

// import Sidebar from '../components/Sidebar/Sidebar';
// // import Breadcrumb from '../components/Breadcrumb/';
// import Aside from '../components/Aside/';
// import Footer from '../components/Footer/';
// import Dashboard from '../views/Dashboard/';
// import Charts from '../views/Charts/';
// import Widgets from '../views/Widgets/';
// import Buttons from '../views/Components/Buttons/';
// import Cards from '../views/Components/Cards/';
// import Forms from '../views/Components/Forms/';
// import Modals from '../views/Components/Modals/';
// import SocialButtons from '../views/Components/SocialButtons/';
// import Switches from '../views/Components/Switches/';
// import Tables from '../views/Components/Tables/';
// import Tabs from '../views/Components/Tabs/';
// import FontAwesome from '../views/Icons/FontAwesome/';
// import SimpleLineIcons from '../views/Icons/SimpleLineIcons/';
// import Home from '../views/Home/main';
// import Project from '../views/Project/main';
// import Rating from '../views/Rating/main';
// // import '../scss/style.scss'
//
// class Full extends Component {
//   render() {
//     // console.log(this.props)
//     return (
//       <div className="app">
//         {/* <Header /> */}
//         <div className="app-body">
//           {/* <Sidebar {...this.props} /> */}
//           <main className="main">
//             <div style={{ marginTop: 40 }} />
//             <Container fluid>
//               <Switch>
//                 <Route path="/rating/" name="rating" component={Rating} />
//                 <Route path="/project/:id" name="project" component={Project} />
//                 <Route path="/main" name="Home" component={Home} />
//                 <Route path="/dashboard" name="Dashboard" component={Dashboard} />
//                 <Route path="/components/buttons" name="Buttons" component={Buttons} />
//                 <Route path="/components/cards" name="Cards" component={Cards} />
//                 <Route path="/components/forms" name="Forms" component={Forms} />
//                 <Route path="/components/modals" name="Modals" component={Modals} />
//                 <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons} />
//                 <Route path="/components/switches" name="Swithces" component={Switches} />
//                 <Route path="/components/tables" name="Tables" component={Tables} />
//                 <Route path="/components/tabs" name="Tabs" component={Tabs} />
//                 <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome} />
//                 <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons} />
//                 <Route path="/widgets" name="Widgets" component={Widgets} />
//                 <Route path="/charts" name="Charts" component={Charts} />
//                 <Redirect from="/" to="/main" />
//               </Switch>
//             </Container>
//           </main>
//           {/* <Aside /> */}
//         </div>
//         {/* <Footer /> */}
//       </div>
//     );
//   }
// }
//
// export default Full;






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Switch"],
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Header_Header__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_3__modules__["default"].routes
  )
));

/***/ }),

/***/ "./src/client/components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);








var Header = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Header, _Component);

  function Header(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Header);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Header.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Header)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    // document.body.classList.toggle('sidebar-hidden');
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Header, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'sidebarToggle',
    value: function sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    }
  }, {
    key: 'sidebarMinimize',
    value: function sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-minimized');
    }
  }, {
    key: 'mobileSidebarToggle',
    value: function mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }, {
    key: 'asideToggle',
    value: function asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'header',
        { className: 'app-header navbar' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavbarToggler"],
          { className: 'd-lg-none', onClick: this.mobileSidebarToggle },
          '\u2630'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavbarBrand"], { href: '#' }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavbarToggler"],
          { className: 'd-md-down-none', onClick: this.sidebarToggle },
          '\u2630'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Nav"],
          { className: 'd-md-down-none', navbar: true },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavItem"],
            { className: 'px-3' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavLink"],
              { href: '/' },
              'Dashboard'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Nav"],
          { style: { marginRight: 20 }, className: 'ml-auto', navbar: true },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Dropdown"],
              { isOpen: this.state.dropdownOpen, toggle: this.toggle },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownToggle"],
                { className: 'nav-link dropdown-toggle' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', { src: 'img/avatars/6.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'span',
                  { className: 'd-md-down-none' },
                  'Bartel'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownMenu"],
                { right: true, className: this.state.dropdownOpen ? 'show' : '' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  { header: true, tag: 'div', className: 'text-center' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'strong',
                    null,
                    'Settings'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'fa fa-user' }),
                  ' Profile'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'fa fa-wrench' }),
                  ' Settings'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"], { divider: true }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'fa fa-lock' }),
                  ' Logout'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/client/modules/Widgets/Widget01.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__ = __webpack_require__("reactstrap/lib/utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__);













var propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  mainText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  smallText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  value: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  variant: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string
};

var defaultProps = {
  header: '89.9%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: ''
};

var Widget01 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget01, _Component);

  function Widget01() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget01);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget01.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget01)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget01, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          mainText = _props.mainText,
          smallText = _props.smallText,
          color = _props.color,
          value = _props.value,
          children = _props.children,
          variant = _props.variant,
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'cssModule', 'header', 'mainText', 'smallText', 'color', 'value', 'children', 'variant']);

      // demo purposes only


      var progress = { style: '', color: color, value: value };
      var card = { style: '', bgColor: '' };

      if (variant === 'inverse') {
        progress.style = 'progress-white';
        progress.color = '';
        card.style = 'text-white';
        card.bgColor = 'bg-' + color;
      }

      var classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, card.bgColor), cssModule);
      progress.style = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('progress-xs my-1', progress.style);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Card"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: classes }, attributes),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardBlock"],
          { className: 'card-body' },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: 'h4 m-0' },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            null,
            mainText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_reactstrap__["Progress"], { className: progress.style, color: progress.color, value: progress.value }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'small',
            { className: 'text-muted' },
            smallText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            null,
            children
          )
        )
      );
    }
  }]);

  return Widget01;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Widget01.propTypes = propTypes;
Widget01.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (Widget01);

/***/ }),

/***/ "./src/client/modules/Widgets/Widget02.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__ = __webpack_require__("reactstrap/lib/utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__);













var propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  mainText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  icon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  variant: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  footer: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  link: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object
};

var defaultProps = {
  header: '$1,999.50',
  mainText: 'Income',
  icon: 'fa fa-cogs',
  color: 'primary',
  variant: '0',
  link: '#'
};

var Widget02 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget02, _Component);

  function Widget02() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget02);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget02.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget02)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget02, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          mainText = _props.mainText,
          icon = _props.icon,
          color = _props.color,
          footer = _props.footer,
          link = _props.link,
          children = _props.children,
          variant = _props.variant,
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'cssModule', 'header', 'mainText', 'icon', 'color', 'footer', 'link', 'children', 'variant']);

      // demo purposes only


      var padding = variant === '0' ? { card: 'p-3', icon: 'p-3', lead: 'mt-2' } : variant === '1' ? {
        card: 'p-0',
        icon: 'p-4',
        lead: 'pt-3'
      } : { card: 'p-0', icon: 'p-4 px-5', lead: 'pt-3' };

      var card = { style: 'card-body clearfix', color: color, icon: icon, classes: '' };
      card.classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, padding.card), cssModule);

      var lead = { style: 'h5 mb-0', color: color, classes: '' };
      lead.classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(lead.style, 'text-' + card.color, padding.lead);

      var blockIcon = function blockIcon(icon) {
        var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(icon, 'bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left');
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('i', { className: classes });
      };

      var cardFooter = function cardFooter() {
        if (footer) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardFooter"],
            { className: 'px-3 py-2' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'a',
              { className: 'font-weight-bold font-xs btn-block text-muted', href: link },
              'View More',
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('i', { className: 'fa fa-angle-right float-right font-lg' })
            )
          );
        }
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Card"],
        null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardBlock"],
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: card.classes }, attributes),
          blockIcon(card.icon),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: lead.classes },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: 'text-muted text-uppercase font-weight-bold font-xs' },
            mainText
          )
        ),
        cardFooter()
      );
    }
  }]);

  return Widget02;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Widget02.propTypes = propTypes;
Widget02.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (Widget02);

/***/ }),

/***/ "./src/client/modules/common/components/web/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/index.jsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["a"]; });

//export * from './ui-antd';

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Alert.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);






var Alert = function Alert(_ref) {
  var children = _ref.children,
      color = _ref.color,
      props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children', 'color']);

  if (color === 'error') {
    color = 'danger';
  }
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Alert"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { color: color }),
    children
  );
};

Alert.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  color: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};

/* unused harmony default export */ var _unused_webpack_default_export = (Alert);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Button.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var Button = function Button(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],
    props,
    children
  );
};

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Button);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Card.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var Card = function Card(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],
    props,
    children
  );
};

Card.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Card);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/CardGroup.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var CardGroup = function CardGroup(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],
    props,
    children
  );
};

CardGroup.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (CardGroup);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/CardText.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var CardText = function CardText(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardText"],
    props,
    children
  );
};

CardText.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (CardText);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/CardTitle.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var CardTitle = function CardTitle(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],
    props,
    children
  );
};

CardTitle.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (CardTitle);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Col.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var Col = function Col(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Col"],
    props,
    children
  );
};

Col.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Col);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Container.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var Container = function Container(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Container"],
    props,
    children
  );
};

Container.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Container);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);






var Form = function Form(_ref) {
  var children = _ref.children,
      layout = _ref.layout,
      props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children', 'layout']);

  var inline = false;
  if (layout === 'inline') {
    inline = true;
  }
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Form"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { inline: inline }),
    children
  );
};

Form.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  layout: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};

/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/FormItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var FormItem = function FormItem(_ref) {
  var children = _ref.children,
      label = _ref.label,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children', 'label']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    props,
    label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      { size: 'md' },
      label,
      ':\xA0'
    ),
    children
  );
};

FormItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/* unused harmony default export */ var _unused_webpack_default_export = (FormItem);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Input.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var Input = function Input(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"],
    props,
    children
  );
};

Input.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Input);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Label.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var Label = function Label(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
    props,
    children
  );
};

Label.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Label);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/ListGroup.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var ListGroup = function ListGroup(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["ListGroup"],
    props,
    children
  );
};

ListGroup.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (ListGroup);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/ListItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["ListGroupItem"],
    props,
    children
  );
};

ListItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (ListItem);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/MenuItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var MenuItem = function MenuItem(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],
    props,
    children
  );
};

MenuItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (MenuItem);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/NavBar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules__ = __webpack_require__("./src/client/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__("./settings.js");







var NavBar = function NavBar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Navbar"],
    { color: 'faded', light: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Nav"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
          { to: '/', className: 'navbar-brand' },
          __WEBPACK_IMPORTED_MODULE_4__settings__["a" /* default */].app.name
        ),
        __WEBPACK_IMPORTED_MODULE_3__modules__["default"].navItems
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Nav"],
        { className: 'ustify-content-end' },
        __WEBPACK_IMPORTED_MODULE_3__modules__["default"].navItemsRight,
        (!false || true) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '/graphiql', className: 'nav-link' },
            'GraphiQL'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Option.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);




var Option = function Option(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'option',
    props,
    children
  );
};

Option.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Option);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/PageLayout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavBar__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/NavBar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./settings.js");








var footerHeight = '40px';

var Footer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.footer.withConfig({
  displayName: 'PageLayout__Footer',
  componentId: 'dtuivq-0'
})(['position:absolute;bottom:0;width:100%;line-height:', ';height:', ';'], footerHeight, footerHeight);

var PageLayout = function PageLayout(_ref) {
  var children = _ref.children,
      navBar = _ref.navBar;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    null,
    navBar !== false && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NavBar__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Container"],
      { id: 'content' },
      children
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Footer,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'text-center' },
        '\xA9 2017. ',
        __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].app.name,
        '.'
      )
    )
  );
};

PageLayout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  navBar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* unused harmony default export */ var _unused_webpack_default_export = (PageLayout);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/RenderCheckBox.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var RenderCheckBox = function RenderCheckBox(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  var color = 'normal';
  if (touched && error) {
    color = 'danger';
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    { color: color, check: true },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      { check: true },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, { placeholder: label, type: type })),
      ' ',
      label,
      touched && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormFeedback"],
        null,
        error
      )
    )
  );
};

RenderCheckBox.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  meta: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};

/* unused harmony default export */ var _unused_webpack_default_export = (RenderCheckBox);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/RenderField.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var RenderField = function RenderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      children = _ref.children;

  var valid = null;
  if (touched && error) {
    valid = false;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    null,
    label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      null,
      label
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, { placeholder: label, type: type, valid: valid }),
        children
      ),
      touched && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormFeedback"],
        null,
        error
      )
    )
  );
};

RenderField.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  meta: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
};

/* unused harmony default export */ var _unused_webpack_default_export = (RenderField);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/RenderSelect.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var RenderField = function RenderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      children = _ref.children,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  var color = 'normal';
  if (touched && error) {
    color = 'danger';
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    { color: color },
    label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      null,
      label
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, { type: type }),
        children
      ),
      touched && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormFeedback"],
        null,
        error
      )
    )
  );
};

RenderField.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  meta: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (RenderField);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Row.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var Row = function Row(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Row"],
    props,
    children
  );
};

Row.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Row);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Select.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);






var Select = function Select(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Input"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { type: 'select' }),
    children
  );
};

Select.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Select);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Table.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var renderHead = function renderHead(columns) {
  return columns.map(function (_ref) {
    var title = _ref.title,
        dataIndex = _ref.dataIndex,
        renderHeader = _ref.renderHeader,
        key = _ref.key;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'th',
      { key: key, className: 'w-' + (columns.length === 2 ? 100 : 100 / columns.length) },
      renderHeader ? renderHeader(title, dataIndex) : title
    );
  });
};

var renderBody = function renderBody(columns, dataSource) {
  return dataSource.map(function (entry) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'tr',
      { key: entry.id },
      renderData(columns, entry)
    );
  });
};

var renderData = function renderData(columns, entry) {
  return columns.map(function (_ref2) {
    var dataIndex = _ref2.dataIndex,
        render = _ref2.render,
        key = _ref2.key;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'td',
      { key: key },
      render ? render(entry[dataIndex], entry) : entry[dataIndex]
    );
  });
};

var Table = function Table(_ref3) {
  var dataSource = _ref3.dataSource,
      columns = _ref3.columns,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['dataSource', 'columns']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Table"],
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'thead',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'tr',
        null,
        renderHead(columns)
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'tbody',
      null,
      renderBody(columns, dataSource)
    )
  );
};

Table.propTypes = {
  dataSource: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  columns: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
};

/* unused harmony default export */ var _unused_webpack_default_export = (Table);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageLayout__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/PageLayout.jsx");
/* unused harmony reexport PageLayout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Button.jsx");
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/MenuItem.jsx");
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Form.jsx");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/FormItem.jsx");
/* unused harmony reexport FormItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Input__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Input.jsx");
/* unused harmony reexport Input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Select__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Select.jsx");
/* unused harmony reexport Select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Option__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Option.jsx");
/* unused harmony reexport Option */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RenderField__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/RenderField.jsx");
/* unused harmony reexport RenderField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RenderSelect__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/RenderSelect.jsx");
/* unused harmony reexport RenderSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RenderCheckBox__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/RenderCheckBox.jsx");
/* unused harmony reexport RenderCheckBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Alert__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Alert.jsx");
/* unused harmony reexport Alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Container__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Container.jsx");
/* unused harmony reexport Container */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Row__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Row.jsx");
/* unused harmony reexport Row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Col__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Col.jsx");
/* unused harmony reexport Col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Label__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Label.jsx");
/* unused harmony reexport Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Card__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Card.jsx");
/* unused harmony reexport Card */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CardGroup__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/CardGroup.jsx");
/* unused harmony reexport CardGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__CardTitle__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/CardTitle.jsx");
/* unused harmony reexport CardTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__CardText__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/CardText.jsx");
/* unused harmony reexport CardText */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Table__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Table.jsx");
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ListGroup__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/ListGroup.jsx");
/* unused harmony reexport ListGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ListItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/ListItem.jsx");
/* unused harmony reexport ListItem */
// eslint-disable-next-line import/prefer-default-export
























/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/index.js");
/* unused harmony namespace reexport */
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/client/modules/connector.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export featureCatalog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__("babel-runtime/core-js/get-iterator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_log__ = __webpack_require__("./src/common/log.js");












var combine = function combine(features, extractor) {
  return Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["without"])(__WEBPACK_IMPORTED_MODULE_7_lodash__["union"].apply(undefined, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray___default()(Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["map"])(features, function (res) {
    return Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["castArray"])(extractor(res));
  }))), undefined);
};

var featureCatalog = {};

var _default = function () {
  /* eslint-disable no-unused-vars */
  function _default(_ref) {
    for (var _len = arguments.length, features = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      features[_key - 1] = arguments[_key];
    }

    var route = _ref.route,
        navItem = _ref.navItem,
        navItemRight = _ref.navItemRight,
        reducer = _ref.reducer,
        middleware = _ref.middleware,
        afterware = _ref.afterware,
        connectionParam = _ref.connectionParam,
        createFetchOptions = _ref.createFetchOptions,
        stylesInsert = _ref.stylesInsert,
        scriptsInsert = _ref.scriptsInsert,
        rootComponentFactory = _ref.rootComponentFactory,
        catalogInfo = _ref.catalogInfo;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, _default);

    /* eslint-enable no-unused-vars */
    combine(arguments, function (arg) {
      return arg.catalogInfo;
    }).forEach(function (info) {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(info).forEach(function (key) {
        return featureCatalog[key] = info[key];
      });
    });
    this.route = combine(arguments, function (arg) {
      return arg.route;
    });
    // this.navItem = combine(arguments, arg => arg.navItem);
    // this.navItemRight = combine(arguments, arg => arg.navItemRight);
    this.reducer = combine(arguments, function (arg) {
      return arg.reducer;
    });
    this.middleware = combine(arguments, function (arg) {
      return arg.middleware;
    });
    this.afterware = combine(arguments, function (arg) {
      return arg.afterware;
    });
    this.connectionParam = combine(arguments, function (arg) {
      return arg.connectionParam;
    });
    this.createFetchOptions = combine(arguments, function (arg) {
      return arg.createFetchOptions;
    });
    this.stylesInsert = combine(arguments, function (arg) {
      return arg.stylesInsert;
    });
    this.scriptsInsert = combine(arguments, function (arg) {
      return arg.scriptsInsert;
    });
    this.rootComponentFactory = combine(arguments, function (arg) {
      return arg.rootComponentFactory;
    });
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(_default, [{
    key: 'getWrappedRoot',
    value: function getWrappedRoot(root, req) {
      var nestedRoot = root;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.rootComponentFactory), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var componentFactory = _step.value;

          nestedRoot = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(componentFactory(req), {}, nestedRoot);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return nestedRoot;
    }
  }, {
    key: 'routes',
    get: function get() {
      var _this = this;

      return this.route.map(function (component, idx) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(component, { key: idx + _this.route.length });
      });
    }

    // get navItems() {
    //   return this.navItem.map((component, idx) =>
    //     React.cloneElement(component, {
    //       key: component.key ? component.key : idx + this.navItem.length
    //     })
    //   );
    // }
    //
    // get navItemsRight() {
    //   return this.navItemRight.map((component, idx) =>
    //     React.cloneElement(component, {
    //       key: component.key ? component.key : idx + this.navItem.length
    //     })
    //   );
    // }

  }, {
    key: 'reducers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_7_lodash__["merge"].apply(undefined, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray___default()(this.reducer));
    }
  }, {
    key: 'middlewares',
    get: function get() {
      return this.middleware;
    }
  }, {
    key: 'afterwares',
    get: function get() {
      return this.afterware;
    }
  }, {
    key: 'connectionParams',
    get: function get() {
      return this.connectionParam;
    }
  }, {
    key: 'constructFetchOptions',
    get: function get() {
      var _this2 = this;

      return this.createFetchOptions.length ? function () {
        try {
          var result = {};
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(_this2.createFetchOptions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var func = _step2.value;

              result = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, result, func.apply(undefined, arguments));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return result;
        } catch (e) {
          __WEBPACK_IMPORTED_MODULE_8__common_log__["a" /* default */].error(e.stack);
        }
      } : null;
    }
  }, {
    key: 'stylesInserts',
    get: function get() {
      return this.stylesInsert;
    }
  }, {
    key: 'scriptsInserts',
    get: function get() {
      return this.scriptsInsert;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./src/client/modules/favicon/assets recursive ./!./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./ .*":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-192x192.png": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/android-chrome-192x192.png",
	"./android-chrome-256x256.png": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/android-chrome-256x256.png",
	"./apple-touch-icon.png": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/apple-touch-icon.png",
	"./browserconfig.xml": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/browserconfig.xml",
	"./favicon-16x16.png": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/favicon-16x16.png",
	"./favicon-32x32.png": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/favicon-32x32.png",
	"./favicon.ico": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/favicon.ico",
	"./manifest.json": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/manifest.json",
	"./mstile-150x150.png": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/mstile-150x150.png",
	"./safari-pinned-tab.svg": "./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./src/client/modules/favicon/assets/safari-pinned-tab.svg"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/client/modules/favicon/assets recursive ./!./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./ .*";

/***/ }),

/***/ "./src/client/modules/favicon/index.web.js":
/***/ (function(module, exports, __webpack_require__) {

// Favicon.ico should not be hashed, since some browsers expect it to be exactly on /favicon.ico URL
__webpack_require__("./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/client/modules/favicon/assets/favicon.ico"); // eslint-disable-line import/no-webpack-loader-syntax

// Require all files from assets dir recursively addding them into assets.json
var req = __webpack_require__("./src/client/modules/favicon/assets recursive ./!./node_modules/file-loader/dist/cjs.js?name=[hash].[ext]!./ .*");
req.keys().map(req);

/***/ }),

/***/ "./src/client/modules/home/containers/chart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__ = __webpack_require__("react-chartjs-2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_chartjs_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);









var doughnut = {
  labels: ['Good', 'Bad'],
  datasets: [{
    data: [300, 150],
    backgroundColor: ['#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#36A2EB', '#FFCE56']
  }]
};

var ChartsHome = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ChartsHome, _Component);

  function ChartsHome() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ChartsHome);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChartsHome.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ChartsHome)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ChartsHome, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardHeader"],
                null,
                'Overall investment rating'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: 'card-body' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'div',
                  { className: 'chart-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Doughnut"], { data: doughnut })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: 'card-body' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'ul',
                  { className: 'horizontal-bars type-2' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Technology'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '43%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'info', value: '43' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Team'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'warning', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Marketing'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'India', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Product'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'danger', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Financials'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'info', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Community'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'success', value: '37' })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ChartsHome;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/home/containers/coin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__ = __webpack_require__("./src/client/modules/Widgets/Widget02.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css__ = __webpack_require__("./src/client/modules/home/containers/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companyData__ = __webpack_require__("./src/client/modules/home/containers/companyData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);











var Coin = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Coin, _Component);

  function Coin() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Coin);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Coin.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Coin)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Coin, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'col-3 scrollit' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Bitcoin', mainText: 'Income', icon: 'fa fa-cogs', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Litecoin', mainText: 'Income', icon: 'fa fa-laptop', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Etherium', mainText: 'Income', icon: 'fa fa-moon-o', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Ripple', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Dash', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        )
      );
    }
  }]);

  return Coin;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/home/containers/companyData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCompanyData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_js__ = __webpack_require__("./src/client/modules/home/containers/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Widgets_Widget01__ = __webpack_require__("./src/client/modules/Widgets/Widget01.js");










var MainCompanyData = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MainCompanyData, _Component);

  function MainCompanyData() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MainCompanyData);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MainCompanyData.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MainCompanyData)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MainCompanyData, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__chart_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: '12', sm: '12', lg: '12' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Widgets_Widget01__["a" /* default */], {
              color: 'primary',
              variant: 'inverse',
              header: 'Company phase',
              mainText: '2 phase',
              smallText: 'benchmark between same phases'
            })
          )
        )
      );
    }
  }]);

  return MainCompanyData;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/home/containers/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css__ = __webpack_require__("./src/client/modules/home/containers/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companyData__ = __webpack_require__("./src/client/modules/home/containers/companyData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coin__ = __webpack_require__("./src/client/modules/home/containers/coin.js");








// import Widget02 from '../Widgets/Widget02'




var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__coin__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: 'col-8 fixed' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'div',
              { className: 'sticky-top', style: { marginTop: 0 } },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__companyData__["a" /* default */], null)
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/home/containers/styles.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/home/containers/styles.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/home/containers/styles.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/home/containers/styles.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/client/modules/home/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_home__ = __webpack_require__("./src/client/modules/home/containers/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");


// import { MenuItem } from '../../modules/common/components/web';


// import PostEdit from './containers/PostEdit';
//
// import reducers from './reducers';



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_3__connector__["a" /* default */]({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/home', component: __WEBPACK_IMPORTED_MODULE_2__containers_home__["a" /* default */] })
}));

/***/ }),

/***/ "./src/client/modules/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__("./src/client/modules/home/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicon__ = __webpack_require__("./src/client/modules/favicon/index.web.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");
// import counter from './counter';
// import post from './post';
// import upload from './upload';
// import user from './user';
// import subscription from './subscription';
// import contact from './contact';

// import pageNotFound from './pageNotFound';




// export default new Feature(counter, home, post, upload, user, subscription, contact, pageNotFound);
/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_2__connector__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */]));

/***/ }),

/***/ "./src/common/FieldError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);




var FieldError = function () {
  function FieldError() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FieldError);

    this.errors = {};
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FieldError, [{
    key: "hasAny",
    value: function hasAny() {
      return !!__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.errors).length;
    }
  }, {
    key: "setError",
    value: function setError(field, message) {
      this.errors[field] = message;
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.errors).map(function (field) {
        return {
          field: field,
          message: _this.errors[field]
        };
      });
    }
  }, {
    key: "throwIf",
    value: function throwIf() {
      if (this.hasAny()) {
        throw this.getErrors();
      }
    }
  }]);

  return FieldError;
}();



/***/ }),

/***/ "./src/common/createApolloClient.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_client__);



var createApolloClient = function createApolloClient(clientParams) {
  var params = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, clientParams);
  if (true) {
    if (false) {
      if (window.__APOLLO_STATE__) {
        params.initialState = window.__APOLLO_STATE__;
      }
      params.ssrForceFetchDelay = 100;
    } else {
      params.ssrMode = true;
    }
  }
  return new __WEBPACK_IMPORTED_MODULE_1_apollo_client___default.a(params);
};

/* harmony default export */ __webpack_exports__["a"] = (createApolloClient);

/***/ }),

/***/ "./src/common/createReduxStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export storeReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__("react-router-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly__ = __webpack_require__("redux-devtools-extension/developmentOnly");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_modules__ = __webpack_require__("./src/client/modules/index.js");








var storeReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  router: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"],
  form: __WEBPACK_IMPORTED_MODULE_3_redux_form__["reducer"]
}, __WEBPACK_IMPORTED_MODULE_5__client_modules__["default"].reducers));

var createReduxStore = function createReduxStore(initialState, client, routerMiddleware) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(storeReducer, initialState, // initial state
  routerMiddleware ? Object(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(routerMiddleware)) : undefined);
};

/* harmony default export */ __webpack_exports__["a"] = (createReduxStore);

/***/ }),

/***/ "./src/common/log.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_minilog__ = __webpack_require__("minilog");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_minilog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_minilog__);


__WEBPACK_IMPORTED_MODULE_0_minilog___default.a.enable();

var log = typeof window !== 'undefined' ? __WEBPACK_IMPORTED_MODULE_0_minilog___default()('frontend') : __WEBPACK_IMPORTED_MODULE_0_minilog___default()('backend');

if (true) {
  var console_log = global.console.log;
  global.console.log = function () {
    if (arguments.length == 1 && typeof arguments[0] === 'string' && arguments[0].match(/^\[(HMR|WDS)\]/)) {
      console_log('backend ' + arguments[0]);
    } else {
      console_log.apply(global.console, arguments);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (log);

/***/ }),

/***/ "./src/server/api/pubsub.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_logger__ = __webpack_require__("apollo-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_subscriptions__ = __webpack_require__("graphql-subscriptions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_subscriptions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_subscriptions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");





var pubsub = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].app.logging.apolloLogging ? Object(__WEBPACK_IMPORTED_MODULE_0_apollo_logger__["addApolloLogging"])(new __WEBPACK_IMPORTED_MODULE_1_graphql_subscriptions__["PubSub"]()) : new __WEBPACK_IMPORTED_MODULE_1_graphql_subscriptions__["PubSub"]();

/* harmony default export */ __webpack_exports__["a"] = (pubsub);

/***/ }),

/***/ "./src/server/api/rootSchema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"FieldError"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"field"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dummy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dummy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Subscription"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"dummy"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"SchemaDefinition","directives":[],"operationTypes":[{"kind":"OperationTypeDefinition","operation":"query","type":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}}},{"kind":"OperationTypeDefinition","operation":"mutation","type":{"kind":"NamedType","name":{"kind":"Name","value":"Mutation"}}},{"kind":"OperationTypeDefinition","operation":"subscription","type":{"kind":"NamedType","name":{"kind":"Name","value":"Subscription"}}}]}],"loc":{"start":0,"end":230}};
    doc.loc.source = {"body":"type FieldError {\n  field: String!\n  message: String!\n}\n\ntype Query {\n  dummy: Int\n}\n\ntype Mutation {\n  dummy: Int\n}\n\ntype Subscription {\n  dummy: Int\n}\n\nschema {\n  query: Query\n  mutation: Mutation\n  subscription: Subscription\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/api/schema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__("graphql-tools");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rootSchema_graphql__ = __webpack_require__("./src/server/api/rootSchema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rootSchema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rootSchema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__("./src/server/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pubsub__ = __webpack_require__("./src/server/api/pubsub.js");






var executableSchema = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({
  typeDefs: [__WEBPACK_IMPORTED_MODULE_1__rootSchema_graphql___default.a].concat(__WEBPACK_IMPORTED_MODULE_2__modules__["a" /* default */].schemas),
  resolvers: __WEBPACK_IMPORTED_MODULE_2__modules__["a" /* default */].createResolvers(__WEBPACK_IMPORTED_MODULE_3__pubsub__["a" /* default */])
});

/* harmony default export */ __webpack_exports__["a"] = (executableSchema);

/***/ }),

/***/ "./src/server/api/subscriptions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_subscriptions_transport_ws__ = __webpack_require__("subscriptions-transport-ws");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_subscriptions_transport_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_subscriptions_transport_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql__ = __webpack_require__("graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema__ = __webpack_require__("./src/server/api/schema.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_log__ = __webpack_require__("./src/common/log.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__server_modules__ = __webpack_require__("./src/server/modules/index.js");



var _this = this;








var subscriptionServer = void 0;

var addSubscriptions = function addSubscriptions(httpServer) {
  subscriptionServer = __WEBPACK_IMPORTED_MODULE_2_subscriptions_transport_ws__["SubscriptionServer"].create({
    schema: __WEBPACK_IMPORTED_MODULE_4__schema__["a" /* default */],
    execute: __WEBPACK_IMPORTED_MODULE_3_graphql__["execute"],
    subscribe: __WEBPACK_IMPORTED_MODULE_3_graphql__["subscribe"],
    onConnect: function onConnect(connectionParams, webSocket) {
      return __WEBPACK_IMPORTED_MODULE_6__server_modules__["a" /* default */].createContext(null, connectionParams, webSocket);
    },
    onOperation: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(message, params, webSocket) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_6__server_modules__["a" /* default */].createContext(null, message.payload, webSocket);

              case 2:
                params.context = _context.sent;
                return _context.abrupt('return', params);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function onOperation(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }, {
    server: httpServer,
    path: '/graphql'
  });
};

var addGraphQLSubscriptions = function addGraphQLSubscriptions(httpServer) {
  if (module.hot && module.hot.data) {
    var prevServer = module.hot.data.subscriptionServer;
    if (prevServer && prevServer.wsServer) {
      __WEBPACK_IMPORTED_MODULE_5__common_log__["a" /* default */].debug('Reloading the subscription server.');
      prevServer.wsServer.close(function () {
        addSubscriptions(httpServer);
      });
    }
  } else {
    addSubscriptions(httpServer);
  }
};

if (true) {
  module.hot.dispose(function (data) {
    try {
      data.subscriptionServer = subscriptionServer;
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_5__common_log__["a" /* default */])(error.stack);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (addGraphQLSubscriptions);

/***/ }),

/***/ "./src/server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_log__ = __webpack_require__("./src/common/log.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./src/server/server.js");



process.on('uncaughtException', function (ex) {
  __WEBPACK_IMPORTED_MODULE_0__common_log__["a" /* default */].error(ex);
  process.exit(1);
});

process.on('unhandledRejection', function (reason) {
  __WEBPACK_IMPORTED_MODULE_0__common_log__["a" /* default */].error(reason);
});

if (true) {
  module.hot.status(function (event) {
    if (event === 'abort' || event === 'fail') {
      Object(__WEBPACK_IMPORTED_MODULE_0__common_log__["a" /* default */])('HMR error status: ' + event);
      // Signal webpack.run.js to do full-reload of the back-end
      process.exit(250);
    }
  });

  module.hot.accept();
}

/***/ }),

/***/ "./src/server/middleware/error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_names__ = __webpack_require__("babel-runtime/core-js/object/get-own-property-names");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_names___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_names__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_log__ = __webpack_require__("./src/common/log.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spinrc_json__ = __webpack_require__("./.spinrc.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spinrc_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__spinrc_json__);









var assetMap = void 0;

var stripCircular = function stripCircular(from, seen) {
  var to = Array.isArray(from) ? [] : {};
  seen = seen || [];
  seen.push(from);
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_names___default()(from).forEach(function (key) {
    if (!from[key] || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(from[key]) !== 'object' && !Array.isArray(from[key])) {
      to[key] = from[key];
    } else if (seen.indexOf(from[key]) < 0) {
      to[key] = stripCircular(from[key], seen.slice(0));
    } else to[key] = '[Circular]';
  });
  return to;
};

var _url$parse = __WEBPACK_IMPORTED_MODULE_5_url___default.a.parse("http://localhost:8080/graphql"),
    pathname = _url$parse.pathname;

/*
 * The code below MUST be declared as a function, not closure,
 * otherwise Express will fail to execute this handler
 */
// eslint-disable-next-line no-unused-vars


function errorMiddleware(e, req, res, next) {
  if (req.path === pathname) {
    var stack = e.stack.toString().replace(/[\n]/g, '\\n');
    res.status(200).send('[{"data": {}, "errors":[{"message": "' + stack + '"}]}]');
  } else {
    __WEBPACK_IMPORTED_MODULE_6__common_log__["a" /* default */].error(e);

    if (true) {
      assetMap = JSON.parse(__WEBPACK_IMPORTED_MODULE_4_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_3_path___default.a.join(__WEBPACK_IMPORTED_MODULE_7__spinrc_json__["options"].frontendBuildDir, 'web', 'assets.json')));
    }

    var serverErrorScript = '<script charset="UTF-8">window.__SERVER_ERROR__=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(stripCircular(e)) + ';</script>';
    var vendorScript = assetMap['vendor.js'] ? '<script src="/' + assetMap['vendor.js'] + '" charSet="utf-8"></script>' : '';

    res.status(200).send('<html>' + serverErrorScript + '<body><div id="content"></div>\n      ' + vendorScript + '\n          <script src="/' + assetMap['index.js'] + '" charSet="utf-8"></script>\n          </body></html>');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (errorMiddleware);

/***/ }),

/***/ "./src/server/middleware/graphiql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express__ = __webpack_require__("apollo-server-express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url__);



var _url$parse = __WEBPACK_IMPORTED_MODULE_1_url___default.a.parse("http://localhost:8080/graphql"),
    protocol = _url$parse.protocol,
    hostname = _url$parse.hostname,
    pathname = _url$parse.pathname,
    port = _url$parse.port;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_server_express__["graphiqlExpress"])(function (req) {
  var subscriptionsUrl = (hostname === 'localhost' ? protocol + '//' + __WEBPACK_IMPORTED_MODULE_1_url___default.a.parse(req.get('Referer') || protocol + '//' + hostname).hostname + ':' + port + pathname : "http://localhost:8080/graphql").replace(/^http/, 'ws');

  return {
    endpointURL: '/graphql',
    subscriptionsEndpoint: subscriptionsUrl,
    query: '{\n' + '  counter {\n' + '    amount\n' + '  }\n' + '}'
  };
}));

/***/ }),

/***/ "./src/server/middleware/graphql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express__ = __webpack_require__("apollo-server-express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_schema__ = __webpack_require__("./src/server/api/schema.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules__ = __webpack_require__("./src/server/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("./settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_log__ = __webpack_require__("./src/common/log.js");



var _this = this;









/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
    var context;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_5__modules__["a" /* default */].createContext(req, res);

          case 3:
            context = _context.sent;


            Object(__WEBPACK_IMPORTED_MODULE_2_apollo_server_express__["graphqlExpress"])(function () {
              return {
                schema: __WEBPACK_IMPORTED_MODULE_4__api_schema__["a" /* default */],
                context: context,
                debug: false,
                formatError: function formatError(error) {
                  __WEBPACK_IMPORTED_MODULE_7__common_log__["a" /* default */].error('GraphQL execution error:', error);
                  return error;
                },
                tracing: !!__WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].engine.engineConfig.apiKey,
                cacheControl: !!__WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].engine.engineConfig.apiKey
              };
            })(req, res, next);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            next(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/server/middleware/html.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript__ = __webpack_require__("serialize-javascript");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_modules__ = __webpack_require__("./src/client/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");







var Html = function Html(_ref) {
  var content = _ref.content,
      state = _ref.state,
      assetMap = _ref.assetMap,
      css = _ref.css,
      helmet = _ref.helmet,
      token = _ref.token,
      refreshToken = _ref.refreshToken;

  var htmlAttrs = helmet.htmlAttributes.toComponent(); // react-helmet html document tags
  var bodyAttrs = helmet.bodyAttributes.toComponent(); // react-helmet body document tags

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'html',
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ lang: 'en' }, htmlAttrs),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/' + assetMap['apple-touch-icon.png'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: '/' + assetMap['favicon-32x32.png'], sizes: '32x32' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: '/' + assetMap['favicon-16x16.png'], sizes: '16x16' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'manifest', href: '/' + assetMap['manifest.json'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'mask-icon', href: '/' + assetMap['safari-pinned-tab.svg'], color: '#5bbad5' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: '/' + assetMap['favicon.ico'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'msapplication-config', content: '/' + assetMap['browserconfig.xml'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#ffffff' }),
      !true && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/' + assetMap['index.css'] }),
      !!true && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__["a" /* styles */]._getCss() + __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].stylesInserts.map(function (style) {
            return style._getCss();
          }).join('')
        }
      }),
      !!css && css,
      __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].scriptsInserts.map(function (script, i) {
        if (script) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { key: i, src: script });
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'body',
      bodyAttrs,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: content || '' } }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: 'window.__APOLLO_STATE__=' + __WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default()(state, {
            isJSON: true
          }) + ';window.localStorage.setItem(\'token\',\'' + token + '\');window.localStorage.setItem(\'refreshToken\',\'' + refreshToken + '\');'
        },
        charSet: 'UTF-8'
      }),
      assetMap['vendor.js'] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/' + assetMap['vendor.js'], charSet: 'utf-8' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/' + assetMap['index.js'], charSet: 'utf-8' })
    )
  );
};

Html.propTypes = {
  content: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  state: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  assetMap: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  css: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  helmet: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  token: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  refreshToken: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),

/***/ "./src/server/middleware/website.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_fetch__ = __webpack_require__("apollo-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_apollo_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http__ = __webpack_require__("apollo-link-batch-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_logger__ = __webpack_require__("apollo-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_apollo_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_native__ = __webpack_require__("react-native");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react_native__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_createApolloClient__ = __webpack_require__("./src/common/createApolloClient.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_createReduxStore__ = __webpack_require__("./src/common/createReduxStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__html__ = __webpack_require__("./src/server/middleware/html.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__client_app_Routes__ = __webpack_require__("./src/client/app/Routes.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules__ = __webpack_require__("./src/server/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__spinrc_json__ = __webpack_require__("./.spinrc.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__spinrc_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__spinrc_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__settings__ = __webpack_require__("./settings.js");




var _this = this;












// import { addPersistedQueries } from 'persistgraphql';














var assetMap = void 0;

var _url$parse = __WEBPACK_IMPORTED_MODULE_17_url___default.a.parse("http://localhost:8080/graphql"),
    protocol = _url$parse.protocol,
    hostname = _url$parse.hostname,
    port = _url$parse.port,
    pathname = _url$parse.pathname;

var apiUrl = protocol + '//' + hostname + ':' + (process.env.PORT || port) + pathname;

var renderServerSide = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var fetch, cache, link, client, initialState, store, context, clientModules, App, _AppRegistry$getAppli, element, stylesheets, sheet, html, css, helmet, apolloState, token, refreshToken, page;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // if (__PERSIST_GQL__) {
            //   networkInterface = addPersistedQueries(networkInterface, queryMap);
            // }
            //

            fetch = Object(__WEBPACK_IMPORTED_MODULE_5_apollo_fetch__["createApolloFetch"])({ uri: apiUrl, constructOptions: __WEBPACK_IMPORTED_MODULE_23__modules__["a" /* default */].constructFetchOptions });

            fetch.batchUse(function (_ref2, next) {
              var options = _ref2.options;

              options.credentials = 'include';
              options.headers = req.headers;

              next();
            });
            cache = new __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__["InMemoryCache"]();
            link = new __WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http__["BatchHttpLink"]({ fetch: fetch });
            client = Object(__WEBPACK_IMPORTED_MODULE_19__common_createApolloClient__["a" /* default */])({
              link: __WEBPACK_IMPORTED_MODULE_6_apollo_link__["ApolloLink"].from((__WEBPACK_IMPORTED_MODULE_25__settings__["a" /* default */].app.logging.apolloLogging ? [new __WEBPACK_IMPORTED_MODULE_13_apollo_logger__["LoggingLink"]()] : []).concat([link])),
              cache: cache
            });
            initialState = {};
            store = Object(__WEBPACK_IMPORTED_MODULE_20__common_createReduxStore__["a" /* default */])(initialState, client);
            context = {};
            clientModules = __webpack_require__("./src/client/modules/index.js").default;

            App = function App() {
              return clientModules.getWrappedRoot(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_10_react_redux__["Provider"],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_apollo__["ApolloProvider"],
                  { client: client },
                  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_11_react_router__["StaticRouter"],
                    { location: req.url, context: context },
                    __WEBPACK_IMPORTED_MODULE_22__client_app_Routes__["a" /* default */]
                  )
                )
              ), req);
            };

            __WEBPACK_IMPORTED_MODULE_18_react_native__["AppRegistry"].registerComponent('App', function () {
              return App;
            });
            _AppRegistry$getAppli = __WEBPACK_IMPORTED_MODULE_18_react_native__["AppRegistry"].getApplication('App', {}), element = _AppRegistry$getAppli.element, stylesheets = _AppRegistry$getAppli.stylesheets;
            _context.next = 14;
            return Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["getDataFromTree"])(element);

          case 14:

            if (context.pageNotFound === true) {
              res.status(404);
            } else {
              res.status(200);
            }

            sheet = new __WEBPACK_IMPORTED_MODULE_12_styled_components__["ServerStyleSheet"]();
            html = __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToString(sheet.collectStyles(element));
            css = sheet.getStyleElement().concat(stylesheets).map(function (el, idx) {
              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(el, { key: idx });
            });
            helmet = __WEBPACK_IMPORTED_MODULE_16_react_helmet___default.a.renderStatic(); // Avoid memory leak while tracking mounted instances

            if (context.url) {
              res.writeHead(301, { Location: context.url });
              res.end();
            } else {
              if (true) {
                assetMap = JSON.parse(__WEBPACK_IMPORTED_MODULE_14_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_15_path___default.a.join(__WEBPACK_IMPORTED_MODULE_24__spinrc_json__["options"].frontendBuildDir, 'web', 'assets.json')));
              }

              apolloState = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, cache.extract());
              token = req.universalCookies.get('x-token') ? req.universalCookies.get('x-token') : null;
              refreshToken = req.universalCookies.get('x-refresh-token') ? req.universalCookies.get('x-refresh-token') : null;
              page = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__html__["a" /* default */], {
                content: html,
                state: apolloState,
                assetMap: assetMap,
                css: css,
                helmet: helmet,
                token: token,
                refreshToken: refreshToken
              });

              res.send('<!doctype html>\n' + __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToStaticMarkup(page));
              res.end();
            }

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function renderServerSide(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (function (queryMap) {
  return function () {
    var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(req, res, next) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!(req.url.indexOf('.') < 0 && true)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return renderServerSide(req, res, queryMap);

            case 4:
              return _context2.abrupt('return', _context2.sent);

            case 7:
              next();

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);

              next(_context2.t0);

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[0, 10]]);
    }));

    return function (_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
});

/***/ }),

/***/ "./src/server/modules/apolloEngine/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_engine__ = __webpack_require__("apollo-engine");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__("./src/server/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__("./settings.js");







var engine = void 0;

if (__WEBPACK_IMPORTED_MODULE_4__settings__["a" /* default */].engine.engineConfig.apiKey) {
  var _url$parse = __WEBPACK_IMPORTED_MODULE_2_url___default.a.parse("http://localhost:8080/graphql"),
      protocol = _url$parse.protocol,
      hostname = _url$parse.hostname,
      port = _url$parse.port,
      pathname = _url$parse.pathname;

  var apiUrl = protocol + '//' + hostname + ':' + (process.env.PORT || port) + pathname;
  var serverPort = process.env.PORT || port;

  engine = new __WEBPACK_IMPORTED_MODULE_1_apollo_engine__["Engine"](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_4__settings__["a" /* default */].engine, {
    origins: [{
      backend: {
        url: apiUrl,
        supportsBatch: true
      }
    }],
    graphqlPort: serverPort, // GraphQL port
    endpoint: pathname // GraphQL endpoint suffix - '/graphql' by default
  }));

  engine.start();
}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_3__connector__["a" /* default */]({
  beforeware: function beforeware(app) {
    if (__WEBPACK_IMPORTED_MODULE_4__settings__["a" /* default */].engine.engineConfig.apiKey) {
      app.use(engine.expressMiddleware());
    }
  }
}));

/***/ }),

/***/ "./src/server/modules/connector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export featureCatalog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__("babel-runtime/core-js/get-iterator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_log__ = __webpack_require__("./src/common/log.js");










/* eslint-disable no-unused-vars */




var featureCatalog = {};

var combine = function combine(features, extractor) {
  return Object(__WEBPACK_IMPORTED_MODULE_9_lodash__["without"])(__WEBPACK_IMPORTED_MODULE_9_lodash__["union"].apply(undefined, __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_toConsumableArray___default()(Object(__WEBPACK_IMPORTED_MODULE_9_lodash__["map"])(features, function (res) {
    return Object(__WEBPACK_IMPORTED_MODULE_9_lodash__["castArray"])(extractor(res));
  }))), undefined);
};

var Feature = function () {
  function Feature(feature) {
    for (var _len = arguments.length, features = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      features[_key - 1] = arguments[_key];
    }

    __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_classCallCheck___default()(this, Feature);

    // console.log(feature.schema[0] instanceof DocumentNode);
    combine(arguments, function (arg) {
      return arg.catalogInfo;
    }).forEach(function (info) {
      return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(info).forEach(function (key) {
        return featureCatalog[key] = info[key];
      });
    });
    this.schema = combine(arguments, function (arg) {
      return arg.schema;
    });
    this.createResolversFunc = combine(arguments, function (arg) {
      return arg.createResolversFunc;
    });
    this.createContextFunc = combine(arguments, function (arg) {
      return arg.createContextFunc;
    });
    this.beforeware = combine(arguments, function (arg) {
      return arg.beforeware;
    });
    this.middleware = combine(arguments, function (arg) {
      return arg.middleware;
    });
    this.createFetchOptions = combine(arguments, function (arg) {
      return arg.createFetchOptions;
    });
  }

  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_createClass___default()(Feature, [{
    key: 'createContext',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee(req, connectionParams, webSocket) {
        var results;
        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.all(this.createContextFunc.map(function (createContext) {
                  return createContext(req, connectionParams, webSocket);
                }));

              case 2:
                results = _context.sent;
                return _context.abrupt('return', __WEBPACK_IMPORTED_MODULE_9_lodash__["merge"].apply(undefined, [{}].concat(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_toConsumableArray___default()(results))));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createContext(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createContext;
    }()
  }, {
    key: 'createResolvers',
    value: function createResolvers(pubsub) {
      return __WEBPACK_IMPORTED_MODULE_9_lodash__["merge"].apply(undefined, [{}].concat(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_toConsumableArray___default()(this.createResolversFunc.map(function (createResolvers) {
        return createResolvers(pubsub);
      }))));
    }
  }, {
    key: 'schemas',
    get: function get() {
      return this.schema;
    }
  }, {
    key: 'beforewares',
    get: function get() {
      return this.beforeware;
    }
  }, {
    key: 'middlewares',
    get: function get() {
      return this.middleware;
    }
  }, {
    key: 'constructFetchOptions',
    get: function get() {
      var _this = this;

      return this.createFetchOptions.length ? function () {
        try {
          var result = {};
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(_this.createFetchOptions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var func = _step.value;

              result = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, result, func.apply(undefined, arguments));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return result;
        } catch (e) {
          __WEBPACK_IMPORTED_MODULE_10__common_log__["a" /* default */].error(e.stack);
        }
      } : null;
    }
  }]);

  return Feature;
}();

/* harmony default export */ __webpack_exports__["a"] = (Feature);

/***/ }),

/***/ "./src/server/modules/contact/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schema_graphql__ = __webpack_require__("./src/server/modules/contact/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__schema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers__ = __webpack_require__("./src/server/modules/contact/resolvers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connector__ = __webpack_require__("./src/server/modules/connector.js");
// Components




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_2__connector__["a" /* default */]({ schema: __WEBPACK_IMPORTED_MODULE_0__schema_graphql___default.a, createResolversFunc: __WEBPACK_IMPORTED_MODULE_1__resolvers__["a" /* default */] }));

/***/ }),

/***/ "./src/server/modules/contact/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


/*eslint-disable no-unused-vars*/
/* harmony default export */ __webpack_exports__["a"] = (function (pubsub) {
  return {
    Mutation: {
      contact: function contact(obj, _ref, context) {
        var _this = this;

        var input = _ref.input;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  if (context.mailer) {
                    context.mailer.sendMail({
                      from: input.email,
                      to: process.env.EMAIL_USER,
                      subject: 'New email through contact us page',
                      html: '<p>' + input.name + ' is sending the following message.</p><p>' + input.content + '</p>'
                    });
                  }
                  return _context.abrupt('return', true);

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', true);

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 5]]);
        }))();
      }
    }
  };
});

/***/ }),

/***/ "./src/server/modules/contact/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"contact"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ContactInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]}]}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"ContactInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"content"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]}],"loc":{"start":0,"end":197}};
    doc.loc.source = {"body":"extend type Mutation {\n  # Send contact us info\n  contact(input: ContactInput!): Boolean!\n}\n\n# Input for addPost Mutation\ninput ContactInput {\n  name: String!\n  email: String!\n  content: String!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/modules/counter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sql__ = __webpack_require__("./src/server/modules/counter/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema_graphql__ = __webpack_require__("./src/server/modules/counter/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__schema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolvers__ = __webpack_require__("./src/server/modules/counter/resolvers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__("./src/server/modules/connector.js");






/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_3__connector__["a" /* default */]({
  schema: __WEBPACK_IMPORTED_MODULE_1__schema_graphql___default.a,
  createResolversFunc: __WEBPACK_IMPORTED_MODULE_2__resolvers__["a" /* default */],
  createContextFunc: function createContextFunc() {
    return { Counter: new __WEBPACK_IMPORTED_MODULE_0__sql__["a" /* default */]() };
  }
}));

/***/ }),

/***/ "./src/server/modules/counter/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


var COUNTER_SUBSCRIPTION = 'counter_subscription';

/* harmony default export */ __webpack_exports__["a"] = (function (pubsub) {
  return {
    Query: {
      counter: function counter(obj, args, context) {
        return context.Counter.counterQuery();
      }
    },
    Mutation: {
      addCounter: function addCounter(obj, _ref, context) {
        var _this = this;

        var amount = _ref.amount;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          var counter;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return context.Counter.addCounter(amount);

                case 2:
                  _context.next = 4;
                  return context.Counter.counterQuery();

                case 4:
                  counter = _context.sent;


                  pubsub.publish(COUNTER_SUBSCRIPTION, {
                    counterUpdated: { amount: counter.amount }
                  });

                  return _context.abrupt('return', counter);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      }
    },
    Subscription: {
      counterUpdated: {
        subscribe: function subscribe() {
          return pubsub.asyncIterator(COUNTER_SUBSCRIPTION);
        }
      }
    }
  };
});

/***/ }),

/***/ "./src/server/modules/counter/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Counter"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"amount"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}]},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"counter"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Counter"}},"directives":[]}]}},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"addCounter"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"amount"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Counter"}},"directives":[]}]}},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Subscription"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"counterUpdated"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Counter"}},"directives":[]}]}}],"loc":{"start":0,"end":393}};
    doc.loc.source = {"body":"# Database counter\ntype Counter {\n  # Current amount\n  amount: Int!\n}\n\nextend type Query {\n  # Counter\n  counter: Counter\n}\n\nextend type Mutation {\n  # Increase counter value, returns current counter amount\n  addCounter(\n    # Amount to add to counter\n    amount: Int!\n  ): Counter\n}\n\nextend type Subscription {\n  # Subscription fired when anyone increases counter\n  counterUpdated: Counter\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/modules/counter/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Counter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_sql_connector__ = __webpack_require__("./src/server/sql/connector.js");




var Counter = function () {
  function Counter() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Counter);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Counter, [{
    key: 'counterQuery',
    value: function counterQuery() {
      return Object(__WEBPACK_IMPORTED_MODULE_2__server_sql_connector__["a" /* default */])('counter').first();
    }
  }, {
    key: 'addCounter',
    value: function addCounter(amount) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__server_sql_connector__["a" /* default */])('counter').increment('amount', amount);
    }
  }]);

  return Counter;
}();



/***/ }),

/***/ "./src/server/modules/debug/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_performance_now__ = __webpack_require__("performance-now");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_performance_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_performance_now__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sql_connector__ = __webpack_require__("./src/server/sql/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_log__ = __webpack_require__("./src/common/log.js");







// The map used to store the query times, where the query unique
// identifier is the key.
var times = {};
// Used for keeping track of the order queries are executed.
var count = 0;

var printQueryWithTime = function printQueryWithTime(uid) {
  var _times$uid = times[uid],
      startTime = _times$uid.startTime,
      endTime = _times$uid.endTime,
      query = _times$uid.query;

  var elapsedTime = endTime - startTime;

  // I print the sql generated for a given query, as well as
  // the bindings for the queries.
  __WEBPACK_IMPORTED_MODULE_4__common_log__["a" /* default */].info(query.sql, ',', '[' + (query.bindings ? query.bindings.join(',') : '') + ']');
  __WEBPACK_IMPORTED_MODULE_4__common_log__["a" /* default */].info('Time: ' + elapsedTime.toFixed(3) + ' ms\n');

  // After I print out the query, I have no more use to it,
  // so I delete it from my map so it doesn't grow out of control.
  delete times[uid];
};

var printIfPossible = function printIfPossible(uid) {
  var position = times[uid].position;

  // Look of a query with a position one less than the current query

  var previousTimeUid = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(times).find(function (key) {
    return times[key].position === position - 1;
  });

  // If we didn't find it, it must have been printed already and we can safely print ourselves.
  if (!previousTimeUid) {
    printQueryWithTime(uid);
  }
};

var printQueriesAfterGivenPosition = function printQueriesAfterGivenPosition(position) {
  // Look for the next query in the queue
  var nextTimeUid = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(times).find(function (key) {
    return times[key].position === position + 1;
  });

  // If we find one and it is marked as finished, we can go ahead and print it
  if (nextTimeUid && times[nextTimeUid].finished) {
    var nextPosition = times[nextTimeUid].position;
    printQueryWithTime(nextTimeUid);

    // There might be more queries that need to printed, so we should keep looking...
    printQueriesAfterGivenPosition(nextPosition);
  }
};

if (true && __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].app.logging.debugSQL) {
  __WEBPACK_IMPORTED_MODULE_3__sql_connector__["a" /* default */].on('query', function (query) {
    var uid = query.__knexQueryUid;
    times[uid] = {
      position: count,
      query: query,
      startTime: __WEBPACK_IMPORTED_MODULE_1_performance_now___default()(),
      // I keep track of when a query is finished with a boolean instead of
      // presence of an end time. It makes the logic easier to read.
      finished: false
    };
    count = count + 1;
  }).on('query-response', function (response, query) {
    var uid = query.__knexQueryUid;
    times[uid].endTime = __WEBPACK_IMPORTED_MODULE_1_performance_now___default()();
    times[uid].finished = true;
    var position = times[uid].position;

    // Print the current query, if I'm able
    printIfPossible(uid);

    // Check to see if queries further down the queue can be executed,
    //in case they weren't able to be printed when they first responded.
    printQueriesAfterGivenPosition(position);
  });
}

/***/ }),

/***/ "./src/server/modules/graphqlTypes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schema_graphql__ = __webpack_require__("./src/server/modules/graphqlTypes/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__schema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers__ = __webpack_require__("./src/server/modules/graphqlTypes/resolvers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connector__ = __webpack_require__("./src/server/modules/connector.js");
// Components




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_2__connector__["a" /* default */]({ schema: __WEBPACK_IMPORTED_MODULE_0__schema_graphql___default.a, createResolversFunc: __WEBPACK_IMPORTED_MODULE_1__resolvers__["a" /* default */] }));

/***/ }),

/***/ "./src/server/modules/graphqlTypes/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_iso_date__ = __webpack_require__("graphql-iso-date");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_iso_date__);
/*eslint-disable no-unused-vars*/


/* harmony default export */ __webpack_exports__["a"] = (function (pubsub) {
  return {
    Date: __WEBPACK_IMPORTED_MODULE_0_graphql_iso_date__["GraphQLDate"],
    Time: __WEBPACK_IMPORTED_MODULE_0_graphql_iso_date__["GraphQLTime"],
    DateTime: __WEBPACK_IMPORTED_MODULE_0_graphql_iso_date__["GraphQLDateTime"]
  };
});

/***/ }),

/***/ "./src/server/modules/graphqlTypes/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"Date"},"directives":[]},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"Time"},"directives":[]},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime"},"directives":[]}],"loc":{"start":0,"end":40}};
    doc.loc.source = {"body":"scalar Date\nscalar Time\nscalar DateTime\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/modules/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counter__ = __webpack_require__("./src/server/modules/counter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("./src/server/modules/post/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__("./src/server/modules/upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("./src/server/modules/user/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscription__ = __webpack_require__("./src/server/modules/subscription/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact__ = __webpack_require__("./src/server/modules/contact/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mailer__ = __webpack_require__("./src/server/modules/mailer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphqlTypes__ = __webpack_require__("./src/server/modules/graphqlTypes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apolloEngine__ = __webpack_require__("./src/server/modules/apolloEngine/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__debug__ = __webpack_require__("./src/server/modules/debug/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__connector__ = __webpack_require__("./src/server/modules/connector.js");













/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_10__connector__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__counter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__user__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__subscription__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__contact__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mailer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__graphqlTypes__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__apolloEngine__["a" /* default */]));

/***/ }),

/***/ "./src/server/modules/mailer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mailer__ = __webpack_require__("./src/server/modules/mailer/mailer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connector__ = __webpack_require__("./src/server/modules/connector.js");



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1__connector__["a" /* default */]({
  createContextFunc: function createContextFunc() {
    return { mailer: __WEBPACK_IMPORTED_MODULE_0__mailer__["a" /* default */] };
  }
}));

/***/ }),

/***/ "./src/server/modules/mailer/mailer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nodemailer__ = __webpack_require__("nodemailer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nodemailer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nodemailer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("./settings.js");



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_nodemailer___default.a.createTransport(__WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].mailer));

/***/ }),

/***/ "./src/server/modules/post/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader__ = __webpack_require__("dataloader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dataloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dataloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sql__ = __webpack_require__("./src/server/modules/post/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_graphql__ = __webpack_require__("./src/server/modules/post/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resolvers__ = __webpack_require__("./src/server/modules/post/resolvers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/server/modules/connector.js");








/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector__["a" /* default */]({
  schema: __WEBPACK_IMPORTED_MODULE_2__schema_graphql___default.a,
  createResolversFunc: __WEBPACK_IMPORTED_MODULE_3__resolvers__["a" /* default */],
  createContextFunc: function createContextFunc() {
    var post = new __WEBPACK_IMPORTED_MODULE_1__sql__["a" /* default */]();

    return {
      Post: post,
      loaders: {
        getCommentsForPostIds: new __WEBPACK_IMPORTED_MODULE_0_dataloader___default.a(post.getCommentsForPostIds)
      }
    };
  }
}));

/***/ }),

/***/ "./src/server/modules/post/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_subscriptions__ = __webpack_require__("graphql-subscriptions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_graphql_subscriptions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_graphql_subscriptions__);






var POST_SUBSCRIPTION = 'post_subscription';
var POSTS_SUBSCRIPTION = 'posts_subscription';
var COMMENT_SUBSCRIPTION = 'comment_subscription';

/* harmony default export */ __webpack_exports__["a"] = (function (pubsub) {
  return {
    Query: {
      posts: function posts(obj, _ref, context) {
        var _this = this;

        var limit = _ref.limit,
            after = _ref.after;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
          var edgesArray, posts, endCursor, values;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  edgesArray = [];
                  _context.next = 3;
                  return context.Post.postsPagination(limit, after);

                case 3:
                  posts = _context.sent;


                  posts.map(function (post) {
                    edgesArray.push({
                      cursor: post.id,
                      node: {
                        id: post.id,
                        title: post.title,
                        content: post.content
                      }
                    });
                  });

                  endCursor = edgesArray.length > 0 ? edgesArray[edgesArray.length - 1].cursor : 0;
                  _context.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.all([context.Post.getTotal(), context.Post.getNextPageFlag(endCursor)]);

                case 8:
                  values = _context.sent;
                  return _context.abrupt('return', {
                    totalCount: values[0].count,
                    edges: edgesArray,
                    pageInfo: {
                      endCursor: endCursor,
                      hasNextPage: values[1].count > 0
                    }
                  });

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      post: function post(obj, _ref2, context) {
        var id = _ref2.id;

        return context.Post.post(id);
      }
    },
    Post: {
      comments: function comments(_ref3, args, context) {
        var id = _ref3.id;

        return context.loaders.getCommentsForPostIds.load(id);
      }
    },
    Mutation: {
      addPost: function addPost(obj, _ref4, context) {
        var _this2 = this;

        var input = _ref4.input;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var _ref5, _ref6, id, post;

          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return context.Post.addPost(input);

                case 2:
                  _ref5 = _context2.sent;
                  _ref6 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref5, 1);
                  id = _ref6[0];
                  _context2.next = 7;
                  return context.Post.post(id);

                case 7:
                  post = _context2.sent;

                  // publish for post list
                  pubsub.publish(POSTS_SUBSCRIPTION, {
                    postsUpdated: {
                      mutation: 'CREATED',
                      id: id,
                      node: post
                    }
                  });
                  return _context2.abrupt('return', post);

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }))();
      },
      deletePost: function deletePost(obj, _ref7, context) {
        var _this3 = this;

        var id = _ref7.id;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
          var post, isDeleted;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return context.Post.post(id);

                case 2:
                  post = _context3.sent;
                  _context3.next = 5;
                  return context.Post.deletePost(id);

                case 5:
                  isDeleted = _context3.sent;

                  if (!isDeleted) {
                    _context3.next = 11;
                    break;
                  }

                  // publish for post list
                  pubsub.publish(POSTS_SUBSCRIPTION, {
                    postsUpdated: {
                      mutation: 'DELETED',
                      id: id,
                      node: post
                    }
                  });
                  return _context3.abrupt('return', { id: post.id });

                case 11:
                  return _context3.abrupt('return', { id: null });

                case 12:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }))();
      },
      editPost: function editPost(obj, _ref8, context) {
        var _this4 = this;

        var input = _ref8.input;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
          var post;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return context.Post.editPost(input);

                case 2:
                  _context4.next = 4;
                  return context.Post.post(input.id);

                case 4:
                  post = _context4.sent;

                  // publish for post list
                  pubsub.publish(POSTS_SUBSCRIPTION, {
                    postsUpdated: {
                      mutation: 'UPDATED',
                      id: post.id,
                      node: post
                    }
                  });
                  // publish for edit post page
                  pubsub.publish(POST_SUBSCRIPTION, { postUpdated: post });
                  return _context4.abrupt('return', post);

                case 8:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4);
        }))();
      },
      addComment: function addComment(obj, _ref9, context) {
        var _this5 = this;

        var input = _ref9.input;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
          var _ref10, _ref11, id, comment;

          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return context.Post.addComment(input);

                case 2:
                  _ref10 = _context5.sent;
                  _ref11 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref10, 1);
                  id = _ref11[0];
                  _context5.next = 7;
                  return context.Post.getComment(id);

                case 7:
                  comment = _context5.sent;

                  // publish for edit post page
                  pubsub.publish(COMMENT_SUBSCRIPTION, {
                    commentUpdated: {
                      mutation: 'CREATED',
                      id: comment.id,
                      postId: input.postId,
                      node: comment
                    }
                  });
                  return _context5.abrupt('return', comment);

                case 10:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5);
        }))();
      },
      deleteComment: function deleteComment(obj, _ref12, context) {
        var _this6 = this;

        var _ref12$input = _ref12.input,
            id = _ref12$input.id,
            postId = _ref12$input.postId;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return context.Post.deleteComment(id);

                case 2:
                  // publish for edit post page
                  pubsub.publish(COMMENT_SUBSCRIPTION, {
                    commentUpdated: {
                      mutation: 'DELETED',
                      id: id,
                      postId: postId,
                      node: null
                    }
                  });
                  return _context6.abrupt('return', { id: id });

                case 4:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }))();
      },
      editComment: function editComment(obj, _ref13, context) {
        var _this7 = this;

        var input = _ref13.input;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
          var comment;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return context.Post.editComment(input);

                case 2:
                  _context7.next = 4;
                  return context.Post.getComment(input.id);

                case 4:
                  comment = _context7.sent;

                  // publish for edit post page
                  pubsub.publish(COMMENT_SUBSCRIPTION, {
                    commentUpdated: {
                      mutation: 'UPDATED',
                      id: input.id,
                      postId: input.postId,
                      node: comment
                    }
                  });
                  return _context7.abrupt('return', comment);

                case 7:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7);
        }))();
      }
    },
    Subscription: {
      postUpdated: {
        subscribe: Object(__WEBPACK_IMPORTED_MODULE_4_graphql_subscriptions__["withFilter"])(function () {
          return pubsub.asyncIterator(POST_SUBSCRIPTION);
        }, function (payload, variables) {
          return payload.postUpdated.id === variables.id;
        })
      },
      postsUpdated: {
        subscribe: Object(__WEBPACK_IMPORTED_MODULE_4_graphql_subscriptions__["withFilter"])(function () {
          return pubsub.asyncIterator(POSTS_SUBSCRIPTION);
        }, function (payload, variables) {
          return variables.endCursor <= payload.postsUpdated.id;
        })
      },
      commentUpdated: {
        subscribe: Object(__WEBPACK_IMPORTED_MODULE_4_graphql_subscriptions__["withFilter"])(function () {
          return pubsub.asyncIterator(COMMENT_SUBSCRIPTION);
        }, function (payload, variables) {
          return payload.commentUpdated.postId === variables.postId;
        })
      }
    }
  };
});

/***/ }),

/***/ "./src/server/modules/post/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Post"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"content"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"comments"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Comment"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"content"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PostEdges"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"node"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cursor"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"PostPageInfo"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"endCursor"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Posts"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"totalCount"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"edges"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostEdges"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostPageInfo"}},"directives":[]}]},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"limit"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"after"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"directives":[]}]}},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"addPost"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddPostInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"editPost"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditPostInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"addComment"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCommentInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCommentInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"editComment"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditCommentInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[]}]}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"AddPostInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"content"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"EditPostInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"content"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"AddCommentInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"content"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"postId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"DeleteCommentInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"postId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"EditCommentInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"content"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"postId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}]},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Subscription"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"postUpdated"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"postsUpdated"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"endCursor"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostPayload"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"commentUpdated"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"postId"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCommentPayload"}},"directives":[]}]}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UpdatePostPayload"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"mutation"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"node"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UpdateCommentPayload"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"mutation"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"postId"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"node"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"directives":[]}]}],"loc":{"start":0,"end":2078}};
    doc.loc.source = {"body":"# Post\ntype Post {\n  id: Int!\n  title: String!\n  content: String!\n  comments: [Comment]\n}\n\n# Comment\ntype Comment {\n  id: Int!\n  content: String!\n}\n\n# Edges for Posts\ntype PostEdges {\n  node: Post\n  cursor: Int\n}\n\n# PageInfo for Posts\ntype PostPageInfo {\n  endCursor: Int\n  hasNextPage: Boolean\n}\n\n# Posts relay-style pagination query\ntype Posts {\n  totalCount: Int\n  edges: [PostEdges]\n  pageInfo: PostPageInfo\n}\n\nextend type Query {\n  # Posts pagination query\n  posts(limit: Int, after: Int): Posts\n  # Post\n  post(id: Int!): Post\n}\n\nextend type Mutation {\n  # Create new post\n  addPost(input: AddPostInput!): Post\n  # Delete a post\n  deletePost(id: Int!): Post\n  # Edit a post\n  editPost(input: EditPostInput!): Post\n  # Add comment to post\n  addComment(input: AddCommentInput!): Comment\n  # Delete a comment\n  deleteComment(input: DeleteCommentInput!): Comment\n  # Edit a comment\n  editComment(input: EditCommentInput!): Comment\n}\n\n# Input for addPost Mutation\ninput AddPostInput {\n  title: String!\n  content: String!\n}\n\n# Input for editPost Mutation\ninput EditPostInput {\n  id: Int!\n  title: String!\n  content: String!\n}\n\n# Input for addComment Mutation\ninput AddCommentInput {\n  content: String!\n  # Needed for commentUpdated Subscription filter\n  postId: Int!\n}\n\n# Input for editComment Mutation\ninput DeleteCommentInput {\n  id: Int!\n  # Needed for commentUpdated Subscription filter\n  postId: Int!\n}\n\n# Input for deleteComment Mutation\ninput EditCommentInput {\n  id: Int!\n  content: String!\n  # Needed for commentUpdated Subscription filter\n  postId: Int!\n}\n\nextend type Subscription {\n  # Subscription for when editing a post\n  postUpdated(id: Int!): Post\n  # Subscription for post list\n  postsUpdated(endCursor: Int!): UpdatePostPayload\n  # Subscription for comments\n  commentUpdated(postId: Int!): UpdateCommentPayload\n}\n\n# Payload for postsUpdated Subscription\ntype UpdatePostPayload {\n  mutation: String!\n  id: Int!\n  node: Post\n}\n\n# Payload for commentUpdated Subscription\ntype UpdateCommentPayload {\n  mutation: String!\n  id: Int\n  postId: Int!\n  node: Comment\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/modules/post/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sql_helpers__ = __webpack_require__("./src/server/sql/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sql_connector__ = __webpack_require__("./src/server/sql/connector.js");







var Post = function () {
  function Post() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Post);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Post, [{
    key: 'postsPagination',
    value: function postsPagination(limit, after) {
      var where = '';
      if (after > 0) {
        where = 'id < ' + after;
      }

      return __WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */].select('id', 'title', 'content').from('post').whereRaw(where).orderBy('id', 'desc').limit(limit);
    }
  }, {
    key: 'getCommentsForPostIds',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(postIds) {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */].select('id', 'content', 'post_id AS postId').from('comment').whereIn('post_id', postIds);

              case 2:
                res = _context.sent;
                return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_4__sql_helpers__["a" /* orderedFor */])(res, postIds, 'postId', false));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCommentsForPostIds(_x) {
        return _ref.apply(this, arguments);
      }

      return getCommentsForPostIds;
    }()
  }, {
    key: 'getTotal',
    value: function getTotal() {
      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('post').countDistinct('id as count').first();
    }
  }, {
    key: 'getNextPageFlag',
    value: function getNextPageFlag(id) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('post').countDistinct('id as count').where('id', '<', id).first();
    }
  }, {
    key: 'post',
    value: function post(id) {
      return __WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */].select('id', 'title', 'content').from('post').where('id', '=', id).first();
    }
  }, {
    key: 'addPost',
    value: function addPost(_ref2) {
      var title = _ref2.title,
          content = _ref2.content;

      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('post').insert({ title: title, content: content }).returning('id');
    }
  }, {
    key: 'deletePost',
    value: function deletePost(id) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('post').where('id', '=', id).del();
    }
  }, {
    key: 'editPost',
    value: function editPost(_ref3) {
      var id = _ref3.id,
          title = _ref3.title,
          content = _ref3.content;

      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('post').where('id', '=', id).update({
        title: title,
        content: content
      });
    }
  }, {
    key: 'addComment',
    value: function addComment(_ref4) {
      var content = _ref4.content,
          postId = _ref4.postId;

      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('comment').insert({ content: content, post_id: postId }).returning('id');
    }
  }, {
    key: 'getComment',
    value: function getComment(id) {
      return __WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */].select('id', 'content').from('comment').where('id', '=', id).first();
    }
  }, {
    key: 'deleteComment',
    value: function deleteComment(id) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('comment').where('id', '=', id).del();
    }
  }, {
    key: 'editComment',
    value: function editComment(_ref5) {
      var id = _ref5.id,
          content = _ref5.content;

      return Object(__WEBPACK_IMPORTED_MODULE_5__sql_connector__["a" /* default */])('comment').where('id', '=', id).update({
        content: content
      });
    }
  }]);

  return Post;
}();



/***/ }),

/***/ "./src/server/modules/subscription/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sql__ = __webpack_require__("./src/server/modules/subscription/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema_graphql__ = __webpack_require__("./src/server/modules/subscription/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers__ = __webpack_require__("./src/server/modules/subscription/resolvers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__connector__ = __webpack_require__("./src/server/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stripeLocal__ = __webpack_require__("./src/server/modules/subscription/stripeLocal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webhook__ = __webpack_require__("./src/server/modules/subscription/webhook.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user__ = __webpack_require__("./src/server/modules/user/index.js");



var _this = this;

// Components











var Subscription = new __WEBPACK_IMPORTED_MODULE_2__sql__["a" /* default */]();

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_5__connector__["a" /* default */]({
  schema: __WEBPACK_IMPORTED_MODULE_3__schema_graphql___default.a,
  createResolversFunc: __WEBPACK_IMPORTED_MODULE_4__resolvers__["a" /* default */],
  createContextFunc: function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, connectionParams, webSocket) {
      var tokenUser, subscription;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_8__user__["b" /* parseUser */])({ req: req, connectionParams: connectionParams, webSocket: webSocket });

            case 2:
              tokenUser = _context.sent;

              if (!tokenUser) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return Subscription.getSubscription(tokenUser.id);

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = null;

            case 10:
              subscription = _context.t0;
              return _context.abrupt('return', {
                Subscription: Subscription,
                subscription: subscription
              });

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function createContextFunc(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(),
  middleware: function middleware(app) {
    app.use(Object(__WEBPACK_IMPORTED_MODULE_6__stripeLocal__["a" /* default */])());
    app.post('/stripe/webhook', __WEBPACK_IMPORTED_MODULE_7__webhook__["a" /* default */]);
  }
}));

/***/ }),

/***/ "./src/server/modules/subscription/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stripe__ = __webpack_require__("stripe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_stripe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_stripe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_FieldError__ = __webpack_require__("./src/common/FieldError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_log__ = __webpack_require__("./src/common/log.js");


/*eslint-disable no-unused-vars*/






var stripe = __WEBPACK_IMPORTED_MODULE_3_stripe___default()(__WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].subscription.stripeSecretKey);

/* harmony default export */ __webpack_exports__["a"] = (function (pubsub) {
  return {
    Query: {
      subscription: function subscription(obj, args, context) {
        return context.subscription;
      },
      subscribersOnlyNumber: function subscribersOnlyNumber(obj, args, context) {
        if (!context.subscription.active) return;
        var number = Math.floor(Math.random() * 10);
        return { number: number };
      },
      subscriptionCardInfo: function subscriptionCardInfo(obj, args, context) {
        var _this = this;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          var user;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = context.user;
                  return _context.abrupt('return', context.Subscription.getCardInfo(user.id));

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      }
    },
    Mutation: {
      subscribe: function subscribe(obj, _ref, context) {
        var _this2 = this;

        var input = _ref.input;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var e, data, user, subscription, customerId, stripeSourceId, source, customer, newSubscription;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  e = new __WEBPACK_IMPORTED_MODULE_4__common_FieldError__["a" /* default */]();
                  data = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["pick"])(input, ['token', 'expiryMonth', 'expiryYear', 'last4', 'brand']);
                  _context2.next = 5;
                  return context.User.getUserByUsername(context.user.username);

                case 5:
                  user = _context2.sent;
                  subscription = context.subscription;
                  customerId = void 0, stripeSourceId = void 0;

                  // use existing stripe customer if user has subscribed before

                  if (!(subscription && subscription.stripeCustomerId)) {
                    _context2.next = 16;
                    break;
                  }

                  customerId = subscription.stripeCustomerId;
                  _context2.next = 12;
                  return stripe.customers.createSource(customerId, {
                    source: data.token
                  });

                case 12:
                  source = _context2.sent;

                  stripeSourceId = source.id;
                  _context2.next = 21;
                  break;

                case 16:
                  _context2.next = 18;
                  return stripe.customers.create({ email: user.email, source: data.token });

                case 18:
                  customer = _context2.sent;

                  customerId = customer.id;
                  stripeSourceId = customer.default_source;

                case 21:
                  _context2.next = 23;
                  return context.Subscription.editSubscription({
                    userId: user.id,
                    subscription: {
                      stripeCustomerId: customerId,
                      stripeSourceId: stripeSourceId,
                      expiryMonth: data.expiryMonth,
                      expiryYear: data.expiryYear,
                      last4: data.last4,
                      brand: data.brand
                    }
                  });

                case 23:
                  _context2.next = 25;
                  return stripe.subscriptions.create({
                    customer: customerId,
                    items: [{
                      plan: 'basic'
                    }]
                  });

                case 25:
                  newSubscription = _context2.sent;
                  _context2.next = 28;
                  return context.Subscription.editSubscription({
                    userId: user.id,
                    subscription: {
                      active: true,
                      stripeSubscriptionId: newSubscription.id
                    }
                  });

                case 28:
                  return _context2.abrupt('return', { active: true, errors: null });

                case 31:
                  _context2.prev = 31;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', { active: false, errors: _context2.t0 });

                case 34:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 31]]);
        }))();
      },
      updateCard: function updateCard(obj, _ref2, context) {
        var _this3 = this;

        var input = _ref2.input;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
          var data, user, _context$subscription, stripeCustomerId, stripeSourceId, source;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  data = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["pick"])(input, ['token', 'expiryMonth', 'expiryYear', 'last4', 'brand']);
                  _context3.next = 4;
                  return context.User.getUserByUsername(context.user.username);

                case 4:
                  user = _context3.sent;
                  _context$subscription = context.subscription, stripeCustomerId = _context$subscription.stripeCustomerId, stripeSourceId = _context$subscription.stripeSourceId;
                  _context3.next = 8;
                  return stripe.customers.deleteSource(stripeCustomerId, stripeSourceId);

                case 8:
                  _context3.next = 10;
                  return stripe.customers.createSource(stripeCustomerId, {
                    source: data.token
                  });

                case 10:
                  source = _context3.sent;
                  _context3.next = 13;
                  return context.Subscription.editSubscription({
                    userId: user.id,
                    subscription: {
                      stripeSourceId: source.id,
                      expiryMonth: data.expiryMonth,
                      expiryYear: data.expiryYear,
                      last4: data.last4,
                      brand: data.brand
                    }
                  });

                case 13:
                  return _context3.abrupt('return', true);

                case 16:
                  _context3.prev = 16;
                  _context3.t0 = _context3['catch'](0);

                  console.log(_context3.t0);
                  return _context3.abrupt('return', false);

                case 20:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3, [[0, 16]]);
        }))();
      },
      cancel: function cancel(obj, args, context) {
        var _this4 = this;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
          var _ref3, id, _context$subscription2, stripeSubscriptionId, stripeCustomerId, stripeSourceId, e;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return context.User.getUserByUsername(context.user.username);

                case 3:
                  _ref3 = _context4.sent;
                  id = _ref3.id;
                  _context$subscription2 = context.subscription, stripeSubscriptionId = _context$subscription2.stripeSubscriptionId, stripeCustomerId = _context$subscription2.stripeCustomerId, stripeSourceId = _context$subscription2.stripeSourceId;
                  _context4.prev = 6;
                  _context4.next = 9;
                  return stripe.subscriptions.del(stripeSubscriptionId);

                case 9:
                  _context4.next = 11;
                  return stripe.customers.deleteSource(stripeCustomerId, stripeSourceId);

                case 11:
                  _context4.next = 18;
                  break;

                case 13:
                  _context4.prev = 13;
                  _context4.t0 = _context4['catch'](6);
                  _context4.t0 = new __WEBPACK_IMPORTED_MODULE_4__common_FieldError__["a" /* default */]();

                  _context4.t0.setError('subscription', 'Error cancelling subscription.');
                  _context4.t0.throwIf();

                case 18:
                  _context4.next = 20;
                  return context.Subscription.editSubscription({
                    userId: id,
                    subscription: {
                      active: false,
                      stripeSourceId: null,
                      stripeSubscriptionId: null,
                      expiryMonth: null,
                      expiryYear: null,
                      last4: null,
                      brand: null
                    }
                  });

                case 20:
                  return _context4.abrupt('return', { active: false, errors: null });

                case 23:
                  _context4.prev = 23;
                  _context4.t1 = _context4['catch'](0);
                  return _context4.abrupt('return', { active: true, errors: _context4.t1 });

                case 26:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[0, 23], [6, 13]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ }),

/***/ "./src/server/modules/subscription/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserSubscription"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"active"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"errors"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserSubscriptionCardInfo"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"expiryMonth"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"expiryYear"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"last4"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"brand"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"SubscriberNumber"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"number"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}]},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"subscription"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSubscription"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"subscribersOnlyNumber"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscriberNumber"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"subscriptionCardInfo"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSubscriptionCardInfo"}},"directives":[]}]}},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"subscribe"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSubscription"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"cancel"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSubscription"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateCard"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]}]}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"SubscribeInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"token"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"expiryMonth"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"expiryYear"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"last4"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"brand"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]}],"loc":{"start":0,"end":919}};
    doc.loc.source = {"body":"type UserSubscription {\n    active: Boolean!\n    errors: [FieldError!]\n}\n\ntype UserSubscriptionCardInfo {\n    expiryMonth: Int\n    expiryYear: Int\n    last4: String\n    brand: String\n}\n\ntype SubscriberNumber {\n    number: Int\n}\n\nextend type Query {\n    # Get current user's subscription\n    subscription: UserSubscription\n    # Get magic number only available to subscribers\n    subscribersOnlyNumber: SubscriberNumber\n    # Get payment information for current user's subscription\n    subscriptionCardInfo: UserSubscriptionCardInfo\n}\n\nextend type Mutation {\n    # Subscribe a user\n    subscribe(input: SubscribeInput!): UserSubscription!\n    # Cancel a user's subscription\n    cancel: UserSubscription!\n    # Update a user's card information\n    updateCard(input: SubscribeInput!): Boolean!\n}\n\ninput SubscribeInput {\n    token: String!\n    expiryMonth: Int!\n    expiryYear: Int!\n    last4: String!\n    brand: String!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/modules/subscription/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_humps__ = __webpack_require__("humps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_humps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_humps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__server_sql_connector__ = __webpack_require__("./src/server/sql/connector.js");





// Helpers



// Actual query fetching and transformation in DB

var Subscription = function () {
  function Subscription() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Subscription);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Subscription, [{
    key: 'getSubscription',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(userId) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__server_sql_connector__["a" /* default */])('subscription').select('s.*').from('subscription as s').where('s.user_id', '=', userId).first();

              case 3:
                _context.t1 = _context.sent;
                return _context.abrupt('return', (0, _context.t0)(_context.t1));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSubscription(_x) {
        return _ref.apply(this, arguments);
      }

      return getSubscription;
    }()
  }, {
    key: 'getSubscriptionByStripeSubscriptionId',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(stripeSubscriptionId) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__server_sql_connector__["a" /* default */])('subscription').select('s.*').from('subscription as s').where('s.stripe_subscription_id', '=', stripeSubscriptionId).first();

              case 3:
                _context2.t1 = _context2.sent;
                return _context2.abrupt('return', (0, _context2.t0)(_context2.t1));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSubscriptionByStripeSubscriptionId(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getSubscriptionByStripeSubscriptionId;
    }()
  }, {
    key: 'getSubscriptionByStripeCustomerId',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3(stripeCustomerId) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context3.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__server_sql_connector__["a" /* default */])('subscription').select('s.*').from('subscription as s').where('s.stripe_customer_id', '=', stripeCustomerId).first();

              case 3:
                _context3.t1 = _context3.sent;
                return _context3.abrupt('return', (0, _context3.t0)(_context3.t1));

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getSubscriptionByStripeCustomerId(_x3) {
        return _ref3.apply(this, arguments);
      }

      return getSubscriptionByStripeCustomerId;
    }()
  }, {
    key: 'editSubscription',
    value: function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4(_ref5) {
        var userId = _ref5.userId,
            subscription = _ref5.subscription;
        var userSubscription;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_6__server_sql_connector__["a" /* default */])('subscription').select('id').where({ user_id: userId }).first();

              case 2:
                userSubscription = _context4.sent;

                if (!userSubscription) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_6__server_sql_connector__["a" /* default */])('subscription').update(Object(__WEBPACK_IMPORTED_MODULE_5_humps__["decamelizeKeys"])(subscription)).where({ user_id: userId }).returning('id');

              case 6:
                return _context4.abrupt('return', _context4.sent);

              case 9:
                _context4.next = 11;
                return Object(__WEBPACK_IMPORTED_MODULE_6__server_sql_connector__["a" /* default */])('subscription').insert(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_humps__["decamelizeKeys"])(subscription), { user_id: userId })).returning('id');

              case 11:
                return _context4.abrupt('return', _context4.sent);

              case 12:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editSubscription(_x4) {
        return _ref4.apply(this, arguments);
      }

      return editSubscription;
    }()
  }, {
    key: 'getCardInfo',
    value: function () {
      var _ref6 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5(userId) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context5.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__server_sql_connector__["a" /* default */])('subscription').select('s.expiry_month', 's.expiry_year', 's.last4', 's.brand').from('subscription as s').where('s.user_id', '=', userId).first();

              case 3:
                _context5.t1 = _context5.sent;
                return _context5.abrupt('return', (0, _context5.t0)(_context5.t1));

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getCardInfo(_x5) {
        return _ref6.apply(this, arguments);
      }

      return getCardInfo;
    }()
  }]);

  return Subscription;
}();



/***/ }),

/***/ "./src/server/modules/subscription/stripeLocal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_log__ = __webpack_require__("./src/common/log.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("./settings.js");



var _this = this;




/* harmony default export */ __webpack_exports__["a"] = (function () {
  var running = false;
  return function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
      var _settings$subscriptio, enabled, stripeSecretKey;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!running) {
                _context.next = 3;
                break;
              }

              next();
              return _context.abrupt('return');

            case 3:
              _settings$subscriptio = __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].subscription, enabled = _settings$subscriptio.enabled, stripeSecretKey = _settings$subscriptio.stripeSecretKey;


              if (true && enabled && stripeSecretKey && !running) {
                Object(__WEBPACK_IMPORTED_MODULE_2__common_log__["a" /* default */])('Starting stripe local proxy');
                __webpack_require__("stripe-local")({
                  secretKey: __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].subscription.stripeSecretKey,
                  webhookUrl: 'http://localhost:3000/stripe/webhook'
                });
                running = true;
              }
              next();

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
});

/***/ }),

/***/ "./src/server/modules/subscription/webhook.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stripe__ = __webpack_require__("stripe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stripe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stripe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sql__ = __webpack_require__("./src/server/modules/subscription/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailer_mailer__ = __webpack_require__("./src/server/modules/mailer/mailer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_sql__ = __webpack_require__("./src/server/modules/user/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("./settings.js");



var _this = this;








var Subscription = new __WEBPACK_IMPORTED_MODULE_3__sql__["a" /* default */]();
var User = new __WEBPACK_IMPORTED_MODULE_5__user_sql__["a" /* default */]();
var stripe = __WEBPACK_IMPORTED_MODULE_2_stripe___default()(__WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].subscription.stripeSecretKey);

/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var stripeEndpointSecret, event, sig, response, subscription, userId, stripeCustomerId, stripeSourceId, user, url, _response, _subscription, _userId, _user, _url;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            stripeEndpointSecret = __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].subscription.stripeEndpointSecret;
            event = void 0;


            if (stripeEndpointSecret) {
              sig = req.headers['stripe-signature'];

              event = stripe.webhooks.constructEvent(req.body, sig, __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].subscription.stripeEndpointSecret);
            } else {
              event = req.body;
            }

            if (!(event.type === 'customer.subscription.deleted')) {
              _context.next = 20;
              break;
            }

            response = event.data.object;
            _context.next = 8;
            return Subscription.getSubscriptionByStripeSubscriptionId(response.id);

          case 8:
            subscription = _context.sent;

            if (!subscription) {
              _context.next = 20;
              break;
            }

            userId = subscription.userId, stripeCustomerId = subscription.stripeCustomerId, stripeSourceId = subscription.stripeSourceId;
            _context.next = 13;
            return User.getUser(userId);

          case 13:
            user = _context.sent;
            _context.next = 16;
            return stripe.customers.deleteSource(stripeCustomerId, stripeSourceId);

          case 16:
            _context.next = 18;
            return Subscription.editSubscription({
              userId: userId,
              subscription: {
                active: false,
                stripeSourceId: null,
                stripeSubscriptionId: null,
                expiryMonth: null,
                expiryYear: null,
                last4: null,
                brand: null
              }
            });

          case 18:
            url = req.protocol + '://' + req.get('host') + '/subscription';


            __WEBPACK_IMPORTED_MODULE_4__mailer_mailer__["a" /* default */].sendMail({
              from: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' <' + process.env.EMAIL_USER + '>',
              to: user.email,
              subject: 'Subscription Canceled',
              html: 'Your subscription has been canceled. To resubscribe click here: <a href="' + url + '">' + url + '</a>'
            });

          case 20:
            if (!(event.type === 'invoice.payment_failed')) {
              _context.next = 32;
              break;
            }

            _response = event.data.object;
            _context.next = 24;
            return Subscription.getSubscriptionByStripeCustomerId(_response.customer);

          case 24:
            _subscription = _context.sent;

            if (!_subscription) {
              _context.next = 32;
              break;
            }

            _userId = _subscription.userId;
            _context.next = 29;
            return User.getUser(_userId);

          case 29:
            _user = _context.sent;
            _url = req.protocol + '://' + req.get('host') + '/profile';


            __WEBPACK_IMPORTED_MODULE_4__mailer_mailer__["a" /* default */].sendMail({
              from: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' <' + process.env.EMAIL_USER + '>',
              to: _user.email,
              subject: 'Charge Failed',
              html: 'We are having trouble charing your card. Please update your card details here: <a href="' + _url + '">' + _url + '</a>'
            });

          case 32:

            res.json({ success: true });
            _context.next = 38;
            break;

          case 35:
            _context.prev = 35;
            _context.t0 = _context['catch'](0);

            res.status(500).json({ error: _context.t0.message });

          case 38:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 35]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/server/modules/upload/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_upload_server__ = __webpack_require__("apollo-upload-server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_upload_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_upload_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_fetch_upload__ = __webpack_require__("apollo-fetch-upload");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_fetch_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_fetch_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sql__ = __webpack_require__("./src/server/modules/upload/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_graphql__ = __webpack_require__("./src/server/modules/upload/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__schema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolvers__ = __webpack_require__("./src/server/modules/upload/resolvers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connector__ = __webpack_require__("./src/server/modules/connector.js");









/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_6__connector__["a" /* default */]({
  schema: __WEBPACK_IMPORTED_MODULE_4__schema_graphql___default.a,
  createResolversFunc: __WEBPACK_IMPORTED_MODULE_5__resolvers__["a" /* default */],
  createContextFunc: function createContextFunc() {
    return { Upload: new __WEBPACK_IMPORTED_MODULE_3__sql__["a" /* default */]() };
  },
  middleware: function middleware(app) {
    app.use('/graphql', Object(__WEBPACK_IMPORTED_MODULE_0_apollo_upload_server__["apolloUploadExpress"])({ uploadDir: './public' }));
    app.use('/public', __WEBPACK_IMPORTED_MODULE_2_express___default.a.static('public'));
  },
  createFetchOptions: __WEBPACK_IMPORTED_MODULE_1_apollo_fetch_upload__["constructUploadOptions"]
}));

/***/ }),

/***/ "./src/server/modules/upload/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shelljs__ = __webpack_require__("shelljs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shelljs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_shelljs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_FieldError__ = __webpack_require__("./src/common/FieldError.js");



var _this = this;

/*eslint-disable no-unused-vars*/





/* harmony default export */ __webpack_exports__["a"] = (function (pubsub) {
  return {
    Query: {
      files: function files(obj, args, _ref) {
        var Upload = _ref.Upload;

        return Upload.files();
      }
    },
    Mutation: {
      uploadFiles: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(obj, _ref3, _ref4) {
          var files = _ref3.files;
          var Upload = _ref4.Upload;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Upload.saveFiles(files);

                case 2:
                  return _context.abrupt('return', _context.sent);

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function uploadFiles(_x, _x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }(),
      removeFile: function () {
        var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(obj, _ref6, _ref7) {
          var id = _ref6.id;
          var Upload = _ref7.Upload;
          var file, ok, filePath, res;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Upload.file(id);

                case 2:
                  file = _context2.sent;

                  if (file) {
                    _context2.next = 5;
                    break;
                  }

                  throw new Error('File not found.');

                case 5:
                  _context2.next = 7;
                  return Upload.deleteFile(id);

                case 7:
                  ok = _context2.sent;

                  if (!ok) {
                    _context2.next = 13;
                    break;
                  }

                  filePath = '' + file.path;
                  res = __WEBPACK_IMPORTED_MODULE_2_shelljs___default.a.rm(filePath);

                  if (!(res.code > 0)) {
                    _context2.next = 13;
                    break;
                  }

                  throw new Error('Unable to delete file.');

                case 13:
                  return _context2.abrupt('return', ok);

                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this);
        }));

        return function removeFile(_x4, _x5, _x6) {
          return _ref5.apply(this, arguments);
        };
      }()
    },
    Subscription: {}
  };
});

/***/ }),

/***/ "./src/server/modules/upload/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"File"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"type"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"size"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"path"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"Upload"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"type"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"size"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"path"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"files"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File"}}},"directives":[]}]}},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"uploadFiles"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"files"},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"removeFile"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]}]}}],"loc":{"start":0,"end":306}};
    doc.loc.source = {"body":"type File {\n  id: Int!\n  name: String!\n  type: String!\n  size: Int!\n  path: String!\n}\n\ninput Upload {\n  name: String!\n  type: String!\n  size: Int!\n  path: String!\n}\n\nextend type Query {\n  files: [File]\n}\n\nextend type Mutation {\n  uploadFiles(files: [Upload!]!): Boolean!\n  removeFile(id: Int!): Boolean!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/modules/upload/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_sql_connector__ = __webpack_require__("./src/server/sql/connector.js");


/*eslint-disable no-unused-vars*/


var Upload = function () {
  function Upload() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Upload);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Upload, [{
    key: 'files',
    value: function files() {
      return Object(__WEBPACK_IMPORTED_MODULE_2__server_sql_connector__["a" /* default */])('upload').select('*');
    }
  }, {
    key: 'file',
    value: function file(id) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__server_sql_connector__["a" /* default */])('upload').select('*').where({ id: id }).first();
    }
  }, {
    key: 'saveFiles',
    value: function saveFiles(files) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__server_sql_connector__["a" /* default */])('upload').insert(files);
    }
  }, {
    key: 'deleteFile',
    value: function deleteFile(id) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__server_sql_connector__["a" /* default */])('upload').where({ id: id }).del();
    }
  }]);

  return Upload;
}();



/***/ }),

/***/ "./src/server/modules/user/auth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return refreshTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tryLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tryLoginSerial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__("babel-runtime/core-js/promise");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bcryptjs__ = __webpack_require__("bcryptjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__("./settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_FieldError__ = __webpack_require__("./src/common/FieldError.js");





var _this = this;







var createTokens = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(user, secret, refreshSecret) {
    var tokenUser, createToken, createRefreshToken;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenUser = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["pick"])(user, ['id', 'username', 'role']);

            tokenUser.fullName = user.firstName ? user.firstName + ' ' + user.lastName : null;

            createToken = __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default.a.sign({
              user: tokenUser
            }, secret, {
              expiresIn: '1m'
            });
            createRefreshToken = __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default.a.sign({
              user: user.id
            }, refreshSecret, {
              expiresIn: '7d'
            });
            return _context.abrupt('return', __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.all([createToken, createRefreshToken]));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function createTokens(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var refreshTokens = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(token, refreshToken, User, SECRET) {
    var userId, _jwt$decode, _user, user, refreshSecret, _ref3, _ref4, newToken, newRefreshToken;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = -1;
            _context2.prev = 1;
            _jwt$decode = __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default.a.decode(refreshToken), _user = _jwt$decode.user;

            userId = _user;
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', {});

          case 9:
            _context2.next = 11;
            return User.getUserWithPassword(userId);

          case 11:
            user = _context2.sent;

            if (user) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt('return', {});

          case 14:
            refreshSecret = SECRET + user.password;
            _context2.prev = 15;

            __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default.a.verify(refreshToken, refreshSecret);
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t1 = _context2['catch'](15);
            return _context2.abrupt('return', {});

          case 22:
            _context2.next = 24;
            return createTokens(user, SECRET, refreshSecret);

          case 24:
            _ref3 = _context2.sent;
            _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2);
            newToken = _ref4[0];
            newRefreshToken = _ref4[1];
            return _context2.abrupt('return', {
              token: newToken,
              refreshToken: newRefreshToken,
              user: Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["pick"])(user, ['id', 'username', 'role'])
            });

          case 29:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 6], [15, 19]]);
  }));

  return function refreshTokens(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

var tryLogin = function () {
  var _ref5 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3(email, password, User, SECRET) {
    var e, user, valid, refreshSecret, _ref6, _ref7, token, refreshToken;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            e = new __WEBPACK_IMPORTED_MODULE_8__common_FieldError__["a" /* default */]();
            _context3.next = 3;
            return User.getUserByEmail(email);

          case 3:
            user = _context3.sent;


            // check if email and password exist in db
            if (!user || user.password === null) {
              // user with provided email not found
              e.setError('email', 'Please enter a valid e-mail.');
              e.throwIf();
            }

            _context3.next = 7;
            return __WEBPACK_IMPORTED_MODULE_6_bcryptjs___default.a.compare(password, user.password);

          case 7:
            valid = _context3.sent;

            if (!valid) {
              // bad password
              e.setError('password', 'Please enter a valid password.');
              e.throwIf();
            }

            if (__WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].user.auth.password.confirm && !user.isActive) {
              e.setError('email', 'Please confirm your e-mail first.');
              e.throwIf();
            }

            refreshSecret = SECRET + user.password;
            _context3.next = 13;
            return createTokens(user, SECRET, refreshSecret);

          case 13:
            _ref6 = _context3.sent;
            _ref7 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref6, 2);
            token = _ref7[0];
            refreshToken = _ref7[1];
            return _context3.abrupt('return', {
              token: token,
              refreshToken: refreshToken
            });

          case 18:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function tryLogin(_x8, _x9, _x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

var tryLoginSerial = function () {
  var _ref8 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4(serial, User, SECRET) {
    var certAuth, user, refreshSecret, _ref9, _ref10, token, refreshToken;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return User.getUserWithSerial(serial);

          case 3:
            certAuth = _context4.sent;
            _context4.next = 6;
            return User.getUserWithPassword(certAuth.id);

          case 6:
            user = _context4.sent;
            refreshSecret = SECRET + user.password;
            _context4.next = 10;
            return createTokens(user, SECRET, refreshSecret);

          case 10:
            _ref9 = _context4.sent;
            _ref10 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref9, 2);
            token = _ref10[0];
            refreshToken = _ref10[1];
            return _context4.abrupt('return', {
              user: user,
              token: token,
              refreshToken: refreshToken
            });

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4['catch'](0);

            console.log(_context4.t0);
            return _context4.abrupt('return', {});

          case 21:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[0, 17]]);
  }));

  return function tryLoginSerial(_x12, _x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/server/modules/user/auth/scopes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  admin: ['user:*'],
  user: ['user:view:self', 'user:update:self']
});

/***/ }),

/***/ "./src/server/modules/user/auth/token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./settings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("./src/server/modules/user/auth/index.js");



var _this = this;





/* harmony default export */ __webpack_exports__["a"] = (function (SECRET, User, jwt) {
  return function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
      var token, _jwt$verify, user, refreshToken, newTokens, serial, result;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              token = req.universalCookies.get('x-token') || req.headers['x-token'];

              // if cookie available

              if (req.universalCookies.get('x-token')) {
                // check if header token matches cookie token
                if (req.universalCookies.get('x-token') !== req.universalCookies.get('r-token') || req.universalCookies.get('x-refresh-token') !== req.universalCookies.get('r-refresh-token')) {
                  // if x-token is not empty and not the same as cookie x-token revoke authentication
                  token = undefined;
                }
              }
              //console.log(token);

              if (!(token && token !== 'null')) {
                _context.next = 19;
                break;
              }

              _context.prev = 4;
              _jwt$verify = jwt.verify(token, SECRET), user = _jwt$verify.user;

              req.user = user;
              _context.next = 17;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](4);
              refreshToken = req.universalCookies.get('x-refresh-token') || req.headers['x-refresh-token'];
              _context.next = 14;
              return Object(__WEBPACK_IMPORTED_MODULE_3__index__["b" /* refreshTokens */])(token, refreshToken, User, SECRET);

            case 14:
              newTokens = _context.sent;


              if (newTokens.token && newTokens.refreshToken) {
                res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
                res.set('x-token', newTokens.token);
                res.set('x-refresh-token', newTokens.refreshToken);

                req.universalCookies.set('x-token', newTokens.token, {
                  maxAge: 60 * 60 * 24 * 7,
                  httpOnly: true
                });
                req.universalCookies.set('x-refresh-token', newTokens.refreshToken, {
                  maxAge: 60 * 60 * 24 * 7,
                  httpOnly: true
                });

                req.universalCookies.set('r-token', newTokens.token, {
                  maxAge: 60 * 60 * 24 * 7,
                  httpOnly: false
                });
                req.universalCookies.set('r-refresh-token', newTokens.refreshToken, {
                  maxAge: 60 * 60 * 24 * 7,
                  httpOnly: false
                });
              }
              req.user = newTokens.user;

            case 17:
              _context.next = 30;
              break;

            case 19:
              if (!__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].user.auth.certificate.enabled) {
                _context.next = 30;
                break;
              }

              // cert auth
              serial = '';

              if (true) {
                // for local testing without client certificates
                serial = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* default */].user.auth.certificate.devSerial;
              }
              // if header available
              if (req.headers['x-serial']) {
                serial = req.headers['x-serial'];
              }
              _context.next = 25;
              return Object(__WEBPACK_IMPORTED_MODULE_3__index__["d" /* tryLoginSerial */])(serial, User, SECRET);

            case 25:
              result = _context.sent;


              req.universalCookies.set('x-token', result.token, {
                maxAge: 60 * 60 * 24 * 7,
                httpOnly: true
              });
              req.universalCookies.set('x-refresh-token', result.refreshToken, {
                maxAge: 60 * 60 * 24 * 7,
                httpOnly: true
              });

              req.universalCookies.set('r-token', result.token, {
                maxAge: 60 * 60 * 24 * 7,
                httpOnly: false
              });
              req.universalCookies.set('r-refresh-token', result.refreshToken, {
                maxAge: 60 * 60 * 24 * 7,
                httpOnly: false
              });

            case 30:

              next();
              _context.next = 36;
              break;

            case 33:
              _context.prev = 33;
              _context.t1 = _context['catch'](0);

              next(_context.t1);

            case 36:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 33], [4, 9]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
});

/***/ }),

/***/ "./src/server/modules/user/confirm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);



var _this = this;

/* harmony default export */ __webpack_exports__["a"] = (function (SECRET, User, jwt) {
  return function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
      var token, _jwt$verify, id;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              token = Buffer.from(req.params.token, 'base64').toString();
              _jwt$verify = jwt.verify(token, SECRET), id = _jwt$verify.user.id;
              _context.next = 5;
              return User.updateActive(id, true);

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.send('error'));

            case 10:
              return _context.abrupt('return', res.redirect('/login'));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
});

/***/ }),

/***/ "./src/server/modules/user/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport__ = __webpack_require__("passport");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport_facebook__ = __webpack_require__("passport-facebook");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport_google_oauth__ = __webpack_require__("passport-google-oauth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport_google_oauth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_passport_google_oauth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sql__ = __webpack_require__("./src/server/modules/user/sql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schema_graphql__ = __webpack_require__("./src/server/modules/user/schema.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schema_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__schema_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resolvers__ = __webpack_require__("./src/server/modules/user/resolvers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth__ = __webpack_require__("./src/server/modules/user/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_token__ = __webpack_require__("./src/server/modules/user/auth/token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__confirm__ = __webpack_require__("./src/server/modules/user/confirm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__connector__ = __webpack_require__("./src/server/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_scopes__ = __webpack_require__("./src/server/modules/user/auth/scopes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings__ = __webpack_require__("./settings.js");




var _this = this;

















var SECRET = __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.secret;

var User = new __WEBPACK_IMPORTED_MODULE_8__sql__["a" /* default */]();

if (__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.facebook.enabled) {
  __WEBPACK_IMPORTED_MODULE_4_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_5_passport_facebook___default.a({
    clientID: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.facebook.clientID,
    clientSecret: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.facebook.clientSecret,
    callbackURL: '/auth/facebook/callback',
    scope: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.facebook.scope,
    profileFields: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.facebook.profileFields
  }, function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(accessToken, refreshToken, profile, cb) {
      var id, username, displayName, _profile$emails, value, user, isActive, _ref2, _ref3, createdUserId;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = profile.id, username = profile.username, displayName = profile.displayName, _profile$emails = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(profile.emails, 1), value = _profile$emails[0].value;
              _context.prev = 1;
              _context.next = 4;
              return User.getUserByFbIdOrEmail(id, value);

            case 4:
              user = _context.sent;

              if (user) {
                _context.next = 19;
                break;
              }

              isActive = true;
              _context.next = 9;
              return User.register({
                username: username ? username : displayName,
                email: value,
                password: id,
                isActive: isActive
              });

            case 9:
              _ref2 = _context.sent;
              _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref2, 1);
              createdUserId = _ref3[0];
              _context.next = 14;
              return User.createFacebookOuth({
                id: id,
                displayName: displayName,
                userId: createdUserId
              });

            case 14:
              _context.next = 16;
              return User.getUser(createdUserId);

            case 16:
              user = _context.sent;
              _context.next = 22;
              break;

            case 19:
              if (user.fbId) {
                _context.next = 22;
                break;
              }

              _context.next = 22;
              return User.createFacebookOuth({
                id: id,
                displayName: displayName,
                userId: user.id
              });

            case 22:
              return _context.abrupt('return', cb(null, Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["pick"])(user, ['id', 'username', 'role', 'email'])));

            case 25:
              _context.prev = 25;
              _context.t0 = _context['catch'](1);
              return _context.abrupt('return', cb(_context.t0, {}));

            case 28:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 25]]);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
}

if (__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.google.enabled) {
  __WEBPACK_IMPORTED_MODULE_4_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_6_passport_google_oauth__["OAuth2Strategy"]({
    clientID: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.google.clientID,
    clientSecret: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.google.clientSecret,
    callbackURL: '/auth/google/callback'
  }, function () {
    var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(accessToken, refreshToken, profile, cb) {
      var id, username, displayName, _profile$emails2, value, user, isActive, _ref5, _ref6, createdUserId;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = profile.id, username = profile.username, displayName = profile.displayName, _profile$emails2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(profile.emails, 1), value = _profile$emails2[0].value;
              _context2.prev = 1;
              _context2.next = 4;
              return User.getUserByGoogleIdOrEmail(id, value);

            case 4:
              user = _context2.sent;

              if (user) {
                _context2.next = 21;
                break;
              }

              isActive = true;
              _context2.next = 9;
              return User.register({
                username: username ? username : value,
                email: value,
                password: id,
                isActive: isActive
              });

            case 9:
              _ref5 = _context2.sent;
              _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref5, 1);
              createdUserId = _ref6[0];
              _context2.next = 14;
              return User.createGoogleOuth({
                id: id,
                displayName: displayName,
                userId: createdUserId
              });

            case 14:
              _context2.next = 16;
              return User.editUserProfile({
                id: createdUserId,
                profile: {
                  firstName: profile.name.givenName,
                  lastName: profile.name.familyName
                }
              });

            case 16:
              _context2.next = 18;
              return User.getUser(createdUserId);

            case 18:
              user = _context2.sent;
              _context2.next = 24;
              break;

            case 21:
              if (user.googleId) {
                _context2.next = 24;
                break;
              }

              _context2.next = 24;
              return User.createGoogleOuth({
                id: id,
                displayName: displayName,
                userId: user.id
              });

            case 24:
              return _context2.abrupt('return', cb(null, Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["pick"])(user, ['id', 'username', 'role', 'email'])));

            case 27:
              _context2.prev = 27;
              _context2.t0 = _context2['catch'](1);
              return _context2.abrupt('return', cb(_context2.t0, {}));

            case 30:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 27]]);
    }));

    return function (_x5, _x6, _x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }()));
}

var parseUser = function () {
  var _ref7 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(_ref8) {
    var req = _ref8.req,
        connectionParams = _ref8.connectionParams,
        webSocket = _ref8.webSocket;

    var serial, _jwt$verify, user, newTokens, _user, _user2;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            serial = '';

            if (true) {
              // for local testing without client certificates
              serial = __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.certificate.enabled;
            }

            if (!(connectionParams && connectionParams.token && connectionParams.token !== 'null' && connectionParams.token !== 'undefined')) {
              _context3.next = 16;
              break;
            }

            _context3.prev = 3;
            _jwt$verify = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a.verify(connectionParams.token, SECRET), user = _jwt$verify.user;
            return _context3.abrupt('return', user);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](3);
            _context3.next = 12;
            return Object(__WEBPACK_IMPORTED_MODULE_11__auth__["b" /* refreshTokens */])(connectionParams.token, connectionParams.refreshToken, User, SECRET);

          case 12:
            newTokens = _context3.sent;
            return _context3.abrupt('return', newTokens.user);

          case 14:
            _context3.next = 37;
            break;

          case 16:
            if (!req) {
              _context3.next = 29;
              break;
            }

            if (!req.user) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt('return', req.user);

          case 21:
            if (!__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.certificate.enabled) {
              _context3.next = 27;
              break;
            }

            _context3.next = 24;
            return User.getUserWithSerial(serial);

          case 24:
            _user = _context3.sent;

            if (!_user) {
              _context3.next = 27;
              break;
            }

            return _context3.abrupt('return', _user);

          case 27:
            _context3.next = 37;
            break;

          case 29:
            if (!webSocket) {
              _context3.next = 37;
              break;
            }

            if (!__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.certificate.enabled) {
              _context3.next = 37;
              break;
            }

            // in case you need to access req headers
            if (webSocket.upgradeReq.headers['x-serial']) {
              serial = webSocket.upgradeReq.headers['x-serial'];
            }

            _context3.next = 34;
            return User.getUserWithSerial(serial);

          case 34:
            _user2 = _context3.sent;

            if (!_user2) {
              _context3.next = 37;
              break;
            }

            return _context3.abrupt('return', _user2);

          case 37:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[3, 8]]);
  }));

  return function parseUser(_x9) {
    return _ref7.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_14__connector__["a" /* default */]({
  schema: __WEBPACK_IMPORTED_MODULE_9__schema_graphql___default.a,
  createResolversFunc: __WEBPACK_IMPORTED_MODULE_10__resolvers__["a" /* default */],
  createContextFunc: function () {
    var _ref9 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(req, connectionParams, webSocket) {
      var tokenUser, auth;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return parseUser({ req: req, connectionParams: connectionParams, webSocket: webSocket });

            case 2:
              tokenUser = _context4.sent;
              auth = {
                isAuthenticated: tokenUser ? true : false,
                scope: tokenUser ? __WEBPACK_IMPORTED_MODULE_15__auth_scopes__["a" /* default */][tokenUser.role] : null
              };
              return _context4.abrupt('return', {
                User: User,
                user: tokenUser,
                auth: auth,
                SECRET: SECRET,
                req: req
              });

            case 5:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this);
    }));

    return function createContextFunc(_x10, _x11, _x12) {
      return _ref9.apply(this, arguments);
    };
  }(),
  middleware: function middleware(app) {
    app.use(Object(__WEBPACK_IMPORTED_MODULE_12__auth_token__["a" /* default */])(SECRET, User, __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a));

    if (__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.password.sendConfirmationEmail) {
      app.get('/confirmation/:token', Object(__WEBPACK_IMPORTED_MODULE_13__confirm__["a" /* default */])(SECRET, User, __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default.a));
    }

    // Setup Facebook OAuth
    if (__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.facebook.enabled) {
      app.use(__WEBPACK_IMPORTED_MODULE_4_passport___default.a.initialize());

      app.get('/auth/facebook', __WEBPACK_IMPORTED_MODULE_4_passport___default.a.authenticate('facebook'));

      app.get('/auth/facebook/callback', __WEBPACK_IMPORTED_MODULE_4_passport___default.a.authenticate('facebook', { session: false }), function () {
        var _ref10 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(req, res) {
          var user, refreshSecret, _ref11, _ref12, token, refreshToken;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return User.getUserWithPassword(req.user.id);

                case 2:
                  user = _context5.sent;
                  refreshSecret = SECRET + user.password;
                  _context5.next = 6;
                  return Object(__WEBPACK_IMPORTED_MODULE_11__auth__["a" /* createTokens */])(req.user, SECRET, refreshSecret);

                case 6:
                  _ref11 = _context5.sent;
                  _ref12 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref11, 2);
                  token = _ref12[0];
                  refreshToken = _ref12[1];


                  req.universalCookies.set('x-token', token, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: true
                  });
                  req.universalCookies.set('x-refresh-token', refreshToken, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: true
                  });

                  req.universalCookies.set('r-token', token, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: false
                  });
                  req.universalCookies.set('r-refresh-token', refreshToken, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: false
                  });

                  res.redirect('/profile');

                case 15:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x13, _x14) {
          return _ref10.apply(this, arguments);
        };
      }());
    }

    // Setup Google OAuth
    if (__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.google.enabled) {
      app.use(__WEBPACK_IMPORTED_MODULE_4_passport___default.a.initialize());

      app.get('/auth/google', __WEBPACK_IMPORTED_MODULE_4_passport___default.a.authenticate('google', {
        scope: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.google.scope
      }));

      app.get('/auth/google/callback', __WEBPACK_IMPORTED_MODULE_4_passport___default.a.authenticate('google', { session: false }), function () {
        var _ref13 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
          var user, refreshSecret, _ref14, _ref15, token, refreshToken;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return User.getUserWithPassword(req.user.id);

                case 2:
                  user = _context6.sent;
                  refreshSecret = SECRET + user.password;
                  _context6.next = 6;
                  return Object(__WEBPACK_IMPORTED_MODULE_11__auth__["a" /* createTokens */])(req.user, SECRET, refreshSecret);

                case 6:
                  _ref14 = _context6.sent;
                  _ref15 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref14, 2);
                  token = _ref15[0];
                  refreshToken = _ref15[1];


                  req.universalCookies.set('x-token', token, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: true
                  });
                  req.universalCookies.set('x-refresh-token', refreshToken, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: true
                  });

                  req.universalCookies.set('r-token', token, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: false
                  });
                  req.universalCookies.set('r-refresh-token', refreshToken, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: false
                  });

                  res.redirect('/profile');

                case 15:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function (_x15, _x16) {
          return _ref13.apply(this, arguments);
        };
      }());
    }
  }
}));

/***/ }),

/***/ "./src/server/modules/user/resolvers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__("babel-runtime/helpers/slicedToArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_auth__ = __webpack_require__("graphql-auth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_graphql_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_graphql_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth__ = __webpack_require__("./src/server/modules/user/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_FieldError__ = __webpack_require__("./src/common/FieldError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings__ = __webpack_require__("./settings.js");





var _this4 = this;

/*eslint-disable no-unused-vars*/







/* harmony default export */ __webpack_exports__["a"] = (function (pubsub) {
  return {
    Query: {
      users: __WEBPACK_IMPORTED_MODULE_6_graphql_auth___default()(['user:view:all'], function (obj, _ref, context) {
        var orderBy = _ref.orderBy,
            filter = _ref.filter;

        return context.User.getUsers(orderBy, filter);
      }),
      user: __WEBPACK_IMPORTED_MODULE_6_graphql_auth___default()(function (obj, args, context) {
        return context.user.id !== args.id ? ['user:view'] : ['user:view:self'];
      }, function (obj, _ref2, context) {
        var id = _ref2.id;

        return context.User.getUser(id);
      }),
      currentUser: function currentUser(obj, args, context) {
        if (context.user) {
          return context.User.getUser(context.user.id);
        } else {
          return null;
        }
      }
    },
    User: {
      profile: function profile(obj) {
        return obj;
      },
      auth: function auth(obj) {
        return obj;
      }
    },
    UserProfile: {
      firstName: function firstName(obj) {
        return obj.firstName;
      },
      lastName: function lastName(obj) {
        return obj.lastName;
      },
      fullName: function fullName(obj) {
        if (obj.firstName && obj.lastName) {
          return obj.firstName + ' ' + obj.lastName;
        } else {
          return null;
        }
      }
    },
    UserAuth: {
      certificate: function certificate(obj) {
        return obj;
      },
      facebook: function facebook(obj) {
        return obj;
      },
      google: function google(obj) {
        return obj;
      }
    },
    CertificateAuth: {
      serial: function serial(obj) {
        return obj.serial;
      }
    },
    FacebookAuth: {
      fbId: function fbId(obj) {
        return obj.fbId;
      },
      displayName: function displayName(obj) {
        return obj.displayName;
      }
    },
    GoogleAuth: {
      googleId: function googleId(obj) {
        return obj.googleId;
      },
      displayName: function displayName(obj) {
        return obj.displayName;
      }
    },
    Mutation: {
      register: function register(obj, _ref3, context) {
        var _this = this;

        var input = _ref3.input;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          var e, userExists, emailExists, userId, isActive, _ref4, _ref5, user;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  e = new __WEBPACK_IMPORTED_MODULE_8__common_FieldError__["a" /* default */]();
                  _context.next = 4;
                  return context.User.getUserByUsername(input.username);

                case 4:
                  userExists = _context.sent;

                  if (userExists) {
                    e.setError('username', 'Username already exists.');
                  }

                  _context.next = 8;
                  return context.User.getUserByEmail(input.email);

                case 8:
                  emailExists = _context.sent;

                  if (emailExists) {
                    e.setError('email', 'E-mail already exists.');
                  }

                  e.throwIf();

                  userId = 0;

                  if (emailExists) {
                    _context.next = 22;
                    break;
                  }

                  isActive = false;

                  if (!__WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].user.auth.password.confirm) {
                    isActive = true;
                  }

                  _context.next = 17;
                  return context.User.register(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, input, { isActive: isActive }));

                case 17:
                  _ref4 = _context.sent;
                  _ref5 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref4, 1);
                  userId = _ref5[0];
                  _context.next = 25;
                  break;

                case 22:
                  _context.next = 24;
                  return context.User.updatePassword(emailExists.userId, input.password);

                case 24:
                  userId = emailExists.userId;

                case 25:
                  _context.next = 27;
                  return context.User.getUser(userId);

                case 27:
                  user = _context.sent;


                  if (context.mailer && __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].user.auth.password.sendConfirmationEmail && !emailExists && context.req) {
                    // async email
                    __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default.a.sign({ user: Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["pick"])(user, 'id') }, context.SECRET, { expiresIn: '1d' }, function (err, emailToken) {
                      var encodedToken = Buffer.from(emailToken).toString('base64');
                      var url = void 0;
                      if (true) {
                        url = context.req.protocol + '://localhost:3000/confirmation/' + encodedToken;
                      }
                      url = context.req.protocol + '://' + context.req.get('host') + '/confirmation/' + encodedToken;
                      context.mailer.sendMail({
                        from: __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].app.name + ' <' + process.env.EMAIL_USER + '>',
                        to: user.email,
                        subject: 'Confirm Email',
                        html: '<p>Hi, ' + user.username + '!</p>\n              <p>Welcome to ' + __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].app.name + '. Please click the following link to confirm your email:</p>\n              <p><a href="' + url + '">' + url + '</a></p>\n              <p>Below are your login information</p>\n              <p>Your email is: ' + user.email + '</p>\n              <p>Your password is: ' + input.password + '</p>'
                      });
                    });
                  }

                  return _context.abrupt('return', { user: user });

                case 32:
                  _context.prev = 32;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', { errors: _context.t0 });

                case 35:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 32]]);
        }))();
      },
      login: function login(obj, _ref6, context) {
        var _this2 = this;

        var _ref6$input = _ref6.input,
            email = _ref6$input.email,
            password = _ref6$input.password;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var tokens;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_7__auth__["c" /* tryLogin */])(email, password, context.User, context.SECRET);

                case 3:
                  tokens = _context2.sent;

                  if (context.req) {
                    context.req.universalCookies.set('x-token', tokens.token, {
                      maxAge: 60 * 60 * 24 * 7,
                      httpOnly: true
                    });
                    context.req.universalCookies.set('x-refresh-token', tokens.refreshToken, {
                      maxAge: 60 * 60 * 24 * 7,
                      httpOnly: true
                    });

                    context.req.universalCookies.set('r-token', tokens.token, {
                      maxAge: 60 * 60 * 24 * 7,
                      httpOnly: false
                    });
                    context.req.universalCookies.set('r-refresh-token', tokens.refreshToken, {
                      maxAge: 60 * 60 * 24 * 7,
                      httpOnly: false
                    });
                  }
                  return _context2.abrupt('return', { tokens: tokens });

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', { errors: _context2.t0 });

                case 11:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 8]]);
        }))();
      },
      logout: function logout(obj, args, context) {
        var _this3 = this;

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (context.req) {
                    context.req.universalCookies.remove('x-token');
                    context.req.universalCookies.remove('x-refresh-token');

                    context.req.universalCookies.remove('r-token');
                    context.req.universalCookies.remove('r-refresh-token');
                  }

                  return _context3.abrupt('return', true);

                case 2:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }))();
      },
      refreshTokens: function refreshTokens(obj, _ref7, context) {
        var token = _ref7.token,
            refreshToken = _ref7.refreshToken;

        return Object(__WEBPACK_IMPORTED_MODULE_7__auth__["b" /* refreshTokens */])(token, refreshToken, context.User, context.SECRET);
      },

      addUser: __WEBPACK_IMPORTED_MODULE_6_graphql_auth___default()(function (obj, args, context) {
        return context.user.id !== args.id ? ['user:create'] : ['user:create:self'];
      }, function () {
        var _ref8 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(obj, _ref9, context) {
          var input = _ref9.input;

          var e, userExists, emailExists, _ref10, _ref11, createdUserId, user;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  e = new __WEBPACK_IMPORTED_MODULE_8__common_FieldError__["a" /* default */]();
                  _context4.next = 4;
                  return context.User.getUserByUsername(input.username);

                case 4:
                  userExists = _context4.sent;

                  if (userExists) {
                    e.setError('username', 'Username already exists.');
                  }

                  _context4.next = 8;
                  return context.User.getUserByEmail(input.email);

                case 8:
                  emailExists = _context4.sent;

                  if (emailExists) {
                    e.setError('email', 'E-mail already exists.');
                  }

                  if (input.password.length < 5) {
                    e.setError('password', 'Password must be 5 characters or more.');
                  }

                  e.throwIf();

                  _context4.next = 14;
                  return context.User.register(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, input));

                case 14:
                  _ref10 = _context4.sent;
                  _ref11 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref10, 1);
                  createdUserId = _ref11[0];
                  _context4.next = 19;
                  return context.User.editUserProfile(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ id: createdUserId }, input));

                case 19:
                  if (!__WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].user.auth.certificate.enabled) {
                    _context4.next = 22;
                    break;
                  }

                  _context4.next = 22;
                  return context.User.editAuthCertificate(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ id: createdUserId }, input));

                case 22:
                  _context4.next = 24;
                  return context.User.getUser(createdUserId);

                case 24:
                  user = _context4.sent;


                  if (context.mailer && __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].user.auth.password.sendAddNewUserEmail && !emailExists && context.req) {
                    // async email
                    __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default.a.sign({ user: Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["pick"])(user, 'id') }, context.SECRET, { expiresIn: '1d' }, function (err, emailToken) {
                      var encodedToken = Buffer.from(emailToken).toString('base64');
                      var url = void 0;
                      if (true) {
                        url = context.req.protocol + '://localhost:3000/confirmation/' + encodedToken;
                      }
                      url = context.req.protocol + '://' + context.req.get('host') + '/confirmation/' + encodedToken;
                      context.mailer.sendMail({
                        from: __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].app.name + ' <' + process.env.EMAIL_USER + '>',
                        to: user.email,
                        subject: 'Your account has been created',
                        html: '<p>Hi, ' + user.username + '!</p>\n                <p>Welcome to ' + __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].app.name + '. Please click the following link to confirm your email:</p>\n                <p><a href="' + url + '">' + url + '</a></p>\n                <p>Below are your login information</p>\n                <p>Your email is: ' + user.email + '</p>\n                <p>Your password is: ' + input.password + '</p>'
                      });
                    });
                  }

                  return _context4.abrupt('return', { user: user });

                case 29:
                  _context4.prev = 29;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt('return', { errors: _context4.t0 });

                case 32:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this4, [[0, 29]]);
        }));

        return function (_x, _x2, _x3) {
          return _ref8.apply(this, arguments);
        };
      }()),
      editUser: __WEBPACK_IMPORTED_MODULE_6_graphql_auth___default()(function (obj, args, context) {
        return context.user.id !== args.id ? ['user:update'] : ['user:update:self'];
      }, function () {
        var _ref12 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(obj, _ref13, context) {
          var input = _ref13.input;
          var e, userExists, emailExists, user;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  e = new __WEBPACK_IMPORTED_MODULE_8__common_FieldError__["a" /* default */]();
                  _context5.next = 4;
                  return context.User.getUserByUsername(input.username);

                case 4:
                  userExists = _context5.sent;

                  if (userExists && userExists.id !== input.id) {
                    e.setError('username', 'Username already exists.');
                  }

                  _context5.next = 8;
                  return context.User.getUserByEmail(input.email);

                case 8:
                  emailExists = _context5.sent;

                  if (emailExists && emailExists.id !== input.id) {
                    e.setError('email', 'E-mail already exists.');
                  }

                  if (input.password && input.password.length < 5) {
                    e.setError('password', 'Password must be 5 characters or more.');
                  }

                  e.throwIf();

                  _context5.next = 14;
                  return context.User.editUser(input);

                case 14:
                  _context5.next = 16;
                  return context.User.editUserProfile(input);

                case 16:
                  if (!__WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].user.auth.certificate.enabled) {
                    _context5.next = 19;
                    break;
                  }

                  _context5.next = 19;
                  return context.User.editAuthCertificate(input);

                case 19:
                  _context5.next = 21;
                  return context.User.getUser(input.id);

                case 21:
                  user = _context5.sent;
                  return _context5.abrupt('return', { user: user });

                case 25:
                  _context5.prev = 25;
                  _context5.t0 = _context5['catch'](0);
                  return _context5.abrupt('return', { errors: _context5.t0 });

                case 28:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this4, [[0, 25]]);
        }));

        return function (_x4, _x5, _x6) {
          return _ref12.apply(this, arguments);
        };
      }()),
      deleteUser: __WEBPACK_IMPORTED_MODULE_6_graphql_auth___default()(function (obj, args, context) {
        return context.user.id !== args.id ? ['user:delete'] : ['user:delete:self'];
      }, function () {
        var _ref14 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(obj, _ref15, context) {
          var id = _ref15.id;
          var e, user, isDeleted;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  e = new __WEBPACK_IMPORTED_MODULE_8__common_FieldError__["a" /* default */]();
                  _context6.next = 4;
                  return context.User.getUser(id);

                case 4:
                  user = _context6.sent;

                  if (!user) {
                    e.setError('delete', 'User does not exist.');
                    e.throwIf();
                  }

                  if (user.id === context.user.id) {
                    e.setError('delete', 'You can not delete your self.');
                    e.throwIf();
                  }

                  _context6.next = 9;
                  return context.User.deleteUser(id);

                case 9:
                  isDeleted = _context6.sent;

                  if (!isDeleted) {
                    _context6.next = 14;
                    break;
                  }

                  return _context6.abrupt('return', { user: user });

                case 14:
                  e.setError('delete', 'Could not delete user. Please try again later.');
                  e.throwIf();

                case 16:
                  _context6.next = 21;
                  break;

                case 18:
                  _context6.prev = 18;
                  _context6.t0 = _context6['catch'](0);
                  return _context6.abrupt('return', { errors: _context6.t0 });

                case 21:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this4, [[0, 18]]);
        }));

        return function (_x7, _x8, _x9) {
          return _ref14.apply(this, arguments);
        };
      }()),
      forgotPassword: function forgotPassword(obj, _ref16, context) {
        var _this5 = this;

        var input = _ref16.input;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
          var localAuth, user;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  localAuth = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["pick"])(input, 'email');
                  _context7.next = 4;
                  return context.User.getUserByEmail(localAuth.email);

                case 4:
                  user = _context7.sent;


                  if (user && context.mailer) {
                    // async email
                    __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default.a.sign({ email: user.email, password: user.password }, context.SECRET, { expiresIn: '1d' }, function (err, emailToken) {
                      // encoded token since react router does not match dots in params
                      var encodedToken = Buffer.from(emailToken).toString('base64');
                      var url = void 0;
                      if (true) {
                        url = context.req.protocol + '://localhost:3000/reset-password/' + encodedToken;
                      }
                      url = context.req.protocol + '://' + context.req.get('host') + '/reset-password/' + encodedToken;
                      context.mailer.sendMail({
                        from: __WEBPACK_IMPORTED_MODULE_9__settings__["a" /* default */].app.name + ' <' + process.env.EMAIL_USER + '>',
                        to: user.email,
                        subject: 'Reset Password',
                        html: 'Please click this link to reset your password: <a href="' + url + '">' + url + '</a>'
                      });
                    });
                  }
                  return _context7.abrupt('return', true);

                case 9:
                  _context7.prev = 9;
                  _context7.t0 = _context7['catch'](0);
                  return _context7.abrupt('return', true);

                case 12:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this5, [[0, 9]]);
        }))();
      },
      resetPassword: function resetPassword(obj, _ref17, context) {
        var _this6 = this;

        var input = _ref17.input;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
          var e, reset, token, _jwt$verify, email, password, user;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.prev = 0;
                  e = new __WEBPACK_IMPORTED_MODULE_8__common_FieldError__["a" /* default */]();
                  reset = Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["pick"])(input, ['password', 'passwordConfirmation', 'token']);

                  if (reset.password !== reset.passwordConfirmation) {
                    e.setError('password', 'Passwords do not match.');
                  }

                  if (reset.password.length < 5) {
                    e.setError('password', 'Password must be 5 characters or more.');
                  }
                  e.throwIf();

                  token = Buffer.from(reset.token, 'base64').toString();
                  _jwt$verify = __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default.a.verify(token, context.SECRET), email = _jwt$verify.email, password = _jwt$verify.password;
                  _context8.next = 10;
                  return context.User.getUserByEmail(email);

                case 10:
                  user = _context8.sent;

                  if (user.password !== password) {
                    e.setError('token', 'Invalid token');
                    e.throwIf();
                  }

                  if (!user) {
                    _context8.next = 15;
                    break;
                  }

                  _context8.next = 15;
                  return context.User.updatePassword(user.id, reset.password);

                case 15:
                  return _context8.abrupt('return', { errors: null });

                case 18:
                  _context8.prev = 18;
                  _context8.t0 = _context8['catch'](0);
                  return _context8.abrupt('return', { errors: _context8.t0 });

                case 21:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this6, [[0, 18]]);
        }))();
      }
    },
    Subscription: {}
  };
});

/***/ }),

/***/ "./src/server/modules/user/schema.graphql":
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"username"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"role"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isActive"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"profile"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"auth"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuth"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserProfile"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"firstName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"lastName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"fullName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserAuth"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"certificate"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"CertificateAuth"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"facebook"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"FacebookAuth"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"google"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"GoogleAuth"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"CertificateAuth"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"serial"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"FacebookAuth"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"fbId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"displayName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"GoogleAuth"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"googleId"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"displayName"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserPayload"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"errors"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"AuthPayload"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"tokens"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Tokens"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"errors"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"ResetPayload"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"errors"},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FieldError"}}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Tokens"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"token"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"refreshToken"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"orderBy"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByUserInput"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"filter"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterUserInput"}},"defaultValue":null,"directives":[]}],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"currentUser"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"directives":[]}]}},{"kind":"TypeExtensionDefinition","definition":{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPayload"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"logout"},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"refreshTokens"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"token"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"refreshToken"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddUserInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPayload"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"editUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditUserInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPayload"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPayload"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ForgotPasswordInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}},"defaultValue":null,"directives":[]}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPayload"}}},"directives":[]}]}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"OrderByUserInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"column"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"order"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"FilterUserInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"searchText"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"role"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"isActive"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"RegisterUserInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"username"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"LoginUserInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"AddUserInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"username"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"role"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"isActive"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"profile"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileInput"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"auth"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"EditUserInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"username"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"role"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"isActive"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"profile"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileInput"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"auth"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"ProfileInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"firstName"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"lastName"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"AuthInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"certificate"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthCertificateInput"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"facebook"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthFacebookInput"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"AuthCertificateInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"serial"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"AuthFacebookInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"fbId"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"displayName"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"ForgotPasswordInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"ResetPasswordInput"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"token"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"passwordConfirmation"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":null,"directives":[]}]}],"loc":{"start":0,"end":2827}};
    doc.loc.source = {"body":"type User {\n  id: Int!\n  username: String!\n  role: String!\n  isActive: Boolean\n  email: String!\n  profile: UserProfile\n  auth: UserAuth\n}\n\ntype UserProfile {\n  firstName: String\n  lastName: String\n  fullName: String\n}\n\ntype UserAuth {\n  certificate: CertificateAuth\n  facebook: FacebookAuth\n  google: GoogleAuth\n}\n\ntype CertificateAuth {\n  serial: String\n}\n\ntype FacebookAuth {\n  fbId: String\n  displayName: String\n}\n\ntype GoogleAuth {\n  googleId: String\n  displayName: String\n}\n\ntype UserPayload {\n  user: User\n  errors: [FieldError!]\n}\n\ntype AuthPayload {\n  tokens: Tokens\n  errors: [FieldError!]\n}\n\ntype ResetPayload {\n  errors: [FieldError!]\n}\n\ntype Tokens {\n  token: String!\n  refreshToken: String!\n}\n\nextend type Query {\n  # Get all users ordered by: OrderByUserInput add filtered by: FilterUserInput\n  users(orderBy: OrderByUserInput, filter: FilterUserInput): [User]\n  # Get user by id\n  user(id: Int!): User\n  # Get current user\n  currentUser: User\n}\n\nextend type Mutation {\n  # Register user\n  register(input: RegisterUserInput!): UserPayload!\n  # Login user\n  login(input: LoginUserInput!): AuthPayload!\n  # Logout user\n  logout: Boolean!\n  # Refreash user tokens\n  refreshTokens(token: String!, refreshToken: String!): AuthPayload!\n  # Create new user\n  addUser(input: AddUserInput!): UserPayload!\n  # Edit a user\n  editUser(input: EditUserInput!): UserPayload!\n  # Delete a user\n  deleteUser(id: Int!): UserPayload!\n  forgotPassword(input: ForgotPasswordInput!): Boolean!\n  resetPassword(input: ResetPasswordInput!): ResetPayload!\n}\n\n# Input for ordering users\ninput OrderByUserInput {\n  # id | username | role | isActive | email\n  column: String\n  # asc | desc\n  order: String\n}\n\n# Input for filtering users\ninput FilterUserInput {\n  # search by username or email\n  searchText: String\n  # filter by role\n  role: String\n  # filter by isActive\n  isActive: Boolean\n}\n\ninput RegisterUserInput {\n  username: String!\n  email: String!\n  password: String!\n}\n\ninput LoginUserInput {\n  email: String!\n  password: String!\n}\n\n# Input for addUser Mutation\ninput AddUserInput {\n  username: String!\n  email: String!\n  password: String!\n  role: String!\n  isActive: Boolean\n  profile: ProfileInput\n  auth: AuthInput\n}\n\n# Input for editUser Mutation\ninput EditUserInput {\n  id: Int!\n  username: String!\n  role: String!\n  isActive: Boolean\n  email: String!\n  password: String\n  profile: ProfileInput\n  auth: AuthInput\n}\n\ninput ProfileInput {\n  firstName: String\n  lastName: String\n}\n\ninput AuthInput {\n  certificate: AuthCertificateInput\n  facebook: AuthFacebookInput\n}\n\ninput AuthCertificateInput {\n  serial: String\n}\n\ninput AuthFacebookInput {\n  fbId: String\n  displayName: String\n}\n\ninput ForgotPasswordInput {\n  email: String!\n}\n\ninput ResetPasswordInput {\n  token: String!\n  password: String!\n  passwordConfirmation: String!\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./src/server/modules/user/sql.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_humps__ = __webpack_require__("humps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_humps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_humps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcryptjs__ = __webpack_require__("bcryptjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__ = __webpack_require__("./src/server/sql/connector.js");





// Helpers





// Actual query fetching and transformation in DB

var User = function () {
  function User() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, User);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(User, [{
    key: 'getUsers',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(orderBy, filter) {
        var queryBuilder, column, order;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryBuilder = __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id as id', 'u.username', 'u.role', 'u.is_active', 'u.email', 'up.first_name', 'up.last_name', 'ca.serial', 'fa.fb_id', 'fa.display_name AS fbDisplayName', 'ga.google_id', 'ga.display_name AS googleDisplayName').from('user AS u').leftJoin('user_profile AS up', 'up.user_id', 'u.id').leftJoin('auth_certificate AS ca', 'ca.user_id', 'u.id').leftJoin('auth_facebook AS fa', 'fa.user_id', 'u.id').leftJoin('auth_google AS ga', 'ga.user_id', 'u.id');

                // add order by

                if (orderBy && orderBy.column) {
                  column = orderBy.column;
                  order = 'asc';

                  if (orderBy.order) {
                    order = orderBy.order;
                  }

                  queryBuilder.orderBy(Object(__WEBPACK_IMPORTED_MODULE_5_humps__["decamelize"])(column), order);
                }

                // add filter conditions
                if (filter) {
                  if (Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["has"])(filter, 'role') && filter.role !== '') {
                    queryBuilder.where(function () {
                      this.where('u.role', filter.role);
                    });
                  }

                  if (Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["has"])(filter, 'isActive') && filter.isActive !== null) {
                    queryBuilder.where(function () {
                      this.where('u.is_active', filter.isActive);
                    });
                  }

                  if (Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["has"])(filter, 'searchText') && filter.searchText !== '') {
                    queryBuilder.where(function () {
                      this.where('u.username', 'like', '%' + filter.searchText + '%').orWhere('u.email', 'like', '%' + filter.searchText + '%').orWhere('up.first_name', 'like', '%' + filter.searchText + '%').orWhere('up.last_name', 'like', '%' + filter.searchText + '%');
                    });
                  }
                }

                _context.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context.next = 6;
                return queryBuilder;

              case 6:
                _context.t1 = _context.sent;
                return _context.abrupt('return', (0, _context.t0)(_context.t1));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUsers(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getUsers;
    }()
  }, {
    key: 'getUser',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(id) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id', 'u.username', 'u.role', 'u.is_active', 'u.email', 'up.first_name', 'up.last_name', 'ca.serial', 'fa.fb_id', 'fa.display_name AS fbDisplayName', 'ga.google_id', 'ga.display_name AS googleDisplayName').from('user AS u').leftJoin('user_profile AS up', 'up.user_id', 'u.id').leftJoin('auth_certificate AS ca', 'ca.user_id', 'u.id').leftJoin('auth_facebook AS fa', 'fa.user_id', 'u.id').leftJoin('auth_google AS ga', 'ga.user_id', 'u.id').where('u.id', '=', id).first();

              case 3:
                _context2.t1 = _context2.sent;
                return _context2.abrupt('return', (0, _context2.t0)(_context2.t1));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUser(_x3) {
        return _ref2.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'getUserWithPassword',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3(id) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context3.next = 3;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id', 'u.username', 'u.password', 'u.role', 'u.is_active', 'u.email', 'up.first_name', 'up.last_name').from('user AS u').where('u.id', '=', id).leftJoin('user_profile AS up', 'up.user_id', 'u.id').first();

              case 3:
                _context3.t1 = _context3.sent;
                return _context3.abrupt('return', (0, _context3.t0)(_context3.t1));

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUserWithPassword(_x4) {
        return _ref3.apply(this, arguments);
      }

      return getUserWithPassword;
    }()
  }, {
    key: 'getUserWithSerial',
    value: function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4(serial) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context4.next = 3;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id', 'u.username', 'u.role', 'u.is_active', 'ca.serial', 'up.first_name', 'up.last_name').from('user AS u').leftJoin('auth_certificate AS ca', 'ca.user_id', 'u.id').leftJoin('user_profile AS up', 'up.user_id', 'u.id').where('ca.serial', '=', serial).first();

              case 3:
                _context4.t1 = _context4.sent;
                return _context4.abrupt('return', (0, _context4.t0)(_context4.t1));

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUserWithSerial(_x5) {
        return _ref4.apply(this, arguments);
      }

      return getUserWithSerial;
    }()
  }, {
    key: 'register',
    value: function () {
      var _ref5 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5(_ref6) {
        var username = _ref6.username,
            email = _ref6.email,
            password = _ref6.password,
            role = _ref6.role,
            isActive = _ref6.isActive;
        var passwordHashed;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_7_bcryptjs___default.a.hash(password, 12);

              case 2:
                passwordHashed = _context5.sent;


                if (role === undefined) {
                  role = 'user';
                }

                return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('user').insert({ username: username, email: email, role: role, password: passwordHashed, is_active: !!isActive }).returning('id'));

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function register(_x6) {
        return _ref5.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: 'createFacebookOuth',
    value: function createFacebookOuth(_ref7) {
      var id = _ref7.id,
          displayName = _ref7.displayName,
          userId = _ref7.userId;

      return Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('auth_facebook').insert({ fb_id: id, display_name: displayName, user_id: userId }).returning('id');
    }
  }, {
    key: 'createGoogleOuth',
    value: function createGoogleOuth(_ref8) {
      var id = _ref8.id,
          displayName = _ref8.displayName,
          userId = _ref8.userId;

      return Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('auth_google').insert({ google_id: id, display_name: displayName, user_id: userId }).returning('id');
    }
  }, {
    key: 'editUser',
    value: function () {
      var _ref9 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6(_ref10) {
        var id = _ref10.id,
            username = _ref10.username,
            email = _ref10.email,
            role = _ref10.role,
            isActive = _ref10.isActive,
            password = _ref10.password;
        var localAuthInput, passwordHashed;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                localAuthInput = { email: email };

                if (!password) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 4;
                return __WEBPACK_IMPORTED_MODULE_7_bcryptjs___default.a.hash(password, 12);

              case 4:
                passwordHashed = _context6.sent;

                localAuthInput = { email: email, password: passwordHashed };

              case 6:
                return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('user').update(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
                  username: username,
                  role: role,
                  is_active: isActive
                }, localAuthInput)).where({ id: id }));

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function editUser(_x7) {
        return _ref9.apply(this, arguments);
      }

      return editUser;
    }()
  }, {
    key: 'editUserProfile',
    value: function () {
      var _ref11 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7(_ref12) {
        var id = _ref12.id,
            profile = _ref12.profile;
        var userProfile;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('id').from('user_profile').where({ user_id: id }).first();

              case 2:
                userProfile = _context7.sent;

                if (!userProfile) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('user_profile').update(Object(__WEBPACK_IMPORTED_MODULE_5_humps__["decamelizeKeys"])(profile)).where({ user_id: id }));

              case 7:
                return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('user_profile').insert(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_humps__["decamelizeKeys"])(profile), { user_id: id })).returning('id'));

              case 8:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function editUserProfile(_x8) {
        return _ref11.apply(this, arguments);
      }

      return editUserProfile;
    }()
  }, {
    key: 'editAuthCertificate',
    value: function () {
      var _ref13 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee8(_ref14) {
        var id = _ref14.id,
            serial = _ref14.auth.certificate.serial;
        var userProfile;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('id').from('auth_certificate').where({ user_id: id }).first();

              case 2:
                userProfile = _context8.sent;

                if (!userProfile) {
                  _context8.next = 7;
                  break;
                }

                return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('auth_certificate').update({ serial: serial }).where({ user_id: id }));

              case 7:
                return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('auth_certificate').insert({ serial: serial, user_id: id }).returning('id'));

              case 8:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function editAuthCertificate(_x9) {
        return _ref13.apply(this, arguments);
      }

      return editAuthCertificate;
    }()
  }, {
    key: 'deleteUser',
    value: function deleteUser(id) {
      return Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('user').where('id', '=', id).del();
    }
  }, {
    key: 'updatePassword',
    value: function () {
      var _ref15 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee9(id, newPassword) {
        var password;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return __WEBPACK_IMPORTED_MODULE_7_bcryptjs___default.a.hash(newPassword, 12);

              case 2:
                password = _context9.sent;
                return _context9.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('user').update({ password: password }).where({ id: id }));

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function updatePassword(_x10, _x11) {
        return _ref15.apply(this, arguments);
      }

      return updatePassword;
    }()
  }, {
    key: 'updateActive',
    value: function updateActive(id, isActive) {
      return Object(__WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */])('user').update({ is_active: isActive }).where({ id: id });
    }
  }, {
    key: 'getUserByEmail',
    value: function () {
      var _ref16 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee10(email) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context10.next = 3;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id', 'u.username', 'u.password', 'u.role', 'u.is_active', 'u.email', 'up.first_name', 'up.last_name').from('user AS u').leftJoin('user_profile AS up', 'up.user_id', 'u.id').where({ email: email }).first();

              case 3:
                _context10.t1 = _context10.sent;
                return _context10.abrupt('return', (0, _context10.t0)(_context10.t1));

              case 5:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getUserByEmail(_x12) {
        return _ref16.apply(this, arguments);
      }

      return getUserByEmail;
    }()
  }, {
    key: 'getUserByFbIdOrEmail',
    value: function () {
      var _ref17 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee11(id, email) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context11.next = 3;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id', 'u.username', 'u.role', 'u.is_active', 'fa.fb_id', 'u.email', 'u.password', 'up.first_name', 'up.last_name').from('user AS u').leftJoin('auth_facebook AS fa', 'fa.user_id', 'u.id').leftJoin('user_profile AS up', 'up.user_id', 'u.id').where('fa.fb_id', '=', id).orWhere('u.email', '=', email).first();

              case 3:
                _context11.t1 = _context11.sent;
                return _context11.abrupt('return', (0, _context11.t0)(_context11.t1));

              case 5:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getUserByFbIdOrEmail(_x13, _x14) {
        return _ref17.apply(this, arguments);
      }

      return getUserByFbIdOrEmail;
    }()
  }, {
    key: 'getUserByGoogleIdOrEmail',
    value: function () {
      var _ref18 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee12(id, email) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context12.next = 3;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id', 'u.username', 'u.role', 'u.is_active', 'ga.google_id', 'u.email', 'u.password', 'up.first_name', 'up.last_name').from('user AS u').leftJoin('auth_google AS ga', 'ga.user_id', 'u.id').leftJoin('user_profile AS up', 'up.user_id', 'u.id').where('ga.google_id', '=', id).orWhere('u.email', '=', email).first();

              case 3:
                _context12.t1 = _context12.sent;
                return _context12.abrupt('return', (0, _context12.t0)(_context12.t1));

              case 5:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getUserByGoogleIdOrEmail(_x15, _x16) {
        return _ref18.apply(this, arguments);
      }

      return getUserByGoogleIdOrEmail;
    }()
  }, {
    key: 'getUserByUsername',
    value: function () {
      var _ref19 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee13(username) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.t0 = __WEBPACK_IMPORTED_MODULE_5_humps__["camelizeKeys"];
                _context13.next = 3;
                return __WEBPACK_IMPORTED_MODULE_8__server_sql_connector__["a" /* default */].select('u.id', 'u.username', 'u.role', 'u.is_active', 'u.email', 'up.first_name', 'up.last_name').from('user AS u').where('u.username', '=', username).leftJoin('user_profile AS up', 'up.user_id', 'u.id').first();

              case 3:
                _context13.t1 = _context13.sent;
                return _context13.abrupt('return', (0, _context13.t0)(_context13.t1));

              case 5:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getUserByUsername(_x17) {
        return _ref19.apply(this, arguments);
      }

      return getUserByUsername;
    }()
  }]);

  return User;
}();



/***/ }),

/***/ "./src/server/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__("babel-runtime/core-js/get-iterator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors__ = __webpack_require__("cors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_universal_cookie_express__ = __webpack_require__("universal-cookie-express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_universal_cookie_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_universal_cookie_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_persisted_queries_json__ = __webpack_require__("./node_modules/persisted_queries.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_persisted_queries_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_persisted_queries_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules__ = __webpack_require__("./src/server/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__middleware_website__ = __webpack_require__("./src/server/middleware/website.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__middleware_graphiql__ = __webpack_require__("./src/server/middleware/graphiql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__middleware_graphql__ = __webpack_require__("./src/server/middleware/graphql.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__middleware_error__ = __webpack_require__("./src/server/middleware/error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__api_subscriptions__ = __webpack_require__("./src/server/api/subscriptions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__spinrc_json__ = __webpack_require__("./.spinrc.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__spinrc_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__spinrc_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_log__ = __webpack_require__("./src/common/log.js");










// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies, import/extensions











// eslint-disable-next-line import/no-mutable-exports
var server = void 0;

var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_11__modules__["a" /* default */].beforewares), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var applyBeforeware = _step.value;

    applyBeforeware(app);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

app.use(__WEBPACK_IMPORTED_MODULE_9_universal_cookie_express___default()());

var _url$parse = __WEBPACK_IMPORTED_MODULE_8_url___default.a.parse("http://localhost:8080/graphql"),
    port = _url$parse.port,
    pathname = _url$parse.pathname;

var serverPort = process.env.PORT || port || 8080;

// Don't rate limit heroku
app.enable('trust proxy');

var corsOptions = {
  credentials: true
};
app.use(__WEBPACK_IMPORTED_MODULE_3_cors___default()(corsOptions));

app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.json());

app.use('/', __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__WEBPACK_IMPORTED_MODULE_17__spinrc_json__["options"].frontendBuildDir, 'web'), {
  maxAge: '180 days'
}));

if (true) {
  app.use('/', __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_17__spinrc_json__["options"].dllBuildDir, { maxAge: '180 days' }));
}

if (false) {
  var invertedMap = invert(queryMap);

  app.use(pathname, function (req, resp, next) {
    if (isArray(req.body)) {
      req.body = req.body.map(function (body) {
        return _extends({
          query: invertedMap[body.id]
        }, body);
      });
      next();
    } else {
      if (!__DEV__ || (req.get('Referer') || '').indexOf('/graphiql') < 0) {
        resp.status(500).send('Unknown GraphQL query has been received, rejecting...');
      } else {
        next();
      }
    }
  });
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_11__modules__["a" /* default */].middlewares), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var applyMiddleware = _step2.value;

    applyMiddleware(app);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

if (true) {
  app.use('/servdir', function (req, res) {
    res.send(process.cwd() + __WEBPACK_IMPORTED_MODULE_5_path___default.a.sep);
  });
}
app.use(pathname, function () {
  return __WEBPACK_IMPORTED_MODULE_14__middleware_graphql__["default"].apply(undefined, arguments);
});
app.use('/graphiql', function () {
  return __WEBPACK_IMPORTED_MODULE_13__middleware_graphiql__["a" /* default */].apply(undefined, arguments);
});
app.use(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_12__middleware_website__["default"])(__WEBPACK_IMPORTED_MODULE_10_persisted_queries_json___default.a).apply(undefined, arguments);
});
if (true) {
  app.use(__WEBPACK_IMPORTED_MODULE_15__middleware_error__["a" /* default */]);
}

server = __WEBPACK_IMPORTED_MODULE_6_http___default.a.createServer(app);

Object(__WEBPACK_IMPORTED_MODULE_16__api_subscriptions__["default"])(server);

server.listen(serverPort, function () {
  __WEBPACK_IMPORTED_MODULE_18__common_log__["a" /* default */].info('API is now running on port ' + serverPort);
});

server.on('close', function () {
  server = undefined;
});

if (true) {
  module.hot.dispose(function () {
    try {
      if (server) {
        server.close();
      }
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_18__common_log__["a" /* default */])(error.stack);
    }
  });
  module.hot.accept(["./src/server/middleware/website.jsx", "./src/server/middleware/graphql.js"], function() { /* harmony import */ __WEBPACK_IMPORTED_MODULE_12__middleware_website__ = __webpack_require__("./src/server/middleware/website.jsx"); /* harmony import */ __WEBPACK_IMPORTED_MODULE_14__middleware_graphql__ = __webpack_require__("./src/server/middleware/graphql.js");  });
  module.hot.accept(["./src/server/api/subscriptions.js"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_16__api_subscriptions__ = __webpack_require__("./src/server/api/subscriptions.js"); (function () {
    try {
      Object(__WEBPACK_IMPORTED_MODULE_16__api_subscriptions__["default"])(server);
    } catch (error) {
      Object(__WEBPACK_IMPORTED_MODULE_18__common_log__["a" /* default */])(error.stack);
    }
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });

  module.hot.accept();
}

/* unused harmony default export */ var _unused_webpack_default_export = (server);

/***/ }),

/***/ "./src/server/sql/connector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knex__ = __webpack_require__("knex");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__knexdata__ = __webpack_require__("./knexdata.js");



// eslint-disable-next-line import/namespace
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_knex___default()(__WEBPACK_IMPORTED_MODULE_1__knexdata__["development"]));

/***/ }),

/***/ "./src/server/sql/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export truncateTables */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderedFor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("./settings.js");



var _this = this;




var truncateTables = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(knex, Promise, tables) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].db.dbType === 'sqlite' || "development" === 'test')) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', Promise.all(tables.map(function (table) {
              return knex(table).truncate();
            })));

          case 4:
            if (!(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].db.dbType === 'mysql')) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt('return', knex.transaction(function () {
              var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(trx) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return knex.raw('SET FOREIGN_KEY_CHECKS=0').transacting(trx);

                      case 2:
                        _context.next = 4;
                        return Promise.all(tables.map(function (table) {
                          return knex.raw('TRUNCATE TABLE ' + table).transacting(trx);
                        }));

                      case 4:
                        _context.next = 6;
                        return trx.commit;

                      case 6:
                        _context.next = 8;
                        return knex.raw('SET FOREIGN_KEY_CHECKS=1').transacting(trx);

                      case 8:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 8:
            if (!(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* default */].db.dbType === 'pg')) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt('return', Promise.all(tables.map(function (table) {
              return knex.raw('TRUNCATE "' + table + '" RESTART IDENTITY CASCADE');
            })));

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function truncateTables(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var orderedFor = function orderedFor(rows, collection, field, singleObject) {
  // return the rows ordered for the collection
  var inGroupsOfField = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["groupBy"])(rows, field);
  return collection.map(function (element) {
    var elementArray = inGroupsOfField[element];
    if (elementArray) {
      return singleObject ? elementArray[0] : elementArray;
    }
    return singleObject ? {} : [];
  });
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("raf/polyfill");
__webpack_require__("./node_modules/babel-polyfill/lib/index.js");
__webpack_require__("./node_modules/webpack/hot/signal.js");
module.exports = __webpack_require__("./src/server/index.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-engine":
/***/ (function(module, exports) {

module.exports = require("apollo-engine");

/***/ }),

/***/ "apollo-fetch":
/***/ (function(module, exports) {

module.exports = require("apollo-fetch");

/***/ }),

/***/ "apollo-fetch-upload":
/***/ (function(module, exports) {

module.exports = require("apollo-fetch-upload");

/***/ }),

/***/ "apollo-link":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-batch-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-batch-http");

/***/ }),

/***/ "apollo-logger":
/***/ (function(module, exports) {

module.exports = require("apollo-logger");

/***/ }),

/***/ "apollo-server-express":
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "apollo-upload-server":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-server");

/***/ }),

/***/ "babel-runtime/core-js/get-iterator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-own-property-names":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-names");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "babel-runtime/helpers/typeof":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "bcryptjs":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/fn/regexp/escape":
/***/ (function(module, exports) {

module.exports = require("core-js/fn/regexp/escape");

/***/ }),

/***/ "core-js/shim":
/***/ (function(module, exports) {

module.exports = require("core-js/shim");

/***/ }),

/***/ "cors":
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dataloader":
/***/ (function(module, exports) {

module.exports = require("dataloader");

/***/ }),

/***/ "dotenv/config":
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql":
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-auth":
/***/ (function(module, exports) {

module.exports = require("graphql-auth");

/***/ }),

/***/ "graphql-iso-date":
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),

/***/ "graphql-subscriptions":
/***/ (function(module, exports) {

module.exports = require("graphql-subscriptions");

/***/ }),

/***/ "graphql-tools":
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "humps":
/***/ (function(module, exports) {

module.exports = require("humps");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "jsonwebtoken":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "knex":
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "minilog":
/***/ (function(module, exports) {

module.exports = require("minilog");

/***/ }),

/***/ "nodemailer":
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport":
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-facebook":
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),

/***/ "passport-google-oauth":
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "performance-now":
/***/ (function(module, exports) {

module.exports = require("performance-now");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "raf/polyfill":
/***/ (function(module, exports) {

module.exports = require("raf/polyfill");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-chartjs-2":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-native":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-redux":
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "reactstrap/lib/utils":
/***/ (function(module, exports) {

module.exports = require("reactstrap/lib/utils");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension/developmentOnly":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "redux-form":
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "regenerator-runtime/runtime":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "serialize-javascript":
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "shelljs":
/***/ (function(module, exports) {

module.exports = require("shelljs");

/***/ }),

/***/ "stripe":
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),

/***/ "stripe-local":
/***/ (function(module, exports) {

module.exports = require("stripe-local");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "subscriptions-transport-ws":
/***/ (function(module, exports) {

module.exports = require("subscriptions-transport-ws");

/***/ }),

/***/ "universal-cookie-express":
/***/ (function(module, exports) {

module.exports = require("universal-cookie-express");

/***/ }),

/***/ "url":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.9a2fa967628888fb7a09.js.map