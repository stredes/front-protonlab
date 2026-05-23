const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DkAm5nwU.js","assets/Button-Cg6wM08l.js","assets/FadeIn-BvGUe3Kw.js","assets/FadeIn-DsO-iVTa.css","assets/catalogApi-dAkFKfhK.js","assets/quantum_processor_1777123790537-I_iB9is2.js","assets/tech_robot_1777091060991-Cvt-f000.js","assets/HomePage-DEwhro43.css","assets/AboutPage-r7BbSh7P.js","assets/AboutPage-CszN0oks.css","assets/ProductsPage-BXUqS4wD.js","assets/SelectInput-BjAQSjPv.js","assets/QuoteRequestModal-HKkIG9jv.js","assets/TextInput-BPAbZbPs.js","assets/backendApiService-DP6K1r-p.js","assets/ProductsPage-CYly5eKG.css","assets/ProductDetailPage-23_Gf6Ib.js","assets/SupportPage-euGFFd2e.js","assets/tech_nanotech_1777091090503-DD47cufE.js","assets/SupportPage-DUyoBdsk.css","assets/ContactPage-CF1jguib.js","assets/CrimePreventionModelPage-u2iMlD3a.js","assets/LoginPage-B70RufWL.js","assets/authApi-Cpl1ZIZH.js","assets/PartnerPortalPage-Du5-fQ2S.js","assets/orderService-CfgV49Vm.js","assets/OrderDetailPage-CVqOVqf3.js","assets/OrderDetailPage-B1jRYxH0.css","assets/AdminDashboard-Btpy1m8y.js","assets/AdminDashboard-Cp1f_Etn.js","assets/AdminDashboard-B3izjrg4.css","assets/RootDashboardPage-BvJZL9-e.js","assets/RootDashboardPage-CW0Fh_33.css","assets/VendorDashboardPage-CVOPsG2d.js","assets/VendorDashboardPage-CfW_b65F.css","assets/WarehouseDashboardPage-DiSmnkzb.js","assets/WarehouseDashboardPage-B2ZE13J_.css","assets/NotFoundPage-kF7mpTUk.js","assets/NotFoundPage-jFm-crAe.css","assets/BlogPage-BB_6sffB.js","assets/contentData-CVmbfMXm.js","assets/BlogPage-BllfLzMF.css","assets/BlogPostPage-YrYcXrAx.js","assets/BlogPostPage-BNZQYrQG.css"])))=>i.map(i=>d[i]);
var QS=Object.defineProperty;var YS=(t,e,n)=>e in t?QS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pt=(t,e,n)=>YS(t,typeof e!="symbol"?e+"":e,n);function JS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function XS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mw={exports:{}},sc={},gw={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),ek=Symbol.for("react.fragment"),tk=Symbol.for("react.strict_mode"),nk=Symbol.for("react.profiler"),rk=Symbol.for("react.provider"),ik=Symbol.for("react.context"),sk=Symbol.for("react.forward_ref"),ok=Symbol.for("react.suspense"),ak=Symbol.for("react.memo"),lk=Symbol.for("react.lazy"),Hg=Symbol.iterator;function uk(t){return t===null||typeof t!="object"?null:(t=Hg&&t[Hg]||t["@@iterator"],typeof t=="function"?t:null)}var yw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_w=Object.assign,vw={};function qs(t,e,n){this.props=t,this.context=e,this.refs=vw,this.updater=n||yw}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ww(){}ww.prototype=qs.prototype;function $f(t,e,n){this.props=t,this.context=e,this.refs=vw,this.updater=n||yw}var Wf=$f.prototype=new ww;Wf.constructor=$f;_w(Wf,qs.prototype);Wf.isPureReactComponent=!0;var Kg=Array.isArray,Ew=Object.prototype.hasOwnProperty,qf={current:null},Tw={key:!0,ref:!0,__self:!0,__source:!0};function Iw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ew.call(e,r)&&!Tw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:La,type:t,key:s,ref:o,props:i,_owner:qf.current}}function ck(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function hk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gg=/\/+/g;function vh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hk(""+t.key):e.toString(36)}function jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case La:case ZS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vh(o,0):r,Kg(i)?(n="",t!=null&&(n=t.replace(Gg,"$&/")+"/"),jl(i,e,n,"",function(c){return c})):i!=null&&(Hf(i)&&(i=ck(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+vh(s,l);o+=jl(s,e,n,u,i)}else if(u=uk(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+vh(s,l++),o+=jl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Fl={transition:null},fk={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Fl,ReactCurrentOwner:qf};function Sw(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=qs;re.Fragment=ek;re.Profiler=nk;re.PureComponent=$f;re.StrictMode=tk;re.Suspense=ok;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fk;re.act=Sw;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_w({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ew.call(e,u)&&!Tw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:La,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:ik,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rk,_context:t},t.Consumer=t};re.createElement=Iw;re.createFactory=function(t){var e=Iw.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:sk,render:t}};re.isValidElement=Hf;re.lazy=function(t){return{$$typeof:lk,_payload:{_status:-1,_result:t},_init:dk}};re.memo=function(t,e){return{$$typeof:ak,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Fl.transition;Fl.transition={};try{t()}finally{Fl.transition=e}};re.unstable_act=Sw;re.useCallback=function(t,e){return vt.current.useCallback(t,e)};re.useContext=function(t){return vt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};re.useEffect=function(t,e){return vt.current.useEffect(t,e)};re.useId=function(){return vt.current.useId()};re.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return vt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};re.useRef=function(t){return vt.current.useRef(t)};re.useState=function(t){return vt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return vt.current.useTransition()};re.version="18.3.1";gw.exports=re;var R=gw.exports;const $n=XS(R),pk=JS({__proto__:null,default:$n},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mk=R,gk=Symbol.for("react.element"),yk=Symbol.for("react.fragment"),_k=Object.prototype.hasOwnProperty,vk=mk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wk={key:!0,ref:!0,__self:!0,__source:!0};function kw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_k.call(e,r)&&!wk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:gk,type:t,key:s,ref:o,props:i,_owner:vk.current}}sc.Fragment=yk;sc.jsx=kw;sc.jsxs=kw;mw.exports=sc;var f=mw.exports,dd={},Aw={exports:{}},jt={},Cw={exports:{}},Rw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,Y){var Z=U.length;U.push(Y);e:for(;0<Z;){var _e=Z-1>>>1,be=U[_e];if(0<i(be,Y))U[_e]=Y,U[Z]=be,Z=_e;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Y=U[0],Z=U.pop();if(Z!==Y){U[0]=Z;e:for(var _e=0,be=U.length,ui=be>>>1;_e<ui;){var Ut=2*(_e+1)-1,ci=U[Ut],Zt=Ut+1,sr=U[Zt];if(0>i(ci,Z))Zt<be&&0>i(sr,ci)?(U[_e]=sr,U[Zt]=Z,_e=Zt):(U[_e]=ci,U[Ut]=Z,_e=Ut);else if(Zt<be&&0>i(sr,Z))U[_e]=sr,U[Zt]=Z,_e=Zt;else break e}}return Y}function i(U,Y){var Z=U.sortIndex-Y.sortIndex;return Z!==0?Z:U.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,g=3,w=!1,S=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(U){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=U)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function N(U){if(P=!1,E(U),!S)if(n(u)!==null)S=!0,li(V);else{var Y=n(c);Y!==null&&ir(N,Y.startTime-U)}}function V(U,Y){S=!1,P&&(P=!1,I(_),_=-1),w=!0;var Z=g;try{for(E(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||U&&!x());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,g=p.priorityLevel;var be=_e(p.expirationTime<=Y);Y=t.unstable_now(),typeof be=="function"?p.callback=be:p===n(u)&&r(u),E(Y)}else r(u);p=n(u)}if(p!==null)var ui=!0;else{var Ut=n(c);Ut!==null&&ir(N,Ut.startTime-Y),ui=!1}return ui}finally{p=null,g=Z,w=!1}}var j=!1,T=null,_=-1,k=5,C=-1;function x(){return!(t.unstable_now()-C<k)}function L(){if(T!==null){var U=t.unstable_now();C=U;var Y=!0;try{Y=T(!0,U)}finally{Y?A():(j=!1,T=null)}}else j=!1}var A;if(typeof y=="function")A=function(){y(L)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Xt=ze.port2;ze.port1.onmessage=L,A=function(){Xt.postMessage(null)}}else A=function(){b(L,0)};function li(U){T=U,j||(j=!0,A())}function ir(U,Y){_=b(function(){U(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){S||w||(S=!0,li(V))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var Z=g;g=Y;try{return U()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=g;g=U;try{return Y()}finally{g=Z}},t.unstable_scheduleCallback=function(U,Y,Z){var _e=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,U){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,U={id:d++,callback:Y,priorityLevel:U,startTime:Z,expirationTime:be,sortIndex:-1},Z>_e?(U.sortIndex=Z,e(c,U),n(u)===null&&U===n(c)&&(P?(I(_),_=-1):P=!0,ir(N,Z-_e))):(U.sortIndex=be,e(u,U),S||w||(S=!0,li(V))),U},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(U){var Y=g;return function(){var Z=g;g=Y;try{return U.apply(this,arguments)}finally{g=Z}}}})(Rw);Cw.exports=Rw;var Ek=Cw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tk=R,Mt=Ek;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xw=new Set,ra={};function Bi(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(ra[t]=e,t=0;t<e.length;t++)xw.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,Ik=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Yg={};function Sk(t){return fd.call(Yg,t)?!0:fd.call(Qg,t)?!1:Ik.test(t)?Yg[t]=!0:(Qg[t]=!0,!1)}function kk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ak(t,e,n,r){if(e===null||typeof e>"u"||kk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kf,Gf);et[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kf,Gf);et[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kf,Gf);et[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qf(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ak(e,n,i,r)&&(n=null),r||i===null?Sk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=Tk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),ss=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),Pw=Symbol.for("react.provider"),Nw=Symbol.for("react.context"),Jf=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),Xf=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),bw=Symbol.for("react.offscreen"),Jg=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,wh;function bo(t){if(wh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wh=e&&e[1]||""}return`
`+wh+t}var Eh=!1;function Th(t,e){if(!t||Eh)return"";Eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Eh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function Ck(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Th(t.type,!1),t;case 11:return t=Th(t.type.render,!1),t;case 1:return t=Th(t.type,!0),t;default:return""}}function yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case ss:return"Portal";case pd:return"Profiler";case Yf:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nw:return(t.displayName||"Context")+".Consumer";case Pw:return(t._context.displayName||"Context")+".Provider";case Jf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xf:return e=t.displayName||null,e!==null?e:yd(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return yd(t(e))}catch{}}return null}function Rk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yd(e);case 8:return e===Yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xk(t){var e=Lw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=xk(t))}function Dw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=$r(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ow(t,e){e=e.checked,e!=null&&Qf(t,"checked",e,!1)}function vd(t,e){Ow(t,e);var n=$r(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,$r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function _s(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+$r(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ey(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Lo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$r(n)}}function Vw(t,e){var n=$r(e.value),r=$r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ty(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,jw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pk=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(t){Pk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bo[e]=Bo[t]})});function Fw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bo.hasOwnProperty(t)&&Bo[t]?(""+e).trim():e+"px"}function Uw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Nk=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(t,e){if(e){if(Nk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kd=null;function Zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ad=null,vs=null,ws=null;function ny(t){if(t=Va(t)){if(typeof Ad!="function")throw Error(z(280));var e=t.stateNode;e&&(e=cc(e),Ad(t.stateNode,t.type,e))}}function zw(t){vs?ws?ws.push(t):ws=[t]:vs=t}function Bw(){if(vs){var t=vs,e=ws;if(ws=vs=null,ny(t),e)for(t=0;t<e.length;t++)ny(e[t])}}function $w(t,e){return t(e)}function Ww(){}var Ih=!1;function qw(t,e,n){if(Ih)return t(e,n);Ih=!0;try{return $w(t,e,n)}finally{Ih=!1,(vs!==null||ws!==null)&&(Ww(),Bw())}}function sa(t,e){var n=t.stateNode;if(n===null)return null;var r=cc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Cd=!1;if(Hn)try{var To={};Object.defineProperty(To,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Cd=!1}function bk(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var $o=!1,lu=null,uu=!1,Rd=null,Lk={onError:function(t){$o=!0,lu=t}};function Dk(t,e,n,r,i,s,o,l,u){$o=!1,lu=null,bk.apply(Lk,arguments)}function Ok(t,e,n,r,i,s,o,l,u){if(Dk.apply(this,arguments),$o){if($o){var c=lu;$o=!1,lu=null}else throw Error(z(198));uu||(uu=!0,Rd=c)}}function $i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ry(t){if($i(t)!==t)throw Error(z(188))}function Vk(t){var e=t.alternate;if(!e){if(e=$i(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ry(i),t;if(s===r)return ry(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Kw(t){return t=Vk(t),t!==null?Gw(t):null}function Gw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gw(t);if(e!==null)return e;t=t.sibling}return null}var Qw=Mt.unstable_scheduleCallback,iy=Mt.unstable_cancelCallback,Mk=Mt.unstable_shouldYield,jk=Mt.unstable_requestPaint,De=Mt.unstable_now,Fk=Mt.unstable_getCurrentPriorityLevel,ep=Mt.unstable_ImmediatePriority,Yw=Mt.unstable_UserBlockingPriority,cu=Mt.unstable_NormalPriority,Uk=Mt.unstable_LowPriority,Jw=Mt.unstable_IdlePriority,oc=null,In=null;function zk(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(oc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Wk,Bk=Math.log,$k=Math.LN2;function Wk(t){return t>>>=0,t===0?32:31-(Bk(t)/$k|0)|0}var dl=64,fl=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Do(l):(s&=o,s!==0&&(r=Do(s)))}else o=n&~i,o!==0?r=Do(o):s!==0&&(r=Do(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function qk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=qk(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xw(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function Sh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function Kk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Zw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eE,np,tE,nE,rE,Pd=!1,pl=[],xr=null,Pr=null,Nr=null,oa=new Map,aa=new Map,yr=[],Gk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sy(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(e.pointerId)}}function Io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Va(e),e!==null&&np(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Qk(t,e,n,r,i){switch(e){case"focusin":return xr=Io(xr,t,e,n,r,i),!0;case"dragenter":return Pr=Io(Pr,t,e,n,r,i),!0;case"mouseover":return Nr=Io(Nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oa.set(s,Io(oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,aa.set(s,Io(aa.get(s)||null,t,e,n,r,i)),!0}return!1}function iE(t){var e=Ei(t.target);if(e!==null){var n=$i(e);if(n!==null){if(e=n.tag,e===13){if(e=Hw(n),e!==null){t.blockedOn=e,rE(t.priority,function(){tE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kd=r,n.target.dispatchEvent(r),kd=null}else return e=Va(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function oy(t,e,n){Ul(t)&&n.delete(e)}function Yk(){Pd=!1,xr!==null&&Ul(xr)&&(xr=null),Pr!==null&&Ul(Pr)&&(Pr=null),Nr!==null&&Ul(Nr)&&(Nr=null),oa.forEach(oy),aa.forEach(oy)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,Yk)))}function la(t){function e(i){return So(i,t)}if(0<pl.length){So(pl[0],t);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&So(xr,t),Pr!==null&&So(Pr,t),Nr!==null&&So(Nr,t),oa.forEach(e),aa.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)iE(n),n.blockedOn===null&&yr.shift()}var Es=nr.ReactCurrentBatchConfig,du=!0;function Jk(t,e,n,r){var i=le,s=Es.transition;Es.transition=null;try{le=1,rp(t,e,n,r)}finally{le=i,Es.transition=s}}function Xk(t,e,n,r){var i=le,s=Es.transition;Es.transition=null;try{le=4,rp(t,e,n,r)}finally{le=i,Es.transition=s}}function rp(t,e,n,r){if(du){var i=Nd(t,e,n,r);if(i===null)Dh(t,e,r,fu,n),sy(t,r);else if(Qk(i,t,e,n,r))r.stopPropagation();else if(sy(t,r),e&4&&-1<Gk.indexOf(t)){for(;i!==null;){var s=Va(i);if(s!==null&&eE(s),s=Nd(t,e,n,r),s===null&&Dh(t,e,r,fu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dh(t,e,r,null,n)}}var fu=null;function Nd(t,e,n,r){if(fu=null,t=Zf(r),t=Ei(t),t!==null)if(e=$i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fu=t,null}function sE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fk()){case ep:return 1;case Yw:return 4;case cu:case Uk:return 16;case Jw:return 536870912;default:return 16}default:return 16}}var Ar=null,ip=null,zl=null;function oE(){if(zl)return zl;var t,e=ip,n=e.length,r,i="value"in Ar?Ar.value:Ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zl=i.slice(t,1<r?1-r:void 0)}function Bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function ay(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:ay,this.isPropagationStopped=ay,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Ft(Hs),Oa=ke({},Hs,{view:0,detail:0}),Zk=Ft(Oa),kh,Ah,ko,ac=ke({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ko&&(ko&&t.type==="mousemove"?(kh=t.screenX-ko.screenX,Ah=t.screenY-ko.screenY):Ah=kh=0,ko=t),kh)},movementY:function(t){return"movementY"in t?t.movementY:Ah}}),ly=Ft(ac),eA=ke({},ac,{dataTransfer:0}),tA=Ft(eA),nA=ke({},Oa,{relatedTarget:0}),Ch=Ft(nA),rA=ke({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),iA=Ft(rA),sA=ke({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oA=Ft(sA),aA=ke({},Hs,{data:0}),uy=Ft(aA),lA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cA[t])?!!e[t]:!1}function op(){return hA}var dA=ke({},Oa,{key:function(t){if(t.key){var e=lA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fA=Ft(dA),pA=ke({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cy=Ft(pA),mA=ke({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),gA=Ft(mA),yA=ke({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_A=Ft(yA),vA=ke({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wA=Ft(vA),EA=[9,13,27,32],ap=Hn&&"CompositionEvent"in window,Wo=null;Hn&&"documentMode"in document&&(Wo=document.documentMode);var TA=Hn&&"TextEvent"in window&&!Wo,aE=Hn&&(!ap||Wo&&8<Wo&&11>=Wo),hy=" ",dy=!1;function lE(t,e){switch(t){case"keyup":return EA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function IA(t,e){switch(t){case"compositionend":return uE(e);case"keypress":return e.which!==32?null:(dy=!0,hy);case"textInput":return t=e.data,t===hy&&dy?null:t;default:return null}}function SA(t,e){if(as)return t==="compositionend"||!ap&&lE(t,e)?(t=oE(),zl=ip=Ar=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return aE&&e.locale!=="ko"?null:e.data;default:return null}}var kA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kA[t.type]:e==="textarea"}function cE(t,e,n,r){zw(r),e=pu(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qo=null,ua=null;function AA(t){EE(t,0)}function lc(t){var e=cs(t);if(Dw(e))return t}function CA(t,e){if(t==="change")return e}var hE=!1;if(Hn){var Rh;if(Hn){var xh="oninput"in document;if(!xh){var py=document.createElement("div");py.setAttribute("oninput","return;"),xh=typeof py.oninput=="function"}Rh=xh}else Rh=!1;hE=Rh&&(!document.documentMode||9<document.documentMode)}function my(){qo&&(qo.detachEvent("onpropertychange",dE),ua=qo=null)}function dE(t){if(t.propertyName==="value"&&lc(ua)){var e=[];cE(e,ua,t,Zf(t)),qw(AA,e)}}function RA(t,e,n){t==="focusin"?(my(),qo=e,ua=n,qo.attachEvent("onpropertychange",dE)):t==="focusout"&&my()}function xA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lc(ua)}function PA(t,e){if(t==="click")return lc(e)}function NA(t,e){if(t==="input"||t==="change")return lc(e)}function bA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:bA;function ca(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fd.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yy(t,e){var n=gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gy(n)}}function fE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pE(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LA(t){var e=pE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fE(n.ownerDocument.documentElement,n)){if(r!==null&&lp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=yy(n,s);var o=yy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DA=Hn&&"documentMode"in document&&11>=document.documentMode,ls=null,bd=null,Ho=null,Ld=!1;function _y(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||ls==null||ls!==au(r)||(r=ls,"selectionStart"in r&&lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&ca(Ho,r)||(Ho=r,r=pu(bd,"onSelect"),0<r.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ls)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Ph={},mE={};Hn&&(mE=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function uc(t){if(Ph[t])return Ph[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mE)return Ph[t]=e[n];return t}var gE=uc("animationend"),yE=uc("animationiteration"),_E=uc("animationstart"),vE=uc("transitionend"),wE=new Map,vy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){wE.set(t,e),Bi(e,[t])}for(var Nh=0;Nh<vy.length;Nh++){var bh=vy[Nh],OA=bh.toLowerCase(),VA=bh[0].toUpperCase()+bh.slice(1);Zr(OA,"on"+VA)}Zr(gE,"onAnimationEnd");Zr(yE,"onAnimationIteration");Zr(_E,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(vE,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function wy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ok(r,e,void 0,t),t.currentTarget=null}function EE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;wy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;wy(i,l,c),s=u}}}if(uu)throw t=Rd,uu=!1,Rd=null,t}function me(t,e){var n=e[jd];n===void 0&&(n=e[jd]=new Set);var r=t+"__bubble";n.has(r)||(TE(e,t,2,!1),n.add(r))}function Lh(t,e,n){var r=0;e&&(r|=4),TE(n,t,r,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[yl]){t[yl]=!0,xw.forEach(function(n){n!=="selectionchange"&&(MA.has(n)||Lh(n,!1,t),Lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,Lh("selectionchange",!1,e))}}function TE(t,e,n,r){switch(sE(e)){case 1:var i=Jk;break;case 4:i=Xk;break;default:i=rp}n=i.bind(null,e,n,t),i=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ei(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qw(function(){var c=s,d=Zf(n),p=[];e:{var g=wE.get(t);if(g!==void 0){var w=sp,S=t;switch(t){case"keypress":if(Bl(n)===0)break e;case"keydown":case"keyup":w=fA;break;case"focusin":S="focus",w=Ch;break;case"focusout":S="blur",w=Ch;break;case"beforeblur":case"afterblur":w=Ch;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ly;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=tA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gA;break;case gE:case yE:case _E:w=iA;break;case vE:w=_A;break;case"scroll":w=Zk;break;case"wheel":w=wA;break;case"copy":case"cut":case"paste":w=oA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=cy}var P=(e&4)!==0,b=!P&&t==="scroll",I=P?g!==null?g+"Capture":null:g;P=[];for(var y=c,E;y!==null;){E=y;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,I!==null&&(N=sa(y,I),N!=null&&P.push(da(y,N,E)))),b)break;y=y.return}0<P.length&&(g=new w(g,S,null,n,d),p.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==kd&&(S=n.relatedTarget||n.fromElement)&&(Ei(S)||S[Kn]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=c,S=S?Ei(S):null,S!==null&&(b=$i(S),S!==b||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=c),w!==S)){if(P=ly,N="onMouseLeave",I="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(P=cy,N="onPointerLeave",I="onPointerEnter",y="pointer"),b=w==null?g:cs(w),E=S==null?g:cs(S),g=new P(N,y+"leave",w,n,d),g.target=b,g.relatedTarget=E,N=null,Ei(d)===c&&(P=new P(I,y+"enter",S,n,d),P.target=E,P.relatedTarget=b,N=P),b=N,w&&S)t:{for(P=w,I=S,y=0,E=P;E;E=Zi(E))y++;for(E=0,N=I;N;N=Zi(N))E++;for(;0<y-E;)P=Zi(P),y--;for(;0<E-y;)I=Zi(I),E--;for(;y--;){if(P===I||I!==null&&P===I.alternate)break t;P=Zi(P),I=Zi(I)}P=null}else P=null;w!==null&&Ey(p,g,w,P,!1),S!==null&&b!==null&&Ey(p,b,S,P,!0)}}e:{if(g=c?cs(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var V=CA;else if(fy(g))if(hE)V=NA;else{V=xA;var j=RA}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=PA);if(V&&(V=V(t,c))){cE(p,V,n,d);break e}j&&j(t,g,c),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&wd(g,"number",g.value)}switch(j=c?cs(c):window,t){case"focusin":(fy(j)||j.contentEditable==="true")&&(ls=j,bd=c,Ho=null);break;case"focusout":Ho=bd=ls=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,_y(p,n,d);break;case"selectionchange":if(DA)break;case"keydown":case"keyup":_y(p,n,d)}var T;if(ap)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else as?lE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(aE&&n.locale!=="ko"&&(as||_!=="onCompositionStart"?_==="onCompositionEnd"&&as&&(T=oE()):(Ar=d,ip="value"in Ar?Ar.value:Ar.textContent,as=!0)),j=pu(c,_),0<j.length&&(_=new uy(_,t,null,n,d),p.push({event:_,listeners:j}),T?_.data=T:(T=uE(n),T!==null&&(_.data=T)))),(T=TA?IA(t,n):SA(t,n))&&(c=pu(c,"onBeforeInput"),0<c.length&&(d=new uy("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}EE(p,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=sa(t,n),s!=null&&r.unshift(da(t,s,i)),s=sa(t,e),s!=null&&r.push(da(t,s,i))),t=t.return}return r}function Zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=sa(n,s),u!=null&&o.unshift(da(n,u,l))):i||(u=sa(n,s),u!=null&&o.push(da(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jA=/\r\n?/g,FA=/\u0000|\uFFFD/g;function Ty(t){return(typeof t=="string"?t:""+t).replace(jA,`
`).replace(FA,"")}function _l(t,e,n){if(e=Ty(e),Ty(t)!==e&&n)throw Error(z(425))}function mu(){}var Dd=null,Od=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,UA=typeof clearTimeout=="function"?clearTimeout:void 0,Iy=typeof Promise=="function"?Promise:void 0,zA=typeof queueMicrotask=="function"?queueMicrotask:typeof Iy<"u"?function(t){return Iy.resolve(null).then(t).catch(BA)}:Md;function BA(t){setTimeout(function(){throw t})}function Oh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),la(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);la(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),wn="__reactFiber$"+Ks,fa="__reactProps$"+Ks,Kn="__reactContainer$"+Ks,jd="__reactEvents$"+Ks,$A="__reactListeners$"+Ks,WA="__reactHandles$"+Ks;function Ei(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sy(t);t!==null;){if(n=t[wn])return n;t=Sy(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[wn]||t[Kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function cc(t){return t[fa]||null}var Fd=[],hs=-1;function ei(t){return{current:t}}function ye(t){0>hs||(t.current=Fd[hs],Fd[hs]=null,hs--)}function fe(t,e){hs++,Fd[hs]=t.current,t.current=e}var Wr={},ct=ei(Wr),At=ei(!1),Pi=Wr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function gu(){ye(At),ye(ct)}function ky(t,e,n){if(ct.current!==Wr)throw Error(z(168));fe(ct,e),fe(At,n)}function IE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,Rk(t)||"Unknown",i));return ke({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wr,Pi=ct.current,fe(ct,t),fe(At,At.current),!0}function Ay(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=IE(t,e,Pi),r.__reactInternalMemoizedMergedChildContext=t,ye(At),ye(ct),fe(ct,t)):ye(At),fe(At,n)}var Mn=null,hc=!1,Vh=!1;function SE(t){Mn===null?Mn=[t]:Mn.push(t)}function qA(t){hc=!0,SE(t)}function ti(){if(!Vh&&Mn!==null){Vh=!0;var t=0,e=le;try{var n=Mn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,hc=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),Qw(ep,ti),i}finally{le=e,Vh=!1}}return null}var ds=[],fs=0,_u=null,vu=0,Bt=[],$t=0,Ni=null,jn=1,Fn="";function _i(t,e){ds[fs++]=vu,ds[fs++]=_u,_u=t,vu=e}function kE(t,e,n){Bt[$t++]=jn,Bt[$t++]=Fn,Bt[$t++]=Ni,Ni=t;var r=jn;t=Fn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-on(e)+i|n<<i|r,Fn=s+t}else jn=1<<s|n<<i|r,Fn=t}function up(t){t.return!==null&&(_i(t,1),kE(t,1,0))}function cp(t){for(;t===_u;)_u=ds[--fs],ds[fs]=null,vu=ds[--fs],ds[fs]=null;for(;t===Ni;)Ni=Bt[--$t],Bt[$t]=null,Fn=Bt[--$t],Bt[$t]=null,jn=Bt[--$t],Bt[$t]=null}var Ot=null,bt=null,ve=!1,rn=null;function AE(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,bt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:jn,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,bt=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(ve){var e=bt;if(e){var n=e;if(!Cy(t,e)){if(Ud(t))throw Error(z(418));e=br(n.nextSibling);var r=Ot;e&&Cy(t,e)?AE(r,n):(t.flags=t.flags&-4097|2,ve=!1,Ot=t)}}else{if(Ud(t))throw Error(z(418));t.flags=t.flags&-4097|2,ve=!1,Ot=t}}}function Ry(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function vl(t){if(t!==Ot)return!1;if(!ve)return Ry(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=bt)){if(Ud(t))throw CE(),Error(z(418));for(;e;)AE(t,e),e=br(e.nextSibling)}if(Ry(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=Ot?br(t.stateNode.nextSibling):null;return!0}function CE(){for(var t=bt;t;)t=br(t.nextSibling)}function Ds(){bt=Ot=null,ve=!1}function hp(t){rn===null?rn=[t]:rn.push(t)}var HA=nr.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xy(t){var e=t._init;return e(t._payload)}function RE(t){function e(I,y){if(t){var E=I.deletions;E===null?(I.deletions=[y],I.flags|=16):E.push(y)}}function n(I,y){if(!t)return null;for(;y!==null;)e(I,y),y=y.sibling;return null}function r(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function i(I,y){return I=Vr(I,y),I.index=0,I.sibling=null,I}function s(I,y,E){return I.index=E,t?(E=I.alternate,E!==null?(E=E.index,E<y?(I.flags|=2,y):E):(I.flags|=2,y)):(I.flags|=1048576,y)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,y,E,N){return y===null||y.tag!==6?(y=$h(E,I.mode,N),y.return=I,y):(y=i(y,E),y.return=I,y)}function u(I,y,E,N){var V=E.type;return V===os?d(I,y,E.props.children,N,E.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===mr&&xy(V)===y.type)?(N=i(y,E.props),N.ref=Ao(I,y,E),N.return=I,N):(N=Ql(E.type,E.key,E.props,null,I.mode,N),N.ref=Ao(I,y,E),N.return=I,N)}function c(I,y,E,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=Wh(E,I.mode,N),y.return=I,y):(y=i(y,E.children||[]),y.return=I,y)}function d(I,y,E,N,V){return y===null||y.tag!==7?(y=Ci(E,I.mode,N,V),y.return=I,y):(y=i(y,E),y.return=I,y)}function p(I,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=$h(""+y,I.mode,E),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:return E=Ql(y.type,y.key,y.props,null,I.mode,E),E.ref=Ao(I,null,y),E.return=I,E;case ss:return y=Wh(y,I.mode,E),y.return=I,y;case mr:var N=y._init;return p(I,N(y._payload),E)}if(Lo(y)||Eo(y))return y=Ci(y,I.mode,E,null),y.return=I,y;wl(I,y)}return null}function g(I,y,E,N){var V=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return V!==null?null:l(I,y,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ul:return E.key===V?u(I,y,E,N):null;case ss:return E.key===V?c(I,y,E,N):null;case mr:return V=E._init,g(I,y,V(E._payload),N)}if(Lo(E)||Eo(E))return V!==null?null:d(I,y,E,N,null);wl(I,E)}return null}function w(I,y,E,N,V){if(typeof N=="string"&&N!==""||typeof N=="number")return I=I.get(E)||null,l(y,I,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ul:return I=I.get(N.key===null?E:N.key)||null,u(y,I,N,V);case ss:return I=I.get(N.key===null?E:N.key)||null,c(y,I,N,V);case mr:var j=N._init;return w(I,y,E,j(N._payload),V)}if(Lo(N)||Eo(N))return I=I.get(E)||null,d(y,I,N,V,null);wl(y,N)}return null}function S(I,y,E,N){for(var V=null,j=null,T=y,_=y=0,k=null;T!==null&&_<E.length;_++){T.index>_?(k=T,T=null):k=T.sibling;var C=g(I,T,E[_],N);if(C===null){T===null&&(T=k);break}t&&T&&C.alternate===null&&e(I,T),y=s(C,y,_),j===null?V=C:j.sibling=C,j=C,T=k}if(_===E.length)return n(I,T),ve&&_i(I,_),V;if(T===null){for(;_<E.length;_++)T=p(I,E[_],N),T!==null&&(y=s(T,y,_),j===null?V=T:j.sibling=T,j=T);return ve&&_i(I,_),V}for(T=r(I,T);_<E.length;_++)k=w(T,I,_,E[_],N),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?_:k.key),y=s(k,y,_),j===null?V=k:j.sibling=k,j=k);return t&&T.forEach(function(x){return e(I,x)}),ve&&_i(I,_),V}function P(I,y,E,N){var V=Eo(E);if(typeof V!="function")throw Error(z(150));if(E=V.call(E),E==null)throw Error(z(151));for(var j=V=null,T=y,_=y=0,k=null,C=E.next();T!==null&&!C.done;_++,C=E.next()){T.index>_?(k=T,T=null):k=T.sibling;var x=g(I,T,C.value,N);if(x===null){T===null&&(T=k);break}t&&T&&x.alternate===null&&e(I,T),y=s(x,y,_),j===null?V=x:j.sibling=x,j=x,T=k}if(C.done)return n(I,T),ve&&_i(I,_),V;if(T===null){for(;!C.done;_++,C=E.next())C=p(I,C.value,N),C!==null&&(y=s(C,y,_),j===null?V=C:j.sibling=C,j=C);return ve&&_i(I,_),V}for(T=r(I,T);!C.done;_++,C=E.next())C=w(T,I,_,C.value,N),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?_:C.key),y=s(C,y,_),j===null?V=C:j.sibling=C,j=C);return t&&T.forEach(function(L){return e(I,L)}),ve&&_i(I,_),V}function b(I,y,E,N){if(typeof E=="object"&&E!==null&&E.type===os&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ul:e:{for(var V=E.key,j=y;j!==null;){if(j.key===V){if(V=E.type,V===os){if(j.tag===7){n(I,j.sibling),y=i(j,E.props.children),y.return=I,I=y;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===mr&&xy(V)===j.type){n(I,j.sibling),y=i(j,E.props),y.ref=Ao(I,j,E),y.return=I,I=y;break e}n(I,j);break}else e(I,j);j=j.sibling}E.type===os?(y=Ci(E.props.children,I.mode,N,E.key),y.return=I,I=y):(N=Ql(E.type,E.key,E.props,null,I.mode,N),N.ref=Ao(I,y,E),N.return=I,I=N)}return o(I);case ss:e:{for(j=E.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n(I,y.sibling),y=i(y,E.children||[]),y.return=I,I=y;break e}else{n(I,y);break}else e(I,y);y=y.sibling}y=Wh(E,I.mode,N),y.return=I,I=y}return o(I);case mr:return j=E._init,b(I,y,j(E._payload),N)}if(Lo(E))return S(I,y,E,N);if(Eo(E))return P(I,y,E,N);wl(I,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n(I,y.sibling),y=i(y,E),y.return=I,I=y):(n(I,y),y=$h(E,I.mode,N),y.return=I,I=y),o(I)):n(I,y)}return b}var Os=RE(!0),xE=RE(!1),wu=ei(null),Eu=null,ps=null,dp=null;function fp(){dp=ps=Eu=null}function pp(t){var e=wu.current;ye(wu),t._currentValue=e}function Bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){Eu=t,dp=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},ps===null){if(Eu===null)throw Error(z(308));ps=t,Eu.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return e}var Ti=null;function mp(t){Ti===null?Ti=[t]:Ti.push(t)}function PE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,mp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}function Py(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,r){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,P=l;switch(g=e,w=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){p=S.call(w,p,g);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,g=typeof S=="function"?S.call(w,p,g):S,g==null)break e;p=ke({},p,g);break e;case 2:gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Li|=o,t.lanes=o,t.memoizedState=p}}function Ny(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ma={},Sn=ei(Ma),pa=ei(Ma),ma=ei(Ma);function Ii(t){if(t===Ma)throw Error(z(174));return t}function yp(t,e){switch(fe(ma,e),fe(pa,t),fe(Sn,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}ye(Sn),fe(Sn,e)}function Vs(){ye(Sn),ye(pa),ye(ma)}function bE(t){Ii(ma.current);var e=Ii(Sn.current),n=Td(e,t.type);e!==n&&(fe(pa,t),fe(Sn,n))}function _p(t){pa.current===t&&(ye(Sn),ye(pa))}var Te=ei(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mh=[];function vp(){for(var t=0;t<Mh.length;t++)Mh[t]._workInProgressVersionPrimary=null;Mh.length=0}var Wl=nr.ReactCurrentDispatcher,jh=nr.ReactCurrentBatchConfig,bi=0,Ie=null,$e=null,Ge=null,Su=!1,Ko=!1,ga=0,KA=0;function it(){throw Error(z(321))}function wp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function Ep(t,e,n,r,i,s){if(bi=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?JA:XA,t=n(r,i),Ko){s=0;do{if(Ko=!1,ga=0,25<=s)throw Error(z(301));s+=1,Ge=$e=null,e.updateQueue=null,Wl.current=ZA,t=n(r,i)}while(Ko)}if(Wl.current=ku,e=$e!==null&&$e.next!==null,bi=0,Ge=$e=Ie=null,Su=!1,e)throw Error(z(300));return t}function Tp(){var t=ga!==0;return ga=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Qt(){if($e===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Ge===null?Ie.memoizedState:Ge.next;if(e!==null)Ge=e,$e=t;else{if(t===null)throw Error(z(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function ya(t,e){return typeof e=="function"?e(t):e}function Fh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((bi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=d,Li|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function LE(){}function DE(t,e){var n=Ie,r=Qt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,Ip(ME.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,_a(9,VE.bind(null,n,r,i,e),void 0,null),Qe===null)throw Error(z(349));bi&30||OE(n,e,i)}return i}function OE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function VE(t,e,n,r){e.value=n,e.getSnapshot=r,jE(e)&&FE(t)}function ME(t,e,n){return n(function(){jE(e)&&FE(t)})}function jE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function FE(t){var e=Gn(t,1);e!==null&&an(e,t,1,-1)}function by(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=YA.bind(null,Ie,t),[e.memoizedState,t]}function _a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UE(){return Qt().memoizedState}function ql(t,e,n,r){var i=_n();Ie.flags|=t,i.memoizedState=_a(1|e,n,void 0,r===void 0?null:r)}function dc(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&wp(r,o.deps)){i.memoizedState=_a(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=_a(1|e,n,s,r)}function Ly(t,e){return ql(8390656,8,t,e)}function Ip(t,e){return dc(2048,8,t,e)}function zE(t,e){return dc(4,2,t,e)}function BE(t,e){return dc(4,4,t,e)}function $E(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function WE(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,$E.bind(null,e,t),n)}function Sp(){}function qE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function HE(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function KE(t,e,n){return bi&21?(hn(n,e)||(n=Xw(),Ie.lanes|=n,Li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function GA(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=jh.transition;jh.transition={};try{t(!1),e()}finally{le=n,jh.transition=r}}function GE(){return Qt().memoizedState}function QA(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},QE(t))YE(e,n);else if(n=PE(t,e,n,r),n!==null){var i=yt();an(n,t,r,i),JE(n,e,r)}}function YA(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(QE(t))YE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(i.next=i,mp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=PE(t,e,i,r),n!==null&&(i=yt(),an(n,t,r,i),JE(n,e,r))}}function QE(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function YE(t,e){Ko=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function JE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}var ku={readContext:Gt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},JA={readContext:Gt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Ly,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,$E.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QA.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:by,useDebugValue:Sp,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=by(!1),e=t[0];return t=GA.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=_n();if(ve){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Qe===null)throw Error(z(349));bi&30||OE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ly(ME.bind(null,r,s,t),[t]),r.flags|=2048,_a(9,VE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=Qe.identifierPrefix;if(ve){var n=Fn,r=jn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=KA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XA={readContext:Gt,useCallback:qE,useContext:Gt,useEffect:Ip,useImperativeHandle:WE,useInsertionEffect:zE,useLayoutEffect:BE,useMemo:HE,useReducer:Fh,useRef:UE,useState:function(){return Fh(ya)},useDebugValue:Sp,useDeferredValue:function(t){var e=Qt();return KE(e,$e.memoizedState,t)},useTransition:function(){var t=Fh(ya)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:LE,useSyncExternalStore:DE,useId:GE,unstable_isNewReconciler:!1},ZA={readContext:Gt,useCallback:qE,useContext:Gt,useEffect:Ip,useImperativeHandle:WE,useInsertionEffect:zE,useLayoutEffect:BE,useMemo:HE,useReducer:Uh,useRef:UE,useState:function(){return Uh(ya)},useDebugValue:Sp,useDeferredValue:function(t){var e=Qt();return $e===null?e.memoizedState=t:KE(e,$e.memoizedState,t)},useTransition:function(){var t=Uh(ya)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:LE,useSyncExternalStore:DE,useId:GE,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?$i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Or(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(an(e,t,i,r),$l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Or(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Lr(t,s,i),e!==null&&(an(e,t,i,r),$l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Or(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Lr(t,i,r),e!==null&&(an(e,t,r,n),$l(e,t,r))}};function Dy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ca(n,r)||!ca(i,s):!0}function XE(t,e,n){var r=!1,i=Wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=Ct(e)?Pi:ct.current,r=e.contextTypes,s=(r=r!=null)?Ls(t,i):Wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function Wd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},gp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=Ct(e)?Pi:ct.current,i.context=Ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fc.enqueueReplaceState(i,i.state,null),Tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",r=e;do n+=Ck(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eC=typeof WeakMap=="function"?WeakMap:Map;function ZE(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cu||(Cu=!0,tf=r),qd(t,e)},n}function e0(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new eC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=pC.bind(null,t,e,n),e.then(t,t))}function My(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Lr(n,e,1))),n.lanes|=1),t)}var tC=nr.ReactCurrentOwner,kt=!1;function gt(t,e,n,r){e.child=t===null?xE(e,null,n,r):Os(e,t.child,n,r)}function Fy(t,e,n,r,i){n=n.render;var s=e.ref;return Ts(e,i),r=Ep(t,e,n,r,s,i),n=Tp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(ve&&n&&up(e),e.flags|=1,gt(t,e,r,i),e.child)}function Uy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,t0(t,e,s,r,i)):(t=Ql(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=Vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function t0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ca(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return Hd(t,e,n,r,i)}function n0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(gs,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(gs,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(gs,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(gs,Nt),Nt|=r;return gt(t,e,i,n),e.child}function r0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hd(t,e,n,r,i){var s=Ct(n)?Pi:ct.current;return s=Ls(e,s),Ts(e,i),n=Ep(t,e,n,r,s,i),r=Tp(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(ve&&r&&up(e),e.flags|=1,gt(t,e,n,i),e.child)}function zy(t,e,n,r,i){if(Ct(n)){var s=!0;yu(e)}else s=!1;if(Ts(e,i),e.stateNode===null)Hl(t,e),XE(e,n,r),Wd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=Ct(n)?Pi:ct.current,c=Ls(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Oy(e,o,r,c),gr=!1;var g=e.memoizedState;o.state=g,Tu(e,r,o,i),u=e.memoizedState,l!==r||g!==u||At.current||gr?(typeof d=="function"&&($d(e,n,d,r),u=e.memoizedState),(l=gr||Dy(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:tn(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=Ct(n)?Pi:ct.current,u=Ls(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Oy(e,o,r,u),gr=!1,g=e.memoizedState,o.state=g,Tu(e,r,o,i);var S=e.memoizedState;l!==p||g!==S||At.current||gr?(typeof w=="function"&&($d(e,n,w,r),S=e.memoizedState),(c=gr||Dy(e,n,c,r,g,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Kd(t,e,n,r,s,i)}function Kd(t,e,n,r,i,s){r0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ay(e,n,!1),Qn(t,e,s);r=e.stateNode,tC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,l,s)):gt(t,e,l,s),e.memoizedState=r.state,i&&Ay(e,n,!0),e.child}function i0(t){var e=t.stateNode;e.pendingContext?ky(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ky(t,e.context,!1),yp(t,e.containerInfo)}function By(t,e,n,r,i){return Ds(),hp(i),e.flags|=256,gt(t,e,n,r),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function s0(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(Te,i&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gc(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qd(n),e.memoizedState=Gd,t):kp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return nC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Vr(l,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gd,r}return s=t.child,t=s.sibling,r=Vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kp(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&hp(r),Os(e,t.child,null,n),t=kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zh(Error(z(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gc({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=Qd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return El(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=zh(s,r,void 0),El(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),an(r,t,i,-1))}return Np(),r=zh(Error(z(421))),El(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bt=br(i.nextSibling),Ot=e,ve=!0,rn=null,t!==null&&(Bt[$t++]=jn,Bt[$t++]=Fn,Bt[$t++]=Ni,jn=t.id,Fn=t.overflow,Ni=e),e=kp(e,r.children),e.flags|=4096,e)}function $y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bd(t.return,e,n)}function Bh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function o0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$y(t,n,e);else if(t.tag===19)$y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bh(e,!0,n,null,s);break;case"together":Bh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function rC(t,e,n){switch(e.tag){case 3:i0(e),Ds();break;case 5:bE(e);break;case 1:Ct(e.type)&&yu(e);break;case 4:yp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?s0(t,e,n):(fe(Te,Te.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);fe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return o0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,n0(t,e,n)}return Qn(t,e,n)}var a0,Yd,l0,u0;a0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yd=function(){};l0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(Sn.current);var s=null;switch(n){case"input":i=_d(t,i),r=_d(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=Ed(t,i),r=Ed(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mu)}Id(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ra.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};u0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Co(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iC(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Ct(e.type)&&gu(),st(e),null;case 3:return r=e.stateNode,Vs(),ye(At),ye(ct),vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(sf(rn),rn=null))),Yd(t,e),st(e),null;case 5:_p(e);var i=Ii(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)l0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return st(e),null}if(t=Ii(Sn.current),vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[fa]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Oo.length;i++)me(Oo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Xg(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":ey(r,s),me("invalid",r)}Id(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&_l(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&_l(r.textContent,l,t),i=["children",""+l]):ra.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":cl(r),Zg(r,s,!0);break;case"textarea":cl(r),ty(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[fa]=r,a0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oo.length;i++)me(Oo[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Xg(t,r),i=_d(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),me("invalid",t);break;case"textarea":ey(t,r),i=Ed(t,r),me("invalid",t);break;default:i=r}Id(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Uw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&jw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ia(t,u):typeof u=="number"&&ia(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ra.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Qf(t,s,u,o))}switch(n){case"input":cl(t),Zg(t,r,!1);break;case"textarea":cl(t),ty(t);break;case"option":r.value!=null&&t.setAttribute("value",""+$r(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_s(t,!!r.multiple,s,!1):r.defaultValue!=null&&_s(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)u0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ii(ma.current),Ii(Sn.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:_l(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_l(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return st(e),null;case 13:if(ye(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&bt!==null&&e.mode&1&&!(e.flags&128))CE(),Ds(),e.flags|=98560,s=!1;else if(s=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[wn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else rn!==null&&(sf(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?We===0&&(We=3):Np())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Vs(),Yd(t,e),t===null&&ha(e.stateNode.containerInfo),st(e),null;case 10:return pp(e.type._context),st(e),null;case 17:return Ct(e.type)&&gu(),st(e),null;case 19:if(ye(Te),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Co(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,Co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>js&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304)}else{if(!r)if(t=Iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return st(e),null}else 2*De()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Te.current,fe(Te,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function sC(t,e){switch(cp(e),e.tag){case 1:return Ct(e.type)&&gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),ye(At),ye(ct),vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(ye(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Te),null;case 4:return Vs(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var Tl=!1,lt=!1,oC=typeof WeakSet=="function"?WeakSet:Set,q=null;function ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Jd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Wy=!1;function aC(t,e){if(Dd=du,t=pE(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,g=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Od={focusedElem:t,selectionRange:n},du=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,b=S.memoizedState,I=e.stateNode,y=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:tn(e.type,P),b);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(N){Re(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return S=Wy,Wy=!1,S}function Go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jd(e,n,s)}i=i.next}while(i!==r)}}function pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function c0(t){var e=t.alternate;e!==null&&(t.alternate=null,c0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[fa],delete e[jd],delete e[$A],delete e[WA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function h0(t){return t.tag===5||t.tag===3||t.tag===4}function qy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||h0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mu));else if(r!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}function ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}var Ye=null,nn=!1;function dr(t,e,n){for(n=n.child;n!==null;)d0(t,e,n),n=n.sibling}function d0(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(oc,n)}catch{}switch(n.tag){case 5:lt||ms(n,e);case 6:var r=Ye,i=nn;Ye=null,dr(t,e,n),Ye=r,nn=i,Ye!==null&&(nn?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(nn?(t=Ye,n=n.stateNode,t.nodeType===8?Oh(t.parentNode,n):t.nodeType===1&&Oh(t,n),la(t)):Oh(Ye,n.stateNode));break;case 4:r=Ye,i=nn,Ye=n.stateNode.containerInfo,nn=!0,dr(t,e,n),Ye=r,nn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jd(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!lt&&(ms(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,dr(t,e,n),lt=r):dr(t,e,n);break;default:dr(t,e,n)}}function Hy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oC),e.forEach(function(r){var i=gC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,nn=!1;break e;case 3:Ye=l.stateNode.containerInfo,nn=!0;break e;case 4:Ye=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(Ye===null)throw Error(z(160));d0(s,o,i),Ye=null,nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f0(e,t),e=e.sibling}function f0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),yn(t),r&4){try{Go(3,t,t.return),pc(3,t)}catch(P){Re(t,t.return,P)}try{Go(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:en(e,t),yn(t),r&512&&n!==null&&ms(n,n.return);break;case 5:if(en(e,t),yn(t),r&512&&n!==null&&ms(n,n.return),t.flags&32){var i=t.stateNode;try{ia(i,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ow(i,s),Sd(l,o);var c=Sd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Uw(i,p):d==="dangerouslySetInnerHTML"?jw(i,p):d==="children"?ia(i,p):Qf(i,d,p,c)}switch(l){case"input":vd(i,s);break;case"textarea":Vw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?_s(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?_s(i,!!s.multiple,s.defaultValue,!0):_s(i,!!s.multiple,s.multiple?[]:"",!1))}i[fa]=s}catch(P){Re(t,t.return,P)}}break;case 6:if(en(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Re(t,t.return,P)}}break;case 3:if(en(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{la(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:en(e,t),yn(t);break;case 13:en(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rp=De())),r&4&&Hy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(c=lt)||d,en(e,t),lt=c):en(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(g=q,w=g.child,g.tag){case 0:case 11:case 14:case 15:Go(4,g,g.return);break;case 1:ms(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:ms(g,g.return);break;case 22:if(g.memoizedState!==null){Gy(p);continue}}w!==null?(w.return=g,q=w):Gy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Fw("display",o))}catch(P){Re(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Re(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(e,t),yn(t),r&4&&Hy(t);break;case 21:break;default:en(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(h0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ia(i,""),r.flags&=-33);var s=qy(t);ef(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qy(t);Zd(t,l,o);break;default:throw Error(z(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lC(t,e,n){q=t,p0(t)}function p0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||lt;l=Tl;var c=lt;if(Tl=o,(lt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Qy(i):u!==null?(u.return=o,q=u):Qy(i);for(;s!==null;)q=s,p0(s),s=s.sibling;q=i,Tl=l,lt=c}Ky(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Ky(t)}}function Ky(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||pc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ny(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ny(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&la(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}lt||e.flags&512&&Xd(e)}catch(g){Re(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Gy(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Qy(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pc(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{Xd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{Xd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var uC=Math.ceil,Au=nr.ReactCurrentDispatcher,Ap=nr.ReactCurrentOwner,Kt=nr.ReactCurrentBatchConfig,oe=0,Qe=null,Me=null,Ze=0,Nt=0,gs=ei(0),We=0,va=null,Li=0,mc=0,Cp=0,Qo=null,It=null,Rp=0,js=1/0,On=null,Cu=!1,tf=null,Dr=null,Il=!1,Cr=null,Ru=0,Yo=0,nf=null,Kl=-1,Gl=0;function yt(){return oe&6?De():Kl!==-1?Kl:Kl=De()}function Or(t){return t.mode&1?oe&2&&Ze!==0?Ze&-Ze:HA.transition!==null?(Gl===0&&(Gl=Xw()),Gl):(t=le,t!==0||(t=window.event,t=t===void 0?16:sE(t.type)),t):1}function an(t,e,n,r){if(50<Yo)throw Yo=0,nf=null,Error(z(185));Da(t,n,r),(!(oe&2)||t!==Qe)&&(t===Qe&&(!(oe&2)&&(mc|=n),We===4&&_r(t,Ze)),Rt(t,r),n===1&&oe===0&&!(e.mode&1)&&(js=De()+500,hc&&ti()))}function Rt(t,e){var n=t.callbackNode;Hk(t,e);var r=hu(t,t===Qe?Ze:0);if(r===0)n!==null&&iy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&iy(n),e===1)t.tag===0?qA(Yy.bind(null,t)):SE(Yy.bind(null,t)),zA(function(){!(oe&6)&&ti()}),n=null;else{switch(Zw(r)){case 1:n=ep;break;case 4:n=Yw;break;case 16:n=cu;break;case 536870912:n=Jw;break;default:n=cu}n=T0(n,m0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function m0(t,e){if(Kl=-1,Gl=0,oe&6)throw Error(z(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var r=hu(t,t===Qe?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xu(t,r);else{e=r;var i=oe;oe|=2;var s=y0();(Qe!==t||Ze!==e)&&(On=null,js=De()+500,Ai(t,e));do try{dC();break}catch(l){g0(t,l)}while(!0);fp(),Au.current=s,oe=i,Me!==null?e=0:(Qe=null,Ze=0,e=We)}if(e!==0){if(e===2&&(i=xd(t),i!==0&&(r=i,e=rf(t,i))),e===1)throw n=va,Ai(t,0),_r(t,r),Rt(t,De()),n;if(e===6)_r(t,r);else{if(i=t.current.alternate,!(r&30)&&!cC(i)&&(e=xu(t,r),e===2&&(s=xd(t),s!==0&&(r=s,e=rf(t,s))),e===1))throw n=va,Ai(t,0),_r(t,r),Rt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:vi(t,It,On);break;case 3:if(_r(t,r),(r&130023424)===r&&(e=Rp+500-De(),10<e)){if(hu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Md(vi.bind(null,t,It,On),e);break}vi(t,It,On);break;case 4:if(_r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uC(r/1960))-r,10<r){t.timeoutHandle=Md(vi.bind(null,t,It,On),r);break}vi(t,It,On);break;case 5:vi(t,It,On);break;default:throw Error(z(329))}}}return Rt(t,De()),t.callbackNode===n?m0.bind(null,t):null}function rf(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(Ai(t,e).flags|=256),t=xu(t,e),t!==2&&(e=It,It=n,e!==null&&sf(e)),t}function sf(t){It===null?It=t:It.push.apply(It,t)}function cC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Cp,e&=~mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Yy(t){if(oe&6)throw Error(z(327));Is();var e=hu(t,0);if(!(e&1))return Rt(t,De()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var r=xd(t);r!==0&&(e=r,n=rf(t,r))}if(n===1)throw n=va,Ai(t,0),_r(t,e),Rt(t,De()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,It,On),Rt(t,De()),null}function xp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(js=De()+500,hc&&ti())}}function Di(t){Cr!==null&&Cr.tag===0&&!(oe&6)&&Is();var e=oe;oe|=1;var n=Kt.transition,r=le;try{if(Kt.transition=null,le=1,t)return t()}finally{le=r,Kt.transition=n,oe=e,!(oe&6)&&ti()}}function Pp(){Nt=gs.current,ye(gs)}function Ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UA(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gu();break;case 3:Vs(),ye(At),ye(ct),vp();break;case 5:_p(r);break;case 4:Vs();break;case 13:ye(Te);break;case 19:ye(Te);break;case 10:pp(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(Qe=t,Me=t=Vr(t.current,null),Ze=Nt=e,We=0,va=null,Cp=mc=Li=0,It=Qo=null,Ti!==null){for(e=0;e<Ti.length;e++)if(n=Ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ti=null}return t}function g0(t,e){do{var n=Me;try{if(fp(),Wl.current=ku,Su){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Su=!1}if(bi=0,Ge=$e=Ie=null,Ko=!1,ga=0,Ap.current=null,n===null||n.return===null){We=1,va=e,Me=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=My(o);if(w!==null){w.flags&=-257,jy(w,o,l,s,e),w.mode&1&&Vy(s,c,e),e=w,u=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(u),e.updateQueue=P}else S.add(u);break e}else{if(!(e&1)){Vy(s,c,e),Np();break e}u=Error(z(426))}}else if(ve&&l.mode&1){var b=My(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),jy(b,o,l,s,e),hp(Ms(u,l));break e}}s=u=Ms(u,l),We!==4&&(We=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=ZE(s,u,e);Py(s,I);break e;case 1:l=u;var y=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Dr===null||!Dr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=e0(s,l,e);Py(s,N);break e}}s=s.return}while(s!==null)}v0(n)}catch(V){e=V,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function y0(){var t=Au.current;return Au.current=ku,t===null?ku:t}function Np(){(We===0||We===3||We===2)&&(We=4),Qe===null||!(Li&268435455)&&!(mc&268435455)||_r(Qe,Ze)}function xu(t,e){var n=oe;oe|=2;var r=y0();(Qe!==t||Ze!==e)&&(On=null,Ai(t,e));do try{hC();break}catch(i){g0(t,i)}while(!0);if(fp(),oe=n,Au.current=r,Me!==null)throw Error(z(261));return Qe=null,Ze=0,We}function hC(){for(;Me!==null;)_0(Me)}function dC(){for(;Me!==null&&!Mk();)_0(Me)}function _0(t){var e=E0(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?v0(t):Me=e,Ap.current=null}function v0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sC(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Me=null;return}}else if(n=iC(n,e,Nt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);We===0&&(We=5)}function vi(t,e,n){var r=le,i=Kt.transition;try{Kt.transition=null,le=1,fC(t,e,n,r)}finally{Kt.transition=i,le=r}return null}function fC(t,e,n,r){do Is();while(Cr!==null);if(oe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Kk(t,s),t===Qe&&(Me=Qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Il||(Il=!0,T0(cu,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=le;le=1;var l=oe;oe|=4,Ap.current=null,aC(t,n),f0(n,t),LA(Od),du=!!Dd,Od=Dd=null,t.current=n,lC(n),jk(),oe=l,le=o,Kt.transition=s}else t.current=n;if(Il&&(Il=!1,Cr=t,Ru=i),s=t.pendingLanes,s===0&&(Dr=null),zk(n.stateNode),Rt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cu)throw Cu=!1,t=tf,tf=null,t;return Ru&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===nf?Yo++:(Yo=0,nf=t):Yo=0,ti(),null}function Is(){if(Cr!==null){var t=Zw(Ru),e=Kt.transition,n=le;try{if(Kt.transition=null,le=16>t?16:t,Cr===null)var r=!1;else{if(t=Cr,Cr=null,Ru=0,oe&6)throw Error(z(331));var i=oe;for(oe|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:Go(8,d,s)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var g=d.sibling,w=d.return;if(c0(d),d===c){q=null;break}if(g!==null){g.return=w,q=g;break}q=w}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Go(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,q=I;break e}q=s.return}}var y=t.current;for(q=y;q!==null;){o=q;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,q=E;else e:for(o=y;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pc(9,l)}}catch(V){Re(l,l.return,V)}if(l===o){q=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,q=N;break e}q=l.return}}if(oe=i,ti(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(oc,t)}catch{}r=!0}return r}finally{le=n,Kt.transition=e}}return!1}function Jy(t,e,n){e=Ms(n,e),e=ZE(t,e,1),t=Lr(t,e,1),e=yt(),t!==null&&(Da(t,1,e),Rt(t,e))}function Re(t,e,n){if(t.tag===3)Jy(t,t,n);else for(;e!==null;){if(e.tag===3){Jy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=Ms(n,t),t=e0(e,t,1),e=Lr(e,t,1),t=yt(),e!==null&&(Da(e,1,t),Rt(e,t));break}}e=e.return}}function pC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(Ze&n)===n&&(We===4||We===3&&(Ze&130023424)===Ze&&500>De()-Rp?Ai(t,0):Cp|=n),Rt(t,e)}function w0(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=yt();t=Gn(t,e),t!==null&&(Da(t,e,n),Rt(t,n))}function mC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w0(t,n)}function gC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),w0(t,n)}var E0;E0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,rC(t,e,n);kt=!!(t.flags&131072)}else kt=!1,ve&&e.flags&1048576&&kE(e,vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hl(t,e),t=e.pendingProps;var i=Ls(e,ct.current);Ts(e,n),i=Ep(null,e,r,t,i,n);var s=Tp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,yu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gp(e),i.updater=fc,e.stateNode=i,i._reactInternals=e,Wd(e,r,t,n),e=Kd(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&up(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_C(r),t=tn(r,t),i){case 0:e=Hd(null,e,r,t,n);break e;case 1:e=zy(null,e,r,t,n);break e;case 11:e=Fy(null,e,r,t,n);break e;case 14:e=Uy(null,e,r,tn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Hd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),zy(t,e,r,i,n);case 3:e:{if(i0(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,NE(t,e),Tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ms(Error(z(423)),e),e=By(t,e,r,n,i);break e}else if(r!==i){i=Ms(Error(z(424)),e),e=By(t,e,r,n,i);break e}else for(bt=br(e.stateNode.containerInfo.firstChild),Ot=e,ve=!0,rn=null,n=xE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),r===i){e=Qn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return bE(e),t===null&&zd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vd(r,i)?o=null:s!==null&&Vd(r,s)&&(e.flags|=32),r0(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&zd(e),null;case 13:return s0(t,e,n);case 4:return yp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Os(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Fy(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(wu,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!At.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Wn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ts(e,n),i=Gt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),Uy(t,e,r,i,n);case 15:return t0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Hl(t,e),e.tag=1,Ct(r)?(t=!0,yu(e)):t=!1,Ts(e,n),XE(e,r,i),Wd(e,r,i,n),Kd(null,e,r,!0,t,n);case 19:return o0(t,e,n);case 22:return n0(t,e,n)}throw Error(z(156,e.tag))};function T0(t,e){return Qw(t,e)}function yC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new yC(t,e,n,r)}function bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _C(t){if(typeof t=="function")return bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jf)return 11;if(t===Xf)return 14}return 2}function Vr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ql(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case os:return Ci(n.children,i,s,e);case Yf:o=8,i|=8;break;case pd:return t=Ht(12,n,e,i|2),t.elementType=pd,t.lanes=s,t;case md:return t=Ht(13,n,e,i),t.elementType=md,t.lanes=s,t;case gd:return t=Ht(19,n,e,i),t.elementType=gd,t.lanes=s,t;case bw:return gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pw:o=10;break e;case Nw:o=9;break e;case Jf:o=11;break e;case Xf:o=14;break e;case mr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function gc(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=bw,t.lanes=n,t.stateNode={isHidden:!1},t}function $h(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Wh(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sh(0),this.expirationTimes=Sh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,r,i,s,o,l,u){return t=new vC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),t}function wC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function I0(t){if(!t)return Wr;t=t._reactInternals;e:{if($i(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Ct(n))return IE(t,n,e)}return e}function S0(t,e,n,r,i,s,o,l,u){return t=Lp(n,r,!0,t,i,s,o,l,u),t.context=I0(null),n=t.current,r=yt(),i=Or(n),s=Wn(r,i),s.callback=e??null,Lr(n,s,i),t.current.lanes=i,Da(t,i,r),Rt(t,r),t}function yc(t,e,n,r){var i=e.current,s=yt(),o=Or(i);return n=I0(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Lr(i,e,o),t!==null&&(an(t,i,o,s),$l(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){Xy(t,e),(t=t.alternate)&&Xy(t,e)}function EC(){return null}var k0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Op(t){this._internalRoot=t}_c.prototype.render=Op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));yc(t,e,null,null)};_c.prototype.unmount=Op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){yc(null,t,null,null)}),e[Kn]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var e=nE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&iE(t)}};function Vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zy(){}function TC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Pu(o);s.call(c)}}var o=S0(e,r,t,0,null,!1,!1,"",Zy);return t._reactRootContainer=o,t[Kn]=o.current,ha(t.nodeType===8?t.parentNode:t),Di(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Pu(u);l.call(c)}}var u=Lp(t,0,!1,null,null,!1,!1,"",Zy);return t._reactRootContainer=u,t[Kn]=u.current,ha(t.nodeType===8?t.parentNode:t),Di(function(){yc(e,u,n,r)}),u}function wc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Pu(o);l.call(u)}}yc(e,o,t,i)}else o=TC(n,e,t,i,r);return Pu(o)}eE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&(tp(e,n|1),Rt(e,De()),!(oe&6)&&(js=De()+500,ti()))}break;case 13:Di(function(){var r=Gn(t,1);if(r!==null){var i=yt();an(r,t,1,i)}}),Dp(t,1)}};np=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=yt();an(e,t,134217728,n)}Dp(t,134217728)}};tE=function(t){if(t.tag===13){var e=Or(t),n=Gn(t,e);if(n!==null){var r=yt();an(n,t,e,r)}Dp(t,e)}};nE=function(){return le};rE=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Ad=function(t,e,n){switch(e){case"input":if(vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cc(r);if(!i)throw Error(z(90));Dw(r),vd(r,i)}}}break;case"textarea":Vw(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};$w=xp;Ww=Di;var IC={usingClientEntryPoint:!1,Events:[Va,cs,cc,zw,Bw,xp]},Ro={findFiberByHostInstance:Ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SC={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||EC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{oc=Sl.inject(SC),In=Sl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IC;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vp(e))throw Error(z(200));return wC(t,e,null,n)};jt.createRoot=function(t,e){if(!Vp(t))throw Error(z(299));var n=!1,r="",i=k0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,r,i),t[Kn]=e.current,ha(t.nodeType===8?t.parentNode:t),new Op(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Kw(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return Di(t)};jt.hydrate=function(t,e,n){if(!vc(e))throw Error(z(200));return wc(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Vp(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=k0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S0(e,null,t,1,n??null,i,!1,s,o),t[Kn]=e.current,ha(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _c(e)};jt.render=function(t,e,n){if(!vc(e))throw Error(z(200));return wc(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!vc(t))throw Error(z(40));return t._reactRootContainer?(Di(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Kn]=null})}),!0):!1};jt.unstable_batchedUpdates=xp;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return wc(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function A0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A0)}catch(t){console.error(t)}}A0(),Aw.exports=jt;var kC=Aw.exports,e_=kC;dd.createRoot=e_.createRoot,dd.hydrateRoot=e_.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wa.apply(this,arguments)}var Rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rr||(Rr={}));const t_="popstate";function AC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return of("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Nu(i)}return RC(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CC(){return Math.random().toString(36).substr(2,8)}function n_(t,e){return{usr:t.state,key:t.key,idx:e}}function of(t,e,n,r){return n===void 0&&(n=null),wa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gs(e):e,{state:n,key:e&&e.key||r||CC()})}function Nu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function RC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Rr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(wa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Rr.Pop;let b=d(),I=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:I})}function g(b,I){l=Rr.Push;let y=of(P.location,b,I);c=d()+1;let E=n_(y,c),N=P.createHref(y);try{o.pushState(E,"",N)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(N)}s&&u&&u({action:l,location:P.location,delta:1})}function w(b,I){l=Rr.Replace;let y=of(P.location,b,I);c=d();let E=n_(y,c),N=P.createHref(y);o.replaceState(E,"",N),s&&u&&u({action:l,location:P.location,delta:0})}function S(b){let I=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof b=="string"?b:Nu(b);return y=y.replace(/ $/,"%20"),Se(I,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,I)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(t_,p),u=b,()=>{i.removeEventListener(t_,p),u=null}},createHref(b){return e(i,b)},createURL:S,encodeLocation(b){let I=S(b);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:w,go(b){return o.go(b)}};return P}var r_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(r_||(r_={}));function xC(t,e,n){return n===void 0&&(n="/"),PC(t,e,n)}function PC(t,e,n,r){let i=typeof e=="string"?Gs(e):e,s=Fs(i.pathname||"/",n);if(s==null)return null;let o=C0(t);NC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=BC(s);l=UC(o[u],c)}return l}function C0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Mr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),C0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:jC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of R0(s.path))i(s,o,u)}),e}function R0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=R0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function NC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bC=/^:[\w-]+$/,LC=3,DC=2,OC=1,VC=10,MC=-2,i_=t=>t==="*";function jC(t,e){let n=t.split("/"),r=n.length;return n.some(i_)&&(r+=MC),e&&(r+=DC),n.filter(i=>!i_(i)).reduce((i,s)=>i+(bC.test(s)?LC:s===""?OC:VC),r)}function FC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=af({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Mr([s,p.pathname]),pathnameBase:KC(Mr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Mr([s,p.pathnameBase]))}return o}function af(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const S=l[p];return w&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function zC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Fs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const $C=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,WC=t=>$C.test(t);function qC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gs(t):t,s;if(n)if(WC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Mp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=s_(n.substring(1),"/"):s=s_(n,e)}else s=e;return{pathname:s,search:GC(r),hash:QC(i)}}function s_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function HC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jp(t,e){let n=HC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gs(t):(i=wa({},t),Se(!i.pathname||!i.pathname.includes("?"),qh("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),qh("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),qh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=qC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Mr=t=>t.join("/").replace(/\/\/+/g,"/"),KC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,QC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function YC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const x0=["post","put","patch","delete"];new Set(x0);const JC=["get",...x0];new Set(JC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ea.apply(this,arguments)}const Ec=R.createContext(null),P0=R.createContext(null),rr=R.createContext(null),Tc=R.createContext(null),bn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),N0=R.createContext(null);function XC(t,e){let{relative:n}=e===void 0?{}:e;Qs()||Se(!1);let{basename:r,navigator:i}=R.useContext(rr),{hash:s,pathname:o,search:l}=Sc(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Mr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Qs(){return R.useContext(Tc)!=null}function Ln(){return Qs()||Se(!1),R.useContext(Tc).location}function b0(t){R.useContext(rr).static||R.useLayoutEffect(t)}function Ic(){let{isDataRoute:t}=R.useContext(bn);return t?fR():ZC()}function ZC(){Qs()||Se(!1);let t=R.useContext(Ec),{basename:e,future:n,navigator:r}=R.useContext(rr),{matches:i}=R.useContext(bn),{pathname:s}=Ln(),o=JSON.stringify(jp(i,n.v7_relativeSplatPath)),l=R.useRef(!1);return b0(()=>{l.current=!0}),R.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Fp(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Mr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const eR=R.createContext(null);function tR(t){let e=R.useContext(bn).outlet;return e&&R.createElement(eR.Provider,{value:t},e)}function SF(){let{matches:t}=R.useContext(bn),e=t[t.length-1];return e?e.params:{}}function Sc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(rr),{matches:i}=R.useContext(bn),{pathname:s}=Ln(),o=JSON.stringify(jp(i,r.v7_relativeSplatPath));return R.useMemo(()=>Fp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nR(t,e){return rR(t,e)}function rR(t,e,n,r){Qs()||Se(!1);let{navigator:i}=R.useContext(rr),{matches:s}=R.useContext(bn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ln(),d;if(e){var p;let b=typeof e=="string"?Gs(e):e;u==="/"||(p=b.pathname)!=null&&p.startsWith(u)||Se(!1),d=b}else d=c;let g=d.pathname||"/",w=g;if(u!=="/"){let b=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=xC(t,{pathname:w}),P=lR(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Mr([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Mr([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&P?R.createElement(Tc.Provider,{value:{location:Ea({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Rr.Pop}},P):P}function iR(){let t=dR(),e=YC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,null)}const sR=R.createElement(iR,null);class oR extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(bn.Provider,{value:this.props.routeContext},R.createElement(N0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function aR(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Ec);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(bn.Provider,{value:e},r)}function lR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Se(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:g,errors:w}=n,S=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let w,S=!1,P=null,b=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||sR,u&&(c<0&&g===0?(pR("route-fallback"),S=!0,b=null):c===g&&(S=!0,b=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),y=()=>{let E;return w?E=P:S?E=b:p.route.Component?E=R.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,R.createElement(aR,{match:p,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?R.createElement(oR,{location:n.location,revalidation:n.revalidation,component:P,error:w,children:y(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):y()},null)}var L0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(L0||{}),bu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bu||{});function uR(t){let e=R.useContext(Ec);return e||Se(!1),e}function cR(t){let e=R.useContext(P0);return e||Se(!1),e}function hR(t){let e=R.useContext(bn);return e||Se(!1),e}function D0(t){let e=hR(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function dR(){var t;let e=R.useContext(N0),n=cR(bu.UseRouteError),r=D0(bu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fR(){let{router:t}=uR(L0.UseNavigateStable),e=D0(bu.UseNavigateStable),n=R.useRef(!1);return b0(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ea({fromRouteId:e},s)))},[t,e])}const o_={};function pR(t,e,n){o_[t]||(o_[t]=!0)}function mR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function gR(t){let{to:e,replace:n,state:r,relative:i}=t;Qs()||Se(!1);let{future:s,static:o}=R.useContext(rr),{matches:l}=R.useContext(bn),{pathname:u}=Ln(),c=Ic(),d=Fp(e,jp(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return R.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function yR(t){return tR(t.context)}function Oe(t){Se(!1)}function _R(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Rr.Pop,navigator:s,static:o=!1,future:l}=t;Qs()&&Se(!1);let u=e.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:u,navigator:s,static:o,future:Ea({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Gs(r));let{pathname:d="/",search:p="",hash:g="",state:w=null,key:S="default"}=r,P=R.useMemo(()=>{let b=Fs(d,u);return b==null?null:{location:{pathname:b,search:p,hash:g,state:w,key:S},navigationType:i}},[u,d,p,g,w,S,i]);return P==null?null:R.createElement(rr.Provider,{value:c},R.createElement(Tc.Provider,{children:n,value:P}))}function vR(t){let{children:e,location:n}=t;return nR(lf(e),n)}new Promise(()=>{});function lf(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,lf(r.props.children,s));return}r.type!==Oe&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lu(){return Lu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lu.apply(this,arguments)}function O0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ER(t,e){return t.button===0&&(!e||e==="_self")&&!wR(t)}function uf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function TR(t,e){let n=uf(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const IR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],SR=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],kR="6";try{window.__reactRouterVersion=kR}catch{}const AR=R.createContext({isTransitioning:!1}),CR="startTransition",a_=pk[CR];function RR(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=AC({window:i,v5Compat:!0}));let o=s.current,[l,u]=R.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=R.useCallback(p=>{c&&a_?a_(()=>u(p)):u(p)},[u,c]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.useEffect(()=>mR(r),[r]),R.createElement(_R,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const xR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Et=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,g=O0(e,IR),{basename:w}=R.useContext(rr),S,P=!1;if(typeof c=="string"&&PR.test(c)&&(S=c,xR))try{let E=new URL(window.location.href),N=c.startsWith("//")?new URL(E.protocol+c):new URL(c),V=Fs(N.pathname,w);N.origin===E.origin&&V!=null?c=V+N.search+N.hash:P=!0}catch{}let b=XC(c,{relative:i}),I=bR(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function y(E){r&&r(E),E.defaultPrevented||I(E)}return R.createElement("a",Lu({},g,{href:S||b,onClick:P||s?r:y,ref:n,target:u}))}),zt=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,p=O0(e,SR),g=Sc(u,{relative:p.relative}),w=Ln(),S=R.useContext(P0),{navigator:P,basename:b}=R.useContext(rr),I=S!=null&&LR(g)&&c===!0,y=P.encodeLocation?P.encodeLocation(g).pathname:g.pathname,E=w.pathname,N=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(E=E.toLowerCase(),N=N?N.toLowerCase():null,y=y.toLowerCase()),N&&b&&(N=Fs(N,b)||N);const V=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let j=E===y||!o&&E.startsWith(y)&&E.charAt(V)==="/",T=N!=null&&(N===y||!o&&N.startsWith(y)&&N.charAt(y.length)==="/"),_={isActive:j,isPending:T,isTransitioning:I},k=j?r:void 0,C;typeof s=="function"?C=s(_):C=[s,j?"active":null,T?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let x=typeof l=="function"?l(_):l;return R.createElement(Et,Lu({},p,{"aria-current":k,className:C,ref:n,style:x,to:u,viewTransition:c}),typeof d=="function"?d(_):d)});var cf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cf||(cf={}));var l_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(l_||(l_={}));function NR(t){let e=R.useContext(Ec);return e||Se(!1),e}function bR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Ic(),c=Ln(),d=Sc(t,{relative:o});return R.useCallback(p=>{if(ER(p,n)){p.preventDefault();let g=r!==void 0?r:Nu(c)===Nu(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function kF(t){let e=R.useRef(uf(t)),n=R.useRef(!1),r=Ln(),i=R.useMemo(()=>TR(r.search,n.current?null:e.current),[r.search]),s=Ic(),o=R.useCallback((l,u)=>{const c=uf(typeof l=="function"?l(i):l);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}function LR(t,e){e===void 0&&(e={});let n=R.useContext(AR);n==null&&Se(!1);let{basename:r}=NR(cf.useViewTransitionState),i=Sc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Fs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Fs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return af(i.pathname,o)!=null||af(i.pathname,s)!=null}function DR(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}function OR(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...r}=t;return{...e,...r}}return t}const VR=t=>!!(t&&t.getVelocity),u_=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),MR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Du(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||MR.has(t)}let V0=t=>!Du(t);function M0(t){typeof t=="function"&&(V0=e=>e.startsWith("on")?!Du(e):t(e))}try{M0(require("@emotion/is-prop-valid").default)}catch{}function AF(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||VR(t[i])||(V0(i)||n===!0&&Du(i)||!e&&!Du(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function jR({children:t,isValidProp:e,...n}){e&&M0(e);const r=R.useContext(u_);n={...r,...n},n.transition=OR(n.transition,r.transition),n.isStatic=DR(()=>n.isStatic);const i=R.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion,n.skipAnimations]);return f.jsx(u_.Provider,{value:i,children:t})}const FR="modulepreload",UR=function(t){return"/"+t},c_={},nt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=UR(u),u in c_)return;c_[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":FR,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},ue={home:"/",about:"/nosotros",products:"/productos",productDetail:"/productos/:slug",support:"/soporte",contact:"/contacto",crimePrevention:"/accesos/modelo-prevencion-delitos",login:"/login",partnerPortal:"/portal-socios",account:"/mi-cuenta",adminDashboard:"/admin",rootDashboard:"/root",vendorDashboard:"/vendedor",warehouseDashboard:"/bodega",notFound:"*"},j0=R.createContext(void 0);function zR({children:t}){const[e,n]=R.useState(""),[r,i]=R.useState("name-asc"),[s,o]=R.useState("grid"),[l,u]=R.useState([0,1e7]),[c,d]=R.useState([]),[p,g]=R.useState(!1),w=()=>{n(""),i("name-asc"),u([0,1e7]),d([]),g(!1)};return f.jsx(j0.Provider,{value:{term:e,setTerm:n,sortBy:r,setSortBy:i,viewMode:s,setViewMode:o,priceRange:l,setPriceRange:u,selectedBrands:c,setSelectedBrands:d,inStock:p,setInStock:g,clearFilters:w},children:t})}function BR(){const t=R.useContext(j0);if(!t)throw new Error("useSearchStore debe usarse dentro de SearchProvider");return t}const $R=()=>{};var h_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},U0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(g=64)),r.push(n[d],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new qR;const g=s<<2|l>>4;if(r.push(g),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HR=function(t){const e=F0(t);return U0.encodeByteArray(e,!0)},Ou=function(t){return HR(t).replace(/\./g,"")},z0=function(t){try{return U0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=()=>KR().__FIREBASE_DEFAULTS__,QR=()=>{if(typeof process>"u"||typeof h_>"u")return;const t=h_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z0(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return $R()||GR()||QR()||YR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B0=t=>{var e,n;return(n=(e=kc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},$0=t=>{const e=B0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},W0=()=>{var t;return(t=kc())==null?void 0:t.config},q0=t=>{var e;return(e=kc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ou(JSON.stringify(n)),Ou(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function ZR(){var e;const t=(e=kc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ex(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function K0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nx(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rx(){return!ZR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function G0(){try{return typeof indexedDB=="object"}catch{return!1}}function Q0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function ix(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sx,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ox(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,l,r)}}function ox(t,e){return t.replace(ax,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ax=/\{\$([^}]+)}/g;function lx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(d_(s)&&d_(o)){if(!qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function d_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ux(t,e){const n=new cx(t,e);return n.subscribe.bind(n)}class cx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hh),i.error===void 0&&(i.error=Hh),i.complete===void 0&&(i.complete=Hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=1e3,fx=2,px=4*60*60*1e3,mx=.5;function f_(t,e=dx,n=fx){const r=e*Math.pow(n,t),i=Math.round(mx*r*(Math.random()-.5)*2);return Math.min(px,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Up(t){return(await fetch(t,{credentials:"include"})).ok}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_x(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yx(t){return t===wi?void 0:t}function _x(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const wx={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Ex=ie.INFO,Tx={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Ix=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Tx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Ac=class{constructor(e){this.name=e,this._logLevel=Ex,this._logHandler=Ix,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}};const Sx=(t,e)=>e.some(n=>t instanceof n);let p_,m_;function kx(){return p_||(p_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ax(){return m_||(m_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Y0=new WeakMap,hf=new WeakMap,J0=new WeakMap,Kh=new WeakMap,zp=new WeakMap;function Cx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(jr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Y0.set(n,t)}).catch(()=>{}),zp.set(e,t),e}function Rx(t){if(hf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hf.set(t,e)}let df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xx(t){df=t(df)}function Px(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gh(this),e,...n);return J0.set(r,e.sort?e.sort():[e]),jr(r)}:Ax().includes(t)?function(...e){return t.apply(Gh(this),e),jr(Y0.get(this))}:function(...e){return jr(t.apply(Gh(this),e))}}function Nx(t){return typeof t=="function"?Px(t):(t instanceof IDBTransaction&&Rx(t),Sx(t,kx())?new Proxy(t,df):t)}function jr(t){if(t instanceof IDBRequest)return Cx(t);if(Kh.has(t))return Kh.get(t);const e=Nx(t);return e!==t&&(Kh.set(t,e),zp.set(e,t)),e}const Gh=t=>zp.get(t);function X0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=jr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(jr(o.result),u.oldVersion,u.newVersion,jr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const bx=["get","getKey","getAll","getAllKeys","count"],Lx=["put","add","delete","clear"],Qh=new Map;function g_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Qh.set(e,s),s}xx(t=>({...t,get:(e,n,r)=>g_(e,n)||t.get(e,n,r),has:(e,n)=>!!g_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ox(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ox(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",y_="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Ac("@firebase/app"),Vx="@firebase/app-compat",Mx="@firebase/analytics-compat",jx="@firebase/analytics",Fx="@firebase/app-check-compat",Ux="@firebase/app-check",zx="@firebase/auth",Bx="@firebase/auth-compat",$x="@firebase/database",Wx="@firebase/data-connect",qx="@firebase/database-compat",Hx="@firebase/functions",Kx="@firebase/functions-compat",Gx="@firebase/installations",Qx="@firebase/installations-compat",Yx="@firebase/messaging",Jx="@firebase/messaging-compat",Xx="@firebase/performance",Zx="@firebase/performance-compat",eP="@firebase/remote-config",tP="@firebase/remote-config-compat",nP="@firebase/storage",rP="@firebase/storage-compat",iP="@firebase/firestore",sP="@firebase/ai",oP="@firebase/firestore-compat",aP="firebase",lP="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="[DEFAULT]",uP={[ff]:"fire-core",[Vx]:"fire-core-compat",[jx]:"fire-analytics",[Mx]:"fire-analytics-compat",[Ux]:"fire-app-check",[Fx]:"fire-app-check-compat",[zx]:"fire-auth",[Bx]:"fire-auth-compat",[$x]:"fire-rtdb",[Wx]:"fire-data-connect",[qx]:"fire-rtdb-compat",[Hx]:"fire-fn",[Kx]:"fire-fn-compat",[Gx]:"fire-iid",[Qx]:"fire-iid-compat",[Yx]:"fire-fcm",[Jx]:"fire-fcm-compat",[Xx]:"fire-perf",[Zx]:"fire-perf-compat",[eP]:"fire-rc",[tP]:"fire-rc-compat",[nP]:"fire-gcs",[rP]:"fire-gcs-compat",[iP]:"fire-fst",[oP]:"fire-fst-compat",[sP]:"fire-vertex","fire-js":"fire-js",[aP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map,cP=new Map,mf=new Map;function __(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(mf.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;mf.set(e,t);for(const n of Vu.values())__(n,t);for(const n of cP.values())__(n,t);return!0}function ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new Wi("app","Firebase",hP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=lP;function Z0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=W0()),!n)throw Fr.create("no-options");const s=Vu.get(i);if(s){if(qr(n,s.options)&&qr(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new vx(i);for(const u of mf.values())o.addComponent(u);const l=new dP(n,r,o);return Vu.set(i,l),l}function Cc(t=pf){const e=Vu.get(t);if(!e&&t===pf&&W0())return Z0();if(!e)throw Fr.create("no-app",{appName:t});return e}function xt(t,e,n){let r=uP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(o.join(" "));return}dn(new Yt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="firebase-heartbeat-database",pP=1,Ta="firebase-heartbeat-store";let Yh=null;function eT(){return Yh||(Yh=X0(fP,pP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Yh}async function mP(t){try{const n=(await eT()).transaction(Ta),r=await n.objectStore(Ta).get(tT(t));return await n.done,r}catch(e){if(e instanceof Jt)Yn.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(n.message)}}}async function v_(t,e){try{const r=(await eT()).transaction(Ta,"readwrite");await r.objectStore(Ta).put(e,tT(t)),await r.done}catch(n){if(n instanceof Jt)Yn.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(r.message)}}}function tT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=1024,yP=30;class _P{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=w_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>yP){const o=EP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=w_(),{heartbeatsToSend:r,unsentEntries:i}=vP(this._heartbeatsCache.heartbeats),s=Ou(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Yn.warn(n),""}}}function w_(){return new Date().toISOString().substring(0,10)}function vP(t,e=gP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),E_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),E_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return G0()?Q0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return v_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return v_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function E_(t){return Ou(JSON.stringify({version:2,heartbeats:t})).length}function EP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){dn(new Yt("platform-logger",e=>new Dx(e),"PRIVATE")),dn(new Yt("heartbeat",e=>new _P(e),"PRIVATE")),xt(ff,y_,t),xt(ff,y_,"esm2020"),xt("fire-js","")}TP("");var IP="firebase",SP="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(IP,SP,"app");const nT="@firebase/installations",Bp="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=1e4,iT=`w:${Bp}`,sT="FIS_v2",kP="https://firebaseinstallations.googleapis.com/v1",AP=60*60*1e3,CP="installations",RP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Oi=new Wi(CP,RP,xP);function oT(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT({projectId:t}){return`${kP}/projects/${t}/installations`}function lT(t){return{token:t.token,requestStatus:2,expiresIn:NP(t.expiresIn),creationTime:Date.now()}}async function uT(t,e){const r=(await e.json()).error;return Oi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function PP(t,{refreshToken:e}){const n=cT(t);return n.append("Authorization",bP(e)),n}async function hT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NP(t){return Number(t.replace("s","000"))}function bP(t){return`${sT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=aT(t),i=cT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:sT,appId:t.appId,sdkVersion:iT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await hT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:lT(c.authToken)}}else throw await uT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/^[cdef][\w-]{21}$/,gf="";function VP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=MP(t);return OP.test(n)?n:gf}catch{return gf}}function MP(t){return DP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new Map;function pT(t,e){const n=Rc(t);mT(n,e),jP(n,e)}function mT(t,e){const n=fT.get(t);if(n)for(const r of n)r(e)}function jP(t,e){const n=FP();n&&n.postMessage({key:t,fid:e}),UP()}let Si=null;function FP(){return!Si&&"BroadcastChannel"in self&&(Si=new BroadcastChannel("[Firebase] FID Change"),Si.onmessage=t=>{mT(t.data.key,t.data.fid)}),Si}function UP(){fT.size===0&&Si&&(Si.close(),Si=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="firebase-installations-database",BP=1,Vi="firebase-installations-store";let Jh=null;function $p(){return Jh||(Jh=X0(zP,BP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vi)}}})),Jh}async function Mu(t,e){const n=Rc(t),i=(await $p()).transaction(Vi,"readwrite"),s=i.objectStore(Vi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&pT(t,e.fid),e}async function gT(t){const e=Rc(t),r=(await $p()).transaction(Vi,"readwrite");await r.objectStore(Vi).delete(e),await r.done}async function xc(t,e){const n=Rc(t),i=(await $p()).transaction(Vi,"readwrite"),s=i.objectStore(Vi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&pT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(t){let e;const n=await xc(t.appConfig,r=>{const i=$P(r),s=WP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===gf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $P(t){const e=t||{fid:VP(),registrationStatus:0};return yT(e)}function WP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Oi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=qP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:HP(t)}:{installationEntry:e}}async function qP(t,e){try{const n=await LP(t,e);return Mu(t.appConfig,n)}catch(n){throw oT(n)&&n.customData.serverCode===409?await gT(t.appConfig):await Mu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function HP(t){let e=await T_(t.appConfig);for(;e.registrationStatus===1;)await dT(100),e=await T_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wp(t);return r||n}return e}function T_(t){return xc(t,e=>{if(!e)throw Oi.create("installation-not-found");return yT(e)})}function yT(t){return KP(t)?{fid:t.fid,registrationStatus:0}:t}function KP(t){return t.registrationStatus===1&&t.registrationTime+rT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP({appConfig:t,heartbeatServiceProvider:e},n){const r=QP(t,n),i=PP(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:iT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await hT(()=>fetch(r,l));if(u.ok){const c=await u.json();return lT(c)}else throw await uT("Generate Auth Token",u)}function QP(t,{fid:e}){return`${aT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e=!1){let n;const r=await xc(t.appConfig,s=>{if(!_T(s))throw Oi.create("not-registered");const o=s.authToken;if(!e&&XP(o))return s;if(o.requestStatus===1)return n=YP(t,e),s;{if(!navigator.onLine)throw Oi.create("app-offline");const l=e2(s);return n=JP(t,l),l}});return n?await n:r.authToken}async function YP(t,e){let n=await I_(t.appConfig);for(;n.authToken.requestStatus===1;)await dT(100),n=await I_(t.appConfig);const r=n.authToken;return r.requestStatus===0?qp(t,e):r}function I_(t){return xc(t,e=>{if(!_T(e))throw Oi.create("not-registered");const n=e.authToken;return t2(n)?{...e,authToken:{requestStatus:0}}:e})}async function JP(t,e){try{const n=await GP(t,e),r={...e,authToken:n};return await Mu(t.appConfig,r),n}catch(n){if(oT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Mu(t.appConfig,r)}throw n}}function _T(t){return t!==void 0&&t.registrationStatus===2}function XP(t){return t.requestStatus===2&&!ZP(t)}function ZP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+AP}function e2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function t2(t){return t.requestStatus===1&&t.requestTime+rT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wp(e);return r?r.catch(console.error):qp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(t,e=!1){const n=t;return await i2(n),(await qp(n,e)).token}async function i2(t){const{registrationPromise:e}=await Wp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s2(t){if(!t||!t.options)throw Xh("App Configuration");if(!t.name)throw Xh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xh(t){return Oi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="installations",o2="installations-internal",a2=t=>{const e=t.getProvider("app").getImmediate(),n=s2(e),r=ni(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},l2=t=>{const e=t.getProvider("app").getImmediate(),n=ni(e,vT).getImmediate();return{getId:()=>n2(n),getToken:i=>r2(n,i)}};function u2(){dn(new Yt(vT,a2,"PUBLIC")),dn(new Yt(o2,l2,"PRIVATE"))}u2();xt(nT,Bp);xt(nT,Bp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="analytics",c2="firebase_id",h2="origin",d2=60*1e3,f2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Ac("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new Wi("analytics","Analytics",p2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){if(!t.startsWith(Hp)){const e=Vt.create("invalid-gtag-resource",{gtagURL:t});return _t.warn(e.message),""}return t}function wT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function g2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function y2(t,e){const n=g2("firebase-js-sdk-policy",{createScriptURL:m2}),r=document.createElement("script"),i=`${Hp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function _2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function v2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await wT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){_t.error(l)}t("config",i,s)}async function w2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await wT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){_t.error(s)}}function E2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await w2(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await v2(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){_t.error(l)}}return i}function T2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=E2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function I2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Hp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=30,k2=1e3;class A2{constructor(e={},n=k2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ET=new A2;function C2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function R2(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:C2(n)},i=f2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function x2(t,e=ET,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Vt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Vt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new b2;return setTimeout(async()=>{l.abort()},d2),TT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function TT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ET){var l;const{appId:s,measurementId:o}=t;try{await P2(r,e)}catch(u){if(o)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await R2(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!N2(c)){if(i.deleteThrottleMetadata(s),o)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const d=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?f_(n,i.intervalMillis,S2):f_(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(s,p),_t.debug(`Calling attemptFetch again in ${d} millis`),TT(t,p,r,i)}}function P2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function N2(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class b2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function L2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function D2(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(){if(G0())try{await Q0()}catch(t){return _t.warn(Vt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _t.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function V2(t,e,n,r,i,s,o){const l=x2(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>_t.error(g)),e.push(l);const u=O2().then(g=>{if(g)return r.getId()}),[c,d]=await Promise.all([l,u]);I2(s)||y2(s,c.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[h2]="firebase",p.update=!0,d!=null&&(p[c2]=d),i("config",c.measurementId,p),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.app=e}_delete(){return delete Ss[this.app.options.appId],Promise.resolve()}}let Ss={},S_=[];const k_={};let Zh="dataLayer",j2="gtag",A_,Kp,C_=!1;function F2(){const t=[];if(K0()&&t.push("This is a browser extension environment."),ix()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Vt.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function U2(t,e,n){F2();const r=t.options.appId;if(!r)throw Vt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(Ss[r]!=null)throw Vt.create("already-exists",{id:r});if(!C_){_2(Zh);const{wrappedGtag:s,gtagCore:o}=T2(Ss,S_,k_,Zh,j2);Kp=s,A_=o,C_=!0}return Ss[r]=V2(t,S_,k_,e,A_,Zh,n),new M2(t)}function z2(t=Cc()){t=Ae(t);const e=ni(t,ju);return e.isInitialized()?e.getImmediate():B2(t)}function B2(t,e={}){const n=ni(t,ju);if(n.isInitialized()){const i=n.getImmediate();if(qr(e,n.getOptions()))return i;throw Vt.create("already-initialized")}return n.initialize({options:e})}function $2(t,e,n){t=Ae(t),D2(Kp,Ss[t.app.options.appId],e,n).catch(r=>_t.error(r))}function yf(t,e,n,r){t=Ae(t),L2(Kp,Ss[t.app.options.appId],e,n,r).catch(i=>_t.error(i))}const R_="@firebase/analytics",x_="0.10.22";function W2(){dn(new Yt(ju,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return U2(r,i,n)},"PUBLIC")),dn(new Yt("analytics-internal",t,"PRIVATE")),xt(R_,x_),xt(R_,x_,"esm2020");function t(e){try{const n=e.getProvider(ju).getImmediate();return{logEvent:(r,i,s)=>yf(n,r,i,s),setUserProperties:(r,i)=>$2(n,r,i)}}catch(n){throw Vt.create("interop-component-reg-failed",{reason:n})}}}W2();function IT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q2=IT,ST=new Wi("auth","Firebase",IT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Ac("@firebase/auth");function H2(t,...e){Fu.logLevel<=ie.WARN&&Fu.warn(`Auth (${Hi}): ${t}`,...e)}function Yl(t,...e){Fu.logLevel<=ie.ERROR&&Fu.error(`Auth (${Hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Gp(t,...e)}function kn(t,...e){return Gp(t,...e)}function kT(t,e,n){const r={...q2(),[e]:n};return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return kT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ST.create(t,...e)}function G(t,e,...n){if(!t)throw Gp(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yl(e),new Error(e)}function Jn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function K2(){return P_()==="http:"||P_()==="https:"}function P_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(K2()||K0()||"connection"in navigator)?navigator.onLine:!0}function Q2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=XR()||tx()}get(){return G2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X2=new Fa(3e4,6e4);function Ki(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ri(t,e,n,r,i={}){return CT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ja({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return ex()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&qi(t.emulatorConfig.host)&&(c.credentials="include"),AT.fetch()(await RT(t,t.config.apiHost,n,l),c)})}async function CT(t,e,n){t._canInitEmulator=!1;const r={...Y2,...e};try{const i=new eN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw kl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw kl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw kl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kT(t,d,c);fn(t,d)}}catch(i){if(i instanceof Jt)throw i;fn(t,"network-request-failed",{message:String(i)})}}async function Pc(t,e,n,r,i={}){const s=await ri(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function RT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Qp(t.config,i):`${t.config.apiScheme}://${i}`;return J2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Z2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),X2.get())})}}function kl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function N_(t){return t!==void 0&&t.enterprise!==void 0}class tN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Z2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nN(t,e){return ri(t,"GET","/v2/recaptchaConfig",Ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e){return ri(t,"POST","/v1/accounts:delete",e)}async function Uu(t,e){return ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iN(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=Yp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jo(ed(i.auth_time)),issuedAtTime:Jo(ed(i.iat)),expirationTime:Jo(ed(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ed(t){return Number(t)*1e3}function Yp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=z0(n);return i?JSON.parse(i):(Yl("Failed to decode base64 JWT payload"),null)}catch(i){return Yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b_(t){const e=Yp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&sN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ia(t,Uu(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?xT(i.providerUserInfo):[],o=lN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vf(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function aN(t){const e=Ae(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e){const n=await CT(t,{},async()=>{const r=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await RT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&qi(t.emulatorConfig.host)&&(u.credentials="include"),AT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cN(t,e){return ri(t,"POST","/v2/accounts:revokeToken",Ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=b_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ks;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new oN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ia(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iN(this,e)}reload(){return aN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await Ia(this,rN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:w,providerData:S,stsTokenManager:P}=n;G(p&&P,e,"internal-error");const b=ks.fromJSON(this.name,P);G(typeof p=="string",e,"internal-error"),fr(r,e.name),fr(i,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof w=="boolean",e,"internal-error"),fr(s,e.name),fr(o,e.name),fr(l,e.name),fr(u,e.name),fr(c,e.name),fr(d,e.name);const I=new sn({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return S&&Array.isArray(S)&&(I.providerData=S.map(y=>({...y}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ks;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ks;l.updateFromIdToken(r);const u=new sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=new Map;function zn(t){Jn(t instanceof Function,"Expected a class definition");let e=L_.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,L_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PT.type="NONE";const D_=PT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uu(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(zn(D_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zn(D_);const o=Jl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const g=await Uu(e,{idToken:d}).catch(()=>{});if(!g)break;p=await sn._fromGetAccountInfoResponse(e,g,d)}else p=sn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new As(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new As(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VT(e))return"Blackberry";if(MT(e))return"Webos";if(bT(e))return"Safari";if((e.includes("chrome/")||LT(e))&&!e.includes("edge/"))return"Chrome";if(OT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NT(t=ht()){return/firefox\//i.test(t)}function bT(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LT(t=ht()){return/crios\//i.test(t)}function DT(t=ht()){return/iemobile/i.test(t)}function OT(t=ht()){return/android/i.test(t)}function VT(t=ht()){return/blackberry/i.test(t)}function MT(t=ht()){return/webos/i.test(t)}function Jp(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hN(t=ht()){var e;return Jp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function dN(){return nx()&&document.documentMode===10}function jT(t=ht()){return Jp(t)||OT(t)||MT(t)||VT(t)||/windows phone/i.test(t)||DT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e=[]){let n;switch(t){case"Browser":n=O_(ht());break;case"Worker":n=`${O_(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e={}){return ri(t,"GET","/v2/passwordPolicy",Ki(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=6;class gN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new V_(this),this.idTokenSubscription=new V_(this),this.beforeStateQueue=new fN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ST,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uu(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Q2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(Ur(this));const n=e?Ae(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pN(this),n=new gN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&H2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ys(t){return Ae(t)}class V_{constructor(e){this.auth=e,this.observer=null,this.addObserver=ux(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _N(t){Nc=t}function UT(t){return Nc.loadJS(t)}function vN(){return Nc.recaptchaEnterpriseScript}function wN(){return Nc.gapiScript}function EN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class TN{constructor(){this.enterprise=new IN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class IN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const SN="recaptcha-enterprise",zT="NO_RECAPTCHA";class kN{constructor(e){this.type=SN,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{nN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new tN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;N_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&N_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vN();u.length!==0&&(u+=l),UT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function M_(t,e,n,r=!1,i=!1){const s=new kN(t);let o;if(i)o=zT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function j_(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await M_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await M_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t,e){const n=ni(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qr(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function CN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RN(t,e,n){const r=Ys(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=BT(e),{host:o,port:l}=xN(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(qr(c,r.config.emulator)&&qr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,qi(o)?Up(`${s}//${o}${u}`):PN()}function BT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xN(t){const e=BT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:F_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:F_(o)}}}function F_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function NN(t,e){return ri(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e){return Pc(t,"POST","/v1/accounts:signInWithPassword",Ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){return Pc(t,"POST","/v1/accounts:signInWithEmailLink",Ki(t,e))}async function DN(t,e){return Pc(t,"POST","/v1/accounts:signInWithEmailLink",Ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends Xp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return j_(e,n,"signInWithPassword",bN);case"emailLink":return LN(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return j_(e,r,"signUpPassword",NN);case"emailLink":return DN(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return Pc(t,"POST","/v1/accounts:signInWithIdp",Ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON="http://localhost";class Mi extends Xp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Mi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:ON,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ja(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MN(t){const e=Vo(Mo(t)).link,n=e?Vo(Mo(e)).deep_link_id:null,r=Vo(Mo(t)).deep_link_id;return(r?Vo(Mo(r)).link:null)||r||n||e||t}class Zp{constructor(e){const n=Vo(Mo(e)),r=n.apiKey??null,i=n.oobCode??null,s=VN(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=MN(e);try{return new Zp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return Sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zp.parseLink(n);return G(r,"argument-error"),Sa._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends $T{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ua{constructor(){super("facebook.com")}static credential(e){return Mi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.GOOGLE_SIGN_IN_METHOD="google.com";wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ua{constructor(){super("github.com")}static credential(e){return Mi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ua{constructor(){super("twitter.com")}static credential(e,n){return Mi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sn._fromIdTokenResponse(e,r,i),o=U_(r);return new Us({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=U_(r);return new Us({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function U_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Jt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bu(e,n,r,i)}}function WT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(t,s,e,r):s})}async function jN(t,e,n=!1){const r=await Ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(Ur(r));const i="reauthenticate";try{const s=await Ia(t,WT(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Yp(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Us._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e,n=!1){if(Wt(t.app))return Promise.reject(Ur(t));const r="signIn",i=await WT(t,r,e),s=await Us._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function UN(t,e){return qT(Ys(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function RF(t,e,n){return Wt(t.app)?Promise.reject(Ur(t)):UN(Ae(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zN(t),r})}function BN(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function $N(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}const $u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=1e3,qN=10;class KT extends HT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KT.type="LOCAL";const HN=KT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT extends HT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GT.type="SESSION";const QT=GT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await KN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=em("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function QN(t){An().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function YN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function XN(){return YT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="firebaseLocalStorageDb",ZN=1,Wu="firebaseLocalStorage",XT="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function eb(){const t=indexedDB.deleteDatabase(JT);return new za(t).toPromise()}function wf(){const t=indexedDB.open(JT,ZN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wu,{keyPath:XT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wu)?e(r):(r.close(),await eb(),e(await wf()))})})}async function z_(t,e,n){const r=Lc(t,!0).put({[XT]:e,value:n});return new za(r).toPromise()}async function tb(t,e){const n=Lc(t,!1).get(e),r=await new za(n).toPromise();return r===void 0?null:r.value}function B_(t,e){const n=Lc(t,!0).delete(e);return new za(n).toPromise()}const nb=800,rb=3;class ZT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(XN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await YN(),!this.activeServiceWorker)return;this.sender=new GN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wf();return await z_(e,$u,"1"),await B_(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>z_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>B_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Lc(i,!1).getAll();return new za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZT.type="LOCAL";const ib=ZT;new Fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t,e){return e?zn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Xp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ob(t){return qT(t.auth,new tm(t),t.bypassAuthState)}function ab(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),FN(n,new tm(t),t.bypassAuthState)}async function lb(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),jN(n,new tm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ob;case"linkViaPopup":case"linkViaRedirect":return lb;case"reauthViaPopup":case"reauthViaRedirect":return ab;default:fn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new Fa(2e3,1e4);class ys extends eI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=em();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ub.get())};e()}}ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="pendingRedirect",Xl=new Map;class hb extends eI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function db(t,e){const n=mb(e),r=pb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fb(t,e){Xl.set(t._key(),e)}function pb(t){return zn(t._redirectPersistence)}function mb(t){return Jl(cb,t.config.apiKey,t.name)}async function gb(t,e,n=!1){if(Wt(t.app))return Promise.reject(Ur(t));const r=Ys(t),i=sb(r,e),o=await new hb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=10*60*1e3;class _b{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tI(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yb&&this.cachedEventUids.clear(),this.cachedEventUids.has($_(e))}saveEventToCache(e){this.cachedEventUids.add($_(e)),this.lastProcessedEventTime=Date.now()}}function $_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e={}){return ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tb=/^https?/;async function Ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wb(t);for(const n of e)try{if(Sb(n))return}catch{}fn(t,"unauthorized-domain")}function Sb(t){const e=_f(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Tb.test(n))return!1;if(Eb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Fa(3e4,6e4);function W_(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ab(t){return new Promise((e,n)=>{var i,s,o;function r(){W_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W_(),n(kn(t,"network-request-failed"))},timeout:kb.get()})}if((s=(i=An().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=An().gapi)!=null&&o.load)r();else{const l=EN("iframefcb");return An()[l]=()=>{gapi.load?r():n(kn(t,"network-request-failed"))},UT(`${wN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Zl=null,e})}let Zl=null;function Cb(t){return Zl=Zl||Ab(t),Zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new Fa(5e3,15e3),xb="__/auth/iframe",Pb="emulator/auth/iframe",Nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lb(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qp(e,Pb):`https://${t.config.authDomain}/${xb}`,r={apiKey:e.apiKey,appName:t.name,v:Hi},i=bb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ja(r).slice(1)}`}async function Db(t){const e=await Cb(t),n=An().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:Lb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),l=An().setTimeout(()=>{s(o)},Rb.get());function u(){An().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vb=500,Mb=600,jb="_blank",Fb="http://localhost";class q_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ub(t,e,n,r=Vb,i=Mb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Ob,width:r.toString(),height:i.toString(),top:s,left:o},c=ht().toLowerCase();n&&(l=LT(c)?jb:n),NT(c)&&(e=e||Fb,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[w,S])=>`${g}${w}=${S},`,"");if(hN(c)&&l!=="_self")return zb(e||"",l),new q_(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new q_(p)}function zb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="__/auth/handler",$b="emulator/auth/handler",Wb=encodeURIComponent("fac");async function H_(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hi,eventId:i};if(e instanceof $T){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ua){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Wb}=${encodeURIComponent(u)}`:"";return`${qb(t)}?${ja(l).slice(1)}${c}`}function qb({config:t}){return t.emulator?Qp(t,$b):`https://${t.authDomain}/${Bb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="webStorageSupport";class Hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QT,this._completeRedirectFn=gb,this._overrideRedirectResult=fb}async _openPopup(e,n,r,i){var o;Jn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await H_(e,n,r,_f(),i);return Ub(e,s,em())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await H_(e,n,r,_f(),i);return QN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Db(e),r=new _b(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(td,{type:td},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[td];s!==void 0&&n(!!s),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jT()||bT()||Jp()}}const Kb=Hb;var K_="@firebase/auth",G_="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yb(t){dn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FT(t)},c=new yN(r,i,s,u);return CN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Yt("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new Gb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(K_,G_,Qb(t)),xt(K_,G_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=5*60,Xb=q0("authIdTokenMaxAge")||Jb;let Q_=null;const Zb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xb)return;const i=n==null?void 0:n.token;Q_!==i&&(Q_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eL(t=Cc()){const e=ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AN(t,{popupRedirectResolver:Kb,persistence:[ib,HN,QT]}),r=q0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Zb(s.toString());$N(n,o,()=>o(n.currentUser)),BN(n,l=>o(l))}}const i=B0("auth");return i&&RN(n,`http://${i}`),n}function tL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}_N({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yb("Browser");var Y_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zr,nI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function k(){}k.prototype=_.prototype,T.F=_.prototype,T.prototype=new k,T.prototype.constructor=T,T.D=function(C,x,L){for(var A=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)A[ze-2]=arguments[ze];return _.prototype[x].apply(C,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,k){k||(k=0);const C=Array(16);if(typeof _=="string")for(var x=0;x<16;++x)C[x]=_.charCodeAt(k++)|_.charCodeAt(k++)<<8|_.charCodeAt(k++)<<16|_.charCodeAt(k++)<<24;else for(x=0;x<16;++x)C[x]=_[k++]|_[k++]<<8|_[k++]<<16|_[k++]<<24;_=T.g[0],k=T.g[1],x=T.g[2];let L=T.g[3],A;A=_+(L^k&(x^L))+C[0]+3614090360&4294967295,_=k+(A<<7&4294967295|A>>>25),A=L+(x^_&(k^x))+C[1]+3905402710&4294967295,L=_+(A<<12&4294967295|A>>>20),A=x+(k^L&(_^k))+C[2]+606105819&4294967295,x=L+(A<<17&4294967295|A>>>15),A=k+(_^x&(L^_))+C[3]+3250441966&4294967295,k=x+(A<<22&4294967295|A>>>10),A=_+(L^k&(x^L))+C[4]+4118548399&4294967295,_=k+(A<<7&4294967295|A>>>25),A=L+(x^_&(k^x))+C[5]+1200080426&4294967295,L=_+(A<<12&4294967295|A>>>20),A=x+(k^L&(_^k))+C[6]+2821735955&4294967295,x=L+(A<<17&4294967295|A>>>15),A=k+(_^x&(L^_))+C[7]+4249261313&4294967295,k=x+(A<<22&4294967295|A>>>10),A=_+(L^k&(x^L))+C[8]+1770035416&4294967295,_=k+(A<<7&4294967295|A>>>25),A=L+(x^_&(k^x))+C[9]+2336552879&4294967295,L=_+(A<<12&4294967295|A>>>20),A=x+(k^L&(_^k))+C[10]+4294925233&4294967295,x=L+(A<<17&4294967295|A>>>15),A=k+(_^x&(L^_))+C[11]+2304563134&4294967295,k=x+(A<<22&4294967295|A>>>10),A=_+(L^k&(x^L))+C[12]+1804603682&4294967295,_=k+(A<<7&4294967295|A>>>25),A=L+(x^_&(k^x))+C[13]+4254626195&4294967295,L=_+(A<<12&4294967295|A>>>20),A=x+(k^L&(_^k))+C[14]+2792965006&4294967295,x=L+(A<<17&4294967295|A>>>15),A=k+(_^x&(L^_))+C[15]+1236535329&4294967295,k=x+(A<<22&4294967295|A>>>10),A=_+(x^L&(k^x))+C[1]+4129170786&4294967295,_=k+(A<<5&4294967295|A>>>27),A=L+(k^x&(_^k))+C[6]+3225465664&4294967295,L=_+(A<<9&4294967295|A>>>23),A=x+(_^k&(L^_))+C[11]+643717713&4294967295,x=L+(A<<14&4294967295|A>>>18),A=k+(L^_&(x^L))+C[0]+3921069994&4294967295,k=x+(A<<20&4294967295|A>>>12),A=_+(x^L&(k^x))+C[5]+3593408605&4294967295,_=k+(A<<5&4294967295|A>>>27),A=L+(k^x&(_^k))+C[10]+38016083&4294967295,L=_+(A<<9&4294967295|A>>>23),A=x+(_^k&(L^_))+C[15]+3634488961&4294967295,x=L+(A<<14&4294967295|A>>>18),A=k+(L^_&(x^L))+C[4]+3889429448&4294967295,k=x+(A<<20&4294967295|A>>>12),A=_+(x^L&(k^x))+C[9]+568446438&4294967295,_=k+(A<<5&4294967295|A>>>27),A=L+(k^x&(_^k))+C[14]+3275163606&4294967295,L=_+(A<<9&4294967295|A>>>23),A=x+(_^k&(L^_))+C[3]+4107603335&4294967295,x=L+(A<<14&4294967295|A>>>18),A=k+(L^_&(x^L))+C[8]+1163531501&4294967295,k=x+(A<<20&4294967295|A>>>12),A=_+(x^L&(k^x))+C[13]+2850285829&4294967295,_=k+(A<<5&4294967295|A>>>27),A=L+(k^x&(_^k))+C[2]+4243563512&4294967295,L=_+(A<<9&4294967295|A>>>23),A=x+(_^k&(L^_))+C[7]+1735328473&4294967295,x=L+(A<<14&4294967295|A>>>18),A=k+(L^_&(x^L))+C[12]+2368359562&4294967295,k=x+(A<<20&4294967295|A>>>12),A=_+(k^x^L)+C[5]+4294588738&4294967295,_=k+(A<<4&4294967295|A>>>28),A=L+(_^k^x)+C[8]+2272392833&4294967295,L=_+(A<<11&4294967295|A>>>21),A=x+(L^_^k)+C[11]+1839030562&4294967295,x=L+(A<<16&4294967295|A>>>16),A=k+(x^L^_)+C[14]+4259657740&4294967295,k=x+(A<<23&4294967295|A>>>9),A=_+(k^x^L)+C[1]+2763975236&4294967295,_=k+(A<<4&4294967295|A>>>28),A=L+(_^k^x)+C[4]+1272893353&4294967295,L=_+(A<<11&4294967295|A>>>21),A=x+(L^_^k)+C[7]+4139469664&4294967295,x=L+(A<<16&4294967295|A>>>16),A=k+(x^L^_)+C[10]+3200236656&4294967295,k=x+(A<<23&4294967295|A>>>9),A=_+(k^x^L)+C[13]+681279174&4294967295,_=k+(A<<4&4294967295|A>>>28),A=L+(_^k^x)+C[0]+3936430074&4294967295,L=_+(A<<11&4294967295|A>>>21),A=x+(L^_^k)+C[3]+3572445317&4294967295,x=L+(A<<16&4294967295|A>>>16),A=k+(x^L^_)+C[6]+76029189&4294967295,k=x+(A<<23&4294967295|A>>>9),A=_+(k^x^L)+C[9]+3654602809&4294967295,_=k+(A<<4&4294967295|A>>>28),A=L+(_^k^x)+C[12]+3873151461&4294967295,L=_+(A<<11&4294967295|A>>>21),A=x+(L^_^k)+C[15]+530742520&4294967295,x=L+(A<<16&4294967295|A>>>16),A=k+(x^L^_)+C[2]+3299628645&4294967295,k=x+(A<<23&4294967295|A>>>9),A=_+(x^(k|~L))+C[0]+4096336452&4294967295,_=k+(A<<6&4294967295|A>>>26),A=L+(k^(_|~x))+C[7]+1126891415&4294967295,L=_+(A<<10&4294967295|A>>>22),A=x+(_^(L|~k))+C[14]+2878612391&4294967295,x=L+(A<<15&4294967295|A>>>17),A=k+(L^(x|~_))+C[5]+4237533241&4294967295,k=x+(A<<21&4294967295|A>>>11),A=_+(x^(k|~L))+C[12]+1700485571&4294967295,_=k+(A<<6&4294967295|A>>>26),A=L+(k^(_|~x))+C[3]+2399980690&4294967295,L=_+(A<<10&4294967295|A>>>22),A=x+(_^(L|~k))+C[10]+4293915773&4294967295,x=L+(A<<15&4294967295|A>>>17),A=k+(L^(x|~_))+C[1]+2240044497&4294967295,k=x+(A<<21&4294967295|A>>>11),A=_+(x^(k|~L))+C[8]+1873313359&4294967295,_=k+(A<<6&4294967295|A>>>26),A=L+(k^(_|~x))+C[15]+4264355552&4294967295,L=_+(A<<10&4294967295|A>>>22),A=x+(_^(L|~k))+C[6]+2734768916&4294967295,x=L+(A<<15&4294967295|A>>>17),A=k+(L^(x|~_))+C[13]+1309151649&4294967295,k=x+(A<<21&4294967295|A>>>11),A=_+(x^(k|~L))+C[4]+4149444226&4294967295,_=k+(A<<6&4294967295|A>>>26),A=L+(k^(_|~x))+C[11]+3174756917&4294967295,L=_+(A<<10&4294967295|A>>>22),A=x+(_^(L|~k))+C[2]+718787259&4294967295,x=L+(A<<15&4294967295|A>>>17),A=k+(L^(x|~_))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+x&4294967295,T.g[3]=T.g[3]+L&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const k=_-this.blockSize,C=this.C;let x=this.h,L=0;for(;L<_;){if(x==0)for(;L<=k;)i(this,T,L),L+=this.blockSize;if(typeof T=="string"){for(;L<_;)if(C[x++]=T.charCodeAt(L++),x==this.blockSize){i(this,C),x=0;break}}else for(;L<_;)if(C[x++]=T[L++],x==this.blockSize){i(this,C),x=0;break}}this.h=x,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var k=T.length-8;k<T.length;++k)T[k]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,k=0;k<4;++k)for(let C=0;C<32;C+=8)T[_++]=this.g[k]>>>C&255;return T};function s(T,_){var k=l;return Object.prototype.hasOwnProperty.call(k,T)?k[T]:k[T]=_(T)}function o(T,_){this.h=_;const k=[];let C=!0;for(let x=T.length-1;x>=0;x--){const L=T[x]|0;C&&L==_||(k[x]=L,C=!1)}this.g=k}var l={};function u(T){return-128<=T&&T<128?s(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return b(c(-T));const _=[];let k=1;for(let C=0;T>=k;C++)_[C]=T/k|0,k*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return b(d(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=c(Math.pow(_,8));let C=p;for(let L=0;L<T.length;L+=8){var x=Math.min(8,T.length-L);const A=parseInt(T.substring(L,L+x),_);x<8?(x=c(Math.pow(_,x)),C=C.j(x).add(c(A))):(C=C.j(k),C=C.add(c(A)))}return C}var p=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();let T=0,_=1;for(let k=0;k<this.g.length;k++){const C=this.i(k);T+=(C>=0?C:4294967296+C)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(P(this))return"-"+b(this).toString(T);const _=c(Math.pow(T,6));var k=this;let C="";for(;;){const x=N(k,_).g;k=I(k,x.j(_));let L=((k.g.length>0?k.g[0]:k.h)>>>0).toString(T);if(k=x,S(k))return L+C;for(;L.length<6;)L="0"+L;C=L+C}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=I(this,T),P(T)?-1:S(T)?0:1};function b(T){const _=T.g.length,k=[];for(let C=0;C<_;C++)k[C]=~T.g[C];return new o(k,~T.h).add(g)}t.abs=function(){return P(this)?b(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),k=[];let C=0;for(let x=0;x<=_;x++){let L=C+(this.i(x)&65535)+(T.i(x)&65535),A=(L>>>16)+(this.i(x)>>>16)+(T.i(x)>>>16);C=A>>>16,L&=65535,A&=65535,k[x]=A<<16|L}return new o(k,k[k.length-1]&-2147483648?-1:0)};function I(T,_){return T.add(b(_))}t.j=function(T){if(S(this)||S(T))return p;if(P(this))return P(T)?b(this).j(b(T)):b(b(this).j(T));if(P(T))return b(this.j(b(T)));if(this.l(w)<0&&T.l(w)<0)return c(this.m()*T.m());const _=this.g.length+T.g.length,k=[];for(var C=0;C<2*_;C++)k[C]=0;for(C=0;C<this.g.length;C++)for(let x=0;x<T.g.length;x++){const L=this.i(C)>>>16,A=this.i(C)&65535,ze=T.i(x)>>>16,Xt=T.i(x)&65535;k[2*C+2*x]+=A*Xt,y(k,2*C+2*x),k[2*C+2*x+1]+=L*Xt,y(k,2*C+2*x+1),k[2*C+2*x+1]+=A*ze,y(k,2*C+2*x+1),k[2*C+2*x+2]+=L*ze,y(k,2*C+2*x+2)}for(T=0;T<_;T++)k[T]=k[2*T+1]<<16|k[2*T];for(T=_;T<2*_;T++)k[T]=0;return new o(k,0)};function y(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function E(T,_){this.g=T,this.h=_}function N(T,_){if(S(_))throw Error("division by zero");if(S(T))return new E(p,p);if(P(T))return _=N(b(T),_),new E(b(_.g),b(_.h));if(P(_))return _=N(T,b(_)),new E(b(_.g),_.h);if(T.g.length>30){if(P(T)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var k=g,C=_;C.l(T)<=0;)k=V(k),C=V(C);var x=j(k,1),L=j(C,1);for(C=j(C,2),k=j(k,2);!S(C);){var A=L.add(C);A.l(T)<=0&&(x=x.add(k),L=A),C=j(C,1),k=j(k,1)}return _=I(T,x.j(_)),new E(x,_)}for(x=p;T.l(_)>=0;){for(k=Math.max(1,Math.floor(T.m()/_.m())),C=Math.ceil(Math.log(k)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),L=c(k),A=L.j(_);P(A)||A.l(T)>0;)k-=C,L=c(k),A=L.j(_);S(L)&&(L=g),x=x.add(L),T=I(T,A)}return new E(x,T)}t.B=function(T){return N(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),k=[];for(let C=0;C<_;C++)k[C]=this.i(C)&T.i(C);return new o(k,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),k=[];for(let C=0;C<_;C++)k[C]=this.i(C)|T.i(C);return new o(k,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),k=[];for(let C=0;C<_;C++)k[C]=this.i(C)^T.i(C);return new o(k,this.h^T.h)};function V(T){const _=T.g.length+1,k=[];for(let C=0;C<_;C++)k[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(k,T.h)}function j(T,_){const k=_>>5;_%=32;const C=T.g.length-k,x=[];for(let L=0;L<C;L++)x[L]=_>0?T.i(L+k)>>>_|T.i(L+k+1)<<32-_:T.i(L+k);return new o(x,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,nI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,zr=o}).apply(typeof Y_<"u"?Y_:typeof self<"u"?self:typeof window<"u"?window:{});var Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rI,jo,iI,eu,Ef,sI,oI,aI;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Al=="object"&&Al];for(var h=0;h<a.length;++h){var m=a[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var m=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in m))break e;m=m[D]}a=a[a.length-1],v=m[a],h=h(v),h!=v&&h!=null&&e(m,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var m=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&m.push([v,h[v]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,m){return a.call.apply(a.bind,arguments)}function c(a,h,m){return c=u,c.apply(null,arguments)}function d(a,h){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function p(a,h){function m(){}m.prototype=h.prototype,a.Z=h.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(v,D,O){for(var B=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)B[ee-2]=arguments[ee];return h.prototype[D].apply(v,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const m=Array(h);for(let v=0;v<h;v++)m[v]=a[v];return m}return[]}function S(a,h){for(let v=1;v<arguments.length;v++){const D=arguments[v];var m=typeof D;if(m=m!="object"?m:D?Array.isArray(D)?"array":m:"null",m=="array"||m=="object"&&typeof D.length=="number"){m=a.length||0;const O=D.length||0;a.length=m+O;for(let B=0;B<O;B++)a[m+B]=D[B]}else a.push(D)}}class P{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function I(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class y{constructor(){this.h=this.g=null}add(h,m){const v=E.get();v.set(h,m),this.h?this.h.next=v:this.g=v,this.h=v}}var E=new P(()=>new N,a=>a.reset());class N{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let V,j=!1,T=new y,_=()=>{const a=Promise.resolve(void 0);V=()=>{a.then(k)}};function k(){for(var a;a=I();){try{a.h.call(a.g)}catch(m){b(m)}var h=E;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}j=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,h),o.removeEventListener("test",m,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function ze(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(ze,x),ze.prototype.init=function(a,h){const m=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(m=="mouseover"?h=a.fromElement:m=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Xt="closure_listenable_"+(Math.random()*1e6|0),li=0;function ir(a,h,m,v,D){this.listener=a,this.proxy=null,this.src=h,this.type=m,this.capture=!!v,this.ha=D,this.key=++li,this.da=this.fa=!1}function U(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Y(a,h,m){for(const v in a)h.call(m,a[v],v,a)}function Z(a,h){for(const m in a)h.call(void 0,a[m],m,a)}function _e(a){const h={};for(const m in a)h[m]=a[m];return h}const be="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ui(a,h){let m,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(m in v)a[m]=v[m];for(let O=0;O<be.length;O++)m=be[O],Object.prototype.hasOwnProperty.call(v,m)&&(a[m]=v[m])}}function Ut(a){this.src=a,this.g={},this.h=0}Ut.prototype.add=function(a,h,m,v,D){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=Zt(a,h,v,D);return B>-1?(h=a[B],m||(h.fa=!1)):(h=new ir(h,this.src,O,!!v,D),h.fa=m,a.push(h)),h};function ci(a,h){const m=h.type;if(m in a.g){var v=a.g[m],D=Array.prototype.indexOf.call(v,h,void 0),O;(O=D>=0)&&Array.prototype.splice.call(v,D,1),O&&(U(h),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Zt(a,h,m,v){for(let D=0;D<a.length;++D){const O=a[D];if(!O.da&&O.listener==h&&O.capture==!!m&&O.ha==v)return D}return-1}var sr="closure_lm_"+(Math.random()*1e6|0),Xc={};function Gm(a,h,m,v,D){if(Array.isArray(h)){for(let O=0;O<h.length;O++)Gm(a,h[O],m,v,D);return null}return m=Jm(m),a&&a[Xt]?a.J(h,m,l(v)?!!v.capture:!1,D):wS(a,h,m,!1,v,D)}function wS(a,h,m,v,D,O){if(!h)throw Error("Invalid event type");const B=l(D)?!!D.capture:!!D;let ee=eh(a);if(ee||(a[sr]=ee=new Ut(a)),m=ee.add(h,m,v,B,O),m.proxy)return m;if(v=ES(),m.proxy=v,v.src=a,v.listener=m,a.addEventListener)L||(D=B),D===void 0&&(D=!1),a.addEventListener(h.toString(),v,D);else if(a.attachEvent)a.attachEvent(Ym(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ES(){function a(m){return h.call(a.src,a.listener,m)}const h=TS;return a}function Qm(a,h,m,v,D){if(Array.isArray(h))for(var O=0;O<h.length;O++)Qm(a,h[O],m,v,D);else v=l(v)?!!v.capture:!!v,m=Jm(m),a&&a[Xt]?(a=a.i,O=String(h).toString(),O in a.g&&(h=a.g[O],m=Zt(h,m,v,D),m>-1&&(U(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete a.g[O],a.h--)))):a&&(a=eh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Zt(h,m,v,D)),(m=a>-1?h[a]:null)&&Zc(m))}function Zc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Xt])ci(h.i,a);else{var m=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(m,v,a.capture):h.detachEvent?h.detachEvent(Ym(m),v):h.addListener&&h.removeListener&&h.removeListener(v),(m=eh(h))?(ci(m,a),m.h==0&&(m.src=null,h[sr]=null)):U(a)}}}function Ym(a){return a in Xc?Xc[a]:Xc[a]="on"+a}function TS(a,h){if(a.da)a=!0;else{h=new ze(h,this);const m=a.listener,v=a.ha||a.src;a.fa&&Zc(a),a=m.call(v,h)}return a}function eh(a){return a=a[sr],a instanceof Ut?a:null}var th="__closure_events_fn_"+(Math.random()*1e9>>>0);function Jm(a){return typeof a=="function"?a:(a[th]||(a[th]=function(h){return a.handleEvent(h)}),a[th])}function rt(){C.call(this),this.i=new Ut(this),this.M=this,this.G=null}p(rt,C),rt.prototype[Xt]=!0,rt.prototype.removeEventListener=function(a,h,m,v){Qm(this,a,h,m,v)};function dt(a,h){var m,v=a.G;if(v)for(m=[];v;v=v.G)m.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var D=h;h=new x(v,a),ui(h,D)}D=!0;let O,B;if(m)for(B=m.length-1;B>=0;B--)O=h.g=m[B],D=Ya(O,v,!0,h)&&D;if(O=h.g=a,D=Ya(O,v,!0,h)&&D,D=Ya(O,v,!1,h)&&D,m)for(B=0;B<m.length;B++)O=h.g=m[B],D=Ya(O,v,!1,h)&&D}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const m=a.g[h];for(let v=0;v<m.length;v++)U(m[v]);delete a.g[h],a.h--}}this.G=null},rt.prototype.J=function(a,h,m,v){return this.i.add(String(a),h,!1,m,v)},rt.prototype.K=function(a,h,m,v){return this.i.add(String(a),h,!0,m,v)};function Ya(a,h,m,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==m){const ee=B.listener,Be=B.ha||B.src;B.fa&&ci(a.i,B),D=ee.call(Be,v)!==!1&&D}}return D&&!v.defaultPrevented}function IS(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Xm(a){a.g=IS(()=>{a.g=null,a.i&&(a.i=!1,Xm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class SS extends C{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Xm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(a){C.call(this),this.h=a,this.g={}}p(io,C);var Zm=[];function eg(a){Y(a.g,function(h,m){this.g.hasOwnProperty(m)&&Zc(h)},a),a.g={}}io.prototype.N=function(){io.Z.N.call(this),eg(this)},io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nh=o.JSON.stringify,kS=o.JSON.parse,AS=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function tg(){}function ng(){}var so={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function rh(){x.call(this,"d")}p(rh,x);function ih(){x.call(this,"c")}p(ih,x);var hi={},rg=null;function Ja(){return rg=rg||new rt}hi.Ia="serverreachability";function ig(a){x.call(this,hi.Ia,a)}p(ig,x);function oo(a){const h=Ja();dt(h,new ig(h))}hi.STAT_EVENT="statevent";function sg(a,h){x.call(this,hi.STAT_EVENT,a),this.stat=h}p(sg,x);function ft(a){const h=Ja();dt(h,new sg(h,a))}hi.Ja="timingevent";function og(a,h){x.call(this,hi.Ja,a),this.size=h}p(og,x);function ao(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function lo(){this.g=!0}lo.prototype.ua=function(){this.g=!1};function CS(a,h,m,v,D,O){a.info(function(){if(a.g)if(O){var B="",ee=O.split("&");for(let ce=0;ce<ee.length;ce++){var Be=ee[ce].split("=");if(Be.length>1){const He=Be[0];Be=Be[1];const gn=He.split("_");B=gn.length>=2&&gn[1]=="type"?B+(He+"="+Be+"&"):B+(He+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+m+`
`+B})}function RS(a,h,m,v,D,O,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+m+`
`+O+" "+B})}function Yi(a,h,m,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+PS(a,m)+(v?" "+v:"")})}function xS(a,h){a.info(function(){return"TIMEOUT: "+h})}lo.prototype.info=function(){};function PS(a,h){if(!a.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var m=O[a];if(!(m.length<2)){var v=m[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<v.length;B++)v[B]=""}}}}return nh(O)}catch{return h}}var Xa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ag={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},lg;function sh(){}p(sh,tg),sh.prototype.g=function(){return new XMLHttpRequest},lg=new sh;function uo(a){return encodeURIComponent(String(a))}function NS(a){var h=1;a=a.split(":");const m=[];for(;h>0&&a.length;)m.push(a.shift()),h--;return a.length&&m.push(a.join(":")),m}function or(a,h,m,v){this.j=a,this.i=h,this.l=m,this.S=v||1,this.V=new io(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ug}function ug(){this.i=null,this.g="",this.h=!1}var cg={},oh={};function ah(a,h,m){a.M=1,a.A=el(mn(h)),a.u=m,a.R=!0,hg(a,null)}function hg(a,h){a.F=Date.now(),Za(a),a.B=mn(a.A);var m=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Sg(m.i,"t",v),a.C=0,m=a.j.L,a.h=new ug,a.g=Bg(a.j,m?h:null,!a.u),a.P>0&&(a.O=new SS(c(a.Y,a,a.g),a.P)),h=a.V,m=a.g,v=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Zm[0]=D.toString()),D=Zm);for(let O=0;O<D.length;O++){const B=Gm(m,D[O],v||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?_e(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),oo(),CS(a.i,a.v,a.B,a.l,a.S,a.u)}or.prototype.ba=function(a){a=a.target;const h=this.O;h&&ur(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const ee=ur(this.g),Be=this.g.ya(),ce=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Ng(this.g)))){this.K||ee!=4||Be==7||(Be==8||ce<=0?oo(3):oo(2)),lh(this);var h=this.g.ca();this.X=h;var m=bS(this);if(this.o=h==200,RS(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(v)){var O=v;break t}}O=null}if(a=O)Yi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,uh(this,a);else{this.o=!1,this.m=3,ft(12),di(this),co(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<m.length;)if(He=LS(this,m),He==oh){ee==4&&(this.m=4,ft(14),a=!1),Yi(this.i,this.l,null,"[Incomplete Response]");break}else if(He==cg){this.m=4,ft(15),Yi(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else Yi(this.i,this.l,He,null),uh(this,He);if(dg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||m.length!=0||this.h.h||(this.m=1,ft(16),a=!1),this.o=this.o&&a,!a)Yi(this.i,this.l,m,"[Invalid Chunked Response]"),di(this),co(this);else if(m.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),yh(B),B.P=!0,ft(11))}}else Yi(this.i,this.l,m,null),uh(this,m);ee==4&&di(this),this.o&&!this.K&&(ee==4?jg(this.j,this):(this.o=!1,Za(this)))}else KS(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,ft(12)):(this.m=0,ft(13)),di(this),co(this)}}}catch{}finally{}};function bS(a){if(!dg(a))return a.g.la();const h=Ng(a.g);if(h==="")return"";let m="";const v=h.length,D=ur(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return di(a),co(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<v;O++)a.h.h=!0,m+=a.h.i.decode(h[O],{stream:!(D&&O==v-1)});return h.length=0,a.h.g+=m,a.C=0,a.h.g}function dg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function LS(a,h){var m=a.C,v=h.indexOf(`
`,m);return v==-1?oh:(m=Number(h.substring(m,v)),isNaN(m)?cg:(v+=1,v+m>h.length?oh:(h=h.slice(v,v+m),a.C=v+m,h)))}or.prototype.cancel=function(){this.K=!0,di(this)};function Za(a){a.T=Date.now()+a.H,fg(a,a.H)}function fg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ao(c(a.aa,a),h)}function lh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}or.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(xS(this.i,this.B),this.M!=2&&(oo(),ft(17)),di(this),this.m=2,co(this)):fg(this,this.T-a)};function co(a){a.j.I==0||a.K||jg(a.j,a)}function di(a){lh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,eg(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function uh(a,h){try{var m=a.j;if(m.I!=0&&(m.g==a||ch(m.h,a))){if(!a.L&&ch(m.h,a)&&m.I==3){try{var v=m.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)sl(m),rl(m);else break e;gh(m),ft(18)}}else m.xa=D[1],0<m.xa-m.K&&D[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=ao(c(m.Va,m),6e3));gg(m.h)<=1&&m.ta&&(m.ta=void 0)}else pi(m,11)}else if((a.L||m.g==a)&&sl(m),!A(h))for(D=m.Ba.g.parse(h),h=0;h<D.length;h++){let ce=D[h];const He=ce[0];if(!(He<=m.K))if(m.K=He,ce=ce[1],m.I==2)if(ce[0]=="c"){m.M=ce[1],m.ba=ce[2];const gn=ce[3];gn!=null&&(m.ka=gn,m.j.info("VER="+m.ka));const mi=ce[4];mi!=null&&(m.za=mi,m.j.info("SVER="+m.za));const cr=ce[5];cr!=null&&typeof cr=="number"&&cr>0&&(v=1.5*cr,m.O=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const hr=a.g;if(hr){const al=hr.g?hr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var O=v.h;O.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(hh(O,O.h),O.h=null))}if(v.G){const _h=hr.g?hr.g.getResponseHeader("X-HTTP-Session-Id"):null;_h&&(v.wa=_h,pe(v.J,v.G,_h))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),v=m;var B=a;if(v.na=zg(v,v.L?v.ba:null,v.W),B.L){yg(v.h,B);var ee=B,Be=v.O;Be&&(ee.H=Be),ee.D&&(lh(ee),Za(ee)),v.g=B}else Vg(v);m.i.length>0&&il(m)}else ce[0]!="stop"&&ce[0]!="close"||pi(m,7);else m.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?pi(m,7):mh(m):ce[0]!="noop"&&m.l&&m.l.qa(ce),m.A=0)}}oo(4)}catch{}}var DS=class{constructor(a,h){this.g=a,this.map=h}};function pg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function mg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gg(a){return a.h?1:a.g?a.g.size:0}function ch(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function hh(a,h){a.g?a.g.add(h):a.h=h}function yg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}pg.prototype.cancel=function(){if(this.i=_g(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _g(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const m of a.g.values())h=h.concat(m.G);return h}return w(a.i)}var vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OS(a,h){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const v=a[m].indexOf("=");let D,O=null;v>=0?(D=a[m].substring(0,v),O=a[m].substring(v+1)):D=a[m],h(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ar(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof ar?(this.l=a.l,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.u),this.h=a.h,dh(this,kg(a.i)),this.m=a.m):a&&(h=String(a).match(vg))?(this.l=!1,ho(this,h[1]||"",!0),this.o=po(h[2]||""),this.g=po(h[3]||"",!0),fo(this,h[4]),this.h=po(h[5]||"",!0),dh(this,h[6]||"",!0),this.m=po(h[7]||"")):(this.l=!1,this.i=new go(null,this.l))}ar.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(mo(h,wg,!0),":");var m=this.g;return(m||h=="file")&&(a.push("//"),(h=this.o)&&a.push(mo(h,wg,!0),"@"),a.push(uo(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(mo(m,m.charAt(0)=="/"?jS:MS,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",mo(m,US)),a.join("")},ar.prototype.resolve=function(a){const h=mn(this);let m=!!a.j;m?ho(h,a.j):m=!!a.o,m?h.o=a.o:m=!!a.g,m?h.g=a.g:m=a.u!=null;var v=a.h;if(m)fo(h,a.u);else if(m=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=h.h.lastIndexOf("/");D!=-1&&(v=h.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let B=0;B<D.length;){const ee=D[B++];ee=="."?v&&B==D.length&&O.push(""):ee==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),v&&B==D.length&&O.push("")):(O.push(ee),v=!0)}v=O.join("/")}else v=D}return m?h.h=v:m=a.i.toString()!=="",m?dh(h,kg(a.i)):m=!!a.m,m&&(h.m=a.m),h};function mn(a){return new ar(a)}function ho(a,h,m){a.j=m?po(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function dh(a,h,m){h instanceof go?(a.i=h,zS(a.i,a.l)):(m||(h=mo(h,FS)),a.i=new go(h,a.l))}function pe(a,h,m){a.i.set(h,m)}function el(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function po(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mo(a,h,m){return typeof a=="string"?(a=encodeURI(a).replace(h,VS),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function VS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wg=/[#\/\?@]/g,MS=/[#\?:]/g,jS=/[#\?]/g,FS=/[#\?@]/g,US=/#/g;function go(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function fi(a){a.g||(a.g=new Map,a.h=0,a.i&&OS(a.i,function(h,m){a.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=go.prototype,t.add=function(a,h){fi(this),this.i=null,a=Ji(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(h),this.h+=1,this};function Eg(a,h){fi(a),h=Ji(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Tg(a,h){return fi(a),h=Ji(a,h),a.g.has(h)}t.forEach=function(a,h){fi(this),this.g.forEach(function(m,v){m.forEach(function(D){a.call(h,D,v,this)},this)},this)};function Ig(a,h){fi(a);let m=[];if(typeof h=="string")Tg(a,h)&&(m=m.concat(a.g.get(Ji(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)m=m.concat(a[h]);return m}t.set=function(a,h){return fi(this),this.i=null,a=Ji(this,a),Tg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ig(this,a),a.length>0?String(a[0]):h):h};function Sg(a,h,m){Eg(a,h),m.length>0&&(a.i=null,a.g.set(Ji(a,h),w(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var m=h[v];const D=uo(m);m=Ig(this,m);for(let O=0;O<m.length;O++){let B=D;m[O]!==""&&(B+="="+uo(m[O])),a.push(B)}}return this.i=a.join("&")};function kg(a){const h=new go;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ji(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function zS(a,h){h&&!a.j&&(fi(a),a.i=null,a.g.forEach(function(m,v){const D=v.toLowerCase();v!=D&&(Eg(this,v),Sg(this,D,m))},a)),a.j=h}function BS(a,h){const m=new lo;if(o.Image){const v=new Image;v.onload=d(lr,m,"TestLoadImage: loaded",!0,h,v),v.onerror=d(lr,m,"TestLoadImage: error",!1,h,v),v.onabort=d(lr,m,"TestLoadImage: abort",!1,h,v),v.ontimeout=d(lr,m,"TestLoadImage: timeout",!1,h,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function $S(a,h){const m=new lo,v=new AbortController,D=setTimeout(()=>{v.abort(),lr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(O=>{clearTimeout(D),O.ok?lr(m,"TestPingServer: ok",!0,h):lr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),lr(m,"TestPingServer: error",!1,h)})}function lr(a,h,m,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(m)}catch{}}function WS(){this.g=new AS}function fh(a){this.i=a.Sb||null,this.h=a.ab||!1}p(fh,tg),fh.prototype.g=function(){return new tl(this.i,this.h)};function tl(a,h){rt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(tl,rt),t=tl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,_o(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_o(this)),this.g&&(this.readyState=3,_o(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ag(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ag(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yo(this):_o(this),this.readyState==3&&Ag(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,yo(this))},t.Na=function(a){this.g&&(this.response=a,yo(this))},t.ga=function(){this.g&&yo(this)};function yo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_o(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=h.next();return a.join(`\r
`)};function _o(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cg(a){let h="";return Y(a,function(m,v){h+=v,h+=":",h+=m,h+=`\r
`}),h}function ph(a,h,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Cg(m),typeof a=="string"?m!=null&&uo(m):pe(a,h,m))}function Ce(a){rt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ce,rt);var qS=/^https?$/i,HS=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():lg.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Rg(this,O);return}if(a=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)m.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const O of v.keys())m.set(O,v.get(O));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(HS,h,void 0)>=0)||v||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of m)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Rg(this,O)}};function Rg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,xg(a),nl(a)}function xg(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,dt(this,"complete"),dt(this,"abort"),nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nl(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Pg(this):this.Xa())},t.Xa=function(){Pg(this)};function Pg(a){if(a.h&&typeof s<"u"){if(a.v&&ur(a)==4)setTimeout(a.Ca.bind(a),0);else if(dt(a,"readystatechange"),ur(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var v;if(v=O===0){let B=String(a.D).match(vg)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),v=!qS.test(B?B.toLowerCase():"")}m=v}if(m)dt(a,"complete"),dt(a,"success");else{a.o=6;try{var D=ur(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",xg(a)}}finally{nl(a)}}}}function nl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,h||dt(a,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ur(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),kS(h)}};function Ng(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KS(a){const h={};a=(a.g&&ur(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(A(a[v]))continue;var m=NS(a[v]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=h[D]||[];h[D]=O,O.push(m)}Z(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vo(a,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||h}function bg(a){this.za=0,this.i=[],this.j=new lo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vo("baseRetryDelayMs",5e3,a),this.Za=vo("retryDelaySeedMs",1e4,a),this.Ta=vo("forwardChannelMaxRetries",2,a),this.va=vo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new pg(a&&a.concurrentRequestLimit),this.Ba=new WS,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=bg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,m,v){ft(0),this.W=a,this.H=h||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.J=zg(this,null,this.W),il(this)};function mh(a){if(Lg(a),a.I==3){var h=a.V++,m=mn(a.J);if(pe(m,"SID",a.M),pe(m,"RID",h),pe(m,"TYPE","terminate"),wo(a,m),h=new or(a,a.j,h),h.M=2,h.A=el(mn(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=h.A,m=!0),m||(h.g=Bg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Za(h)}Ug(a)}function rl(a){a.g&&(yh(a),a.g.cancel(),a.g=null)}function Lg(a){rl(a),a.v&&(o.clearTimeout(a.v),a.v=null),sl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function il(a){if(!mg(a.h)&&!a.m){a.m=!0;var h=a.Ea;V||_(),j||(V(),j=!0),T.add(h,a),a.D=0}}function GS(a,h){return gg(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ao(c(a.Ea,a,h),Fg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new or(this,this.j,a);let O=this.o;if(this.U&&(O?(O=_e(O),ui(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Og(this,D,h),m=mn(this.J),pe(m,"RID",a),pe(m,"CVER",22),this.G&&pe(m,"X-HTTP-Session-Id",this.G),wo(this,m),O&&(this.R?h="headers="+uo(Cg(O))+"&"+h:this.u&&ph(m,this.u,O)),hh(this.h,D),this.Ra&&pe(m,"TYPE","init"),this.S?(pe(m,"$req",h),pe(m,"SID","null"),D.U=!0,ah(D,m,null)):ah(D,m,h),this.I=2}}else this.I==3&&(a?Dg(this,a):this.i.length==0||mg(this.h)||Dg(this))};function Dg(a,h){var m;h?m=h.l:m=a.V++;const v=mn(a.J);pe(v,"SID",a.M),pe(v,"RID",m),pe(v,"AID",a.K),wo(a,v),a.u&&a.o&&ph(v,a.u,a.o),m=new or(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Og(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),hh(a.h,m),ah(m,v,h)}function wo(a,h){a.H&&Y(a.H,function(m,v){pe(h,v,m)}),a.l&&Y({},function(m,v){pe(h,v,m)})}function Og(a,h,m){m=Math.min(a.i.length,m);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const Be=["count="+m];ee==-1?m>0?(ee=D[0].g,Be.push("ofs="+ee)):ee=0:Be.push("ofs="+ee);let ce=!0;for(let He=0;He<m;He++){var O=D[He].g;const gn=D[He].map;if(O-=ee,O<0)ee=Math.max(0,D[He].g-100),ce=!1;else try{O="req"+O+"_"||"";try{var B=gn instanceof Map?gn:Object.entries(gn);for(const[mi,cr]of B){let hr=cr;l(cr)&&(hr=nh(cr)),Be.push(O+mi+"="+encodeURIComponent(hr))}}catch(mi){throw Be.push(O+"type="+encodeURIComponent("_badmap")),mi}}catch{v&&v(gn)}}if(ce){B=Be.join("&");break e}}B=void 0}return a=a.i.splice(0,m),h.G=a,B}function Vg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;V||_(),j||(V(),j=!0),T.add(h,a),a.A=0}}function gh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ao(c(a.Da,a),Fg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Mg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ao(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ft(10),rl(this),Mg(this))};function yh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Mg(a){a.g=new or(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=mn(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),wo(a,h),a.u&&a.o&&ph(h,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=el(mn(h)),m.u=null,m.R=!0,hg(m,a)}t.Va=function(){this.C!=null&&(this.C=null,rl(this),gh(this),ft(19))};function sl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function jg(a,h){var m=null;if(a.g==h){sl(a),yh(a),a.g=null;var v=2}else if(ch(a.h,h))m=h.G,yg(a.h,h),v=1;else return;if(a.I!=0){if(h.o)if(v==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;v=Ja(),dt(v,new og(v,m)),il(a)}else Vg(a);else if(D=h.m,D==3||D==0&&h.X>0||!(v==1&&GS(a,h)||v==2&&gh(a)))switch(m&&m.length>0&&(h=a.h,h.i=h.i.concat(m)),D){case 1:pi(a,5);break;case 4:pi(a,10);break;case 3:pi(a,6);break;default:pi(a,2)}}}function Fg(a,h){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*h}function pi(a,h){if(a.j.info("Error code "+h),h==2){var m=c(a.bb,a),v=a.Ua;const D=!v;v=new ar(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ho(v,"https"),el(v),D?BS(v.toString(),m):$S(v.toString(),m)}else ft(2);a.I=0,a.l&&a.l.pa(h),Ug(a),Lg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Ug(a){if(a.I=0,a.ja=[],a.l){const h=_g(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function zg(a,h,m){var v=m instanceof ar?mn(m):new ar(m);if(v.g!="")h&&(v.g=h+"."+v.g),fo(v,v.u);else{var D=o.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const O=new ar(null);v&&ho(O,v),h&&(O.g=h),D&&fo(O,D),m&&(O.h=m),v=O}return m=a.G,h=a.wa,m&&h&&pe(v,m,h),pe(v,"VER",a.ka),wo(a,v),v}function Bg(a,h,m){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new fh({ab:m})):new Ce(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $g(){}t=$g.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ol(){}ol.prototype.g=function(a,h){return new Pt(a,h)};function Pt(a,h){rt.call(this),this.g=new bg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Xi(this)}p(Pt,rt),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){mh(this.g)},Pt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=nh(a),a=m);h.i.push(new DS(h.Ya++,a)),h.I==3&&il(h)},Pt.prototype.N=function(){this.g.l=null,delete this.j,mh(this.g),delete this.g,Pt.Z.N.call(this)};function Wg(a){rh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const m in h){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Wg,rh);function qg(){ih.call(this),this.status=1}p(qg,ih);function Xi(a){this.g=a}p(Xi,$g),Xi.prototype.ra=function(){dt(this.g,"a")},Xi.prototype.qa=function(a){dt(this.g,new Wg(a))},Xi.prototype.pa=function(a){dt(this.g,new qg)},Xi.prototype.oa=function(){dt(this.g,"b")},ol.prototype.createWebChannel=ol.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,aI=function(){return new ol},oI=function(){return Ja()},sI=hi,Ef={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xa.NO_ERROR=0,Xa.TIMEOUT=8,Xa.HTTP_ERROR=6,eu=Xa,ag.COMPLETE="complete",iI=ag,ng.EventType=so,so.OPEN="a",so.CLOSE="b",so.ERROR="c",so.MESSAGE="d",rt.prototype.listen=rt.prototype.J,jo=ng,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,rI=Ce}).apply(typeof Al<"u"?Al:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs="12.13.0";function nL(t){Xs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Ac("@firebase/firestore");function ts(){return ji.logLevel}function W(t,...e){if(ji.logLevel<=ie.DEBUG){const n=e.map(nm);ji.debug(`Firestore (${Xs}): ${t}`,...n)}}function Xn(t,...e){if(ji.logLevel<=ie.ERROR){const n=e.map(nm);ji.error(`Firestore (${Xs}): ${t}`,...n)}}function Fi(t,...e){if(ji.logLevel<=ie.WARN){const n=e.map(nm);ji.warn(`Firestore (${Xs}): ${t}`,...n)}}function nm(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lI(t,r,n)}function lI(t,e,n){let r=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Xn(r),new Error(r)}function ae(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||lI(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class iL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sL{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new uI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new at(e)}}class oL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class aL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new oL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lL{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new J_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new J_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=uL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Tf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return nd(i)===nd(s)?te(i,s):nd(i)?1:-1}return te(t.length,e.length)}const cL=55296,hL=57343;function nd(t){const e=t.charCodeAt(0);return e>=cL&&e<=hL}function zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="__name__";class vn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=vn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=vn.isNumericId(e),i=vn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?vn.extractNumericId(e).compare(vn.extractNumericId(n)):Tf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zr.fromString(e.substring(4,e.length-2))}}class de extends vn{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const dL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends vn{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return dL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===X_}static keyField(){return new Xe([X_])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(de.fromString(e))}static fromName(e){return new H(de.fromString(e).popFirst(5))}static empty(){return new H(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fL(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Z_(t){if(!H.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ev(t){if(H.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Dc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dc(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ba(t,e){if(!hI(t))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=-62135596800,nv=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*nv);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<tv)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nv}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ba(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:Fe("string",ge._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ge(0,0))}static max(){return new J(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=-1;function pL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Hr(i,H.empty(),e)}function mL(t){return new Hr(t.readTime,t.key,ka)}class Hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hr(J.min(),H.empty(),ka)}static max(){return new Hr(J.max(),H.empty(),ka)}}function gL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _L{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==yL)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function vL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=-1;function Vc(t){return t==null}function qu(t){return t===0&&1/t==-1/0}function wL(t){return typeof t=="number"&&Number.isInteger(t)&&!qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="";function EL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rv(e)),e=TL(t.get(n),e);return rv(e)}function TL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case dI:n+="";break;default:n+=s}}return n}function rv(t){return t+dI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cl(this.root,e,this.comparator,!0)}}class Cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Je.RED,this.left=i??Je.EMPTY,this.right=s??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sv(this.data.getIterator())}getIteratorFrom(e){return new sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new qe(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pI("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const IL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=IL.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="server_timestamp",gI="__type__",yI="__previous_value__",_I="__local_write_time__";function sm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gI])==null?void 0:r.stringValue)===mI}function Mc(t){const e=t.mapValue.fields[yI];return sm(e)?Mc(e):e}function Aa(t){const e=Kr(t.mapValue.fields[_I].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r,i,s,o,l,u,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const Hu="(default)";class Ca{constructor(e,n){this.projectId=e,this.database=n||Hu}static empty(){return new Ca("","")}get isDefaultDatabase(){return this.database===Hu}isEqual(e){return e instanceof Ca&&e.projectId===this.projectId&&e.database===this.database}}function kL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ca(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI="__type__",AL="__max__",Rl={mapValue:{}},wI="__vector__",Ku="value";function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sm(t)?4:RL(t)?9007199254740991:CL(t)?10:11:Q(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Aa(t).isEqual(Aa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),l=Kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gr(i.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),l=Le(s.doubleValue);return o===l?qu(o)===qu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(iv(o)!==iv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Pn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Ra(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Bs(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ov(t.timestampValue,e.timestampValue);case 4:return ov(Aa(t),Aa(e));case 5:return Tf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Gr(s),u=Gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=te(l[c],u[c]);if(d!==0)return d}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(Le(s.latitude),Le(o.latitude));return l!==0?l:te(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return av(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,w,S,P;const l=s.fields||{},u=o.fields||{},c=(g=l[Ku])==null?void 0:g.arrayValue,d=(w=u[Ku])==null?void 0:w.arrayValue,p=te(((S=c==null?void 0:c.values)==null?void 0:S.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:av(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Rl.mapValue&&o===Rl.mapValue)return 0;if(s===Rl.mapValue)return 1;if(o===Rl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const g=Tf(u[p],d[p]);if(g!==0)return g;const w=Bs(l[u[p]],c[d[p]]);if(w!==0)return w}return te(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function ov(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Kr(t),r=Kr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function av(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Bs(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function $s(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=If(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${If(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function tu(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(t);return e?16+tu(e):16;case 5:return 2*t.stringValue.length;case 6:return Gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+tu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ii(r.fields,(s,o)=>{i+=s.length+tu(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function lv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sf(t){return!!t&&"integerValue"in t}function om(t){return!!t&&"arrayValue"in t}function uv(t){return!!t&&"nullValue"in t}function cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nu(t){return!!t&&"mapValue"in t}function CL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vI])==null?void 0:r.stringValue)===wI}function Xo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xo(t.arrayValue.values[n]);return e}return{...t}}function RL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===AL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xo(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Xo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new St(Xo(this.value))}}function EI(t){const e=[];return ii(t.fields,(n,r)=>{const i=new Xe([n]);if(nu(r)){const s=EI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,J.min(),J.min(),J.min(),St.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,J.min(),J.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,J.min(),J.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){this.position=e,this.inclusive=n}}function hv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Bs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function xL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{}class je extends TI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NL(e,n,r):n==="array-contains"?new DL(e,r):n==="in"?new OL(e,r):n==="not-in"?new VL(e,r):n==="array-contains-any"?new ML(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bL(e,r):new LL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Bs(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends TI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return II(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function II(t){return t.op==="and"}function SI(t){return PL(t)&&II(t)}function PL(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function kf(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+$s(t.value);if(SI(t))return t.filters.map(e=>kf(e)).join(",");{const e=t.filters.map(n=>kf(n)).join(",");return`${t.op}(${e})`}}function kI(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&Pn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&kI(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function AI(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${$s(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(AI).join(" ,")+"}"}(t):"Filter"}class NL extends je{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class bL extends je{constructor(e,n){super(e,"in",n),this.keys=CI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LL extends je{constructor(e,n){super(e,"not-in",n),this.keys=CI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class DL extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return om(n)&&Ra(n.arrayValue,this.value)}}class OL extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ra(this.value.arrayValue,n)}}class VL extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ra(this.value.arrayValue,n)}}class ML extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ra(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function fv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jL(t,e,n,r,i,s,o)}function am(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$s(r)).join(",")),e.Te=n}return e.Te}function lm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dv(t.startAt,e.startAt)&&dv(t.endAt,e.endAt)}function Af(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function FL(t,e,n,r,i,s,o,l){return new to(t,e,n,r,i,s,o,l)}function um(t){return new to(t)}function pv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UL(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function RI(t){return t.collectionGroup!==null}function Zo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new xa(s,r))}),n.has(Xe.keyField().canonicalString())||e.Ie.push(new xa(Xe.keyField(),r))}return e.Ie}function Cn(t){const e=X(t);return e.Ee||(e.Ee=zL(e,Zo(t))),e.Ee}function zL(t,e){if(t.limitType==="F")return fv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xa(i.field,s)});const n=t.endAt?new Gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gu(t.startAt.position,t.startAt.inclusive):null;return fv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cf(t,e){const n=t.filters.concat([e]);return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function BL(t,e){const n=t.explicitOrderBy.concat([e]);return new to(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Qu(t,e,n){return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jc(t,e){return lm(Cn(t),Cn(e))&&t.limitType===e.limitType}function xI(t){return`${am(Cn(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>AI(i)).join(", ")}]`),Vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$s(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$s(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function Fc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Zo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=hv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Zo(r),i)||r.endAt&&!function(o,l,u){const c=hv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Zo(r),i))}(t,e)}function $L(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PI(t){return(e,n)=>{let r=!1;for(const i of Zo(t)){const s=WL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WL(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Bs(u,c):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new Ee(H.comparator);function er(){return qL}const NI=new Ee(H.comparator);function Fo(...t){let e=NI;for(const n of t)e=e.insert(n.key,n);return e}function bI(t){let e=NI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ki(){return ea()}function LI(){return ea()}function ea(){return new Gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const HL=new Ee(H.comparator),KL=new qe(H.comparator);function ne(...t){let e=KL;for(const n of t)e=e.add(n);return e}const GL=new qe(te);function QL(){return GL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qu(e)?"-0":e}}function DI(t){return{integerValue:""+t}}function YL(t,e){return wL(e)?DI(e):cm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this._=void 0}}function JL(t,e,n){return t instanceof Pa?function(i,s){const o={fields:{[gI]:{stringValue:mI},[_I]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sm(s)&&(s=Mc(s)),s&&(o.fields[yI]=s),{mapValue:o}}(n,e):t instanceof Na?VI(t,e):t instanceof ba?MI(t,e):function(i,s){const o=OI(i,s),l=mv(o)+mv(i.Ae);return Sf(o)&&Sf(i.Ae)?DI(l):cm(i.serializer,l)}(t,e)}function XL(t,e,n){return t instanceof Na?VI(t,e):t instanceof ba?MI(t,e):n}function OI(t,e){return t instanceof Yu?function(r){return Sf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pa extends Uc{}class Na extends Uc{constructor(e){super(),this.elements=e}}function VI(t,e){const n=jI(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ba extends Uc{constructor(e){super(),this.elements=e}}function MI(t,e){let n=jI(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class Yu extends Uc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function mv(t){return Le(t.integerValue||t.doubleValue)}function jI(t){return om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n){this.field=e,this.transform=n}}function eD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Na&&i instanceof Na||r instanceof ba&&i instanceof ba?zs(r.elements,i.elements,Pn):r instanceof Yu&&i instanceof Yu?Pn(r.Ae,i.Ae):r instanceof Pa&&i instanceof Pa}(t.transform,e.transform)}class tD{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zc{}function FI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hm(t.key,ln.none()):new $a(t.key,t.data,ln.none());{const n=t.data,r=St.empty();let i=new qe(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new si(t.key,r,new Lt(i.toArray()),ln.none())}}function nD(t,e,n){t instanceof $a?function(i,s,o){const l=i.value.clone(),u=yv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof si?function(i,s,o){if(!ru(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=yv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(UI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,r){return t instanceof $a?function(s,o,l,u){if(!ru(s.precondition,o))return l;const c=s.value.clone(),d=_v(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof si?function(s,o,l,u){if(!ru(s.precondition,o))return l;const c=_v(s.fieldTransforms,u,o),d=o.data;return d.setAll(UI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ru(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function rD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OI(r.transform,i||null);s!=null&&(n===null&&(n=St.empty()),n.set(r.field,s))}return n||null}function gv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zs(r,i,(s,o)=>eD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $a extends zc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class si extends zc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function UI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yv(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,XL(o,l,n[i]))}return r}function _v(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JL(s,o,e))}return r}class hm extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iD extends zc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=FI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>gv(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>gv(n,r))}}class dm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return HL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new dm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,se;function lD(t){switch(t){case M.OK:return Q(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function zI(t){if(t===void 0)return Xn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ve.OK:return M.OK;case Ve.CANCELLED:return M.CANCELLED;case Ve.UNKNOWN:return M.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return M.INTERNAL;case Ve.UNAVAILABLE:return M.UNAVAILABLE;case Ve.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ve.NOT_FOUND:return M.NOT_FOUND;case Ve.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ve.ABORTED:return M.ABORTED;case Ve.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ve.DATA_LOSS:return M.DATA_LOSS;default:return Q(39323,{code:t})}}(se=Ve||(Ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=new zr([4294967295,4294967295],0);function vv(t){const e=uD().encode(t),n=new nI;return n.update(e),new Uint8Array(n.digest())}function wv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zr([n,r],0),new zr([i,s],0)]}class fm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Uo(`Invalid padding: ${n}`);if(r<0)throw new Uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Uo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=zr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(zr.fromNumber(r)));return i.compare(cD)===1&&(i=new zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=vv(e),[r,i]=wv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new fm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=vv(e),[r,i]=wv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wa(J.min(),i,new Ee(te),er(),ne())}}class qa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qa(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class BI{constructor(e,n){this.targetId=e,this.Ce=n}}class $I{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ev{constructor(){this.ve=0,this.Fe=Tv(),this.Me=tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new qa(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Tv()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hD{constructor(e){this.Ge=e,this.ze=new Map,this.je=er(),this.Je=xl(),this.He=xl(),this.Ze=new Ee(te)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Af(s))if(r===0){const o=new H(s.path);this.et(n,o,ut.newNoDocument(o,J.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Gr(r).toUint8Array()}catch(u){if(u instanceof pI)return Fi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new fm(o,i,s)}catch(u){return Fi(u instanceof Uo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Af(l.target)){const u=new H(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ut.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ne();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Wa(e,n,this.Ze,this.je,r);return this.je=er(),this.Je=xl(),this.He=xl(),this.Ze=new Ee(te),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ev,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new qe(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new qe(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ev),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xl(){return new Ee(H.comparator)}function Tv(){return new Ee(H.comparator)}const dD={asc:"ASCENDING",desc:"DESCENDING"},fD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pD={and:"AND",or:"OR"};class mD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json||Vc(e)?e:{value:e}}function Ju(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gD(t,e){return Ju(t,e.toTimestamp())}function Rn(t){return ae(!!t,49232),J.fromTimestamp(function(n){const r=Kr(n);return new ge(r.seconds,r.nanos)}(t))}function pm(t,e){return xf(t,e).canonicalString()}function xf(t,e){const n=function(i){return new de(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qI(t){const e=de.fromString(t);return ae(YI(e),10190,{key:e.toString()}),e}function Pf(t,e){return pm(t.databaseId,e.path)}function rd(t,e){const n=qI(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(KI(n))}function HI(t,e){return pm(t.databaseId,e)}function yD(t){const e=qI(t);return e.length===4?de.emptyPath():KI(e)}function Nf(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KI(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Iv(t,e,n){return{name:Pf(t,e),fields:n.value.mapValue.fields}}function _D(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string",58123),tt.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:zI(c.code);return new $(d,c.message||"")}(o);n=new $I(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rd(t,r.document.name),s=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):J.min(),l=new St({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new iu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rd(t,r.document),s=r.readTime?Rn(r.readTime):J.min(),o=ut.newNoDocument(i,s),l=r.removedTargetIds||[];n=new iu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rd(t,r.document),s=r.removedTargetIds||[];n=new iu([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aD(i,s),l=r.targetId;n=new BI(l,o)}}return n}function vD(t,e){let n;if(e instanceof $a)n={update:Iv(t,e.key,e.value)};else if(e instanceof hm)n={delete:Pf(t,e.key)};else if(e instanceof si)n={update:Iv(t,e.key,e.data),updateMask:RD(e.fieldMask)};else{if(!(e instanceof iD))return Q(16599,{dt:e.type});n={verify:Pf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Pa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ba)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function wD(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Rn(i.updateTime):Rn(s);return o.isEqual(J.min())&&(o=Rn(s)),new tD(o,i.transformResults||[])}(n,e))):[]}function ED(t,e){return{documents:[HI(t,e.path)]}}function TD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HI(t,i);const s=function(c){if(c.length!==0)return QI(pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:rs(g.field),direction:kD(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function ID(t){let e=yD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const g=GI(p);return g instanceof pn&&SI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new xa(is(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Vc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,w=p.values||[];return new Gu(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,w=p.values||[];return new Gu(w,g)}(n.endAt)),FL(e,i,o,s,l,"F",u,c)}function SD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=is(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=is(n.unaryFilter.field);return je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(is(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>GI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function kD(t){return dD[t]}function AD(t){return fD[t]}function CD(t){return pD[t]}function rs(t){return{fieldPath:t.canonicalString()}}function is(t){return Xe.fromServerFormat(t.fieldPath)}function QI(t){return t instanceof je?function(n){if(n.op==="=="){if(cv(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NAN"}};if(uv(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cv(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NAN"}};if(uv(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(n.field),op:AD(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>QI(i));return r.length===1?r[0]:{compositeFilter:{op:CD(n.op),filters:r}}}(t):Q(54877,{filter:t})}function RD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function JI(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,i,s=J.min(),o=J.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.yt=e}}function PD(t){const e=ID({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.bn=new bD}addToCollectionParentIndex(e,n){return this.bn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Hr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Hr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class bD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},XI=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(XI,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Yr(0)}static ar(){return new Yr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="LruGarbageCollector",LD=1048576;function Av([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class DD{constructor(e){this.Pr=e,this.buffer=new qe(Av),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Av(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class OD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(kv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){eo(n)?W(kv,"Ignoring IndexedDB error during garbage collection: ",n):await Zs(n)}await this.Ar(3e5)})}}class VD{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Oc.ce);const r=new DD(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Sv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),ts()<=ie.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function MD(t,e){return new VD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.changes=new Gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ta(r.mutation,i,Lt.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=ki();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ki();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=er();const o=ea(),l=function(){return ea()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof si)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ta(d.mutation,c,d.mutation.getFieldMask(),ge.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new FD(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ea();let i=new Ee((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Lt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=LI();d.forEach(g=>{if(!s.has(g)){const w=FI(n.get(g),r.get(g));w!==null&&p.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return UL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ki());let l=ka,u=s;return o.next(c=>F.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:bI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fo();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,g){return new to(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ut.newInvalidDocument(d)))});let l=Fo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ta(d.mutation,c,Lt.empty(),ge.now()),Fc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Rn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:PD(i.bundledQuery),readTime:Rn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.overlays=new Ee(H.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ki();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ki(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ki(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ki(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return F.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oD(n,r));let s=this.Lr.get(n);s===void 0&&(s=ne(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(){this.kr=new qe(Ke.Kr),this.qr=new qe(Ke.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ke(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new de([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new H(new de([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=ne();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return H.comparator(e.key,n.key)||te(e.Jr,n.Jr)}static Ur(e,n){return te(e.Jr,n.Jr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new qe(Ke.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?im:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(te);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new H(s),0);let l=new qe(te);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),F.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return F.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ke(n,0),i=this.Hr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.ti=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=er();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gL(mL(d),r)<=0||(i.has(d.key)||Fc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HD(this)}getSize(e){return F.resolve(this.size)}}class HD extends jD{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e){this.persistence=e,this.ri=new Gi(n=>am(n),lm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new mm,this.targetCount=0,this.oi=Yr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Yr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this._i={},this.overlays={},this.ai=new Oc(0),this.ui=!1,this.ui=!0,this.ci=new $D,this.referenceDelegate=e(this),this.li=new KD(this),this.indexManager=new ND,this.remoteDocumentCache=function(i){return new qD(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new xD(n),this.Pi=new zD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new WD(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new GD(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class GD extends _L{constructor(e){super(),this.currentSequenceNumber=e}}class gm{constructor(e){this.persistence=e,this.Ri=new mm,this.Ai=null}static Vi(e){return new gm(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const i=H.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Xu{constructor(e,n){this.persistence=e,this.fi=new Gi(r=>EL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=MD(this,n)}static Vi(e,n){return new Xu(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=tu(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ym(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return rx()?8:vL(ht())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new QD;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ts()<=ie.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(ts()<=ie.DEBUG&&W("QueryEngine","Query:",ns(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ts()<=ie.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):F.resolve())}gs(e,n){if(pv(n))return F.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qu(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Qu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return pv(n)||i.isEqual(J.min())?F.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?F.resolve(null):(ts()<=ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ns(n)),this.Ds(e,o,n,pL(i,ka)).next(l=>l))})}Ss(e,n){let r=new qe(PI(e));return n.forEach((i,s)=>{Fc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ts()<=ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ns(n)),this.fs.getDocumentsMatchingQuery(e,n,Hr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="LocalStore",JD=3e8;class XD{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ee(te),this.Fs=new Gi(s=>am(s),lm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UD(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function ZD(t,e,n,r){return new XD(t,e,n,r)}async function e1(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function eO(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,g=p.keys();let w=F.resolve();return g.forEach(S=>{w=w.next(()=>d.getEntry(u,S)).next(P=>{const b=c.docVersions.get(S);ae(b!==null,48541),P.version.compareTo(b)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function t1(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function tO(t,e){const n=X(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,p)=>{const g=i.get(p);if(!g)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,p)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(P,b,I){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=JD?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,w,d)&&l.push(n.li.updateTargetData(s,w))});let u=er(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(nO(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(J.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function nO(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=er();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(_m,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function rO(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=im),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iO(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function bf(t,e,n){const r=X(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!eo(o))throw o;W(_m,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Cv(t,e,n){const r=X(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),g=p.Fs.get(d);return g!==void 0?F.resolve(p.vs.get(g)):p.li.getTargetData(c,d)}(r,o,Cn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(sO(r,$L(e),l),{documents:l,ks:s})))}function sO(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Rv{constructor(){this.activeTargetIds=QL()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oO{constructor(){this.vo=new Rv,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Rv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="ConnectivityMonitor";class Pv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(xv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(xv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl=null;function Lf(){return Pl===null?Pl=function(){return 268435456+Math.round(2147483648*Math.random())}():Pl++,"0x"+Pl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="RestConnection",lO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uO{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Hu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Lf(),l=this.Qo(e,n.toUriEncodedString());W(id,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=qi(c);return this.zo(e,l,u,r,d).then(p=>(W(id,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Fi(id,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=lO[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection",xo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Rs extends uO{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Rs.c_){const e=oI();xo(e,sI.STAT_EVENT,n=>{n.stat===Ef.PROXY?W(ot,"STAT_EVENT: detected buffering proxy"):n.stat===Ef.NOPROXY&&W(ot,"STAT_EVENT: detected no buffering proxy")}),Rs.c_=!0}}zo(e,n,r,i,s){const o=Lf();return new Promise((l,u)=>{const c=new rI;c.setWithCredentials(!0),c.listenOnce(iI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case eu.NO_ERROR:const p=c.getResponseJson();W(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case eu.TIMEOUT:W(ot,`RPC '${e}' ${o} timed out`),u(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case eu.HTTP_ERROR:const g=c.getStatus();if(W(ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const P=function(I){const y=I.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(y)>=0?y:M.UNKNOWN}(S.status);u(new $(P,S.message))}else u(new $(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new $(M.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(ot,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);W(ot,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Lf(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");W(ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.I_(d);let p=!1,g=!1;const w=new cO({Jo:S=>{g?W(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(p||(W(ot,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),W(ot,`RPC '${e}' stream ${i} sending:`,S),d.send(S))},Ho:()=>d.close()});return xo(d,jo.EventType.OPEN,()=>{g||(W(ot,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),xo(d,jo.EventType.CLOSE,()=>{g||(g=!0,W(ot,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.E_(d))}),xo(d,jo.EventType.ERROR,S=>{g||(g=!0,Fi(ot,`RPC '${e}' stream ${i} transport errored. Name:`,S.name,"Message:",S.message),w.o_(new $(M.UNAVAILABLE,"The operation could not be completed")))}),xo(d,jo.EventType.MESSAGE,S=>{var P;if(!g){const b=S.data[0];ae(!!b,16349);const I=b,y=(I==null?void 0:I.error)||((P=I[0])==null?void 0:P.error);if(y){W(ot,`RPC '${e}' stream ${i} received error:`,y);const E=y.status;let N=function(T){const _=Ve[T];if(_!==void 0)return zI(_)}(E),V=y.message;E==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&Fi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=M.INTERNAL,V="Unknown error status: "+E+" with message "+y.message),g=!0,w.o_(new $(N,V)),d.close()}else W(ot,`RPC '${e}' stream ${i} received:`,b),w.__(b)}}),Rs.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return aI()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){return new Rs(t)}function sd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return new mD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs.c_=!1;class n1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="PersistentStream";class r1{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new n1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(Nv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(Nv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dO extends r1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=_D(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Rn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Nf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Af(u)?{documents:ED(s,u)}:{query:TD(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=WI(s,o.resumeToken);const c=Rf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Ju(s,o.snapshotVersion.toTimestamp());const c=Rf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=SD(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Nf(this.serializer),n.removeTarget=e,this.K_(n)}}class fO extends r1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=wD(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Nf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vD(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{}class mO extends pO{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,xf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(M.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,xf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gO(t,e,n,r){return new mO(t,e,n,r)}class yO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="RemoteStore";class _O{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Yr(1e3),this.Va=new Yr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{Qi(this)&&(W(Nn,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.da.add(4),await Ha(c),c.ga.set("Unknown"),c.da.delete(4),await $c(c)}(this))})}),this.ga=new yO(r,i)}}async function $c(t){if(Qi(t))for(const e of t.ma)await e(!0)}async function Ha(t){for(const e of t.ma)await e(!1)}function Df(t,e){return t.Ea.get(e)||void 0}function i1(t,e){const n=X(t),r=Df(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const c=Df(l,u);c!==void 0&&l.Ra.delete(c);const d=function(g,w){return w%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,d),l.Ra.set(d,u),d}(n,e.targetId);W(Nn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Bn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),Tm(n)?Em(n):no(n).O_()&&wm(n,s)}function vm(t,e){const n=X(t),r=no(n),i=Df(n,e);W(Nn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&s1(n,i),n.Ia.size===0&&(r.O_()?r.L_():Qi(n)&&n.ga.set("Unknown"))}function wm(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void W(Nn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}no(t).Z_(e)}function s1(t,e){t.pa.$e(e),no(t).X_(e)}function Em(t){t.pa=new hD({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ne()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),no(t).start(),t.ga.ua()}function Tm(t){return Qi(t)&&!no(t).x_()&&t.Ia.size>0}function Qi(t){return X(t).da.size===0}function o1(t){t.pa=void 0}async function vO(t){t.ga.set("Online")}async function wO(t){t.Ia.forEach((e,n)=>{wm(t,e)})}async function EO(t,e){o1(t),Tm(t)?(t.ga.ha(e),Em(t)):t.ga.set("Unknown")}async function TO(t,e,n){if(t.ga.set("Online"),e instanceof $I&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){W(Nn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zu(t,r)}else if(e instanceof iu?t.pa.Xe(e):e instanceof BI?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await t1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ia.get(d);p&&s.Ia.set(d,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,d)=>{const p=s.Ia.get(c);if(!p)return;s.Ia.set(c,p.withResumeToken(tt.EMPTY_BYTE_STRING,p.snapshotVersion)),s1(s,c);const g=new Bn(p.target,c,d,p.sequenceNumber);wm(s,g)});const u=function(d,p){const g=new Map;p.targetChanges.forEach((S,P)=>{const b=d.Ra.get(P);b!==void 0&&g.set(b,S)});let w=new Ee(te);return p.targetMismatches.forEach((S,P)=>{const b=d.Ra.get(S);b!==void 0&&(w=w.insert(b,P))}),new Wa(p.snapshotVersion,g,w,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){W(Nn,"Failed to raise snapshot:",r),await Zu(t,r)}}async function Zu(t,e,n){if(!eo(e))throw e;t.da.add(1),await Ha(t),t.ga.set("Offline"),n||(n=()=>t1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Nn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await $c(t)})}function a1(t,e){return e().catch(n=>Zu(t,n,e))}async function Wc(t){const e=X(t),n=Jr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:im;for(;IO(e);)try{const i=await rO(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,SO(e,i)}catch(i){await Zu(e,i)}l1(e)&&u1(e)}function IO(t){return Qi(t)&&t.Ta.length<10}function SO(t,e){t.Ta.push(e);const n=Jr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function l1(t){return Qi(t)&&!Jr(t).x_()&&t.Ta.length>0}function u1(t){Jr(t).start()}async function kO(t){Jr(t).ra()}async function AO(t){const e=Jr(t);for(const n of t.Ta)e.ea(n.mutations)}async function CO(t,e,n){const r=t.Ta.shift(),i=dm.from(r,e,n);await a1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wc(t)}async function RO(t,e){e&&Jr(t).Y_&&await async function(r,i){if(function(o){return lD(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Jr(r).B_(),await a1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wc(r)}}(t,e),l1(t)&&u1(t)}async function bv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W(Nn,"RemoteStore received new credentials");const r=Qi(n);n.da.add(3),await Ha(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await $c(n)}async function xO(t,e){const n=X(t);e?(n.da.delete(2),await $c(n)):e||(n.da.add(2),await Ha(n),n.ga.set("Unknown"))}function no(t){return t.ya||(t.ya=function(n,r,i){const s=X(n);return s.sa(),new dO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:vO.bind(null,t),Yo:wO.bind(null,t),t_:EO.bind(null,t),H_:TO.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Tm(t)?Em(t):t.ga.set("Unknown")):(await t.ya.stop(),o1(t))})),t.ya}function Jr(t){return t.wa||(t.wa=function(n,r,i){const s=X(n);return s.sa(),new fO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:kO.bind(null,t),t_:RO.bind(null,t),ta:AO.bind(null,t),na:CO.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await Wc(t)):(await t.wa.stop(),t.Ta.length>0&&(W(Nn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Im(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sm(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),eo(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{static emptySet(e){return new xs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Fo(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.Sa=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ws{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ws(e,n,xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class NO{constructor(){this.queries=Dv(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Dv(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function Dv(){return new Gi(t=>xI(t),jc)}async function c1(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new PO,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Sm(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&km(n)}async function h1(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bO(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&km(n)}function LO(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function km(t){t.xa.forEach(e=>{e.next()})}var Of,Ov;(Ov=Of||(Of={})).Ba="default",Ov.Cache="cache";class d1{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Of.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.key=e}}class p1{constructor(e){this.key=e}}class DO{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ne(),this.mutatedKeys=ne(),this.iu=PI(e),this.su=new xs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Lv,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const g=i.get(d),w=Fc(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;g&&w?g.data.isEqual(w.data)?S!==P&&(r.track({type:3,doc:w}),b=!0):this.uu(g,w)||(r.track({type:2,doc:w}),b=!0,(u&&this.iu(w,u)>0||c&&this.iu(w,c)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),b=!0):g&&!w&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(w?(o=o.add(w),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((d,p)=>function(w,S){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:b})}};return P(w)-P(S)}(d.type,p.type)||this.iu(d.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new Ws(this.query,e.su,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Lv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ne(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new p1(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new f1(r))}),n}Tu(e){this.tu=e.ks,this.ru=ne();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Ws.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Am="SyncEngine";class OO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VO{constructor(e){this.key=e,this.Eu=!1}}class MO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Gi(l=>xI(l),jc),this.Vu=new Map,this.du=new Set,this.mu=new Ee(H.comparator),this.fu=new Map,this.gu=new mm,this.pu={},this.yu=new Map,this.wu=Yr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function jO(t,e,n=!0){const r=w1(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await m1(r,e,n,!0),i}async function FO(t,e){const n=w1(t);await m1(n,e,!0,!1)}async function m1(t,e,n,r){const i=await iO(t.localStore,Cn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await UO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&i1(t.remoteStore,i),l}async function UO(t,e,n,r,i){t.bu=(p,g,w)=>async function(P,b,I,y){let E=b.view._u(I);E.bs&&(E=await Cv(P.localStore,b.query,!1).then(({documents:T})=>b.view._u(T,E)));const N=y&&y.targetChanges.get(b.targetId),V=y&&y.targetMismatches.get(b.targetId)!=null,j=b.view.applyChanges(E,P.isPrimaryClient,N,V);return Mv(P,b.targetId,j.hu),j.snapshot}(t,p,g,w);const s=await Cv(t.localStore,e,!0),o=new DO(e,s.ks),l=o._u(s.documents),u=qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Mv(t,n,c.hu);const d=new OO(e,n,o);return t.Au.set(e,d),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function zO(t,e,n){const r=X(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!jc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&vm(r.remoteStore,i.targetId),Vf(r,i.targetId)}).catch(Zs)):(Vf(r,i.targetId),await bf(r.localStore,i.targetId,!0))}async function BO(t,e){const n=X(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vm(n.remoteStore,r.targetId))}async function $O(t,e,n){const r=YO(t);try{const i=await function(o,l){const u=X(o),c=ge.now(),d=l.reduce((w,S)=>w.add(S.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=er(),P=ne();return u.xs.getEntries(w,d).next(b=>{S=b,S.forEach((I,y)=>{y.isValidDocument()||(P=P.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,S)).next(b=>{p=b;const I=[];for(const y of l){const E=rD(y,p.get(y.key).overlayedDocument);E!=null&&I.push(new si(y.key,E,EI(E.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,I,l)}).next(b=>{g=b;const I=b.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(w,b.batchId,I)})}).then(()=>({batchId:g.batchId,changes:bI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new Ee(te)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ka(r,i.changes),await Wc(r.remoteStore)}catch(i){const s=Sm(i,"Failed to persist write");n.reject(s)}}async function g1(t,e){const n=X(t);try{const r=await tO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?ae(o.Eu,14607):i.removedDocuments.size>0&&(ae(o.Eu,42227),o.Eu=!1))}),await Ka(n,r,e)}catch(r){await Zs(r)}}function Vv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const g of p.va)g.Oa(l)&&(c=!0)}),c&&km(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WO(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,ut.newNoDocument(s,J.min()));const l=ne().add(s),u=new Wa(J.min(),new Map,new Ee(te),o,l);await g1(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),Cm(r)}else await bf(r.localStore,e,!1).then(()=>Vf(r,e,n)).catch(Zs)}async function qO(t,e){const n=X(t),r=e.batch.batchId;try{const i=await eO(n.localStore,e);_1(n,r,null),y1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ka(n,i)}catch(i){await Zs(i)}}async function HO(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);_1(r,e,n),y1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ka(r,i)}catch(i){await Zs(i)}}function y1(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function _1(t,e,n){const r=X(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||v1(t,r)})}function v1(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(vm(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),Cm(t))}function Mv(t,e,n){for(const r of n)r instanceof f1?(t.gu.addReference(r.key,e),KO(t,r)):r instanceof p1?(W(Am,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||v1(t,r.key)):Q(19791,{Cu:r})}function KO(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(W(Am,"New document in limbo: "+n),t.du.add(r),Cm(t))}function Cm(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new H(de.fromString(e)),r=t.wu.next();t.fu.set(r,new VO(n)),t.mu=t.mu.insert(n,r),i1(t.remoteStore,new Bn(Cn(um(n.path)),r,"TargetPurposeLimboResolution",Oc.ce))}}async function Ka(t,e,n){const r=X(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=ym.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,g=>F.forEach(g.Ts,w=>d.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>F.forEach(g.Is,w=>d.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!eo(p))throw p;W(_m,"Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const w=d.vs.get(g),S=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(S);d.vs=d.vs.insert(g,P)}}}(r.localStore,s))}async function GO(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W(Am,"User change. New user:",e.toKey());const r=await e1(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new $(M.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ka(n,r.Ns)}}function QO(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return ne().add(r.key);{let i=ne();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function w1(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=g1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WO.bind(null,e),e.Ru.H_=bO.bind(null,e.eventManager),e.Ru.Du=LO.bind(null,e.eventManager),e}function YO(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HO.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return ZD(this.persistence,new YD,e.initialUser,this.serializer)}xu(e){return new ZI(gm.Vi,this.serializer)}Mu(e){return new oO}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class JO extends ec{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){ae(this.persistence.referenceDelegate instanceof Xu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new OD(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new ZI(r=>Xu.Vi(r,n),this.serializer)}}class Mf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GO.bind(null,this.syncEngine),await xO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NO}()}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),r=hO(e.databaseInfo);return gO(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _O(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Vv(this.syncEngine,n,0),function(){return Pv.v()?new Pv:new aO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new MO(i,s,o,l,u,c);return d&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W(Nn,"RemoteStore shutting down."),s.da.add(5),await Ha(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Mf.provider={build:()=>new Mf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="FirestoreClient";class XO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(Xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function od(t,e){t.asyncQueue.verifyOperationInProgress(),W(Xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await e1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZO(t);W(Xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bv(e.remoteStore,i)),t._onlineComponents=e}async function ZO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Xr,"Using user provided OfflineComponentProvider");try{await od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Fi("Error using user provided cache. Falling back to memory cache: "+n),await od(t,new ec)}}else W(Xr,"Using default OfflineComponentProvider"),await od(t,new JO(void 0));return t._offlineComponents}async function T1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Xr,"Using user provided OnlineComponentProvider"),await jv(t,t._uninitializedComponentsProvider._online)):(W(Xr,"Using default OnlineComponentProvider"),await jv(t,new Mf))),t._onlineComponents}function eV(t){return T1(t).then(e=>e.syncEngine)}async function I1(t){const e=await T1(t),n=e.eventManager;return n.onListen=jO.bind(null,e.syncEngine),n.onUnlisten=zO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BO.bind(null,e.syncEngine),n}function tV(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new E1({next:g=>{d.Ku(),o.enqueueAndForget(()=>h1(s,p));const w=g.docs.has(l);!w&&g.fromCache?c.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new d1(um(l.path),d,{includeMetadataChanges:!0,Wa:!0});return c1(s,p)}(await I1(t),t.asyncQueue,e,n,r)),r.promise}function nV(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new E1({next:g=>{d.Ku(),o.enqueueAndForget(()=>h1(s,p)),g.fromCache&&u.source==="server"?c.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new d1(l,d,{includeMetadataChanges:!0,Wa:!0});return c1(s,p)}(await I1(t),t.asyncQueue,e,n,r)),r.promise}function rV(t,e){const n=new qn;return t.asyncQueue.enqueueAndForget(async()=>$O(await eV(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV="ComponentProvider",Fv=new Map;function sV(t,e,n,r,i){return new SL(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,S1(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="firestore.googleapis.com",Uv=!0;class zv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=k1,this.ssl=Uv}else this.host=e.host,this.ssl=e.ssl??Uv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=XI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LD)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rL;switch(r.type){case"firstParty":return new aL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fv.get(n);r&&(W(iV,"Removing Datastore"),Fv.delete(n),r.terminate())}(this),Promise.resolve()}}function oV(t,e,n,r={}){var c;t=Zn(t,qc);const i=qi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Up(`https://${l}`),s.host!==k1&&s.host!==l&&Fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!qr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=at.MOCK_USER;else{d=H0(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new at(g)}t._authCredentials=new iL(new uI(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oi(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ba(n,Ue._jsonSchema))return new Ue(e,r||null,new H(de.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Fe("string",Ue._jsonSchemaVersion),referencePath:Fe("string")};class Br extends oi{constructor(e,n,r){super(e,n,um(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new H(e))}withConverter(e){return new Br(this.firestore,e,this._path)}}function PF(t,e,...n){if(t=Ae(t),cI("collection","path",e),t instanceof qc){const r=de.fromString(e,...n);return ev(r),new Br(t,null,r)}{if(!(t instanceof Ue||t instanceof Br))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return ev(r),new Br(t.firestore,null,r)}}function aV(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=rm.newId()),cI("doc","path",e),t instanceof qc){const r=de.fromString(e,...n);return Z_(r),new Ue(t,null,new H(r))}{if(!(t instanceof Ue||t instanceof Br))throw new $(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Z_(r),new Ue(t.firestore,t instanceof Br?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="AsyncQueue";class $v{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new n1(this,"async_queue_retry"),this.lc=()=>{const r=sd();r&&W(Bv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=sd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new qn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!eo(e))throw e;W(Bv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Xn("INTERNAL UNHANDLED ERROR: ",Wv(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=Im.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&Q(47125,{Rc:Wv(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Wv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ro extends qc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $v,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $v(e),this._firestoreClient=void 0,await e}}}function lV(t,e){const n=typeof t=="object"?t:Cc(),r=typeof t=="string"?t:Hu,i=ni(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$0("firestore");s&&oV(i,...s)}return i}function Rm(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uV(t),t._firestoreClient}function uV(t){var r,i,s,o;const e=t._freezeSettings(),n=sV(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new XO(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(tt.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ba(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Fe("string",qt._jsonSchemaVersion),bytes:Fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(Ba(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:Fe("string",xn._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ba(e,un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new un(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:Fe("string",un._jsonSchemaVersion),vectorValues:Fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=/^__.*__$/;class hV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new si(e,this.data,this.fieldMask,n,this.fieldTransforms):new $a(e,this.data,n,this.fieldTransforms)}}class A1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function C1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Pm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Pm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return tc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(C1(this.dataSource)&&cV.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class dV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bc(e)}V(e,n,r,i=!1){return new Pm({dataSource:e,methodName:n,targetDoc:r,path:Xe.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nm(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new dV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fV(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);Lm("Data must be an object, but it was:",o,r);const l=R1(r,o);let u,c;if(s.merge)u=new Lt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=Ui(e,p,n);if(!o.contains(g))throw new $(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);N1(d,g)||d.push(g)}u=new Lt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new hV(new St(l),u,c)}class Kc extends Hc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kc}}class bm extends Hc{_toFieldTransform(e){return new ZL(e.path,new Pa)}isEqual(e){return e instanceof bm}}function pV(t,e,n,r){const i=t.V(1,e,n);Lm("Data must be an object, but it was:",i,r);const s=[],o=St.empty();ii(r,(u,c)=>{const d=P1(e,u,n);c=Ae(c);const p=i.Sc(d);if(c instanceof Kc)s.push(d);else{const g=Ga(c,p);g!=null&&(s.push(d),o.set(d,g))}});const l=new Lt(s);return new A1(o,l,i.fieldTransforms)}function mV(t,e,n,r,i,s){const o=t.V(1,e,n),l=[Ui(e,r,n)],u=[i];if(s.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Ui(e,s[g])),u.push(s[g+1]);const c=[],d=St.empty();for(let g=l.length-1;g>=0;--g)if(!N1(c,l[g])){const w=l[g];let S=u[g];S=Ae(S);const P=o.Sc(w);if(S instanceof Kc)c.push(w);else{const b=Ga(S,P);b!=null&&(c.push(w),d.set(w,b))}}const p=new Lt(c);return new A1(d,p,o.fieldTransforms)}function gV(t,e,n,r=!1){return Ga(n,t.V(r?4:3,e))}function Ga(t,e){if(x1(t=Ae(t)))return Lm("Unsupported field value:",e,t),R1(t,e);if(t instanceof Hc)return function(r,i){if(!C1(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Ga(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:Ju(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ju(i.serializer,s)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:WI(i.serializer,r._byteString)};if(r instanceof Ue){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof un)return function(o,l){const u=o instanceof un?o.toArray():o;return{mapValue:{fields:{[vI]:{stringValue:wI},[Ku]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.Dc("VectorValues must only contain numeric values.");return cm(l.serializer,d)})}}}}}}(r,i);if(JI(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${Dc(r)}`)}(t,e)}function R1(t,e){const n={};return fI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=Ga(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function x1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof xn||t instanceof qt||t instanceof Ue||t instanceof Hc||t instanceof un||JI(t))}function Lm(t,e,n){if(!x1(n)||!hI(n)){const r=Dc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Ui(t,e,n){if((e=Ae(e))instanceof xm)return e._internalPath;if(typeof e=="string")return P1(t,e);throw tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const yV=new RegExp("[~\\*/\\[\\]]");function P1(t,e,n){if(e.search(yV)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xm(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(M.INVALID_ARGUMENT,l+t+u)}function N1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ku].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Le(o.doubleValue));return new un(n)}convertGeoPoint(e){return new xn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Aa(e));default:return null}}convertTimestamp(e){const n=Kr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);ae(YI(r),9688,{name:e});const i=new Ca(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1 extends _V{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function NF(){return new bm("serverTimestamp")}const qv="@firebase/firestore",Hv="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ui("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vV extends L1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dm{}class Om extends Dm{}function bF(t,e,...n){let r=[];e instanceof Dm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Vm).length,l=s.filter(u=>u instanceof Gc).length;if(o>1||o>0&&l>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gc extends Om{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gc(e,n,r)}_apply(e){const n=this._parse(e);return D1(e._query,n),new oi(e.firestore,e.converter,Cf(e._query,n))}_parse(e){const n=Nm(e.firestore);return function(s,o,l,u,c,d,p){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gv(p,d);const S=[];for(const P of p)S.push(Kv(u,s,P));g={arrayValue:{values:S}}}else g=Kv(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gv(p,d),g=gV(l,o,p,d==="in"||d==="not-in");return je.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LF(t,e,n){const r=e,i=Ui("where",t);return Gc._create(i,r,n)}class Vm extends Dm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)D1(o,u),o=Cf(o,u)}(e._query,n),new oi(e.firestore,e.converter,Cf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mm extends Om{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xa(s,o)}(e._query,this._field,this._direction);return new oi(e.firestore,e.converter,BL(e._query,n))}}function DF(t,e="asc"){const n=e,r=Ui("orderBy",t);return Mm._create(r,n)}class jm extends Om{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new jm(e,n,r)}_apply(e){return new oi(e.firestore,e.converter,Qu(e._query,this._limit,this._limitType))}}function OF(t){return jm._create("limit",t,"F")}function Kv(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RI(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!H.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lv(t,new H(r))}if(n instanceof Ue)return lv(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dc(n)}.`)}function Gv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function D1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function EV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ri extends L1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ui("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ri._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ri._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ri._jsonSchema={type:Fe("string",Ri._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class su extends Ri{data(e={}){return super.data(e)}}class Ps{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new su(this._firestore,this._userDataWriter,r.key,r,new zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new su(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new su(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:TV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=rm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps._jsonSchemaVersion="firestore/querySnapshot/1.0",Ps._jsonSchema={type:Fe("string",Ps._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VF(t){t=Zn(t,Ue);const e=Zn(t.firestore,ro),n=Rm(e);return tV(n,t._key).then(r=>IV(e,t,r))}function MF(t){t=Zn(t,oi);const e=Zn(t.firestore,ro),n=Rm(e),r=new b1(e);return wV(t._query),nV(n,t._query).then(i=>new Ps(e,r,t,i))}function jF(t,e,n,...r){t=Zn(t,Ue);const i=Zn(t.firestore,ro),s=Nm(i);let o;return o=typeof(e=Ae(e))=="string"||e instanceof xm?mV(s,"updateDoc",t._key,e,n,r):pV(s,"updateDoc",t._key,e),Fm(i,[o.toMutation(t._key,ln.exists(!0))])}function FF(t){return Fm(Zn(t.firestore,ro),[new hm(t._key,ln.none())])}function UF(t,e){const n=Zn(t.firestore,ro),r=aV(t),i=EV(t.converter,e),s=Nm(t.firestore);return Fm(n,[fV(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function Fm(t,e){const n=Rm(t);return rV(n,e)}function IV(t,e,n){const r=n.docs.get(e._key),i=new b1(t);return new Ri(t,i,e._key,r,new zo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){nL(Hi),dn(new Yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ro(new sL(r.getProvider("auth-internal")),new lL(o,r.getProvider("app-check-internal")),kL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),xt(qv,Hv,e),xt(qv,Hv,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="firebasestorage.googleapis.com",V1="storageBucket",SV=2*60*1e3,kV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Jt{constructor(e,n,r=0){super(ad(e),`Firebase Storage: ${n} (${ad(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ad(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function ad(t){return"storage/"+t}function Um(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Pe.UNKNOWN,t)}function AV(t){return new Ne(Pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function CV(t){return new Ne(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Pe.UNAUTHENTICATED,t)}function xV(){return new Ne(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PV(t){return new Ne(Pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function NV(){return new Ne(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bV(){return new Ne(Pe.CANCELED,"User canceled the upload/download.")}function LV(t){return new Ne(Pe.INVALID_URL,"Invalid URL '"+t+"'.")}function DV(t){return new Ne(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function OV(){return new Ne(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+V1+"' property when initializing the app?")}function VV(){return new Ne(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MV(){return new Ne(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jV(t){return new Ne(Pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jf(t){return new Ne(Pe.INVALID_ARGUMENT,t)}function M1(){return new Ne(Pe.APP_DELETED,"The Firebase app was deleted.")}function FV(t){return new Ne(Pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function na(t,e){return new Ne(Pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Po(t){throw new Ne(Pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw DV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${i}/o${g}`,"i"),S={bucket:1,path:3},P=n===O1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",I=new RegExp(`^https?://${P}/${i}/${b}`,"i"),E=[{regex:l,indices:u,postModify:s},{regex:w,indices:S,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<E.length;N++){const V=E[N],j=V.regex.exec(e);if(j){const T=j[V.indices.bucket];let _=j[V.indices.path];_||(_=""),r=new Dt(T,_),V.postModify(r);break}}if(r==null)throw LV(e);return r}}class UV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zV(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function p(b){i=setTimeout(()=>{i=null,t(w,u())},b)}function g(){s&&clearTimeout(s)}function w(b,...I){if(c){g();return}if(b){g(),d.call(null,b,...I);return}if(u()||o){g(),d.call(null,b,...I);return}r<64&&(r*=2);let E;l===1?(l=2,E=0):E=(r+Math.random())*1e3,p(E)}let S=!1;function P(b){S||(S=!0,g(),!c&&(i!==null?(b||(l=2),clearTimeout(i),p(0)):b||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function BV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $V(t){return t!==void 0}function WV(t){return typeof t=="object"&&!Array.isArray(t)}function zm(t){return typeof t=="string"||t instanceof String}function Qv(t){return Bm()&&t instanceof Blob}function Bm(){return typeof Blob<"u"}function Yv(t,e,n,r){if(r<e)throw jf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function j1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var xi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xi||(xi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,n,r,i,s,o,l,u,c,d,p,g=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,P)=>{this.resolve_=S,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Nl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===xi.NO_ERROR,u=s.getStatus();if(!l||qV(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===xi.ABORT;r(!1,new Nl(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Nl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());$V(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Um();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?M1():bV();o(u)}else{const u=NV();o(u)}};this.canceled_?n(!1,new Nl(!1,null,!0)):this.backoffId_=zV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function KV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function JV(t,e,n,r,i,s,o=!0,l=!1){const u=j1(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return QV(d,e),KV(d,n),GV(d,s),YV(d,r),new HV(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZV(...t){const e=XV();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Bm())return new Blob(t);throw new Ne(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function e4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(t){if(typeof atob>"u")throw jV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ld{constructor(e,n){this.data=e,this.contentType=n||null}}function n4(t,e){switch(t){case En.RAW:return new ld(F1(e));case En.BASE64:case En.BASE64URL:return new ld(U1(t,e));case En.DATA_URL:return new ld(i4(e),s4(e))}throw Um()}function F1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function r4(t){let e;try{e=decodeURIComponent(t)}catch{throw na(En.DATA_URL,"Malformed data URL.")}return F1(e)}function U1(t,e){switch(t){case En.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw na(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw na(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=t4(e)}catch(i){throw i.message.includes("polyfill")?i:na(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class z1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw na(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=o4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function i4(t){const e=new z1(t);return e.base64?U1(En.BASE64,e.rest):r4(e.rest)}function s4(t){return new z1(t).contentType}function o4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){let r=0,i="";Qv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qv(this.data_)){const r=this.data_,i=e4(r,e,n);return i===null?null:new Ir(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ir(r,!0)}}static getBlob(...e){if(Bm()){const n=e.map(r=>r instanceof Ir?r.data_:r);return new Ir(ZV.apply(null,n))}else{const n=e.map(o=>zm(o)?n4(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Ir(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t){let e;try{e=JSON.parse(t)}catch{return null}return WV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function l4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u4(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||u4}}let bl=null;function c4(t){return!zm(t)||t.length<2?t:$1(t)}function W1(){if(bl)return bl;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return c4(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),bl=t,bl}function h4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function d4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return h4(r,t),r}function q1(t,e,n){const r=B1(e);return r===null?null:d4(t,r,n)}function f4(t,e,n,r){const i=B1(e);if(i===null||!zm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),w=$m(g,n,r),S=j1({alt:"media",token:c});return w+S})[0]}function p4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class H1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){if(!t)throw Um()}function m4(t,e){function n(r,i){const s=q1(t,i,e);return K1(s!==null),s}return n}function g4(t,e){function n(r,i){const s=q1(t,i,e);return K1(s!==null),f4(s,i,t.host,t._protocol)}return n}function G1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xV():i=RV():n.getStatus()===402?i=CV(t.bucket):n.getStatus()===403?i=PV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function y4(t){const e=G1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=AV(t.path)),s.serverResponse=i.serverResponse,s}return n}function _4(t,e,n){const r=e.fullServerUrl(),i=$m(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new H1(i,s,g4(t,n),o);return l.errorHandler=y4(e),l}function v4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function w4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=v4(null,e)),r}function E4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let E="";for(let N=0;N<2;N++)E=E+Math.random().toString().slice(2);return E}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=w4(e,r,i),d=p4(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",w=Ir.getBlob(p,r,g);if(w===null)throw VV();const S={name:c.fullPath},P=$m(s,t.host,t._protocol),b="POST",I=t.maxUploadRetryTime,y=new H1(P,b,m4(t,n),I);return y.urlParams=S,y.headers=o,y.body=w.uploadData(),y.errorHandler=G1(e),y}class T4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Po("cannot .send() more than once");if(qi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Po("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Po("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Po("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Po("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class I4 extends T4{initXhr(){this.xhr_.responseType="text"}}function Q1(){return new I4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zi(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $1(this._location.path)}get storage(){return this._service}get parent(){const e=a4(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new zi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FV(e)}}function S4(t,e,n){t._throwIfRoot("uploadBytes");const r=E4(t.storage,t._location,W1(),new Ir(e,!0),n);return t.storage.makeRequestWithTokens(r,Q1).then(i=>({metadata:i,ref:t}))}function k4(t){t._throwIfRoot("getDownloadURL");const e=_4(t.storage,t._location,W1());return t.storage.makeRequestWithTokens(e,Q1).then(n=>{if(n===null)throw MV();return n})}function A4(t,e){const n=l4(t._location.path,e),r=new Dt(t._location.bucket,n);return new zi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t){return/^[A-Za-z]+:\/\//.test(t)}function R4(t,e){return new zi(t,e)}function Y1(t,e){if(t instanceof Wm){const n=t;if(n._bucket==null)throw OV();const r=new zi(n,n._bucket);return e!=null?Y1(r,e):r}else return e!==void 0?A4(t,e):t}function x4(t,e){if(e&&C4(e)){if(t instanceof Wm)return R4(t,e);throw jf("To use ref(service, url), the first argument must be a Storage instance.")}else return Y1(t,e)}function Jv(t,e){const n=e==null?void 0:e[V1];return n==null?null:Dt.makeFromBucketSpec(n,t)}function P4(t,e,n,r={}){t.host=`${e}:${n}`;const i=qi(e);i&&Up(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:H0(s,t.app.options.projectId))}class Wm{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=O1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SV,this._maxUploadRetryTime=kV,this._requests=new Set,i!=null?this._bucket=Dt.makeFromBucketSpec(i,this._host):this._bucket=Jv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=Jv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new UV(M1());{const o=JV(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Xv="@firebase/storage",Zv="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="storage";function zF(t,e,n){return t=Ae(t),S4(t,e,n)}function BF(t){return t=Ae(t),k4(t)}function $F(t,e){return t=Ae(t),x4(t,e)}function N4(t=Cc(),e){t=Ae(t);const r=ni(t,J1).getImmediate({identifier:e}),i=$0("storage");return i&&b4(r,...i),r}function b4(t,e,n,r={}){P4(t,e,n,r)}function L4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Wm(n,r,i,e,Hi)}function D4(){dn(new Yt(J1,L4,"PUBLIC").setMultipleInstances(!0)),xt(Xv,Zv,""),xt(Xv,Zv,"esm2020")}D4();const O4=!1,V4={apiKey:"demo-protonlab",authDomain:"demo-protonlab.firebaseapp.com",projectId:"demo-protonlab",storageBucket:"demo-protonlab.appspot.com",messagingSenderId:"000000000000",appId:"1:000000000000:web:demo",measurementId:void 0},Qc=Z0(V4),Ll=typeof window<"u"&&O4?z2(Qc):null,ew=eL(Qc),WF=lV(Qc),qF=N4(Qc);function M4(t){const e=t.trim();return(e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1):e).replace(/\/+$/,"")}function j4(t){const e=M4(t);return new Set(["https://protonlab-backend-delta.vercel.app"]).has(e)?"https://protonlab-backend-kappa.vercel.app":e}const No=j4("http://localhost:3000"),F4=1e4,U4="legacy".toLowerCase(),tw=!1,z4=!0;class B4{constructor(){pt(this,"logs",[]);pt(this,"maxLogs",1e3);pt(this,"sessionId");pt(this,"userId");pt(this,"isProduction");this.sessionId=this.generateSessionId(),this.isProduction=!0,this.initErrorHandlers()}generateSessionId(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}setUserId(e){this.userId=e}clearUserId(){this.userId=void 0}initErrorHandlers(){window.addEventListener("error",e=>{var n;this.error("Uncaught Error",{message:e.message,filename:e.filename,lineno:e.lineno,colno:e.colno,error:(n=e.error)==null?void 0:n.stack})}),window.addEventListener("unhandledrejection",e=>{this.error("Unhandled Promise Rejection",{reason:e.reason,promise:String(e.promise)})}),window.addEventListener("offline",()=>{this.warn("Network offline")}),window.addEventListener("online",()=>{this.info("Network online")})}createLogEntry(e,n,r,i){return{level:e,message:n,timestamp:new Date().toISOString(),context:r,stack:i==null?void 0:i.stack,userId:this.userId,sessionId:this.sessionId}}storeLog(e){this.logs.push(e),this.logs.length>this.maxLogs&&(this.logs=this.logs.slice(-this.maxLogs));try{const n=this.logs.slice(-100);localStorage.setItem("app_logs",JSON.stringify(n))}catch{}this.sendToTerminal(e)}async sendToTerminal(e){if(!this.isProduction)try{await fetch("/__logs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch{}}sendToConsole(e){const n=this.getConsoleStyle(e.level),r=`[${e.level.toUpperCase()}] [${new Date(e.timestamp).toLocaleTimeString()}]`;if(!this.isProduction||e.level==="error"||e.level==="critical")switch(e.level){case"debug":case"info":console.log(`%c${r}`,n,e.message,e.context||"");break;case"warn":console.warn(`%c${r}`,n,e.message,e.context||"");break;case"error":case"critical":console.error(`%c${r}`,n,e.message,e.context||""),e.stack&&console.error(e.stack);break}}getConsoleStyle(e){return{debug:"color: #808080",info:"color: #0066cc",warn:"color: #ff8c00; font-weight: bold",error:"color: #ff0000; font-weight: bold",critical:"color: #ffffff; background-color: #ff0000; font-weight: bold; padding: 2px 4px"}[e]}sendToFirebaseAnalytics(e){if(!(!Ll||!this.isProduction))try{(e.level==="error"||e.level==="critical")&&yf(Ll,"error_occurred",{error_message:e.message,error_level:e.level,user_id:e.userId,session_id:e.sessionId,...e.context})}catch{}}debug(e,n){const r=this.createLogEntry("debug",e,n);this.storeLog(r),this.sendToConsole(r)}info(e,n){const r=this.createLogEntry("info",e,n);this.storeLog(r),this.sendToConsole(r)}warn(e,n){const r=this.createLogEntry("warn",e,n);this.storeLog(r),this.sendToConsole(r)}error(e,n,r){let i,s;n instanceof Error?(s=n,i={errorName:s.name,errorMessage:s.message}):(i=n,s=r);const o=this.createLogEntry("error",e,i,s);this.storeLog(o),this.sendToConsole(o),this.sendToFirebaseAnalytics(o)}critical(e,n,r){let i,s;n instanceof Error?(s=n,i={errorName:s.name,errorMessage:s.message}):(i=n,s=r);const o=this.createLogEntry("critical",e,i,s);this.storeLog(o),this.sendToConsole(o),this.sendToFirebaseAnalytics(o)}logEvent(e,n){if(Ll)try{yf(Ll,e,n),this.debug(`Analytics event: ${e}`,n)}catch(r){this.error("Failed to log analytics event",{eventName:e,error:String(r)})}}getLogs(e){return e?this.logs.filter(n=>n.level===e):[...this.logs]}exportLogs(){return JSON.stringify(this.logs,null,2)}clearLogs(){this.logs=[];try{localStorage.removeItem("app_logs")}catch{}this.info("Logs cleared")}getStats(){const e={total:this.logs.length,debug:0,info:0,warn:0,error:0,critical:0};return this.logs.forEach(n=>{e[n.level]++}),e}loadStoredLogs(){try{const e=localStorage.getItem("app_logs");if(e){const n=JSON.parse(e);this.logs=[...n,...this.logs],this.info("Loaded stored logs",{count:n.length})}}catch(e){this.error("Failed to load stored logs",e)}}}const xe=new B4;xe.loadStoredLogs();xe.info("Logger initialized",{environment:"production",version:"1.0.0"});const $4={pageView:(t,e)=>{xe.debug("Page viewed",{path:t,title:e}),xe.logEvent("page_view",{page_path:t,page_title:e})},routeChange:(t,e)=>{xe.debug("Route changed",{from:t,to:e}),xe.logEvent("route_change",{from:t,to:e})}},es={request:(t,e)=>{xe.debug("API request",{endpoint:t,method:e})},success:(t,e,n)=>{xe.debug("API request success",{endpoint:t,method:e,duration:n})},error:(t,e,n,r)=>{xe.error("API request failed",{endpoint:t,method:e,status:n,error:r}),xe.logEvent("api_error",{endpoint:t,method:e,status:n,error:r})},timeout:(t,e)=>{xe.error("API request timeout",{endpoint:t,method:e}),xe.logEvent("api_timeout",{endpoint:t,method:e})}},nw={TOKEN_MISSING:"Debes iniciar sesión para continuar.",TOKEN_INVALID:"Tu sesión no es válida. Inicia sesión nuevamente.",TOKEN_EXPIRED:"Tu sesión expiró. Inicia sesión nuevamente.",UNAUTHORIZED:"No autorizado para realizar esta acción.",FORBIDDEN:"No tienes permisos para realizar esta acción.",NOT_FOUND:"No se encontró el recurso solicitado.",CONFLICT:"El recurso ya existe o está en conflicto.",VALIDATION_ERROR:"Hay datos inválidos en la solicitud.",USER_ALREADY_EXISTS:"Ya existe un usuario con ese correo.",INTERNAL_ERROR:"Ocurrió un error interno en el servidor.",NETWORK_ERROR:"No se pudo conectar con el backend."};class Sr extends Error{constructor(n){super(n.message);pt(this,"code");pt(this,"status");pt(this,"requestId");pt(this,"endpoint");pt(this,"url");pt(this,"details");pt(this,"responseHeaders");this.name="ApiRequestError",this.code=n.code,this.status=n.status,this.requestId=n.requestId,this.endpoint=n.endpoint,this.url=n.url,this.details=n.details,this.responseHeaders=n.responseHeaders}}function W4(t,e){return e!=="v1"||t.startsWith("/api/v1")?t:t==="/api"?"/api/v1":t.startsWith("/api/")?t.replace("/api/","/api/v1/"):t}function ud(t,e){return t&&nw[t]?nw[t]:e||"No se pudo completar la operación."}const Vn=No!=null&&No.endsWith("/")?No.slice(0,-1):No;function X1(t){if(!Vn)return"";const e=t.startsWith("/")?t:`/${t}`,n=W4(e,U4);return`${Vn}${n}`}const q4="protonlab_auth",H4="mock-token-dev";let gi=null;const K4=3e4;let Dl=0;const rw=6e4;function G4(t){return{"x-request-id":t.get("x-request-id")||"","x-vercel-id":t.get("x-vercel-id")||"","access-control-allow-origin":t.get("access-control-allow-origin")||""}}function Q4(t,e){const n=t.get("x-request-id")||t.get("x-vercel-id")||void 0;if(n)return n;if(e&&typeof e=="object"&&e!==null){const r=e.details;if(r&&typeof r=="object"&&r!==null){const i=r.requestId;if(typeof i=="string")return i}}}function Y4(t){return!t||typeof t!="object"?!1:"success"in t}function J4(){try{const t=window.localStorage.getItem(q4);if(!t)return null;const e=JSON.parse(t);return typeof e.token=="string"&&e.token!==H4?e.token:null}catch{return null}}async function X4(){return ew.currentUser?ew.currentUser.getIdToken():J4()}async function Z4(){if(gi&&Date.now()-gi.timestamp<K4)return gi.status;const t=new AbortController,e=window.setTimeout(()=>t.abort(),5e3);try{if(!Vn)return gi={status:!1,timestamp:Date.now()},!1;const n=await fetch(X1("/api/health"),{method:"GET",signal:t.signal});if(n.ok)return xe.info("Backend connected successfully",{url:Vn,status:n.status,requestId:n.headers.get("x-request-id")||n.headers.get("x-vercel-id")||void 0}),console.log("%c✓ BACKEND CONECTADO","color: #10b981; font-weight: bold; font-size: 14px; background: #f0fdf4; padding: 8px 12px; border-radius: 4px;",`
  URL: ${Vn}
  Status: ${n.status} ${n.statusText}`),gi={status:!0,timestamp:Date.now()},!0;const r=Date.now();return r-Dl>rw&&(xe.warn("Backend responded with error",{url:Vn,status:n.status,requestId:n.headers.get("x-request-id")||n.headers.get("x-vercel-id")||void 0}),console.warn("%c⚠ BACKEND RESPONDE CON ERROR","color: #f59e0b; font-weight: bold; font-size: 14px; background: #fffbeb; padding: 8px 12px; border-radius: 4px;",`
  URL: ${Vn}
  Status: ${n.status} ${n.statusText}`),Dl=r),gi={status:!1,timestamp:Date.now()},!1}catch(n){const r=Date.now();return r-Dl>rw&&(xe.error("Backend connection failed",{url:Vn,error:n instanceof Error?n.message:"Connection failed"}),console.error("%c✗ BACKEND NO DISPONIBLE","color: #ef4444; font-weight: bold; font-size: 14px; background: #fef2f2; padding: 8px 12px; border-radius: 4px;",`
  URL: ${Vn}
  Error: ${n instanceof Error?n.message:"Connection failed"}`),Dl=r),gi={status:!1,timestamp:Date.now()},!1}finally{window.clearTimeout(e)}}async function pr(t,{method:e="GET",body:n,headers:r}={}){var u;const i=performance.now(),s=X1(t);if(!s)throw new Sr({message:"Backend no configurado. Define VITE_PROTONLAB_API_BASE_URL, VITE_API_URL o VITE_API_BASE_URL.",endpoint:t,url:"",code:"BACKEND_NOT_CONFIGURED",status:0});const o=new AbortController,l=window.setTimeout(()=>o.abort(),F4);es.request(t,e);try{const c=await X4(),d={...c?{Authorization:`Bearer ${c}`}:{},...r};n!==void 0&&!d["Content-Type"]&&(d["Content-Type"]="application/json");const p=await fetch(s,{method:e,headers:d,body:n!==void 0?JSON.stringify(n):void 0,signal:o.signal}),g=performance.now()-i,S=(p.headers.get("content-type")||"").includes("application/json")?await p.json():await p.text(),P=Q4(p.headers,S),b=G4(p.headers);if(!p.ok){const I=S&&typeof S=="object"&&"code"in S?String(S.code||""):void 0,y=S&&typeof S=="object"&&"error"in S?String(S.error||`HTTP ${p.status}`):`HTTP ${p.status}`,E=ud(I,y),N=new Sr({message:P?`${E} (requestId: ${P})`:E,endpoint:t,url:s,code:I,status:p.status,requestId:P,details:S&&typeof S=="object"&&"details"in S?S.details:void 0,responseHeaders:b});throw xe.error("HTTP request failed",{url:s,endpoint:t,method:e,status:p.status,code:I,requestId:P,message:E}),es.error(t,e,p.status,E),N}if(Y4(S)){if(!S.success){const I=ud(S.code,S.error||"Request failed"),y=((u=S.details)==null?void 0:u.requestId)||P,E=new Sr({message:y?`${I} (requestId: ${y})`:I,endpoint:t,url:s,code:S.code,status:p.status,requestId:y,details:S.details,responseHeaders:b});throw xe.error("API envelope marked as failure",{url:s,endpoint:t,method:e,status:p.status,code:S.code,requestId:y,message:I}),es.error(t,e,p.status,I),E}return xe.debug("HTTP request success",{url:s,endpoint:t,method:e,status:p.status,duration:Math.round(g),requestId:P}),es.success(t,e,g),S.data}return xe.debug("HTTP request success (raw response)",{url:s,endpoint:t,method:e,status:p.status,duration:Math.round(g),requestId:P}),es.success(t,e,g),S}catch(c){if(c instanceof Sr)throw c;const d=c instanceof Error?c.message:"Unknown error",g=d.includes("Failed to fetch")||d.includes("NetworkError")||d.includes("aborted")?"NETWORK_ERROR":"REQUEST_FAILED",w=ud(g,d);throw xe.error("HTTP request failed",{url:s,endpoint:t,method:e,code:g,error:w}),es.error(t,e,0,w),new Sr({message:w,endpoint:t,url:s,code:g,status:0})}finally{window.clearTimeout(l)}}const Z1=R.createContext(void 0),Ol="protonlab_auth";function eM({children:t}){const[e,n]=R.useState(null),[r,i]=R.useState(null),[s,o]=R.useState(!0);R.useEffect(()=>{{const c=localStorage.getItem(Ol);if(c)try{const d=JSON.parse(c);n(d.user??null),i(d.token??null)}catch{localStorage.removeItem(Ol)}return o(!1),()=>{}}},[]);const l=(c,d)=>{n(c),i(d),localStorage.setItem(Ol,JSON.stringify({user:c,token:d}))},u=async()=>{try{}catch(c){console.error("Error signing out:",c)}n(null),i(null),localStorage.removeItem(Ol)};return f.jsx(Z1.Provider,{value:{user:e,token:r,isAuthenticated:!!e,isLoading:s,login:l,logout:u},children:t})}function eS(){const t=R.useContext(Z1);if(!t)throw new Error("useAuth debe usarse dentro de AuthProvider");return t}const tS=R.createContext(void 0);function tM({children:t}){const[e,n]=R.useState(()=>{const i=localStorage.getItem("theme");return i==="light"||i==="dark"?i:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});R.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return f.jsx(tS.Provider,{value:{theme:e,toggleTheme:r},children:t})}function nM(){const t=R.useContext(tS);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}var nS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iw=$n.createContext&&$n.createContext(nS),rM=["attr","size","title"];function iM(t,e){if(t==null)return{};var n,r,i=sM(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function sM(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function nc(){return nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nc.apply(null,arguments)}function sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function rc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sw(Object(n),!0).forEach(function(r){oM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oM(t,e,n){return(e=aM(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function aM(t){var e=lM(t,"string");return typeof e=="symbol"?e:e+""}function lM(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rS(t){return t&&t.map((e,n)=>$n.createElement(e.tag,rc({key:n},e.attr),rS(e.child)))}function K(t){return e=>$n.createElement(uM,nc({attr:rc({},t.attr)},e),rS(t.child))}function uM(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=iM(t,rM),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),$n.createElement("svg",nc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:rc(rc({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&$n.createElement("title",null,s),t.children)};return iw!==void 0?$n.createElement(iw.Consumer,null,n=>e(n)):e(nS)}function cn(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(t)}function cM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(t)}function hM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]},{tag:"path",attr:{d:"M16.72 11.06A10.94 10.94 0 0 1 19 12.55"},child:[]},{tag:"path",attr:{d:"M5 12.55a10.94 10.94 0 0 1 5.17-2.39"},child:[]},{tag:"path",attr:{d:"M10.71 5.05A16 16 0 0 1 22.58 9"},child:[]},{tag:"path",attr:{d:"M1.42 9a15.91 15.91 0 0 1 4.7-2.88"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(t)}function ow(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function dM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"},child:[]}]})(t)}function HF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3",width:"15",height:"13"},child:[]},{tag:"polygon",attr:{points:"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{cx:"5.5",cy:"18.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"18.5",r:"2.5"},child:[]}]})(t)}function Ns(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(t)}function KF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(t)}function fM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(t)}function pM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 4 15 12 5 20 5 4"},child:[]},{tag:"line",attr:{x1:"19",y1:"5",x2:"19",y2:"19"},child:[]}]})(t)}function Ff(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(t)}function GF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(t)}function mM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(t)}function iS(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(t)}function QF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function YF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18.36 6.64a9 9 0 1 1-12.73 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"12"},child:[]}]})(t)}function gM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(t)}function yM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(t)}function JF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(t)}function _M(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"5 9 2 12 5 15"},child:[]},{tag:"polyline",attr:{points:"9 5 12 2 15 5"},child:[]},{tag:"polyline",attr:{points:"15 19 12 22 9 19"},child:[]},{tag:"polyline",attr:{points:"19 9 22 12 19 15"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"22"},child:[]}]})(t)}function vM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(t)}function wM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 14 10 14 10 20"},child:[]},{tag:"polyline",attr:{points:"20 10 14 10 14 4"},child:[]},{tag:"line",attr:{x1:"14",y1:"10",x2:"21",y2:"3"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(t)}function XF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(t)}function EM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(t)}function TM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(t)}function aw(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(t)}function IM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(t)}function ZF(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(t)}function eU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(t)}function tU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(t)}function SM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(t)}function kM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(t)}function nU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(t)}function AM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(t)}function cd(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(t)}function rU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(t)}function iU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(t)}function CM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(t)}function sU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function RM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(t)}function qm(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(t)}function xM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"1",y1:"10",x2:"23",y2:"10"},child:[]}]})(t)}function oU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(t)}function aU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(t)}function lU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(t)}function uU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]}]})(t)}function Uf(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(t)}function PM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(t)}function lw(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(t)}function NM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(t)}function bM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(t)}function LM(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(t)}function sS(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(t)}function cU(t){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(t)}function DM(){const{theme:t,toggleTheme:e}=nM();return f.jsx("button",{className:"theme-toggle",onClick:e,"aria-label":`Switch to ${t==="light"?"dark":"light"} mode`,title:`Switch to ${t==="light"?"dark":"light"} mode`,children:f.jsx("div",{className:"theme-toggle__track",children:f.jsx("div",{className:"theme-toggle__thumb",children:t==="light"?f.jsx(fM,{className:"theme-toggle__icon"}):f.jsx(vM,{className:"theme-toggle__icon"})})})})}const oS=R.createContext(void 0),uw="protonlab_notifications",OM=50;function VM({children:t}){const[e,n]=R.useState(()=>{try{const c=localStorage.getItem(uw);return c?JSON.parse(c):[]}catch{return[]}});R.useEffect(()=>{try{localStorage.setItem(uw,JSON.stringify(e))}catch(c){console.error("Error guardando notificaciones:",c)}},[e]);const r=c=>{const d={...c,id:`notif-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,timestamp:Date.now(),read:!1};n(p=>[d,...p].slice(0,OM))},i=c=>{n(d=>d.map(p=>p.id===c?{...p,read:!0}:p))},s=()=>{n(c=>c.map(d=>({...d,read:!0})))},o=c=>{n(d=>d.filter(p=>p.id!==c))},l=()=>{n([])},u=e.filter(c=>!c.read).length;return f.jsx(oS.Provider,{value:{notifications:e,unreadCount:u,addNotification:r,markAsRead:i,markAllAsRead:s,removeNotification:o,clearAll:l},children:t})}function MM(){const t=R.useContext(oS);if(!t)throw new Error("useNotifications debe usarse dentro de NotificationProvider");return t}function jM(){const{notifications:t,unreadCount:e,markAsRead:n,markAllAsRead:r,removeNotification:i,clearAll:s}=MM(),[o,l]=R.useState(!1),u=p=>{switch(p){case"success":return f.jsx(PM,{size:20});case"warning":return f.jsx(LM,{size:20});case"error":return f.jsx(sS,{size:20});default:return f.jsx(kM,{size:20})}},c=p=>{const w=Date.now()-p,S=Math.floor(w/6e4),P=Math.floor(w/36e5),b=Math.floor(w/864e5);return S<1?"Ahora":S<60?`Hace ${S}min`:P<24?`Hace ${P}h`:`Hace ${b}d`},d=p=>{n(p)};return f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"notification-button","data-tour":"notifications-button",onClick:()=>l(!o),title:"Notificaciones",children:[f.jsx(lw,{size:24}),e>0&&f.jsx("span",{className:"notification-button__badge",children:e>9?"9+":e})]}),o&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"notification-overlay",onClick:()=>l(!1)}),f.jsxs("div",{className:"notification-panel",children:[f.jsxs("div",{className:"notification-panel__header",children:[f.jsxs("h3",{children:["Notificaciones",e>0&&f.jsxs("span",{className:"unread-badge",children:[e," nuevas"]})]}),f.jsxs("div",{className:"notification-panel__actions",children:[t.length>0&&f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:r,title:"Marcar todas como leídas",className:"action-btn",children:f.jsx(Uf,{size:18})}),f.jsx("button",{onClick:s,title:"Limpiar todas",className:"action-btn",children:f.jsx(Ns,{size:18})})]}),f.jsx("button",{onClick:()=>l(!1),title:"Cerrar",className:"action-btn",children:f.jsx(cn,{size:20})})]})]}),f.jsx("div",{className:"notification-panel__list",children:t.length===0?f.jsxs("div",{className:"notification-empty",children:[f.jsx(lw,{size:48}),f.jsx("p",{children:"No tienes notificaciones"})]}):t.map(p=>f.jsxs("div",{className:`notification-item ${p.type} ${p.read?"read":"unread"}`,onClick:()=>d(p.id),children:[f.jsx("div",{className:"notification-item__icon",children:u(p.type)}),f.jsxs("div",{className:"notification-item__content",children:[f.jsx("h4",{children:p.title}),f.jsx("p",{children:p.message}),p.actionLabel&&p.actionUrl&&f.jsx("a",{href:p.actionUrl,className:"notification-item__action",children:p.actionLabel}),f.jsx("span",{className:"notification-item__time",children:c(p.timestamp)})]}),f.jsx("button",{className:"notification-item__remove",onClick:g=>{g.stopPropagation(),i(p.id)},title:"Eliminar",children:f.jsx(cn,{size:16})})]},p.id))})]})]})]})}function FM(){const{term:t,setTerm:e}=BR(),{isAuthenticated:n,user:r}=eS(),i=Ic(),s=({isActive:l})=>l?"active":void 0,o=l=>{l.preventDefault();const u=t?`?q=${encodeURIComponent(t)}`:"";i(`${ue.products}${u}`),console.info("Buscar productos con término:",t)};return f.jsxs("header",{className:"navbar",children:[f.jsx("div",{className:"navbar__brand",role:"banner",children:f.jsxs(Et,{to:ue.home,className:"navbar__logo","aria-label":"Protonlab",children:[f.jsx("span",{className:"navbar__wordmark",children:"Protonlab"}),f.jsx("span",{className:"navbar__wordsub",children:"Hardware and robotics"})]})}),f.jsxs("nav",{className:"navbar__nav","aria-label":"Menú principal",children:[f.jsx(zt,{to:ue.home,className:s,children:"Inicio"}),f.jsx(zt,{to:ue.about,className:s,children:"Nosotros"}),f.jsx(zt,{to:ue.products,className:s,children:"Productos"}),f.jsx(zt,{to:ue.support,className:s,children:"Soporte"}),f.jsx(zt,{to:"/blog",className:s,children:"Blog"}),f.jsx(zt,{to:ue.contact,className:s,children:"Contacto"}),n?f.jsx(f.Fragment,{children:(r==null?void 0:r.role)==="root"?f.jsx(zt,{to:ue.rootDashboard,className:s,children:"🔐 Root"}):(r==null?void 0:r.role)==="admin"?f.jsx(zt,{to:ue.adminDashboard,className:s,children:"👑 Admin"}):(r==null?void 0:r.role)==="vendedor"?f.jsx(zt,{to:ue.vendorDashboard,className:s,children:"💼 Vendedor"}):(r==null?void 0:r.role)==="bodega"?f.jsx(zt,{to:ue.warehouseDashboard,className:s,children:"📦 Bodega"}):f.jsx(zt,{to:ue.account,className:s,children:"Mi Cuenta"})}):f.jsx(zt,{to:ue.login,className:s,children:"Iniciar Sesión"})]}),f.jsxs("div",{className:"navbar__actions",children:[f.jsxs("form",{className:"navbar__search","data-tour":"search-bar",onSubmit:o,children:[f.jsx("label",{className:"sr-only",htmlFor:"navbar-search",children:"Buscar productos"}),f.jsx("input",{id:"navbar-search",type:"search",value:t,placeholder:"Buscar productos...",onChange:l=>e(l.target.value)}),f.jsx("button",{type:"submit",children:"Buscar"})]}),f.jsx(jM,{}),f.jsx(DM,{})]})]})}let UM={data:""},zM=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||UM},BM=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$M=/\/\*[^]*?\*\/|  +/g,cw=/\n+/g,kr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?kr(o,s):s+"{"+kr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=kr(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=kr.p?kr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Dn={},aS=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+aS(t[n]);return e}return t},WM=(t,e,n,r,i)=>{let s=aS(t),o=Dn[s]||(Dn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!Dn[o]){let u=s!==t?t:(c=>{let d,p,g=[{}];for(;d=BM.exec(c.replace($M,""));)d[4]?g.shift():d[3]?(p=d[3].replace(cw," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][d[1]]=d[2].replace(cw," ").trim();return g[0]})(t);Dn[o]=kr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Dn.g?Dn.g:null;return n&&(Dn.g=Dn[o]),((u,c,d,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(Dn[o],e,r,l),o},qM=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":kr(l,""):l===!1?"":l}return r+i+(o??"")},"");function Yc(t){let e=this||{},n=t.call?t(e.p):t;return WM(n.unshift?n.raw?qM(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,zM(e.target),e.g,e.o,e.k)}let lS,zf,Bf;Yc.bind({g:1});let tr=Yc.bind({k:1});function HM(t,e,n,r){kr.p=e,lS=t,zf=n,Bf=r}function ai(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:zf&&zf()},l),n.o=/ *go\d+/.test(u),l.className=Yc.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),Bf&&c[0]&&Bf(l),lS(c,l)}return i}}var KM=t=>typeof t=="function",ic=(t,e)=>KM(t)?t(e):t,GM=(()=>{let t=0;return()=>(++t).toString()})(),uS=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),QM=20,Hm="default",cS=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return cS(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ou=[],hS={toasts:[],pausedAt:void 0,settings:{toastLimit:QM}},Tn={},dS=(t,e=Hm)=>{Tn[e]=cS(Tn[e]||hS,t),ou.forEach(([n,r])=>{n===e&&r(Tn[e])})},fS=t=>Object.keys(Tn).forEach(e=>dS(t,e)),YM=t=>Object.keys(Tn).find(e=>Tn[e].toasts.some(n=>n.id===t)),Jc=(t=Hm)=>e=>{dS(e,t)},JM={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},XM=(t={},e=Hm)=>{let[n,r]=R.useState(Tn[e]||hS),i=R.useRef(Tn[e]);R.useEffect(()=>(i.current!==Tn[e]&&r(Tn[e]),ou.push([e,r]),()=>{let o=ou.findIndex(([l])=>l===e);o>-1&&ou.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||JM[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},ZM=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||GM()}),Qa=t=>(e,n)=>{let r=ZM(e,t,n);return Jc(r.toasterId||YM(r.id))({type:2,toast:r}),r.id},we=(t,e)=>Qa("blank")(t,e);we.error=Qa("error");we.success=Qa("success");we.loading=Qa("loading");we.custom=Qa("custom");we.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Jc(e)(n):fS(n)};we.dismissAll=t=>we.dismiss(void 0,t);we.remove=(t,e)=>{let n={type:4,toastId:t};e?Jc(e)(n):fS(n)};we.removeAll=t=>we.remove(void 0,t);we.promise=(t,e,n)=>{let r=we.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?ic(e.success,i):void 0;return s?we.success(s,{id:r,...n,...n==null?void 0:n.success}):we.dismiss(r),i}).catch(i=>{let s=e.error?ic(e.error,i):void 0;s?we.error(s,{id:r,...n,...n==null?void 0:n.error}):we.dismiss(r)}),t};var ej=1e3,tj=(t,e="default")=>{let{toasts:n,pausedAt:r}=XM(t,e),i=R.useRef(new Map).current,s=R.useCallback((p,g=ej)=>{if(i.has(p))return;let w=setTimeout(()=>{i.delete(p),o({type:4,toastId:p})},g);i.set(p,w)},[]);R.useEffect(()=>{if(r)return;let p=Date.now(),g=n.map(w=>{if(w.duration===1/0)return;let S=(w.duration||0)+w.pauseDuration-(p-w.createdAt);if(S<0){w.visible&&we.dismiss(w.id);return}return setTimeout(()=>we.dismiss(w.id,e),S)});return()=>{g.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=R.useCallback(Jc(e),[e]),l=R.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=R.useCallback((p,g)=>{o({type:1,toast:{id:p,height:g}})},[o]),c=R.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=R.useCallback((p,g)=>{let{reverseOrder:w=!1,gutter:S=8,defaultPosition:P}=g||{},b=n.filter(E=>(E.position||P)===(p.position||P)&&E.height),I=b.findIndex(E=>E.id===p.id),y=b.filter((E,N)=>N<I&&E.visible).length;return b.filter(E=>E.visible).slice(...w?[y+1]:[0,y]).reduce((E,N)=>E+(N.height||0)+S,0)},[n]);return R.useEffect(()=>{n.forEach(p=>{if(p.dismissed)s(p.id,p.removeDelay);else{let g=i.get(p.id);g&&(clearTimeout(g),i.delete(p.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},nj=tr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,rj=tr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ij=tr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,sj=ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${rj} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ij} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,oj=tr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,aj=ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${oj} 1s linear infinite;
`,lj=tr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,uj=tr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,cj=ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lj} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${uj} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,hj=ai("div")`
  position: absolute;
`,dj=ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fj=tr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,pj=ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fj} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,mj=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?R.createElement(pj,null,e):e:n==="blank"?null:R.createElement(dj,null,R.createElement(aj,{...r}),n!=="loading"&&R.createElement(hj,null,n==="error"?R.createElement(sj,{...r}):R.createElement(cj,{...r})))},gj=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,yj=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,_j="0%{opacity:0;} 100%{opacity:1;}",vj="0%{opacity:1;} 100%{opacity:0;}",wj=ai("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ej=ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Tj=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=uS()?[_j,vj]:[gj(n),yj(n)];return{animation:e?`${tr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${tr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ij=R.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?Tj(t.position||e||"top-center",t.visible):{opacity:0},s=R.createElement(mj,{toast:t}),o=R.createElement(Ej,{...t.ariaProps},ic(t.message,t));return R.createElement(wj,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):R.createElement(R.Fragment,null,s,o))});HM(R.createElement);var Sj=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=R.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return R.createElement("div",{ref:s,className:e,style:n},i)},kj=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:uS()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},Aj=Yc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Vl=16,Cj=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=tj(n,s);return R.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Vl,left:Vl,right:Vl,bottom:Vl,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let p=d.position||e,g=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),w=kj(p,g);return R.createElement(Sj,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Aj:"",style:w},d.type==="custom"?ic(d.message,d):i?i(d):R.createElement(Ij,{toast:d,position:p}))}))};const he={success:t=>{we.success(t,{duration:4e3,position:"top-right",style:{background:"#10b981",color:"#fff",padding:"16px",borderRadius:"8px"},iconTheme:{primary:"#fff",secondary:"#10b981"}})},error:t=>{we.error(t,{duration:5e3,position:"top-right",style:{background:"#ef4444",color:"#fff",padding:"16px",borderRadius:"8px"},iconTheme:{primary:"#fff",secondary:"#ef4444"}})},info:t=>{we(t,{duration:4e3,position:"top-right",icon:"ℹ️",style:{background:"#3b82f6",color:"#fff",padding:"16px",borderRadius:"8px"}})},loading:t=>we.loading(t,{position:"top-right",style:{background:"#6366f1",color:"#fff",padding:"16px",borderRadius:"8px"}}),promise:(t,e)=>we.promise(t,{loading:e.loading,success:e.success,error:e.error},{position:"top-right",style:{padding:"16px",borderRadius:"8px"}}),dismiss:t=>{we.dismiss(t)}};function Rj(){return f.jsx(Cj,{position:"top-right",reverseOrder:!1,gutter:8,toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"8px",padding:"16px"}}})}const xj="/assets/logo-protonlab-CBFEWVV6.png";function Pj(){const[t,e]=R.useState(""),[n,r]=R.useState(!1),i=async o=>{if(o.preventDefault(),!!t){r(!0);try{await new Promise(l=>setTimeout(l,1e3)),he.success("¡Suscripción exitosa! Revisa tu email."),e("")}catch{he.error("Error al suscribirse. Intenta nuevamente.")}finally{r(!1)}}},s=new Date().getFullYear();return f.jsx("footer",{className:"rich-footer",children:f.jsxs("div",{className:"rich-footer__container",children:[f.jsxs("div",{className:"rich-footer__newsletter",children:[f.jsx("h3",{children:"Suscríbete a nuestro Newsletter"}),f.jsx("p",{children:"Recibe las últimas novedades, ofertas y contenido exclusivo"}),f.jsxs("form",{onSubmit:i,className:"newsletter-form",children:[f.jsxs("div",{className:"newsletter-form__input-group",children:[f.jsx(aw,{className:"newsletter-form__icon"}),f.jsx("input",{type:"email",value:t,onChange:o=>e(o.target.value),placeholder:"Tu email",required:!0,disabled:n})]}),f.jsxs("button",{type:"submit",disabled:n,children:[f.jsx(iS,{}),n?"Enviando...":"Suscribirse"]})]})]}),f.jsxs("div",{className:"rich-footer__content",children:[f.jsxs("div",{className:"rich-footer__section",children:[f.jsx("img",{src:xj,alt:"Protonlab",className:"rich-footer__logo"}),f.jsx("p",{className:"rich-footer__description",children:"Infraestructura de IA, robótica, electrónica avanzada y soporte técnico especializado. Soluciones integrales para operación tecnológica crítica y continuidad operacional."}),f.jsxs("div",{className:"rich-footer__social",children:[f.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(CM,{})}),f.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(SM,{})}),f.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(IM,{})}),f.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:f.jsx(dM,{})})]})]}),f.jsxs("div",{className:"rich-footer__section",children:[f.jsx("h4",{children:"Enlaces Rápidos"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(Et,{to:"/",children:"Inicio"})}),f.jsx("li",{children:f.jsx(Et,{to:"/productos",children:"Productos"})}),f.jsx("li",{children:f.jsx(Et,{to:"/nosotros",children:"Nosotros"})}),f.jsx("li",{children:f.jsx(Et,{to:"/soporte",children:"Soporte"})}),f.jsx("li",{children:f.jsx(Et,{to:"/blog",children:"Blog"})}),f.jsx("li",{children:f.jsx(Et,{to:"/contacto",children:"Contacto"})})]})]}),f.jsxs("div",{className:"rich-footer__section",children:[f.jsx("h4",{children:"Categorías"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(Et,{to:"/productos?categoryId=cat-equipos",children:"Robótica"})}),f.jsx("li",{children:f.jsx(Et,{to:"/productos?categoryId=cat-reactivos",children:"Hardware"})}),f.jsx("li",{children:f.jsx(Et,{to:"/productos?categoryId=cat-insumos",children:"Nanobots"})})]})]}),f.jsxs("div",{className:"rich-footer__section",children:[f.jsx("h4",{children:"Contacto"}),f.jsxs("ul",{className:"rich-footer__contact",children:[f.jsxs("li",{children:[f.jsx(TM,{}),f.jsx("span",{children:"Santiago, Chile"})]}),f.jsxs("li",{children:[f.jsx(yM,{}),f.jsx("a",{href:"tel:+56912345678",children:"+56 9 1234 5678"})]}),f.jsxs("li",{children:[f.jsx(aw,{}),f.jsx("a",{href:"mailto:contacto@protonlab.cl",children:"contacto@protonlab.cl"})]})]}),f.jsxs("div",{className:"rich-footer__hours",children:[f.jsx("strong",{children:"Horario de Atención:"}),f.jsx("p",{children:"Lunes a Viernes: 8:30 AM - 6:00 PM"})]})]})]}),f.jsx("div",{className:"rich-footer__bottom",children:f.jsxs("div",{children:[f.jsxs("div",{className:"rich-footer__legal",children:[f.jsxs("p",{children:["© ",s," Protonlab. Todos los derechos reservados."]}),f.jsxs("div",{className:"rich-footer__legal-links",children:[f.jsx(Et,{to:"/privacidad",children:"Política de Privacidad"}),f.jsx("span",{children:"•"}),f.jsx(Et,{to:"/terminos",children:"Términos y Condiciones"}),f.jsx("span",{children:"•"}),f.jsx(Et,{to:"/cookies",children:"Cookies"})]})]}),f.jsxs("div",{className:"rich-footer__payments",children:[f.jsx("span",{children:"Representaciones:"}),f.jsx("div",{className:"rich-footer__payment-icons",children:f.jsx("span",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.85)"},children:"Nexus • QuantumTech • NeoStorage"})})]})]})})]})})}function Nj(){const{pathname:t}=Ln(),e=t.startsWith("/root")||t.startsWith("/admin")||t.startsWith("/vendedor")||t.startsWith("/bodega");return f.jsxs("div",{className:"app-shell",children:[f.jsx(FM,{}),f.jsx("main",{className:`app-content ${e?"app-content--wide":""}`,children:f.jsx(yR,{})}),f.jsx(Pj,{})]})}function pS(){return f.jsx("div",{className:"loader",children:"Cargando..."})}function yi({children:t}){const{isAuthenticated:e,isLoading:n}=eS();return n?f.jsx("div",{style:{padding:"3rem",textAlign:"center"},children:f.jsx(pS,{})}):e?f.jsx(f.Fragment,{children:t}):f.jsx(gR,{to:"/login",replace:!0})}const bj=R.lazy(()=>nt(()=>import("./HomePage-DkAm5nwU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),Lj=R.lazy(()=>nt(()=>import("./AboutPage-r7BbSh7P.js"),__vite__mapDeps([8,2,3,9]))),Dj=R.lazy(()=>nt(()=>import("./ProductsPage-BXUqS4wD.js"),__vite__mapDeps([10,1,11,2,3,4,12,13,14,15]))),Oj=R.lazy(()=>nt(()=>import("./ProductDetailPage-23_Gf6Ib.js"),__vite__mapDeps([16,1,2,3,4,12,13,14]))),Vj=R.lazy(()=>nt(()=>import("./SupportPage-euGFFd2e.js"),__vite__mapDeps([17,11,2,3,13,1,18,6,19]))),Mj=R.lazy(()=>nt(()=>import("./ContactPage-CF1jguib.js"),__vite__mapDeps([20,13,1,2,3]))),jj=R.lazy(()=>nt(()=>import("./CrimePreventionModelPage-u2iMlD3a.js"),__vite__mapDeps([21,2,3]))),Fj=R.lazy(()=>nt(()=>import("./LoginPage-B70RufWL.js"),__vite__mapDeps([22,23,14,1,2,3,13])).then(t=>({default:t.LoginPage}))),hw=R.lazy(()=>nt(()=>import("./PartnerPortalPage-Du5-fQ2S.js"),__vite__mapDeps([24,23,14,25,2,3])).then(t=>({default:t.PartnerPortalPage}))),Uj=R.lazy(()=>nt(()=>import("./OrderDetailPage-CVqOVqf3.js"),__vite__mapDeps([26,25,14,2,3,27])).then(t=>({default:t.OrderDetailPage}))),zj=R.lazy(()=>nt(()=>import("./AdminDashboard-Btpy1m8y.js"),__vite__mapDeps([28,29,30]))),Bj=R.lazy(()=>nt(()=>import("./RootDashboardPage-BvJZL9-e.js"),__vite__mapDeps([31,23,14,2,3,29,30,32])).then(t=>({default:t.RootDashboardPage}))),$j=R.lazy(()=>nt(()=>import("./VendorDashboardPage-CVOPsG2d.js"),__vite__mapDeps([33,23,14,2,3,34])).then(t=>({default:t.VendorDashboardPage}))),Wj=R.lazy(()=>nt(()=>import("./WarehouseDashboardPage-DiSmnkzb.js"),__vite__mapDeps([35,23,14,36]))),qj=R.lazy(()=>nt(()=>import("./NotFoundPage-kF7mpTUk.js"),__vite__mapDeps([37,2,3,38]))),Hj=R.lazy(()=>nt(()=>import("./BlogPage-BB_6sffB.js"),__vite__mapDeps([39,40,5,18,6,2,3,41])).then(t=>({default:t.BlogPage}))),Kj=R.lazy(()=>nt(()=>import("./BlogPostPage-YrYcXrAx.js"),__vite__mapDeps([42,40,5,18,6,2,3,43])).then(t=>({default:t.BlogPostPage}))),Gj=()=>f.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"var(--color-bg-primary)"},children:f.jsx(pS,{})});function Qj(){return f.jsx(R.Suspense,{fallback:f.jsx(Gj,{}),children:f.jsxs(vR,{children:[f.jsx(Oe,{path:ue.login,element:f.jsx(Fj,{})}),f.jsxs(Oe,{element:f.jsx(Nj,{}),children:[f.jsx(Oe,{path:ue.home,element:f.jsx(bj,{})}),f.jsx(Oe,{path:ue.about,element:f.jsx(Lj,{})}),f.jsx(Oe,{path:ue.products,element:f.jsx(Dj,{})}),f.jsx(Oe,{path:ue.productDetail,element:f.jsx(Oj,{})}),f.jsx(Oe,{path:ue.support,element:f.jsx(Vj,{})}),f.jsx(Oe,{path:ue.contact,element:f.jsx(Mj,{})}),f.jsx(Oe,{path:ue.crimePrevention,element:f.jsx(jj,{})}),f.jsx(Oe,{path:ue.partnerPortal,element:f.jsx(yi,{children:f.jsx(hw,{})})}),f.jsx(Oe,{path:ue.account,element:f.jsx(yi,{children:f.jsx(hw,{})})}),f.jsx(Oe,{path:"/portal/orders/:orderId",element:f.jsx(yi,{children:f.jsx(Uj,{})})}),f.jsx(Oe,{path:ue.adminDashboard,element:f.jsx(yi,{children:f.jsx(zj,{})})}),f.jsx(Oe,{path:ue.rootDashboard,element:f.jsx(yi,{children:f.jsx(Bj,{})})}),f.jsx(Oe,{path:ue.vendorDashboard,element:f.jsx(yi,{children:f.jsx($j,{})})}),f.jsx(Oe,{path:ue.warehouseDashboard,element:f.jsx(yi,{children:f.jsx(Wj,{})})}),f.jsx(Oe,{path:"/blog",element:f.jsx(Hj,{})}),f.jsx(Oe,{path:"/blog/:slug",element:f.jsx(Kj,{})}),f.jsx(Oe,{path:ue.notFound,element:f.jsx(qj,{})})]})]})})}function Yj(){const{pathname:t}=Ln();R.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t])}function Jj(t){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function Xj({phoneNumber:t,message:e="Hola! Tengo una consulta",position:n="bottom-right"}){const[r,i]=R.useState(!1),s=()=>{const o=encodeURIComponent(e),l=`https://wa.me/${t}?text=${o}`;window.open(l,"_blank")};return f.jsxs("div",{className:`whatsapp-button whatsapp-button--${n}`,children:[r&&f.jsxs("div",{className:"whatsapp-button__tooltip",children:[f.jsx("button",{className:"whatsapp-button__tooltip-close",onClick:()=>i(!1),"aria-label":"Close",children:f.jsx(cn,{})}),f.jsx("p",{className:"whatsapp-button__tooltip-text",children:"¿Necesitas ayuda? Chatea con nosotros en WhatsApp"})]}),f.jsx("button",{className:"whatsapp-button__btn",onClick:s,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),"aria-label":"Chat on WhatsApp",children:f.jsx(Jj,{className:"whatsapp-button__icon"})})]})}function Zj(){const[t,e]=R.useState(null),[n,r]=R.useState(!1);R.useEffect(()=>{const o=l=>{l.preventDefault(),e(l),sessionStorage.getItem("pwa-prompt-dismissed")||r(!0)};return window.addEventListener("beforeinstallprompt",o),()=>window.removeEventListener("beforeinstallprompt",o)},[]);const i=async()=>{if(!t)return;t.prompt();const{outcome:o}=await t.userChoice;o==="accepted"&&console.log("User accepted PWA install"),e(null),r(!1)},s=()=>{r(!1),sessionStorage.setItem("pwa-prompt-dismissed","true")};return!n||!t?null:f.jsx("div",{className:"pwa-prompt",children:f.jsxs("div",{className:"pwa-prompt__content",children:[f.jsx("div",{className:"pwa-prompt__icon",children:f.jsx(qm,{})}),f.jsxs("div",{className:"pwa-prompt__text",children:[f.jsx("h3",{children:"Instalar Protonlab"}),f.jsx("p",{children:"Accede más rápido desde tu dispositivo"})]}),f.jsxs("div",{className:"pwa-prompt__actions",children:[f.jsx("button",{onClick:i,className:"pwa-prompt__install",children:"Instalar"}),f.jsx("button",{onClick:s,className:"pwa-prompt__dismiss",children:f.jsx(cn,{})})]})]})})}const mS=R.createContext(void 0),dw="protonlab_wishlists",hd="default";function eF({children:t}){const[e,n]=R.useState(()=>{try{const y=localStorage.getItem(dw);if(y)return JSON.parse(y)}catch(y){console.error("Error loading wishlists:",y)}return[{id:hd,name:"Mi Lista de Deseos",items:[],createdAt:Date.now(),isDefault:!0}]}),[r,i]=R.useState(hd),s=e.find(y=>y.id===r),o=y=>{try{localStorage.setItem(dw,JSON.stringify(y)),n(y)}catch(E){console.error("Error saving wishlists:",E),he.error("Error al guardar la lista")}},l=(y,E)=>{const N={id:`list-${Date.now()}`,name:y,description:E,items:[],createdAt:Date.now()};o([...e,N]),i(N.id),he.success(`Lista "${y}" creada`)},u=y=>{const E=e.find(V=>V.id===y);if(E!=null&&E.isDefault){he.error("No puedes eliminar la lista por defecto");return}const N=e.filter(V=>V.id!==y);o(N),r===y&&i(hd),he.success(`Lista "${E==null?void 0:E.name}" eliminada`)},c=(y,E)=>{const N=e.map(V=>V.id===y?{...V,name:E}:V);o(N),he.success("Lista renombrada")},d=(y,E)=>{const N=E||r,V=e.map(j=>j.id===N?j.items.some(T=>T.id===y.id)?(he.error("El producto ya está en esta lista"),j):{...j,items:[...j.items,{...y,addedAt:Date.now()}]}:j);o(V),he.success("Agregado a favoritos ❤️")},p=(y,E)=>{const N=E||r,V=e.map(j=>j.id===N?{...j,items:j.items.filter(T=>T.id!==y)}:j);o(V),he.success("Eliminado de favoritos")},g=(y,E,N)=>{const V=e.find(_=>_.id===E),j=V==null?void 0:V.items.find(_=>_.id===y);if(!j)return;let T=e.map(_=>_.id===E?{..._,items:_.items.filter(k=>k.id!==y)}:_.id===N?_.items.some(k=>k.id===y)?(he.error("El producto ya está en la lista destino"),_):{..._,items:[..._.items,j]}:_);o(T),he.success("Producto movido")},w=(y,E)=>{if(E){const N=e.find(V=>V.id===E);return(N==null?void 0:N.items.some(V=>V.id===y))||!1}return e.some(N=>N.items.some(V=>V.id===y))},S=y=>{const E=y||r,N=e.map(V=>V.id===E?{...V,items:[]}:V);o(N),he.success("Lista vaciada")},P=y=>{const E=y||r,N=e.find(_=>_.id===E);if(!N)return;const V=[["Nombre","Marca","Categoría","Precio","Fecha Agregado"].join(","),...N.items.map(_=>[_.name,_.brand||"-",_.category||"-",_.price?`$${_.price}`:"-",_.addedAt?new Date(_.addedAt).toLocaleDateString("es-CL"):"-"].join(","))].join(`
`),j=new Blob([V],{type:"text/csv;charset=utf-8;"}),T=document.createElement("a");T.href=URL.createObjectURL(j),T.download=`wishlist-${N.name}-${Date.now()}.csv`,T.click(),he.success("Lista exportada")},b=y=>{const E=y||r,N=e.find(j=>j.id===E);if(!N)return"";const V=btoa(JSON.stringify({name:N.name,items:N.items.map(j=>j.id)}));return`${window.location.origin}/wishlist/shared/${V}`},I=()=>e.reduce((y,E)=>y+E.items.length,0);return f.jsx(mS.Provider,{value:{lists:e,currentListId:r,currentList:s,createList:l,deleteList:u,renameList:c,setCurrentList:i,addItem:d,removeItem:p,moveItem:g,isInWishlist:w,clearList:S,exportList:P,getShareableLink:b,getTotalItems:I},children:t})}function tF(){const t=R.useContext(mS);if(!t)throw new Error("useWishlist must be used within WishlistProvider");return t}const gS=R.createContext(void 0);function nF({children:t,maxProducts:e=4}){const[n,r]=R.useState(()=>{const c=localStorage.getItem("compare");return c?JSON.parse(c):[]}),i=c=>{localStorage.setItem("compare",JSON.stringify(c)),r(c)},s=c=>{if(n.length>=e||l(c.id))return!1;const d=[...n,c];return i(d),!0},o=c=>{const d=n.filter(p=>p.id!==c);i(d)},l=c=>n.some(d=>d.id===c),u=()=>{i([])};return f.jsx(gS.Provider,{value:{products:n,addProduct:s,removeProduct:o,isInCompare:l,clearCompare:u,maxProducts:e},children:t})}function rF(){const t=R.useContext(gS);if(!t)throw new Error("useCompare must be used within CompareProvider");return t}const yS=R.createContext(void 0),fw="protonlab_cart";function iF({children:t}){const[e,n]=R.useState([]);R.useEffect(()=>{const d=localStorage.getItem(fw);if(d)try{n(JSON.parse(d))}catch(p){console.error("Error loading cart:",p)}},[]),R.useEffect(()=>{localStorage.setItem(fw,JSON.stringify(e))},[e]);const r=(d,p=1)=>{n(g=>g.find(S=>S.id===d.id)?(he.info(`${d.name} actualizado en el carrito`),g.map(S=>S.id===d.id?{...S,quantity:S.quantity+p}:S)):(he.success(`${d.name} agregado al carrito`),[...g,{...d,quantity:p}]))},i=d=>{n(p=>{const g=p.find(w=>w.id===d);return g&&he.success(`${g.name} eliminado del carrito`),p.filter(w=>w.id!==d)})},s=(d,p)=>{if(p<=0){i(d);return}n(g=>g.map(w=>w.id===d?{...w,quantity:p}:w))},o=(d,p)=>{n(g=>g.map(w=>w.id===d?{...w,notes:p}:w))},l=()=>{n([]),he.success("Carrito vaciado")},u=()=>e.reduce((d,p)=>d+p.quantity,0),c=u();return f.jsx(yS.Provider,{value:{items:e,itemCount:c,addItem:r,removeItem:i,updateQuantity:s,updateNotes:o,clearCart:l,getTotalItems:u},children:t})}function Km(){const t=R.useContext(yS);if(!t)throw new Error("useCart must be used within CartProvider");return t}const _S=R.createContext(void 0),pw="protonlab_tour_completed",Ml=[{id:"welcome",target:"body",title:"¡Bienvenido a Protonlab!",content:"Te mostraremos las características principales de nuestra plataforma B2B. Este tour tomará solo 2 minutos.",placement:"bottom"},{id:"navbar",target:".navbar",title:"Barra de Navegación",content:"Aquí encontrarás acceso rápido a todas las secciones: Productos, Soporte, Nosotros y Contacto.",placement:"bottom"},{id:"search",target:'[data-tour="search-bar"]',title:"Búsqueda de Productos",content:"Busca en nuestro catálogo de hardware, robótica y tecnología avanzada por nombre, código o categoría.",placement:"bottom"},{id:"filters",target:'[data-tour="filters-button"]',title:"Filtros Avanzados",content:"Refina tu búsqueda por precio, marca, disponibilidad y más. También puedes ordenar los resultados.",placement:"left"},{id:"wishlist",target:'[data-tour="wishlist-button"]',title:"Lista de Deseos",content:"Guarda productos para después. Puedes crear múltiples listas, compartirlas y exportarlas a CSV.",placement:"left",beforeShow:()=>{window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{id:"compare",target:'[data-tour="compare-button"]',title:"Comparador de Productos",content:"Compara hasta 4 productos lado a lado para ver sus especificaciones y tomar la mejor decisión.",placement:"left"},{id:"cart",target:'[data-tour="cart-button"]',title:"Carrito de Cotizaciones",content:"Agrega productos y genera cotizaciones. Puedes agregar notas por item y exportar todo a CSV.",placement:"left"},{id:"notifications",target:'[data-tour="notifications-button"]',title:"Centro de Notificaciones",content:"Mantente informado sobre el estado de tus cotizaciones y pedidos.",placement:"bottom",beforeShow:()=>{window.scrollTo({top:0,behavior:"smooth"})}},{id:"complete",target:"body",title:"¡Tour Completado!",content:"Ya conoces las características principales. Comienza a explorar el catálogo de Protonlab.",placement:"bottom"}];function sF({children:t}){const[e,n]=R.useState(!1),[r,i]=R.useState(0),[s,o]=R.useState(()=>localStorage.getItem(pw)==="true"),l=()=>{n(!0),i(0)},u=()=>{n(!1),i(0),localStorage.setItem(pw,"true"),o(!0)},c=()=>{r<Ml.length-1?i(r+1):u()},d=()=>{r>0&&i(r-1)},p=()=>{u()};return R.useEffect(()=>{var g;if(e&&Ml[r]){const w=Ml[r];(g=w.beforeShow)==null||g.call(w);const S=setTimeout(()=>{var P;(P=w.afterShow)==null||P.call(w)},100);return()=>clearTimeout(S)}},[e,r]),R.useEffect(()=>{if(!s){const g=setTimeout(()=>{l()},2e3);return()=>clearTimeout(g)}},[s]),f.jsx(_S.Provider,{value:{isActive:e,currentStep:r,steps:Ml,startTour:l,endTour:u,nextStep:c,prevStep:d,skipTour:p,hasCompletedTour:s},children:t})}function vS(){const t=R.useContext(_S);if(t===void 0)throw new Error("useTour must be used within a TourProvider");return t}function oF(){"serviceWorker"in navigator&&(window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("✅ Service Worker registrado:",t),setInterval(()=>{t.update()},60*60*1e3),t.addEventListener("updatefound",()=>{const e=t.installing;e&&e.addEventListener("statechange",()=>{e.state==="installed"&&navigator.serviceWorker.controller&&confirm("Nueva versión disponible. ¿Actualizar ahora?")&&(e.postMessage({type:"SKIP_WAITING"}),window.location.reload())})}),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission().then(e=>{e==="granted"&&console.log("✅ Permisos de notificación otorgados")}),"sync"in t&&console.log("✅ Background Sync disponible"),"pushManager"in t&&aF(t)}).catch(t=>{console.error("❌ Error al registrar Service Worker:",t)})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()}))}async function aF(t){try{if(await t.pushManager.getSubscription()){console.log("✅ Ya suscrito a push notifications");return}const n="YOUR_VAPID_PUBLIC_KEY_HERE"}catch(e){console.error("Error suscribiéndose a push notifications:",e)}}async function lF(t){if("serviceWorker"in navigator&&"sync"in ServiceWorkerRegistration.prototype)try{const e=await navigator.serviceWorker.ready;return await uF(t),await e.sync.register("sync-quotes"),console.log("✅ Cotización guardada para sincronización"),!0}catch(e){return console.error("Error al registrar sync:",e),!1}return!1}async function uF(t){const e=JSON.parse(localStorage.getItem("pending_quotes")||"[]");e.push({...t,id:Date.now().toString(),timestamp:Date.now()}),localStorage.setItem("pending_quotes",JSON.stringify(e))}class cF{async createQuote(e){const n=e.products.reduce((d,p)=>d+(p.subtotal||p.quantity*(p.unitPrice||p.price||0)),0),r=Math.round(n*.19),i=0,s=n+r-i,[o,...l]=e.customerName.trim().split(/\s+/),u=l.join(" ")||"Cliente",c=await pr("/api/quotes",{method:"POST",body:{email:e.customerEmail,items:e.products.map(d=>({productId:d.productId||d.id||"",sku:d.sku||d.productId||d.id||"",name:d.productName||d.name||"",quantity:d.quantity,unitPrice:d.unitPrice||d.price||0})),shippingAddress:{firstName:o||"Cliente",lastName:u,addressLine1:e.organization||"Pendiente por confirmar",city:"Pendiente",postalCode:"0000000",country:"Chile",phone:e.customerPhone},paymentMethod:"cash_on_delivery",notes:e.notes}});return{id:c.quoteId,quoteNumber:c.quoteId,userId:"public",vendorId:"pendiente",customerName:e.customerName,customerEmail:e.customerEmail,customerPhone:e.customerPhone,organization:e.organization,taxId:e.taxId,items:e.products,subtotal:n,discount:i,tax:r,total:s,status:c.status,customerNotes:e.notes,createdAt:c.requestedAt,updatedAt:c.requestedAt}}async getVendorPendingQuotes(){const e=await pr("/api/quotes/vendor/pending");return Array.isArray(e)?e:e.items||[]}async vendorApproveQuote(e,n,r){const i=await pr(`/api/quotes/${e}/vendor-approve`,{method:"POST",body:{approved:n,notes:r}});return"quote"in i?i.quote:i}async adminApproveQuote(e,n,r){const i=await pr(`/api/quotes/${e}/admin-approve`,{method:"POST",body:{approved:n,notes:r}});return"quote"in i?i.quote:i}async convertQuoteToOrder(e,n,r){return await pr(`/api/quotes/${e}/convert-to-order`,{method:"POST",body:{paymentMethod:n,shippingAddress:r}})}async getNotifications(e=!1){const n=e?"/api/notifications?unreadOnly=true":"/api/notifications";try{return await pr(n)}catch(r){if(r instanceof Sr&&r.status===404)return[];throw r}}async markAllNotificationsAsRead(){try{await pr("/api/notifications",{method:"PATCH",body:{markAllAsRead:!0}})}catch(e){if(!(e instanceof Sr&&e.status===404))throw e}}async markNotificationAsRead(e){try{await pr(`/api/notifications/${e}`,{method:"PATCH",body:{read:!0}})}catch(n){if(!(n instanceof Sr&&n.status===404))throw n}}}const hF=new cF;function dF({isOpen:t,onClose:e,onSuccess:n}){const{items:r,clearCart:i}=Km(),[s,o]=R.useState("customer"),[l,u]=R.useState(!1),[c,d]=R.useState({customerName:"",customerEmail:"",customerPhone:"",organization:"",taxId:""}),[p,g]=R.useState(""),w=r.reduce((y,E)=>y+(E.precio||0)*E.quantity,0),S=y=>{if(y.preventDefault(),!c.customerName||!c.customerEmail||!c.customerPhone||!c.organization){he.error("Por favor completa todos los campos obligatorios");return}o("confirm")},P=async()=>{u(!0);try{const y={customerName:c.customerName,customerEmail:c.customerEmail,customerPhone:c.customerPhone,organization:c.organization,taxId:c.taxId||void 0,products:r.map(E=>({productId:E.id,productName:E.name,quantity:E.quantity,unitPrice:E.precio||0,subtotal:(E.precio||0)*E.quantity,id:E.id,name:E.name,price:E.precio||0})),notes:p||void 0};await hF.createQuote(y),he.success("¡Cotización enviada exitosamente! Tu vendedor la revisará pronto."),i(),n(),e(),b()}catch(y){console.error("Error al crear cotización:",y),he.error(y.message||"Error al enviar la cotización. Por favor intenta de nuevo.")}finally{u(!1)}},b=()=>{o("customer"),d({customerName:"",customerEmail:"",customerPhone:"",organization:"",taxId:""}),g("")},I=()=>{s==="confirm"&&o("customer")};return t?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"checkout-modal-overlay",onClick:e}),f.jsxs("div",{className:"checkout-modal",children:[f.jsxs("div",{className:"checkout-modal__header",children:[f.jsx("h2",{children:"Solicitar Cotización"}),f.jsx("button",{className:"checkout-modal__close",onClick:e,children:f.jsx(cn,{size:24})})]}),f.jsxs("div",{className:"checkout-steps",children:[f.jsxs("div",{className:`checkout-step ${s==="customer"?"active":""} ${s==="confirm"?"completed":""}`,children:[f.jsx("div",{className:"checkout-step__icon",children:s==="confirm"?f.jsx(Uf,{}):f.jsx(ow,{})}),f.jsx("span",{children:"Información"})]}),f.jsx("div",{className:"checkout-step__line"}),f.jsxs("div",{className:`checkout-step ${s==="confirm"?"active":""}`,children:[f.jsx("div",{className:"checkout-step__icon",children:f.jsx(Uf,{})}),f.jsx("span",{children:"Confirmar"})]})]}),f.jsxs("div",{className:"checkout-modal__content",children:[s==="customer"&&f.jsxs("form",{onSubmit:S,className:"checkout-form",children:[f.jsx("h3",{children:"Información del Cliente"}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"customerName",children:"Nombre Completo *"}),f.jsx("input",{id:"customerName",type:"text",value:c.customerName,onChange:y=>d({...c,customerName:y.target.value}),placeholder:"Ej: Juan Pérez",required:!0})]}),f.jsxs("div",{className:"form-row",children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"customerEmail",children:"Email *"}),f.jsx("input",{id:"customerEmail",type:"email",value:c.customerEmail,onChange:y=>d({...c,customerEmail:y.target.value}),placeholder:"juan@empresa.com",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"customerPhone",children:"Teléfono *"}),f.jsx("input",{id:"customerPhone",type:"tel",value:c.customerPhone,onChange:y=>d({...c,customerPhone:y.target.value}),placeholder:"+56 9 1234 5678",required:!0})]})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"organization",children:"Organización/Empresa *"}),f.jsx("input",{id:"organization",type:"text",value:c.organization,onChange:y=>d({...c,organization:y.target.value}),placeholder:"Laboratorio Central",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"taxId",children:"RUT/Tax ID (Opcional)"}),f.jsx("input",{id:"taxId",type:"text",value:c.taxId,onChange:y=>d({...c,taxId:y.target.value}),placeholder:"76.XXX.XXX-X"})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{htmlFor:"notes",children:"Notas Adicionales (Opcional)"}),f.jsx("textarea",{id:"notes",value:p,onChange:y=>g(y.target.value),placeholder:"Especifica cualquier requerimiento especial o información adicional...",rows:4,style:{width:"100%",padding:"0.75rem",borderRadius:"6px",border:"1px solid #ddd"}})]}),f.jsxs("div",{className:"checkout-form__actions",children:[f.jsx("button",{type:"button",className:"btn btn--secondary",onClick:e,children:"Cancelar"}),f.jsx("button",{type:"submit",className:"btn btn--primary",children:"Continuar"})]})]}),s==="confirm"&&f.jsxs("div",{className:"checkout-confirm",children:[f.jsx("h3",{children:"Confirmar Cotización"}),f.jsxs("div",{className:"confirm-section",children:[f.jsxs("h4",{children:[f.jsx(ow,{})," Información del Cliente"]}),f.jsx("p",{children:f.jsx("strong",{children:c.customerName})}),f.jsx("p",{children:c.customerEmail}),f.jsx("p",{children:c.customerPhone}),f.jsx("p",{children:c.organization}),c.taxId&&f.jsxs("p",{className:"muted",children:["RUT/Tax ID: ",c.taxId]})]}),f.jsxs("div",{className:"confirm-section",children:[f.jsxs("h4",{children:["Productos (",r.length,")"]}),f.jsx("div",{className:"confirm-products",children:r.map(y=>f.jsxs("div",{className:"confirm-product",children:[f.jsxs("span",{children:[y.name," x",y.quantity]}),f.jsxs("span",{children:["$",((y.precio||0)*y.quantity).toLocaleString("es-CL")]})]},y.id))})]}),p&&f.jsxs("div",{className:"confirm-section",children:[f.jsx("h4",{children:"Notas"}),f.jsx("p",{className:"muted",children:p})]}),f.jsxs("div",{className:"confirm-total",children:[f.jsx("h3",{children:"Subtotal Estimado"}),f.jsxs("h3",{className:"total-amount",children:["$",w.toLocaleString("es-CL")]}),f.jsx("p",{className:"muted",style:{fontSize:"0.9rem",marginTop:"0.5rem"},children:"* Precio final sujeto a aprobación del vendedor"})]}),f.jsxs("div",{className:"checkout-alert",children:[f.jsx(sS,{}),f.jsx("p",{children:"Tu solicitud será revisada por tu vendedor asignado. Recibirás una notificación cuando sea procesada."})]}),f.jsxs("div",{className:"checkout-form__actions",children:[f.jsx("button",{type:"button",className:"btn btn--secondary",onClick:I,disabled:l,children:"Volver"}),f.jsx("button",{type:"button",className:"btn btn--primary",onClick:P,disabled:l,children:l?"Enviando...":"Enviar Cotización"})]})]})]})]})]}):null}function fF({isOpen:t,onClose:e}){const{items:n,removeItem:r,updateQuantity:i,updateNotes:s,clearCart:o}=Km(),[l,u]=R.useState(!1),[c,d]=R.useState(!1),p=async()=>{u(!0);try{const w={items:n.map(S=>({productId:S.id,name:S.name,brand:S.brand,quantity:S.quantity,notes:S.notes})),timestamp:Date.now()};navigator.onLine?(await new Promise(S=>setTimeout(S,1500)),console.log("Cotización enviada:",w),he.success("Cotización enviada al vendedor")):await lF(w)?he.success("Cotización guardada. Se enviará cuando haya conexión"):he.error("Error al guardar cotización para envío posterior"),o(),e()}catch{he.error("Error al enviar cotización")}finally{u(!1)}},g=()=>{const w=n.map(I=>`${I.name};${I.brand};${I.quantity};${I.notes||""}`).join(`
`),S=new Blob([`Producto;Marca;Cantidad;Notas
${w}`],{type:"text/csv"}),P=URL.createObjectURL(S),b=document.createElement("a");b.href=P,b.download=`cotizacion_${new Date().toISOString().split("T")[0]}.csv`,b.click(),URL.revokeObjectURL(P),he.success("Cotización exportada")};return t?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"cart-drawer-overlay",onClick:e}),f.jsxs("div",{className:`cart-drawer ${t?"cart-drawer--open":""}`,children:[f.jsxs("div",{className:"cart-drawer__header",children:[f.jsxs("div",{className:"cart-drawer__title",children:[f.jsx(Ff,{size:24}),f.jsx("h2",{children:"Carrito de Cotización"}),f.jsx("span",{className:"cart-drawer__count",children:n.length})]}),f.jsx("button",{className:"cart-drawer__close",onClick:e,children:f.jsx(cn,{size:24})})]}),f.jsx("div",{className:"cart-drawer__content",children:n.length===0?f.jsxs("div",{className:"cart-drawer__empty",children:[f.jsx(Ff,{size:64}),f.jsx("p",{children:"Tu carrito está vacío"}),f.jsx("p",{className:"muted",children:"Agrega productos para solicitar una cotización"})]}):f.jsx("div",{className:"cart-drawer__items",children:n.map(w=>f.jsxs("div",{className:"cart-item",children:[f.jsxs("div",{className:"cart-item__info",children:[f.jsx("h4",{children:w.name}),f.jsx("p",{className:"muted",children:w.brand}),w.familia&&f.jsx("span",{className:"cart-item__tag",children:w.familia})]}),f.jsxs("div",{className:"cart-item__quantity",children:[f.jsx("button",{onClick:()=>i(w.id,w.quantity-1),className:"cart-item__qty-btn",children:"-"}),f.jsx("input",{type:"number",min:"1",value:w.quantity,onChange:S=>i(w.id,parseInt(S.target.value)||1),className:"cart-item__qty-input"}),f.jsx("button",{onClick:()=>i(w.id,w.quantity+1),className:"cart-item__qty-btn",children:"+"})]}),f.jsx("textarea",{placeholder:"Notas adicionales...",value:w.notes||"",onChange:S=>s(w.id,S.target.value),className:"cart-item__notes",rows:2}),f.jsx("button",{onClick:()=>r(w.id),className:"cart-item__remove",title:"Eliminar",children:f.jsx(Ns,{size:18})})]},w.id))})}),n.length>0&&f.jsxs("div",{className:"cart-drawer__footer",children:[f.jsxs("div",{className:"cart-drawer__actions",children:[f.jsxs("button",{className:"cart-drawer__action-btn",onClick:g,children:[f.jsx(qm,{size:18}),"Exportar"]}),f.jsxs("button",{className:"cart-drawer__action-btn cart-drawer__action-btn--danger",onClick:o,children:[f.jsx(Ns,{size:18}),"Vaciar"]})]}),f.jsxs("div",{className:"cart-drawer__main-actions",children:[f.jsxs("button",{className:"cart-drawer__send-btn cart-drawer__send-btn--secondary",onClick:p,disabled:l,children:[f.jsx(iS,{size:18}),l?"Enviando...":"Solicitar Cotización"]}),f.jsxs("button",{className:"cart-drawer__send-btn cart-drawer__send-btn--primary",onClick:()=>d(!0),children:[f.jsx(xM,{size:18}),"Realizar Pedido"]})]})]})]}),f.jsx(dF,{isOpen:c,onClose:()=>d(!1),onSuccess:()=>{he.success("¡Pedido realizado con éxito!"),e()}})]}):null}function pF(){const{itemCount:t}=Km(),[e,n]=R.useState(!1);return f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"cart-button","data-tour":"cart-button",onClick:()=>n(!0),title:"Ver carrito de cotización",children:[f.jsx(Ff,{size:24}),t>0&&f.jsx("span",{className:"cart-button__badge",children:t})]}),f.jsx(fF,{isOpen:e,onClose:()=>n(!1)})]})}function mF(){const{products:t,removeProduct:e,clearCompare:n}=rF(),[r,i]=R.useState(!1),[s,o]=R.useState(!1);if(t.length===0)return null;const l=[{key:"name",label:"Nombre"},{key:"brand",label:"Marca"},{key:"familia",label:"Familia"},{key:"subfamilia",label:"Subfamilia"},{key:"code",label:"Código"},{key:"precio",label:"Precio"},{key:"stock",label:"Stock"},{key:"shortDescription",label:"Descripción"}];return f.jsxs(f.Fragment,{children:[!r&&f.jsxs("button",{className:"compare-float-button","data-tour":"compare-button",onClick:()=>i(!0),title:"Ver comparación",children:[f.jsx("span",{className:"compare-float-button__icon",children:"⚖️"}),f.jsx("span",{className:"compare-float-button__badge",children:t.length}),f.jsx("span",{className:"compare-float-button__text",children:"Comparar"})]}),r&&f.jsx("div",{className:"compare-modal-overlay",onClick:()=>i(!1),children:f.jsxs("div",{className:`compare-modal ${s?"minimized":""}`,onClick:u=>u.stopPropagation(),children:[f.jsxs("div",{className:"compare-modal__header",children:[f.jsxs("h3",{children:["Comparar Productos (",t.length,")"]}),f.jsxs("div",{className:"compare-modal__actions",children:[f.jsx("button",{onClick:()=>o(!s),title:s?"Expandir":"Minimizar",className:"action-btn",children:s?f.jsx(EM,{size:18}):f.jsx(wM,{size:18})}),f.jsxs("button",{onClick:n,title:"Limpiar comparación",className:"action-btn",children:[f.jsx(cn,{size:18})," Limpiar"]}),f.jsx("button",{onClick:()=>i(!1),title:"Cerrar",className:"action-btn",children:f.jsx(cn,{size:20})})]})]}),!s&&f.jsxs("div",{className:"compare-modal__body",children:[f.jsx("div",{className:"compare-table-container",children:f.jsxs("table",{className:"compare-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{className:"compare-table__spec-header",children:"Especificación"}),t.map(u=>f.jsx("th",{className:"compare-table__product-header",children:f.jsxs("div",{className:"product-header-content",children:[f.jsx("img",{src:u.imageUrl||'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f8f9fa"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="%238b1538">No image</text></svg>',alt:u.name,className:"product-header-image"}),f.jsx("button",{onClick:()=>e(u.id),className:"product-header-remove",title:"Eliminar de comparación",children:f.jsx(cn,{size:16})})]})},u.id))]})}),f.jsx("tbody",{children:l.map(u=>f.jsxs("tr",{children:[f.jsx("td",{className:"compare-table__spec-cell",children:f.jsx("strong",{children:u.label})}),t.map(c=>f.jsx("td",{className:"compare-table__value-cell",children:u.key==="precio"&&c[u.key]?`$${Number(c[u.key]).toLocaleString("es-CL")}`:u.key==="stock"&&c[u.key]?c[u.key]>0?`✓ ${c[u.key]} unidades`:"✗ Sin stock":c[u.key]||"-"},c.id))]},u.key))})]})}),t.length<4&&f.jsx("div",{className:"compare-hint",children:"💡 Puedes comparar hasta 4 productos a la vez. Agrega más desde las páginas de productos."})]})]})})]})}function gF(){const{lists:t,currentListId:e,currentList:n,createList:r,deleteList:i,renameList:s,setCurrentList:o,removeItem:l,moveItem:u,clearList:c,exportList:d,getShareableLink:p,getTotalItems:g}=tF(),[w,S]=R.useState(!1),[P,b]=R.useState(!1),[I,y]=R.useState(!1),[E,N]=R.useState(!1),[V,j]=R.useState(""),[T,_]=R.useState(""),[k,C]=R.useState(""),[x,L]=R.useState(""),A=()=>{T.trim()&&(r(T,k),_(""),C(""),b(!1))},ze=()=>{!T.trim()||!x||(s(x,T),_(""),L(""),y(!1))},Xt=()=>{const U=p();navigator.clipboard.writeText(U),alert("¡Link copiado al portapapeles!")},li=U=>{V&&(u(V,e,U),N(!1),j(""))},ir=g();return f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"wishlist-float-button","data-tour":"wishlist-button",onClick:()=>S(!w),title:"Mis listas de deseos",children:[f.jsx(cd,{size:24}),ir>0&&f.jsx("span",{className:"wishlist-float-button__badge",children:ir})]}),w&&f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"wishlist-overlay",onClick:()=>S(!1)}),f.jsxs("div",{className:"wishlist-panel",children:[f.jsxs("div",{className:"wishlist-panel__header",children:[f.jsxs("h3",{children:[f.jsx(cd,{size:20})," Mis Listas de Deseos"]}),f.jsx("button",{onClick:()=>S(!1),className:"close-btn",children:f.jsx(cn,{size:24})})]}),f.jsxs("div",{className:"wishlist-panel__lists",children:[f.jsxs("div",{className:"list-selector",children:[t.map(U=>f.jsxs("button",{className:`list-tab ${U.id===e?"active":""}`,onClick:()=>o(U.id),children:[U.name,f.jsx("span",{className:"list-tab__count",children:U.items.length})]},U.id)),f.jsxs("button",{className:"list-tab list-tab--add",onClick:()=>b(!0),children:[f.jsx(gM,{size:16})," Nueva lista"]})]}),n&&f.jsxs("div",{className:"list-actions",children:[f.jsx("button",{onClick:()=>{L(e),_(n.name),y(!0)},className:"action-btn",title:"Renombrar lista",children:f.jsx(RM,{size:16})}),f.jsx("button",{onClick:Xt,className:"action-btn",title:"Compartir lista",children:f.jsx(mM,{size:16})}),f.jsx("button",{onClick:()=>d(),className:"action-btn",title:"Exportar CSV",children:f.jsx(qm,{size:16})}),!n.isDefault&&f.jsx("button",{onClick:()=>{confirm(`¿Eliminar lista "${n.name}"?`)&&i(e)},className:"action-btn action-btn--danger",title:"Eliminar lista",children:f.jsx(Ns,{size:16})})]})]}),f.jsx("div",{className:"wishlist-panel__items",children:n&&n.items.length===0?f.jsxs("div",{className:"wishlist-empty",children:[f.jsx(cd,{size:48}),f.jsx("p",{children:"No hay productos en esta lista"}),f.jsx("span",{children:"Explora nuestro catálogo y agrega tus favoritos"})]}):n==null?void 0:n.items.map(U=>f.jsxs("div",{className:"wishlist-item",children:[f.jsx("img",{src:U.image||"https://via.placeholder.com/80",alt:U.name,className:"wishlist-item__image"}),f.jsxs("div",{className:"wishlist-item__info",children:[f.jsx("h4",{children:U.name}),U.brand&&f.jsx("span",{className:"wishlist-item__brand",children:U.brand}),U.price&&f.jsxs("span",{className:"wishlist-item__price",children:["$",U.price.toLocaleString("es-CL")]})]}),f.jsxs("div",{className:"wishlist-item__actions",children:[t.length>1&&f.jsx("button",{onClick:()=>{j(U.id),N(!0)},className:"wishlist-item-btn",title:"Mover a otra lista",children:f.jsx(_M,{size:16})}),f.jsx("button",{onClick:()=>l(U.id),className:"wishlist-item-btn wishlist-item-btn--danger",title:"Eliminar",children:f.jsx(Ns,{size:16})})]})]},U.id))}),n&&n.items.length>0&&f.jsx("div",{className:"wishlist-panel__footer",children:f.jsxs("button",{onClick:()=>{confirm("¿Vaciar toda la lista?")&&c()},className:"wishlist-clear-btn",children:[f.jsx(Ns,{size:16})," Vaciar lista"]})})]})]}),P&&f.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:f.jsxs("div",{className:"modal",onClick:U=>U.stopPropagation(),children:[f.jsx("h3",{children:"Nueva Lista de Deseos"}),f.jsx("input",{type:"text",placeholder:"Nombre de la lista",value:T,onChange:U=>_(U.target.value),className:"modal-input",autoFocus:!0}),f.jsx("textarea",{placeholder:"Descripción (opcional)",value:k,onChange:U=>C(U.target.value),className:"modal-textarea",rows:3}),f.jsxs("div",{className:"modal-actions",children:[f.jsx("button",{onClick:()=>b(!1),className:"modal-btn modal-btn--secondary",children:"Cancelar"}),f.jsx("button",{onClick:A,className:"modal-btn modal-btn--primary",children:"Crear Lista"})]})]})}),I&&f.jsx("div",{className:"modal-overlay",onClick:()=>y(!1),children:f.jsxs("div",{className:"modal",onClick:U=>U.stopPropagation(),children:[f.jsx("h3",{children:"Renombrar Lista"}),f.jsx("input",{type:"text",placeholder:"Nuevo nombre",value:T,onChange:U=>_(U.target.value),className:"modal-input",autoFocus:!0}),f.jsxs("div",{className:"modal-actions",children:[f.jsx("button",{onClick:()=>y(!1),className:"modal-btn modal-btn--secondary",children:"Cancelar"}),f.jsx("button",{onClick:ze,className:"modal-btn modal-btn--primary",children:"Renombrar"})]})]})}),E&&f.jsx("div",{className:"modal-overlay",onClick:()=>N(!1),children:f.jsxs("div",{className:"modal",onClick:U=>U.stopPropagation(),children:[f.jsx("h3",{children:"Mover a otra lista"}),f.jsx("div",{className:"modal-list",children:t.filter(U=>U.id!==e).map(U=>f.jsxs("button",{onClick:()=>li(U.id),className:"modal-list-item",children:[U.name,f.jsxs("span",{className:"modal-list-item__count",children:[U.items.length," items"]})]},U.id))}),f.jsx("div",{className:"modal-actions",children:f.jsx("button",{onClick:()=>N(!1),className:"modal-btn modal-btn--secondary",children:"Cancelar"})})]})})]})}function yF(){const{isActive:t,currentStep:e,steps:n,nextStep:r,prevStep:i,skipTour:s,endTour:o}=vS(),[l,u]=R.useState(null),[c,d]=R.useState({top:0,left:0}),p=R.useRef(null),g=n[e];if(R.useEffect(()=>{if(!t||!g)return;const P=()=>{const I=document.querySelector(g.target);if(I){const y=I.getBoundingClientRect();if(u(y),p.current){const E=p.current.getBoundingClientRect(),N=20;let V=0,j=0;switch(g.placement){case"top":V=y.top-E.height-N,j=y.left+y.width/2-E.width/2;break;case"bottom":V=y.bottom+N,j=y.left+y.width/2-E.width/2;break;case"left":V=y.top+y.height/2-E.height/2,j=y.left-E.width-N;break;case"right":V=y.top+y.height/2-E.height/2,j=y.right+N;break;default:V=y.bottom+N,j=y.left+y.width/2-E.width/2}const T=window.innerWidth-E.width-10,_=window.innerHeight-E.height-10;j=Math.max(10,Math.min(j,T)),V=Math.max(10,Math.min(V,_)),d({top:V,left:j})}}else if(u(null),p.current){const y=p.current.getBoundingClientRect();d({top:window.innerHeight/2-y.height/2,left:window.innerWidth/2-y.width/2})}};P(),window.addEventListener("resize",P),window.addEventListener("scroll",P);const b=document.querySelector(g.target);return b&&b.classList.add("tour-highlight"),()=>{window.removeEventListener("resize",P),window.removeEventListener("scroll",P),b&&b.classList.remove("tour-highlight")}},[t,e,g]),!t||!g)return null;const w=e===0,S=e===n.length-1;return f.jsxs("div",{className:"tour-overlay",children:[f.jsx("div",{className:"tour-backdrop",onClick:s}),l&&f.jsx("div",{className:"tour-spotlight",style:{top:l.top-8,left:l.left-8,width:l.width+16,height:l.height+16}}),f.jsxs("div",{ref:p,className:"tour-tooltip",style:{top:c.top,left:c.left},children:[f.jsxs("div",{className:"tour-tooltip__header",children:[f.jsx("h3",{className:"tour-tooltip__title",children:g.title}),f.jsx("button",{className:"tour-tooltip__close",onClick:s,"aria-label":"Cerrar tour",children:f.jsx(cn,{})})]}),f.jsx("div",{className:"tour-tooltip__content",children:f.jsx("p",{children:g.content})}),f.jsxs("div",{className:"tour-tooltip__footer",children:[f.jsxs("div",{className:"tour-tooltip__progress",children:[e+1," / ",n.length]}),f.jsxs("div",{className:"tour-tooltip__actions",children:[!w&&f.jsxs("button",{className:"tour-tooltip__btn tour-tooltip__btn--secondary",onClick:i,children:[f.jsx(bM,{}),"Anterior"]}),!S&&f.jsxs("button",{className:"tour-tooltip__btn tour-tooltip__btn--ghost",onClick:s,children:[f.jsx(pM,{}),"Saltar"]}),f.jsxs("button",{className:"tour-tooltip__btn tour-tooltip__btn--primary",onClick:S?o:r,children:[S?"Finalizar":"Siguiente",!S&&f.jsx(NM,{})]})]})]})]})]})}function _F(){const{startTour:t,hasCompletedTour:e}=vS();return f.jsxs("button",{className:"tour-trigger",onClick:t,title:e?"Ver tour nuevamente":"Iniciar tour guiado","aria-label":"Iniciar tour guiado",children:[f.jsx(AM,{}),!e&&f.jsx("span",{className:"tour-trigger__badge"})]})}function vF(){const[t,e]=R.useState(navigator.onLine),[n,r]=R.useState(!navigator.onLine);return R.useEffect(()=>{const i=()=>{e(!0),r(!0),setTimeout(()=>r(!1),3e3)},s=()=>{e(!1),r(!0)};return window.addEventListener("online",i),window.addEventListener("offline",s),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",s)}},[]),n?f.jsx("div",{className:`offline-indicator ${t?"online":"offline"}`,children:f.jsx("div",{className:"offline-indicator__content",children:t?f.jsxs(f.Fragment,{children:[f.jsx(cM,{size:20}),f.jsx("span",{children:"Conexión restaurada"})]}):f.jsxs(f.Fragment,{children:[f.jsx(hM,{size:20}),f.jsx("span",{children:"Sin conexión a internet"})]})})}):null}class wF extends R.Component{constructor(n){super(n);pt(this,"handleReset",()=>{this.setState({hasError:!1,error:null,errorInfo:null}),window.location.reload()});pt(this,"handleReport",()=>{var r,i,s;const n={message:(r=this.state.error)==null?void 0:r.message,stack:(i=this.state.error)==null?void 0:i.stack,componentStack:(s=this.state.errorInfo)==null?void 0:s.componentStack,userAgent:navigator.userAgent,timestamp:new Date().toISOString(),url:window.location.href};navigator.clipboard.writeText(JSON.stringify(n,null,2)).then(()=>alert("Reporte de error copiado al portapapeles")).catch(()=>console.error("Error al copiar"))});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,r){xe.critical("React Error Boundary caught an error",{error:n.message,componentStack:r.componentStack,errorName:n.name,errorStack:n.stack}),this.setState({error:n,errorInfo:r})}render(){var n,r,i;return this.state.hasError?this.props.fallback?this.props.fallback:f.jsx("div",{className:"error-boundary-container",children:f.jsxs("div",{className:"error-boundary-content",children:[f.jsx("div",{className:"error-boundary-icon",children:"⚠️"}),f.jsx("h1",{className:"error-boundary-title",children:"¡Ups! Algo salió mal"}),f.jsx("p",{className:"error-boundary-message",children:"La aplicación ha encontrado un error inesperado. Nuestro equipo ha sido notificado."}),f.jsx("div",{className:"error-boundary-details",children:f.jsxs("details",{children:[f.jsx("summary",{children:"Detalles técnicos"}),f.jsxs("div",{className:"error-boundary-error",children:[f.jsx("strong",{children:"Error:"}),f.jsx("pre",{children:(n=this.state.error)==null?void 0:n.message})]}),((r=this.state.error)==null?void 0:r.stack)&&f.jsxs("div",{className:"error-boundary-stack",children:[f.jsx("strong",{children:"Stack Trace:"}),f.jsx("pre",{children:this.state.error.stack})]}),((i=this.state.errorInfo)==null?void 0:i.componentStack)&&f.jsxs("div",{className:"error-boundary-component-stack",children:[f.jsx("strong",{children:"Component Stack:"}),f.jsx("pre",{children:this.state.errorInfo.componentStack})]})]})}),f.jsxs("div",{className:"error-boundary-actions",children:[f.jsx("button",{onClick:this.handleReset,className:"error-boundary-btn error-boundary-btn-primary",children:"🔄 Recargar Aplicación"}),f.jsx("button",{onClick:this.handleReport,className:"error-boundary-btn error-boundary-btn-secondary",children:"📋 Copiar Reporte"}),f.jsx("button",{onClick:()=>window.location.href="/",className:"error-boundary-btn error-boundary-btn-secondary",children:"🏠 Ir al Inicio"})]})]})}):this.props.children}}function EF(){const t=Ln();R.useEffect(()=>{const e=t.pathname+t.search,n=document.title;$4.pageView(e,n)},[t])}function TF(){return Yj(),EF(),R.useEffect(()=>{xe.info("App initialized"),oF(),Z4()},[]),f.jsx(wF,{children:f.jsx(tM,{children:f.jsx(VM,{children:f.jsx(zR,{children:f.jsx(eF,{children:f.jsx(nF,{children:f.jsx(iF,{children:f.jsxs(sF,{children:[f.jsx(Qj,{}),f.jsx(Rj,{}),f.jsx(Xj,{phoneNumber:"56912345678",message:"Hola. Tengo una consulta sobre Protonlab."}),f.jsx(pF,{}),f.jsx(mF,{}),f.jsx(gF,{}),f.jsx(yF,{}),f.jsx(_F,{}),f.jsx(vF,{}),f.jsx(Zj,{})]})})})})})})})})}dd.createRoot(document.getElementById("root")).render(f.jsx($n.StrictMode,{children:f.jsx(jR,{reducedMotion:"never",children:f.jsx(RR,{children:f.jsx(eM,{children:f.jsx(TF,{})})})})}));export{gR as $,OF as A,VF as B,aV as C,DF as D,lU as E,iU as F,TM as G,GF as H,XF as I,KF as J,PM as K,Et as L,u_ as M,eS as N,RF as O,ew as P,z4 as Q,ue as R,sU as S,qm as T,cn as U,sS as V,he as W,bM as X,Uf as Y,JF as Z,Sr as _,OR as a,$n as a0,No as a1,Z4 as a2,ge as a3,jF as a4,UF as a5,FF as a6,$F as a7,zF as a8,BF as a9,NF as aa,qF as ab,gM as ac,QF as ad,RM as ae,YF as af,tU as ag,Ns as ah,W4 as ai,tw as aj,ud as ak,U4 as al,nU as am,NM as an,rU as ao,mM as ap,xj as aq,Ic as b,uU as c,eU as d,ZF as e,AF as f,aU as g,cU as h,VR as i,f as j,oU as k,HF as l,Km as m,Ff as n,BR as o,kF as p,pS as q,R as r,SF as s,MF as t,DR as u,PF as v,WF as w,pr as x,bF as y,LF as z};
