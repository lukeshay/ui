function uh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ps(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bd={exports:{}},qi={},Cd={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),dh=Symbol.for("react.portal"),fh=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),hh=Symbol.for("react.provider"),gh=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),wh=Symbol.for("react.memo"),xh=Symbol.for("react.lazy"),Tc=Symbol.iterator;function bh(e){return e===null||typeof e!="object"?null:(e=Tc&&e[Tc]||e["@@iterator"],typeof e=="function"?e:null)}var Ed={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,_d={};function kr(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Ed}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kd(){}kd.prototype=kr.prototype;function ms(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Ed}var hs=ms.prototype=new kd;hs.constructor=ms;Sd(hs,kr.prototype);hs.isPureReactComponent=!0;var Rc=Array.isArray,Td=Object.prototype.hasOwnProperty,gs={current:null},Rd={key:!0,ref:!0,__self:!0,__source:!0};function Dd(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Td.call(t,r)&&!Rd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:So,type:e,key:i,ref:a,props:o,_owner:gs.current}}function Ch(e,t){return{$$typeof:So,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===So}function Eh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dc=/\/+/g;function _a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Eh(""+e.key):t.toString(36)}function ii(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case So:case dh:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+_a(a,0):r,Rc(o)?(n="",e!=null&&(n=e.replace(Dc,"$&/")+"/"),ii(o,t,n,"",function(c){return c})):o!=null&&(vs(o)&&(o=Ch(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Dc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Rc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+_a(i,l);a+=ii(i,t,n,s,o)}else if(s=bh(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+_a(i,l++),a+=ii(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $o(e,t,n){if(e==null)return e;var r=[],o=0;return ii(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Sh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},ai={transition:null},_h={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:ai,ReactCurrentOwner:gs};J.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=kr;J.Fragment=fh;J.Profiler=mh;J.PureComponent=ms;J.StrictMode=ph;J.Suspense=yh;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_h;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sd({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=gs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Td.call(t,s)&&!Rd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:So,type:e.type,key:o,ref:i,props:r,_owner:a}};J.createContext=function(e){return e={$$typeof:gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hh,_context:e},e.Consumer=e};J.createElement=Dd;J.createFactory=function(e){var t=Dd.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:vh,render:e}};J.isValidElement=vs;J.lazy=function(e){return{$$typeof:xh,_payload:{_status:-1,_result:e},_init:Sh}};J.memo=function(e,t){return{$$typeof:wh,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=ai.transition;ai.transition={};try{e()}finally{ai.transition=t}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(e,t){return Ue.current.useCallback(e,t)};J.useContext=function(e){return Ue.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ue.current.useEffect(e,t)};J.useId=function(){return Ue.current.useId()};J.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ue.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};J.useRef=function(e){return Ue.current.useRef(e)};J.useState=function(e){return Ue.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Ue.current.useTransition()};J.version="18.2.0";Cd.exports=J;var p=Cd.exports;const it=ps(p),kh=uh({__proto__:null,default:it},[p]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th=p,Rh=Symbol.for("react.element"),Dh=Symbol.for("react.fragment"),Nh=Object.prototype.hasOwnProperty,Ah=Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ph={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Nh.call(t,r)&&!Ph.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rh,type:e,key:i,ref:a,props:o,_owner:Ah.current}}qi.Fragment=Dh;qi.jsx=Nd;qi.jsxs=Nd;bd.exports=qi;var R=bd.exports,sl={},Ad={exports:{}},rt={},Pd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,D){var A=E.length;E.push(D);e:for(;0<A;){var F=A-1>>>1,W=E[F];if(0<o(W,D))E[F]=D,E[A]=W,A=F;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var D=E[0],A=E.pop();if(A!==D){E[0]=A;e:for(var F=0,W=E.length,Q=W>>>1;F<Q;){var pe=2*(F+1)-1,re=E[pe],ae=pe+1,H=E[ae];if(0>o(re,A))ae<W&&0>o(H,re)?(E[F]=H,E[ae]=A,F=ae):(E[F]=re,E[pe]=A,F=pe);else if(ae<W&&0>o(H,A))E[F]=H,E[ae]=A,F=ae;else break e}}return D}function o(E,D){var A=E.sortIndex-D.sortIndex;return A!==0?A:E.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],f=1,d=null,h=3,y=!1,w=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=E)r(c),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(c)}}function x(E){if(v=!1,g(E),!w)if(n(s)!==null)w=!0,B(C);else{var D=n(c);D!==null&&T(x,D.startTime-E)}}function C(E,D){w=!1,v&&(v=!1,m(k),k=-1),y=!0;var A=h;try{for(g(D),d=n(s);d!==null&&(!(d.expirationTime>D)||E&&!z());){var F=d.callback;if(typeof F=="function"){d.callback=null,h=d.priorityLevel;var W=F(d.expirationTime<=D);D=e.unstable_now(),typeof W=="function"?d.callback=W:d===n(s)&&r(s),g(D)}else r(s);d=n(s)}if(d!==null)var Q=!0;else{var pe=n(c);pe!==null&&T(x,pe.startTime-D),Q=!1}return Q}finally{d=null,h=A,y=!1}}var _=!1,S=null,k=-1,I=5,M=-1;function z(){return!(e.unstable_now()-M<I)}function L(){if(S!==null){var E=e.unstable_now();M=E;var D=!0;try{D=S(!0,E)}finally{D?U():(_=!1,S=null)}}else _=!1}var U;if(typeof u=="function")U=function(){u(L)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,V=K.port2;K.port1.onmessage=L,U=function(){V.postMessage(null)}}else U=function(){b(L,0)};function B(E){S=E,_||(_=!0,U())}function T(E,D){k=b(function(){E(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,B(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var A=h;h=D;try{return E()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,D){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var A=h;h=E;try{return D()}finally{h=A}},e.unstable_scheduleCallback=function(E,D,A){var F=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?F+A:F):A=F,E){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=A+W,E={id:f++,callback:D,priorityLevel:E,startTime:A,expirationTime:W,sortIndex:-1},A>F?(E.sortIndex=A,t(c,E),n(s)===null&&E===n(c)&&(v?(m(k),k=-1):v=!0,T(x,A-F))):(E.sortIndex=W,t(s,E),w||y||(w=!0,B(C))),E},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(E){var D=h;return function(){var A=h;h=D;try{return E.apply(this,arguments)}finally{h=A}}}})($d);Pd.exports=$d;var $h=Pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=p,nt=$h;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Md=new Set,ro={};function zn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(ro[e]=t,e=0;e<t.length;e++)Md.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,Ih=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nc={},Ac={};function Mh(e){return cl.call(Ac,e)?!0:cl.call(Nc,e)?!1:Ih.test(e)?Ac[e]=!0:(Nc[e]=!0,!1)}function Oh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lh(e,t,n,r){if(t===null||typeof t>"u"||Oh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pe[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,ws);Pe[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,ws);Pe[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,ws);Pe[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function xs(e,t,n,r){var o=Pe.hasOwnProperty(t)?Pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lh(t,n,o,r)&&(n=null),r||o===null?Mh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Zn=Symbol.for("react.fragment"),bs=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),Cs=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),Es=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Fd=Symbol.for("react.offscreen"),Pc=Symbol.iterator;function $r(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,ka;function Vr(e){if(ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ka=t&&t[1]||""}return`
`+ka+e}var Ta=!1;function Ra(e,t){if(!e||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function Fh(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=Ra(e.type,!1),e;case 11:return e=Ra(e.type.render,!1),e;case 1:return e=Ra(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zn:return"Fragment";case Xn:return"Portal";case ul:return"Profiler";case bs:return"StrictMode";case dl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ld:return(e.displayName||"Context")+".Consumer";case Od:return(e._context.displayName||"Context")+".Provider";case Cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Es:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function zh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jh(e){var t=zd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mo(e){e._valueTracker||(e._valueTracker=jh(e))}function jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bd(e,t){t=t.checked,t!=null&&xs(e,"checked",t,!1)}function hl(e,t){Bd(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&gl(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gl(e,t,n){(t!=="number"||bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ur=Array.isArray;function sr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Ur(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function Hd(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Ud=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bh=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){Bh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Wd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function Gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Wd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hh=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(Hh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Ss(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,cr=null,ur=null;function Lc(e){if(e=To(e)){if(typeof Cl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=oa(t),Cl(e.stateNode,e.type,t))}}function Kd(e){cr?ur?ur.push(e):ur=[e]:cr=e}function Yd(){if(cr){var e=cr,t=ur;if(ur=cr=null,Lc(e),t)for(e=0;e<t.length;e++)Lc(t[e])}}function Qd(e,t){return e(t)}function Xd(){}var Da=!1;function Zd(e,t,n){if(Da)return e(t,n);Da=!0;try{return Qd(e,t,n)}finally{Da=!1,(cr!==null||ur!==null)&&(Xd(),Yd())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var El=!1;if(Ft)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){El=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{El=!1}function Vh(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Yr=!1,Ci=null,Ei=!1,Sl=null,Uh={onError:function(e){Yr=!0,Ci=e}};function Wh(e,t,n,r,o,i,a,l,s){Yr=!1,Ci=null,Vh.apply(Uh,arguments)}function Gh(e,t,n,r,o,i,a,l,s){if(Wh.apply(this,arguments),Yr){if(Yr){var c=Ci;Yr=!1,Ci=null}else throw Error(N(198));Ei||(Ei=!0,Sl=c)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(jn(e)!==e)throw Error(N(188))}function Kh(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Fc(o),e;if(i===r)return Fc(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function qd(e){return e=Kh(e),e!==null?ef(e):null}function ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ef(e);if(t!==null)return t;e=e.sibling}return null}var tf=nt.unstable_scheduleCallback,zc=nt.unstable_cancelCallback,Yh=nt.unstable_shouldYield,Qh=nt.unstable_requestPaint,be=nt.unstable_now,Xh=nt.unstable_getCurrentPriorityLevel,_s=nt.unstable_ImmediatePriority,nf=nt.unstable_UserBlockingPriority,Si=nt.unstable_NormalPriority,Zh=nt.unstable_LowPriority,rf=nt.unstable_IdlePriority,ea=null,Tt=null;function Jh(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ea,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:tg,qh=Math.log,eg=Math.LN2;function tg(e){return e>>>=0,e===0?32:31-(qh(e)/eg|0)|0}var Lo=64,Fo=4194304;function Wr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=Wr(l):(i&=a,i!==0&&(r=Wr(i)))}else a=n&~o,a!==0?r=Wr(a):i!==0&&(r=Wr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),o=1<<n,r|=e[n],t&=~o;return r}function ng(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-wt(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=ng(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function of(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function og(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-wt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function af(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lf,Ts,sf,cf,uf,kl=!1,zo=[],on=null,an=null,ln=null,ao=new Map,lo=new Map,qt=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(t.pointerId)}}function Mr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=To(t),t!==null&&Ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ag(e,t,n,r,o){switch(t){case"focusin":return on=Mr(on,e,t,n,r,o),!0;case"dragenter":return an=Mr(an,e,t,n,r,o),!0;case"mouseover":return ln=Mr(ln,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ao.set(i,Mr(ao.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,lo.set(i,Mr(lo.get(i)||null,e,t,n,r,o)),!0}return!1}function df(e){var t=kn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jd(n),t!==null){e.blockedOn=t,uf(e.priority,function(){sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=To(n),t!==null&&Ts(t),e.blockedOn=n,!1;t.shift()}return!0}function Bc(e,t,n){li(e)&&n.delete(t)}function lg(){kl=!1,on!==null&&li(on)&&(on=null),an!==null&&li(an)&&(an=null),ln!==null&&li(ln)&&(ln=null),ao.forEach(Bc),lo.forEach(Bc)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,lg)))}function so(e){function t(o){return Or(o,e)}if(0<zo.length){Or(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&Or(on,e),an!==null&&Or(an,e),ln!==null&&Or(ln,e),ao.forEach(t),lo.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)df(n),n.blockedOn===null&&qt.shift()}var dr=Wt.ReactCurrentBatchConfig,ki=!0;function sg(e,t,n,r){var o=ie,i=dr.transition;dr.transition=null;try{ie=1,Rs(e,t,n,r)}finally{ie=o,dr.transition=i}}function cg(e,t,n,r){var o=ie,i=dr.transition;dr.transition=null;try{ie=4,Rs(e,t,n,r)}finally{ie=o,dr.transition=i}}function Rs(e,t,n,r){if(ki){var o=Tl(e,t,n,r);if(o===null)ja(e,t,r,Ti,n),jc(e,r);else if(ag(o,e,t,n,r))r.stopPropagation();else if(jc(e,r),t&4&&-1<ig.indexOf(e)){for(;o!==null;){var i=To(o);if(i!==null&&lf(i),i=Tl(e,t,n,r),i===null&&ja(e,t,r,Ti,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ja(e,t,r,null,n)}}var Ti=null;function Tl(e,t,n,r){if(Ti=null,e=Ss(r),e=kn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ti=e,null}function ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xh()){case _s:return 1;case nf:return 4;case Si:case Zh:return 16;case rf:return 536870912;default:return 16}default:return 16}}var tn=null,Ds=null,si=null;function pf(){if(si)return si;var e,t=Ds,n=t.length,r,o="value"in tn?tn.value:tn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return si=o.slice(e,1<r?1-r:void 0)}function ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Hc(){return!1}function ot(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jo:Hc,this.isPropagationStopped=Hc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=ot(Tr),ko=ye({},Tr,{view:0,detail:0}),ug=ot(ko),Aa,Pa,Lr,ta=ye({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(Aa=e.screenX-Lr.screenX,Pa=e.screenY-Lr.screenY):Pa=Aa=0,Lr=e),Aa)},movementY:function(e){return"movementY"in e?e.movementY:Pa}}),Vc=ot(ta),dg=ye({},ta,{dataTransfer:0}),fg=ot(dg),pg=ye({},ko,{relatedTarget:0}),$a=ot(pg),mg=ye({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=ot(mg),gg=ye({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vg=ot(gg),yg=ye({},Tr,{data:0}),Uc=ot(yg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bg[e])?!!t[e]:!1}function As(){return Cg}var Eg=ye({},ko,{key:function(e){if(e.key){var t=wg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sg=ot(Eg),_g=ye({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wc=ot(_g),kg=ye({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),Tg=ot(kg),Rg=ye({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=ot(Rg),Ng=ye({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=ot(Ng),Pg=[9,13,27,32],Ps=Ft&&"CompositionEvent"in window,Qr=null;Ft&&"documentMode"in document&&(Qr=document.documentMode);var $g=Ft&&"TextEvent"in window&&!Qr,mf=Ft&&(!Ps||Qr&&8<Qr&&11>=Qr),Gc=String.fromCharCode(32),Kc=!1;function hf(e,t){switch(e){case"keyup":return Pg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Ig(e,t){switch(e){case"compositionend":return gf(t);case"keypress":return t.which!==32?null:(Kc=!0,Gc);case"textInput":return e=t.data,e===Gc&&Kc?null:e;default:return null}}function Mg(e,t){if(Jn)return e==="compositionend"||!Ps&&hf(e,t)?(e=pf(),si=Ds=tn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mf&&t.locale!=="ko"?null:t.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Og[e.type]:t==="textarea"}function vf(e,t,n,r){Kd(r),t=Ri(t,"onChange"),0<t.length&&(n=new Ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,co=null;function Lg(e){Rf(e,0)}function na(e){var t=tr(e);if(jd(t))return e}function Fg(e,t){if(e==="change")return t}var yf=!1;if(Ft){var Ia;if(Ft){var Ma="oninput"in document;if(!Ma){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Ma=typeof Qc.oninput=="function"}Ia=Ma}else Ia=!1;yf=Ia&&(!document.documentMode||9<document.documentMode)}function Xc(){Xr&&(Xr.detachEvent("onpropertychange",wf),co=Xr=null)}function wf(e){if(e.propertyName==="value"&&na(co)){var t=[];vf(t,co,e,Ss(e)),Zd(Lg,t)}}function zg(e,t,n){e==="focusin"?(Xc(),Xr=t,co=n,Xr.attachEvent("onpropertychange",wf)):e==="focusout"&&Xc()}function jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return na(co)}function Bg(e,t){if(e==="click")return na(t)}function Hg(e,t){if(e==="input"||e==="change")return na(t)}function Vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Vg;function uo(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!bt(e[o],t[o]))return!1}return!0}function Zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jc(e,t){var n=Zc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zc(n)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bf(){for(var e=window,t=bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bi(e.document)}return t}function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ug(e){var t=bf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xf(n.ownerDocument.documentElement,n)){if(r!==null&&$s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Jc(n,i);var a=Jc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wg=Ft&&"documentMode"in document&&11>=document.documentMode,qn=null,Rl=null,Zr=null,Dl=!1;function qc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||qn==null||qn!==bi(r)||(r=qn,"selectionStart"in r&&$s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&uo(Zr,r)||(Zr=r,r=Ri(Rl,"onSelect"),0<r.length&&(t=new Ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function Bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},Oa={},Cf={};Ft&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ra(e){if(Oa[e])return Oa[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cf)return Oa[e]=t[n];return e}var Ef=ra("animationend"),Sf=ra("animationiteration"),_f=ra("animationstart"),kf=ra("transitionend"),Tf=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,t){Tf.set(e,t),zn(t,[e])}for(var La=0;La<eu.length;La++){var Fa=eu[La],Gg=Fa.toLowerCase(),Kg=Fa[0].toUpperCase()+Fa.slice(1);yn(Gg,"on"+Kg)}yn(Ef,"onAnimationEnd");yn(Sf,"onAnimationIteration");yn(_f,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(kf,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gh(r,t,void 0,e),e.currentTarget=null}function Rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;tu(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;tu(o,l,c),i=s}}}if(Ei)throw e=Sl,Ei=!1,Sl=null,e}function de(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Df(t,e,2,!1),n.add(r))}function za(e,t,n){var r=0;t&&(r|=4),Df(n,e,r,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function fo(e){if(!e[Ho]){e[Ho]=!0,Md.forEach(function(n){n!=="selectionchange"&&(Yg.has(n)||za(n,!1,e),za(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,za("selectionchange",!1,t))}}function Df(e,t,n,r){switch(ff(t)){case 1:var o=sg;break;case 4:o=cg;break;default:o=Rs}n=o.bind(null,t,n,e),o=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ja(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=kn(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Zd(function(){var c=i,f=Ss(n),d=[];e:{var h=Tf.get(e);if(h!==void 0){var y=Ns,w=e;switch(e){case"keypress":if(ci(n)===0)break e;case"keydown":case"keyup":y=Sg;break;case"focusin":w="focus",y=$a;break;case"focusout":w="blur",y=$a;break;case"beforeblur":case"afterblur":y=$a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Tg;break;case Ef:case Sf:case _f:y=hg;break;case kf:y=Dg;break;case"scroll":y=ug;break;case"wheel":y=Ag;break;case"copy":case"cut":case"paste":y=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wc}var v=(t&4)!==0,b=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var u=c,g;u!==null;){g=u;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=io(u,m),x!=null&&v.push(po(u,x,g)))),b)break;u=u.return}0<v.length&&(h=new y(h,w,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==bl&&(w=n.relatedTarget||n.fromElement)&&(kn(w)||w[zt]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?kn(w):null,w!==null&&(b=jn(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(v=Vc,x="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=Wc,x="onPointerLeave",m="onPointerEnter",u="pointer"),b=y==null?h:tr(y),g=w==null?h:tr(w),h=new v(x,u+"leave",y,n,f),h.target=b,h.relatedTarget=g,x=null,kn(f)===c&&(v=new v(m,u+"enter",w,n,f),v.target=g,v.relatedTarget=b,x=v),b=x,y&&w)t:{for(v=y,m=w,u=0,g=v;g;g=Wn(g))u++;for(g=0,x=m;x;x=Wn(x))g++;for(;0<u-g;)v=Wn(v),u--;for(;0<g-u;)m=Wn(m),g--;for(;u--;){if(v===m||m!==null&&v===m.alternate)break t;v=Wn(v),m=Wn(m)}v=null}else v=null;y!==null&&nu(d,h,y,v,!1),w!==null&&b!==null&&nu(d,b,w,v,!0)}}e:{if(h=c?tr(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var C=Fg;else if(Yc(h))if(yf)C=Hg;else{C=jg;var _=zg}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Bg);if(C&&(C=C(e,c))){vf(d,C,n,f);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&gl(h,"number",h.value)}switch(_=c?tr(c):window,e){case"focusin":(Yc(_)||_.contentEditable==="true")&&(qn=_,Rl=c,Zr=null);break;case"focusout":Zr=Rl=qn=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,qc(d,n,f);break;case"selectionchange":if(Wg)break;case"keydown":case"keyup":qc(d,n,f)}var S;if(Ps)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Jn?hf(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(mf&&n.locale!=="ko"&&(Jn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Jn&&(S=pf()):(tn=f,Ds="value"in tn?tn.value:tn.textContent,Jn=!0)),_=Ri(c,k),0<_.length&&(k=new Uc(k,e,null,n,f),d.push({event:k,listeners:_}),S?k.data=S:(S=gf(n),S!==null&&(k.data=S)))),(S=$g?Ig(e,n):Mg(e,n))&&(c=Ri(c,"onBeforeInput"),0<c.length&&(f=new Uc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=S))}Rf(d,t)})}function po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=io(e,n),i!=null&&r.unshift(po(e,i,o)),i=io(e,t),i!=null&&r.push(po(e,i,o))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=io(n,i),s!=null&&a.unshift(po(n,s,l))):o||(s=io(n,i),s!=null&&a.push(po(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(Qg,`
`).replace(Xg,"")}function Vo(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(N(425))}function Di(){}var Nl=null,Al=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $l=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(qg)}:$l;function qg(e){setTimeout(function(){throw e})}function Ba(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),so(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);so(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),kt="__reactFiber$"+Rr,mo="__reactProps$"+Rr,zt="__reactContainer$"+Rr,Il="__reactEvents$"+Rr,ev="__reactListeners$"+Rr,tv="__reactHandles$"+Rr;function kn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[kt])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function To(e){return e=e[kt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function oa(e){return e[mo]||null}var Ml=[],nr=-1;function wn(e){return{current:e}}function fe(e){0>nr||(e.current=Ml[nr],Ml[nr]=null,nr--)}function se(e,t){nr++,Ml[nr]=e.current,e.current=t}var mn={},Fe=wn(mn),Ye=wn(!1),$n=mn;function gr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function Ni(){fe(Ye),fe(Fe)}function au(e,t,n){if(Fe.current!==mn)throw Error(N(168));se(Fe,t),se(Ye,n)}function Nf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,zh(e)||"Unknown",o));return ye({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,$n=Fe.current,se(Fe,e),se(Ye,Ye.current),!0}function lu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Nf(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,fe(Ye),fe(Fe),se(Fe,e)):fe(Ye),se(Ye,n)}var It=null,ia=!1,Ha=!1;function Af(e){It===null?It=[e]:It.push(e)}function nv(e){ia=!0,Af(e)}function xn(){if(!Ha&&It!==null){Ha=!0;var e=0,t=ie;try{var n=It;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,ia=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),tf(_s,xn),o}finally{ie=t,Ha=!1}}return null}var rr=[],or=0,Pi=null,$i=0,at=[],lt=0,In=null,Mt=1,Ot="";function Sn(e,t){rr[or++]=$i,rr[or++]=Pi,Pi=e,$i=t}function Pf(e,t,n){at[lt++]=Mt,at[lt++]=Ot,at[lt++]=In,In=e;var r=Mt;e=Ot;var o=32-wt(r)-1;r&=~(1<<o),n+=1;var i=32-wt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Mt=1<<32-wt(t)+o|n<<o|r,Ot=i+e}else Mt=1<<i|n<<o|r,Ot=e}function Is(e){e.return!==null&&(Sn(e,1),Pf(e,1,0))}function Ms(e){for(;e===Pi;)Pi=rr[--or],rr[or]=null,$i=rr[--or],rr[or]=null;for(;e===In;)In=at[--lt],at[lt]=null,Ot=at[--lt],at[lt]=null,Mt=at[--lt],at[lt]=null}var et=null,qe=null,me=!1,yt=null;function $f(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,qe=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Mt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,qe=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(me){var t=qe;if(t){var n=t;if(!su(e,t)){if(Ol(e))throw Error(N(418));t=sn(n.nextSibling);var r=et;t&&su(e,t)?$f(r,n):(e.flags=e.flags&-4097|2,me=!1,et=e)}}else{if(Ol(e))throw Error(N(418));e.flags=e.flags&-4097|2,me=!1,et=e}}}function cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Uo(e){if(e!==et)return!1;if(!me)return cu(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=qe)){if(Ol(e))throw If(),Error(N(418));for(;t;)$f(e,t),t=sn(t.nextSibling)}if(cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=et?sn(e.stateNode.nextSibling):null;return!0}function If(){for(var e=qe;e;)e=sn(e.nextSibling)}function vr(){qe=et=null,me=!1}function Os(e){yt===null?yt=[e]:yt.push(e)}var rv=Wt.ReactCurrentBatchConfig;function gt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ii=wn(null),Mi=null,ir=null,Ls=null;function Fs(){Ls=ir=Mi=null}function zs(e){var t=Ii.current;fe(Ii),e._currentValue=t}function Fl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){Mi=e,Ls=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Ls!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Mi===null)throw Error(N(308));ir=e,Mi.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Tn=null;function js(e){Tn===null?Tn=[e]:Tn.push(e)}function Mf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,js(t)):(n.next=o.next,o.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Of(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jt(e,n)}return o=r.interleaved,o===null?(t.next=t,js(r)):(t.next=o.next,o.next=t),r.interleaved=t,jt(e,n)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}function uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oi(e,t,n,r){var o=e.updateQueue;Jt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,f=c=s=null,l=i;do{var h=l.lane,y=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(h=t,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(y,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,h=typeof w=="function"?w.call(y,d,h):w,h==null)break e;d=ye({},d,h);break e;case 2:Jt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=y,s=d):f=f.next=y,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(f===null&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);On|=a,e.lanes=a,e.memoizedState=d}}function du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var Lf=new Id.Component().refs;function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var aa={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),o=dn(e),i=Lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=cn(e,i,o),t!==null&&(xt(t,e,o,r),ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),o=dn(e),i=Lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=cn(e,i,o),t!==null&&(xt(t,e,o,r),ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=dn(e),o=Lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=cn(e,o,r),t!==null&&(xt(t,e,r,n),ui(t,e,r))}};function fu(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(o,i):!0}function Ff(e,t,n){var r=!1,o=mn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(o=Qe(t)?$n:Fe.current,r=t.contextTypes,i=(r=r!=null)?gr(e,o):mn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&aa.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Lf,Bs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dt(i):(i=Qe(t)?$n:Fe.current,o.context=gr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&aa.enqueueReplaceState(o,o.state,null),Oi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===Lf&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Wo(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function zf(e){function t(m,u){if(e){var g=m.deletions;g===null?(m.deletions=[u],m.flags|=16):g.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function r(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function o(m,u){return m=fn(m,u),m.index=0,m.sibling=null,m}function i(m,u,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<u?(m.flags|=2,u):g):(m.flags|=2,u)):(m.flags|=1048576,u)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,g,x){return u===null||u.tag!==6?(u=Qa(g,m.mode,x),u.return=m,u):(u=o(u,g),u.return=m,u)}function s(m,u,g,x){var C=g.type;return C===Zn?f(m,u,g.props.children,x,g.key):u!==null&&(u.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&mu(C)===u.type)?(x=o(u,g.props),x.ref=Fr(m,u,g),x.return=m,x):(x=gi(g.type,g.key,g.props,null,m.mode,x),x.ref=Fr(m,u,g),x.return=m,x)}function c(m,u,g,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=Xa(g,m.mode,x),u.return=m,u):(u=o(u,g.children||[]),u.return=m,u)}function f(m,u,g,x,C){return u===null||u.tag!==7?(u=An(g,m.mode,x,C),u.return=m,u):(u=o(u,g),u.return=m,u)}function d(m,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Qa(""+u,m.mode,g),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Io:return g=gi(u.type,u.key,u.props,null,m.mode,g),g.ref=Fr(m,null,u),g.return=m,g;case Xn:return u=Xa(u,m.mode,g),u.return=m,u;case Zt:var x=u._init;return d(m,x(u._payload),g)}if(Ur(u)||$r(u))return u=An(u,m.mode,g,null),u.return=m,u;Wo(m,u)}return null}function h(m,u,g,x){var C=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,u,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:return g.key===C?s(m,u,g,x):null;case Xn:return g.key===C?c(m,u,g,x):null;case Zt:return C=g._init,h(m,u,C(g._payload),x)}if(Ur(g)||$r(g))return C!==null?null:f(m,u,g,x,null);Wo(m,g)}return null}function y(m,u,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,l(u,m,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Io:return m=m.get(x.key===null?g:x.key)||null,s(u,m,x,C);case Xn:return m=m.get(x.key===null?g:x.key)||null,c(u,m,x,C);case Zt:var _=x._init;return y(m,u,g,_(x._payload),C)}if(Ur(x)||$r(x))return m=m.get(g)||null,f(u,m,x,C,null);Wo(u,x)}return null}function w(m,u,g,x){for(var C=null,_=null,S=u,k=u=0,I=null;S!==null&&k<g.length;k++){S.index>k?(I=S,S=null):I=S.sibling;var M=h(m,S,g[k],x);if(M===null){S===null&&(S=I);break}e&&S&&M.alternate===null&&t(m,S),u=i(M,u,k),_===null?C=M:_.sibling=M,_=M,S=I}if(k===g.length)return n(m,S),me&&Sn(m,k),C;if(S===null){for(;k<g.length;k++)S=d(m,g[k],x),S!==null&&(u=i(S,u,k),_===null?C=S:_.sibling=S,_=S);return me&&Sn(m,k),C}for(S=r(m,S);k<g.length;k++)I=y(S,m,k,g[k],x),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?k:I.key),u=i(I,u,k),_===null?C=I:_.sibling=I,_=I);return e&&S.forEach(function(z){return t(m,z)}),me&&Sn(m,k),C}function v(m,u,g,x){var C=$r(g);if(typeof C!="function")throw Error(N(150));if(g=C.call(g),g==null)throw Error(N(151));for(var _=C=null,S=u,k=u=0,I=null,M=g.next();S!==null&&!M.done;k++,M=g.next()){S.index>k?(I=S,S=null):I=S.sibling;var z=h(m,S,M.value,x);if(z===null){S===null&&(S=I);break}e&&S&&z.alternate===null&&t(m,S),u=i(z,u,k),_===null?C=z:_.sibling=z,_=z,S=I}if(M.done)return n(m,S),me&&Sn(m,k),C;if(S===null){for(;!M.done;k++,M=g.next())M=d(m,M.value,x),M!==null&&(u=i(M,u,k),_===null?C=M:_.sibling=M,_=M);return me&&Sn(m,k),C}for(S=r(m,S);!M.done;k++,M=g.next())M=y(S,m,k,M.value,x),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?k:M.key),u=i(M,u,k),_===null?C=M:_.sibling=M,_=M);return e&&S.forEach(function(L){return t(m,L)}),me&&Sn(m,k),C}function b(m,u,g,x){if(typeof g=="object"&&g!==null&&g.type===Zn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:e:{for(var C=g.key,_=u;_!==null;){if(_.key===C){if(C=g.type,C===Zn){if(_.tag===7){n(m,_.sibling),u=o(_,g.props.children),u.return=m,m=u;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&mu(C)===_.type){n(m,_.sibling),u=o(_,g.props),u.ref=Fr(m,_,g),u.return=m,m=u;break e}n(m,_);break}else t(m,_);_=_.sibling}g.type===Zn?(u=An(g.props.children,m.mode,x,g.key),u.return=m,m=u):(x=gi(g.type,g.key,g.props,null,m.mode,x),x.ref=Fr(m,u,g),x.return=m,m=x)}return a(m);case Xn:e:{for(_=g.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){n(m,u.sibling),u=o(u,g.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=Xa(g,m.mode,x),u.return=m,m=u}return a(m);case Zt:return _=g._init,b(m,u,_(g._payload),x)}if(Ur(g))return w(m,u,g,x);if($r(g))return v(m,u,g,x);Wo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(n(m,u.sibling),u=o(u,g),u.return=m,m=u):(n(m,u),u=Qa(g,m.mode,x),u.return=m,m=u),a(m)):n(m,u)}return b}var yr=zf(!0),jf=zf(!1),Ro={},Rt=wn(Ro),ho=wn(Ro),go=wn(Ro);function Rn(e){if(e===Ro)throw Error(N(174));return e}function Hs(e,t){switch(se(go,t),se(ho,e),se(Rt,Ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yl(t,e)}fe(Rt),se(Rt,t)}function wr(){fe(Rt),fe(ho),fe(go)}function Bf(e){Rn(go.current);var t=Rn(Rt.current),n=yl(t,e.type);t!==n&&(se(ho,e),se(Rt,n))}function Vs(e){ho.current===e&&(fe(Rt),fe(ho))}var ge=wn(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Va=[];function Us(){for(var e=0;e<Va.length;e++)Va[e]._workInProgressVersionPrimary=null;Va.length=0}var di=Wt.ReactCurrentDispatcher,Ua=Wt.ReactCurrentBatchConfig,Mn=0,ve=null,Se=null,Te=null,Fi=!1,Jr=!1,vo=0,ov=0;function Me(){throw Error(N(321))}function Ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Gs(e,t,n,r,o,i){if(Mn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=e===null||e.memoizedState===null?sv:cv,e=n(r,o),Jr){i=0;do{if(Jr=!1,vo=0,25<=i)throw Error(N(301));i+=1,Te=Se=null,t.updateQueue=null,di.current=uv,e=n(r,o)}while(Jr)}if(di.current=zi,t=Se!==null&&Se.next!==null,Mn=0,Te=Se=ve=null,Fi=!1,t)throw Error(N(300));return e}function Ks(){var e=vo!==0;return vo=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ve.memoizedState=Te=e:Te=Te.next=e,Te}function ft(){if(Se===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Te===null?ve.memoizedState:Te.next;if(t!==null)Te=t,Se=e;else{if(e===null)throw Error(N(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Te===null?ve.memoizedState=Te=e:Te=Te.next=e}return Te}function yo(e,t){return typeof t=="function"?t(e):t}function Wa(e){var t=ft(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var f=c.lane;if((Mn&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ve.lanes|=f,On|=f}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,bt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,On|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ga(e){var t=ft(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);bt(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Hf(){}function Vf(e,t){var n=ve,r=ft(),o=t(),i=!bt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ke=!0),r=r.queue,Ys(Gf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,wo(9,Wf.bind(null,n,r,o,t),void 0,null),Re===null)throw Error(N(349));Mn&30||Uf(n,t,o)}return o}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wf(e,t,n,r){t.value=n,t.getSnapshot=r,Kf(t)&&Yf(e)}function Gf(e,t,n){return n(function(){Kf(t)&&Yf(e)})}function Kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function Yf(e){var t=jt(e,1);t!==null&&xt(t,e,1,-1)}function hu(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=lv.bind(null,ve,e),[t.memoizedState,e]}function wo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qf(){return ft().memoizedState}function fi(e,t,n,r){var o=_t();ve.flags|=e,o.memoizedState=wo(1|t,n,void 0,r===void 0?null:r)}function la(e,t,n,r){var o=ft();r=r===void 0?null:r;var i=void 0;if(Se!==null){var a=Se.memoizedState;if(i=a.destroy,r!==null&&Ws(r,a.deps)){o.memoizedState=wo(t,n,i,r);return}}ve.flags|=e,o.memoizedState=wo(1|t,n,i,r)}function gu(e,t){return fi(8390656,8,e,t)}function Ys(e,t){return la(2048,8,e,t)}function Xf(e,t){return la(4,2,e,t)}function Zf(e,t){return la(4,4,e,t)}function Jf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qf(e,t,n){return n=n!=null?n.concat([e]):null,la(4,4,Jf.bind(null,t,e),n)}function Qs(){}function ep(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ws(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function np(e,t,n){return Mn&21?(bt(n,t)||(n=of(),ve.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function iv(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=Ua.transition;Ua.transition={};try{e(!1),t()}finally{ie=n,Ua.transition=r}}function rp(){return ft().memoizedState}function av(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},op(e))ip(t,n);else if(n=Mf(e,t,n,r),n!==null){var o=He();xt(n,e,r,o),ap(n,t,r)}}function lv(e,t,n){var r=dn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(op(e))ip(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,bt(l,a)){var s=t.interleaved;s===null?(o.next=o,js(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Mf(e,t,o,r),n!==null&&(o=He(),xt(n,e,r,o),ap(n,t,r))}}function op(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function ip(e,t){Jr=Fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ap(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}var zi={readContext:dt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},sv={readContext:dt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fi(4194308,4,Jf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return fi(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=av.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:hu,useDebugValue:Qs,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=hu(!1),t=e[0];return e=iv.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=_t();if(me){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Re===null)throw Error(N(349));Mn&30||Uf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,gu(Gf.bind(null,r,i,e),[e]),r.flags|=2048,wo(9,Wf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=_t(),t=Re.identifierPrefix;if(me){var n=Ot,r=Mt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ov++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cv={readContext:dt,useCallback:ep,useContext:dt,useEffect:Ys,useImperativeHandle:qf,useInsertionEffect:Xf,useLayoutEffect:Zf,useMemo:tp,useReducer:Wa,useRef:Qf,useState:function(){return Wa(yo)},useDebugValue:Qs,useDeferredValue:function(e){var t=ft();return np(t,Se.memoizedState,e)},useTransition:function(){var e=Wa(yo)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:rp,unstable_isNewReconciler:!1},uv={readContext:dt,useCallback:ep,useContext:dt,useEffect:Ys,useImperativeHandle:qf,useInsertionEffect:Xf,useLayoutEffect:Zf,useMemo:tp,useReducer:Ga,useRef:Qf,useState:function(){return Ga(yo)},useDebugValue:Qs,useDeferredValue:function(e){var t=ft();return Se===null?t.memoizedState=e:np(t,Se.memoizedState,e)},useTransition:function(){var e=Ga(yo)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:rp,unstable_isNewReconciler:!1};function xr(e,t){try{var n="",r=t;do n+=Fh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function lp(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bi||(Bi=!0,Zl=r),Bl(e,t)},n}function sp(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_v.bind(null,e,t,n),t.then(e,e))}function yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,cn(n,t,1))),n.lanes|=1),e)}var fv=Wt.ReactCurrentOwner,Ke=!1;function Be(e,t,n,r){t.child=e===null?jf(t,null,n,r):yr(t,e.child,n,r)}function xu(e,t,n,r,o){n=n.render;var i=t.ref;return fr(t,o),r=Gs(e,t,n,r,i,o),n=Ks(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(me&&n&&Is(t),t.flags|=1,Be(e,t,r,o),t.child)}function bu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!rc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,cp(e,t,i,r,o)):(e=gi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(a,r)&&e.ref===t.ref)return Bt(e,t,o)}return t.flags|=1,e=fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function cp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(uo(i,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Bt(e,t,o)}return Hl(e,t,n,r,o)}function up(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(lr,Ze),Ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(lr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,se(lr,Ze),Ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,se(lr,Ze),Ze|=r;return Be(e,t,o,n),t.child}function dp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hl(e,t,n,r,o){var i=Qe(n)?$n:Fe.current;return i=gr(t,i),fr(t,o),n=Gs(e,t,n,r,i,o),r=Ks(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Bt(e,t,o)):(me&&r&&Is(t),t.flags|=1,Be(e,t,n,o),t.child)}function Cu(e,t,n,r,o){if(Qe(n)){var i=!0;Ai(t)}else i=!1;if(fr(t,o),t.stateNode===null)pi(e,t),Ff(t,n,r),jl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Qe(n)?$n:Fe.current,c=gr(t,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&pu(t,a,r,c),Jt=!1;var h=t.memoizedState;a.state=h,Oi(t,r,a,o),s=t.memoizedState,l!==r||h!==s||Ye.current||Jt?(typeof f=="function"&&(zl(t,n,f,r),s=t.memoizedState),(l=Jt||fu(t,n,l,r,h,s,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Of(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:gt(t.type,l),a.props=c,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=dt(s):(s=Qe(n)?$n:Fe.current,s=gr(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&pu(t,a,r,s),Jt=!1,h=t.memoizedState,a.state=h,Oi(t,r,a,o);var w=t.memoizedState;l!==d||h!==w||Ye.current||Jt?(typeof y=="function"&&(zl(t,n,y,r),w=t.memoizedState),(c=Jt||fu(t,n,c,r,h,w,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,i,o)}function Vl(e,t,n,r,o,i){dp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&lu(t,n,!1),Bt(e,t,i);r=t.stateNode,fv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yr(t,e.child,null,i),t.child=yr(t,null,l,i)):Be(e,t,l,i),t.memoizedState=r.state,o&&lu(t,n,!0),t.child}function fp(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),Hs(e,t.containerInfo)}function Eu(e,t,n,r,o){return vr(),Os(o),t.flags|=256,Be(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pp(e,t,n){var r=t.pendingProps,o=ge.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(ge,o&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ua(a,r,0,null),e=An(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wl(n),t.memoizedState=Ul,e):Xs(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return pv(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=fn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=fn(l,i):(i=An(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Wl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return i=e.child,e=i.sibling,r=fn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xs(e,t){return t=ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Go(e,t,n,r){return r!==null&&Os(r),yr(t,e.child,null,n),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pv(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ka(Error(N(422))),Go(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ua({mode:"visible",children:r.children},o,0,null),i=An(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yr(t,e.child,null,a),t.child.memoizedState=Wl(a),t.memoizedState=Ul,i);if(!(t.mode&1))return Go(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=Ka(i,r,void 0),Go(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ke||l){if(r=Re,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jt(e,o),xt(r,e,o,-1))}return nc(),r=Ka(Error(N(421))),Go(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=kv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qe=sn(o.nextSibling),et=t,me=!0,yt=null,e!==null&&(at[lt++]=Mt,at[lt++]=Ot,at[lt++]=In,Mt=e.id,Ot=e.overflow,In=t),t=Xs(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fl(e.return,t,n)}function Ya(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Be(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ge,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ya(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ya(t,!0,n,null,i);break;case"together":Ya(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mv(e,t,n){switch(t.tag){case 3:fp(t),vr();break;case 5:Bf(t);break;case 1:Qe(t.type)&&Ai(t);break;case 4:Hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(Ii,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?pp(e,t,n):(se(ge,ge.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,up(e,t,n)}return Bt(e,t,n)}var hp,Gl,gp,vp;hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};gp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Rn(Rt.current);var i=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),i=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":o=vl(e,o),r=vl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}wl(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&de("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};vp=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hv(e,t,n){var r=t.pendingProps;switch(Ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Qe(t.type)&&Ni(),Oe(t),null;case 3:return r=t.stateNode,wr(),fe(Ye),fe(Fe),Us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(es(yt),yt=null))),Gl(e,t),Oe(t),null;case 5:Vs(t);var o=Rn(go.current);if(n=t.type,e!==null&&t.stateNode!=null)gp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Oe(t),null}if(e=Rn(Rt.current),Uo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[mo]=i,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(o=0;o<Gr.length;o++)de(Gr[o],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":$c(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":Mc(r,i),de("invalid",r)}wl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Vo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Vo(r.textContent,l,e),o=["children",""+l]):ro.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":Mo(r),Ic(r,i,!0);break;case"textarea":Mo(r),Oc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Di)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kt]=t,e[mo]=r,hp(e,t,!1,!1),t.stateNode=e;e:{switch(a=xl(n,r),n){case"dialog":de("cancel",e),de("close",e),o=r;break;case"iframe":case"object":case"embed":de("load",e),o=r;break;case"video":case"audio":for(o=0;o<Gr.length;o++)de(Gr[o],e);o=r;break;case"source":de("error",e),o=r;break;case"img":case"image":case"link":de("error",e),de("load",e),o=r;break;case"details":de("toggle",e),o=r;break;case"input":$c(e,r),o=ml(e,r),de("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),de("invalid",e);break;case"textarea":Mc(e,r),o=vl(e,r),de("invalid",e);break;default:o=r}wl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Gd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ud(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&oo(e,s):typeof s=="number"&&oo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ro.hasOwnProperty(i)?s!=null&&i==="onScroll"&&de("scroll",e):s!=null&&xs(e,i,s,a))}switch(n){case"input":Mo(e),Ic(e,r,!1);break;case"textarea":Mo(e),Oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?sr(e,!!r.multiple,i,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)vp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Rn(go.current),Rn(Rt.current),Uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Oe(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&qe!==null&&t.mode&1&&!(t.flags&128))If(),vr(),t.flags|=98560,i=!1;else if(i=Uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[kt]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else yt!==null&&(es(yt),yt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?_e===0&&(_e=3):nc())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return wr(),Gl(e,t),e===null&&fo(t.stateNode.containerInfo),Oe(t),null;case 10:return zs(t.type._context),Oe(t),null;case 17:return Qe(t.type)&&Ni(),Oe(t),null;case 19:if(fe(ge),i=t.memoizedState,i===null)return Oe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)zr(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Li(e),a!==null){for(t.flags|=128,zr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>br&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Li(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!me)return Oe(t),null}else 2*be()-i.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,zr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return tc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function gv(e,t){switch(Ms(t),t.tag){case 1:return Qe(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),fe(Ye),fe(Fe),Us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return wr(),null;case 10:return zs(t.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var Ko=!1,Le=!1,vv=typeof WeakSet=="function"?WeakSet:Set,O=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){we(e,t,r)}}var _u=!1;function yv(e,t){if(Nl=ki,e=bf(),$s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,c=0,f=0,d=e,h=null;t:for(;;){for(var y;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===e)break t;if(h===n&&++c===o&&(l=a),h===i&&++f===r&&(s=a),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},ki=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,b=w.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:gt(t.type,v),b);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){we(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=_u,_u=!1,w}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Kl(t,n,i)}o=o.next}while(o!==r)}}function sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yp(e){var t=e.alternate;t!==null&&(e.alternate=null,yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[mo],delete t[Il],delete t[ev],delete t[tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wp(e){return e.tag===5||e.tag===3||e.tag===4}function ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var Ne=null,vt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)xp(e,t,n),n=n.sibling}function xp(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 5:Le||ar(n,t);case 6:var r=Ne,o=vt;Ne=null,Yt(e,t,n),Ne=r,vt=o,Ne!==null&&(vt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(vt?(e=Ne,n=n.stateNode,e.nodeType===8?Ba(e.parentNode,n):e.nodeType===1&&Ba(e,n),so(e)):Ba(Ne,n.stateNode));break;case 4:r=Ne,o=vt,Ne=n.stateNode.containerInfo,vt=!0,Yt(e,t,n),Ne=r,vt=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Kl(n,t,a),o=o.next}while(o!==r)}Yt(e,t,n);break;case 1:if(!Le&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,t,l)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Yt(e,t,n),Le=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function Tu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vv),t.forEach(function(r){var o=Tv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,vt=!1;break e;case 3:Ne=l.stateNode.containerInfo,vt=!0;break e;case 4:Ne=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(Ne===null)throw Error(N(160));xp(i,a,o),Ne=null,vt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){we(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bp(t,e),t=t.sibling}function bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Et(e),r&4){try{qr(3,e,e.return),sa(3,e)}catch(v){we(e,e.return,v)}try{qr(5,e,e.return)}catch(v){we(e,e.return,v)}}break;case 1:mt(t,e),Et(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(mt(t,e),Et(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var o=e.stateNode;try{oo(o,"")}catch(v){we(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Bd(o,i),xl(l,a);var c=xl(l,i);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Gd(o,d):f==="dangerouslySetInnerHTML"?Ud(o,d):f==="children"?oo(o,d):xs(o,f,d,c)}switch(l){case"input":hl(o,i);break;case"textarea":Hd(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?sr(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?sr(o,!!i.multiple,i.defaultValue,!0):sr(o,!!i.multiple,i.multiple?[]:"",!1))}o[mo]=i}catch(v){we(e,e.return,v)}}break;case 6:if(mt(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){we(e,e.return,v)}}break;case 3:if(mt(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(v){we(e,e.return,v)}break;case 4:mt(t,e),Et(e);break;case 13:mt(t,e),Et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(qs=be())),r&4&&Tu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||f,mt(t,e),Le=c):mt(t,e),Et(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(d=O=f;O!==null;){switch(h=O,y=h.child,h.tag){case 0:case 11:case 14:case 15:qr(4,h,h.return);break;case 1:ar(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){we(r,n,v)}}break;case 5:ar(h,h.return);break;case 22:if(h.memoizedState!==null){Du(d);continue}}y!==null?(y.return=h,O=y):Du(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Wd("display",a))}catch(v){we(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){we(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(t,e),Et(e),r&4&&Tu(e);break;case 21:break;default:mt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wp(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(oo(o,""),r.flags&=-33);var i=ku(e);Xl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ku(e);Ql(e,l,a);break;default:throw Error(N(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wv(e,t,n){O=e,Cp(e)}function Cp(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ko;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Le;l=Ko;var c=Le;if(Ko=a,(Le=s)&&!c)for(O=o;O!==null;)a=O,s=a.child,a.tag===22&&a.memoizedState!==null?Nu(o):s!==null?(s.return=a,O=s):Nu(o);for(;i!==null;)O=i,Cp(i),i=i.sibling;O=o,Ko=l,Le=c}Ru(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):Ru(e)}}function Ru(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&du(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}du(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&so(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Le||t.flags&512&&Yl(t)}catch(h){we(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Du(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Nu(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sa(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){we(t,o,s)}}var i=t.return;try{Yl(t)}catch(s){we(t,i,s)}break;case 5:var a=t.return;try{Yl(t)}catch(s){we(t,a,s)}}}catch(s){we(t,t.return,s)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var xv=Math.ceil,ji=Wt.ReactCurrentDispatcher,Zs=Wt.ReactCurrentOwner,ut=Wt.ReactCurrentBatchConfig,q=0,Re=null,Ee=null,Ae=0,Ze=0,lr=wn(0),_e=0,xo=null,On=0,ca=0,Js=0,eo=null,Ge=null,qs=0,br=1/0,Pt=null,Bi=!1,Zl=null,un=null,Yo=!1,nn=null,Hi=0,to=0,Jl=null,mi=-1,hi=0;function He(){return q&6?be():mi!==-1?mi:mi=be()}function dn(e){return e.mode&1?q&2&&Ae!==0?Ae&-Ae:rv.transition!==null?(hi===0&&(hi=of()),hi):(e=ie,e!==0||(e=window.event,e=e===void 0?16:ff(e.type)),e):1}function xt(e,t,n,r){if(50<to)throw to=0,Jl=null,Error(N(185));_o(e,n,r),(!(q&2)||e!==Re)&&(e===Re&&(!(q&2)&&(ca|=n),_e===4&&en(e,Ae)),Xe(e,r),n===1&&q===0&&!(t.mode&1)&&(br=be()+500,ia&&xn()))}function Xe(e,t){var n=e.callbackNode;rg(e,t);var r=_i(e,e===Re?Ae:0);if(r===0)n!==null&&zc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zc(n),t===1)e.tag===0?nv(Au.bind(null,e)):Af(Au.bind(null,e)),Jg(function(){!(q&6)&&xn()}),n=null;else{switch(af(r)){case 1:n=_s;break;case 4:n=nf;break;case 16:n=Si;break;case 536870912:n=rf;break;default:n=Si}n=Np(n,Ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ep(e,t){if(mi=-1,hi=0,q&6)throw Error(N(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=_i(e,e===Re?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vi(e,r);else{t=r;var o=q;q|=2;var i=_p();(Re!==e||Ae!==t)&&(Pt=null,br=be()+500,Nn(e,t));do try{Ev();break}catch(l){Sp(e,l)}while(1);Fs(),ji.current=i,q=o,Ee!==null?t=0:(Re=null,Ae=0,t=_e)}if(t!==0){if(t===2&&(o=_l(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=xo,Nn(e,0),en(e,r),Xe(e,be()),n;if(t===6)en(e,r);else{if(o=e.current.alternate,!(r&30)&&!bv(o)&&(t=Vi(e,r),t===2&&(i=_l(e),i!==0&&(r=i,t=ql(e,i))),t===1))throw n=xo,Nn(e,0),en(e,r),Xe(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:_n(e,Ge,Pt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=qs+500-be(),10<t)){if(_i(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$l(_n.bind(null,e,Ge,Pt),t);break}_n(e,Ge,Pt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-wt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xv(r/1960))-r,10<r){e.timeoutHandle=$l(_n.bind(null,e,Ge,Pt),r);break}_n(e,Ge,Pt);break;case 5:_n(e,Ge,Pt);break;default:throw Error(N(329))}}}return Xe(e,be()),e.callbackNode===n?Ep.bind(null,e):null}function ql(e,t){var n=eo;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Vi(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&es(t)),e}function es(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function bv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!bt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Js,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function Au(e){if(q&6)throw Error(N(327));pr();var t=_i(e,0);if(!(t&1))return Xe(e,be()),null;var n=Vi(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=xo,Nn(e,0),en(e,t),Xe(e,be()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_n(e,Ge,Pt),Xe(e,be()),null}function ec(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(br=be()+500,ia&&xn())}}function Ln(e){nn!==null&&nn.tag===0&&!(q&6)&&pr();var t=q;q|=1;var n=ut.transition,r=ie;try{if(ut.transition=null,ie=1,e)return e()}finally{ie=r,ut.transition=n,q=t,!(q&6)&&xn()}}function tc(){Ze=lr.current,fe(lr)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zg(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ni();break;case 3:wr(),fe(Ye),fe(Fe),Us();break;case 5:Vs(r);break;case 4:wr();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:zs(r.type._context);break;case 22:case 23:tc()}n=n.return}if(Re=e,Ee=e=fn(e.current,null),Ae=Ze=t,_e=0,xo=null,Js=ca=On=0,Ge=eo=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Tn=null}return e}function Sp(e,t){do{var n=Ee;try{if(Fs(),di.current=zi,Fi){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fi=!1}if(Mn=0,Te=Se=ve=null,Jr=!1,vo=0,Zs.current=null,n===null||n.return===null){_e=1,xo=t,Ee=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Ae,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=yu(a);if(y!==null){y.flags&=-257,wu(y,a,l,i,t),y.mode&1&&vu(i,c,t),t=y,s=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(s),t.updateQueue=v}else w.add(s);break e}else{if(!(t&1)){vu(i,c,t),nc();break e}s=Error(N(426))}}else if(me&&l.mode&1){var b=yu(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),wu(b,a,l,i,t),Os(xr(s,l));break e}}i=s=xr(s,l),_e!==4&&(_e=2),eo===null?eo=[i]:eo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=lp(i,s,t);uu(i,m);break e;case 1:l=s;var u=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(un===null||!un.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=sp(i,l,t);uu(i,x);break e}}i=i.return}while(i!==null)}Tp(n)}catch(C){t=C,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function _p(){var e=ji.current;return ji.current=zi,e===null?zi:e}function nc(){(_e===0||_e===3||_e===2)&&(_e=4),Re===null||!(On&268435455)&&!(ca&268435455)||en(Re,Ae)}function Vi(e,t){var n=q;q|=2;var r=_p();(Re!==e||Ae!==t)&&(Pt=null,Nn(e,t));do try{Cv();break}catch(o){Sp(e,o)}while(1);if(Fs(),q=n,ji.current=r,Ee!==null)throw Error(N(261));return Re=null,Ae=0,_e}function Cv(){for(;Ee!==null;)kp(Ee)}function Ev(){for(;Ee!==null&&!Yh();)kp(Ee)}function kp(e){var t=Dp(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Tp(e):Ee=t,Zs.current=null}function Tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gv(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ee=null;return}}else if(n=hv(n,t,Ze),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);_e===0&&(_e=5)}function _n(e,t,n){var r=ie,o=ut.transition;try{ut.transition=null,ie=1,Sv(e,t,n,r)}finally{ut.transition=o,ie=r}return null}function Sv(e,t,n,r){do pr();while(nn!==null);if(q&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(og(e,i),e===Re&&(Ee=Re=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yo||(Yo=!0,Np(Si,function(){return pr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var a=ie;ie=1;var l=q;q|=4,Zs.current=null,yv(e,n),bp(n,e),Ug(Al),ki=!!Nl,Al=Nl=null,e.current=n,wv(n),Qh(),q=l,ie=a,ut.transition=i}else e.current=n;if(Yo&&(Yo=!1,nn=e,Hi=o),i=e.pendingLanes,i===0&&(un=null),Jh(n.stateNode),Xe(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Bi)throw Bi=!1,e=Zl,Zl=null,e;return Hi&1&&e.tag!==0&&pr(),i=e.pendingLanes,i&1?e===Jl?to++:(to=0,Jl=e):to=0,xn(),null}function pr(){if(nn!==null){var e=af(Hi),t=ut.transition,n=ie;try{if(ut.transition=null,ie=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Hi=0,q&6)throw Error(N(331));var o=q;for(q|=4,O=e.current;O!==null;){var i=O,a=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(O=c;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:qr(8,f,i)}var d=f.child;if(d!==null)d.return=f,O=d;else for(;O!==null;){f=O;var h=f.sibling,y=f.return;if(yp(f),f===c){O=null;break}if(h!==null){h.return=y,O=h;break}O=y}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}O=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,O=a;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var u=e.current;for(O=u;O!==null;){a=O;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,O=g;else e:for(a=u;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:sa(9,l)}}catch(C){we(l,l.return,C)}if(l===a){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(q=o,xn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ea,e)}catch{}r=!0}return r}finally{ie=n,ut.transition=t}}return!1}function Pu(e,t,n){t=xr(n,t),t=lp(e,t,1),e=cn(e,t,1),t=He(),e!==null&&(_o(e,1,t),Xe(e,t))}function we(e,t,n){if(e.tag===3)Pu(e,e,n);else for(;t!==null;){if(t.tag===3){Pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=xr(n,e),e=sp(t,e,1),t=cn(t,e,1),e=He(),t!==null&&(_o(t,1,e),Xe(t,e));break}}t=t.return}}function _v(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ae&n)===n&&(_e===4||_e===3&&(Ae&130023424)===Ae&&500>be()-qs?Nn(e,0):Js|=n),Xe(e,t)}function Rp(e,t){t===0&&(e.mode&1?(t=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):t=1);var n=He();e=jt(e,t),e!==null&&(_o(e,t,n),Xe(e,n))}function kv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function Tv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Rp(e,n)}var Dp;Dp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,mv(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,me&&t.flags&1048576&&Pf(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pi(e,t),e=t.pendingProps;var o=gr(t,Fe.current);fr(t,n),o=Gs(null,t,r,e,o,n);var i=Ks();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,Ai(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bs(t),o.updater=aa,t.stateNode=o,o._reactInternals=t,jl(t,r,e,n),t=Vl(null,t,r,!0,i,n)):(t.tag=0,me&&i&&Is(t),Be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Dv(r),e=gt(r,e),o){case 0:t=Hl(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=xu(null,t,r,e,n);break e;case 14:t=bu(null,t,r,gt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Hl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Cu(e,t,r,o,n);case 3:e:{if(fp(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Of(e,t),Oi(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=xr(Error(N(423)),t),t=Eu(e,t,r,n,o);break e}else if(r!==o){o=xr(Error(N(424)),t),t=Eu(e,t,r,n,o);break e}else for(qe=sn(t.stateNode.containerInfo.firstChild),et=t,me=!0,yt=null,n=jf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===o){t=Bt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Bf(t),e===null&&Ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Pl(r,o)?a=null:i!==null&&Pl(r,i)&&(t.flags|=32),dp(e,t),Be(e,t,a,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return pp(e,t,n);case 4:return Hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),xu(e,t,r,o,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,se(Ii,r._currentValue),r._currentValue=a,i!==null)if(bt(i.value,a)){if(i.children===o.children&&!Ye.current){t=Bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Lt(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Fl(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(N(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Fl(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fr(t,n),o=dt(o),r=r(o),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,o=gt(r,t.pendingProps),o=gt(r.type,o),bu(e,t,r,o,n);case 15:return cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),pi(e,t),t.tag=1,Qe(r)?(e=!0,Ai(t)):e=!1,fr(t,n),Ff(t,r,o),jl(t,r,o,n),Vl(null,t,r,!0,e,n);case 19:return mp(e,t,n);case 22:return up(e,t,n)}throw Error(N(156,t.tag))};function Np(e,t){return tf(e,t)}function Rv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new Rv(e,t,n,r)}function rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dv(e){if(typeof e=="function")return rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cs)return 11;if(e===Es)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")rc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Zn:return An(n.children,o,i,t);case bs:a=8,o|=8;break;case ul:return e=ct(12,n,t,o|2),e.elementType=ul,e.lanes=i,e;case dl:return e=ct(13,n,t,o),e.elementType=dl,e.lanes=i,e;case fl:return e=ct(19,n,t,o),e.elementType=fl,e.lanes=i,e;case Fd:return ua(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Od:a=10;break e;case Ld:a=9;break e;case Cs:a=11;break e;case Es:a=14;break e;case Zt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ct(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function An(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function ua(e,t,n,r){return e=ct(22,e,r,t),e.elementType=Fd,e.lanes=n,e.stateNode={isHidden:!1},e}function Qa(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Xa(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Na(0),this.expirationTimes=Na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function oc(e,t,n,r,o,i,a,l,s){return e=new Nv(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(i),e}function Av(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ap(e){if(!e)return mn;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Nf(e,n,t)}return t}function Pp(e,t,n,r,o,i,a,l,s){return e=oc(n,r,!0,e,o,i,a,l,s),e.context=Ap(null),n=e.current,r=He(),o=dn(n),i=Lt(r,o),i.callback=t??null,cn(n,i,o),e.current.lanes=o,_o(e,o,r),Xe(e,r),e}function da(e,t,n,r){var o=t.current,i=He(),a=dn(o);return n=Ap(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=cn(o,t,a),e!==null&&(xt(e,o,a,i),ui(e,o,a)),a}function Ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ic(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function Pv(){return null}var $p=typeof reportError=="function"?reportError:function(e){console.error(e)};function ac(e){this._internalRoot=e}fa.prototype.render=ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));da(e,t,null,null)};fa.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){da(null,e,null,null)}),t[zt]=null}};function fa(e){this._internalRoot=e}fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&df(e)}};function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Iu(){}function $v(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ui(a);i.call(c)}}var a=Pp(t,r,e,0,null,!1,!1,"",Iu);return e._reactRootContainer=a,e[zt]=a.current,fo(e.nodeType===8?e.parentNode:e),Ln(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=Ui(s);l.call(c)}}var s=oc(e,0,!1,null,null,!1,!1,"",Iu);return e._reactRootContainer=s,e[zt]=s.current,fo(e.nodeType===8?e.parentNode:e),Ln(function(){da(t,s,n,r)}),s}function ma(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=Ui(a);l.call(s)}}da(t,a,e,o)}else a=$v(n,t,e,o,r);return Ui(a)}lf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wr(t.pendingLanes);n!==0&&(ks(t,n|1),Xe(t,be()),!(q&6)&&(br=be()+500,xn()))}break;case 13:Ln(function(){var r=jt(e,1);if(r!==null){var o=He();xt(r,e,1,o)}}),ic(e,1)}};Ts=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=He();xt(t,e,134217728,n)}ic(e,134217728)}};sf=function(e){if(e.tag===13){var t=dn(e),n=jt(e,t);if(n!==null){var r=He();xt(n,e,t,r)}ic(e,t)}};cf=function(){return ie};uf=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Cl=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=oa(r);if(!o)throw Error(N(90));jd(r),hl(r,o)}}}break;case"textarea":Hd(e,n);break;case"select":t=n.value,t!=null&&sr(e,!!n.multiple,t,!1)}};Qd=ec;Xd=Ln;var Iv={usingClientEntryPoint:!1,Events:[To,tr,oa,Kd,Yd,ec]},jr={findFiberByHostInstance:kn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mv={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qd(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{ea=Qo.inject(Mv),Tt=Qo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(t))throw Error(N(200));return Av(e,t,null,n)};rt.createRoot=function(e,t){if(!lc(e))throw Error(N(299));var n=!1,r="",o=$p;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=oc(e,1,!1,null,null,n,!1,r,o),e[zt]=t.current,fo(e.nodeType===8?e.parentNode:e),new ac(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=qd(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return Ln(e)};rt.hydrate=function(e,t,n){if(!pa(t))throw Error(N(200));return ma(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!lc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=$p;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Pp(t,null,e,1,n??null,o,!1,i,a),e[zt]=t.current,fo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fa(t)};rt.render=function(e,t,n){if(!pa(t))throw Error(N(200));return ma(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!pa(e))throw Error(N(40));return e._reactRootContainer?(Ln(function(){ma(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};rt.unstable_batchedUpdates=ec;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pa(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ma(e,t,n,!1,r)};rt.version="18.2.0-next-9e3b772b8-20220608";function Ip(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ip)}catch(e){console.error(e)}}Ip(),Ad.exports=rt;var Bn=Ad.exports;const Ov=ps(Bn);var Mu=Bn;sl.createRoot=Mu.createRoot,sl.hydrateRoot=Mu.hydrateRoot;function Mp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Mp(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Op(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Mp(e))&&(r&&(r+=" "),r+=t);return r}function Lv(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=Lp(t))&&(r&&(r+=" "),r+=n);return r}function Lp(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=Lp(e[r]))&&(n&&(n+=" "),n+=t);return n}var sc="-";function Fv(e){var t=jv(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,o=r===void 0?{}:r;function i(l){var s=l.split(sc);return s[0]===""&&s.length!==1&&s.shift(),Fp(s,t)||zv(l)}function a(l,s){var c=n[l]||[];return s&&o[l]?[].concat(c,o[l]):c}return{getClassGroupId:i,getConflictingClassGroupIds:a}}function Fp(e,t){var a;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),o=r?Fp(e.slice(1),r):void 0;if(o)return o;if(t.validators.length!==0){var i=e.join(sc);return(a=t.validators.find(function(l){var s=l.validator;return s(i)}))==null?void 0:a.classGroupId}}var Ou=/^\[(.+)\]$/;function zv(e){if(Ou.test(e)){var t=Ou.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function jv(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},o=Hv(Object.entries(e.classGroups),n);return o.forEach(function(i){var a=i[0],l=i[1];ts(l,r,a,t)}),r}function ts(e,t,n,r){e.forEach(function(o){if(typeof o=="string"){var i=o===""?t:Lu(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(Bv(o)){ts(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(function(a){var l=a[0],s=a[1];ts(s,Lu(t,l),n,r)})})}function Lu(e,t){var n=e;return t.split(sc).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function Bv(e){return e.isThemeGetter}function Hv(e,t){return t?e.map(function(n){var r=n[0],o=n[1],i=o.map(function(a){return typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(l){var s=l[0],c=l[1];return[t+s,c]})):a});return[r,i]}):e}function Vv(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function o(i,a){n.set(i,a),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(a){var l=n.get(a);if(l!==void 0)return l;if((l=r.get(a))!==void 0)return o(a,l),l},set:function(a,l){n.has(a)?n.set(a,l):o(a,l)}}}var zp="!";function Uv(e){var t=e.separator||":",n=t.length===1,r=t[0],o=t.length;return function(a){for(var l=[],s=0,c=0,f,d=0;d<a.length;d++){var h=a[d];if(s===0){if(h===r&&(n||a.slice(d,d+o)===t)){l.push(a.slice(c,d)),c=d+o;continue}if(h==="/"){f=d;continue}}h==="["?s++:h==="]"&&s--}var y=l.length===0?a:a.substring(c),w=y.startsWith(zp),v=w?y.substring(1):y,b=f&&f>c?f-c:void 0;return{modifiers:l,hasImportantModifier:w,baseClassName:v,maybePostfixModifierPosition:b}}}function Wv(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var o=r[0]==="[";o?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function Gv(e){return{cache:Vv(e.cacheSize),splitModifiers:Uv(e),...Fv(e)}}var Kv=/\s+/;function Yv(e,t){var n=t.splitModifiers,r=t.getClassGroupId,o=t.getConflictingClassGroupIds,i=new Set;return e.trim().split(Kv).map(function(a){var l=n(a),s=l.modifiers,c=l.hasImportantModifier,f=l.baseClassName,d=l.maybePostfixModifierPosition,h=r(d?f.substring(0,d):f),y=!!d;if(!h){if(!d)return{isTailwindClass:!1,originalClassName:a};if(h=r(f),!h)return{isTailwindClass:!1,originalClassName:a};y=!1}var w=Wv(s).join(":"),v=c?w+zp:w;return{isTailwindClass:!0,modifierId:v,classGroupId:h,originalClassName:a,hasPostfixModifier:y}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var l=a.modifierId,s=a.classGroupId,c=a.hasPostfixModifier,f=l+s;return i.has(f)?!1:(i.add(f),o(s,c).forEach(function(d){return i.add(l+d)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function Qv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o,i,a=l;function l(c){var f=t[0],d=t.slice(1),h=d.reduce(function(y,w){return w(y)},f());return r=Gv(h),o=r.cache.get,i=r.cache.set,a=s,s(c)}function s(c){var f=o(c);if(f)return f;var d=Yv(c,r);return i(c,d),d}return function(){return a(Lv.apply(null,arguments))}}function ue(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var jp=/^\[(?:([a-z-]+):)?(.+)\]$/i,Xv=/^\d+\/\d+$/,Zv=new Set(["px","full","screen"]),Jv=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qv=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ey=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function ht(e){return Dn(e)||Zv.has(e)||Xv.test(e)||ns(e)}function ns(e){return Hn(e,"length",ay)}function ty(e){return Hn(e,"size",Bp)}function ny(e){return Hn(e,"position",Bp)}function ry(e){return Hn(e,"url",ly)}function Xo(e){return Hn(e,"number",Dn)}function Dn(e){return!Number.isNaN(Number(e))}function oy(e){return e.endsWith("%")&&Dn(e.slice(0,-1))}function Br(e){return Fu(e)||Hn(e,"number",Fu)}function X(e){return jp.test(e)}function Hr(){return!0}function Qt(e){return Jv.test(e)}function iy(e){return Hn(e,"",sy)}function Hn(e,t,n){var r=jp.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function ay(e){return qv.test(e)}function Bp(){return!1}function ly(e){return e.startsWith("url(")}function Fu(e){return Number.isInteger(Number(e))}function sy(e){return ey.test(e)}function cy(){var e=ue("colors"),t=ue("spacing"),n=ue("blur"),r=ue("brightness"),o=ue("borderColor"),i=ue("borderRadius"),a=ue("borderSpacing"),l=ue("borderWidth"),s=ue("contrast"),c=ue("grayscale"),f=ue("hueRotate"),d=ue("invert"),h=ue("gap"),y=ue("gradientColorStops"),w=ue("gradientColorStopPositions"),v=ue("inset"),b=ue("margin"),m=ue("opacity"),u=ue("padding"),g=ue("saturate"),x=ue("scale"),C=ue("sepia"),_=ue("skew"),S=ue("space"),k=ue("translate"),I=function(){return["auto","contain","none"]},M=function(){return["auto","hidden","clip","visible","scroll"]},z=function(){return["auto",X,t]},L=function(){return[X,t]},U=function(){return["",ht]},K=function(){return["auto",Dn,X]},V=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},B=function(){return["solid","dashed","dotted","double","none"]},T=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},E=function(){return["start","end","center","between","around","evenly","stretch"]},D=function(){return["","0",X]},A=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},F=function(){return[Dn,Xo]},W=function(){return[Dn,X]};return{cacheSize:500,theme:{colors:[Hr],spacing:[ht],blur:["none","",Qt,X],brightness:F(),borderColor:[e],borderRadius:["none","","full",Qt,X],borderSpacing:L(),borderWidth:U(),contrast:F(),grayscale:D(),hueRotate:W(),invert:D(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[oy,ns],inset:z(),margin:z(),opacity:F(),padding:L(),saturate:F(),scale:F(),sepia:D(),skew:W(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",X]}],container:["container"],columns:[{columns:[Qt]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(V(),[X])}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:I()}],"overscroll-x":[{"overscroll-x":I()}],"overscroll-y":[{"overscroll-y":I()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Br]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",X]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",Br]}],"grid-cols":[{"grid-cols":[Hr]}],"col-start-end":[{col:["auto",{span:["full",Br]},X]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[Hr]}],"row-start-end":[{row:["auto",{span:[Br]},X]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",X]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",X]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal"].concat(E())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(E(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(E(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",X,t]}],"min-w":[{"min-w":["min","max","fit",X,ht]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Qt]},Qt,X]}],h:[{h:[X,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",X,ht]}],"max-h":[{"max-h":[X,t,"min","max","fit"]}],"font-size":[{text:["base",Qt,ns]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Xo]}],"font-family":[{font:[Hr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",X]}],"line-clamp":[{"line-clamp":["none",Dn,Xo]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",X,ht]}],"list-image":[{"list-image":["none",X]}],"list-style-type":[{list:["none","disc","decimal",X]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(B(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",ht]}],"underline-offset":[{"underline-offset":["auto",X,ht]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(V(),[ny])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ty]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ry]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[].concat(B(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:B()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:[""].concat(B())}],"outline-offset":[{"outline-offset":[X,ht]}],"outline-w":[{outline:[ht]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[ht]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Qt,iy]}],"shadow-color":[{shadow:[Hr]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":T()}],"bg-blend":[{"bg-blend":T()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",Qt,X]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[d]}],saturate:[{saturate:[g]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",X]}],duration:[{duration:W()}],ease:[{ease:["linear","in","out","in-out",X]}],delay:[{delay:W()}],animate:[{animate:["none","spin","ping","pulse","bounce",X]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Br,X]}],"translate-x":[{"translate-x":[k]}],"translate-y":[{"translate-y":[k]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",X]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",X]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",X]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[ht,Xo]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var uy=Qv(cy);function Ve(...e){return uy(Op(e))}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function zu(e,[t,n]){return Math.min(n,Math.max(t,e))}function he(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function eb(e,t){const n=p.createContext(t);function r(i){const{children:a,...l}=i,s=p.useMemo(()=>l,Object.values(l));return p.createElement(n.Provider,{value:s},a)}function o(i){const a=p.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return r.displayName=e+"Provider",[r,o]}function Do(e,t=[]){let n=[];function r(i,a){const l=p.createContext(a),s=n.length;n=[...n,a];function c(d){const{scope:h,children:y,...w}=d,v=(h==null?void 0:h[e][s])||l,b=p.useMemo(()=>w,Object.values(w));return p.createElement(v.Provider,{value:b},y)}function f(d,h){const y=(h==null?void 0:h[e][s])||l,w=p.useContext(y);if(w)return w;if(a!==void 0)return a;throw new Error(`\`${d}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,f]}const o=()=>{const i=n.map(a=>p.createContext(a));return function(l){const s=(l==null?void 0:l[e])||i;return p.useMemo(()=>({[`__scope${e}`]:{...l,[e]:s}}),[l,s])}};return o.scopeName=e,[r,dy(o,...t)]}function dy(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const a=r.reduce((l,{useScope:s,scopeName:c})=>{const d=s(i)[`__scope${c}`];return{...l,...d}},{});return p.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function fy(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Hp(...e){return t=>e.forEach(n=>fy(n,t))}function ze(...e){return p.useCallback(Hp(...e),e)}const Cr=p.forwardRef((e,t)=>{const{children:n,...r}=e,o=p.Children.toArray(n),i=o.find(my);if(i){const a=i.props.children,l=o.map(s=>s===i?p.Children.count(a)>1?p.Children.only(null):p.isValidElement(a)?a.props.children:null:s);return p.createElement(rs,Z({},r,{ref:t}),p.isValidElement(a)?p.cloneElement(a,void 0,l):null)}return p.createElement(rs,Z({},r,{ref:t}),n)});Cr.displayName="Slot";const rs=p.forwardRef((e,t)=>{const{children:n,...r}=e;return p.isValidElement(n)?p.cloneElement(n,{...hy(r,n.props),ref:t?Hp(t,n.ref):n.ref}):p.Children.count(n)>1?p.Children.only(null):null});rs.displayName="SlotClone";const py=({children:e})=>p.createElement(p.Fragment,null,e);function my(e){return p.isValidElement(e)&&e.type===py}function hy(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...l)=>{i(...l),o(...l)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function Vp(e){const t=e+"CollectionProvider",[n,r]=Do(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=y=>{const{scope:w,children:v}=y,b=it.useRef(null),m=it.useRef(new Map).current;return it.createElement(o,{scope:w,itemMap:m,collectionRef:b},v)},l=e+"CollectionSlot",s=it.forwardRef((y,w)=>{const{scope:v,children:b}=y,m=i(l,v),u=ze(w,m.collectionRef);return it.createElement(Cr,{ref:u},b)}),c=e+"CollectionItemSlot",f="data-radix-collection-item",d=it.forwardRef((y,w)=>{const{scope:v,children:b,...m}=y,u=it.useRef(null),g=ze(w,u),x=i(c,v);return it.useEffect(()=>(x.itemMap.set(u,{ref:u,...m}),()=>void x.itemMap.delete(u))),it.createElement(Cr,{[f]:"",ref:g},b)});function h(y){const w=i(e+"CollectionConsumer",y);return it.useCallback(()=>{const b=w.collectionRef.current;if(!b)return[];const m=Array.from(b.querySelectorAll(`[${f}]`));return Array.from(w.itemMap.values()).sort((x,C)=>m.indexOf(x.ref.current)-m.indexOf(C.ref.current))},[w.collectionRef,w.itemMap])}return[{Provider:a,Slot:s,ItemSlot:d},h,r]}const gy=p.createContext(void 0);function cc(e){const t=p.useContext(gy);return e||t||"ltr"}const vy=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],xe=vy.reduce((e,t)=>{const n=p.forwardRef((r,o)=>{const{asChild:i,...a}=r,l=i?Cr:t;return p.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),p.createElement(l,Z({},a,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function yy(e,t){e&&Bn.flushSync(()=>e.dispatchEvent(t))}function Dt(e){const t=p.useRef(e);return p.useEffect(()=>{t.current=e}),p.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function wy(e,t=globalThis==null?void 0:globalThis.document){const n=Dt(e);p.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const os="dismissableLayer.update",xy="dismissableLayer.pointerDownOutside",by="dismissableLayer.focusOutside";let ju;const Cy=p.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ey=p.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:l,onDismiss:s,...c}=e,f=p.useContext(Cy),[d,h]=p.useState(null),y=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,w]=p.useState({}),v=ze(t,k=>h(k)),b=Array.from(f.layers),[m]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),u=b.indexOf(m),g=d?b.indexOf(d):-1,x=f.layersWithOutsidePointerEventsDisabled.size>0,C=g>=u,_=Sy(k=>{const I=k.target,M=[...f.branches].some(z=>z.contains(I));!C||M||(i==null||i(k),l==null||l(k),k.defaultPrevented||s==null||s())},y),S=_y(k=>{const I=k.target;[...f.branches].some(z=>z.contains(I))||(a==null||a(k),l==null||l(k),k.defaultPrevented||s==null||s())},y);return wy(k=>{g===f.layers.size-1&&(o==null||o(k),!k.defaultPrevented&&s&&(k.preventDefault(),s()))},y),p.useEffect(()=>{if(d)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(ju=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),Bu(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(y.body.style.pointerEvents=ju)}},[d,y,r,f]),p.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),Bu())},[d,f]),p.useEffect(()=>{const k=()=>w({});return document.addEventListener(os,k),()=>document.removeEventListener(os,k)},[]),p.createElement(xe.div,Z({},c,{ref:v,style:{pointerEvents:x?C?"auto":"none":void 0,...e.style},onFocusCapture:he(e.onFocusCapture,S.onFocusCapture),onBlurCapture:he(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:he(e.onPointerDownCapture,_.onPointerDownCapture)}))});function Sy(e,t=globalThis==null?void 0:globalThis.document){const n=Dt(e),r=p.useRef(!1),o=p.useRef(()=>{});return p.useEffect(()=>{const i=l=>{if(l.target&&!r.current){let c=function(){Up(xy,n,s,{discrete:!0})};const s={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function _y(e,t=globalThis==null?void 0:globalThis.document){const n=Dt(e),r=p.useRef(!1);return p.useEffect(()=>{const o=i=>{i.target&&!r.current&&Up(by,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Bu(){const e=new CustomEvent(os);document.dispatchEvent(e)}function Up(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?yy(o,i):o.dispatchEvent(i)}let Za=0;function ky(){p.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Hu()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Hu()),Za++,()=>{Za===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Za--}},[])}function Hu(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Ja="focusScope.autoFocusOnMount",qa="focusScope.autoFocusOnUnmount",Vu={bubbles:!1,cancelable:!0},Ty=p.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=e,[l,s]=p.useState(null),c=Dt(o),f=Dt(i),d=p.useRef(null),h=ze(t,v=>s(v)),y=p.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;p.useEffect(()=>{if(r){let v=function(g){if(y.paused||!l)return;const x=g.target;l.contains(x)?d.current=x:Xt(d.current,{select:!0})},b=function(g){if(y.paused||!l)return;const x=g.relatedTarget;x!==null&&(l.contains(x)||Xt(d.current,{select:!0}))},m=function(g){const x=document.activeElement;for(const C of g)C.removedNodes.length>0&&(l!=null&&l.contains(x)||Xt(l))};document.addEventListener("focusin",v),document.addEventListener("focusout",b);const u=new MutationObserver(m);return l&&u.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",b),u.disconnect()}}},[r,l,y.paused]),p.useEffect(()=>{if(l){Wu.add(y);const v=document.activeElement;if(!l.contains(v)){const m=new CustomEvent(Ja,Vu);l.addEventListener(Ja,c),l.dispatchEvent(m),m.defaultPrevented||(Ry($y(Wp(l)),{select:!0}),document.activeElement===v&&Xt(l))}return()=>{l.removeEventListener(Ja,c),setTimeout(()=>{const m=new CustomEvent(qa,Vu);l.addEventListener(qa,f),l.dispatchEvent(m),m.defaultPrevented||Xt(v??document.body,{select:!0}),l.removeEventListener(qa,f),Wu.remove(y)},0)}}},[l,c,f,y]);const w=p.useCallback(v=>{if(!n&&!r||y.paused)return;const b=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,m=document.activeElement;if(b&&m){const u=v.currentTarget,[g,x]=Dy(u);g&&x?!v.shiftKey&&m===x?(v.preventDefault(),n&&Xt(g,{select:!0})):v.shiftKey&&m===g&&(v.preventDefault(),n&&Xt(x,{select:!0})):m===u&&v.preventDefault()}},[n,r,y.paused]);return p.createElement(xe.div,Z({tabIndex:-1},a,{ref:h,onKeyDown:w}))});function Ry(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Xt(r,{select:t}),document.activeElement!==n)return}function Dy(e){const t=Wp(e),n=Uu(t,e),r=Uu(t.reverse(),e);return[n,r]}function Wp(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Uu(e,t){for(const n of e)if(!Ny(n,{upTo:t}))return n}function Ny(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ay(e){return e instanceof HTMLInputElement&&"select"in e}function Xt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ay(e)&&t&&e.select()}}const Wu=Py();function Py(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Gu(e,t),e.unshift(t)},remove(t){var n;e=Gu(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Gu(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function $y(e){return e.filter(t=>t.tagName!=="A")}const Ct=globalThis!=null&&globalThis.document?p.useLayoutEffect:()=>{},Iy=kh["useId".toString()]||(()=>{});let My=0;function ha(e){const[t,n]=p.useState(Iy());return Ct(()=>{e||n(r=>r??String(My++))},[e]),e||(t?`radix-${t}`:"")}const Oy=["top","right","bottom","left"],hn=Math.min,Je=Math.max,Wi=Math.round,Zo=Math.floor,gn=e=>({x:e,y:e}),Ly={left:"right",right:"left",bottom:"top",top:"bottom"},Fy={start:"end",end:"start"};function is(e,t,n){return Je(e,hn(t,n))}function Ht(e,t){return typeof e=="function"?e(t):e}function Vt(e){return e.split("-")[0]}function Dr(e){return e.split("-")[1]}function uc(e){return e==="x"?"y":"x"}function dc(e){return e==="y"?"height":"width"}function Nr(e){return["top","bottom"].includes(Vt(e))?"y":"x"}function fc(e){return uc(Nr(e))}function zy(e,t,n){n===void 0&&(n=!1);const r=Dr(e),o=fc(e),i=dc(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Gi(a)),[a,Gi(a)]}function jy(e){const t=Gi(e);return[as(e),t,as(t)]}function as(e){return e.replace(/start|end/g,t=>Fy[t])}function By(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}function Hy(e,t,n,r){const o=Dr(e);let i=By(Vt(e),n==="start",r);return o&&(i=i.map(a=>a+"-"+o),t&&(i=i.concat(i.map(as)))),i}function Gi(e){return e.replace(/left|right|bottom|top/g,t=>Ly[t])}function Vy(e){return{top:0,right:0,bottom:0,left:0,...e}}function Gp(e){return typeof e!="number"?Vy(e):{top:e,right:e,bottom:e,left:e}}function Ki(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ku(e,t,n){let{reference:r,floating:o}=e;const i=Nr(t),a=fc(t),l=dc(a),s=Vt(t),c=i==="y",f=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,h=r[l]/2-o[l]/2;let y;switch(s){case"top":y={x:f,y:r.y-o.height};break;case"bottom":y={x:f,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:d};break;case"left":y={x:r.x-o.width,y:d};break;default:y={x:r.x,y:r.y}}switch(Dr(t)){case"start":y[a]-=h*(n&&c?-1:1);break;case"end":y[a]+=h*(n&&c?-1:1);break}return y}const Uy=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:d}=Ku(c,r,s),h=r,y={},w=0;for(let v=0;v<l.length;v++){const{name:b,fn:m}=l[v],{x:u,y:g,data:x,reset:C}=await m({x:f,y:d,initialPlacement:r,placement:h,strategy:o,middlewareData:y,rects:c,platform:a,elements:{reference:e,floating:t}});if(f=u??f,d=g??d,y={...y,[b]:{...y[b],...x}},C&&w<=50){w++,typeof C=="object"&&(C.placement&&(h=C.placement),C.rects&&(c=C.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):C.rects),{x:f,y:d}=Ku(c,h,s)),v=-1;continue}}return{x:f,y:d,placement:h,strategy:o,middlewareData:y}};async function bo(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:h=!1,padding:y=0}=Ht(t,e),w=Gp(y),b=l[h?d==="floating"?"reference":"floating":d],m=Ki(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(b)))==null||n?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:f,strategy:s})),u=d==="floating"?{...a.floating,x:r,y:o}:a.reference,g=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),x=await(i.isElement==null?void 0:i.isElement(g))?await(i.getScale==null?void 0:i.getScale(g))||{x:1,y:1}:{x:1,y:1},C=Ki(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u,offsetParent:g,strategy:s}):u);return{top:(m.top-C.top+w.top)/x.y,bottom:(C.bottom-m.bottom+w.bottom)/x.y,left:(m.left-C.left+w.left)/x.x,right:(C.right-m.right+w.right)/x.x}}const Yu=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:a,elements:l}=t,{element:s,padding:c=0}=Ht(e,t)||{};if(s==null)return{};const f=Gp(c),d={x:n,y:r},h=fc(o),y=dc(h),w=await a.getDimensions(s),v=h==="y",b=v?"top":"left",m=v?"bottom":"right",u=v?"clientHeight":"clientWidth",g=i.reference[y]+i.reference[h]-d[h]-i.floating[y],x=d[h]-i.reference[h],C=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s));let _=C?C[u]:0;(!_||!await(a.isElement==null?void 0:a.isElement(C)))&&(_=l.floating[u]||i.floating[y]);const S=g/2-x/2,k=_/2-w[y]/2-1,I=hn(f[b],k),M=hn(f[m],k),z=I,L=_-w[y]-M,U=_/2-w[y]/2+S,K=is(z,U,L),B=Dr(o)!=null&&U!=K&&i.reference[y]/2-(U<z?I:M)-w[y]/2<0?U<z?z-U:L-U:0;return{[h]:d[h]-B,data:{[h]:K,centerOffset:U-K+B}}}}),Wy=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:i,initialPlacement:a,platform:l,elements:s}=t,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:d,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...v}=Ht(e,t),b=Vt(r),m=Vt(a)===a,u=await(l.isRTL==null?void 0:l.isRTL(s.floating)),g=d||(m||!w?[Gi(a)]:jy(a));!d&&y!=="none"&&g.push(...Hy(a,w,y,u));const x=[a,...g],C=await bo(t,v),_=[];let S=((n=o.flip)==null?void 0:n.overflows)||[];if(c&&_.push(C[b]),f){const z=zy(r,i,u);_.push(C[z[0]],C[z[1]])}if(S=[...S,{placement:r,overflows:_}],!_.every(z=>z<=0)){var k,I;const z=(((k=o.flip)==null?void 0:k.index)||0)+1,L=x[z];if(L)return{data:{index:z,overflows:S},reset:{placement:L}};let U=(I=S.filter(K=>K.overflows[0]<=0).sort((K,V)=>K.overflows[1]-V.overflows[1])[0])==null?void 0:I.placement;if(!U)switch(h){case"bestFit":{var M;const K=(M=S.map(V=>[V.placement,V.overflows.filter(B=>B>0).reduce((B,T)=>B+T,0)]).sort((V,B)=>V[1]-B[1])[0])==null?void 0:M[0];K&&(U=K);break}case"initialPlacement":U=a;break}if(r!==U)return{reset:{placement:U}}}return{}}}};function Qu(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Xu(e){return Oy.some(t=>e[t]>=0)}const Gy=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Ht(e,t);switch(r){case"referenceHidden":{const i=await bo(t,{...o,elementContext:"reference"}),a=Qu(i,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Xu(a)}}}case"escaped":{const i=await bo(t,{...o,altBoundary:!0}),a=Qu(i,n.floating);return{data:{escapedOffsets:a,escaped:Xu(a)}}}default:return{}}}}};async function Ky(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=Vt(n),l=Dr(n),s=Nr(n)==="y",c=["left","top"].includes(a)?-1:1,f=i&&s?-1:1,d=Ht(t,e);let{mainAxis:h,crossAxis:y,alignmentAxis:w}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof w=="number"&&(y=l==="end"?w*-1:w),s?{x:y*f,y:h*c}:{x:h*c,y:y*f}}const Yy=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await Ky(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},Qy=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:b=>{let{x:m,y:u}=b;return{x:m,y:u}}},...s}=Ht(e,t),c={x:n,y:r},f=await bo(t,s),d=Nr(Vt(o)),h=uc(d);let y=c[h],w=c[d];if(i){const b=h==="y"?"top":"left",m=h==="y"?"bottom":"right",u=y+f[b],g=y-f[m];y=is(u,y,g)}if(a){const b=d==="y"?"top":"left",m=d==="y"?"bottom":"right",u=w+f[b],g=w-f[m];w=is(u,w,g)}const v=l.fn({...t,[h]:y,[d]:w});return{...v,data:{x:v.x-n,y:v.y-r}}}}},Xy=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=Ht(e,t),f={x:n,y:r},d=Nr(o),h=uc(d);let y=f[h],w=f[d];const v=Ht(l,t),b=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(s){const g=h==="y"?"height":"width",x=i.reference[h]-i.floating[g]+b.mainAxis,C=i.reference[h]+i.reference[g]-b.mainAxis;y<x?y=x:y>C&&(y=C)}if(c){var m,u;const g=h==="y"?"width":"height",x=["top","left"].includes(Vt(o)),C=i.reference[d]-i.floating[g]+(x&&((m=a.offset)==null?void 0:m[d])||0)+(x?0:b.crossAxis),_=i.reference[d]+i.reference[g]+(x?0:((u=a.offset)==null?void 0:u[d])||0)-(x?b.crossAxis:0);w<C?w=C:w>_&&(w=_)}return{[h]:y,[d]:w}}}},Zy=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=()=>{},...l}=Ht(e,t),s=await bo(t,l),c=Vt(n),f=Dr(n),d=Nr(n)==="y",{width:h,height:y}=r.floating;let w,v;c==="top"||c==="bottom"?(w=c,v=f===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(v=c,w=f==="end"?"top":"bottom");const b=y-s[w],m=h-s[v],u=!t.middlewareData.shift;let g=b,x=m;if(d){const _=h-s.left-s.right;x=f||u?hn(m,_):_}else{const _=y-s.top-s.bottom;g=f||u?hn(b,_):_}if(u&&!f){const _=Je(s.left,0),S=Je(s.right,0),k=Je(s.top,0),I=Je(s.bottom,0);d?x=h-2*(_!==0||S!==0?_+S:Je(s.left,s.right)):g=y-2*(k!==0||I!==0?k+I:Je(s.top,s.bottom))}await a({...t,availableWidth:x,availableHeight:g});const C=await o.getDimensions(i.floating);return h!==C.width||y!==C.height?{reset:{rects:!0}}:{}}}};function vn(e){return Kp(e)?(e.nodeName||"").toLowerCase():"#document"}function tt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Gt(e){var t;return(t=(Kp(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Kp(e){return e instanceof Node||e instanceof tt(e).Node}function Ut(e){return e instanceof Element||e instanceof tt(e).Element}function Nt(e){return e instanceof HTMLElement||e instanceof tt(e).HTMLElement}function Zu(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof tt(e).ShadowRoot}function No(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=pt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Jy(e){return["table","td","th"].includes(vn(e))}function pc(e){const t=mc(),n=pt(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function qy(e){let t=Er(e);for(;Nt(t)&&!ga(t);){if(pc(t))return t;t=Er(t)}return null}function mc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ga(e){return["html","body","#document"].includes(vn(e))}function pt(e){return tt(e).getComputedStyle(e)}function va(e){return Ut(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Er(e){if(vn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Zu(e)&&e.host||Gt(e);return Zu(t)?t.host:t}function Yp(e){const t=Er(e);return ga(t)?e.ownerDocument?e.ownerDocument.body:e.body:Nt(t)&&No(t)?t:Yp(t)}function Yi(e,t){var n;t===void 0&&(t=[]);const r=Yp(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=tt(r);return o?t.concat(i,i.visualViewport||[],No(r)?r:[]):t.concat(r,Yi(r))}function Qp(e){const t=pt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Nt(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Wi(n)!==i||Wi(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function hc(e){return Ut(e)?e:e.contextElement}function mr(e){const t=hc(e);if(!Nt(t))return gn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Qp(t);let a=(i?Wi(n.width):n.width)/r,l=(i?Wi(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const e0=gn(0);function Xp(e){const t=tt(e);return!mc()||!t.visualViewport?e0:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function t0(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==tt(e)?!1:t}function Fn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=hc(e);let a=gn(1);t&&(r?Ut(r)&&(a=mr(r)):a=mr(e));const l=t0(i,n,r)?Xp(i):gn(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,f=o.width/a.x,d=o.height/a.y;if(i){const h=tt(i),y=r&&Ut(r)?tt(r):r;let w=h.frameElement;for(;w&&r&&y!==h;){const v=mr(w),b=w.getBoundingClientRect(),m=pt(w),u=b.left+(w.clientLeft+parseFloat(m.paddingLeft))*v.x,g=b.top+(w.clientTop+parseFloat(m.paddingTop))*v.y;s*=v.x,c*=v.y,f*=v.x,d*=v.y,s+=u,c+=g,w=tt(w).frameElement}}return Ki({width:f,height:d,x:s,y:c})}function n0(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Nt(n),i=Gt(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},l=gn(1);const s=gn(0);if((o||!o&&r!=="fixed")&&((vn(n)!=="body"||No(i))&&(a=va(n)),Nt(n))){const c=Fn(n);l=mr(n),s.x=c.x+n.clientLeft,s.y=c.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+s.x,y:t.y*l.y-a.scrollTop*l.y+s.y}}function r0(e){return Array.from(e.getClientRects())}function Zp(e){return Fn(Gt(e)).left+va(e).scrollLeft}function o0(e){const t=Gt(e),n=va(e),r=e.ownerDocument.body,o=Je(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Je(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Zp(e);const l=-n.scrollTop;return pt(r).direction==="rtl"&&(a+=Je(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}function i0(e,t){const n=tt(e),r=Gt(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const c=mc();(!c||c&&t==="fixed")&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}function a0(e,t){const n=Fn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Nt(e)?mr(e):gn(1),a=e.clientWidth*i.x,l=e.clientHeight*i.y,s=o*i.x,c=r*i.y;return{width:a,height:l,x:s,y:c}}function Ju(e,t,n){let r;if(t==="viewport")r=i0(e,n);else if(t==="document")r=o0(Gt(e));else if(Ut(t))r=a0(t,n);else{const o=Xp(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Ki(r)}function Jp(e,t){const n=Er(e);return n===t||!Ut(n)||ga(n)?!1:pt(n).position==="fixed"||Jp(n,t)}function l0(e,t){const n=t.get(e);if(n)return n;let r=Yi(e).filter(l=>Ut(l)&&vn(l)!=="body"),o=null;const i=pt(e).position==="fixed";let a=i?Er(e):e;for(;Ut(a)&&!ga(a);){const l=pt(a),s=pc(a);!s&&l.position==="fixed"&&(o=null),(i?!s&&!o:!s&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||No(a)&&!s&&Jp(e,a))?r=r.filter(f=>f!==a):o=l,a=Er(a)}return t.set(e,r),r}function s0(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?l0(t,this._c):[].concat(n),r],l=a[0],s=a.reduce((c,f)=>{const d=Ju(t,f,o);return c.top=Je(d.top,c.top),c.right=hn(d.right,c.right),c.bottom=hn(d.bottom,c.bottom),c.left=Je(d.left,c.left),c},Ju(t,l,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function c0(e){return Qp(e)}function u0(e,t,n){const r=Nt(t),o=Gt(t),i=n==="fixed",a=Fn(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=gn(0);if(r||!r&&!i)if((vn(t)!=="body"||No(o))&&(l=va(t)),r){const c=Fn(t,!0,i,t);s.x=c.x+t.clientLeft,s.y=c.y+t.clientTop}else o&&(s.x=Zp(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function qu(e,t){return!Nt(e)||pt(e).position==="fixed"?null:t?t(e):e.offsetParent}function qp(e,t){const n=tt(e);if(!Nt(e))return n;let r=qu(e,t);for(;r&&Jy(r)&&pt(r).position==="static";)r=qu(r,t);return r&&(vn(r)==="html"||vn(r)==="body"&&pt(r).position==="static"&&!pc(r))?n:r||qy(e)||n}const d0=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||qp,i=this.getDimensions;return{reference:u0(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function f0(e){return pt(e).direction==="rtl"}const p0={convertOffsetParentRelativeRectToViewportRelativeRect:n0,getDocumentElement:Gt,getClippingRect:s0,getOffsetParent:qp,getElementRects:d0,getClientRects:r0,getDimensions:c0,getScale:mr,isElement:Ut,isRTL:f0};function m0(e,t){let n=null,r;const o=Gt(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function a(l,s){l===void 0&&(l=!1),s===void 0&&(s=1),i();const{left:c,top:f,width:d,height:h}=e.getBoundingClientRect();if(l||t(),!d||!h)return;const y=Zo(f),w=Zo(o.clientWidth-(c+d)),v=Zo(o.clientHeight-(f+h)),b=Zo(c),u={rootMargin:-y+"px "+-w+"px "+-v+"px "+-b+"px",threshold:Je(0,hn(1,s))||1};let g=!0;function x(C){const _=C[0].intersectionRatio;if(_!==s){if(!g)return a();_?a(!1,_):r=setTimeout(()=>{a(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(x,{...u,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,u)}n.observe(e)}return a(!0),i}function h0(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=hc(e),f=o||i?[...c?Yi(c):[],...Yi(t)]:[];f.forEach(m=>{o&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const d=c&&l?m0(c,n):null;let h=-1,y=null;a&&(y=new ResizeObserver(m=>{let[u]=m;u&&u.target===c&&y&&(y.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),c&&!s&&y.observe(c),y.observe(t));let w,v=s?Fn(e):null;s&&b();function b(){const m=Fn(e);v&&(m.x!==v.x||m.y!==v.y||m.width!==v.width||m.height!==v.height)&&n(),v=m,w=requestAnimationFrame(b)}return n(),()=>{f.forEach(m=>{o&&m.removeEventListener("scroll",n),i&&m.removeEventListener("resize",n)}),d&&d(),y&&y.disconnect(),y=null,s&&cancelAnimationFrame(w)}}const g0=(e,t,n)=>{const r=new Map,o={platform:p0,...n},i={...o.platform,_c:r};return Uy(e,t,{...o,platform:i})},v0=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Yu({element:r.current,padding:o}).fn(n):{}:r?Yu({element:r,padding:o}).fn(n):{}}}};var vi=typeof document<"u"?p.useLayoutEffect:p.useEffect;function Qi(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Qi(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Qi(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function em(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ed(e,t){const n=em(e);return Math.round(t*n)/n}function td(e){const t=p.useRef(e);return vi(()=>{t.current=e}),t}function y0(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:s,open:c}=e,[f,d]=p.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,y]=p.useState(r);Qi(h,r)||y(r);const[w,v]=p.useState(null),[b,m]=p.useState(null),u=p.useCallback(B=>{B!=_.current&&(_.current=B,v(B))},[v]),g=p.useCallback(B=>{B!==S.current&&(S.current=B,m(B))},[m]),x=i||w,C=a||b,_=p.useRef(null),S=p.useRef(null),k=p.useRef(f),I=td(s),M=td(o),z=p.useCallback(()=>{if(!_.current||!S.current)return;const B={placement:t,strategy:n,middleware:h};M.current&&(B.platform=M.current),g0(_.current,S.current,B).then(T=>{const E={...T,isPositioned:!0};L.current&&!Qi(k.current,E)&&(k.current=E,Bn.flushSync(()=>{d(E)}))})},[h,t,n,M]);vi(()=>{c===!1&&k.current.isPositioned&&(k.current.isPositioned=!1,d(B=>({...B,isPositioned:!1})))},[c]);const L=p.useRef(!1);vi(()=>(L.current=!0,()=>{L.current=!1}),[]),vi(()=>{if(x&&(_.current=x),C&&(S.current=C),x&&C){if(I.current)return I.current(x,C,z);z()}},[x,C,z,I]);const U=p.useMemo(()=>({reference:_,floating:S,setReference:u,setFloating:g}),[u,g]),K=p.useMemo(()=>({reference:x,floating:C}),[x,C]),V=p.useMemo(()=>{const B={position:n,left:0,top:0};if(!K.floating)return B;const T=ed(K.floating,f.x),E=ed(K.floating,f.y);return l?{...B,transform:"translate("+T+"px, "+E+"px)",...em(K.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:T,top:E}},[n,l,K.floating,f.x,f.y]);return p.useMemo(()=>({...f,update:z,refs:U,elements:K,floatingStyles:V}),[f,z,U,K,V])}function w0(e){const[t,n]=p.useState(void 0);return Ct(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let a,l;if("borderBoxSize"in i){const s=i.borderBoxSize,c=Array.isArray(s)?s[0]:s;a=c.inlineSize,l=c.blockSize}else a=e.offsetWidth,l=e.offsetHeight;n({width:a,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const tm="Popper",[nm,rm]=Do(tm),[x0,om]=nm(tm),b0=e=>{const{__scopePopper:t,children:n}=e,[r,o]=p.useState(null);return p.createElement(x0,{scope:t,anchor:r,onAnchorChange:o},n)},C0="PopperAnchor",E0=p.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=om(C0,n),a=p.useRef(null),l=ze(t,a);return p.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:p.createElement(xe.div,Z({},o,{ref:l}))}),im="PopperContent",[S0,tb]=nm(im),_0=p.forwardRef((e,t)=>{var n,r,o,i,a,l,s,c;const{__scopePopper:f,side:d="bottom",sideOffset:h=0,align:y="center",alignOffset:w=0,arrowPadding:v=0,collisionBoundary:b=[],collisionPadding:m=0,sticky:u="partial",hideWhenDetached:g=!1,avoidCollisions:x=!0,onPlaced:C,..._}=e,S=om(im,f),[k,I]=p.useState(null),M=ze(t,Ce=>I(Ce)),[z,L]=p.useState(null),U=w0(z),K=(n=U==null?void 0:U.width)!==null&&n!==void 0?n:0,V=(r=U==null?void 0:U.height)!==null&&r!==void 0?r:0,B=d+(y!=="center"?"-"+y:""),T=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},E=Array.isArray(b)?b:[b],D=E.length>0,A={padding:T,boundary:E.filter(k0),altBoundary:D},{refs:F,floatingStyles:W,placement:Q,isPositioned:pe,middlewareData:re}=y0({strategy:"fixed",placement:B,whileElementsMounted:h0,elements:{reference:S.anchor},middleware:[Yy({mainAxis:h+V,alignmentAxis:w}),x&&Qy({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?Xy():void 0,...A}),x&&Wy({...A}),Zy({...A,apply:({elements:Ce,rects:Kt,availableWidth:$e,availableHeight:bn})=>{const{width:Pr,height:G}=Kt.reference,Cn=Ce.floating.style;Cn.setProperty("--radix-popper-available-width",`${$e}px`),Cn.setProperty("--radix-popper-available-height",`${bn}px`),Cn.setProperty("--radix-popper-anchor-width",`${Pr}px`),Cn.setProperty("--radix-popper-anchor-height",`${G}px`)}}),z&&v0({element:z,padding:v}),T0({arrowWidth:K,arrowHeight:V}),g&&Gy({strategy:"referenceHidden"})]}),[ae,H]=am(Q),ee=Dt(C);Ct(()=>{pe&&(ee==null||ee())},[pe,ee]);const ke=(o=re.arrow)===null||o===void 0?void 0:o.x,le=(i=re.arrow)===null||i===void 0?void 0:i.y,te=((a=re.arrow)===null||a===void 0?void 0:a.centerOffset)!==0,[ne,je]=p.useState();return Ct(()=>{k&&je(window.getComputedStyle(k).zIndex)},[k]),p.createElement("div",{ref:F.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:pe?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(l=re.transformOrigin)===null||l===void 0?void 0:l.x,(s=re.transformOrigin)===null||s===void 0?void 0:s.y].join(" ")},dir:e.dir},p.createElement(S0,{scope:f,placedSide:ae,onArrowChange:L,arrowX:ke,arrowY:le,shouldHideArrow:te},p.createElement(xe.div,Z({"data-side":ae,"data-align":H},_,{ref:M,style:{..._.style,animation:pe?void 0:"none",opacity:(c=re.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}}))))});function k0(e){return e!==null}const T0=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,a;const{placement:l,rects:s,middlewareData:c}=t,d=((n=c.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=d?0:e.arrowWidth,y=d?0:e.arrowHeight,[w,v]=am(l),b={start:"0%",center:"50%",end:"100%"}[v],m=((r=(o=c.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+h/2,u=((i=(a=c.arrow)===null||a===void 0?void 0:a.y)!==null&&i!==void 0?i:0)+y/2;let g="",x="";return w==="bottom"?(g=d?b:`${m}px`,x=`${-y}px`):w==="top"?(g=d?b:`${m}px`,x=`${s.floating.height+y}px`):w==="right"?(g=`${-y}px`,x=d?b:`${u}px`):w==="left"&&(g=`${s.floating.width+y}px`,x=d?b:`${u}px`),{data:{x:g,y:x}}}});function am(e){const[t,n="center"]=e.split("-");return[t,n]}const R0=b0,D0=E0,N0=_0,A0=p.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?Ov.createPortal(p.createElement(xe.div,Z({},o,{ref:t})),r):null});function Xi({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=P0({defaultProp:t,onChange:n}),i=e!==void 0,a=i?e:r,l=Dt(n),s=p.useCallback(c=>{if(i){const d=typeof c=="function"?c(e):c;d!==e&&l(d)}else o(c)},[i,e,o,l]);return[a,s]}function P0({defaultProp:e,onChange:t}){const n=p.useState(e),[r]=n,o=p.useRef(r),i=Dt(t);return p.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}function $0(e){const t=p.useRef({value:e,previous:e});return p.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const lm=p.forwardRef((e,t)=>p.createElement(xe.span,Z({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),nb=lm;var I0=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Gn=new WeakMap,Jo=new WeakMap,qo={},el=0,sm=function(e){return e&&(e.host||sm(e.parentNode))},M0=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=sm(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},O0=function(e,t,n,r){var o=M0(t,Array.isArray(e)?e:[e]);qo[n]||(qo[n]=new WeakMap);var i=qo[n],a=[],l=new Set,s=new Set(o),c=function(d){!d||l.has(d)||(l.add(d),c(d.parentNode))};o.forEach(c);var f=function(d){!d||s.has(d)||Array.prototype.forEach.call(d.children,function(h){if(l.has(h))f(h);else{var y=h.getAttribute(r),w=y!==null&&y!=="false",v=(Gn.get(h)||0)+1,b=(i.get(h)||0)+1;Gn.set(h,v),i.set(h,b),a.push(h),v===1&&w&&Jo.set(h,!0),b===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}})};return f(t),l.clear(),el++,function(){a.forEach(function(d){var h=Gn.get(d)-1,y=i.get(d)-1;Gn.set(d,h),i.set(d,y),h||(Jo.has(d)||d.removeAttribute(r),Jo.delete(d)),y||d.removeAttribute(n)}),el--,el||(Gn=new WeakMap,Gn=new WeakMap,Jo=new WeakMap,qo={})}},L0=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||I0(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),O0(r,o,n,"aria-hidden")):function(){return null}},st=function(){return st=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},st.apply(this,arguments)};function cm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function F0(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var yi="right-scroll-bar-position",wi="width-before-scroll-bar",z0="with-scroll-bars-hidden",j0="--removed-body-scroll-bar-size";function B0(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function H0(e,t){var n=p.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function V0(e,t){return H0(t||null,function(n){return e.forEach(function(r){return B0(r,n)})})}function U0(e){return e}function W0(e,t){t===void 0&&(t=U0);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var a=t(i,r);return n.push(a),function(){n=n.filter(function(l){return l!==a})}},assignSyncMedium:function(i){for(r=!0;n.length;){var a=n;n=[],a.forEach(i)}n={push:function(l){return i(l)},filter:function(){return n}}},assignMedium:function(i){r=!0;var a=[];if(n.length){var l=n;n=[],l.forEach(i),a=n}var s=function(){var f=a;a=[],f.forEach(i)},c=function(){return Promise.resolve().then(s)};c(),n={push:function(f){a.push(f),c()},filter:function(f){return a=a.filter(f),n}}}};return o}function G0(e){e===void 0&&(e={});var t=W0(null);return t.options=st({async:!0,ssr:!1},e),t}var um=function(e){var t=e.sideCar,n=cm(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,st({},n))};um.isSideCarExport=!0;function K0(e,t){return e.useMedium(t),um}var dm=G0(),tl=function(){},ya=p.forwardRef(function(e,t){var n=p.useRef(null),r=p.useState({onScrollCapture:tl,onWheelCapture:tl,onTouchMoveCapture:tl}),o=r[0],i=r[1],a=e.forwardProps,l=e.children,s=e.className,c=e.removeScrollBar,f=e.enabled,d=e.shards,h=e.sideCar,y=e.noIsolation,w=e.inert,v=e.allowPinchZoom,b=e.as,m=b===void 0?"div":b,u=cm(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),g=h,x=V0([n,t]),C=st(st({},u),o);return p.createElement(p.Fragment,null,f&&p.createElement(g,{sideCar:dm,removeScrollBar:c,shards:d,noIsolation:y,inert:w,setCallbacks:i,allowPinchZoom:!!v,lockRef:n}),a?p.cloneElement(p.Children.only(l),st(st({},C),{ref:x})):p.createElement(m,st({},C,{className:s,ref:x}),l))});ya.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ya.classNames={fullWidth:wi,zeroRight:yi};var nd,Y0=function(){if(nd)return nd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Q0(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Y0();return t&&e.setAttribute("nonce",t),e}function X0(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Z0(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var J0=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Q0())&&(X0(t,n),Z0(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},q0=function(){var e=J0();return function(t,n){p.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},fm=function(){var e=q0(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},ew={left:0,top:0,right:0,gap:0},nl=function(e){return parseInt(e||"",10)||0},tw=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[nl(n),nl(r),nl(o)]},nw=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ew;var t=tw(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},rw=fm(),ow=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(z0,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(yi,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(wi,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(yi," .").concat(yi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(wi," .").concat(wi,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(j0,": ").concat(l,`px;
  }
`)},iw=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=p.useMemo(function(){return nw(o)},[o]);return p.createElement(rw,{styles:ow(i,!t,o,n?"":"!important")})},ls=!1;if(typeof window<"u")try{var ei=Object.defineProperty({},"passive",{get:function(){return ls=!0,!0}});window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{ls=!1}var Kn=ls?{passive:!1}:!1,aw=function(e){return e.tagName==="TEXTAREA"},pm=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!aw(e)&&n[t]==="visible")},lw=function(e){return pm(e,"overflowY")},sw=function(e){return pm(e,"overflowX")},rd=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=mm(e,n);if(r){var o=hm(e,n),i=o[1],a=o[2];if(i>a)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},cw=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},uw=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},mm=function(e,t){return e==="v"?lw(t):sw(t)},hm=function(e,t){return e==="v"?cw(t):uw(t)},dw=function(e,t){return e==="h"&&t==="rtl"?-1:1},fw=function(e,t,n,r,o){var i=dw(e,window.getComputedStyle(t).direction),a=i*r,l=n.target,s=t.contains(l),c=!1,f=a>0,d=0,h=0;do{var y=hm(e,l),w=y[0],v=y[1],b=y[2],m=v-b-i*w;(w||m)&&mm(e,l)&&(d+=m,h+=w),l=l.parentNode}while(!s&&l!==document.body||s&&(t.contains(l)||t===l));return(f&&(o&&d===0||!o&&a>d)||!f&&(o&&h===0||!o&&-a>h))&&(c=!0),c},ti=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},od=function(e){return[e.deltaX,e.deltaY]},id=function(e){return e&&"current"in e?e.current:e},pw=function(e,t){return e[0]===t[0]&&e[1]===t[1]},mw=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},hw=0,Yn=[];function gw(e){var t=p.useRef([]),n=p.useRef([0,0]),r=p.useRef(),o=p.useState(hw++)[0],i=p.useState(function(){return fm()})[0],a=p.useRef(e);p.useEffect(function(){a.current=e},[e]),p.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var v=F0([e.lockRef.current],(e.shards||[]).map(id),!0).filter(Boolean);return v.forEach(function(b){return b.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),v.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=p.useCallback(function(v,b){if("touches"in v&&v.touches.length===2)return!a.current.allowPinchZoom;var m=ti(v),u=n.current,g="deltaX"in v?v.deltaX:u[0]-m[0],x="deltaY"in v?v.deltaY:u[1]-m[1],C,_=v.target,S=Math.abs(g)>Math.abs(x)?"h":"v";if("touches"in v&&S==="h"&&_.type==="range")return!1;var k=rd(S,_);if(!k)return!0;if(k?C=S:(C=S==="v"?"h":"v",k=rd(S,_)),!k)return!1;if(!r.current&&"changedTouches"in v&&(g||x)&&(r.current=C),!C)return!0;var I=r.current||C;return fw(I,b,v,I==="h"?g:x,!0)},[]),s=p.useCallback(function(v){var b=v;if(!(!Yn.length||Yn[Yn.length-1]!==i)){var m="deltaY"in b?od(b):ti(b),u=t.current.filter(function(C){return C.name===b.type&&C.target===b.target&&pw(C.delta,m)})[0];if(u&&u.should){b.cancelable&&b.preventDefault();return}if(!u){var g=(a.current.shards||[]).map(id).filter(Boolean).filter(function(C){return C.contains(b.target)}),x=g.length>0?l(b,g[0]):!a.current.noIsolation;x&&b.cancelable&&b.preventDefault()}}},[]),c=p.useCallback(function(v,b,m,u){var g={name:v,delta:b,target:m,should:u};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(x){return x!==g})},1)},[]),f=p.useCallback(function(v){n.current=ti(v),r.current=void 0},[]),d=p.useCallback(function(v){c(v.type,od(v),v.target,l(v,e.lockRef.current))},[]),h=p.useCallback(function(v){c(v.type,ti(v),v.target,l(v,e.lockRef.current))},[]);p.useEffect(function(){return Yn.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",s,Kn),document.addEventListener("touchmove",s,Kn),document.addEventListener("touchstart",f,Kn),function(){Yn=Yn.filter(function(v){return v!==i}),document.removeEventListener("wheel",s,Kn),document.removeEventListener("touchmove",s,Kn),document.removeEventListener("touchstart",f,Kn)}},[]);var y=e.removeScrollBar,w=e.inert;return p.createElement(p.Fragment,null,w?p.createElement(i,{styles:mw(o)}):null,y?p.createElement(iw,{gapMode:"margin"}):null)}const vw=K0(dm,gw);var gm=p.forwardRef(function(e,t){return p.createElement(ya,st({},e,{ref:t,sideCar:vw}))});gm.classNames=ya.classNames;const yw=gm,ww=[" ","Enter","ArrowUp","ArrowDown"],xw=[" ","Enter"],wa="Select",[xa,gc,bw]=Vp(wa),[Ar,rb]=Do(wa,[bw,rm]),vc=rm(),[Cw,Vn]=Ar(wa),[Ew,Sw]=Ar(wa),_w=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:o,onOpenChange:i,value:a,defaultValue:l,onValueChange:s,dir:c,name:f,autoComplete:d,disabled:h,required:y}=e,w=vc(t),[v,b]=p.useState(null),[m,u]=p.useState(null),[g,x]=p.useState(!1),C=cc(c),[_=!1,S]=Xi({prop:r,defaultProp:o,onChange:i}),[k,I]=Xi({prop:a,defaultProp:l,onChange:s}),M=p.useRef(null),z=v?!!v.closest("form"):!0,[L,U]=p.useState(new Set),K=Array.from(L).map(V=>V.props.value).join(";");return p.createElement(R0,w,p.createElement(Cw,{required:y,scope:t,trigger:v,onTriggerChange:b,valueNode:m,onValueNodeChange:u,valueNodeHasChildren:g,onValueNodeHasChildrenChange:x,contentId:ha(),value:k,onValueChange:I,open:_,onOpenChange:S,dir:C,triggerPointerDownPosRef:M,disabled:h},p.createElement(xa.Provider,{scope:t},p.createElement(Ew,{scope:e.__scopeSelect,onNativeOptionAdd:p.useCallback(V=>{U(B=>new Set(B).add(V))},[]),onNativeOptionRemove:p.useCallback(V=>{U(B=>{const T=new Set(B);return T.delete(V),T})},[])},n)),z?p.createElement(wm,{key:K,"aria-hidden":!0,required:y,tabIndex:-1,name:f,autoComplete:d,value:k,onChange:V=>I(V.target.value),disabled:h},k===void 0?p.createElement("option",{value:""}):null,Array.from(L)):null))},kw="SelectTrigger",Tw=p.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...o}=e,i=vc(n),a=Vn(kw,n),l=a.disabled||r,s=ze(t,a.onTriggerChange),c=gc(n),[f,d,h]=xm(w=>{const v=c().filter(u=>!u.disabled),b=v.find(u=>u.value===a.value),m=bm(v,w,b);m!==void 0&&a.onValueChange(m.value)}),y=()=>{l||(a.onOpenChange(!0),h())};return p.createElement(D0,Z({asChild:!0},i),p.createElement(xe.button,Z({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":a.value===void 0?"":void 0},o,{ref:s,onClick:he(o.onClick,w=>{w.currentTarget.focus()}),onPointerDown:he(o.onPointerDown,w=>{const v=w.target;v.hasPointerCapture(w.pointerId)&&v.releasePointerCapture(w.pointerId),w.button===0&&w.ctrlKey===!1&&(y(),a.triggerPointerDownPosRef.current={x:Math.round(w.pageX),y:Math.round(w.pageY)},w.preventDefault())}),onKeyDown:he(o.onKeyDown,w=>{const v=f.current!=="";!(w.ctrlKey||w.altKey||w.metaKey)&&w.key.length===1&&d(w.key),!(v&&w.key===" ")&&ww.includes(w.key)&&(y(),w.preventDefault())})})))}),Rw="SelectValue",Dw=p.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,children:i,placeholder:a,...l}=e,s=Vn(Rw,n),{onValueNodeHasChildrenChange:c}=s,f=i!==void 0,d=ze(t,s.onValueNodeChange);return Ct(()=>{c(f)},[c,f]),p.createElement(xe.span,Z({},l,{ref:d,style:{pointerEvents:"none"}}),s.value===void 0&&a!==void 0?a:i)}),Nw=p.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...o}=e;return p.createElement(xe.span,Z({"aria-hidden":!0},o,{ref:t}),r||"▼")}),Aw=e=>p.createElement(A0,Z({asChild:!0},e)),Sr="SelectContent",Pw=p.forwardRef((e,t)=>{const n=Vn(Sr,e.__scopeSelect),[r,o]=p.useState();if(Ct(()=>{o(new DocumentFragment)},[]),!n.open){const i=r;return i?Bn.createPortal(p.createElement(vm,{scope:e.__scopeSelect},p.createElement(xa.Slot,{scope:e.__scopeSelect},p.createElement("div",null,e.children))),i):null}return p.createElement($w,Z({},e,{ref:t}))}),$t=10,[vm,ba]=Ar(Sr),$w=p.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:a,side:l,sideOffset:s,align:c,alignOffset:f,arrowPadding:d,collisionBoundary:h,collisionPadding:y,sticky:w,hideWhenDetached:v,avoidCollisions:b,...m}=e,u=Vn(Sr,n),[g,x]=p.useState(null),[C,_]=p.useState(null),S=ze(t,H=>x(H)),[k,I]=p.useState(null),[M,z]=p.useState(null),L=gc(n),[U,K]=p.useState(!1),V=p.useRef(!1);p.useEffect(()=>{if(g)return L0(g)},[g]),ky();const B=p.useCallback(H=>{const[ee,...ke]=L().map(ne=>ne.ref.current),[le]=ke.slice(-1),te=document.activeElement;for(const ne of H)if(ne===te||(ne==null||ne.scrollIntoView({block:"nearest"}),ne===ee&&C&&(C.scrollTop=0),ne===le&&C&&(C.scrollTop=C.scrollHeight),ne==null||ne.focus(),document.activeElement!==te))return},[L,C]),T=p.useCallback(()=>B([k,g]),[B,k,g]);p.useEffect(()=>{U&&T()},[U,T]);const{onOpenChange:E,triggerPointerDownPosRef:D}=u;p.useEffect(()=>{if(g){let H={x:0,y:0};const ee=le=>{var te,ne,je,Ce;H={x:Math.abs(Math.round(le.pageX)-((te=(ne=D.current)===null||ne===void 0?void 0:ne.x)!==null&&te!==void 0?te:0)),y:Math.abs(Math.round(le.pageY)-((je=(Ce=D.current)===null||Ce===void 0?void 0:Ce.y)!==null&&je!==void 0?je:0))}},ke=le=>{H.x<=10&&H.y<=10?le.preventDefault():g.contains(le.target)||E(!1),document.removeEventListener("pointermove",ee),D.current=null};return D.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",ke,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",ke,{capture:!0})}}},[g,E,D]),p.useEffect(()=>{const H=()=>E(!1);return window.addEventListener("blur",H),window.addEventListener("resize",H),()=>{window.removeEventListener("blur",H),window.removeEventListener("resize",H)}},[E]);const[A,F]=xm(H=>{const ee=L().filter(te=>!te.disabled),ke=ee.find(te=>te.ref.current===document.activeElement),le=bm(ee,H,ke);le&&setTimeout(()=>le.ref.current.focus())}),W=p.useCallback((H,ee,ke)=>{const le=!V.current&&!ke;(u.value!==void 0&&u.value===ee||le)&&(I(H),le&&(V.current=!0))},[u.value]),Q=p.useCallback(()=>g==null?void 0:g.focus(),[g]),pe=p.useCallback((H,ee,ke)=>{const le=!V.current&&!ke;(u.value!==void 0&&u.value===ee||le)&&z(H)},[u.value]),re=r==="popper"?ad:Iw,ae=re===ad?{side:l,sideOffset:s,align:c,alignOffset:f,arrowPadding:d,collisionBoundary:h,collisionPadding:y,sticky:w,hideWhenDetached:v,avoidCollisions:b}:{};return p.createElement(vm,{scope:n,content:g,viewport:C,onViewportChange:_,itemRefCallback:W,selectedItem:k,onItemLeave:Q,itemTextRefCallback:pe,focusSelectedItem:T,selectedItemText:M,position:r,isPositioned:U,searchRef:A},p.createElement(yw,{as:Cr,allowPinchZoom:!0},p.createElement(Ty,{asChild:!0,trapped:u.open,onMountAutoFocus:H=>{H.preventDefault()},onUnmountAutoFocus:he(o,H=>{var ee;(ee=u.trigger)===null||ee===void 0||ee.focus({preventScroll:!0}),H.preventDefault()})},p.createElement(Ey,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:H=>H.preventDefault(),onDismiss:()=>u.onOpenChange(!1)},p.createElement(re,Z({role:"listbox",id:u.contentId,"data-state":u.open?"open":"closed",dir:u.dir,onContextMenu:H=>H.preventDefault()},m,ae,{onPlaced:()=>K(!0),ref:S,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:he(m.onKeyDown,H=>{const ee=H.ctrlKey||H.altKey||H.metaKey;if(H.key==="Tab"&&H.preventDefault(),!ee&&H.key.length===1&&F(H.key),["ArrowUp","ArrowDown","Home","End"].includes(H.key)){let le=L().filter(te=>!te.disabled).map(te=>te.ref.current);if(["ArrowUp","End"].includes(H.key)&&(le=le.slice().reverse()),["ArrowUp","ArrowDown"].includes(H.key)){const te=H.target,ne=le.indexOf(te);le=le.slice(ne+1)}setTimeout(()=>B(le)),H.preventDefault()}})}))))))}),Iw=p.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...o}=e,i=Vn(Sr,n),a=ba(Sr,n),[l,s]=p.useState(null),[c,f]=p.useState(null),d=ze(t,S=>f(S)),h=gc(n),y=p.useRef(!1),w=p.useRef(!0),{viewport:v,selectedItem:b,selectedItemText:m,focusSelectedItem:u}=a,g=p.useCallback(()=>{if(i.trigger&&i.valueNode&&l&&c&&v&&b&&m){const S=i.trigger.getBoundingClientRect(),k=c.getBoundingClientRect(),I=i.valueNode.getBoundingClientRect(),M=m.getBoundingClientRect();if(i.dir!=="rtl"){const te=M.left-k.left,ne=I.left-te,je=S.left-ne,Ce=S.width+je,Kt=Math.max(Ce,k.width),$e=window.innerWidth-$t,bn=zu(ne,[$t,$e-Kt]);l.style.minWidth=Ce+"px",l.style.left=bn+"px"}else{const te=k.right-M.right,ne=window.innerWidth-I.right-te,je=window.innerWidth-S.right-ne,Ce=S.width+je,Kt=Math.max(Ce,k.width),$e=window.innerWidth-$t,bn=zu(ne,[$t,$e-Kt]);l.style.minWidth=Ce+"px",l.style.right=bn+"px"}const z=h(),L=window.innerHeight-$t*2,U=v.scrollHeight,K=window.getComputedStyle(c),V=parseInt(K.borderTopWidth,10),B=parseInt(K.paddingTop,10),T=parseInt(K.borderBottomWidth,10),E=parseInt(K.paddingBottom,10),D=V+B+U+E+T,A=Math.min(b.offsetHeight*5,D),F=window.getComputedStyle(v),W=parseInt(F.paddingTop,10),Q=parseInt(F.paddingBottom,10),pe=S.top+S.height/2-$t,re=L-pe,ae=b.offsetHeight/2,H=b.offsetTop+ae,ee=V+B+H,ke=D-ee;if(ee<=pe){const te=b===z[z.length-1].ref.current;l.style.bottom="0px";const ne=c.clientHeight-v.offsetTop-v.offsetHeight,je=Math.max(re,ae+(te?Q:0)+ne+T),Ce=ee+je;l.style.height=Ce+"px"}else{const te=b===z[0].ref.current;l.style.top="0px";const je=Math.max(pe,V+v.offsetTop+(te?W:0)+ae)+ke;l.style.height=je+"px",v.scrollTop=ee-pe+v.offsetTop}l.style.margin=`${$t}px 0`,l.style.minHeight=A+"px",l.style.maxHeight=L+"px",r==null||r(),requestAnimationFrame(()=>y.current=!0)}},[h,i.trigger,i.valueNode,l,c,v,b,m,i.dir,r]);Ct(()=>g(),[g]);const[x,C]=p.useState();Ct(()=>{c&&C(window.getComputedStyle(c).zIndex)},[c]);const _=p.useCallback(S=>{S&&w.current===!0&&(g(),u==null||u(),w.current=!1)},[g,u]);return p.createElement(Mw,{scope:n,contentWrapper:l,shouldExpandOnScrollRef:y,onScrollButtonChange:_},p.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:x}},p.createElement(xe.div,Z({},o,{ref:d,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}}))))}),ad=p.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:o=$t,...i}=e,a=vc(n);return p.createElement(N0,Z({},a,i,{ref:t,align:r,collisionPadding:o,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Mw,Ow]=Ar(Sr,{}),ld="SelectViewport",Lw=p.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=ba(ld,n),i=Ow(ld,n),a=ze(t,o.onViewportChange),l=p.useRef(0);return p.createElement(p.Fragment,null,p.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),p.createElement(xa.Slot,{scope:n},p.createElement(xe.div,Z({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:he(r.onScroll,s=>{const c=s.currentTarget,{contentWrapper:f,shouldExpandOnScrollRef:d}=i;if(d!=null&&d.current&&f){const h=Math.abs(l.current-c.scrollTop);if(h>0){const y=window.innerHeight-$t*2,w=parseFloat(f.style.minHeight),v=parseFloat(f.style.height),b=Math.max(w,v);if(b<y){const m=b+h,u=Math.min(y,m),g=m-u;f.style.height=u+"px",f.style.bottom==="0px"&&(c.scrollTop=g>0?g:0,f.style.justifyContent="flex-end")}}}l.current=c.scrollTop})}))))}),Fw="SelectGroup",[ob,zw]=Ar(Fw),jw="SelectLabel",Bw=p.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=zw(jw,n);return p.createElement(xe.div,Z({id:o.id},r,{ref:t}))}),ss="SelectItem",[Hw,ym]=Ar(ss),Vw=p.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:o=!1,textValue:i,...a}=e,l=Vn(ss,n),s=ba(ss,n),c=l.value===r,[f,d]=p.useState(i??""),[h,y]=p.useState(!1),w=ze(t,m=>{var u;return(u=s.itemRefCallback)===null||u===void 0?void 0:u.call(s,m,r,o)}),v=ha(),b=()=>{o||(l.onValueChange(r),l.onOpenChange(!1))};return p.createElement(Hw,{scope:n,value:r,disabled:o,textId:v,isSelected:c,onItemTextChange:p.useCallback(m=>{d(u=>{var g;return u||((g=m==null?void 0:m.textContent)!==null&&g!==void 0?g:"").trim()})},[])},p.createElement(xa.ItemSlot,{scope:n,value:r,disabled:o,textValue:f},p.createElement(xe.div,Z({role:"option","aria-labelledby":v,"data-highlighted":h?"":void 0,"aria-selected":c&&h,"data-state":c?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1},a,{ref:w,onFocus:he(a.onFocus,()=>y(!0)),onBlur:he(a.onBlur,()=>y(!1)),onPointerUp:he(a.onPointerUp,b),onPointerMove:he(a.onPointerMove,m=>{if(o){var u;(u=s.onItemLeave)===null||u===void 0||u.call(s)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:he(a.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var u;(u=s.onItemLeave)===null||u===void 0||u.call(s)}}),onKeyDown:he(a.onKeyDown,m=>{var u;((u=s.searchRef)===null||u===void 0?void 0:u.current)!==""&&m.key===" "||(xw.includes(m.key)&&b(),m.key===" "&&m.preventDefault())})}))))}),ni="SelectItemText",Uw=p.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,...i}=e,a=Vn(ni,n),l=ba(ni,n),s=ym(ni,n),c=Sw(ni,n),[f,d]=p.useState(null),h=ze(t,m=>d(m),s.onItemTextChange,m=>{var u;return(u=l.itemTextRefCallback)===null||u===void 0?void 0:u.call(l,m,s.value,s.disabled)}),y=f==null?void 0:f.textContent,w=p.useMemo(()=>p.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},y),[s.disabled,s.value,y]),{onNativeOptionAdd:v,onNativeOptionRemove:b}=c;return Ct(()=>(v(w),()=>b(w)),[v,b,w]),p.createElement(p.Fragment,null,p.createElement(xe.span,Z({id:s.textId},i,{ref:h})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Bn.createPortal(i.children,a.valueNode):null)}),Ww="SelectItemIndicator",Gw=p.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return ym(Ww,n).isSelected?p.createElement(xe.span,Z({"aria-hidden":!0},r,{ref:t})):null}),Kw=p.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return p.createElement(xe.div,Z({"aria-hidden":!0},r,{ref:t}))}),wm=p.forwardRef((e,t)=>{const{value:n,...r}=e,o=p.useRef(null),i=ze(t,o),a=$0(n);return p.useEffect(()=>{const l=o.current,s=window.HTMLSelectElement.prototype,f=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==n&&f){const d=new Event("change",{bubbles:!0});f.call(l,n),l.dispatchEvent(d)}},[a,n]),p.createElement(lm,{asChild:!0},p.createElement("select",Z({},r,{ref:i,defaultValue:n})))});wm.displayName="BubbleSelect";function xm(e){const t=Dt(e),n=p.useRef(""),r=p.useRef(0),o=p.useCallback(a=>{const l=n.current+a;t(l),function s(c){n.current=c,window.clearTimeout(r.current),c!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(l)},[t]),i=p.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return p.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,o,i]}function bm(e,t,n){const o=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let a=Yw(e,Math.max(i,0));o.length===1&&(a=a.filter(c=>c!==n));const s=a.find(c=>c.textValue.toLowerCase().startsWith(o.toLowerCase()));return s!==n?s:void 0}function Yw(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const Qw=_w,Cm=Tw,Xw=Dw,Zw=Nw,Jw=Aw,Em=Pw,qw=Lw,Sm=Bw,_m=Vw,ex=Uw,tx=Gw,km=Kw;var nx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const rx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ox=(e,t)=>{const n=p.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,children:l,...s},c)=>p.createElement("svg",{ref:c,...nx,width:o,height:o,stroke:r,strokeWidth:a?Number(i)*24/Number(o):i,className:`lucide lucide-${rx(e)}`,...s},[...t.map(([f,d])=>p.createElement(f,d)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${e}`,n};var Ao=ox;const ix=Ao("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Tm=Ao("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),ax=Ao("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),lx=Ao("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),sx=Ao("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);var Rm=Qw,Dm=Xw,yc=p.forwardRef(({className:e,children:t,...n},r)=>p.createElement(Cm,{ref:r,className:Ve("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...n},t,p.createElement(Zw,{asChild:!0},p.createElement(ax,{className:"h-4 w-4 opacity-50"}))));yc.displayName=Cm.displayName;var wc=p.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>p.createElement(Jw,null,p.createElement(Em,{ref:o,className:Ve("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r},p.createElement(qw,{className:Ve("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")},t))));wc.displayName=Em.displayName;var cx=p.forwardRef(({className:e,...t},n)=>p.createElement(Sm,{ref:n,className:Ve("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));cx.displayName=Sm.displayName;var no=p.forwardRef(({className:e,children:t,...n},r)=>p.createElement(_m,{ref:r,className:Ve("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n},p.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},p.createElement(tx,null,p.createElement(Tm,{className:"h-4 w-4"}))),p.createElement(ex,null,t)));no.displayName=_m.displayName;var ux=p.forwardRef(({className:e,...t},n)=>p.createElement(km,{ref:n,className:Ve("-mx-1 my-1 h-px bg-muted",e),...t}));ux.displayName=km.displayName;function Nm(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],r=typeof n;(r==="object"||r==="function")&&!Object.isFrozen(n)&&Nm(n)}),e}class sd{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Am(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function rn(e,...t){const n=Object.create(null);for(const r in e)n[r]=e[r];return t.forEach(function(r){for(const o in r)n[o]=r[o]}),n}const dx="</span>",cd=e=>!!e.scope,fx=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((r,o)=>`${r}${"_".repeat(o+1)}`)].join(" ")}return`${t}${e}`};class px{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Am(t)}openNode(t){if(!cd(t))return;const n=fx(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){cd(t)&&(this.buffer+=dx)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const ud=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class xc{constructor(){this.rootNode=ud(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=ud({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(r=>this._walk(t,r)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{xc._collapse(n)}))}}class mx extends xc{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const r=t.root;n&&(r.scope=`language:${n}`),this.add(r)}toHTML(){return new px(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Co(e){return e?typeof e=="string"?e:e.source:null}function Pm(e){return Un("(?=",e,")")}function hx(e){return Un("(?:",e,")*")}function gx(e){return Un("(?:",e,")?")}function Un(...e){return e.map(n=>Co(n)).join("")}function vx(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function bc(...e){return"("+(vx(e).capture?"":"?:")+e.map(r=>Co(r)).join("|")+")"}function $m(e){return new RegExp(e.toString()+"|").exec("").length-1}function yx(e,t){const n=e&&e.exec(t);return n&&n.index===0}const wx=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Cc(e,{joinWith:t}){let n=0;return e.map(r=>{n+=1;const o=n;let i=Co(r),a="";for(;i.length>0;){const l=wx.exec(i);if(!l){a+=i;break}a+=i.substring(0,l.index),i=i.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?a+="\\"+String(Number(l[1])+o):(a+=l[0],l[0]==="("&&n++)}return a}).map(r=>`(${r})`).join(t)}const xx=/\b\B/,Im="[a-zA-Z]\\w*",Ec="[a-zA-Z_]\\w*",Mm="\\b\\d+(\\.\\d+)?",Om="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Lm="\\b(0b[01]+)",bx="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Cx=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Un(t,/.*\b/,e.binary,/\b.*/)),rn({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,r)=>{n.index!==0&&r.ignoreMatch()}},e)},Eo={begin:"\\\\[\\s\\S]",relevance:0},Ex={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Eo]},Sx={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Eo]},_x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Ca=function(e,t,n={}){const r=rn({scope:"comment",begin:e,end:t,contains:[]},n);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=bc("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:Un(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},kx=Ca("//","$"),Tx=Ca("/\\*","\\*/"),Rx=Ca("#","$"),Dx={scope:"number",begin:Mm,relevance:0},Nx={scope:"number",begin:Om,relevance:0},Ax={scope:"number",begin:Lm,relevance:0},Px={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Eo,{begin:/\[/,end:/\]/,relevance:0,contains:[Eo]}]}]},$x={scope:"title",begin:Im,relevance:0},Ix={scope:"title",begin:Ec,relevance:0},Mx={begin:"\\.\\s*"+Ec,relevance:0},Ox=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var ri=Object.freeze({__proto__:null,MATCH_NOTHING_RE:xx,IDENT_RE:Im,UNDERSCORE_IDENT_RE:Ec,NUMBER_RE:Mm,C_NUMBER_RE:Om,BINARY_NUMBER_RE:Lm,RE_STARTERS_RE:bx,SHEBANG:Cx,BACKSLASH_ESCAPE:Eo,APOS_STRING_MODE:Ex,QUOTE_STRING_MODE:Sx,PHRASAL_WORDS_MODE:_x,COMMENT:Ca,C_LINE_COMMENT_MODE:kx,C_BLOCK_COMMENT_MODE:Tx,HASH_COMMENT_MODE:Rx,NUMBER_MODE:Dx,C_NUMBER_MODE:Nx,BINARY_NUMBER_MODE:Ax,REGEXP_MODE:Px,TITLE_MODE:$x,UNDERSCORE_TITLE_MODE:Ix,METHOD_GUARD:Mx,END_SAME_AS_BEGIN:Ox});function Lx(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Fx(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function zx(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Lx,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function jx(e,t){Array.isArray(e.illegal)&&(e.illegal=bc(...e.illegal))}function Bx(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Hx(e,t){e.relevance===void 0&&(e.relevance=1)}const Vx=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=n.keywords,e.begin=Un(n.beforeMatch,Pm(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Ux=["of","and","for","in","not","or","if","then","parent","list","value"],Wx="keyword";function Fm(e,t,n=Wx){const r=Object.create(null);return typeof e=="string"?o(n,e.split(" ")):Array.isArray(e)?o(n,e):Object.keys(e).forEach(function(i){Object.assign(r,Fm(e[i],t,i))}),r;function o(i,a){t&&(a=a.map(l=>l.toLowerCase())),a.forEach(function(l){const s=l.split("|");r[s[0]]=[i,Gx(s[0],s[1])]})}}function Gx(e,t){return t?Number(t):Kx(e)?0:1}function Kx(e){return Ux.includes(e.toLowerCase())}const dd={},Pn=e=>{console.error(e)},fd=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Qn=(e,t)=>{dd[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),dd[`${e}/${t}`]=!0)},Zi=new Error;function zm(e,t,{key:n}){let r=0;const o=e[n],i={},a={};for(let l=1;l<=t.length;l++)a[l+r]=o[l],i[l+r]=!0,r+=$m(t[l-1]);e[n]=a,e[n]._emit=i,e[n]._multi=!0}function Yx(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Pn("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Zi;if(typeof e.beginScope!="object"||e.beginScope===null)throw Pn("beginScope must be object"),Zi;zm(e,e.begin,{key:"beginScope"}),e.begin=Cc(e.begin,{joinWith:""})}}function Qx(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Pn("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Zi;if(typeof e.endScope!="object"||e.endScope===null)throw Pn("endScope must be object"),Zi;zm(e,e.end,{key:"endScope"}),e.end=Cc(e.end,{joinWith:""})}}function Xx(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Zx(e){Xx(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Yx(e),Qx(e)}function Jx(e){function t(a,l){return new RegExp(Co(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(l?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,s){s.position=this.position++,this.matchIndexes[this.matchAt]=s,this.regexes.push([s,l]),this.matchAt+=$m(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(s=>s[1]);this.matcherRe=t(Cc(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const s=this.matcherRe.exec(l);if(!s)return null;const c=s.findIndex((d,h)=>h>0&&d!==void 0),f=this.matchIndexes[c];return s.splice(0,c),Object.assign(s,f)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const s=new n;return this.rules.slice(l).forEach(([c,f])=>s.addRule(c,f)),s.compile(),this.multiRegexes[l]=s,s}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,s){this.rules.push([l,s]),s.type==="begin"&&this.count++}exec(l){const s=this.getMatcher(this.regexIndex);s.lastIndex=this.lastIndex;let c=s.exec(l);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const f=this.getMatcher(0);f.lastIndex=this.lastIndex+1,c=f.exec(l)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function o(a){const l=new r;return a.contains.forEach(s=>l.addRule(s.begin,{rule:s,type:"begin"})),a.terminatorEnd&&l.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&l.addRule(a.illegal,{type:"illegal"}),l}function i(a,l){const s=a;if(a.isCompiled)return s;[Fx,Bx,Zx,Vx].forEach(f=>f(a,l)),e.compilerExtensions.forEach(f=>f(a,l)),a.__beforeBegin=null,[zx,jx,Hx].forEach(f=>f(a,l)),a.isCompiled=!0;let c=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),c=a.keywords.$pattern,delete a.keywords.$pattern),c=c||/\w+/,a.keywords&&(a.keywords=Fm(a.keywords,e.case_insensitive)),s.keywordPatternRe=t(c,!0),l&&(a.begin||(a.begin=/\B|\b/),s.beginRe=t(s.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(s.endRe=t(s.end)),s.terminatorEnd=Co(s.end)||"",a.endsWithParent&&l.terminatorEnd&&(s.terminatorEnd+=(a.end?"|":"")+l.terminatorEnd)),a.illegal&&(s.illegalRe=t(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(f){return qx(f==="self"?a:f)})),a.contains.forEach(function(f){i(f,s)}),a.starts&&i(a.starts,l),s.matcher=o(s),s}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=rn(e.classNameAliases||{}),i(e)}function jm(e){return e?e.endsWithParent||jm(e.starts):!1}function qx(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return rn(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:jm(e)?rn(e,{starts:e.starts?rn(e.starts):null}):Object.isFrozen(e)?rn(e):e}var e1="11.8.0";class t1 extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const rl=Am,pd=rn,md=Symbol("nomatch"),n1=7,Bm=function(e){const t=Object.create(null),n=Object.create(null),r=[];let o=!0;const i="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:mx};function s(T){return l.noHighlightRe.test(T)}function c(T){let E=T.className+" ";E+=T.parentNode?T.parentNode.className:"";const D=l.languageDetectRe.exec(E);if(D){const A=I(D[1]);return A||(fd(i.replace("{}",D[1])),fd("Falling back to no-highlight mode for this block.",T)),A?D[1]:"no-highlight"}return E.split(/\s+/).find(A=>s(A)||I(A))}function f(T,E,D){let A="",F="";typeof E=="object"?(A=T,D=E.ignoreIllegals,F=E.language):(Qn("10.7.0","highlight(lang, code, ...args) has been deprecated."),Qn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),F=T,A=E),D===void 0&&(D=!0);const W={code:A,language:F};V("before:highlight",W);const Q=W.result?W.result:d(W.language,W.code,D);return Q.code=W.code,V("after:highlight",Q),Q}function d(T,E,D,A){const F=Object.create(null);function W($,j){return $.keywords[j]}function Q(){if(!G.keywords){De.addText(ce);return}let $=0;G.keywordPatternRe.lastIndex=0;let j=G.keywordPatternRe.exec(ce),Y="";for(;j;){Y+=ce.substring($,j.index);const oe=$e.case_insensitive?j[0].toLowerCase():j[0],Ie=W(G,oe);if(Ie){const[At,sh]=Ie;if(De.addText(Y),Y="",F[oe]=(F[oe]||0)+1,F[oe]<=n1&&(Po+=sh),At.startsWith("_"))Y+=j[0];else{const ch=$e.classNameAliases[At]||At;ae(j[0],ch)}}else Y+=j[0];$=G.keywordPatternRe.lastIndex,j=G.keywordPatternRe.exec(ce)}Y+=ce.substring($),De.addText(Y)}function pe(){if(ce==="")return;let $=null;if(typeof G.subLanguage=="string"){if(!t[G.subLanguage]){De.addText(ce);return}$=d(G.subLanguage,ce,!0,Cn[G.subLanguage]),Cn[G.subLanguage]=$._top}else $=y(ce,G.subLanguage.length?G.subLanguage:null);G.relevance>0&&(Po+=$.relevance),De.__addSublanguage($._emitter,$.language)}function re(){G.subLanguage!=null?pe():Q(),ce=""}function ae($,j){$!==""&&(De.startScope(j),De.addText($),De.endScope())}function H($,j){let Y=1;const oe=j.length-1;for(;Y<=oe;){if(!$._emit[Y]){Y++;continue}const Ie=$e.classNameAliases[$[Y]]||$[Y],At=j[Y];Ie?ae(At,Ie):(ce=At,Q(),ce=""),Y++}}function ee($,j){return $.scope&&typeof $.scope=="string"&&De.openNode($e.classNameAliases[$.scope]||$.scope),$.beginScope&&($.beginScope._wrap?(ae(ce,$e.classNameAliases[$.beginScope._wrap]||$.beginScope._wrap),ce=""):$.beginScope._multi&&(H($.beginScope,j),ce="")),G=Object.create($,{parent:{value:G}}),G}function ke($,j,Y){let oe=yx($.endRe,Y);if(oe){if($["on:end"]){const Ie=new sd($);$["on:end"](j,Ie),Ie.isMatchIgnored&&(oe=!1)}if(oe){for(;$.endsParent&&$.parent;)$=$.parent;return $}}if($.endsWithParent)return ke($.parent,j,Y)}function le($){return G.matcher.regexIndex===0?(ce+=$[0],1):(Sa=!0,0)}function te($){const j=$[0],Y=$.rule,oe=new sd(Y),Ie=[Y.__beforeBegin,Y["on:begin"]];for(const At of Ie)if(At&&(At($,oe),oe.isMatchIgnored))return le(j);return Y.skip?ce+=j:(Y.excludeBegin&&(ce+=j),re(),!Y.returnBegin&&!Y.excludeBegin&&(ce=j)),ee(Y,$),Y.returnBegin?0:j.length}function ne($){const j=$[0],Y=E.substring($.index),oe=ke(G,$,Y);if(!oe)return md;const Ie=G;G.endScope&&G.endScope._wrap?(re(),ae(j,G.endScope._wrap)):G.endScope&&G.endScope._multi?(re(),H(G.endScope,$)):Ie.skip?ce+=j:(Ie.returnEnd||Ie.excludeEnd||(ce+=j),re(),Ie.excludeEnd&&(ce=j));do G.scope&&De.closeNode(),!G.skip&&!G.subLanguage&&(Po+=G.relevance),G=G.parent;while(G!==oe.parent);return oe.starts&&ee(oe.starts,$),Ie.returnEnd?0:j.length}function je(){const $=[];for(let j=G;j!==$e;j=j.parent)j.scope&&$.unshift(j.scope);$.forEach(j=>De.openNode(j))}let Ce={};function Kt($,j){const Y=j&&j[0];if(ce+=$,Y==null)return re(),0;if(Ce.type==="begin"&&j.type==="end"&&Ce.index===j.index&&Y===""){if(ce+=E.slice(j.index,j.index+1),!o){const oe=new Error(`0 width match regex (${T})`);throw oe.languageName=T,oe.badRule=Ce.rule,oe}return 1}if(Ce=j,j.type==="begin")return te(j);if(j.type==="illegal"&&!D){const oe=new Error('Illegal lexeme "'+Y+'" for mode "'+(G.scope||"<unnamed>")+'"');throw oe.mode=G,oe}else if(j.type==="end"){const oe=ne(j);if(oe!==md)return oe}if(j.type==="illegal"&&Y==="")return 1;if(Ea>1e5&&Ea>j.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ce+=Y,Y.length}const $e=I(T);if(!$e)throw Pn(i.replace("{}",T)),new Error('Unknown language: "'+T+'"');const bn=Jx($e);let Pr="",G=A||bn;const Cn={},De=new l.__emitter(l);je();let ce="",Po=0,En=0,Ea=0,Sa=!1;try{if($e.__emitTokens)$e.__emitTokens(E,De);else{for(G.matcher.considerAll();;){Ea++,Sa?Sa=!1:G.matcher.considerAll(),G.matcher.lastIndex=En;const $=G.matcher.exec(E);if(!$)break;const j=E.substring(En,$.index),Y=Kt(j,$);En=$.index+Y}Kt(E.substring(En))}return De.finalize(),Pr=De.toHTML(),{language:T,value:Pr,relevance:Po,illegal:!1,_emitter:De,_top:G}}catch($){if($.message&&$.message.includes("Illegal"))return{language:T,value:rl(E),illegal:!0,relevance:0,_illegalBy:{message:$.message,index:En,context:E.slice(En-100,En+100),mode:$.mode,resultSoFar:Pr},_emitter:De};if(o)return{language:T,value:rl(E),illegal:!1,relevance:0,errorRaised:$,_emitter:De,_top:G};throw $}}function h(T){const E={value:rl(T),illegal:!1,relevance:0,_top:a,_emitter:new l.__emitter(l)};return E._emitter.addText(T),E}function y(T,E){E=E||l.languages||Object.keys(t);const D=h(T),A=E.filter(I).filter(z).map(re=>d(re,T,!1));A.unshift(D);const F=A.sort((re,ae)=>{if(re.relevance!==ae.relevance)return ae.relevance-re.relevance;if(re.language&&ae.language){if(I(re.language).supersetOf===ae.language)return 1;if(I(ae.language).supersetOf===re.language)return-1}return 0}),[W,Q]=F,pe=W;return pe.secondBest=Q,pe}function w(T,E,D){const A=E&&n[E]||D;T.classList.add("hljs"),T.classList.add(`language-${A}`)}function v(T){let E=null;const D=c(T);if(s(D))return;if(V("before:highlightElement",{el:T,language:D}),T.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(T)),l.throwUnescapedHTML))throw new t1("One of your code blocks includes unescaped HTML.",T.innerHTML);E=T;const A=E.textContent,F=D?f(A,{language:D,ignoreIllegals:!0}):y(A);T.innerHTML=F.value,w(T,D,F.language),T.result={language:F.language,re:F.relevance,relevance:F.relevance},F.secondBest&&(T.secondBest={language:F.secondBest.language,relevance:F.secondBest.relevance}),V("after:highlightElement",{el:T,result:F,text:A})}function b(T){l=pd(l,T)}const m=()=>{x(),Qn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function u(){x(),Qn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let g=!1;function x(){if(document.readyState==="loading"){g=!0;return}document.querySelectorAll(l.cssSelector).forEach(v)}function C(){g&&x()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",C,!1);function _(T,E){let D=null;try{D=E(e)}catch(A){if(Pn("Language definition for '{}' could not be registered.".replace("{}",T)),o)Pn(A);else throw A;D=a}D.name||(D.name=T),t[T]=D,D.rawDefinition=E.bind(null,e),D.aliases&&M(D.aliases,{languageName:T})}function S(T){delete t[T];for(const E of Object.keys(n))n[E]===T&&delete n[E]}function k(){return Object.keys(t)}function I(T){return T=(T||"").toLowerCase(),t[T]||t[n[T]]}function M(T,{languageName:E}){typeof T=="string"&&(T=[T]),T.forEach(D=>{n[D.toLowerCase()]=E})}function z(T){const E=I(T);return E&&!E.disableAutodetect}function L(T){T["before:highlightBlock"]&&!T["before:highlightElement"]&&(T["before:highlightElement"]=E=>{T["before:highlightBlock"](Object.assign({block:E.el},E))}),T["after:highlightBlock"]&&!T["after:highlightElement"]&&(T["after:highlightElement"]=E=>{T["after:highlightBlock"](Object.assign({block:E.el},E))})}function U(T){L(T),r.push(T)}function K(T){const E=r.indexOf(T);E!==-1&&r.splice(E,1)}function V(T,E){const D=T;r.forEach(function(A){A[D]&&A[D](E)})}function B(T){return Qn("10.7.0","highlightBlock will be removed entirely in v12.0"),Qn("10.7.0","Please use highlightElement now."),v(T)}Object.assign(e,{highlight:f,highlightAuto:y,highlightAll:x,highlightElement:v,highlightBlock:B,configure:b,initHighlighting:m,initHighlightingOnLoad:u,registerLanguage:_,unregisterLanguage:S,listLanguages:k,getLanguage:I,registerAliases:M,autoDetection:z,inherit:pd,addPlugin:U,removePlugin:K}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=e1,e.regex={concat:Un,lookahead:Pm,either:bc,optional:gx,anyNumberOfTimes:hx};for(const T in ri)typeof ri[T]=="object"&&Nm(ri[T]);return Object.assign(e,ri),e},_r=Bm({});_r.newInstance=()=>Bm({});var r1=_r;_r.HighlightJS=_r;_r.default=_r;const Sc=ps(r1);function o1(e){const t=e.regex,n={},r={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},r]});const o={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,o]};o.contains.push(a);const l={className:"",begin:/\\"/},s={className:"string",begin:/'/,end:/'/},c={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},f=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],d=e.SHEBANG({binary:`(${f.join("|")})`,relevance:10}),h={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},y=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],w=["true","false"],v={match:/(\/[a-z._-]+)+/},b=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],m=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],u=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],g=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:y,literal:w,built_in:[...b,...m,"set","shopt",...u,...g]},contains:[d,e.SHEBANG(),h,c,e.HASH_COMMENT_MODE,i,v,a,l,s,n]}}const Ji="[A-Za-z$_][0-9A-Za-z$_]*",Hm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Vm=["true","false","null","undefined","NaN","Infinity"],Um=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Wm=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Gm=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Km=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ym=[].concat(Gm,Um,Wm);function i1(e){const t=e.regex,n=(E,{after:D})=>{const A="</"+E[0].slice(1);return E.input.indexOf(A,D)!==-1},r=Ji,o={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(E,D)=>{const A=E[0].length+E.index,F=E.input[A];if(F==="<"||F===","){D.ignoreMatch();return}F===">"&&(n(E,{after:A})||D.ignoreMatch());let W;const Q=E.input.substring(A);if(W=Q.match(/^\s*=/)){D.ignoreMatch();return}if((W=Q.match(/^\s+extends\s+/))&&W.index===0){D.ignoreMatch();return}}},l={$pattern:Ji,keyword:Hm,literal:Vm,built_in:Ym,"variable.language":Km},s="[0-9](_?[0-9])*",c=`\\.(${s})`,f="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${f})((${c})|\\.)?|(${c}))[eE][+-]?(${s})\\b`},{begin:`\\b(${f})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},y={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},w={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},v={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},b={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},u={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},g=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,v,b,{match:/\$\d+/},d];h.contains=g.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(g)});const x=[].concat(u,h.contains),C=x.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(x)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:C},S={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,"(",t.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Um,...Wm]}},I={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},M={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[_],illegal:/%/},z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function L(E){return t.concat("(?!",E.join("|"),")")}const U={match:t.concat(/\b/,L([...Gm,"super","import"]),r,t.lookahead(/\(/)),className:"title.function",relevance:0},K={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},V={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},_]},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",T={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(B)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[_]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:C,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),I,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,w,v,b,u,{match:/\$\d+/},d,k,{className:"attr",begin:r+t.lookahead(":"),relevance:0},T,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[u,e.REGEXP_MODE,{className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:C}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:i},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},M,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[_,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},K,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[_]},U,z,S,V,{match:/\$[(.]/}]}}function a1(e){const t=i1(e),n=Ji,r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],o={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[t.exports.CLASS_REFERENCE]},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},contains:[t.exports.CLASS_REFERENCE]},a={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],s={$pattern:Ji,keyword:Hm.concat(l),literal:Vm,built_in:Ym.concat(r),"variable.language":Km},c={className:"meta",begin:"@"+n},f=(h,y,w)=>{const v=h.contains.findIndex(b=>b.label===y);if(v===-1)throw new Error("can not find mode to replace");h.contains.splice(v,1,w)};Object.assign(t.keywords,s),t.exports.PARAMS_CONTAINS.push(c),t.contains=t.contains.concat([c,o,i]),f(t,"shebang",e.SHEBANG()),f(t,"use_strict",a);const d=t.contains.find(h=>h.label==="func.def");return d.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}Sc.registerLanguage("typescript",a1);Sc.registerLanguage("bash",o1);function l1(e,t){return Sc.highlight(e,{language:t}).value}const s1={tabSize:2};function cs({className:e,code:t,language:n}){const r=p.useMemo(()=>({__html:l1(t,n)}),[n,t]);return R.jsx("div",{className:Ve("font-mono text-sm w-full justify-center p-4 items-center overflow-scroll rounded bg-slate-100 border border-slate-200",e),children:R.jsx("pre",{style:s1,children:R.jsx("code",{dangerouslySetInnerHTML:r})})})}const ol="rovingFocusGroup.onEntryFocus",c1={bubbles:!1,cancelable:!0},_c="RovingFocusGroup",[us,Qm,u1]=Vp(_c),[d1,Xm]=Do(_c,[u1]),[f1,p1]=d1(_c),m1=p.forwardRef((e,t)=>p.createElement(us.Provider,{scope:e.__scopeRovingFocusGroup},p.createElement(us.Slot,{scope:e.__scopeRovingFocusGroup},p.createElement(h1,Z({},e,{ref:t}))))),h1=p.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:s,onEntryFocus:c,...f}=e,d=p.useRef(null),h=ze(t,d),y=cc(i),[w=null,v]=Xi({prop:a,defaultProp:l,onChange:s}),[b,m]=p.useState(!1),u=Dt(c),g=Qm(n),x=p.useRef(!1),[C,_]=p.useState(0);return p.useEffect(()=>{const S=d.current;if(S)return S.addEventListener(ol,u),()=>S.removeEventListener(ol,u)},[u]),p.createElement(f1,{scope:n,orientation:r,dir:y,loop:o,currentTabStopId:w,onItemFocus:p.useCallback(S=>v(S),[v]),onItemShiftTab:p.useCallback(()=>m(!0),[]),onFocusableItemAdd:p.useCallback(()=>_(S=>S+1),[]),onFocusableItemRemove:p.useCallback(()=>_(S=>S-1),[])},p.createElement(xe.div,Z({tabIndex:b||C===0?-1:0,"data-orientation":r},f,{ref:h,style:{outline:"none",...e.style},onMouseDown:he(e.onMouseDown,()=>{x.current=!0}),onFocus:he(e.onFocus,S=>{const k=!x.current;if(S.target===S.currentTarget&&k&&!b){const I=new CustomEvent(ol,c1);if(S.currentTarget.dispatchEvent(I),!I.defaultPrevented){const M=g().filter(V=>V.focusable),z=M.find(V=>V.active),L=M.find(V=>V.id===w),K=[z,L,...M].filter(Boolean).map(V=>V.ref.current);Zm(K)}}x.current=!1}),onBlur:he(e.onBlur,()=>m(!1))})))}),g1="RovingFocusGroupItem",v1=p.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...a}=e,l=ha(),s=i||l,c=p1(g1,n),f=c.currentTabStopId===s,d=Qm(n),{onFocusableItemAdd:h,onFocusableItemRemove:y}=c;return p.useEffect(()=>{if(r)return h(),()=>y()},[r,h,y]),p.createElement(us.ItemSlot,{scope:n,id:s,focusable:r,active:o},p.createElement(xe.span,Z({tabIndex:f?0:-1,"data-orientation":c.orientation},a,{ref:t,onMouseDown:he(e.onMouseDown,w=>{r?c.onItemFocus(s):w.preventDefault()}),onFocus:he(e.onFocus,()=>c.onItemFocus(s)),onKeyDown:he(e.onKeyDown,w=>{if(w.key==="Tab"&&w.shiftKey){c.onItemShiftTab();return}if(w.target!==w.currentTarget)return;const v=x1(w,c.orientation,c.dir);if(v!==void 0){w.preventDefault();let m=d().filter(u=>u.focusable).map(u=>u.ref.current);if(v==="last")m.reverse();else if(v==="prev"||v==="next"){v==="prev"&&m.reverse();const u=m.indexOf(w.currentTarget);m=c.loop?b1(m,u+1):m.slice(u+1)}setTimeout(()=>Zm(m))}})})))}),y1={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function w1(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function x1(e,t,n){const r=w1(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return y1[r]}function Zm(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function b1(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const C1=m1,E1=v1;function S1(e,t){return p.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Jm=e=>{const{present:t,children:n}=e,r=_1(t),o=typeof n=="function"?n({present:r.isPresent}):p.Children.only(n),i=ze(r.ref,o.ref);return typeof n=="function"||r.isPresent?p.cloneElement(o,{ref:i}):null};Jm.displayName="Presence";function _1(e){const[t,n]=p.useState(),r=p.useRef({}),o=p.useRef(e),i=p.useRef("none"),a=e?"mounted":"unmounted",[l,s]=S1(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return p.useEffect(()=>{const c=oi(r.current);i.current=l==="mounted"?c:"none"},[l]),Ct(()=>{const c=r.current,f=o.current;if(f!==e){const h=i.current,y=oi(c);e?s("MOUNT"):y==="none"||(c==null?void 0:c.display)==="none"?s("UNMOUNT"):s(f&&h!==y?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Ct(()=>{if(t){const c=d=>{const y=oi(r.current).includes(d.animationName);d.target===t&&y&&Bn.flushSync(()=>s("ANIMATION_END"))},f=d=>{d.target===t&&(i.current=oi(r.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:p.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function oi(e){return(e==null?void 0:e.animationName)||"none"}const qm="Tabs",[k1,ib]=Do(qm,[Xm]),eh=Xm(),[T1,kc]=k1(qm),R1=p.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",dir:l,activationMode:s="automatic",...c}=e,f=cc(l),[d,h]=Xi({prop:r,onChange:o,defaultProp:i});return p.createElement(T1,{scope:n,baseId:ha(),value:d,onValueChange:h,orientation:a,dir:f,activationMode:s},p.createElement(xe.div,Z({dir:f,"data-orientation":a},c,{ref:t})))}),D1="TabsList",N1=p.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...o}=e,i=kc(D1,n),a=eh(n);return p.createElement(C1,Z({asChild:!0},a,{orientation:i.orientation,dir:i.dir,loop:r}),p.createElement(xe.div,Z({role:"tablist","aria-orientation":i.orientation},o,{ref:t})))}),A1="TabsTrigger",P1=p.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:o=!1,...i}=e,a=kc(A1,n),l=eh(n),s=th(a.baseId,r),c=nh(a.baseId,r),f=r===a.value;return p.createElement(E1,Z({asChild:!0},l,{focusable:!o,active:f}),p.createElement(xe.button,Z({type:"button",role:"tab","aria-selected":f,"aria-controls":c,"data-state":f?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:s},i,{ref:t,onMouseDown:he(e.onMouseDown,d=>{!o&&d.button===0&&d.ctrlKey===!1?a.onValueChange(r):d.preventDefault()}),onKeyDown:he(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&a.onValueChange(r)}),onFocus:he(e.onFocus,()=>{const d=a.activationMode!=="manual";!f&&!o&&d&&a.onValueChange(r)})})))}),$1="TabsContent",I1=p.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:o,children:i,...a}=e,l=kc($1,n),s=th(l.baseId,r),c=nh(l.baseId,r),f=r===l.value,d=p.useRef(f);return p.useEffect(()=>{const h=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(h)},[]),p.createElement(Jm,{present:o||f},({present:h})=>p.createElement(xe.div,Z({"data-state":f?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":s,hidden:!h,id:c,tabIndex:0},a,{ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0}}),h&&i))});function th(e,t){return`${e}-trigger-${t}`}function nh(e,t){return`${e}-content-${t}`}const M1=R1,rh=N1,oh=P1,ih=I1;var O1=M1,ah=p.forwardRef(({className:e,...t},n)=>p.createElement(rh,{ref:n,className:Ve("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));ah.displayName=rh.displayName;var ds=p.forwardRef(({className:e,...t},n)=>p.createElement(oh,{ref:n,className:Ve("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));ds.displayName=oh.displayName;var fs=p.forwardRef(({className:e,...t},n)=>p.createElement(ih,{ref:n,className:Ve("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));fs.displayName=ih.displayName;function L1(e){return e.toLowerCase()}var F1=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],z1=/[^A-Z0-9]+/gi;function j1(e,t){t===void 0&&(t={});for(var n=t.splitRegexp,r=n===void 0?F1:n,o=t.stripRegexp,i=o===void 0?z1:o,a=t.transform,l=a===void 0?L1:a,s=t.delimiter,c=s===void 0?" ":s,f=hd(hd(e,r,"$1\0$2"),i,"\0"),d=0,h=f.length;f.charAt(d)==="\0";)d++;for(;f.charAt(h-1)==="\0";)h--;return f.slice(d,h).split("\0").map(l).join(c)}function hd(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(r,o){return r.replace(o,n)},e)}function B1(e,t){return t===void 0&&(t={}),j1(e,st({delimiter:"."},t))}function H1(e,t){return t===void 0&&(t={}),B1(e,st({delimiter:"_"},t))}const V1=0,U1=2e3,gd=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,vd=Op,W1=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return vd(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,a=Object.keys(o).map(c=>{const f=n==null?void 0:n[c],d=i==null?void 0:i[c];if(f===null)return null;const h=gd(f)||gd(d);return o[c][h]}),l=n&&Object.entries(n).reduce((c,f)=>{let[d,h]=f;return h===void 0||(c[d]=h),c},{}),s=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,f)=>{let{class:d,className:h,...y}=f;return Object.entries(y).every(w=>{let[v,b]=w;return Array.isArray(b)?b.includes({...i,...l}[v]):{...i,...l}[v]===b})?[...c,d,h]:c},[]);return vd(e,a,s,n==null?void 0:n.class,n==null?void 0:n.className)};var G1=W1("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),lh=p.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>p.createElement(r?Cr:"button",{className:Ve(G1({variant:t,size:n,className:e})),ref:i,...o}));lh.displayName="Button";function K1({value:e,...t}){const[n,r]=p.useState(!1);p.useEffect(()=>{setTimeout(()=>{r(!1)},U1)},[n]);function o(){navigator.clipboard.writeText(e),r(!0)}return R.jsx(lh,{onClick:o,size:"icon",variant:"ghost",...t,children:n?R.jsx(Tm,{size:16}):R.jsx(lx,{size:16})})}const Y1="modulepreload",Q1=function(e){return"/ui/"+e},yd={},P=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Q1(i),i in yd)return;yd[i]=!0;const a=i.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=o.length-1;f>=0;f--){const d=o[f];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Y1,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};function X1(e){const t=p.lazy("path"in e?async()=>P(()=>import(e.path),[]):e.import);return R.jsx(p.Suspense,{fallback:R.jsxs("div",{className:"flex items-center text-sm text-muted-foreground",children:[R.jsx("svg",{className:"mr-2 h-4 w-4 animate-spin",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Loading..."]}),children:R.jsx(t,{})})}function il({children:e,className:t,isExternal:n,...r}){return R.jsxs("a",{...r,className:Ve("hover:underline underline-offset-2",n&&"flex space-x-3 items-center",t),rel:n?"noreferrer":void 0,target:n?"_blank":void 0,children:[e,n&&R.jsx(sx,{size:16})]})}function Z1({children:e,className:t,...n}){return R.jsx("h1",{className:Ve("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",t),...n,children:e})}function al({children:e,className:t,...n}){return R.jsx("h2",{className:Ve("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",t),...n,children:e})}function xi({children:e,className:t,...n}){return R.jsx("h3",{className:Ve("scroll-m-20 text-2xl font-semibold tracking-tight",t),...n,children:e})}function J1({demo:e}){const[t,n]=p.useState("default"),r=e.styles.find(a=>a.name===t)??e.styles[V1];function o(a){n(a)}function i(){return R.jsxs(Rm,{onValueChange:o,value:String(t),children:[R.jsxs(yc,{className:"h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4",children:[R.jsx("span",{className:"text-muted-foreground",children:"Style: "}),R.jsx(Dm,{placeholder:"Select style"})]}),R.jsx(wc,{children:e.styles.map(a=>R.jsx(no,{className:"text-xs",value:a.name,children:a.label},a.name))})]})}return R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"flex justify-between",id:e.name,children:[R.jsx(il,{href:`https://github.com/lukeshay/ui/blob/main/test/src/demos/${r.name}/${e.name.replace(" ","")}Demo.tsx`,isExternal:!0,children:R.jsx(xi,{className:"border-0",children:e.name})}),R.jsxs("div",{children:[R.jsxs(il,{className:"flex items-center space-x-2",href:"#toc",children:[R.jsx("span",{children:"Back to top"}),R.jsx(ix,{size:16})]}),R.jsx(il,{href:`https://ui.shadcn.com/docs/components/${H1(e.name).replace("_","-")}`,className:"space-x-2",isExternal:!0,children:R.jsx("span",{children:"@shadcn/ui"})})]})]}),R.jsxs(O1,{className:"relative mr-auto w-full",defaultValue:"preview",children:[R.jsx("div",{className:"flex items-center justify-between pb-3",children:R.jsxs(ah,{className:"w-full justify-start rounded-none border-b bg-transparent p-0",children:[R.jsx(ds,{className:"relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",value:"preview",children:"Preview"}),R.jsx(ds,{className:"relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",value:"code",children:"Code"})]})}),R.jsxs(fs,{className:"relative rounded-md border p-4 space-y-6",value:"preview",children:[R.jsx("div",{className:"flex items-center justify-between h-8",children:R.jsx(i,{})}),R.jsx("div",{className:"flex min-h-[350px] w-full justify-center items-center px-4",children:R.jsx(X1,{import:r.component})})]}),R.jsxs(fs,{className:"relative rounded-md border p-4 space-y-6",value:"code",children:[R.jsxs("div",{className:"flex items-center justify-between h-8",children:[R.jsx(i,{}),R.jsx(K1,{value:r.content})]}),R.jsx(cs,{code:r.content,language:"typescript"})]})]})]})}const wd=[{name:"Accordion",styles:[{component:async()=>P(()=>import("./AccordionDemo-2b19f8d6.js"),["assets/AccordionDemo-2b19f8d6.js","assets/index-5c41e3ac.js","assets/index-0c32d44d.js"]),content:`import * as React from "react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@lshay/ui/components/default/accordion"

function AccordionDemo(): React.ReactNode {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default AccordionDemo
`,path:"src/demos/default/AccordionDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./AccordionDemo-d8fa7734.js"),["assets/AccordionDemo-d8fa7734.js","assets/index-5c41e3ac.js","assets/index-0c32d44d.js","assets/react-icons.esm-b1e7558f.js"]),content:`import * as React from "react"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@lshay/ui/components/new-york/accordion"

function AccordionDemo(): React.ReactNode {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default AccordionDemo
`,path:"src/demos/new-york/AccordionDemo.tsx",label:"New York",name:"new-york"}]},{name:"Alert Dialog",styles:[{component:async()=>P(()=>import("./AlertDialogDemo-6d36e4dd.js"),["assets/AlertDialogDemo-6d36e4dd.js","assets/index-bfdb1264.js","assets/index-816706d1.js"]),content:`import * as React from "react"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@lshay/ui/components/default/alert-dialog"

function AlertDialogDemo(): React.ReactNode {
	return (
		<AlertDialog>
			<AlertDialogTrigger>Open</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertDialogDemo
`,path:"src/demos/default/AlertDialogDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./AlertDialogDemo-c6d14366.js"),["assets/AlertDialogDemo-c6d14366.js","assets/chunk-55Z2D7DU-0d9059ba.js","assets/index-bfdb1264.js","assets/index-816706d1.js"]),content:`import * as React from "react"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@lshay/ui/components/new-york/alert-dialog"

function AlertDialogDemo(): React.ReactNode {
	return (
		<AlertDialog>
			<AlertDialogTrigger>Open</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertDialogDemo
`,path:"src/demos/new-york/AlertDialogDemo.tsx",label:"New York",name:"new-york"}]},{name:"Alert",styles:[{component:async()=>P(()=>import("./AlertDemo-57eb6f4d.js"),["assets/AlertDemo-57eb6f4d.js","assets/terminal-bf3f0cf1.js"]),content:`import * as React from "react"
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@lshay/ui/components/default/alert"
import { Terminal } from "lucide-react"

function AlertDemo(): React.ReactNode {
	return (
		<Alert>
			<Terminal className="h-4 w-4" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You can add components and dependencies to your app using the cli.
			</AlertDescription>
		</Alert>
	)
}

export default AlertDemo
`,path:"src/demos/default/AlertDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./AlertDemo-5a52bd04.js"),["assets/AlertDemo-5a52bd04.js","assets/terminal-bf3f0cf1.js"]),content:`import * as React from "react"
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@lshay/ui/components/new-york/alert"
import { Terminal } from "lucide-react"

function AlertDemo(): React.ReactNode {
	return (
		<Alert>
			<Terminal className="h-4 w-4" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You can add components and dependencies to your app using the cli.
			</AlertDescription>
		</Alert>
	)
}

export default AlertDemo
`,path:"src/demos/new-york/AlertDemo.tsx",label:"New York",name:"new-york"}]},{name:"Aspect Ratio",styles:[{component:async()=>P(()=>import("./AspectRatioDemo-8c75c46d.js"),["assets/AspectRatioDemo-8c75c46d.js","assets/index-c20e82a0.js"]),content:`import * as React from "react"
import { AspectRatio } from "@lshay/ui/components/default/aspect-ratio"

function AspectRatioDemo(): React.ReactNode {
	return (
		<AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Photo by Drew Beamer"
				className="rounded-md object-cover"
			/>
		</AspectRatio>
	)
}

export default AspectRatioDemo
`,path:"src/demos/default/AspectRatioDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./AspectRatioDemo-939e8e37.js"),["assets/AspectRatioDemo-939e8e37.js","assets/index-c20e82a0.js"]),content:`import * as React from "react"
import { AspectRatio } from "@lshay/ui/components/new-york/aspect-ratio"

function AspectRatioDemo(): React.ReactNode {
	return (
		<AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Photo by Drew Beamer"
				className="rounded-md object-cover"
			/>
		</AspectRatio>
	)
}

export default AspectRatioDemo
`,path:"src/demos/new-york/AspectRatioDemo.tsx",label:"New York",name:"new-york"}]},{name:"Avatar",styles:[{component:async()=>P(()=>import("./AvatarDemo-66f136ad.js"),["assets/AvatarDemo-66f136ad.js","assets/index-b2766bd3.js"]),content:`import * as React from "react"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@lshay/ui/components/default/avatar"

function AvatarDemo(): React.ReactNode {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}

export default AvatarDemo
`,path:"src/demos/default/AvatarDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./AvatarDemo-3eb98050.js"),["assets/AvatarDemo-3eb98050.js","assets/index-b2766bd3.js"]),content:`import * as React from "react"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@lshay/ui/components/new-york/avatar"

function AvatarDemo(): React.ReactNode {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}

export default AvatarDemo
`,path:"src/demos/new-york/AvatarDemo.tsx",label:"New York",name:"new-york"}]},{name:"Badge",styles:[{component:async()=>P(()=>import("./BadgeDemo-bd95585b.js"),[]),content:`import * as React from "react"
import { Badge } from "@lshay/ui/components/default/badge"

function BadgeDemo(): React.ReactNode {
	return <Badge variant="outline">Badge</Badge>
}

export default BadgeDemo
`,path:"src/demos/default/BadgeDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./BadgeDemo-c4caf93e.js"),[]),content:`import * as React from "react"
import { Badge } from "@lshay/ui/components/new-york/badge"

function BadgeDemo(): React.ReactNode {
	return <Badge variant="outline">Badge</Badge>
}

export default BadgeDemo
`,path:"src/demos/new-york/BadgeDemo.tsx",label:"New York",name:"new-york"}]},{name:"Button",styles:[{component:async()=>P(()=>import("./ButtonDemo-b6f147d6.js"),[]),content:`import * as React from "react"
import { Button } from "@lshay/ui/components/default/button"

function ButtonDemo(): React.ReactNode {
	return <Button variant="outline">Button</Button>
}

export default ButtonDemo
`,path:"src/demos/default/ButtonDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./ButtonDemo-38f5474f.js"),["assets/ButtonDemo-38f5474f.js","assets/chunk-55Z2D7DU-0d9059ba.js"]),content:`import * as React from "react"
import { Button } from "@lshay/ui/components/new-york/button"

function ButtonDemo(): React.ReactNode {
	return <Button variant="outline">Button</Button>
}

export default ButtonDemo
`,path:"src/demos/new-york/ButtonDemo.tsx",label:"New York",name:"new-york"}]},{name:"Calendar",styles:[{component:async()=>P(()=>import("./CalendarDemo-04632fe5.js"),["assets/CalendarDemo-04632fe5.js","assets/calendar-5a5b6e02.js","assets/index.esm-bd6e4f3b.js","assets/chevron-right-26bdc41b.js"]),content:`import * as React from "react"
import { Calendar } from "@lshay/ui/components/default/calendar"

function CalendarDemo(): React.ReactNode {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-md border"
		/>
	)
}

export default CalendarDemo
`,path:"src/demos/default/CalendarDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./CalendarDemo-abc76b80.js"),["assets/CalendarDemo-abc76b80.js","assets/calendar-055803a6.js","assets/chunk-55Z2D7DU-0d9059ba.js","assets/react-icons.esm-b1e7558f.js","assets/index.esm-bd6e4f3b.js"]),content:`import * as React from "react"
import { Calendar } from "@lshay/ui/components/new-york/calendar"

function CalendarDemo(): React.ReactNode {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-md border"
		/>
	)
}

export default CalendarDemo
`,path:"src/demos/new-york/CalendarDemo.tsx",label:"New York",name:"new-york"}]},{name:"Card",styles:[{component:async()=>P(()=>import("./CardDemo-bb70209b.js"),[]),content:`import * as React from "react"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@lshay/ui/components/default/card"

function CardDemo(): React.ReactNode {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	)
}

export default CardDemo
`,path:"src/demos/default/CardDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./CardDemo-99dacc35.js"),[]),content:`import * as React from "react"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@lshay/ui/components/new-york/card"

function CardDemo(): React.ReactNode {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	)
}

export default CardDemo
`,path:"src/demos/new-york/CardDemo.tsx",label:"New York",name:"new-york"}]},{name:"Checkbox",styles:[{component:async()=>P(()=>import("./CheckboxDemo-73d8a550.js"),["assets/CheckboxDemo-73d8a550.js","assets/index-d0e648eb.js"]),content:`import * as React from "react"
import { Checkbox } from "@lshay/ui/components/default/checkbox"

function CheckboxDemo(): React.ReactNode {
	return <Checkbox />
}

export default CheckboxDemo
`,path:"src/demos/default/CheckboxDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./CheckboxDemo-5b2f914a.js"),["assets/CheckboxDemo-5b2f914a.js","assets/index-d0e648eb.js","assets/react-icons.esm-b1e7558f.js"]),content:`import * as React from "react"
import { Checkbox } from "@lshay/ui/components/new-york/checkbox"

function CheckboxDemo(): React.ReactNode {
	return <Checkbox />
}

export default CheckboxDemo
`,path:"src/demos/new-york/CheckboxDemo.tsx",label:"New York",name:"new-york"}]},{name:"Collapsible",styles:[{component:async()=>P(()=>import("./CollapsibleDemo-597e982e.js"),["assets/CollapsibleDemo-597e982e.js","assets/index-0c32d44d.js"]),content:`import * as React from "react"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@lshay/ui/components/default/collapsible"

function CollapsibleDemo(): React.ReactNode {
	return (
		<Collapsible>
			<CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
			<CollapsibleContent>
				Yes. Free to use for personal and commercial projects. No attribution
				required.
			</CollapsibleContent>
		</Collapsible>
	)
}

export default CollapsibleDemo
`,path:"src/demos/default/CollapsibleDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./CollapsibleDemo-c593c7b0.js"),["assets/CollapsibleDemo-c593c7b0.js","assets/index-0c32d44d.js"]),content:`import * as React from "react"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@lshay/ui/components/new-york/collapsible"

function CollapsibleDemo(): React.ReactNode {
	return (
		<Collapsible>
			<CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
			<CollapsibleContent>
				Yes. Free to use for personal and commercial projects. No attribution
				required.
			</CollapsibleContent>
		</Collapsible>
	)
}

export default CollapsibleDemo
`,path:"src/demos/new-york/CollapsibleDemo.tsx",label:"New York",name:"new-york"}]},{name:"Combobox",styles:[{component:async()=>P(()=>import("./ComboboxDemo-e5c9864b.js"),["assets/ComboboxDemo-e5c9864b.js","assets/command-ecdb9b47.js","assets/chunk-DU7JJ3IT-b0fc2b1d.js","assets/index-816706d1.js","assets/index-f1c21088.js","assets/popover-46ee14be.js","assets/index-7f8ab362.js","assets/chevrons-up-down-e272c720.js"]),content:`"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@lshay/ui/lib/utils"
import { Button } from "@lshay/ui/components/default/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@lshay/ui/components/default/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@lshay/ui/components/default/popover"

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
]

function ComboboxDemo() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("")

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? frameworks.find((framework) => framework.value === value)?.label
						: "Select framework..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search framework..." />
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup>
						{frameworks.map((framework) => (
							<CommandItem
								key={framework.value}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? "" : currentValue)
									setOpen(false)
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === framework.value ? "opacity-100" : "opacity-0",
									)}
								/>
								{framework.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default ComboboxDemo
`,path:"src/demos/default/ComboboxDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./ComboboxDemo-1288f110.js"),["assets/ComboboxDemo-1288f110.js","assets/chunk-55Z2D7DU-0d9059ba.js","assets/command-be148ccb.js","assets/chunk-MJRFACEY-f0819b7d.js","assets/index-816706d1.js","assets/react-icons.esm-b1e7558f.js","assets/index-f1c21088.js","assets/popover-ceddbace.js","assets/index-7f8ab362.js","assets/chevrons-up-down-e272c720.js"]),content:`"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@lshay/ui/lib/utils"
import { Button } from "@lshay/ui/components/new-york/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@lshay/ui/components/new-york/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@lshay/ui/components/new-york/popover"

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
]

function ComboboxDemo() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState("")

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? frameworks.find((framework) => framework.value === value)?.label
						: "Select framework..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search framework..." />
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup>
						{frameworks.map((framework) => (
							<CommandItem
								key={framework.value}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? "" : currentValue)
									setOpen(false)
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === framework.value ? "opacity-100" : "opacity-0",
									)}
								/>
								{framework.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export default ComboboxDemo
`,path:"src/demos/new-york/ComboboxDemo.tsx",label:"New York",name:"new-york"}]},{name:"Command",styles:[{component:async()=>P(()=>import("./CommandDemo-02c1b260.js"),["assets/CommandDemo-02c1b260.js","assets/command-ecdb9b47.js","assets/chunk-DU7JJ3IT-b0fc2b1d.js","assets/index-816706d1.js","assets/index-f1c21088.js"]),content:`import * as React from "react"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@lshay/ui/components/default/command"

function CommandDemo(): React.ReactNode {
	return (
		<Command>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>Calendar</CommandItem>
					<CommandItem>Search Emoji</CommandItem>
					<CommandItem>Calculator</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>Profile</CommandItem>
					<CommandItem>Billing</CommandItem>
					<CommandItem>Settings</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	)
}
export default CommandDemo
`,path:"src/demos/default/CommandDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./CommandDemo-0b7a6e79.js"),["assets/CommandDemo-0b7a6e79.js","assets/command-be148ccb.js","assets/chunk-MJRFACEY-f0819b7d.js","assets/index-816706d1.js","assets/react-icons.esm-b1e7558f.js","assets/index-f1c21088.js"]),content:`import * as React from "react"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@lshay/ui/components/new-york/command"

function CommandDemo(): React.ReactNode {
	return (
		<Command>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>Calendar</CommandItem>
					<CommandItem>Search Emoji</CommandItem>
					<CommandItem>Calculator</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>Profile</CommandItem>
					<CommandItem>Billing</CommandItem>
					<CommandItem>Settings</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	)
}
export default CommandDemo
`,path:"src/demos/new-york/CommandDemo.tsx",label:"New York",name:"new-york"}]},{name:"Context Menu",styles:[{component:async()=>P(()=>import("./ContextMenuDemo-1d58d35f.js"),["assets/ContextMenuDemo-1d58d35f.js","assets/index-5953119a.js","assets/index-70d0290e.js","assets/chevron-right-26bdc41b.js","assets/circle-770e06be.js"]),content:`import * as React from "react"
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from "@lshay/ui/components/default/context-menu"

function ContextMenuDemo(): React.ReactNode {
	return (
		<ContextMenu>
			<ContextMenuTrigger>Right click</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem>Profile</ContextMenuItem>
				<ContextMenuItem>Billing</ContextMenuItem>
				<ContextMenuItem>Team</ContextMenuItem>
				<ContextMenuItem>Subscription</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	)
}

export default ContextMenuDemo
`,path:"src/demos/default/ContextMenuDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./ContextMenuDemo-d27e23fe.js"),["assets/ContextMenuDemo-d27e23fe.js","assets/index-5953119a.js","assets/index-70d0290e.js","assets/react-icons.esm-b1e7558f.js"]),content:`import * as React from "react"
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from "@lshay/ui/components/new-york/context-menu"

function ContextMenuDemo(): React.ReactNode {
	return (
		<ContextMenu>
			<ContextMenuTrigger>Right click</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem>Profile</ContextMenuItem>
				<ContextMenuItem>Billing</ContextMenuItem>
				<ContextMenuItem>Team</ContextMenuItem>
				<ContextMenuItem>Subscription</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	)
}

export default ContextMenuDemo
`,path:"src/demos/new-york/ContextMenuDemo.tsx",label:"New York",name:"new-york"}]},{name:"Date Picker",styles:[{component:async()=>P(()=>import("./DatePickerDemo-68aef9d0.js"),["assets/DatePickerDemo-68aef9d0.js","assets/calendar-5a5b6e02.js","assets/index.esm-bd6e4f3b.js","assets/chevron-right-26bdc41b.js","assets/popover-46ee14be.js","assets/index-7f8ab362.js","assets/calendar-67804c81.js"]),content:`"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@lshay/ui/lib/utils"
import { Button } from "@lshay/ui/components/default/button"
import { Calendar } from "@lshay/ui/components/default/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@lshay/ui/components/default/popover"

function DatePickerDemo() {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal",
						!date && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}

export default DatePickerDemo
`,path:"src/demos/default/DatePickerDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./DatePickerDemo-0b0a972a.js"),["assets/DatePickerDemo-0b0a972a.js","assets/chunk-55Z2D7DU-0d9059ba.js","assets/calendar-055803a6.js","assets/react-icons.esm-b1e7558f.js","assets/index.esm-bd6e4f3b.js","assets/popover-ceddbace.js","assets/index-7f8ab362.js","assets/calendar-67804c81.js"]),content:`"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@lshay/ui/lib/utils"
import { Button } from "@lshay/ui/components/new-york/button"
import { Calendar } from "@lshay/ui/components/new-york/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@lshay/ui/components/new-york/popover"

function DatePickerDemo() {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[280px] justify-start text-left font-normal",
						!date && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}

export default DatePickerDemo
`,path:"src/demos/new-york/DatePickerDemo.tsx",label:"New York",name:"new-york"}]},{name:"Dialog",styles:[{component:async()=>P(()=>import("./DialogDemo-e26ebfe0.js"),["assets/DialogDemo-e26ebfe0.js","assets/chunk-DU7JJ3IT-b0fc2b1d.js","assets/index-816706d1.js"]),content:`import * as React from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@lshay/ui/components/default/dialog"

function DialogDemo(): React.ReactNode {
	return (
		<Dialog>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default DialogDemo
`,path:"src/demos/default/DialogDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./DialogDemo-ffc9691b.js"),["assets/DialogDemo-ffc9691b.js","assets/chunk-MJRFACEY-f0819b7d.js","assets/index-816706d1.js","assets/react-icons.esm-b1e7558f.js"]),content:`import * as React from "react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@lshay/ui/components/new-york/dialog"

function DialogDemo(): React.ReactNode {
	return (
		<Dialog>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default DialogDemo
`,path:"src/demos/new-york/DialogDemo.tsx",label:"New York",name:"new-york"}]},{name:"Dropdown Menu",styles:[{component:async()=>P(()=>import("./DropdownMenuDemo-9c22942e.js"),["assets/DropdownMenuDemo-9c22942e.js","assets/index-2300998d.js","assets/index-70d0290e.js","assets/chevron-right-26bdc41b.js","assets/circle-770e06be.js"]),content:`import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@lshay/ui/components/default/dropdown-menu"

function DropdownMenuDemo(): React.ReactNode {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>Open</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropdownMenuDemo
`,path:"src/demos/default/DropdownMenuDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./DropdownMenuDemo-abf608e7.js"),["assets/DropdownMenuDemo-abf608e7.js","assets/index-2300998d.js","assets/index-70d0290e.js","assets/react-icons.esm-b1e7558f.js"]),content:`import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@lshay/ui/components/new-york/dropdown-menu"

function DropdownMenuDemo(): React.ReactNode {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>Open</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropdownMenuDemo
`,path:"src/demos/new-york/DropdownMenuDemo.tsx",label:"New York",name:"new-york"}]},{name:"Form",styles:[{component:async()=>P(()=>import("./FormDemo-66233624.js"),["assets/FormDemo-66233624.js","assets/index-2587259a.js","assets/chunk-V7Y6JZDD-48f0945f.js","assets/index-1d5b6048.js","assets/input-7bf48581.js"]),content:`"use client"
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@lshay/ui/components/default/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@lshay/ui/components/default/form"
import { Input } from "@lshay/ui/components/default/input"

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
})

function FormDemo(): React.ReactNode {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}

export default FormDemo
`,path:"src/demos/default/FormDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./FormDemo-df26a15a.js"),["assets/FormDemo-df26a15a.js","assets/index-2587259a.js","assets/chunk-55Z2D7DU-0d9059ba.js","assets/chunk-J72PJGQC-26b61985.js","assets/index-1d5b6048.js","assets/input-8161c532.js"]),content:`"use client"
import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@lshay/ui/components/new-york/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@lshay/ui/components/new-york/form"
import { Input } from "@lshay/ui/components/new-york/input"

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
})

function FormDemo(): React.ReactNode {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}

export default FormDemo
`,path:"src/demos/new-york/FormDemo.tsx",label:"New York",name:"new-york"}]},{name:"Hover Card",styles:[{component:async()=>P(()=>import("./HoverCardDemo-f4ae882c.js"),["assets/HoverCardDemo-f4ae882c.js","assets/index-835fe486.js"]),content:`import * as React from "react"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@lshay/ui/components/default/hover-card"

function HoverCardDemo(): React.ReactNode {
	return (
		<HoverCard>
			<HoverCardTrigger>Hover</HoverCardTrigger>
			<HoverCardContent>
				The React Framework – created and maintained by @vercel.
			</HoverCardContent>
		</HoverCard>
	)
}

export default HoverCardDemo
`,path:"src/demos/default/HoverCardDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./HoverCardDemo-21e36b6a.js"),["assets/HoverCardDemo-21e36b6a.js","assets/index-835fe486.js"]),content:`import * as React from "react"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@lshay/ui/components/new-york/hover-card"

function HoverCardDemo(): React.ReactNode {
	return (
		<HoverCard>
			<HoverCardTrigger>Hover</HoverCardTrigger>
			<HoverCardContent>
				The React Framework – created and maintained by @vercel.
			</HoverCardContent>
		</HoverCard>
	)
}

export default HoverCardDemo
`,path:"src/demos/new-york/HoverCardDemo.tsx",label:"New York",name:"new-york"}]},{name:"Input",styles:[{component:async()=>P(()=>import("./InputDemo-cb1012fd.js"),["assets/InputDemo-cb1012fd.js","assets/input-7bf48581.js"]),content:`import * as React from "react"
import { Input } from "@lshay/ui/components/default/input"

function InputDemo(): React.ReactNode {
	return <Input />
}

export default InputDemo
`,path:"src/demos/default/InputDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./InputDemo-133fa0ff.js"),["assets/InputDemo-133fa0ff.js","assets/input-8161c532.js"]),content:`import * as React from "react"
import { Input } from "@lshay/ui/components/new-york/input"

function InputDemo(): React.ReactNode {
	return <Input />
}

export default InputDemo
`,path:"src/demos/new-york/InputDemo.tsx",label:"New York",name:"new-york"}]},{name:"Label",styles:[{component:async()=>P(()=>import("./LabelDemo-e6e020ca.js"),["assets/LabelDemo-e6e020ca.js","assets/chunk-V7Y6JZDD-48f0945f.js","assets/index-1d5b6048.js"]),content:`import * as React from "react"
import { Label } from "@lshay/ui/components/default/label"

function LabelDemo(): React.ReactNode {
	return <Label htmlFor="email">Your email address</Label>
}

export default LabelDemo
`,path:"src/demos/default/LabelDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./LabelDemo-889bfe34.js"),["assets/LabelDemo-889bfe34.js","assets/chunk-J72PJGQC-26b61985.js","assets/index-1d5b6048.js"]),content:`import * as React from "react"
import { Label } from "@lshay/ui/components/new-york/label"

function LabelDemo(): React.ReactNode {
	return <Label htmlFor="email">Your email address</Label>
}

export default LabelDemo
`,path:"src/demos/new-york/LabelDemo.tsx",label:"New York",name:"new-york"}]},{name:"Menubar",styles:[{component:async()=>P(()=>import("./MenubarDemo-376022e0.js"),["assets/MenubarDemo-376022e0.js","assets/index-ab7948a5.js","assets/index-70d0290e.js","assets/chevron-right-26bdc41b.js","assets/circle-770e06be.js"]),content:`import * as React from "react"
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@lshay/ui/components/default/menubar"

function MenubarDemo(): React.ReactNode {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>New Window</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Share</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Print</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

export default MenubarDemo
`,path:"src/demos/default/MenubarDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./MenubarDemo-03faed99.js"),["assets/MenubarDemo-03faed99.js","assets/react-icons.esm-b1e7558f.js","assets/index-ab7948a5.js","assets/index-70d0290e.js"]),content:`import * as React from "react"
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@lshay/ui/components/new-york/menubar"

function MenubarDemo(): React.ReactNode {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>New Window</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Share</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Print</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}

export default MenubarDemo
`,path:"src/demos/new-york/MenubarDemo.tsx",label:"New York",name:"new-york"}]},{name:"Navigation Menu",styles:[{component:async()=>P(()=>import("./NavigationMenuDemo-96cc2e5a.js"),["assets/NavigationMenuDemo-96cc2e5a.js","assets/index-03a9a0b0.js"]),content:`import * as React from "react"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@lshay/ui/components/default/navigation-menu"

function NavigationMenuDemo(): React.ReactNode {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Link</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavigationMenuDemo
`,path:"src/demos/default/NavigationMenuDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./NavigationMenuDemo-bd70f32e.js"),["assets/NavigationMenuDemo-bd70f32e.js","assets/react-icons.esm-b1e7558f.js","assets/index-03a9a0b0.js"]),content:`import * as React from "react"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@lshay/ui/components/new-york/navigation-menu"

function NavigationMenuDemo(): React.ReactNode {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>Link</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavigationMenuDemo
`,path:"src/demos/new-york/NavigationMenuDemo.tsx",label:"New York",name:"new-york"}]},{name:"Popover",styles:[{component:async()=>P(()=>import("./PopoverDemo-de772681.js"),["assets/PopoverDemo-de772681.js","assets/popover-46ee14be.js","assets/index-7f8ab362.js"]),content:`import * as React from "react"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@lshay/ui/components/default/popover"

function PopoverDemo(): React.ReactNode {
	return (
		<Popover>
			<PopoverTrigger>Open</PopoverTrigger>
			<PopoverContent>Place content for the popover here.</PopoverContent>
		</Popover>
	)
}

export default PopoverDemo
`,path:"src/demos/default/PopoverDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./PopoverDemo-71bc10d7.js"),["assets/PopoverDemo-71bc10d7.js","assets/popover-ceddbace.js","assets/index-7f8ab362.js"]),content:`import * as React from "react"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@lshay/ui/components/new-york/popover"

function PopoverDemo(): React.ReactNode {
	return (
		<Popover>
			<PopoverTrigger>Open</PopoverTrigger>
			<PopoverContent>Place content for the popover here.</PopoverContent>
		</Popover>
	)
}

export default PopoverDemo
`,path:"src/demos/new-york/PopoverDemo.tsx",label:"New York",name:"new-york"}]},{name:"Progress",styles:[{component:async()=>P(()=>import("./ProgressDemo-dd306364.js"),["assets/ProgressDemo-dd306364.js","assets/index-3687061a.js"]),content:`import * as React from "react"
import { Progress } from "@lshay/ui/components/default/progress"

function ProgressDemo(): React.ReactNode {
	return <Progress value={33} />
}

export default ProgressDemo
`,path:"src/demos/default/ProgressDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./ProgressDemo-3941f46a.js"),["assets/ProgressDemo-3941f46a.js","assets/index-3687061a.js"]),content:`import * as React from "react"
import { Progress } from "@lshay/ui/components/new-york/progress"

function ProgressDemo(): React.ReactNode {
	return <Progress value={33} />
}

export default ProgressDemo
`,path:"src/demos/new-york/ProgressDemo.tsx",label:"New York",name:"new-york"}]},{name:"Radio Group",styles:[{component:async()=>P(()=>import("./RadioGroupDemo-a334435e.js"),["assets/RadioGroupDemo-a334435e.js","assets/chunk-V7Y6JZDD-48f0945f.js","assets/index-1d5b6048.js","assets/index-26c714cd.js","assets/circle-770e06be.js"]),content:`import * as React from "react"
import { Label } from "@lshay/ui/components/default/label"
import {
	RadioGroup,
	RadioGroupItem,
} from "@lshay/ui/components/default/radio-group"

function RadioGroupDemo(): React.ReactNode {
	return (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="option-one" />
				<Label htmlFor="option-one">Option One</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="option-two" />
				<Label htmlFor="option-two">Option Two</Label>
			</div>
		</RadioGroup>
	)
}

export default RadioGroupDemo
`,path:"src/demos/default/RadioGroupDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./RadioGroupDemo-b9914582.js"),["assets/RadioGroupDemo-b9914582.js","assets/chunk-J72PJGQC-26b61985.js","assets/index-1d5b6048.js","assets/react-icons.esm-b1e7558f.js","assets/index-26c714cd.js"]),content:`import * as React from "react"
import { Label } from "@lshay/ui/components/new-york/label"
import {
	RadioGroup,
	RadioGroupItem,
} from "@lshay/ui/components/new-york/radio-group"

function RadioGroupDemo(): React.ReactNode {
	return (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="option-one" />
				<Label htmlFor="option-one">Option One</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="option-two" />
				<Label htmlFor="option-two">Option Two</Label>
			</div>
		</RadioGroup>
	)
}

export default RadioGroupDemo
`,path:"src/demos/new-york/RadioGroupDemo.tsx",label:"New York",name:"new-york"}]},{name:"Scroll Area",styles:[{component:async()=>P(()=>import("./ScrollAreaDemo-b946e49b.js"),["assets/ScrollAreaDemo-b946e49b.js","assets/index-146f2d48.js"]),content:`import * as React from "react"
import { ScrollArea } from "@lshay/ui/components/default/scroll-area"

function ScrollAreaDemo(): React.ReactNode {
	return (
		<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
			Jokester began sneaking into the castle in the middle of the night and
			leaving jokes all over the place: under the king's pillow, in his soup,
			even in the royal toilet. The king was furious, but he couldn't seem to
			stop Jokester. And then, one day, the people of the kingdom discovered
			that the jokes left by Jokester were so funny that they couldn't help but
			laugh. And once they started laughing, they couldn't stop.
		</ScrollArea>
	)
}

export default ScrollAreaDemo
`,path:"src/demos/default/ScrollAreaDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./ScrollAreaDemo-2df643c5.js"),["assets/ScrollAreaDemo-2df643c5.js","assets/index-146f2d48.js"]),content:`import * as React from "react"
import { ScrollArea } from "@lshay/ui/components/new-york/scroll-area"

function ScrollAreaDemo(): React.ReactNode {
	return (
		<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
			Jokester began sneaking into the castle in the middle of the night and
			leaving jokes all over the place: under the king's pillow, in his soup,
			even in the royal toilet. The king was furious, but he couldn't seem to
			stop Jokester. And then, one day, the people of the kingdom discovered
			that the jokes left by Jokester were so funny that they couldn't help but
			laugh. And once they started laughing, they couldn't stop.
		</ScrollArea>
	)
}

export default ScrollAreaDemo
`,path:"src/demos/new-york/ScrollAreaDemo.tsx",label:"New York",name:"new-york"}]},{name:"Select",styles:[{component:async()=>P(()=>import("./SelectDemo-b8d1c7f8.js"),[]),content:`import * as React from "react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@lshay/ui/components/default/select"

function SelectDemo(): React.ReactNode {
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Theme" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light">Light</SelectItem>
				<SelectItem value="dark">Dark</SelectItem>
				<SelectItem value="system">System</SelectItem>
			</SelectContent>
		</Select>
	)
}

export default SelectDemo
`,path:"src/demos/default/SelectDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./SelectDemo-2f67ad60.js"),["assets/SelectDemo-2f67ad60.js","assets/react-icons.esm-b1e7558f.js"]),content:`import * as React from "react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@lshay/ui/components/new-york/select"

function SelectDemo(): React.ReactNode {
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Theme" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light">Light</SelectItem>
				<SelectItem value="dark">Dark</SelectItem>
				<SelectItem value="system">System</SelectItem>
			</SelectContent>
		</Select>
	)
}

export default SelectDemo
`,path:"src/demos/new-york/SelectDemo.tsx",label:"New York",name:"new-york"}]},{name:"Separator",styles:[{component:async()=>P(()=>import("./SeparatorDemo-4bc7a248.js"),["assets/SeparatorDemo-4bc7a248.js","assets/index-84aa38b7.js"]),content:`import * as React from "react"
import { Separator } from "@lshay/ui/components/default/separator"

function SeparatorDemo(): React.ReactNode {
	return <Separator />
}

export default SeparatorDemo
`,path:"src/demos/default/SeparatorDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./SeparatorDemo-0b687f32.js"),["assets/SeparatorDemo-0b687f32.js","assets/index-84aa38b7.js"]),content:`import * as React from "react"
import { Separator } from "@lshay/ui/components/new-york/separator"

function SeparatorDemo(): React.ReactNode {
	return <Separator />
}

export default SeparatorDemo
`,path:"src/demos/new-york/SeparatorDemo.tsx",label:"New York",name:"new-york"}]},{name:"Skeleton",styles:[{component:async()=>P(()=>import("./SkeletonDemo-e9a851b8.js"),[]),content:`import * as React from "react"
import { Skeleton } from "@lshay/ui/components/default/skeleton"

function SkeletonDemo(): React.ReactNode {
	return <Skeleton className="w-[100px] h-[20px] rounded-full" />
}

export default SkeletonDemo
`,path:"src/demos/default/SkeletonDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./SkeletonDemo-0e87fe2a.js"),[]),content:`import * as React from "react"
import { Skeleton } from "@lshay/ui/components/new-york/skeleton"

function SkeletonDemo(): React.ReactNode {
	return <Skeleton className="w-[100px] h-[20px] rounded-full" />
}

export default SkeletonDemo
`,path:"src/demos/new-york/SkeletonDemo.tsx",label:"New York",name:"new-york"}]},{name:"Slider",styles:[{component:async()=>P(()=>import("./SliderDemo-e3f5c615.js"),["assets/SliderDemo-e3f5c615.js","assets/index-693ea4c2.js"]),content:`import * as React from "react"
import { Slider } from "@lshay/ui/components/default/slider"

function SliderDemo(): React.ReactNode {
	return <Slider defaultValue={[33]} max={100} step={1} />
}

export default SliderDemo
`,path:"src/demos/default/SliderDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./SliderDemo-25dbeff5.js"),["assets/SliderDemo-25dbeff5.js","assets/index-693ea4c2.js"]),content:`import * as React from "react"
import { Slider } from "@lshay/ui/components/new-york/slider"

function SliderDemo(): React.ReactNode {
	return <Slider defaultValue={[33]} max={100} step={1} />
}

export default SliderDemo
`,path:"src/demos/new-york/SliderDemo.tsx",label:"New York",name:"new-york"}]},{name:"Switch",styles:[{component:async()=>P(()=>import("./SwitchDemo-67968f52.js"),["assets/SwitchDemo-67968f52.js","assets/index-677513f0.js"]),content:`import * as React from "react"
import { Switch } from "@lshay/ui/components/default/switch"

function SwitchDemo(): React.ReactNode {
	return <Switch />
}

export default SwitchDemo
`,path:"src/demos/default/SwitchDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./SwitchDemo-9ec56b10.js"),["assets/SwitchDemo-9ec56b10.js","assets/index-677513f0.js"]),content:`import * as React from "react"
import { Switch } from "@lshay/ui/components/new-york/switch"

function SwitchDemo(): React.ReactNode {
	return <Switch />
}

export default SwitchDemo
`,path:"src/demos/new-york/SwitchDemo.tsx",label:"New York",name:"new-york"}]},{name:"Table",styles:[{component:async()=>P(()=>import("./TableDemo-d3b8ba28.js"),[]),content:`import * as React from "react"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@lshay/ui/components/default/table"

function TableDemo(): React.ReactNode {
	return (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}

export default TableDemo
`,path:"src/demos/default/TableDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./TableDemo-dca7a2ad.js"),[]),content:`import * as React from "react"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@lshay/ui/components/new-york/table"

function TableDemo(): React.ReactNode {
	return (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}

export default TableDemo
`,path:"src/demos/new-york/TableDemo.tsx",label:"New York",name:"new-york"}]},{name:"Tabs",styles:[{component:async()=>P(()=>import("./TabsDemo-572811fc.js"),[]),content:`import * as React from "react"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@lshay/ui/components/default/tabs"

function TabsDemo(): React.ReactNode {
	return (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				Make changes to your account here.
			</TabsContent>
			<TabsContent value="password">Change your password here.</TabsContent>
		</Tabs>
	)
}

export default TabsDemo
`,path:"src/demos/default/TabsDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./TabsDemo-67ba02fa.js"),[]),content:`import * as React from "react"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@lshay/ui/components/new-york/tabs"

function TabsDemo(): React.ReactNode {
	return (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				Make changes to your account here.
			</TabsContent>
			<TabsContent value="password">Change your password here.</TabsContent>
		</Tabs>
	)
}

export default TabsDemo
`,path:"src/demos/new-york/TabsDemo.tsx",label:"New York",name:"new-york"}]},{name:"Textarea",styles:[{component:async()=>P(()=>import("./TextareaDemo-febd1b2b.js"),[]),content:`import * as React from "react"
import { Textarea } from "@lshay/ui/components/default/textarea"

function TextareaDemo(): React.ReactNode {
	return <Textarea />
}

export default TextareaDemo
`,path:"src/demos/default/TextareaDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./TextareaDemo-97100dce.js"),[]),content:`import * as React from "react"
import { Textarea } from "@lshay/ui/components/new-york/textarea"

function TextareaDemo(): React.ReactNode {
	return <Textarea />
}

export default TextareaDemo
`,path:"src/demos/new-york/TextareaDemo.tsx",label:"New York",name:"new-york"}]},{name:"Toast",styles:[{component:async()=>P(()=>import("./ToastDemo-89032d7c.js"),["assets/ToastDemo-89032d7c.js","assets/chunk-QVTDBOAX-cc2fdcdf.js"]),content:`import * as React from "react"
import { useToast } from "@lshay/ui/components/new-york/use-toast"
import { Button } from "@lshay/ui/components/default/button"

function ToastDemo(): React.ReactNode {
	const { toast } = useToast()

	return (
		<Button
			onClick={() => {
				toast({
					title: "Scheduled: Catch up",
					description: "Friday, February 10, 2023 at 5:57 PM",
				})
			}}
		>
			Show Toast
		</Button>
	)
}

export default ToastDemo
`,path:"src/demos/default/ToastDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./ToastDemo-2dd6e57b.js"),["assets/ToastDemo-2dd6e57b.js","assets/chunk-QVTDBOAX-cc2fdcdf.js","assets/chunk-55Z2D7DU-0d9059ba.js"]),content:`import * as React from "react"
import { useToast } from "@lshay/ui/components/new-york/use-toast"
import { Button } from "@lshay/ui/components/new-york/button"

function ToastDemo(): React.ReactNode {
	const { toast } = useToast()

	return (
		<Button
			onClick={() => {
				toast({
					title: "Scheduled: Catch up",
					description: "Friday, February 10, 2023 at 5:57 PM",
				})
			}}
		>
			Show Toast
		</Button>
	)
}

export default ToastDemo
`,path:"src/demos/new-york/ToastDemo.tsx",label:"New York",name:"new-york"}]},{name:"Toggle",styles:[{component:async()=>P(()=>import("./ToggleDemo-9863a539.js"),["assets/ToggleDemo-9863a539.js","assets/index-c7f7e529.js"]),content:`import * as React from "react"
import { Toggle } from "@lshay/ui/components/default/toggle"

function ToggleDemo(): React.ReactNode {
	return <Toggle>Toggle</Toggle>
}

export default ToggleDemo
`,path:"src/demos/default/ToggleDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./ToggleDemo-128bdd41.js"),["assets/ToggleDemo-128bdd41.js","assets/index-c7f7e529.js"]),content:`import * as React from "react"
import { Toggle } from "@lshay/ui/components/new-york/toggle"

function ToggleDemo(): React.ReactNode {
	return <Toggle>Toggle</Toggle>
}

export default ToggleDemo
`,path:"src/demos/new-york/ToggleDemo.tsx",label:"New York",name:"new-york"}]},{name:"Tooltip",styles:[{component:async()=>P(()=>import("./TooltipDemo-d355ed5d.js"),["assets/TooltipDemo-d355ed5d.js","assets/index-f4c8423c.js"]),content:`import * as React from "react"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@lshay/ui/components/default/tooltip"

function TooltipDemo(): React.ReactNode {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>Hover</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default TooltipDemo
`,path:"src/demos/default/TooltipDemo.tsx",label:"Default",name:"default"},{component:async()=>P(()=>import("./TooltipDemo-9251f108.js"),["assets/TooltipDemo-9251f108.js","assets/index-f4c8423c.js"]),content:`import * as React from "react"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@lshay/ui/components/new-york/tooltip"

function TooltipDemo(): React.ReactNode {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>Hover</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default TooltipDemo
`,path:"src/demos/new-york/TooltipDemo.tsx",label:"New York",name:"new-york"}]}];function ll(){return R.jsx("a",{className:"underline",href:"https://ui.shadcn.com/",rel:"noreferrer",target:"_blank",children:"@shadcn/ui"})}function xd({children:e}){return R.jsx("p",{className:"bg-slate-100 rounded-sm border border-slate-200 p-4",children:e})}function St({children:e}){return R.jsx("span",{className:"font-mono px-1 py-0.5 bg-slate-300 rounded text-sm",children:e})}function q1(){const[e,t]=p.useState("npm"),n=e==="npm"?"install":"add";function r(o){t(o)}return R.jsxs("main",{className:"space-y-16 p-8",children:[R.jsx("section",{className:"container space-y-6",children:R.jsxs(Z1,{className:"text-center",children:[R.jsx("span",{children:"@lshay/ui - Published version of "}),R.jsx(ll,{})]})}),R.jsxs("section",{className:"max-w-2xl container space-y-6",children:[R.jsxs("div",{className:"space-y-4",children:[R.jsx(al,{children:"Introduction"}),R.jsxs("p",{children:["This package contains the published components that were created by ",R.jsx(ll,{}),". All credit to the components and demos goes to them."]})]}),R.jsxs("div",{className:"space-y-8",children:[R.jsx(al,{children:"Getting Started"}),R.jsxs("div",{className:"space-y-4",children:[R.jsx(xi,{children:"1. Installation"}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs(Rm,{onValueChange:r,value:e,children:[R.jsx(yc,{className:"h-7 w-[80px] text-xs [&_svg]:h-4 [&_svg]:w-4",children:R.jsx(Dm,{placeholder:"Select package manager"})}),R.jsxs(wc,{children:[R.jsx(no,{className:"text-xs",value:"npm",children:"npm"}),R.jsx(no,{className:"text-xs",value:"yarn",children:"yarn"}),R.jsx(no,{className:"text-xs",value:"pnpm",children:"pnpm"})]})]}),R.jsx(cs,{code:`${e} ${n} @lshay/ui`,language:"bash"})]})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs(xi,{children:["2. Follow ",R.jsx(ll,{})," Directions"]}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("p",{children:["Follow the steps ",R.jsx("a",{className:"underline",href:"https://ui.shadcn.com/docs/installation",rel:"noreferrer",target:"_blank",children:"linked here"}),"."]}),R.jsxs(xd,{children:[R.jsx("span",{className:"font-bold",children:"NOTE: "}),"When creating the ",R.jsx(St,{children:"components.json"})," file, the only configuration that matters is ",R.jsx(St,{children:"tailwind"}),". The rest is handled by ",R.jsx(St,{children:"@lshay/ui"})]}),R.jsxs(xd,{children:[R.jsx("span",{className:"font-bold",children:"NOTE: "}),"You do not need to install ",R.jsx(St,{children:"class-variance-authority"}),", ",R.jsx(St,{children:"clsx"}),", and ",R.jsx(St,{children:"tailwind-merge"})," because ",R.jsx(St,{children:"@lshay/ui"})," provides an export for ",R.jsx(St,{children:"cn"}),", ",R.jsx(St,{children:'import { cn } from "@lshay/ui/lib/utils"'}),"."]})]})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsx(xi,{children:"3. Modify Tailwind CSS Config"}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("p",{children:["Add the following to ",R.jsx(St,{children:"tailwind.config.js"}),"."]}),R.jsx(cs,{code:`const { CONTENT } = require("@lshay/ui/lib/utils")

/** @type {import('tailwindcss').Config} */
module.exports = {
	// ...
	content: [
		"node_modules/@lshay/ui/dist/components/**/*.js",
		"./src/**/*.{ts,tsx}",
		/* Other paths here */
	],
	// ...
}`,language:"typescript"})]})]})]})]}),R.jsxs("section",{className:"max-w-2xl container space-y-10",children:[R.jsxs("div",{className:"space-y-6",children:[R.jsx(al,{id:"toc",children:"Components"}),R.jsx("ul",{className:"list-disc px-10",children:wd.map(({name:o})=>R.jsx("li",{children:R.jsx("a",{className:"hover:underline underline-offset-2",href:`#${o}`,children:o})},o))})]}),wd.map(o=>R.jsx(J1,{demo:o},o.name))]})]})}sl.createRoot(document.querySelector("#root")).render(R.jsx(it.StrictMode,{children:R.jsx(q1,{})}));export{Vp as $,V0 as A,st as B,ax as C,wi as D,yi as E,fm as F,F0 as G,iw as H,K0 as I,L0 as J,ps as K,A0 as L,yw as M,Cr as N,ky as O,Ty as P,Ey as Q,it as R,eb as S,rm as T,N0 as U,R0 as V,D0 as W,Xm as X,C1 as Y,E1 as Z,Z as _,Do as a,Hp as a0,yy as a1,nb as a2,zu as a3,Rm as a4,yc as a5,Dm as a6,wc as a7,no as a8,Cm as a9,Zw as aa,Jw as ab,Em as ac,qw as ad,Sm as ae,_m as af,tx as ag,ex as ah,km as ai,Qw as aj,Xw as ak,O1 as al,ah as am,ds as an,fs as ao,rh as ap,oh as aq,ih as ar,M1 as as,Xi as b,Ve as c,ze as d,cc as e,he as f,xe as g,ha as h,G1 as i,R as j,py as k,W1 as l,Ao as m,Dt as n,Ct as o,lh as p,Tm as q,p as r,Jm as s,$0 as t,w0 as u,kh as v,Bn as w,Ov as x,G0 as y,cm as z};
