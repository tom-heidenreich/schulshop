"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout/update/[id]";
exports.ids = ["pages/api/checkout/update/[id]"];
exports.modules = {

/***/ "biguint-format":
/*!*********************************!*\
  !*** external "biguint-format" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("biguint-format");

/***/ }),

/***/ "flake-idgen":
/*!******************************!*\
  !*** external "flake-idgen" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("flake-idgen");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redis");

/***/ }),

/***/ "./backend/apiError.js":
/*!*****************************!*\
  !*** ./backend/apiError.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ApiError)\n/* harmony export */ });\nclass ApiError extends Error {\n    constructor(msg, status = 400){\n        super(msg);\n        this.msg = msg;\n        this.status = status;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrZW5kL2FwaUVycm9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxRQUFRLFNBQVNDLEtBQUs7Z0JBQzNCQyxHQUFHLEVBQUVDLE1BQU0sR0FBQyxHQUFHLENBQUUsQ0FBQztRQUMxQixLQUFLLENBQUNELEdBQUc7UUFDVCxJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2h1bHNob3AvLi9iYWNrZW5kL2FwaUVycm9yLmpzPzM5MWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2csIHN0YXR1cz00MDApIHtcclxuICAgICAgICBzdXBlcihtc2cpO1xyXG4gICAgICAgIHRoaXMubXNnID0gbXNnO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkFwaUVycm9yIiwiRXJyb3IiLCJtc2ciLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./backend/apiError.js\n");

/***/ }),

/***/ "./backend/logger.js":
/*!***************************!*\
  !*** ./backend/logger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LogClient)\n/* harmony export */ });\nclass LogClient {\n    constructor(name){\n        this.name = name;\n    }\n    static register(name) {\n        return new LogClient(name);\n    }\n    log(msg) {\n        const now = new Date();\n        console.log(`[\\x1b[36m${now.getDate()}.${now.getMonth()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}\\x1b[0m] [\\x1b[32m${this.name}\\x1b[0m] ${msg}`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWNrZW5kL2xvZ2dlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsU0FBUztnQkFDZEMsSUFBSSxDQUFFLENBQUM7UUFDZixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQixDQUFDO1dBQ01DLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDQyxJQUFJO0lBQzdCLENBQUM7SUFDREUsR0FBRyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztRQUNOLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEdBQUcsQ0FBQ0MsSUFBSTtRQUNwQkMsT0FBTyxDQUFDSixHQUFHLEVBQUUsU0FBUyxFQUFFRSxHQUFHLENBQUNHLE9BQU8sR0FBRyxDQUFDLEVBQUVILEdBQUcsQ0FBQ0ksUUFBUSxHQUFHLENBQUMsRUFBRUosR0FBRyxDQUFDSyxRQUFRLEdBQUcsQ0FBQyxFQUFFTCxHQUFHLENBQUNNLFVBQVUsR0FBRyxDQUFDLEVBQUVOLEdBQUcsQ0FBQ08sVUFBVSxHQUFHLGtCQUFrQixFQUFFLElBQUksQ0FBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRUcsR0FBRztJQUNsSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NodWxzaG9wLy4vYmFja2VuZC9sb2dnZXIuanM/MmYwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dDbGllbnQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgIH1cclxuICAgIHN0YXRpYyByZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMb2dDbGllbnQobmFtZSlcclxuICAgIH1cclxuICAgIGxvZyhtc2cpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbXFx4MWJbMzZtJHtub3cuZ2V0RGF0ZSgpfS4ke25vdy5nZXRNb250aCgpfSAke25vdy5nZXRIb3VycygpfToke25vdy5nZXRNaW51dGVzKCl9OiR7bm93LmdldFNlY29uZHMoKX1cXHgxYlswbV0gW1xceDFiWzMybSR7dGhpcy5uYW1lfVxceDFiWzBtXSAke21zZ31gKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJMb2dDbGllbnQiLCJuYW1lIiwicmVnaXN0ZXIiLCJsb2ciLCJtc2ciLCJub3ciLCJEYXRlIiwiY29uc29sZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./backend/logger.js\n");

/***/ }),

/***/ "./backend/sessions.js":
/*!*****************************!*\
  !*** ./backend/sessions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var biguint_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! biguint-format */ \"biguint-format\");\n/* harmony import */ var biguint_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(biguint_format__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var flake_idgen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flake-idgen */ \"flake-idgen\");\n/* harmony import */ var flake_idgen__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flake_idgen__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apiError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiError */ \"./backend/apiError.js\");\n/* harmony import */ var _backend_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backend/logger */ \"./backend/logger.js\");\n\n\n\n\n\nconst logClient = _backend_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"].register('SessionManager');\nconst flake = new (flake_idgen__WEBPACK_IMPORTED_MODULE_2___default())();\nconst production = process.env['PRODUCTION'] === 'TRUE';\nfunction connectClient() {\n    return new Promise(async (resolve)=>{\n        const client = production ? (0,redis__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n            \"url\": \"redis://redis:6379\"\n        }) : (0,redis__WEBPACK_IMPORTED_MODULE_0__.createClient)();\n        client.on('error', (err)=>{\n            logClient.log('Failed to connect to redis!');\n        });\n        client.on('ready', ()=>{\n            resolve(client);\n        });\n        await client.connect();\n    });\n}\nconnectClient();\nfunction findAllSessions() {\n    return new Promise(async (resolve)=>{\n        const client = await connectClient();\n        const result = [];\n        for await (const key1 of client.scanIterator()){\n            const value = await client.get(key1);\n            if (value.type === 'session') result.push(value);\n        }\n        resolve(result);\n    });\n}\nfunction removeSession(id) {\n    if (!id) return new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"no ID given!\");\n    return new Promise(async (resolve)=>{\n        const client = await connectClient();\n        const value = await client.get(id);\n        await client.del(id);\n        await client.del(key(value.ip));\n        logClient.log(`Deleted Session ${id}!`);\n        resolve();\n    });\n}\nfunction setSessionState(id, state) {\n    if (!id) return new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"no ID given!\");\n    if (state !== 'pending' || state !== 'completed' || state !== 'canceled') return new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](`unknown state '${state}'!`);\n    return new Promise(async (resolve)=>{\n        const client = await connectClient();\n        const value = await client.get(id);\n        const previous = value.state;\n        value.state = state;\n        var date = new Date();\n        date.setHours(date.getHours() + 1);\n        value.expireIn = date;\n        await client.set(id, value);\n        logClient.log(`Session state of ${id} changed from '${previous}' to '${state}'!`);\n        resolve();\n    });\n}\nfunction updateSession(id, products) {\n    if (!id) return new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"no ID given!\");\n    if (!products) return new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"no products given!\");\n    return new Promise(async (resolve)=>{\n        const client = await connectClient();\n        const res = await client.get(id);\n        if (!res) return resolve(new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"session not found!\"));\n        const value = JSON.parse(res);\n        value.products = products;\n        var date = new Date();\n        date.setHours(date.getHours() + 1);\n        value.expireIn = date;\n        await client.set(id, JSON.stringify(value));\n        logClient.log(`Changed products of Session ${id}!`);\n        resolve();\n    });\n}\nfunction createSession(ip) {\n    if (!ip) return new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"no IP given!\");\n    return new Promise(async (resolve)=>{\n        const client = await connectClient();\n        const ipDataRaw = await client.get(key(ip));\n        if (ipDataRaw) {\n            const ipData = JSON.parse(ipDataRaw);\n            const session = await client.get(ipData.sessionId);\n            if (session) {\n                logClient.log(`User '${ipData.username}' connected to session ${ipData.sessionId}!`);\n                return resolve({\n                    \"sessionId\": ipData.sessionId\n                });\n            }\n        }\n        const sessionId = biguint_format__WEBPACK_IMPORTED_MODULE_1___default()(flake.next(), 'dec');\n        const now = new Date();\n        const expired = new Date();\n        expired.setHours(expired.getHours() + 1);\n        await client.set(sessionId, JSON.stringify({\n            \"created\": now,\n            \"expireIn\": expired,\n            \"ip\": ip,\n            \"state\": \"pending\",\n            \"products\": [],\n            \"type\": \"session\"\n        }));\n        await client.set(key(ip), JSON.stringify({\n            \"sessionId\": sessionId,\n            \"type\": \"user\",\n            \"username\": key(ip)\n        }));\n        logClient.log(`Session created by ${key(ip)}. ID: ${sessionId}`);\n        resolve({\n            \"sessionId\": sessionId,\n            \"type\": \"user\",\n            \"username\": key(ip)\n        });\n    });\n}\nfunction collectExpiredSessions() {}\nfunction getSession(id) {\n    if (!id) return new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"no ID given!\");\n    return new Promise(async (resolve)=>{\n        const client = await connectClient();\n        const value = await client.get(id);\n        if (!value) return resolve(new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"session not found!\"));\n        resolve(JSON.parse(value));\n    });\n}\nfunction key(ip) {\n    return `ip${ip.replaceAll('.', '').replaceAll(':', '')}`;\n}\nconst sessions = {\n    \"connect\": connectClient,\n    \"create\": createSession,\n    \"findAll\": findAllSessions,\n    \"setState\": setSessionState,\n    \"kill\": removeSession,\n    \"collectExpired\": collectExpiredSessions,\n    \"update\": updateSession,\n    \"get\": getSession,\n    \"timedTask\": class {\n        constructor(task, time = 5000){\n            this.task = task;\n            this.time = time;\n        }\n        start() {\n            return new Promise(async (resolve)=>{\n                this.worker = setTimeout(()=>{\n                    clearTimeout(this.worker);\n                    resolve(new _apiError__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Timed out!', 504));\n                }, this.time);\n                const taskResult = await this.task();\n                resolve(taskResult);\n            });\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWYsYUFBYTtJQUN2QixDQUFLLE1BQUVnQixVQUFVO0lBQ2pCLENBQVc7b0JBQ0tHLElBQUksRUFBRUMsSUFBSSxHQUFDLElBQUksQ0FBRSxDQUFDO1lBQzFCLElBQUksQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO1lBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO1FBQ3BCLENBQUM7UUFDREMsS0FBSyxHQUFHLENBQUM7WUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDakQsT0FBTyxRQUFPQyxPQUFPLEdBQUksQ0FBQztnQkFDakMsSUFBSSxDQUFDaUQsTUFBTSxHQUFHQyxVQUFVLEtBQU8sQ0FBQztvQkFDNUJDLFlBQVksQ0FBQyxJQUFJLENBQUNGLE1BQU07b0JBQ3hCakQsT0FBTyxDQUFDLEdBQUcsQ0FBQ1YsaURBQVEsQ0FBQyxDQUFZLGFBQUUsR0FBRztnQkFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQ3lELElBQUk7Z0JBQ1osS0FBSyxDQUFDSyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQ04sSUFBSTtnQkFDbEM5QyxPQUFPLENBQUNvRCxVQUFVO1lBQ3RCLENBQUM7UUFDTCxDQUFDOztBQUVULENBQUM7QUFDRCxpRUFBZVAsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NodWxzaG9wLy4vYmFja2VuZC9zZXNzaW9ucy5qcz8xZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ2xpZW50fSBmcm9tICdyZWRpcyc7XHJcblxyXG5pbXBvcnQgaW50Zm9ybWF0IGZyb20gJ2JpZ3VpbnQtZm9ybWF0JztcclxuaW1wb3J0IEZsYWtlSWQgZnJvbSAnZmxha2UtaWRnZW4nO1xyXG5cclxuaW1wb3J0IEFwaUVycm9yIGZyb20gJy4vYXBpRXJyb3InO1xyXG5cclxuaW1wb3J0IExvZ0NsaWVudCBmcm9tICcuLi9iYWNrZW5kL2xvZ2dlcidcclxuY29uc3QgbG9nQ2xpZW50ID0gTG9nQ2xpZW50LnJlZ2lzdGVyKCdTZXNzaW9uTWFuYWdlcicpO1xyXG5cclxuY29uc3QgZmxha2UgPSBuZXcgRmxha2VJZCgpO1xyXG5cclxuY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52WydQUk9EVUNUSU9OJ10gPT09ICdUUlVFJztcclxuXHJcbmZ1bmN0aW9uIGNvbm5lY3RDbGllbnQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gcHJvZHVjdGlvbiA/IGNyZWF0ZUNsaWVudCh7XCJ1cmxcIjogXCJyZWRpczovL3JlZGlzOjYzNzlcIn0pIDogY3JlYXRlQ2xpZW50KCk7XHJcbiAgICAgICAgY2xpZW50Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgbG9nQ2xpZW50LmxvZygnRmFpbGVkIHRvIGNvbm5lY3QgdG8gcmVkaXMhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2xpZW50Lm9uKCdyZWFkeScsICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShjbGllbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICB9KVxyXG59XHJcbmNvbm5lY3RDbGllbnQoKVxyXG5cclxuZnVuY3Rpb24gZmluZEFsbFNlc3Npb25zKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RDbGllbnQoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXVxyXG4gICAgICAgIGZvciBhd2FpdChjb25zdCBrZXkgb2YgY2xpZW50LnNjYW5JdGVyYXRvcigpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY2xpZW50LmdldChrZXkpXHJcbiAgICAgICAgICAgIGlmKHZhbHVlLnR5cGUgPT09ICdzZXNzaW9uJykgcmVzdWx0LnB1c2godmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmUocmVzdWx0KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU2Vzc2lvbihpZCkge1xyXG4gICAgaWYoIWlkKSByZXR1cm4gbmV3IEFwaUVycm9yKFwibm8gSUQgZ2l2ZW4hXCIpXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdENsaWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY2xpZW50LmdldChpZClcclxuICAgICAgICBhd2FpdCBjbGllbnQuZGVsKGlkKVxyXG4gICAgICAgIGF3YWl0IGNsaWVudC5kZWwoa2V5KHZhbHVlLmlwKSlcclxuICAgICAgICBsb2dDbGllbnQubG9nKGBEZWxldGVkIFNlc3Npb24gJHtpZH0hYCk7XHJcbiAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTZXNzaW9uU3RhdGUoaWQsIHN0YXRlKSB7XHJcbiAgICBpZighaWQpIHJldHVybiBuZXcgQXBpRXJyb3IoXCJubyBJRCBnaXZlbiFcIilcclxuICAgIGlmKHN0YXRlICE9PSAncGVuZGluZycgfHwgc3RhdGUgIT09ICdjb21wbGV0ZWQnIHx8IHN0YXRlICE9PSAnY2FuY2VsZWQnKSByZXR1cm4gbmV3IEFwaUVycm9yKGB1bmtub3duIHN0YXRlICcke3N0YXRlfSchYClcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0Q2xpZW50KCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjbGllbnQuZ2V0KGlkKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91cyA9IHZhbHVlLnN0YXRlXHJcbiAgICAgICAgdmFsdWUuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAxKVxyXG4gICAgICAgIHZhbHVlLmV4cGlyZUluID0gZGF0ZTtcclxuICAgICAgICBhd2FpdCBjbGllbnQuc2V0KGlkLCB2YWx1ZSk7XHJcbiAgICAgICAgbG9nQ2xpZW50LmxvZyhgU2Vzc2lvbiBzdGF0ZSBvZiAke2lkfSBjaGFuZ2VkIGZyb20gJyR7cHJldmlvdXN9JyB0byAnJHtzdGF0ZX0nIWApO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQsIHByb2R1Y3RzKSB7XHJcbiAgICBpZighaWQpIHJldHVybiBuZXcgQXBpRXJyb3IoXCJubyBJRCBnaXZlbiFcIilcclxuICAgIGlmKCFwcm9kdWN0cykgcmV0dXJuIG5ldyBBcGlFcnJvcihcIm5vIHByb2R1Y3RzIGdpdmVuIVwiKVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RDbGllbnQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuZ2V0KGlkKTtcclxuICAgICAgICBpZighcmVzKSByZXR1cm4gcmVzb2x2ZShuZXcgQXBpRXJyb3IoXCJzZXNzaW9uIG5vdCBmb3VuZCFcIikpXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgICAgdmFsdWUucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAxKVxyXG4gICAgICAgIHZhbHVlLmV4cGlyZUluID0gZGF0ZTtcclxuICAgICAgICBhd2FpdCBjbGllbnQuc2V0KGlkLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIGxvZ0NsaWVudC5sb2coYENoYW5nZWQgcHJvZHVjdHMgb2YgU2Vzc2lvbiAke2lkfSFgKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGlwKSB7XHJcbiAgICBpZighaXApIHJldHVybiBuZXcgQXBpRXJyb3IoXCJubyBJUCBnaXZlbiFcIilcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0Q2xpZW50KCk7XHJcbiAgICAgICAgY29uc3QgaXBEYXRhUmF3ID0gYXdhaXQgY2xpZW50LmdldChrZXkoaXApKTtcclxuICAgICAgICBpZihpcERhdGFSYXcpIHtcclxuICAgICAgICAgICAgY29uc3QgaXBEYXRhID0gSlNPTi5wYXJzZShpcERhdGFSYXcpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgY2xpZW50LmdldChpcERhdGEuc2Vzc2lvbklkKTtcclxuICAgICAgICAgICAgaWYoc2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgbG9nQ2xpZW50LmxvZyhgVXNlciAnJHtpcERhdGEudXNlcm5hbWV9JyBjb25uZWN0ZWQgdG8gc2Vzc2lvbiAke2lwRGF0YS5zZXNzaW9uSWR9IWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7XCJzZXNzaW9uSWRcIjogaXBEYXRhLnNlc3Npb25JZH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gaW50Zm9ybWF0KGZsYWtlLm5leHQoKSwgJ2RlYycpO1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgICAgICBjb25zdCBleHBpcmVkID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGV4cGlyZWQuc2V0SG91cnMoZXhwaXJlZC5nZXRIb3VycygpICsgMSlcclxuICAgICAgICBhd2FpdCBjbGllbnQuc2V0KHNlc3Npb25JZCwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBcImNyZWF0ZWRcIjogbm93LFxyXG4gICAgICAgICAgICBcImV4cGlyZUluXCI6IGV4cGlyZWQsXHJcbiAgICAgICAgICAgIFwiaXBcIjogaXAsXHJcbiAgICAgICAgICAgIFwic3RhdGVcIjogXCJwZW5kaW5nXCIsXHJcbiAgICAgICAgICAgIFwicHJvZHVjdHNcIjogW10sXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInNlc3Npb25cIlxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBhd2FpdCBjbGllbnQuc2V0KGtleShpcCksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgXCJzZXNzaW9uSWRcIjogc2Vzc2lvbklkLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJ1c2VyXCIsXHJcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjoga2V5KGlwKVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBsb2dDbGllbnQubG9nKGBTZXNzaW9uIGNyZWF0ZWQgYnkgJHtrZXkoaXApfS4gSUQ6ICR7c2Vzc2lvbklkfWApO1xyXG4gICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICBcInNlc3Npb25JZFwiOiBzZXNzaW9uSWQsXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInVzZXJcIixcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBrZXkoaXApXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RFeHBpcmVkU2Vzc2lvbnMoKSB7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZXNzaW9uKGlkKSB7XHJcbiAgICBpZighaWQpIHJldHVybiBuZXcgQXBpRXJyb3IoXCJubyBJRCBnaXZlbiFcIilcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0Q2xpZW50KCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjbGllbnQuZ2V0KGlkKTtcclxuICAgICAgICBpZighdmFsdWUpIHJldHVybiByZXNvbHZlKG5ldyBBcGlFcnJvcihcInNlc3Npb24gbm90IGZvdW5kIVwiKSlcclxuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodmFsdWUpKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleShpcCkge1xyXG4gICAgcmV0dXJuIGBpcCR7aXAucmVwbGFjZUFsbCgnLicsICcnKS5yZXBsYWNlQWxsKCc6JywgJycpfWBcclxufVxyXG5cclxuY29uc3Qgc2Vzc2lvbnMgPSB7XHJcbiAgICBcImNvbm5lY3RcIjogY29ubmVjdENsaWVudCxcclxuICAgIFwiY3JlYXRlXCI6IGNyZWF0ZVNlc3Npb24sXHJcbiAgICBcImZpbmRBbGxcIjogZmluZEFsbFNlc3Npb25zLFxyXG4gICAgXCJzZXRTdGF0ZVwiOiBzZXRTZXNzaW9uU3RhdGUsXHJcbiAgICBcImtpbGxcIjogcmVtb3ZlU2Vzc2lvbixcclxuICAgIFwiY29sbGVjdEV4cGlyZWRcIjogY29sbGVjdEV4cGlyZWRTZXNzaW9ucyxcclxuICAgIFwidXBkYXRlXCI6IHVwZGF0ZVNlc3Npb24sXHJcbiAgICBcImdldFwiOiBnZXRTZXNzaW9uLFxyXG4gICAgXCJ0aW1lZFRhc2tcIjogY2xhc3Mge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRhc2ssIHRpbWU9NTAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JrZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy53b3JrZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgQXBpRXJyb3IoJ1RpbWVkIG91dCEnLCA1MDQpKVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tSZXN1bHQgPSBhd2FpdCB0aGlzLnRhc2soKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXNrUmVzdWx0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImludGZvcm1hdCIsIkZsYWtlSWQiLCJBcGlFcnJvciIsIkxvZ0NsaWVudCIsImxvZ0NsaWVudCIsInJlZ2lzdGVyIiwiZmxha2UiLCJwcm9kdWN0aW9uIiwicHJvY2VzcyIsImVudiIsImNvbm5lY3RDbGllbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNsaWVudCIsIm9uIiwiZXJyIiwibG9nIiwiY29ubmVjdCIsImZpbmRBbGxTZXNzaW9ucyIsInJlc3VsdCIsImtleSIsInNjYW5JdGVyYXRvciIsInZhbHVlIiwiZ2V0IiwidHlwZSIsInB1c2giLCJyZW1vdmVTZXNzaW9uIiwiaWQiLCJkZWwiLCJpcCIsInNldFNlc3Npb25TdGF0ZSIsInN0YXRlIiwicHJldmlvdXMiLCJkYXRlIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJleHBpcmVJbiIsInNldCIsInVwZGF0ZVNlc3Npb24iLCJwcm9kdWN0cyIsInJlcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNyZWF0ZVNlc3Npb24iLCJpcERhdGFSYXciLCJpcERhdGEiLCJzZXNzaW9uIiwic2Vzc2lvbklkIiwidXNlcm5hbWUiLCJuZXh0Iiwibm93IiwiZXhwaXJlZCIsImNvbGxlY3RFeHBpcmVkU2Vzc2lvbnMiLCJnZXRTZXNzaW9uIiwicmVwbGFjZUFsbCIsInNlc3Npb25zIiwidGFzayIsInRpbWUiLCJzdGFydCIsIndvcmtlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ0YXNrUmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./backend/sessions.js\n");

/***/ }),

/***/ "./pages/api/checkout/update/[id].js":
/*!*******************************************!*\
  !*** ./pages/api/checkout/update/[id].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _backend_sessions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../backend/sessions */ \"./backend/sessions.js\");\n\nasync function handler(req, res) {\n    if (req.method === 'PUT') {\n        const { id  } = req.query;\n        const body = JSON.parse(req.body);\n        const session = await new _backend_sessions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timedTask(()=>{\n            return _backend_sessions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update(id, body.products);\n        }, 5000).start();\n        if (session instanceof Error) return res.status(session.status).json({\n            \"error\": session.message\n        });\n        res.json(session);\n    } else {\n        res.status(400).end();\n    }\n}; // /api/checkout/update/123\n // body: \n // {\n //    \"products\": [\"1\", \"2\", \"3\"]\n //}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hlY2tvdXQvdXBkYXRlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQ7QUFFcEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEVBQUUsRUFBQ0QsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDdEIsS0FBSyxDQUFDLENBQUNDLENBQUFBLEVBQUUsR0FBQyxHQUFHSCxHQUFHLENBQUNJLEtBQUs7UUFDdEIsS0FBSyxDQUFDQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUCxHQUFHLENBQUNLLElBQUk7UUFDaEMsS0FBSyxDQUFDRyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQ1YsbUVBQWtCLEtBQU8sQ0FBQztZQUNoRCxNQUFNLENBQUNBLGdFQUFlLENBQUNLLEVBQUUsRUFBRUUsSUFBSSxDQUFDTSxRQUFRO1FBQzVDLENBQUMsRUFBRSxJQUFJLEVBQUVDLEtBQUs7UUFDZCxFQUFFLEVBQUNKLE9BQU8sWUFBWUssS0FBSyxFQUFFLE1BQU0sQ0FBQ1osR0FBRyxDQUFDYSxNQUFNLENBQUNOLE9BQU8sQ0FBQ00sTUFBTSxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFBLENBQU8sUUFBRVAsT0FBTyxDQUFDUSxPQUFPO1FBQUEsQ0FBQztRQUM5RmYsR0FBRyxDQUFDYyxJQUFJLENBQUNQLE9BQU87SUFDcEIsQ0FBQyxNQUFLLENBQUM7UUFDSFAsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxFQUFFRyxHQUFHO0lBQ3ZCLENBQUM7QUFDTCxDQUFDLENBRUQsQ0FBMkI7QUFDM0IsQ0FBUztBQUNULENBQUk7QUFDSixDQUFpQztBQUNqQyxDQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2NodWxzaG9wLy4vcGFnZXMvYXBpL2NoZWNrb3V0L3VwZGF0ZS9baWRdLmpzP2UxZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlc3Npb25zIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvc2Vzc2lvbnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kID09PSAnUFVUJykge1xyXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucXVlcnk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBuZXcgc2Vzc2lvbnMudGltZWRUYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25zLnVwZGF0ZShpZCwgYm9keS5wcm9kdWN0cylcclxuICAgICAgICB9LCA1MDAwKS5zdGFydCgpO1xyXG4gICAgICAgIGlmKHNlc3Npb24gaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHJlcy5zdGF0dXMoc2Vzc2lvbi5zdGF0dXMpLmpzb24oe1wiZXJyb3JcIjogc2Vzc2lvbi5tZXNzYWdlfSk7XHJcbiAgICAgICAgcmVzLmpzb24oc2Vzc2lvbilcclxuICAgIH1lbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuZW5kKClcclxuICAgIH1cclxufVxyXG5cclxuLy8gL2FwaS9jaGVja291dC91cGRhdGUvMTIzXHJcbi8vIGJvZHk6IFxyXG4vLyB7XHJcbi8vICAgIFwicHJvZHVjdHNcIjogW1wiMVwiLCBcIjJcIiwgXCIzXCJdXHJcbi8vfSJdLCJuYW1lcyI6WyJzZXNzaW9ucyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZCIsInF1ZXJ5IiwiYm9keSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb24iLCJ0aW1lZFRhc2siLCJ1cGRhdGUiLCJwcm9kdWN0cyIsInN0YXJ0IiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/checkout/update/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/checkout/update/[id].js"));
module.exports = __webpack_exports__;

})();