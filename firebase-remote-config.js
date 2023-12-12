import{registerVersion as t,_registerComponent as e,_getProvider as n,getApp as s,SDK_VERSION as r}from"firebase-app.js";function a(){try{return"object"==typeof indexedDB}catch(t){return!1}}class i extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,o.prototype.create)}}class o{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],a=r?function(t,e){return t.replace(c,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new i(s,o,n)}}const c=/\{\$([^}]+)}/g;function u(t,e=1e3,n=2){const s=e*Math.pow(n,t),r=Math.round(.5*s*(Math.random()-.5)*2);return Math.min(144e5,s+r)}function l(t){return t&&t._delegate?t._delegate:t}class g{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}var h;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(h||(h={}));const f={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},d=h.INFO,p={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},m=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=p[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class w{constructor(t){this.name=t,this._logLevel=d,this._logHandler=m,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?f[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}let v,_;const y=new WeakMap,b=new WeakMap,E=new WeakMap,S=new WeakMap,I=new WeakMap;let C={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return b.get(t);if("objectStoreNames"===e)return t.objectStoreNames||E.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return M(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function T(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(_||(_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(D(this),e),M(y.get(this))}:function(...e){return M(t.apply(D(this),e))}:function(e,...n){const s=t.call(D(this),e,...n);return E.set(s,e.sort?e.sort():[e]),M(s)}}function L(t){return"function"==typeof t?T(t):(t instanceof IDBTransaction&&function(t){if(b.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},r=()=>{e(),s()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)}));b.set(t,e)}(t),e=t,(v||(v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,C):t);var e}function M(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},r=()=>{e(M(t.result)),s()},a=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&y.set(e,t)})).catch((()=>{})),I.set(e,t),e}(t);if(S.has(t))return S.get(t);const e=L(t);return e!==t&&(S.set(t,e),I.set(e,t)),e}const D=t=>I.get(t);const k=["get","getKey","getAll","getAllKeys","count"],F=["put","add","delete","clear"],P=new Map;function O(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(P.get(e))return P.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=F.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!k.includes(n))return;const a=async function(t,...e){const a=this.transaction(t,r?"readwrite":"readonly");let i=a.store;return s&&(i=i.index(e.shift())),(await Promise.all([i[n](...e),r&&a.done]))[0]};return P.set(e,a),a}C=(t=>({...t,get:(e,n,s)=>O(e,n)||t.get(e,n,s),has:(e,n)=>!!O(e,n)||t.has(e,n)}))(C);const N="@firebase/installations",j=new o("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function R(t){return t instanceof i&&t.code.includes("request-failed")}function A({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function B(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function $(t,e){const n=(await e.json()).error;return j.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function H({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function x(t,{refreshToken:e}){const n=H(t);return n.append("Authorization",function(t){return`FIS_v2 ${t}`}(e)),n}async function q(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K(t){return new Promise((e=>{setTimeout(e,t)}))}const U=/^[cdef][\w-]{21}$/;function V(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}(t);return U.test(e)?e:""}catch(t){return""}}function z(t){return`${t.appName}!${t.appId}`}const G=new Map;function W(t,e){const n=z(t);J(n,e),function(t,e){const n=function(){!Y&&"BroadcastChannel"in self&&(Y=new BroadcastChannel("[Firebase] FID Change"),Y.onmessage=t=>{J(t.data.key,t.data.fid)});return Y}();n&&n.postMessage({key:t,fid:e});0===G.size&&Y&&(Y.close(),Y=null)}(n,e)}function J(t,e){const n=G.get(t);if(n)for(const t of n)t(e)}let Y=null;const Z="firebase-installations-store";let Q=null;function X(){return Q||(Q=function(t,e,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const i=indexedDB.open(t,e),o=M(i);return s&&i.addEventListener("upgradeneeded",(t=>{s(M(i.result),t.oldVersion,t.newVersion,M(i.transaction))})),n&&i.addEventListener("blocked",(()=>n())),o.then((t=>{a&&t.addEventListener("close",(()=>a())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Z)}})),Q}async function tt(t,e){const n=z(t),s=(await X()).transaction(Z,"readwrite"),r=s.objectStore(Z),a=await r.get(n);return await r.put(e,n),await s.done,a&&a.fid===e.fid||W(t,e.fid),e}async function et(t){const e=z(t),n=(await X()).transaction(Z,"readwrite");await n.objectStore(Z).delete(e),await n.done}async function nt(t,e){const n=z(t),s=(await X()).transaction(Z,"readwrite"),r=s.objectStore(Z),a=await r.get(n),i=e(a);return void 0===i?await r.delete(n):await r.put(i,n),await s.done,!i||a&&a.fid===i.fid||W(t,i.fid),i}async function st(t){let e;const n=await nt(t.appConfig,(n=>{const s=function(t){return it(t||{fid:V(),registrationStatus:0})}(n),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(j.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=A(t),r=H(t),a=e.getImmediate({optional:!0});if(a){const t=await a.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const i={fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.6.0"},o={method:"POST",headers:r,body:JSON.stringify(i)},c=await q((()=>fetch(s,o)));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:B(t.authToken)}}throw await $("Create Installation",c)}(t,e);return tt(t.appConfig,n)}catch(n){throw R(n)&&409===n.customData.serverCode?await et(t.appConfig):await tt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:s}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:rt(t)}:{installationEntry:e}}(t,s);return e=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function rt(t){let e=await at(t.appConfig);for(;1===e.registrationStatus;)await K(100),e=await at(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await st(t);return n||e}return e}function at(t){return nt(t,(t=>{if(!t)throw j.create("installation-not-found");return it(t)}))}function it(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}async function ot({appConfig:t,heartbeatServiceProvider:e},n){const s=function(t,{fid:e}){return`${A(t)}/${e}/authTokens:generate`}(t,n),r=x(t,n),a=e.getImmediate({optional:!0});if(a){const t=await a.getHeartbeatsHeader();t&&r.append("x-firebase-client",t)}const i={installation:{sdkVersion:"w:0.6.0",appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(i)},c=await q((()=>fetch(s,o)));if(c.ok){return B(await c.json())}throw await $("Generate Auth Token",c)}async function ct(t,e=!1){let n;const s=await nt(t.appConfig,(s=>{if(!lt(s))throw j.create("not-registered");const r=s.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(r))return s;if(1===r.requestStatus)return n=async function(t,e){let n=await ut(t.appConfig);for(;1===n.authToken.requestStatus;)await K(100),n=await ut(t.appConfig);const s=n.authToken;return 0===s.requestStatus?ct(t,e):s}(t,e),s;{if(!navigator.onLine)throw j.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(s);return n=async function(t,e){try{const n=await ot(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await tt(t.appConfig,s),n}catch(n){if(!R(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await tt(t.appConfig,n)}else await et(t.appConfig);throw n}}(t,e),e}}));return n?await n:s.authToken}function ut(t){return nt(t,(t=>{if(!lt(t))throw j.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n}))}function lt(t){return void 0!==t&&2===t.registrationStatus}async function gt(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await st(t);e&&await e}(n);return(await ct(n,e)).token}function ht(t){return j.create("missing-app-config-values",{valueName:t})}const ft=t=>{const e=t.getProvider("app").getImmediate(),s=n(e,"installations").getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:s}=await st(e);return s?s.catch(console.error):ct(e).catch(console.error),n.fid}(s),getToken:t=>gt(s,t)}};e(new g("installations",(t=>{const e=t.getProvider("app").getImmediate(),s=function(t){if(!t||!t.options)throw ht("App Configuration");if(!t.name)throw ht("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ht(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:s,heartbeatServiceProvider:n(e,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),e(new g("installations-internal",ft,"PRIVATE")),t(N,"0.6.0"),t(N,"0.6.0","esm2017");const dt="@firebase/remote-config";class pt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}const mt=new o("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"});const wt=["1","true","t","yes","y","on"];class vt{constructor(t,e=""){this._source=t,this._value=e}asString(){return this._value}asBoolean(){return"static"!==this._source&&wt.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return 0;let t=Number(this._value);return isNaN(t)&&(t=0),t}getSource(){return this._source}}function _t(t=s()){t=l(t);return n(t,"remote-config").getImmediate()}async function yt(t){const e=l(t),[n,s]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!!(n&&n.config&&n.eTag&&n.eTag!==s)&&(await Promise.all([e._storageCache.setActiveConfig(n.config),e._storage.setActiveConfigEtag(n.eTag)]),!0)}function bt(t){const e=l(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then((()=>{e._isInitializationComplete=!0}))),e._initializePromise}async function Et(t){const e=l(t),n=new pt;setTimeout((async()=>{n.abort()}),e.settings.fetchTimeoutMillis);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:n}),await e._storageCache.setLastFetchStatus("success")}catch(t){const n=function(t,e){return t instanceof i&&-1!==t.code.indexOf(e)}(t,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(n),t}}function St(t){const e=l(t);return function(t={},e={}){return Object.keys(Object.assign(Object.assign({},t),e))}(e._storageCache.getActiveConfig(),e.defaultConfig).reduce(((e,n)=>(e[n]=Lt(t,n),e)),{})}function It(t,e){return Lt(l(t),e).asBoolean()}function Ct(t,e){return Lt(l(t),e).asNumber()}function Tt(t,e){return Lt(l(t),e).asString()}function Lt(t,e){const n=l(t);n._isInitializationComplete||n._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const s=n._storageCache.getActiveConfig();return s&&void 0!==s[e]?new vt("remote",s[e]):n.defaultConfig&&void 0!==n.defaultConfig[e]?new vt("default",String(n.defaultConfig[e])):(n._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new vt("static"))}function Mt(t,e){const n=l(t);switch(e){case"debug":n._logger.logLevel=h.DEBUG;break;case"silent":n._logger.logLevel=h.SILENT;break;default:n._logger.logLevel=h.ERROR}}class Dt{constructor(t,e,n,s){this.client=t,this.storage=e,this.storageCache=n,this.logger=s}isCachedDataFresh(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const n=Date.now()-e,s=n<=t;return this.logger.debug(`Config fetch cache check. Cache age millis: ${n}. Cache max age millis (minimumFetchIntervalMillis setting): ${t}. Is cache hit: ${s}.`),s}async fetch(t){const[e,n]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(n&&this.isCachedDataFresh(t.cacheMaxAgeMillis,e))return n;t.eTag=n&&n.eTag;const s=await this.client.fetch(t),r=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===s.status&&r.push(this.storage.setLastSuccessfulFetchResponse(s)),await Promise.all(r),s}}function kt(t=navigator){return t.languages&&t.languages[0]||t.language}class Ft{constructor(t,e,n,s,r,a){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=n,this.projectId=s,this.apiKey=r,this.appId=a}async fetch(t){const[e,n]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,r={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},a={sdk_version:this.sdkVersion,app_instance_id:e,app_instance_id_token:n,app_id:this.appId,language_code:kt()},i={method:"POST",headers:r,body:JSON.stringify(a)},o=fetch(s,i),c=new Promise(((e,n)=>{t.signal.addEventListener((()=>{const t=new Error("The operation was aborted.");t.name="AbortError",n(t)}))}));let u;try{await Promise.race([o,c]),u=await o}catch(t){let e="fetch-client-network";throw"AbortError"===(null==t?void 0:t.name)&&(e="fetch-timeout"),mt.create(e,{originalErrorMessage:null==t?void 0:t.message})}let l=u.status;const g=u.headers.get("ETag")||void 0;let h,f;if(200===u.status){let t;try{t=await u.json()}catch(t){throw mt.create("fetch-client-parse",{originalErrorMessage:null==t?void 0:t.message})}h=t.entries,f=t.state}if("INSTANCE_STATE_UNSPECIFIED"===f?l=500:"NO_CHANGE"===f?l=304:"NO_TEMPLATE"!==f&&"EMPTY_CONFIG"!==f||(h={}),304!==l&&200!==l)throw mt.create("fetch-status",{httpStatus:l});return{status:l,eTag:g,config:h}}}class Pt{constructor(t,e){this.client=t,this.storage=e}async fetch(t){const e=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(t,e)}async attemptFetch(t,{throttleEndTimeMillis:e,backoffCount:n}){await function(t,e){return new Promise(((n,s)=>{const r=Math.max(e-Date.now(),0),a=setTimeout(n,r);t.addEventListener((()=>{clearTimeout(a),s(mt.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(t.signal,e);try{const e=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),e}catch(e){if(!function(t){if(!(t instanceof i&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e))throw e;const s={throttleEndTimeMillis:Date.now()+u(n),backoffCount:n+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(t,s)}}}class Ot{constructor(t,e,n,s,r){this.app=t,this._client=e,this._storageCache=n,this._storage=s,this._logger=r,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}function Nt(t,e){const n=t.target.error||void 0;return mt.create(e,{originalErrorMessage:n&&(null==n?void 0:n.message)})}class jt{constructor(t,e,n,s=function(){return new Promise(((t,e)=>{try{const n=indexedDB.open("firebase_remote_config",1);n.onerror=t=>{e(Nt(t,"storage-open"))},n.onsuccess=e=>{t(e.target.result)},n.onupgradeneeded=t=>{const e=t.target.result;0===t.oldVersion&&e.createObjectStore("app_namespace_store",{keyPath:"compositeKey"})}}catch(t){e(mt.create("storage-open",{originalErrorMessage:null==t?void 0:t.message}))}}))}()){this.appId=t,this.appName=e,this.namespace=n,this.openDbPromise=s}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(t){return this.set("last_fetch_status",t)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(t){return this.set("last_successful_fetch_timestamp_millis",t)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(t){return this.set("last_successful_fetch_response",t)}getActiveConfig(){return this.get("active_config")}setActiveConfig(t){return this.set("active_config",t)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(t){return this.set("active_config_etag",t)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(t){return this.set("throttle_metadata",t)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(t){const e=await this.openDbPromise;return new Promise(((n,s)=>{const r=e.transaction(["app_namespace_store"],"readonly").objectStore("app_namespace_store"),a=this.createCompositeKey(t);try{const t=r.get(a);t.onerror=t=>{s(Nt(t,"storage-get"))},t.onsuccess=t=>{const e=t.target.result;n(e?e.value:void 0)}}catch(t){s(mt.create("storage-get",{originalErrorMessage:null==t?void 0:t.message}))}}))}async set(t,e){const n=await this.openDbPromise;return new Promise(((s,r)=>{const a=n.transaction(["app_namespace_store"],"readwrite").objectStore("app_namespace_store"),i=this.createCompositeKey(t);try{const t=a.put({compositeKey:i,value:e});t.onerror=t=>{r(Nt(t,"storage-set"))},t.onsuccess=()=>{s()}}catch(t){r(mt.create("storage-set",{originalErrorMessage:null==t?void 0:t.message}))}}))}async delete(t){const e=await this.openDbPromise;return new Promise(((n,s)=>{const r=e.transaction(["app_namespace_store"],"readwrite").objectStore("app_namespace_store"),a=this.createCompositeKey(t);try{const t=r.delete(a);t.onerror=t=>{s(Nt(t,"storage-delete"))},t.onsuccess=()=>{n()}}catch(t){s(mt.create("storage-delete",{originalErrorMessage:null==t?void 0:t.message}))}}))}createCompositeKey(t){return[this.appId,this.appName,this.namespace,t].join()}}class Rt{constructor(t){this.storage=t}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),n=this.storage.getActiveConfig(),s=await t;s&&(this.lastFetchStatus=s);const r=await e;r&&(this.lastSuccessfulFetchTimestampMillis=r);const a=await n;a&&(this.activeConfig=a)}setLastFetchStatus(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)}setLastSuccessfulFetchTimestampMillis(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)}setActiveConfig(t){return this.activeConfig=t,this.storage.setActiveConfig(t)}}async function At(t){return t=l(t),await Et(t),yt(t)}async function Bt(){if(!a())return!1;try{return await new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}catch(t){return!1}}e(new g("remote-config",(function(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw mt.create("registration-window");if(!a())throw mt.create("indexed-db-unavailable");const{projectId:i,apiKey:o,appId:c}=n.options;if(!i)throw mt.create("registration-project-id");if(!o)throw mt.create("registration-api-key");if(!c)throw mt.create("registration-app-id");e=e||"firebase";const u=new jt(c,n.name,e),l=new Rt(u),g=new w(dt);g.logLevel=h.ERROR;const f=new Ft(s,r,e,i,o,c),d=new Pt(f,u),p=new Dt(d,u,l,g),m=new Ot(n,p,l,u,g);return bt(m),m}),"PUBLIC").setMultipleInstances(!0)),t(dt,"0.4.0"),t(dt,"0.4.0","esm2017");export{yt as activate,bt as ensureInitialized,At as fetchAndActivate,Et as fetchConfig,St as getAll,It as getBoolean,Ct as getNumber,_t as getRemoteConfig,Tt as getString,Lt as getValue,Bt as isSupported,Mt as setLogLevel};

//# sourceMappingURL=firebase-remote-config.js.map