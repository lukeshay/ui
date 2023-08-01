function dg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ws(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mf={exports:{}},vl={},hf={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=Symbol.for("react.element"),fg=Symbol.for("react.portal"),pg=Symbol.for("react.fragment"),mg=Symbol.for("react.strict_mode"),hg=Symbol.for("react.profiler"),gg=Symbol.for("react.provider"),vg=Symbol.for("react.context"),yg=Symbol.for("react.forward_ref"),wg=Symbol.for("react.suspense"),xg=Symbol.for("react.memo"),bg=Symbol.for("react.lazy"),cu=Symbol.iterator;function Eg(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vf=Object.assign,yf={};function Pr(e,t,n){this.props=e,this.context=t,this.refs=yf,this.updater=n||gf}Pr.prototype.isReactComponent={};Pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wf(){}wf.prototype=Pr.prototype;function Gs(e,t,n){this.props=e,this.context=t,this.refs=yf,this.updater=n||gf}var Ks=Gs.prototype=new wf;Ks.constructor=Gs;vf(Ks,Pr.prototype);Ks.isPureReactComponent=!0;var uu=Array.isArray,xf=Object.prototype.hasOwnProperty,Ys={current:null},bf={key:!0,ref:!0,__self:!0,__source:!0};function Ef(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)xf.call(t,r)&&!bf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Mo,type:e,key:i,ref:l,props:o,_owner:Ys.current}}function Cg(e,t){return{$$typeof:Mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mo}function Sg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var du=/\/+/g;function Ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sg(""+e.key):t.toString(36)}function yi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Mo:case fg:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ql(l,0):r,uu(o)?(n="",e!=null&&(n=e.replace(du,"$&/")+"/"),yi(o,t,n,"",function(c){return c})):o!=null&&(Qs(o)&&(o=Cg(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(du,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",uu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ql(i,a);l+=yi(i,t,n,s,o)}else if(s=Eg(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ql(i,a++),l+=yi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Wo(e,t,n){if(e==null)return e;var r=[],o=0;return yi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function _g(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},wi={transition:null},kg={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:wi,ReactCurrentOwner:Ys};J.Children={map:Wo,forEach:function(e,t,n){Wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wo(e,function(){t++}),t},toArray:function(e){return Wo(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Pr;J.Fragment=pg;J.Profiler=hg;J.PureComponent=Gs;J.StrictMode=mg;J.Suspense=wg;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kg;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vf({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ys.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xf.call(t,s)&&!bf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Mo,type:e.type,key:o,ref:i,props:r,_owner:l}};J.createContext=function(e){return e={$$typeof:vg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gg,_context:e},e.Consumer=e};J.createElement=Ef;J.createFactory=function(e){var t=Ef.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:yg,render:e}};J.isValidElement=Qs;J.lazy=function(e){return{$$typeof:bg,_payload:{_status:-1,_result:e},_init:_g}};J.memo=function(e,t){return{$$typeof:xg,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=wi.transition;wi.transition={};try{e()}finally{wi.transition=t}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(e,t){return Ue.current.useCallback(e,t)};J.useContext=function(e){return Ue.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ue.current.useEffect(e,t)};J.useId=function(){return Ue.current.useId()};J.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ue.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};J.useRef=function(e){return Ue.current.useRef(e)};J.useState=function(e){return Ue.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Ue.current.useTransition()};J.version="18.2.0";hf.exports=J;var m=hf.exports;const it=Ws(m),Tg=dg({__proto__:null,default:it},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg=m,Dg=Symbol.for("react.element"),Ng=Symbol.for("react.fragment"),Ag=Object.prototype.hasOwnProperty,$g=Rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pg={key:!0,ref:!0,__self:!0,__source:!0};function Cf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ag.call(t,r)&&!Pg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Dg,type:e,key:i,ref:l,props:o,_owner:$g.current}}vl.Fragment=Ng;vl.jsx=Cf;vl.jsxs=Cf;mf.exports=vl;var R=mf.exports,Ma={},Sf={exports:{}},rt={},_f={exports:{}},kf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,D){var A=C.length;C.push(D);e:for(;0<A;){var F=A-1>>>1,W=C[F];if(0<o(W,D))C[F]=D,C[A]=W,A=F;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],A=C.pop();if(A!==D){C[0]=A;e:for(var F=0,W=C.length,Q=W>>>1;F<Q;){var pe=2*(F+1)-1,re=C[pe],le=pe+1,H=C[le];if(0>o(re,A))le<W&&0>o(H,re)?(C[F]=H,C[le]=A,F=le):(C[F]=re,C[pe]=A,F=pe);else if(le<W&&0>o(H,A))C[F]=H,C[le]=A,F=le;else break e}}return D}function o(C,D){var A=C.sortIndex-D.sortIndex;return A!==0?A:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],u=1,d=null,f=3,v=!1,y=!1,g=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(C){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=C)r(c),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(c)}}function b(C){if(g=!1,w(C),!y)if(n(s)!==null)y=!0,B(E);else{var D=n(c);D!==null&&T(b,D.startTime-C)}}function E(C,D){y=!1,g&&(g=!1,h(k),k=-1),v=!0;var A=f;try{for(w(D),d=n(s);d!==null&&(!(d.expirationTime>D)||C&&!z());){var F=d.callback;if(typeof F=="function"){d.callback=null,f=d.priorityLevel;var W=F(d.expirationTime<=D);D=e.unstable_now(),typeof W=="function"?d.callback=W:d===n(s)&&r(s),w(D)}else r(s);d=n(s)}if(d!==null)var Q=!0;else{var pe=n(c);pe!==null&&T(b,pe.startTime-D),Q=!1}return Q}finally{d=null,f=A,v=!1}}var _=!1,S=null,k=-1,M=5,I=-1;function z(){return!(e.unstable_now()-I<M)}function L(){if(S!==null){var C=e.unstable_now();I=C;var D=!0;try{D=S(!0,C)}finally{D?U():(_=!1,S=null)}}else _=!1}var U;if(typeof p=="function")U=function(){p(L)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,V=K.port2;K.port1.onmessage=L,U=function(){V.postMessage(null)}}else U=function(){x(L,0)};function B(C){S=C,_||(_=!0,U())}function T(C,D){k=x(function(){C(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,B(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var A=f;f=D;try{return C()}finally{f=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var A=f;f=C;try{return D()}finally{f=A}},e.unstable_scheduleCallback=function(C,D,A){var F=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?F+A:F):A=F,C){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=A+W,C={id:u++,callback:D,priorityLevel:C,startTime:A,expirationTime:W,sortIndex:-1},A>F?(C.sortIndex=A,t(c,C),n(s)===null&&C===n(c)&&(g?(h(k),k=-1):g=!0,T(b,A-F))):(C.sortIndex=W,t(s,C),y||v||(y=!0,B(E))),C},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(C){var D=f;return function(){var A=f;f=D;try{return C.apply(this,arguments)}finally{f=A}}}})(kf);_f.exports=kf;var Mg=_f.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=m,nt=Mg;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rf=new Set,mo={};function Hn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(mo[e]=t,e=0;e<t.length;e++)Rf.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,Ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fu={},pu={};function Og(e){return Ia.call(pu,e)?!0:Ia.call(fu,e)?!1:Ig.test(e)?pu[e]=!0:(fu[e]=!0,!1)}function Lg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fg(e,t,n,r){if(t===null||typeof t>"u"||Lg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xs=/[\-:]([a-z])/g;function Zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xs,Zs);$e[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xs,Zs);$e[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xs,Zs);$e[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Js(e,t,n,r){var o=$e.hasOwnProperty(t)?$e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fg(t,n,o,r)&&(n=null),r||o===null?Og(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),qs=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),Df=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),ec=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),tc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Af=Symbol.for("react.offscreen"),mu=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Xl;function Xr(e){if(Xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xl=t&&t[1]||""}return`
`+Xl+e}var Zl=!1;function Jl(e,t){if(!e||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xr(e):""}function zg(e){switch(e.tag){case 5:return Xr(e.type);case 16:return Xr("Lazy");case 13:return Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Oa:return"Profiler";case qs:return"StrictMode";case La:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nf:return(e.displayName||"Context")+".Consumer";case Df:return(e._context.displayName||"Context")+".Provider";case ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tc:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function jg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bg(e){var t=$f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ko(e){e._valueTracker||(e._valueTracker=Bg(e))}function Pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mf(e,t){t=t.checked,t!=null&&Js(e,"checked",t,!1)}function Ba(e,t){Mf(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ha(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ha(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ha(e,t,n){(t!=="number"||Ii(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Zr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function If(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yo,Lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hg=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){Hg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function Ff(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function zf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ff(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Vg=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,t){if(t){if(Vg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ya=null,mr=null,hr=null;function wu(e){if(e=Lo(e)){if(typeof Ya!="function")throw Error(N(280));var t=e.stateNode;t&&(t=El(t),Ya(e.stateNode,e.type,t))}}function jf(e){mr?hr?hr.push(e):hr=[e]:mr=e}function Bf(){if(mr){var e=mr,t=hr;if(hr=mr=null,wu(e),t)for(e=0;e<t.length;e++)wu(t[e])}}function Hf(e,t){return e(t)}function Vf(){}var ql=!1;function Uf(e,t,n){if(ql)return e(t,n);ql=!0;try{return Hf(e,t,n)}finally{ql=!1,(mr!==null||hr!==null)&&(Vf(),Bf())}}function go(e,t){var n=e.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Qa=!1;if(jt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{Qa=!1}function Ug(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var to=!1,Oi=null,Li=!1,Xa=null,Wg={onError:function(e){to=!0,Oi=e}};function Gg(e,t,n,r,o,i,l,a,s){to=!1,Oi=null,Ug.apply(Wg,arguments)}function Kg(e,t,n,r,o,i,l,a,s){if(Gg.apply(this,arguments),to){if(to){var c=Oi;to=!1,Oi=null}else throw Error(N(198));Li||(Li=!0,Xa=c)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xu(e){if(Vn(e)!==e)throw Error(N(188))}function Yg(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return xu(o),e;if(i===r)return xu(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Gf(e){return e=Yg(e),e!==null?Kf(e):null}function Kf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kf(e);if(t!==null)return t;e=e.sibling}return null}var Yf=nt.unstable_scheduleCallback,bu=nt.unstable_cancelCallback,Qg=nt.unstable_shouldYield,Xg=nt.unstable_requestPaint,be=nt.unstable_now,Zg=nt.unstable_getCurrentPriorityLevel,rc=nt.unstable_ImmediatePriority,Qf=nt.unstable_UserBlockingPriority,Fi=nt.unstable_NormalPriority,Jg=nt.unstable_LowPriority,Xf=nt.unstable_IdlePriority,yl=null,Rt=null;function qg(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:nv,ev=Math.log,tv=Math.LN2;function nv(e){return e>>>=0,e===0?32:31-(ev(e)/tv|0)|0}var Qo=64,Xo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Jr(a):(i&=l,i!==0&&(r=Jr(i)))}else l=n&~o,l!==0?r=Jr(l):i!==0&&(r=Jr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function rv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ov(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-xt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=rv(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zf(){var e=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),e}function ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function iv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function oc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ie=0;function Jf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qf,ic,ep,tp,np,Ja=!1,Zo=[],an=null,sn=null,cn=null,vo=new Map,yo=new Map,tn=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(t.pointerId)}}function Hr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Lo(t),t!==null&&ic(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function av(e,t,n,r,o){switch(t){case"focusin":return an=Hr(an,e,t,n,r,o),!0;case"dragenter":return sn=Hr(sn,e,t,n,r,o),!0;case"mouseover":return cn=Hr(cn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return vo.set(i,Hr(vo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,yo.set(i,Hr(yo.get(i)||null,e,t,n,r,o)),!0}return!1}function rp(e){var t=Dn(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Wf(n),t!==null){e.blockedOn=t,np(e.priority,function(){ep(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return t=Lo(n),t!==null&&ic(t),e.blockedOn=n,!1;t.shift()}return!0}function Cu(e,t,n){xi(e)&&n.delete(t)}function sv(){Ja=!1,an!==null&&xi(an)&&(an=null),sn!==null&&xi(sn)&&(sn=null),cn!==null&&xi(cn)&&(cn=null),vo.forEach(Cu),yo.forEach(Cu)}function Vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,sv)))}function wo(e){function t(o){return Vr(o,e)}if(0<Zo.length){Vr(Zo[0],e);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Vr(an,e),sn!==null&&Vr(sn,e),cn!==null&&Vr(cn,e),vo.forEach(t),yo.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)rp(n),n.blockedOn===null&&tn.shift()}var gr=Kt.ReactCurrentBatchConfig,ji=!0;function cv(e,t,n,r){var o=ie,i=gr.transition;gr.transition=null;try{ie=1,lc(e,t,n,r)}finally{ie=o,gr.transition=i}}function uv(e,t,n,r){var o=ie,i=gr.transition;gr.transition=null;try{ie=4,lc(e,t,n,r)}finally{ie=o,gr.transition=i}}function lc(e,t,n,r){if(ji){var o=qa(e,t,n,r);if(o===null)ua(e,t,r,Bi,n),Eu(e,r);else if(av(o,e,t,n,r))r.stopPropagation();else if(Eu(e,r),t&4&&-1<lv.indexOf(e)){for(;o!==null;){var i=Lo(o);if(i!==null&&qf(i),i=qa(e,t,n,r),i===null&&ua(e,t,r,Bi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ua(e,t,r,null,n)}}var Bi=null;function qa(e,t,n,r){if(Bi=null,e=nc(r),e=Dn(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bi=e,null}function op(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zg()){case rc:return 1;case Qf:return 4;case Fi:case Jg:return 16;case Xf:return 536870912;default:return 16}default:return 16}}var rn=null,ac=null,bi=null;function ip(){if(bi)return bi;var e,t=ac,n=t.length,r,o="value"in rn?rn.value:rn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return bi=o.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Su(){return!1}function ot(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jo:Su,this.isPropagationStopped=Su,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=ot(Mr),Oo=ye({},Mr,{view:0,detail:0}),dv=ot(Oo),ta,na,Ur,wl=ye({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(ta=e.screenX-Ur.screenX,na=e.screenY-Ur.screenY):na=ta=0,Ur=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:na}}),_u=ot(wl),fv=ye({},wl,{dataTransfer:0}),pv=ot(fv),mv=ye({},Oo,{relatedTarget:0}),ra=ot(mv),hv=ye({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=ot(hv),vv=ye({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=ot(vv),wv=ye({},Mr,{data:0}),ku=ot(wv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ev[e])?!!t[e]:!1}function cc(){return Cv}var Sv=ye({},Oo,{key:function(e){if(e.key){var t=xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_v=ot(Sv),kv=ye({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=ot(kv),Tv=ye({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),Rv=ot(Tv),Dv=ye({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=ot(Dv),Av=ye({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=ot(Av),Pv=[9,13,27,32],uc=jt&&"CompositionEvent"in window,no=null;jt&&"documentMode"in document&&(no=document.documentMode);var Mv=jt&&"TextEvent"in window&&!no,lp=jt&&(!uc||no&&8<no&&11>=no),Ru=String.fromCharCode(32),Du=!1;function ap(e,t){switch(e){case"keyup":return Pv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function Iv(e,t){switch(e){case"compositionend":return sp(t);case"keypress":return t.which!==32?null:(Du=!0,Ru);case"textInput":return e=t.data,e===Ru&&Du?null:e;default:return null}}function Ov(e,t){if(rr)return e==="compositionend"||!uc&&ap(e,t)?(e=ip(),bi=ac=rn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lp&&t.locale!=="ko"?null:t.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lv[e.type]:t==="textarea"}function cp(e,t,n,r){jf(r),t=Hi(t,"onChange"),0<t.length&&(n=new sc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,xo=null;function Fv(e){xp(e,0)}function xl(e){var t=lr(e);if(Pf(t))return e}function zv(e,t){if(e==="change")return t}var up=!1;if(jt){var oa;if(jt){var ia="oninput"in document;if(!ia){var Au=document.createElement("div");Au.setAttribute("oninput","return;"),ia=typeof Au.oninput=="function"}oa=ia}else oa=!1;up=oa&&(!document.documentMode||9<document.documentMode)}function $u(){ro&&(ro.detachEvent("onpropertychange",dp),xo=ro=null)}function dp(e){if(e.propertyName==="value"&&xl(xo)){var t=[];cp(t,xo,e,nc(e)),Uf(Fv,t)}}function jv(e,t,n){e==="focusin"?($u(),ro=t,xo=n,ro.attachEvent("onpropertychange",dp)):e==="focusout"&&$u()}function Bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(xo)}function Hv(e,t){if(e==="click")return xl(t)}function Vv(e,t){if(e==="input"||e==="change")return xl(t)}function Uv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Uv;function bo(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ia.call(t,o)||!Et(e[o],t[o]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function fp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pp(){for(var e=window,t=Ii();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ii(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wv(e){var t=pp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fp(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Mu(n,i);var l=Mu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gv=jt&&"documentMode"in document&&11>=document.documentMode,or=null,es=null,oo=null,ts=!1;function Iu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ts||or==null||or!==Ii(r)||(r=or,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&bo(oo,r)||(oo=r,r=Hi(es,"onSelect"),0<r.length&&(t=new sc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=or)))}function qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},la={},mp={};jt&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function bl(e){if(la[e])return la[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mp)return la[e]=t[n];return e}var hp=bl("animationend"),gp=bl("animationiteration"),vp=bl("animationstart"),yp=bl("transitionend"),wp=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,t){wp.set(e,t),Hn(t,[e])}for(var aa=0;aa<Ou.length;aa++){var sa=Ou[aa],Kv=sa.toLowerCase(),Yv=sa[0].toUpperCase()+sa.slice(1);xn(Kv,"on"+Yv)}xn(hp,"onAnimationEnd");xn(gp,"onAnimationIteration");xn(vp,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(yp,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kg(r,t,void 0,e),e.currentTarget=null}function xp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Lu(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Lu(o,a,c),i=s}}}if(Li)throw e=Xa,Li=!1,Xa=null,e}function de(e,t){var n=t[ls];n===void 0&&(n=t[ls]=new Set);var r=e+"__bubble";n.has(r)||(bp(t,e,2,!1),n.add(r))}function ca(e,t,n){var r=0;t&&(r|=4),bp(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[ei]){e[ei]=!0,Rf.forEach(function(n){n!=="selectionchange"&&(Qv.has(n)||ca(n,!1,e),ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ei]||(t[ei]=!0,ca("selectionchange",!1,t))}}function bp(e,t,n,r){switch(op(t)){case 1:var o=cv;break;case 4:o=uv;break;default:o=lc}n=o.bind(null,t,n,e),o=void 0,!Qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ua(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Dn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Uf(function(){var c=i,u=nc(n),d=[];e:{var f=wp.get(e);if(f!==void 0){var v=sc,y=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":v=_v;break;case"focusin":y="focus",v=ra;break;case"focusout":y="blur",v=ra;break;case"beforeblur":case"afterblur":v=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=_u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Rv;break;case hp:case gp:case vp:v=gv;break;case yp:v=Nv;break;case"scroll":v=dv;break;case"wheel":v=$v;break;case"copy":case"cut":case"paste":v=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Tu}var g=(t&4)!==0,x=!g&&e==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var p=c,w;p!==null;){w=p;var b=w.stateNode;if(w.tag===5&&b!==null&&(w=b,h!==null&&(b=go(p,h),b!=null&&g.push(Co(p,b,w)))),x)break;p=p.return}0<g.length&&(f=new v(f,y,null,n,u),d.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Ka&&(y=n.relatedTarget||n.fromElement)&&(Dn(y)||y[Bt]))break e;if((v||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Dn(y):null,y!==null&&(x=Vn(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(g=_u,b="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(g=Tu,b="onPointerLeave",h="onPointerEnter",p="pointer"),x=v==null?f:lr(v),w=y==null?f:lr(y),f=new g(b,p+"leave",v,n,u),f.target=x,f.relatedTarget=w,b=null,Dn(u)===c&&(g=new g(h,p+"enter",y,n,u),g.target=w,g.relatedTarget=x,b=g),x=b,v&&y)t:{for(g=v,h=y,p=0,w=g;w;w=Qn(w))p++;for(w=0,b=h;b;b=Qn(b))w++;for(;0<p-w;)g=Qn(g),p--;for(;0<w-p;)h=Qn(h),w--;for(;p--;){if(g===h||h!==null&&g===h.alternate)break t;g=Qn(g),h=Qn(h)}g=null}else g=null;v!==null&&Fu(d,f,v,g,!1),y!==null&&x!==null&&Fu(d,x,y,g,!0)}}e:{if(f=c?lr(c):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var E=zv;else if(Nu(f))if(up)E=Vv;else{E=Bv;var _=jv}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Hv);if(E&&(E=E(e,c))){cp(d,E,n,u);break e}_&&_(e,f,c),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&Ha(f,"number",f.value)}switch(_=c?lr(c):window,e){case"focusin":(Nu(_)||_.contentEditable==="true")&&(or=_,es=c,oo=null);break;case"focusout":oo=es=or=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,Iu(d,n,u);break;case"selectionchange":if(Gv)break;case"keydown":case"keyup":Iu(d,n,u)}var S;if(uc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else rr?ap(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(lp&&n.locale!=="ko"&&(rr||k!=="onCompositionStart"?k==="onCompositionEnd"&&rr&&(S=ip()):(rn=u,ac="value"in rn?rn.value:rn.textContent,rr=!0)),_=Hi(c,k),0<_.length&&(k=new ku(k,e,null,n,u),d.push({event:k,listeners:_}),S?k.data=S:(S=sp(n),S!==null&&(k.data=S)))),(S=Mv?Iv(e,n):Ov(e,n))&&(c=Hi(c,"onBeforeInput"),0<c.length&&(u=new ku("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=S))}xp(d,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=go(e,n),i!=null&&r.unshift(Co(e,i,o)),i=go(e,t),i!=null&&r.push(Co(e,i,o))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=go(n,i),s!=null&&l.unshift(Co(n,s,a))):o||(s=go(n,i),s!=null&&l.push(Co(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Xv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function zu(e){return(typeof e=="string"?e:""+e).replace(Xv,`
`).replace(Zv,"")}function ti(e,t,n){if(t=zu(t),zu(e)!==t&&n)throw Error(N(425))}function Vi(){}var ns=null,rs=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var is=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(ey)}:is;function ey(e){setTimeout(function(){throw e})}function da(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wo(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Ir,So="__reactProps$"+Ir,Bt="__reactContainer$"+Ir,ls="__reactEvents$"+Ir,ty="__reactListeners$"+Ir,ny="__reactHandles$"+Ir;function Dn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bu(e);e!==null;){if(n=e[Tt])return n;e=Bu(e)}return t}e=n,n=e.parentNode}return null}function Lo(e){return e=e[Tt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function El(e){return e[So]||null}var as=[],ar=-1;function bn(e){return{current:e}}function fe(e){0>ar||(e.current=as[ar],as[ar]=null,ar--)}function se(e,t){ar++,as[ar]=e.current,e.current=t}var gn={},Fe=bn(gn),Ye=bn(!1),On=gn;function Cr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function Ui(){fe(Ye),fe(Fe)}function Hu(e,t,n){if(Fe.current!==gn)throw Error(N(168));se(Fe,t),se(Ye,n)}function Ep(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,jg(e)||"Unknown",o));return ye({},n,r)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,On=Fe.current,se(Fe,e),se(Ye,Ye.current),!0}function Vu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Ep(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,fe(Ye),fe(Fe),se(Fe,e)):fe(Ye),se(Ye,n)}var It=null,Cl=!1,fa=!1;function Cp(e){It===null?It=[e]:It.push(e)}function ry(e){Cl=!0,Cp(e)}function En(){if(!fa&&It!==null){fa=!0;var e=0,t=ie;try{var n=It;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Cl=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),Yf(rc,En),o}finally{ie=t,fa=!1}}return null}var sr=[],cr=0,Gi=null,Ki=0,lt=[],at=0,Ln=null,Ot=1,Lt="";function Tn(e,t){sr[cr++]=Ki,sr[cr++]=Gi,Gi=e,Ki=t}function Sp(e,t,n){lt[at++]=Ot,lt[at++]=Lt,lt[at++]=Ln,Ln=e;var r=Ot;e=Lt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ot=1<<32-xt(t)+o|n<<o|r,Lt=i+e}else Ot=1<<i|n<<o|r,Lt=e}function fc(e){e.return!==null&&(Tn(e,1),Sp(e,1,0))}function pc(e){for(;e===Gi;)Gi=sr[--cr],sr[cr]=null,Ki=sr[--cr],sr[cr]=null;for(;e===Ln;)Ln=lt[--at],lt[at]=null,Lt=lt[--at],lt[at]=null,Ot=lt[--at],lt[at]=null}var et=null,qe=null,me=!1,yt=null;function _p(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,qe=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Ot,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,qe=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(me){var t=qe;if(t){var n=t;if(!Uu(e,t)){if(ss(e))throw Error(N(418));t=un(n.nextSibling);var r=et;t&&Uu(e,t)?_p(r,n):(e.flags=e.flags&-4097|2,me=!1,et=e)}}else{if(ss(e))throw Error(N(418));e.flags=e.flags&-4097|2,me=!1,et=e}}}function Wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function ni(e){if(e!==et)return!1;if(!me)return Wu(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=qe)){if(ss(e))throw kp(),Error(N(418));for(;t;)_p(e,t),t=un(t.nextSibling)}if(Wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=et?un(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=qe;e;)e=un(e.nextSibling)}function Sr(){qe=et=null,me=!1}function mc(e){yt===null?yt=[e]:yt.push(e)}var oy=Kt.ReactCurrentBatchConfig;function gt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yi=bn(null),Qi=null,ur=null,hc=null;function gc(){hc=ur=Qi=null}function vc(e){var t=Yi.current;fe(Yi),e._currentValue=t}function us(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Qi=e,hc=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(hc!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Qi===null)throw Error(N(308));ur=e,Qi.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var Nn=null;function yc(e){Nn===null?Nn=[e]:Nn.push(e)}function Tp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,yc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ht(e,n)}return o=r.interleaved,o===null?(t.next=t,yc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ht(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}function Gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xi(e,t,n,r){var o=e.updateQueue;en=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==l&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;l=0,u=c=s=null,a=i;do{var f=a.lane,v=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(f=t,v=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){d=y.call(v,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,f=typeof y=="function"?y.call(v,d,f):y,f==null)break e;d=ye({},d,f);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=v,s=d):u=u.next=v,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(u===null&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zn|=l,e.lanes=l,e.memoizedState=d}}function Ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var Dp=new Tf.Component().refs;function ds(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),o=pn(e),i=Ft(r,o);i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(bt(t,e,o,r),Ci(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),o=pn(e),i=Ft(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(bt(t,e,o,r),Ci(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=pn(e),o=Ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,r),t!==null&&(bt(t,e,r,n),Ci(t,e,r))}};function Yu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!bo(n,r)||!bo(o,i):!0}function Np(e,t,n){var r=!1,o=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=dt(i):(o=Qe(t)?On:Fe.current,r=t.contextTypes,i=(r=r!=null)?Cr(e,o):gn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function fs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Dp,wc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=dt(i):(i=Qe(t)?On:Fe.current,o.context=Cr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ds(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Sl.enqueueReplaceState(o,o.state,null),Xi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Dp&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xu(e){var t=e._init;return t(e._payload)}function Ap(e){function t(h,p){if(e){var w=h.deletions;w===null?(h.deletions=[p],h.flags|=16):w.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=mn(h,p),h.index=0,h.sibling=null,h}function i(h,p,w){return h.index=w,e?(w=h.alternate,w!==null?(w=w.index,w<p?(h.flags|=2,p):w):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,w,b){return p===null||p.tag!==6?(p=wa(w,h.mode,b),p.return=h,p):(p=o(p,w),p.return=h,p)}function s(h,p,w,b){var E=w.type;return E===nr?u(h,p,w.props.children,b,w.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qt&&Xu(E)===p.type)?(b=o(p,w.props),b.ref=Wr(h,p,w),b.return=h,b):(b=Di(w.type,w.key,w.props,null,h.mode,b),b.ref=Wr(h,p,w),b.return=h,b)}function c(h,p,w,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=xa(w,h.mode,b),p.return=h,p):(p=o(p,w.children||[]),p.return=h,p)}function u(h,p,w,b,E){return p===null||p.tag!==7?(p=Mn(w,h.mode,b,E),p.return=h,p):(p=o(p,w),p.return=h,p)}function d(h,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=wa(""+p,h.mode,w),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Go:return w=Di(p.type,p.key,p.props,null,h.mode,w),w.ref=Wr(h,null,p),w.return=h,w;case tr:return p=xa(p,h.mode,w),p.return=h,p;case qt:var b=p._init;return d(h,b(p._payload),w)}if(Zr(p)||jr(p))return p=Mn(p,h.mode,w,null),p.return=h,p;ri(h,p)}return null}function f(h,p,w,b){var E=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return E!==null?null:a(h,p,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Go:return w.key===E?s(h,p,w,b):null;case tr:return w.key===E?c(h,p,w,b):null;case qt:return E=w._init,f(h,p,E(w._payload),b)}if(Zr(w)||jr(w))return E!==null?null:u(h,p,w,b,null);ri(h,w)}return null}function v(h,p,w,b,E){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(w)||null,a(p,h,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Go:return h=h.get(b.key===null?w:b.key)||null,s(p,h,b,E);case tr:return h=h.get(b.key===null?w:b.key)||null,c(p,h,b,E);case qt:var _=b._init;return v(h,p,w,_(b._payload),E)}if(Zr(b)||jr(b))return h=h.get(w)||null,u(p,h,b,E,null);ri(p,b)}return null}function y(h,p,w,b){for(var E=null,_=null,S=p,k=p=0,M=null;S!==null&&k<w.length;k++){S.index>k?(M=S,S=null):M=S.sibling;var I=f(h,S,w[k],b);if(I===null){S===null&&(S=M);break}e&&S&&I.alternate===null&&t(h,S),p=i(I,p,k),_===null?E=I:_.sibling=I,_=I,S=M}if(k===w.length)return n(h,S),me&&Tn(h,k),E;if(S===null){for(;k<w.length;k++)S=d(h,w[k],b),S!==null&&(p=i(S,p,k),_===null?E=S:_.sibling=S,_=S);return me&&Tn(h,k),E}for(S=r(h,S);k<w.length;k++)M=v(S,h,k,w[k],b),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?k:M.key),p=i(M,p,k),_===null?E=M:_.sibling=M,_=M);return e&&S.forEach(function(z){return t(h,z)}),me&&Tn(h,k),E}function g(h,p,w,b){var E=jr(w);if(typeof E!="function")throw Error(N(150));if(w=E.call(w),w==null)throw Error(N(151));for(var _=E=null,S=p,k=p=0,M=null,I=w.next();S!==null&&!I.done;k++,I=w.next()){S.index>k?(M=S,S=null):M=S.sibling;var z=f(h,S,I.value,b);if(z===null){S===null&&(S=M);break}e&&S&&z.alternate===null&&t(h,S),p=i(z,p,k),_===null?E=z:_.sibling=z,_=z,S=M}if(I.done)return n(h,S),me&&Tn(h,k),E;if(S===null){for(;!I.done;k++,I=w.next())I=d(h,I.value,b),I!==null&&(p=i(I,p,k),_===null?E=I:_.sibling=I,_=I);return me&&Tn(h,k),E}for(S=r(h,S);!I.done;k++,I=w.next())I=v(S,h,k,I.value,b),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?k:I.key),p=i(I,p,k),_===null?E=I:_.sibling=I,_=I);return e&&S.forEach(function(L){return t(h,L)}),me&&Tn(h,k),E}function x(h,p,w,b){if(typeof w=="object"&&w!==null&&w.type===nr&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Go:e:{for(var E=w.key,_=p;_!==null;){if(_.key===E){if(E=w.type,E===nr){if(_.tag===7){n(h,_.sibling),p=o(_,w.props.children),p.return=h,h=p;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qt&&Xu(E)===_.type){n(h,_.sibling),p=o(_,w.props),p.ref=Wr(h,_,w),p.return=h,h=p;break e}n(h,_);break}else t(h,_);_=_.sibling}w.type===nr?(p=Mn(w.props.children,h.mode,b,w.key),p.return=h,h=p):(b=Di(w.type,w.key,w.props,null,h.mode,b),b.ref=Wr(h,p,w),b.return=h,h=b)}return l(h);case tr:e:{for(_=w.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(h,p.sibling),p=o(p,w.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=xa(w,h.mode,b),p.return=h,h=p}return l(h);case qt:return _=w._init,x(h,p,_(w._payload),b)}if(Zr(w))return y(h,p,w,b);if(jr(w))return g(h,p,w,b);ri(h,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,w),p.return=h,h=p):(n(h,p),p=wa(w,h.mode,b),p.return=h,h=p),l(h)):n(h,p)}return x}var _r=Ap(!0),$p=Ap(!1),Fo={},Dt=bn(Fo),_o=bn(Fo),ko=bn(Fo);function An(e){if(e===Fo)throw Error(N(174));return e}function xc(e,t){switch(se(ko,t),se(_o,e),se(Dt,Fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ua(t,e)}fe(Dt),se(Dt,t)}function kr(){fe(Dt),fe(_o),fe(ko)}function Pp(e){An(ko.current);var t=An(Dt.current),n=Ua(t,e.type);t!==n&&(se(_o,e),se(Dt,n))}function bc(e){_o.current===e&&(fe(Dt),fe(_o))}var ge=bn(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pa=[];function Ec(){for(var e=0;e<pa.length;e++)pa[e]._workInProgressVersionPrimary=null;pa.length=0}var Si=Kt.ReactCurrentDispatcher,ma=Kt.ReactCurrentBatchConfig,Fn=0,ve=null,Se=null,Te=null,Ji=!1,io=!1,To=0,iy=0;function Ie(){throw Error(N(321))}function Cc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Et(e[n],t[n]))return!1;return!0}function Sc(e,t,n,r,o,i){if(Fn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Si.current=e===null||e.memoizedState===null?cy:uy,e=n(r,o),io){i=0;do{if(io=!1,To=0,25<=i)throw Error(N(301));i+=1,Te=Se=null,t.updateQueue=null,Si.current=dy,e=n(r,o)}while(io)}if(Si.current=qi,t=Se!==null&&Se.next!==null,Fn=0,Te=Se=ve=null,Ji=!1,t)throw Error(N(300));return e}function _c(){var e=To!==0;return To=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ve.memoizedState=Te=e:Te=Te.next=e,Te}function ft(){if(Se===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Te===null?ve.memoizedState:Te.next;if(t!==null)Te=t,Se=e;else{if(e===null)throw Error(N(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Te===null?ve.memoizedState=Te=e:Te=Te.next=e}return Te}function Ro(e,t){return typeof t=="function"?t(e):t}function ha(e){var t=ft(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Se,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var u=c.lane;if((Fn&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=d,l=r):s=s.next=d,ve.lanes|=u,zn|=u}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,Et(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,zn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ga(e){var t=ft(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Et(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Mp(){}function Ip(e,t){var n=ve,r=ft(),o=t(),i=!Et(r.memoizedState,o);if(i&&(r.memoizedState=o,Ke=!0),r=r.queue,kc(Fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Do(9,Lp.bind(null,n,r,o,t),void 0,null),Re===null)throw Error(N(349));Fn&30||Op(n,t,o)}return o}function Op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lp(e,t,n,r){t.value=n,t.getSnapshot=r,zp(t)&&jp(e)}function Fp(e,t,n){return n(function(){zp(t)&&jp(e)})}function zp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Et(e,n)}catch{return!0}}function jp(e){var t=Ht(e,1);t!==null&&bt(t,e,1,-1)}function Zu(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t.queue=e,e=e.dispatch=sy.bind(null,ve,e),[t.memoizedState,e]}function Do(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bp(){return ft().memoizedState}function _i(e,t,n,r){var o=kt();ve.flags|=e,o.memoizedState=Do(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var o=ft();r=r===void 0?null:r;var i=void 0;if(Se!==null){var l=Se.memoizedState;if(i=l.destroy,r!==null&&Cc(r,l.deps)){o.memoizedState=Do(t,n,i,r);return}}ve.flags|=e,o.memoizedState=Do(1|t,n,i,r)}function Ju(e,t){return _i(8390656,8,e,t)}function kc(e,t){return _l(2048,8,e,t)}function Hp(e,t){return _l(4,2,e,t)}function Vp(e,t){return _l(4,4,e,t)}function Up(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wp(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,Up.bind(null,t,e),n)}function Tc(){}function Gp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yp(e,t,n){return Fn&21?(Et(n,t)||(n=Zf(),ve.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function ly(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=ma.transition;ma.transition={};try{e(!1),t()}finally{ie=n,ma.transition=r}}function Qp(){return ft().memoizedState}function ay(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xp(e))Zp(t,n);else if(n=Tp(e,t,n,r),n!==null){var o=He();bt(n,e,r,o),Jp(n,t,r)}}function sy(e,t,n){var r=pn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xp(e))Zp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Et(a,l)){var s=t.interleaved;s===null?(o.next=o,yc(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Tp(e,t,o,r),n!==null&&(o=He(),bt(n,e,r,o),Jp(n,t,r))}}function Xp(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Zp(e,t){io=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oc(e,n)}}var qi={readContext:dt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},cy={readContext:dt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,Up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ay.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:Tc,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=ly.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=kt();if(me){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Re===null)throw Error(N(349));Fn&30||Op(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ju(Fp.bind(null,r,i,e),[e]),r.flags|=2048,Do(9,Lp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=Re.identifierPrefix;if(me){var n=Lt,r=Ot;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=iy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uy={readContext:dt,useCallback:Gp,useContext:dt,useEffect:kc,useImperativeHandle:Wp,useInsertionEffect:Hp,useLayoutEffect:Vp,useMemo:Kp,useReducer:ha,useRef:Bp,useState:function(){return ha(Ro)},useDebugValue:Tc,useDeferredValue:function(e){var t=ft();return Yp(t,Se.memoizedState,e)},useTransition:function(){var e=ha(Ro)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:Ip,useId:Qp,unstable_isNewReconciler:!1},dy={readContext:dt,useCallback:Gp,useContext:dt,useEffect:kc,useImperativeHandle:Wp,useInsertionEffect:Hp,useLayoutEffect:Vp,useMemo:Kp,useReducer:ga,useRef:Bp,useState:function(){return ga(Ro)},useDebugValue:Tc,useDeferredValue:function(e){var t=ft();return Se===null?t.memoizedState=e:Yp(t,Se.memoizedState,e)},useTransition:function(){var e=ga(Ro)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:Ip,useId:Qp,unstable_isNewReconciler:!1};function Tr(e,t){try{var n="",r=t;do n+=zg(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function qp(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Cs=r),ps(e,t)},n}function em(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ps(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ps(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ky.bind(null,e,t,n),t.then(e,e))}function ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function td(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var py=Kt.ReactCurrentOwner,Ke=!1;function Be(e,t,n,r){t.child=e===null?$p(t,null,n,r):_r(t,e.child,n,r)}function nd(e,t,n,r,o){n=n.render;var i=t.ref;return vr(t,o),r=Sc(e,t,n,r,i,o),n=_c(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(me&&n&&fc(t),t.flags|=1,Be(e,t,r,o),t.child)}function rd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ic(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,tm(e,t,i,r,o)):(e=Di(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(l,r)&&e.ref===t.ref)return Vt(e,t,o)}return t.flags|=1,e=mn(i,r),e.ref=t.ref,e.return=t,t.child=e}function tm(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(bo(i,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Vt(e,t,o)}return ms(e,t,n,r,o)}function nm(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(fr,Ze),Ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(fr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,se(fr,Ze),Ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,se(fr,Ze),Ze|=r;return Be(e,t,o,n),t.child}function rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,o){var i=Qe(n)?On:Fe.current;return i=Cr(t,i),vr(t,o),n=Sc(e,t,n,r,i,o),r=_c(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(me&&r&&fc(t),t.flags|=1,Be(e,t,n,o),t.child)}function od(e,t,n,r,o){if(Qe(n)){var i=!0;Wi(t)}else i=!1;if(vr(t,o),t.stateNode===null)ki(e,t),Np(t,n,r),fs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Qe(n)?On:Fe.current,c=Cr(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Qu(t,l,r,c),en=!1;var f=t.memoizedState;l.state=f,Xi(t,r,l,o),s=t.memoizedState,a!==r||f!==s||Ye.current||en?(typeof u=="function"&&(ds(t,n,u,r),s=t.memoizedState),(a=en||Yu(t,n,a,r,f,s,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Rp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:gt(t.type,a),l.props=c,d=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=dt(s):(s=Qe(n)?On:Fe.current,s=Cr(t,s));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||f!==s)&&Qu(t,l,r,s),en=!1,f=t.memoizedState,l.state=f,Xi(t,r,l,o);var y=t.memoizedState;a!==d||f!==y||Ye.current||en?(typeof v=="function"&&(ds(t,n,v,r),y=t.memoizedState),(c=en||Yu(t,n,c,r,f,y,s)||!1)?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,i,o)}function hs(e,t,n,r,o,i){rm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Vu(t,n,!1),Vt(e,t,i);r=t.stateNode,py.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_r(t,e.child,null,i),t.child=_r(t,null,a,i)):Be(e,t,a,i),t.memoizedState=r.state,o&&Vu(t,n,!0),t.child}function om(e){var t=e.stateNode;t.pendingContext?Hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hu(e,t.context,!1),xc(e,t.containerInfo)}function id(e,t,n,r,o){return Sr(),mc(o),t.flags|=256,Be(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function im(e,t,n){var r=t.pendingProps,o=ge.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(ge,o&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Rl(l,r,0,null),e=Mn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=vs(n),t.memoizedState=gs,e):Rc(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return my(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=mn(a,i):(i=Mn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?vs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rc(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&mc(r),_r(t,e.child,null,n),e=Rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function my(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=va(Error(N(422))),oi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Rl({mode:"visible",children:r.children},o,0,null),i=Mn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&_r(t,e.child,null,l),t.child.memoizedState=vs(l),t.memoizedState=gs,i);if(!(t.mode&1))return oi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=va(i,r,void 0),oi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ke||a){if(r=Re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ht(e,o),bt(r,e,o,-1))}return Mc(),r=va(Error(N(421))),oi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ty.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,qe=un(o.nextSibling),et=t,me=!0,yt=null,e!==null&&(lt[at++]=Ot,lt[at++]=Lt,lt[at++]=Ln,Ot=e.id,Lt=e.overflow,Ln=t),t=Rc(t,r.children),t.flags|=4096,t)}function ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),us(e.return,t,n)}function ya(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function lm(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Be(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ge,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ya(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ya(t,!0,n,null,i);break;case"together":ya(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hy(e,t,n){switch(t.tag){case 3:om(t),Sr();break;case 5:Pp(t);break;case 1:Qe(t.type)&&Wi(t);break;case 4:xc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(Yi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?im(e,t,n):(se(ge,ge.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,nm(e,t,n)}return Vt(e,t,n)}var am,ys,sm,cm;am=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ys=function(){};sm=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,An(Dt.current);var i=null;switch(n){case"input":o=ja(e,o),r=ja(e,r),i=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":o=Va(e,o),r=Va(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vi)}Wa(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mo.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&de("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};cm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gy(e,t,n){var r=t.pendingProps;switch(pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Qe(t.type)&&Ui(),Oe(t),null;case 3:return r=t.stateNode,kr(),fe(Ye),fe(Fe),Ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(ks(yt),yt=null))),ys(e,t),Oe(t),null;case 5:bc(t);var o=An(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)sm(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Oe(t),null}if(e=An(Dt.current),ni(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Tt]=t,r[So]=i,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(o=0;o<qr.length;o++)de(qr[o],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":hu(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":vu(r,i),de("invalid",r)}Wa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),o=["children",""+a]):mo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&de("scroll",r)}switch(n){case"input":Ko(r),gu(r,i,!0);break;case"textarea":Ko(r),yu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Tt]=t,e[So]=r,am(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ga(n,r),n){case"dialog":de("cancel",e),de("close",e),o=r;break;case"iframe":case"object":case"embed":de("load",e),o=r;break;case"video":case"audio":for(o=0;o<qr.length;o++)de(qr[o],e);o=r;break;case"source":de("error",e),o=r;break;case"img":case"image":case"link":de("error",e),de("load",e),o=r;break;case"details":de("toggle",e),o=r;break;case"input":hu(e,r),o=ja(e,r),de("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),de("invalid",e);break;case"textarea":vu(e,r),o=Va(e,r),de("invalid",e);break;default:o=r}Wa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?zf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Lf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ho(e,s):typeof s=="number"&&ho(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(mo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&de("scroll",e):s!=null&&Js(e,i,s,l))}switch(n){case"input":Ko(e),gu(e,r,!1);break;case"textarea":Ko(e),yu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)cm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=An(ko.current),An(Dt.current),ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(i=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Oe(t),null;case 13:if(fe(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&qe!==null&&t.mode&1&&!(t.flags&128))kp(),Sr(),t.flags|=98560,i=!1;else if(i=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Tt]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else yt!==null&&(ks(yt),yt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?_e===0&&(_e=3):Mc())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return kr(),ys(e,t),e===null&&Eo(t.stateNode.containerInfo),Oe(t),null;case 10:return vc(t.type._context),Oe(t),null;case 17:return Qe(t.type)&&Ui(),Oe(t),null;case 19:if(fe(ge),i=t.memoizedState,i===null)return Oe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Gr(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Zi(e),l!==null){for(t.flags|=128,Gr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&be()>Rr&&(t.flags|=128,r=!0,Gr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!me)return Oe(t),null}else 2*be()-i.renderingStartTime>Rr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=be(),t.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Pc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function vy(e,t){switch(pc(t),t.tag){case 1:return Qe(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),fe(Ye),fe(Fe),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bc(t),null;case 13:if(fe(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ge),null;case 4:return kr(),null;case 10:return vc(t.type._context),null;case 22:case 23:return Pc(),null;case 24:return null;default:return null}}var ii=!1,Le=!1,yy=typeof WeakSet=="function"?WeakSet:Set,O=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function ws(e,t,n){try{n()}catch(r){we(e,t,r)}}var ad=!1;function wy(e,t){if(ns=ji,e=pp(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var v;d!==n||o!==0&&d.nodeType!==3||(a=l+o),d!==i||r!==0&&d.nodeType!==3||(s=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(v=d.firstChild)!==null;)f=d,d=v;for(;;){if(d===e)break t;if(f===n&&++c===o&&(a=l),f===i&&++u===r&&(s=l),(v=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(rs={focusedElem:e,selectionRange:n},ji=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,x=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?g:gt(t.type,g),x);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(b){we(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=ad,ad=!1,y}function lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ws(t,n,i)}o=o.next}while(o!==r)}}function kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function um(e){var t=e.alternate;t!==null&&(e.alternate=null,um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[So],delete t[ls],delete t[ty],delete t[ny])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dm(e){return e.tag===5||e.tag===3||e.tag===4}function sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi));else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}var Ne=null,vt=!1;function Xt(e,t,n){for(n=n.child;n!==null;)fm(e,t,n),n=n.sibling}function fm(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Le||dr(n,t);case 6:var r=Ne,o=vt;Ne=null,Xt(e,t,n),Ne=r,vt=o,Ne!==null&&(vt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(vt?(e=Ne,n=n.stateNode,e.nodeType===8?da(e.parentNode,n):e.nodeType===1&&da(e,n),wo(e)):da(Ne,n.stateNode));break;case 4:r=Ne,o=vt,Ne=n.stateNode.containerInfo,vt=!0,Xt(e,t,n),Ne=r,vt=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ws(n,t,l),o=o.next}while(o!==r)}Xt(e,t,n);break;case 1:if(!Le&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Xt(e,t,n),Le=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yy),t.forEach(function(r){var o=Ry.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,vt=!1;break e;case 3:Ne=a.stateNode.containerInfo,vt=!0;break e;case 4:Ne=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Ne===null)throw Error(N(160));fm(i,l,o),Ne=null,vt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){we(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pm(t,e),t=t.sibling}function pm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),St(e),r&4){try{lo(3,e,e.return),kl(3,e)}catch(g){we(e,e.return,g)}try{lo(5,e,e.return)}catch(g){we(e,e.return,g)}}break;case 1:mt(t,e),St(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(mt(t,e),St(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var o=e.stateNode;try{ho(o,"")}catch(g){we(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Mf(o,i),Ga(a,l);var c=Ga(a,i);for(l=0;l<s.length;l+=2){var u=s[l],d=s[l+1];u==="style"?zf(o,d):u==="dangerouslySetInnerHTML"?Lf(o,d):u==="children"?ho(o,d):Js(o,u,d,c)}switch(a){case"input":Ba(o,i);break;case"textarea":If(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?pr(o,!!i.multiple,v,!1):f!==!!i.multiple&&(i.defaultValue!=null?pr(o,!!i.multiple,i.defaultValue,!0):pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[So]=i}catch(g){we(e,e.return,g)}}break;case 6:if(mt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){we(e,e.return,g)}}break;case 3:if(mt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(t.containerInfo)}catch(g){we(e,e.return,g)}break;case 4:mt(t,e),St(e);break;case 13:mt(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ac=be())),r&4&&cd(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||u,mt(t,e),Le=c):mt(t,e),St(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(O=e,u=e.child;u!==null;){for(d=O=u;O!==null;){switch(f=O,v=f.child,f.tag){case 0:case 11:case 14:case 15:lo(4,f,f.return);break;case 1:dr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){we(r,n,g)}}break;case 5:dr(f,f.return);break;case 22:if(f.memoizedState!==null){dd(d);continue}}v!==null?(v.return=f,O=v):dd(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ff("display",l))}catch(g){we(e,e.return,g)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){we(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(t,e),St(e),r&4&&cd(e);break;case 21:break;default:mt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dm(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ho(o,""),r.flags&=-33);var i=sd(e);Es(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=sd(e);bs(e,a,l);break;default:throw Error(N(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xy(e,t,n){O=e,mm(e)}function mm(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ii;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Le;a=ii;var c=Le;if(ii=l,(Le=s)&&!c)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?fd(o):s!==null?(s.return=l,O=s):fd(o);for(;i!==null;)O=i,mm(i),i=i.sibling;O=o,ii=a,Le=c}ud(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):ud(e)}}function ud(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ku(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ku(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Le||t.flags&512&&xs(t)}catch(f){we(t,t.return,f)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function dd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function fd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kl(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){we(t,o,s)}}var i=t.return;try{xs(t)}catch(s){we(t,i,s)}break;case 5:var l=t.return;try{xs(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var by=Math.ceil,el=Kt.ReactCurrentDispatcher,Dc=Kt.ReactCurrentOwner,ut=Kt.ReactCurrentBatchConfig,q=0,Re=null,Ce=null,Ae=0,Ze=0,fr=bn(0),_e=0,No=null,zn=0,Tl=0,Nc=0,ao=null,Ge=null,Ac=0,Rr=1/0,Pt=null,tl=!1,Cs=null,fn=null,li=!1,on=null,nl=0,so=0,Ss=null,Ti=-1,Ri=0;function He(){return q&6?be():Ti!==-1?Ti:Ti=be()}function pn(e){return e.mode&1?q&2&&Ae!==0?Ae&-Ae:oy.transition!==null?(Ri===0&&(Ri=Zf()),Ri):(e=ie,e!==0||(e=window.event,e=e===void 0?16:op(e.type)),e):1}function bt(e,t,n,r){if(50<so)throw so=0,Ss=null,Error(N(185));Io(e,n,r),(!(q&2)||e!==Re)&&(e===Re&&(!(q&2)&&(Tl|=n),_e===4&&nn(e,Ae)),Xe(e,r),n===1&&q===0&&!(t.mode&1)&&(Rr=be()+500,Cl&&En()))}function Xe(e,t){var n=e.callbackNode;ov(e,t);var r=zi(e,e===Re?Ae:0);if(r===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?ry(pd.bind(null,e)):Cp(pd.bind(null,e)),qv(function(){!(q&6)&&En()}),n=null;else{switch(Jf(r)){case 1:n=rc;break;case 4:n=Qf;break;case 16:n=Fi;break;case 536870912:n=Xf;break;default:n=Fi}n=Em(n,hm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hm(e,t){if(Ti=-1,Ri=0,q&6)throw Error(N(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=zi(e,e===Re?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var o=q;q|=2;var i=vm();(Re!==e||Ae!==t)&&(Pt=null,Rr=be()+500,Pn(e,t));do try{Sy();break}catch(a){gm(e,a)}while(1);gc(),el.current=i,q=o,Ce!==null?t=0:(Re=null,Ae=0,t=_e)}if(t!==0){if(t===2&&(o=Za(e),o!==0&&(r=o,t=_s(e,o))),t===1)throw n=No,Pn(e,0),nn(e,r),Xe(e,be()),n;if(t===6)nn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ey(o)&&(t=rl(e,r),t===2&&(i=Za(e),i!==0&&(r=i,t=_s(e,i))),t===1))throw n=No,Pn(e,0),nn(e,r),Xe(e,be()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Rn(e,Ge,Pt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Ac+500-be(),10<t)){if(zi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=is(Rn.bind(null,e,Ge,Pt),t);break}Rn(e,Ge,Pt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-xt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*by(r/1960))-r,10<r){e.timeoutHandle=is(Rn.bind(null,e,Ge,Pt),r);break}Rn(e,Ge,Pt);break;case 5:Rn(e,Ge,Pt);break;default:throw Error(N(329))}}}return Xe(e,be()),e.callbackNode===n?hm.bind(null,e):null}function _s(e,t){var n=ao;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=rl(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&ks(t)),e}function ks(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Ey(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Et(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Nc,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function pd(e){if(q&6)throw Error(N(327));yr();var t=zi(e,0);if(!(t&1))return Xe(e,be()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=Za(e);r!==0&&(t=r,n=_s(e,r))}if(n===1)throw n=No,Pn(e,0),nn(e,t),Xe(e,be()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Ge,Pt),Xe(e,be()),null}function $c(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Rr=be()+500,Cl&&En())}}function jn(e){on!==null&&on.tag===0&&!(q&6)&&yr();var t=q;q|=1;var n=ut.transition,r=ie;try{if(ut.transition=null,ie=1,e)return e()}finally{ie=r,ut.transition=n,q=t,!(q&6)&&En()}}function Pc(){Ze=fr.current,fe(fr)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jv(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ui();break;case 3:kr(),fe(Ye),fe(Fe),Ec();break;case 5:bc(r);break;case 4:kr();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:vc(r.type._context);break;case 22:case 23:Pc()}n=n.return}if(Re=e,Ce=e=mn(e.current,null),Ae=Ze=t,_e=0,No=null,Nc=Tl=zn=0,Ge=ao=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Nn=null}return e}function gm(e,t){do{var n=Ce;try{if(gc(),Si.current=qi,Ji){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ji=!1}if(Fn=0,Te=Se=ve=null,io=!1,To=0,Dc.current=null,n===null||n.return===null){_e=1,No=t,Ce=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=ed(l);if(v!==null){v.flags&=-257,td(v,l,a,i,t),v.mode&1&&qu(i,c,t),t=v,s=c;var y=t.updateQueue;if(y===null){var g=new Set;g.add(s),t.updateQueue=g}else y.add(s);break e}else{if(!(t&1)){qu(i,c,t),Mc();break e}s=Error(N(426))}}else if(me&&a.mode&1){var x=ed(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),td(x,l,a,i,t),mc(Tr(s,a));break e}}i=s=Tr(s,a),_e!==4&&(_e=2),ao===null?ao=[i]:ao.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=qp(i,s,t);Gu(i,h);break e;case 1:a=s;var p=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(fn===null||!fn.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=em(i,a,t);Gu(i,b);break e}}i=i.return}while(i!==null)}wm(n)}catch(E){t=E,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function vm(){var e=el.current;return el.current=qi,e===null?qi:e}function Mc(){(_e===0||_e===3||_e===2)&&(_e=4),Re===null||!(zn&268435455)&&!(Tl&268435455)||nn(Re,Ae)}function rl(e,t){var n=q;q|=2;var r=vm();(Re!==e||Ae!==t)&&(Pt=null,Pn(e,t));do try{Cy();break}catch(o){gm(e,o)}while(1);if(gc(),q=n,el.current=r,Ce!==null)throw Error(N(261));return Re=null,Ae=0,_e}function Cy(){for(;Ce!==null;)ym(Ce)}function Sy(){for(;Ce!==null&&!Qg();)ym(Ce)}function ym(e){var t=bm(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?wm(e):Ce=t,Dc.current=null}function wm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vy(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ce=null;return}}else if(n=gy(n,t,Ze),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);_e===0&&(_e=5)}function Rn(e,t,n){var r=ie,o=ut.transition;try{ut.transition=null,ie=1,_y(e,t,n,r)}finally{ut.transition=o,ie=r}return null}function _y(e,t,n,r){do yr();while(on!==null);if(q&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(iv(e,i),e===Re&&(Ce=Re=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,Em(Fi,function(){return yr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var l=ie;ie=1;var a=q;q|=4,Dc.current=null,wy(e,n),pm(n,e),Wv(rs),ji=!!ns,rs=ns=null,e.current=n,xy(n),Xg(),q=a,ie=l,ut.transition=i}else e.current=n;if(li&&(li=!1,on=e,nl=o),i=e.pendingLanes,i===0&&(fn=null),qg(n.stateNode),Xe(e,be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(tl)throw tl=!1,e=Cs,Cs=null,e;return nl&1&&e.tag!==0&&yr(),i=e.pendingLanes,i&1?e===Ss?so++:(so=0,Ss=e):so=0,En(),null}function yr(){if(on!==null){var e=Jf(nl),t=ut.transition,n=ie;try{if(ut.transition=null,ie=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,nl=0,q&6)throw Error(N(331));var o=q;for(q|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:lo(8,u,i)}var d=u.child;if(d!==null)d.return=u,O=d;else for(;O!==null;){u=O;var f=u.sibling,v=u.return;if(um(u),u===c){O=null;break}if(f!==null){f.return=v,O=f;break}O=v}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var x=g.sibling;g.sibling=null,g=x}while(g!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lo(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,O=h;break e}O=i.return}}var p=e.current;for(O=p;O!==null;){l=O;var w=l.child;if(l.subtreeFlags&2064&&w!==null)w.return=l,O=w;else e:for(l=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(E){we(a,a.return,E)}if(a===l){O=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,O=b;break e}O=a.return}}if(q=o,En(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(yl,e)}catch{}r=!0}return r}finally{ie=n,ut.transition=t}}return!1}function md(e,t,n){t=Tr(n,t),t=qp(e,t,1),e=dn(e,t,1),t=He(),e!==null&&(Io(e,1,t),Xe(e,t))}function we(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Tr(n,e),e=em(t,e,1),t=dn(t,e,1),e=He(),t!==null&&(Io(t,1,e),Xe(t,e));break}}t=t.return}}function ky(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Ae&n)===n&&(_e===4||_e===3&&(Ae&130023424)===Ae&&500>be()-Ac?Pn(e,0):Nc|=n),Xe(e,t)}function xm(e,t){t===0&&(e.mode&1?(t=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):t=1);var n=He();e=Ht(e,t),e!==null&&(Io(e,t,n),Xe(e,n))}function Ty(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xm(e,n)}function Ry(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),xm(e,n)}var bm;bm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,hy(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,me&&t.flags&1048576&&Sp(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ki(e,t),e=t.pendingProps;var o=Cr(t,Fe.current);vr(t,n),o=Sc(null,t,r,e,o,n);var i=_c();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,Wi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,wc(t),o.updater=Sl,t.stateNode=o,o._reactInternals=t,fs(t,r,e,n),t=hs(null,t,r,!0,i,n)):(t.tag=0,me&&i&&fc(t),Be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ki(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ny(r),e=gt(r,e),o){case 0:t=ms(null,t,r,e,n);break e;case 1:t=od(null,t,r,e,n);break e;case 11:t=nd(null,t,r,e,n);break e;case 14:t=rd(null,t,r,gt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),ms(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),od(e,t,r,o,n);case 3:e:{if(om(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Rp(e,t),Xi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Tr(Error(N(423)),t),t=id(e,t,r,n,o);break e}else if(r!==o){o=Tr(Error(N(424)),t),t=id(e,t,r,n,o);break e}else for(qe=un(t.stateNode.containerInfo.firstChild),et=t,me=!0,yt=null,n=$p(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===o){t=Vt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Pp(t),e===null&&cs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,os(r,o)?l=null:i!==null&&os(r,i)&&(t.flags|=32),rm(e,t),Be(e,t,l,n),t.child;case 6:return e===null&&cs(t),null;case 13:return im(e,t,n);case 4:return xc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),nd(e,t,r,o,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,se(Yi,r._currentValue),r._currentValue=l,i!==null)if(Et(i.value,l)){if(i.children===o.children&&!Ye.current){t=Vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ft(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),us(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),us(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,vr(t,n),o=dt(o),r=r(o),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,o=gt(r,t.pendingProps),o=gt(r.type,o),rd(e,t,r,o,n);case 15:return tm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),ki(e,t),t.tag=1,Qe(r)?(e=!0,Wi(t)):e=!1,vr(t,n),Np(t,r,o),fs(t,r,o,n),hs(null,t,r,!0,e,n);case 19:return lm(e,t,n);case 22:return nm(e,t,n)}throw Error(N(156,t.tag))};function Em(e,t){return Yf(e,t)}function Dy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new Dy(e,t,n,r)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ny(e){if(typeof e=="function")return Ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ec)return 11;if(e===tc)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Di(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ic(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case nr:return Mn(n.children,o,i,t);case qs:l=8,o|=8;break;case Oa:return e=ct(12,n,t,o|2),e.elementType=Oa,e.lanes=i,e;case La:return e=ct(13,n,t,o),e.elementType=La,e.lanes=i,e;case Fa:return e=ct(19,n,t,o),e.elementType=Fa,e.lanes=i,e;case Af:return Rl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Df:l=10;break e;case Nf:l=9;break e;case ec:l=11;break e;case tc:l=14;break e;case qt:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ct(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Mn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Rl(e,t,n,r){return e=ct(22,e,r,t),e.elementType=Af,e.lanes=n,e.stateNode={isHidden:!1},e}function wa(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function xa(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ay(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Oc(e,t,n,r,o,i,l,a,s){return e=new Ay(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(i),e}function $y(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cm(e){if(!e)return gn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Ep(e,n,t)}return t}function Sm(e,t,n,r,o,i,l,a,s){return e=Oc(n,r,!0,e,o,i,l,a,s),e.context=Cm(null),n=e.current,r=He(),o=pn(n),i=Ft(r,o),i.callback=t??null,dn(n,i,o),e.current.lanes=o,Io(e,o,r),Xe(e,r),e}function Dl(e,t,n,r){var o=t.current,i=He(),l=pn(o);return n=Cm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(o,t,l),e!==null&&(bt(e,o,l,i),Ci(e,o,l)),l}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){hd(e,t),(e=e.alternate)&&hd(e,t)}function Py(){return null}var _m=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fc(e){this._internalRoot=e}Nl.prototype.render=Fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Dl(e,t,null,null)};Nl.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){Dl(null,e,null,null)}),t[Bt]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=tp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&rp(e)}};function zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gd(){}function My(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ol(l);i.call(c)}}var l=Sm(t,r,e,0,null,!1,!1,"",gd);return e._reactRootContainer=l,e[Bt]=l.current,Eo(e.nodeType===8?e.parentNode:e),jn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=ol(s);a.call(c)}}var s=Oc(e,0,!1,null,null,!1,!1,"",gd);return e._reactRootContainer=s,e[Bt]=s.current,Eo(e.nodeType===8?e.parentNode:e),jn(function(){Dl(t,s,n,r)}),s}function $l(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ol(l);a.call(s)}}Dl(t,l,e,o)}else l=My(n,t,e,o,r);return ol(l)}qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(oc(t,n|1),Xe(t,be()),!(q&6)&&(Rr=be()+500,En()))}break;case 13:jn(function(){var r=Ht(e,1);if(r!==null){var o=He();bt(r,e,1,o)}}),Lc(e,1)}};ic=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=He();bt(t,e,134217728,n)}Lc(e,134217728)}};ep=function(e){if(e.tag===13){var t=pn(e),n=Ht(e,t);if(n!==null){var r=He();bt(n,e,t,r)}Lc(e,t)}};tp=function(){return ie};np=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Ya=function(e,t,n){switch(t){case"input":if(Ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=El(r);if(!o)throw Error(N(90));Pf(r),Ba(r,o)}}}break;case"textarea":If(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};Hf=$c;Vf=jn;var Iy={usingClientEntryPoint:!1,Events:[Lo,lr,El,jf,Bf,$c]},Kr={findFiberByHostInstance:Dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Oy={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||Py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{yl=ai.inject(Oy),Rt=ai}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zc(t))throw Error(N(200));return $y(e,t,null,n)};rt.createRoot=function(e,t){if(!zc(e))throw Error(N(299));var n=!1,r="",o=_m;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Oc(e,1,!1,null,null,n,!1,r,o),e[Bt]=t.current,Eo(e.nodeType===8?e.parentNode:e),new Fc(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Gf(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return jn(e)};rt.hydrate=function(e,t,n){if(!Al(t))throw Error(N(200));return $l(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!zc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=_m;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Sm(t,null,e,1,n??null,o,!1,i,l),e[Bt]=t.current,Eo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Nl(t)};rt.render=function(e,t,n){if(!Al(t))throw Error(N(200));return $l(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Al(e))throw Error(N(40));return e._reactRootContainer?(jn(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};rt.unstable_batchedUpdates=$c;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return $l(e,t,n,!1,r)};rt.version="18.2.0-next-9e3b772b8-20220608";function km(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(km)}catch(e){console.error(e)}}km(),Sf.exports=rt;var Un=Sf.exports;const Ly=Ws(Un);var Tm,vd=Un;Tm=Ma.createRoot=vd.createRoot,Ma.hydrateRoot=vd.hydrateRoot;const Fy=Object,Pl=Map,zo=Set,jc=zo.prototype.has,zy=zo.prototype.add,il=Pl.prototype.has,yd=Pl.prototype.get,Ml=Pl.prototype.set,wr=1,Ts=2,co=4,ll=8,jy=16,By=32,kn="__t",wd="__p",Rs="__e",Hy=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Vy="http://www.w3.org/1999/xlink",Uy="http://www.w3.org/2000/xmlns/",Wy=120,Gy=new zo(["href","list","form","tabIndex","download"]),Ky=new zo(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"]);if(typeof window>"u")throw new Error("See http://million.dev/docs/install to install the compiler.");const zt=document,al=queueMicrotask;zt.createElement("template");const Rm=zt.createElement("template"),Yy=Rm.content,Qy=zt.createElement("template"),Xy=zt.createElementNS("http://www.w3.org/2000/svg","svg"),Zy=Qy.content.firstChild,Wn=Node.prototype,Il=Element.prototype,Jy=CharacterData.prototype,Ol=Fy.getOwnPropertyDescriptor,Ni=Wn.insertBefore,qy=Wn.cloneNode,e0=Wn.replaceChild,t0=Il.remove,n0=Wn.addEventListener,r0=Il.removeAttribute,o0=Il.setAttribute,xd=Il.setAttributeNS,i0=Ol(Wn,"textContent").set,Ds=Ol(Wn,"firstChild").get,l0=Ol(Wn,"nextSibling").get,a0=Ol(Jy,"data").set;zt[Rs]=new zo;const bd=(e,t,n)=>{const r=t.toLowerCase(),o=`$$${r}`;jc.call(zt[Rs],r)||(n0.call(zt,r,l=>{l.stopPropagation=()=>{l.cancelBubble=!0,l.stopImmediatePropagation()},requestAnimationFrame(()=>{let a=l.target;for(;a;){const s=a[o];s&&(Object.defineProperty(l,"currentTarget",{configurable:!0,get(){return a}}),s(l)),a=a.parentNode}})}),zy.call(zt[Rs],r));const i=l=>{var a;l?"key"in l&&l.key===((a=e[o])==null?void 0:a.key)||(e[o]=l):e[o]=null};return i(n),i},uo=(e,t)=>{let n=Ds.call(e);if(t)for(let r=0;r<t&&n;++r)n=l0.call(n);return n},Ed=(e,t,n)=>{const r=zt.createTextNode(t),o=uo(e,n);return Ni.call(e,r,o),r},s0=(e,t)=>{a0.call(e,t)},si=(e,t,n)=>{typeof n!="number"||Hy.test(t)?e.style[t]=n:typeof n=="string"?e.style.cssText=n:t.startsWith("-")?e.style.setProperty(t,String(n)):n==null?e.style[t]="":e.style[t]=`${String(n)}px`},Cd=(e,t,n)=>{t=t.replace(/xlink(?:H|:h)/,"h").replace(/sName$/,"s"),t.startsWith("xmlns")?xd.call(e,Uy,t,String(n)):t.startsWith("xlink")&&xd.call(e,Vy,"href",String(n))},Sd=(e,t,n)=>{const r=n==null;if(n=r?"":n,t in e&&e[t]!==void 0&&e[t]!==null&&!(e instanceof SVGElement)&&jc.call(Gy,t))try{e[t]=n}catch{}else!r&&n!==""&&(n!==!1||t.includes("-"))?o0.call(e,t,String(n)):r0.call(e,t)};class fo{}const Dm=(e,t=[],n=[])=>{var a,s;if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="bigint"||e===!0)return String(e);if(e==null||e===!1)return"";if(typeof e=="object"&&"$"in e)return t.push({p:n,e:[{t:wr,n:null,v:null,h:e.$,i:0,l:null,p:null,b:null}],i:[]}),"<slot/>";let r="",o="";const i={p:n,e:[],i:[]};for(let c in e.props){const u=e.props[c];if(!(c==="key"||c==="ref"||c==="children")){if(c==="className"&&(c="class"),c==="htmlFor"&&(c="for"),c.startsWith("on")){"$"in u?i.e.push({t:co,n:c.slice(2),v:null,h:u.$,i:null,l:null,p:null,b:null}):i.i.push({t:co,n:c.slice(2),v:null,h:null,i:null,l:u,p:null,b:null});continue}if(u){if(typeof u=="object"&&"$"in u){c==="style"?i.e.push({t:ll,n:c,v:null,h:u.$,i:null,l:null,p:null,b:null}):c.charCodeAt(0)===Wy?i.e.push({t:jy,n:c,v:null,h:u.$,i:null,l:null,p:null,b:null}):i.e.push({t:Ts,n:c,v:null,h:u.$,i:null,l:null,p:null,b:null});continue}if(c==="style"&&typeof u=="object"){let d="";for(const f in u){if(typeof u[f]=="object"){i.e.push({t:ll,n:f,v:null,h:u[f].$,i:null,l:null,p:null,b:null});continue}let v="";for(let y=0,g=f.length;y<g;++y){const x=f.charCodeAt(y);x<97?v+=`-${String.fromCharCode(x+32)}`:v+=f[y]}d+=`${v}:${String(u[f])};`}r+=` style="${d}"`;continue}r+=` ${c}="${String(u)}"`}}}if(jc.call(Ky,e.type))return i.e.length&&t.push(i),`<${e.type}${r} />`;let l=!1;for(let c=0,u=((a=e.props.children)==null?void 0:a.length)||0,d=0;c<u;++c){const f=(s=e.props.children)==null?void 0:s[c];if(f==null||f===!1)continue;if(typeof f=="object"&&"$"in f){i.e.push({t:wr,n:null,v:null,h:f.$,i:c,l:null,p:null,b:null});continue}if(f instanceof fo){i.i.push({t:By,n:null,v:null,h:null,i:c,l:null,p:null,b:f});continue}if(typeof f=="string"||typeof f=="number"||typeof f=="bigint"){const y=typeof f=="number"||typeof f=="bigint"?String(f):f;if(l){i.i.push({t:wr,n:null,v:y,h:null,i:c,l:null,p:null,b:null});continue}l=!0,o+=y,d++;continue}l=!1;const v=n.slice();v.push(d++),o+=Dm(f,t,v)}return(i.i.length||i.e.length)&&t.push(i),`<${e.type}${r}>${o}</${e.type}>`},_d=e=>new Nm(e);class Nm extends fo{constructor(t){super(),this.b=t}v(){}p(t){const n=this.b,r=t.b,o=n.length,i=r.length,l=this.t();if(this===t||i===0&&o===0)return l;if(this.b=r,i===0)return c0.call(this),l;if(o===0)return Am.call(t,l),l;let a=0,s=0,c=o-1,u=i-1,d=n[0],f=r[0],v=n[c],y=r[u],g;for(;a<=c&&s<=u;){if(!d){d=n[++a];continue}if(!v){v=n[--c];continue}const x=d.k,h=f.k;if(x===h){er.call(d,f),r[s]=d,d=n[++a],f=r[++s];continue}const p=v.k,w=y.k;if(p===w){er.call(v,y),r[u]=v,v=n[--c],y=r[--u];continue}if(x===w){er.call(d,y),r[u]=d;const E=r[u+1];ba.call(d,E,(E==null?void 0:E.l)||null),d=n[++a],y=r[--u];continue}if(p===h){er.call(v,f),r[s]=v;const E=n[a];ba.call(v,E,(E==null?void 0:E.l)||null),v=n[--c],f=r[++s];continue}if(!g){g=new Pl;for(let E=a;E<=c;E++)Ml.call(g,n[E].k,E)}const b=g.get(h);if(b===void 0)xr.call(f,l,d.l||null);else{const E=n[b];ba.call(E,d,null),er.call(E,f),r[s]=E,n[b]=null}f=r[++s]}if(a<=c||s<=u)if(a>c){const x=r[u+1];for(let h=s;h<=u;++h)xr.call(r[h],l,x?x.l:null)}else for(let x=a;x<=c;++x)Ns.call(n[x]);return l}m(t,n=null){if(this._t)return this._t;for(let r=0,o=this.b.length;r<o;++r){const i=this.b[r];xr.call(i,t,n)}return this._t=t,t}x(){const t=this.t();if(t)i0.call(t,"");else for(let n=0,r=this.b.length;n<r;++n)Ns.call(this.b[n]);this.b=[]}u(){return!0}s(){return this.b.map(t=>t.s()).join("")}t(){return this._t||(this._t=this.b[0].t()),this._t}}const Bc=Nm.prototype,Am=Bc.m,$m=Bc.p,c0=Bc.x,u0=new Proxy({},{get(e,t){return{$:t}}}),Pm=(e,t,n,r)=>{const o=e(u0),i=[],l=Hc(Dm(t?t(o):o,i),r);return(a,s,c)=>new Ll(l,i,a,s??(a==null?void 0:a.key)??null,c??n??null,null)},d0=(e,t)=>{if(("b"in e||"b"in t)&&$m.call(e,t),e.l||xr.call(e),e.k&&e.k===t.k||e.r===t.r)return er.call(e,t);const n=xr.call(t,e.t(),e.l);return Ns.call(e),e.k=t.k,n};class Ll extends fo{constructor(t,n,r,o,i,l){super(),this.r=t,this.d=r,this.e=n,this.k=o,this.c=Array(n.length),i&&(this.u=i),l&&(this.g=l)}m(t,n=null){var i,l;if(this.l)return this.l;const r=qy.call(this.r,!0),o=(i=this.g)==null?void 0:i.call(this,r);o&&(this.c=o);for(let a=0,s=this.e.length;a<s;++a){const c=this.e[a],u=(o==null?void 0:o[a])??kd(c.p,r,this.c,a);for(let f=0,v=c.e.length;f<v;++f){const y=c.e[f],g=this.d[y.h];if(y.t&wr){if(g instanceof fo){g.m(u,uo(u,y.i));continue}if(u[kn]||(u[kn]=new Array(v)),typeof g=="function"){const x=g(null);u[kn][f]=x,Ni.call(u,x,uo(u,y.i));continue}u[kn][f]=Ed(u,g==null||g===!1?"":String(g),y.i)}else if(y.t&co){const x=bd(u,y.n,g);u[wd+y.n]=x}else if(y.t&Ts)Sd(u,y.n,g);else if(y.t&ll)if(typeof g=="string"||typeof g=="number")si(u,y.n,g);else for(const x in g)si(u,x,g[x]);else Cd(u,y.n,g)}const d=(l=c.i)==null?void 0:l.length;if(d)for(let f=0;f<d;++f){const v=c.i[f];v.t&wr?v.v&&Ed(u,v.v,v.i):v.t&co?bd(u,v.n,v.l):v.b.m(u,uo(u,v.i))}}return t&&Ni.call(t,r,n),this.l=r,r}p(t){var o,i;const n=this.l;if(!t.d)return n;const r=this.d;if(!f0.call(this,r,t.d))return n;this.d=t.d;for(let l=0,a=this.e.length;l<a;++l){const s=this.e[l],c=this.c[l]??kd(s.p,n,this.c,l);for(let u=0,d=s.e.length;u<d;++u){const f=s.e[u],v=r[f.h],y=t.d[f.h];if(y!==v){if(f.t&co){c[wd+f.n](y);continue}if(f.t&wr){if(v instanceof fo){const g=(i=(o=t.e)==null?void 0:o[l])==null?void 0:i.e[u],x=t.d[g.h];v.p(x);continue}if(typeof y=="function"){const g=c[kn][u];if("unstable"in y&&v!==y){const x=y(null);c[kn][u]=x,e0.call(c,x,g)}else y(g);continue}s0(c[kn][u],y==null||y===!1?"":String(y))}else if(f.t&Ts)Sd(c,f.n,y);else if(f.t&ll)if(typeof y=="string"||typeof y=="number")si(c,f.n,y);else for(const g in y)y[g]!==v[g]&&si(c,g,y[g]);else Cd(c,f.n,y)}}}return n}v(t=null,n=null){Ni.call(this.t(),this.l,t?t.l:n)}x(){t0.call(this.l),this.l=null}u(t,n){return!0}s(){var t;return String((t=this.l)==null?void 0:t.outerHTML)}t(){var t;return this._t||(this._t=(t=this.l)==null?void 0:t.parentElement),this._t}}const kd=(e,t,n,r)=>{const o=e.length;if(!o)return t;if(n&&r!==void 0&&n[r])return n[r];for(let i=0;i<o;++i){const l=e[i];t=uo(t,l)}return n&&r!==void 0&&(n[r]=t),t},Hc=(e,t)=>{const n=t?Xy:Rm;return n.innerHTML=e,(t?Zy:Yy).firstChild},jo=Ll.prototype,xr=jo.m,er=jo.p,ba=jo.v,Ns=jo.x,f0=jo.u,sl="slot",Mm="g",Ea="__react_root",p0=({effect:e})=>(m.useEffect(e,[]),null),wt=new Map,m0=e=>{const t={};for(const n in e){const r=e[n];if(m.isValidElement(r)){t[n]=Vc(r);continue}t[n]=e[n]}return t},Vc=(e,t)=>{if(typeof window>"u")return m.createElement(sl,{suppressHydrationWarning:!0},e);if(m.isValidElement(e)&&typeof e.type=="function"&&"callable"in e.type){const r=e.type(e.props);if(wt.has(r.type)){const o=wt.get(r.type);if(typeof o=="function")return o(r.props)}}const n=r=>{const o=r??document.createElement(sl);return(Ea in o?o[Ea]:o[Ea]=Tm(o)).render(e),o};return t&&(n.unstable=!0),n},As=e=>{var o;if(typeof e!="object"||e===null||!("type"in e))return typeof e=="number"?String(e):e;let t=e.type;if(typeof t=="function")return As(t(e.props??{}));if(typeof t=="object"&&"$"in t)return t;const n={...e.props};"css"in n&&"__EMOTION_TYPE_PLEASE_DO_NOT_USE__"in n&&(n.style=n.css.styles,t=n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,delete n.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,delete n.css);const r=(o=e.props)==null?void 0:o.children;return r!=null&&(n.children=$s(e.props.children).map(i=>As(i))),{type:t,props:n}},$s=e=>{if(e==null)return[];if(typeof e=="object"&&"type"in e&&e.type===m.Fragment)return $s(e.props.children);if(!Array.isArray(e)||typeof e=="object"&&"$"in e)return[e];const t=e.flat(1/0),n=[];for(let r=0,o=t.length;r<o;++r)n.push(...$s(t[r]));return n},Fl=(e,{block:t,shouldUpdate:n,svg:r,as:o}={})=>{const i=e?Pm(e,As,n,r):t,l=r?Mm:sl,a=s=>{var y;const c=m.useRef(null),u=m.useRef(null);s=m0(s),(y=u.current)==null||y.call(u,s);const d=m.useCallback(()=>{const g=i(s,s.key);c.current&&u.current===null&&(al(()=>{xr.call(g,c.current,null)}),u.current=x=>{al(()=>{d0(g,i(x,x.key,n))})})},[]),f=m.useMemo(()=>m.createElement(o??l,{ref:c}),[]);return m.createElement(m.Fragment,null,f,m.createElement(p0,{effect:d}))};return il.call(wt,a)||Ml.call(wt,a,i),a},h0=({each:e,children:t,memo:n,svg:r,as:o,...i})=>{const l=m.useRef(null),a=m.useRef(null),s=m.useRef({each:null,children:null,mounted:null});a.current&&(e!==s.current.each||!n)&&al(()=>{const d=Td(e,t,s,n);$m.call(a.current,_d(d))});const c=r?Mm:sl,u=m.createElement(o??c,{...i,ref:l});return m.useEffect(()=>{!l.current||a.current||al(()=>{s.current.mounted&&(l.current.textContent="");const d=Td(e,t,s,n);a.current=_d(d),il.call(wt,u)||Ml.call(wt,u,a.current),Am.call(a.current,l.current),s.current.mounted=!0})},[l.current]),u},g0=m.memo;g0(h0);const Td=(e,t,n,r)=>{var l;const o=Array(e.length),i=n.current;for(let a=0,s=e.length;a<s;++a){if(r&&i.each&&i.each[a]===e[a]){o[a]=(l=i.children)==null?void 0:l[a];continue}const c=t(e[a],a);if(il.call(wt,c.type)){i.block||(i.block=yd.call(wt,c.type)),o[a]=i.block(c.props);continue}if(typeof c.type=="function"&&"callable"in c.type){const f=c.type(c.props);if(il.call(wt,f.type)){const v=yd.call(wt,f.type);if(typeof v=="function"){o[a]=v(f.props);continue}}}const u=Pm(f=>f==null?void 0:f.scope),d=f=>u({scope:Vc(m.createElement(c.type,f))},c.key?String(c.key):void 0);Ml.call(wt,c.type,d),i.block=d,o[a]=d(c.props)}return i.each=e,i.children=o,o};function Im(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Im(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Om(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Im(e))&&(r&&(r+=" "),r+=t);return r}function v0(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=Lm(t))&&(r&&(r+=" "),r+=n);return r}function Lm(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=Lm(e[r]))&&(n&&(n+=" "),n+=t);return n}var Uc="-";function y0(e){var t=x0(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,o=r===void 0?{}:r;function i(a){var s=a.split(Uc);return s[0]===""&&s.length!==1&&s.shift(),Fm(s,t)||w0(a)}function l(a,s){var c=n[a]||[];return s&&o[a]?[].concat(c,o[a]):c}return{getClassGroupId:i,getConflictingClassGroupIds:l}}function Fm(e,t){var l;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),o=r?Fm(e.slice(1),r):void 0;if(o)return o;if(t.validators.length!==0){var i=e.join(Uc);return(l=t.validators.find(function(a){var s=a.validator;return s(i)}))==null?void 0:l.classGroupId}}var Rd=/^\[(.+)\]$/;function w0(e){if(Rd.test(e)){var t=Rd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function x0(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},o=E0(Object.entries(e.classGroups),n);return o.forEach(function(i){var l=i[0],a=i[1];Ps(a,r,l,t)}),r}function Ps(e,t,n,r){e.forEach(function(o){if(typeof o=="string"){var i=o===""?t:Dd(t,o);i.classGroupId=n;return}if(typeof o=="function"){if(b0(o)){Ps(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(function(l){var a=l[0],s=l[1];Ps(s,Dd(t,a),n,r)})})}function Dd(e,t){var n=e;return t.split(Uc).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function b0(e){return e.isThemeGetter}function E0(e,t){return t?e.map(function(n){var r=n[0],o=n[1],i=o.map(function(l){return typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(function(a){var s=a[0],c=a[1];return[t+s,c]})):l});return[r,i]}):e}function C0(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function o(i,l){n.set(i,l),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(l){var a=n.get(l);if(a!==void 0)return a;if((a=r.get(l))!==void 0)return o(l,a),a},set:function(l,a){n.has(l)?n.set(l,a):o(l,a)}}}var zm="!";function S0(e){var t=e.separator||":",n=t.length===1,r=t[0],o=t.length;return function(l){for(var a=[],s=0,c=0,u,d=0;d<l.length;d++){var f=l[d];if(s===0){if(f===r&&(n||l.slice(d,d+o)===t)){a.push(l.slice(c,d)),c=d+o;continue}if(f==="/"){u=d;continue}}f==="["?s++:f==="]"&&s--}var v=a.length===0?l:l.substring(c),y=v.startsWith(zm),g=y?v.substring(1):v,x=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:y,baseClassName:g,maybePostfixModifierPosition:x}}}function _0(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var o=r[0]==="[";o?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function k0(e){return{cache:C0(e.cacheSize),splitModifiers:S0(e),...y0(e)}}var T0=/\s+/;function R0(e,t){var n=t.splitModifiers,r=t.getClassGroupId,o=t.getConflictingClassGroupIds,i=new Set;return e.trim().split(T0).map(function(l){var a=n(l),s=a.modifiers,c=a.hasImportantModifier,u=a.baseClassName,d=a.maybePostfixModifierPosition,f=r(d?u.substring(0,d):u),v=!!d;if(!f){if(!d)return{isTailwindClass:!1,originalClassName:l};if(f=r(u),!f)return{isTailwindClass:!1,originalClassName:l};v=!1}var y=_0(s).join(":"),g=c?y+zm:y;return{isTailwindClass:!0,modifierId:g,classGroupId:f,originalClassName:l,hasPostfixModifier:v}}).reverse().filter(function(l){if(!l.isTailwindClass)return!0;var a=l.modifierId,s=l.classGroupId,c=l.hasPostfixModifier,u=a+s;return i.has(u)?!1:(i.add(u),o(s,c).forEach(function(d){return i.add(a+d)}),!0)}).reverse().map(function(l){return l.originalClassName}).join(" ")}function D0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o,i,l=a;function a(c){var u=t[0],d=t.slice(1),f=d.reduce(function(v,y){return y(v)},u());return r=k0(f),o=r.cache.get,i=r.cache.set,l=s,s(c)}function s(c){var u=o(c);if(u)return u;var d=R0(c,r);return i(c,d),d}return function(){return l(v0.apply(null,arguments))}}function ue(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var jm=/^\[(?:([a-z-]+):)?(.+)\]$/i,N0=/^\d+\/\d+$/,A0=new Set(["px","full","screen"]),$0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,P0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,M0=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function ht(e){return $n(e)||A0.has(e)||N0.test(e)||Ms(e)}function Ms(e){return Gn(e,"length",j0)}function I0(e){return Gn(e,"size",Bm)}function O0(e){return Gn(e,"position",Bm)}function L0(e){return Gn(e,"url",B0)}function ci(e){return Gn(e,"number",$n)}function $n(e){return!Number.isNaN(Number(e))}function F0(e){return e.endsWith("%")&&$n(e.slice(0,-1))}function Yr(e){return Nd(e)||Gn(e,"number",Nd)}function X(e){return jm.test(e)}function Qr(){return!0}function Zt(e){return $0.test(e)}function z0(e){return Gn(e,"",H0)}function Gn(e,t,n){var r=jm.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function j0(e){return P0.test(e)}function Bm(){return!1}function B0(e){return e.startsWith("url(")}function Nd(e){return Number.isInteger(Number(e))}function H0(e){return M0.test(e)}function V0(){var e=ue("colors"),t=ue("spacing"),n=ue("blur"),r=ue("brightness"),o=ue("borderColor"),i=ue("borderRadius"),l=ue("borderSpacing"),a=ue("borderWidth"),s=ue("contrast"),c=ue("grayscale"),u=ue("hueRotate"),d=ue("invert"),f=ue("gap"),v=ue("gradientColorStops"),y=ue("gradientColorStopPositions"),g=ue("inset"),x=ue("margin"),h=ue("opacity"),p=ue("padding"),w=ue("saturate"),b=ue("scale"),E=ue("sepia"),_=ue("skew"),S=ue("space"),k=ue("translate"),M=function(){return["auto","contain","none"]},I=function(){return["auto","hidden","clip","visible","scroll"]},z=function(){return["auto",X,t]},L=function(){return[X,t]},U=function(){return["",ht]},K=function(){return["auto",$n,X]},V=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},B=function(){return["solid","dashed","dotted","double","none"]},T=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},C=function(){return["start","end","center","between","around","evenly","stretch"]},D=function(){return["","0",X]},A=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},F=function(){return[$n,ci]},W=function(){return[$n,X]};return{cacheSize:500,theme:{colors:[Qr],spacing:[ht],blur:["none","",Zt,X],brightness:F(),borderColor:[e],borderRadius:["none","","full",Zt,X],borderSpacing:L(),borderWidth:U(),contrast:F(),grayscale:D(),hueRotate:W(),invert:D(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[F0,Ms],inset:z(),margin:z(),opacity:F(),padding:L(),saturate:F(),scale:F(),sepia:D(),skew:W(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",X]}],container:["container"],columns:[{columns:[Zt]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(V(),[X])}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Yr]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",X]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",Yr]}],"grid-cols":[{"grid-cols":[Qr]}],"col-start-end":[{col:["auto",{span:["full",Yr]},X]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[Qr]}],"row-start-end":[{row:["auto",{span:[Yr]},X]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",X]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",X]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(C())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(C(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(C(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",X,t]}],"min-w":[{"min-w":["min","max","fit",X,ht]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Zt]},Zt,X]}],h:[{h:[X,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",X,ht]}],"max-h":[{"max-h":[X,t,"min","max","fit"]}],"font-size":[{text:["base",Zt,Ms]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ci]}],"font-family":[{font:[Qr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",X]}],"line-clamp":[{"line-clamp":["none",$n,ci]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",X,ht]}],"list-image":[{"list-image":["none",X]}],"list-style-type":[{list:["none","disc","decimal",X]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(B(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",ht]}],"underline-offset":[{"underline-offset":["auto",X,ht]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(V(),[O0])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",I0]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},L0]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[].concat(B(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:B()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:[""].concat(B())}],"outline-offset":[{"outline-offset":[X,ht]}],"outline-w":[{outline:[ht]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[ht]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Zt,z0]}],"shadow-color":[{shadow:[Qr]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":T()}],"bg-blend":[{"bg-blend":T()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",Zt,X]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[w]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",X]}],duration:[{duration:W()}],ease:[{ease:["linear","in","out","in-out",X]}],delay:[{delay:W()}],animate:[{animate:["none","spin","ping","pulse","bounce",X]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[Yr,X]}],"translate-x":[{"translate-x":[k]}],"translate-y":[{"translate-y":[k]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",X]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",X]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",X]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[ht,ci]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var U0=D0(V0);function Ve(...e){return U0(Om(e))}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function Ad(e,[t,n]){return Math.min(n,Math.max(t,e))}function he(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function KE(e,t){const n=m.createContext(t);function r(i){const{children:l,...a}=i,s=m.useMemo(()=>a,Object.values(a));return m.createElement(n.Provider,{value:s},l)}function o(i){const l=m.useContext(n);if(l)return l;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return r.displayName=e+"Provider",[r,o]}function Bo(e,t=[]){let n=[];function r(i,l){const a=m.createContext(l),s=n.length;n=[...n,l];function c(d){const{scope:f,children:v,...y}=d,g=(f==null?void 0:f[e][s])||a,x=m.useMemo(()=>y,Object.values(y));return m.createElement(g.Provider,{value:x},v)}function u(d,f){const v=(f==null?void 0:f[e][s])||a,y=m.useContext(v);if(y)return y;if(l!==void 0)return l;throw new Error(`\`${d}\` must be used within \`${i}\``)}return c.displayName=i+"Provider",[c,u]}const o=()=>{const i=n.map(l=>m.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return m.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[r,W0(o,...t)]}function W0(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((a,{useScope:s,scopeName:c})=>{const d=s(i)[`__scope${c}`];return{...a,...d}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function G0(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Hm(...e){return t=>e.forEach(n=>G0(n,t))}function ze(...e){return m.useCallback(Hm(...e),e)}const Dr=m.forwardRef((e,t)=>{const{children:n,...r}=e,o=m.Children.toArray(n),i=o.find(Y0);if(i){const l=i.props.children,a=o.map(s=>s===i?m.Children.count(l)>1?m.Children.only(null):m.isValidElement(l)?l.props.children:null:s);return m.createElement(Is,Z({},r,{ref:t}),m.isValidElement(l)?m.cloneElement(l,void 0,a):null)}return m.createElement(Is,Z({},r,{ref:t}),n)});Dr.displayName="Slot";const Is=m.forwardRef((e,t)=>{const{children:n,...r}=e;return m.isValidElement(n)?m.cloneElement(n,{...Q0(r,n.props),ref:t?Hm(t,n.ref):n.ref}):m.Children.count(n)>1?m.Children.only(null):null});Is.displayName="SlotClone";const K0=({children:e})=>m.createElement(m.Fragment,null,e);function Y0(e){return m.isValidElement(e)&&e.type===K0}function Q0(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}function Vm(e){const t=e+"CollectionProvider",[n,r]=Bo(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=v=>{const{scope:y,children:g}=v,x=it.useRef(null),h=it.useRef(new Map).current;return it.createElement(o,{scope:y,itemMap:h,collectionRef:x},g)},a=e+"CollectionSlot",s=it.forwardRef((v,y)=>{const{scope:g,children:x}=v,h=i(a,g),p=ze(y,h.collectionRef);return it.createElement(Dr,{ref:p},x)}),c=e+"CollectionItemSlot",u="data-radix-collection-item",d=it.forwardRef((v,y)=>{const{scope:g,children:x,...h}=v,p=it.useRef(null),w=ze(y,p),b=i(c,g);return it.useEffect(()=>(b.itemMap.set(p,{ref:p,...h}),()=>void b.itemMap.delete(p))),it.createElement(Dr,{[u]:"",ref:w},x)});function f(v){const y=i(e+"CollectionConsumer",v);return it.useCallback(()=>{const x=y.collectionRef.current;if(!x)return[];const h=Array.from(x.querySelectorAll(`[${u}]`));return Array.from(y.itemMap.values()).sort((b,E)=>h.indexOf(b.ref.current)-h.indexOf(E.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:l,Slot:s,ItemSlot:d},f,r]}const X0=m.createContext(void 0);function Wc(e){const t=m.useContext(X0);return e||t||"ltr"}const Z0=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],xe=Z0.reduce((e,t)=>{const n=m.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?Dr:t;return m.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),m.createElement(a,Z({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function J0(e,t){e&&Un.flushSync(()=>e.dispatchEvent(t))}function Nt(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function q0(e,t=globalThis==null?void 0:globalThis.document){const n=Nt(e);m.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Os="dismissableLayer.update",ew="dismissableLayer.pointerDownOutside",tw="dismissableLayer.focusOutside";let $d;const nw=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),rw=m.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:a,onDismiss:s,...c}=e,u=m.useContext(nw),[d,f]=m.useState(null),v=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,y]=m.useState({}),g=ze(t,k=>f(k)),x=Array.from(u.layers),[h]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),p=x.indexOf(h),w=d?x.indexOf(d):-1,b=u.layersWithOutsidePointerEventsDisabled.size>0,E=w>=p,_=ow(k=>{const M=k.target,I=[...u.branches].some(z=>z.contains(M));!E||I||(i==null||i(k),a==null||a(k),k.defaultPrevented||s==null||s())},v),S=iw(k=>{const M=k.target;[...u.branches].some(z=>z.contains(M))||(l==null||l(k),a==null||a(k),k.defaultPrevented||s==null||s())},v);return q0(k=>{w===u.layers.size-1&&(o==null||o(k),!k.defaultPrevented&&s&&(k.preventDefault(),s()))},v),m.useEffect(()=>{if(d)return r&&(u.layersWithOutsidePointerEventsDisabled.size===0&&($d=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Pd(),()=>{r&&u.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=$d)}},[d,v,r,u]),m.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Pd())},[d,u]),m.useEffect(()=>{const k=()=>y({});return document.addEventListener(Os,k),()=>document.removeEventListener(Os,k)},[]),m.createElement(xe.div,Z({},c,{ref:g,style:{pointerEvents:b?E?"auto":"none":void 0,...e.style},onFocusCapture:he(e.onFocusCapture,S.onFocusCapture),onBlurCapture:he(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:he(e.onPointerDownCapture,_.onPointerDownCapture)}))});function ow(e,t=globalThis==null?void 0:globalThis.document){const n=Nt(e),r=m.useRef(!1),o=m.useRef(()=>{});return m.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let c=function(){Um(ew,n,s,{discrete:!0})};const s={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",i),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function iw(e,t=globalThis==null?void 0:globalThis.document){const n=Nt(e),r=m.useRef(!1);return m.useEffect(()=>{const o=i=>{i.target&&!r.current&&Um(tw,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Pd(){const e=new CustomEvent(Os);document.dispatchEvent(e)}function Um(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?J0(o,i):o.dispatchEvent(i)}let Ca=0;function lw(){m.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Md()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Md()),Ca++,()=>{Ca===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Ca--}},[])}function Md(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Sa="focusScope.autoFocusOnMount",_a="focusScope.autoFocusOnUnmount",Id={bubbles:!1,cancelable:!0},aw=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...l}=e,[a,s]=m.useState(null),c=Nt(o),u=Nt(i),d=m.useRef(null),f=ze(t,g=>s(g)),v=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(r){let g=function(w){if(v.paused||!a)return;const b=w.target;a.contains(b)?d.current=b:Jt(d.current,{select:!0})},x=function(w){if(v.paused||!a)return;const b=w.relatedTarget;b!==null&&(a.contains(b)||Jt(d.current,{select:!0}))},h=function(w){const b=document.activeElement;for(const E of w)E.removedNodes.length>0&&(a!=null&&a.contains(b)||Jt(a))};document.addEventListener("focusin",g),document.addEventListener("focusout",x);const p=new MutationObserver(h);return a&&p.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",x),p.disconnect()}}},[r,a,v.paused]),m.useEffect(()=>{if(a){Ld.add(v);const g=document.activeElement;if(!a.contains(g)){const h=new CustomEvent(Sa,Id);a.addEventListener(Sa,c),a.dispatchEvent(h),h.defaultPrevented||(sw(pw(Wm(a)),{select:!0}),document.activeElement===g&&Jt(a))}return()=>{a.removeEventListener(Sa,c),setTimeout(()=>{const h=new CustomEvent(_a,Id);a.addEventListener(_a,u),a.dispatchEvent(h),h.defaultPrevented||Jt(g??document.body,{select:!0}),a.removeEventListener(_a,u),Ld.remove(v)},0)}}},[a,c,u,v]);const y=m.useCallback(g=>{if(!n&&!r||v.paused)return;const x=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,h=document.activeElement;if(x&&h){const p=g.currentTarget,[w,b]=cw(p);w&&b?!g.shiftKey&&h===b?(g.preventDefault(),n&&Jt(w,{select:!0})):g.shiftKey&&h===w&&(g.preventDefault(),n&&Jt(b,{select:!0})):h===p&&g.preventDefault()}},[n,r,v.paused]);return m.createElement(xe.div,Z({tabIndex:-1},l,{ref:f,onKeyDown:y}))});function sw(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Jt(r,{select:t}),document.activeElement!==n)return}function cw(e){const t=Wm(e),n=Od(t,e),r=Od(t.reverse(),e);return[n,r]}function Wm(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Od(e,t){for(const n of e)if(!uw(n,{upTo:t}))return n}function uw(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function dw(e){return e instanceof HTMLInputElement&&"select"in e}function Jt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&dw(e)&&t&&e.select()}}const Ld=fw();function fw(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Fd(e,t),e.unshift(t)},remove(t){var n;e=Fd(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Fd(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function pw(e){return e.filter(t=>t.tagName!=="A")}const Ct=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},mw=Tg["useId".toString()]||(()=>{});let hw=0;function zl(e){const[t,n]=m.useState(mw());return Ct(()=>{e||n(r=>r??String(hw++))},[e]),e||(t?`radix-${t}`:"")}const gw=["top","right","bottom","left"],vn=Math.min,Je=Math.max,cl=Math.round,ui=Math.floor,yn=e=>({x:e,y:e}),vw={left:"right",right:"left",bottom:"top",top:"bottom"},yw={start:"end",end:"start"};function Ls(e,t,n){return Je(e,vn(t,n))}function Ut(e,t){return typeof e=="function"?e(t):e}function Wt(e){return e.split("-")[0]}function Or(e){return e.split("-")[1]}function Gc(e){return e==="x"?"y":"x"}function Kc(e){return e==="y"?"height":"width"}function Lr(e){return["top","bottom"].includes(Wt(e))?"y":"x"}function Yc(e){return Gc(Lr(e))}function ww(e,t,n){n===void 0&&(n=!1);const r=Or(e),o=Yc(e),i=Kc(o);let l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=ul(l)),[l,ul(l)]}function xw(e){const t=ul(e);return[Fs(e),t,Fs(t)]}function Fs(e){return e.replace(/start|end/g,t=>yw[t])}function bw(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:l;default:return[]}}function Ew(e,t,n,r){const o=Or(e);let i=bw(Wt(e),n==="start",r);return o&&(i=i.map(l=>l+"-"+o),t&&(i=i.concat(i.map(Fs)))),i}function ul(e){return e.replace(/left|right|bottom|top/g,t=>vw[t])}function Cw(e){return{top:0,right:0,bottom:0,left:0,...e}}function Gm(e){return typeof e!="number"?Cw(e):{top:e,right:e,bottom:e,left:e}}function dl(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function zd(e,t,n){let{reference:r,floating:o}=e;const i=Lr(t),l=Yc(t),a=Kc(l),s=Wt(t),c=i==="y",u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[a]/2-o[a]/2;let v;switch(s){case"top":v={x:u,y:r.y-o.height};break;case"bottom":v={x:u,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-o.width,y:d};break;default:v={x:r.x,y:r.y}}switch(Or(t)){case"start":v[l]-=f*(n&&c?-1:1);break;case"end":v[l]+=f*(n&&c?-1:1);break}return v}const Sw=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),s=await(l.isRTL==null?void 0:l.isRTL(t));let c=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=zd(c,r,s),f=r,v={},y=0;for(let g=0;g<a.length;g++){const{name:x,fn:h}=a[g],{x:p,y:w,data:b,reset:E}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:v,rects:c,platform:l,elements:{reference:e,floating:t}});if(u=p??u,d=w??d,v={...v,[x]:{...v[x],...b}},E&&y<=50){y++,typeof E=="object"&&(E.placement&&(f=E.placement),E.rects&&(c=E.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):E.rects),{x:u,y:d}=zd(c,f,s)),g=-1;continue}}return{x:u,y:d,placement:f,strategy:o,middlewareData:v}};async function Ao(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:i,rects:l,elements:a,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:v=0}=Ut(t,e),y=Gm(v),x=a[f?d==="floating"?"reference":"floating":d],h=dl(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:s})),p=d==="floating"?{...l.floating,x:r,y:o}:l.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),b=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},E=dl(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:p,offsetParent:w,strategy:s}):p);return{top:(h.top-E.top+y.top)/b.y,bottom:(E.bottom-h.bottom+y.bottom)/b.y,left:(h.left-E.left+y.left)/b.x,right:(E.right-h.right+y.right)/b.x}}const jd=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:l,elements:a}=t,{element:s,padding:c=0}=Ut(e,t)||{};if(s==null)return{};const u=Gm(c),d={x:n,y:r},f=Yc(o),v=Kc(f),y=await l.getDimensions(s),g=f==="y",x=g?"top":"left",h=g?"bottom":"right",p=g?"clientHeight":"clientWidth",w=i.reference[v]+i.reference[f]-d[f]-i.floating[v],b=d[f]-i.reference[f],E=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s));let _=E?E[p]:0;(!_||!await(l.isElement==null?void 0:l.isElement(E)))&&(_=a.floating[p]||i.floating[v]);const S=w/2-b/2,k=_/2-y[v]/2-1,M=vn(u[x],k),I=vn(u[h],k),z=M,L=_-y[v]-I,U=_/2-y[v]/2+S,K=Ls(z,U,L),B=Or(o)!=null&&U!=K&&i.reference[v]/2-(U<z?M:I)-y[v]/2<0?U<z?z-U:L-U:0;return{[f]:d[f]-B,data:{[f]:K,centerOffset:U-K+B}}}}),_w=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:i,initialPlacement:l,platform:a,elements:s}=t,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...g}=Ut(e,t),x=Wt(r),h=Wt(l)===l,p=await(a.isRTL==null?void 0:a.isRTL(s.floating)),w=d||(h||!y?[ul(l)]:xw(l));!d&&v!=="none"&&w.push(...Ew(l,y,v,p));const b=[l,...w],E=await Ao(t,g),_=[];let S=((n=o.flip)==null?void 0:n.overflows)||[];if(c&&_.push(E[x]),u){const z=ww(r,i,p);_.push(E[z[0]],E[z[1]])}if(S=[...S,{placement:r,overflows:_}],!_.every(z=>z<=0)){var k,M;const z=(((k=o.flip)==null?void 0:k.index)||0)+1,L=b[z];if(L)return{data:{index:z,overflows:S},reset:{placement:L}};let U=(M=S.filter(K=>K.overflows[0]<=0).sort((K,V)=>K.overflows[1]-V.overflows[1])[0])==null?void 0:M.placement;if(!U)switch(f){case"bestFit":{var I;const K=(I=S.map(V=>[V.placement,V.overflows.filter(B=>B>0).reduce((B,T)=>B+T,0)]).sort((V,B)=>V[1]-B[1])[0])==null?void 0:I[0];K&&(U=K);break}case"initialPlacement":U=l;break}if(r!==U)return{reset:{placement:U}}}return{}}}};function Bd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Hd(e){return gw.some(t=>e[t]>=0)}const kw=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Ut(e,t);switch(r){case"referenceHidden":{const i=await Ao(t,{...o,elementContext:"reference"}),l=Bd(i,n.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Hd(l)}}}case"escaped":{const i=await Ao(t,{...o,altBoundary:!0}),l=Bd(i,n.floating);return{data:{escapedOffsets:l,escaped:Hd(l)}}}default:return{}}}}};async function Tw(e,t){const{placement:n,platform:r,elements:o}=e,i=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=Wt(n),a=Or(n),s=Lr(n)==="y",c=["left","top"].includes(l)?-1:1,u=i&&s?-1:1,d=Ut(t,e);let{mainAxis:f,crossAxis:v,alignmentAxis:y}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof y=="number"&&(v=a==="end"?y*-1:y),s?{x:v*u,y:f*c}:{x:f*c,y:v*u}}const Rw=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await Tw(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},Dw=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:x=>{let{x:h,y:p}=x;return{x:h,y:p}}},...s}=Ut(e,t),c={x:n,y:r},u=await Ao(t,s),d=Lr(Wt(o)),f=Gc(d);let v=c[f],y=c[d];if(i){const x=f==="y"?"top":"left",h=f==="y"?"bottom":"right",p=v+u[x],w=v-u[h];v=Ls(p,v,w)}if(l){const x=d==="y"?"top":"left",h=d==="y"?"bottom":"right",p=y+u[x],w=y-u[h];y=Ls(p,y,w)}const g=a.fn({...t,[f]:v,[d]:y});return{...g,data:{x:g.x-n,y:g.y-r}}}}},Nw=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:l}=t,{offset:a=0,mainAxis:s=!0,crossAxis:c=!0}=Ut(e,t),u={x:n,y:r},d=Lr(o),f=Gc(d);let v=u[f],y=u[d];const g=Ut(a,t),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(s){const w=f==="y"?"height":"width",b=i.reference[f]-i.floating[w]+x.mainAxis,E=i.reference[f]+i.reference[w]-x.mainAxis;v<b?v=b:v>E&&(v=E)}if(c){var h,p;const w=f==="y"?"width":"height",b=["top","left"].includes(Wt(o)),E=i.reference[d]-i.floating[w]+(b&&((h=l.offset)==null?void 0:h[d])||0)+(b?0:x.crossAxis),_=i.reference[d]+i.reference[w]+(b?0:((p=l.offset)==null?void 0:p[d])||0)-(b?x.crossAxis:0);y<E?y=E:y>_&&(y=_)}return{[f]:v,[d]:y}}}},Aw=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:l=()=>{},...a}=Ut(e,t),s=await Ao(t,a),c=Wt(n),u=Or(n),d=Lr(n)==="y",{width:f,height:v}=r.floating;let y,g;c==="top"||c==="bottom"?(y=c,g=u===(await(o.isRTL==null?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,y=u==="end"?"top":"bottom");const x=v-s[y],h=f-s[g],p=!t.middlewareData.shift;let w=x,b=h;if(d){const _=f-s.left-s.right;b=u||p?vn(h,_):_}else{const _=v-s.top-s.bottom;w=u||p?vn(x,_):_}if(p&&!u){const _=Je(s.left,0),S=Je(s.right,0),k=Je(s.top,0),M=Je(s.bottom,0);d?b=f-2*(_!==0||S!==0?_+S:Je(s.left,s.right)):w=v-2*(k!==0||M!==0?k+M:Je(s.top,s.bottom))}await l({...t,availableWidth:b,availableHeight:w});const E=await o.getDimensions(i.floating);return f!==E.width||v!==E.height?{reset:{rects:!0}}:{}}}};function wn(e){return Km(e)?(e.nodeName||"").toLowerCase():"#document"}function tt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Yt(e){var t;return(t=(Km(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Km(e){return e instanceof Node||e instanceof tt(e).Node}function Gt(e){return e instanceof Element||e instanceof tt(e).Element}function At(e){return e instanceof HTMLElement||e instanceof tt(e).HTMLElement}function Vd(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof tt(e).ShadowRoot}function Ho(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=pt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function $w(e){return["table","td","th"].includes(wn(e))}function Qc(e){const t=Xc(),n=pt(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Pw(e){let t=Nr(e);for(;At(t)&&!jl(t);){if(Qc(t))return t;t=Nr(t)}return null}function Xc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function jl(e){return["html","body","#document"].includes(wn(e))}function pt(e){return tt(e).getComputedStyle(e)}function Bl(e){return Gt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Nr(e){if(wn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Vd(e)&&e.host||Yt(e);return Vd(t)?t.host:t}function Ym(e){const t=Nr(e);return jl(t)?e.ownerDocument?e.ownerDocument.body:e.body:At(t)&&Ho(t)?t:Ym(t)}function fl(e,t){var n;t===void 0&&(t=[]);const r=Ym(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=tt(r);return o?t.concat(i,i.visualViewport||[],Ho(r)?r:[]):t.concat(r,fl(r))}function Qm(e){const t=pt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=At(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=cl(n)!==i||cl(r)!==l;return a&&(n=i,r=l),{width:n,height:r,$:a}}function Zc(e){return Gt(e)?e:e.contextElement}function br(e){const t=Zc(e);if(!At(t))return yn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Qm(t);let l=(i?cl(n.width):n.width)/r,a=(i?cl(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}const Mw=yn(0);function Xm(e){const t=tt(e);return!Xc()||!t.visualViewport?Mw:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Iw(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==tt(e)?!1:t}function Bn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Zc(e);let l=yn(1);t&&(r?Gt(r)&&(l=br(r)):l=br(e));const a=Iw(i,n,r)?Xm(i):yn(0);let s=(o.left+a.x)/l.x,c=(o.top+a.y)/l.y,u=o.width/l.x,d=o.height/l.y;if(i){const f=tt(i),v=r&&Gt(r)?tt(r):r;let y=f.frameElement;for(;y&&r&&v!==f;){const g=br(y),x=y.getBoundingClientRect(),h=pt(y),p=x.left+(y.clientLeft+parseFloat(h.paddingLeft))*g.x,w=x.top+(y.clientTop+parseFloat(h.paddingTop))*g.y;s*=g.x,c*=g.y,u*=g.x,d*=g.y,s+=p,c+=w,y=tt(y).frameElement}}return dl({width:u,height:d,x:s,y:c})}function Ow(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=At(n),i=Yt(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},a=yn(1);const s=yn(0);if((o||!o&&r!=="fixed")&&((wn(n)!=="body"||Ho(i))&&(l=Bl(n)),At(n))){const c=Bn(n);a=br(n),s.x=c.x+n.clientLeft,s.y=c.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-l.scrollLeft*a.x+s.x,y:t.y*a.y-l.scrollTop*a.y+s.y}}function Lw(e){return Array.from(e.getClientRects())}function Zm(e){return Bn(Yt(e)).left+Bl(e).scrollLeft}function Fw(e){const t=Yt(e),n=Bl(e),r=e.ownerDocument.body,o=Je(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Je(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let l=-n.scrollLeft+Zm(e);const a=-n.scrollTop;return pt(r).direction==="rtl"&&(l+=Je(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:a}}function zw(e,t){const n=tt(e),r=Yt(e),o=n.visualViewport;let i=r.clientWidth,l=r.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;const c=Xc();(!c||c&&t==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a,y:s}}function jw(e,t){const n=Bn(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=At(e)?br(e):yn(1),l=e.clientWidth*i.x,a=e.clientHeight*i.y,s=o*i.x,c=r*i.y;return{width:l,height:a,x:s,y:c}}function Ud(e,t,n){let r;if(t==="viewport")r=zw(e,n);else if(t==="document")r=Fw(Yt(e));else if(Gt(t))r=jw(t,n);else{const o=Xm(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return dl(r)}function Jm(e,t){const n=Nr(e);return n===t||!Gt(n)||jl(n)?!1:pt(n).position==="fixed"||Jm(n,t)}function Bw(e,t){const n=t.get(e);if(n)return n;let r=fl(e).filter(a=>Gt(a)&&wn(a)!=="body"),o=null;const i=pt(e).position==="fixed";let l=i?Nr(e):e;for(;Gt(l)&&!jl(l);){const a=pt(l),s=Qc(l);!s&&a.position==="fixed"&&(o=null),(i?!s&&!o:!s&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Ho(l)&&!s&&Jm(e,l))?r=r.filter(u=>u!==l):o=a,l=Nr(l)}return t.set(e,r),r}function Hw(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const l=[...n==="clippingAncestors"?Bw(t,this._c):[].concat(n),r],a=l[0],s=l.reduce((c,u)=>{const d=Ud(t,u,o);return c.top=Je(d.top,c.top),c.right=vn(d.right,c.right),c.bottom=vn(d.bottom,c.bottom),c.left=Je(d.left,c.left),c},Ud(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Vw(e){return Qm(e)}function Uw(e,t,n){const r=At(t),o=Yt(t),i=n==="fixed",l=Bn(e,!0,i,t);let a={scrollLeft:0,scrollTop:0};const s=yn(0);if(r||!r&&!i)if((wn(t)!=="body"||Ho(o))&&(a=Bl(t)),r){const c=Bn(t,!0,i,t);s.x=c.x+t.clientLeft,s.y=c.y+t.clientTop}else o&&(s.x=Zm(o));return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function Wd(e,t){return!At(e)||pt(e).position==="fixed"?null:t?t(e):e.offsetParent}function qm(e,t){const n=tt(e);if(!At(e))return n;let r=Wd(e,t);for(;r&&$w(r)&&pt(r).position==="static";)r=Wd(r,t);return r&&(wn(r)==="html"||wn(r)==="body"&&pt(r).position==="static"&&!Qc(r))?n:r||Pw(e)||n}const Ww=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||qm,i=this.getDimensions;return{reference:Uw(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}};function Gw(e){return pt(e).direction==="rtl"}const Kw={convertOffsetParentRelativeRectToViewportRelativeRect:Ow,getDocumentElement:Yt,getClippingRect:Hw,getOffsetParent:qm,getElementRects:Ww,getClientRects:Lw,getDimensions:Vw,getScale:br,isElement:Gt,isRTL:Gw};function Yw(e,t){let n=null,r;const o=Yt(e);function i(){clearTimeout(r),n&&n.disconnect(),n=null}function l(a,s){a===void 0&&(a=!1),s===void 0&&(s=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(a||t(),!d||!f)return;const v=ui(u),y=ui(o.clientWidth-(c+d)),g=ui(o.clientHeight-(u+f)),x=ui(c),p={rootMargin:-v+"px "+-y+"px "+-g+"px "+-x+"px",threshold:Je(0,vn(1,s))||1};let w=!0;function b(E){const _=E[0].intersectionRatio;if(_!==s){if(!w)return l();_?l(!1,_):r=setTimeout(()=>{l(!1,1e-7)},100)}w=!1}try{n=new IntersectionObserver(b,{...p,root:o.ownerDocument})}catch{n=new IntersectionObserver(b,p)}n.observe(e)}return l(!0),i}function Qw(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:s=!1}=r,c=Zc(e),u=o||i?[...c?fl(c):[],...fl(t)]:[];u.forEach(h=>{o&&h.addEventListener("scroll",n,{passive:!0}),i&&h.addEventListener("resize",n)});const d=c&&a?Yw(c,n):null;let f=-1,v=null;l&&(v=new ResizeObserver(h=>{let[p]=h;p&&p.target===c&&v&&(v.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{v&&v.observe(t)})),n()}),c&&!s&&v.observe(c),v.observe(t));let y,g=s?Bn(e):null;s&&x();function x(){const h=Bn(e);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,y=requestAnimationFrame(x)}return n(),()=>{u.forEach(h=>{o&&h.removeEventListener("scroll",n),i&&h.removeEventListener("resize",n)}),d&&d(),v&&v.disconnect(),v=null,s&&cancelAnimationFrame(y)}}const Xw=(e,t,n)=>{const r=new Map,o={platform:Kw,...n},i={...o.platform,_c:r};return Sw(e,t,{...o,platform:i})},Zw=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?jd({element:r.current,padding:o}).fn(n):{}:r?jd({element:r,padding:o}).fn(n):{}}}};var Ai=typeof document<"u"?m.useLayoutEffect:m.useEffect;function pl(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!pl(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!pl(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function eh(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Gd(e,t){const n=eh(e);return Math.round(t*n)/n}function Kd(e){const t=m.useRef(e);return Ai(()=>{t.current=e}),t}function Jw(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:l}={},transform:a=!0,whileElementsMounted:s,open:c}=e,[u,d]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,v]=m.useState(r);pl(f,r)||v(r);const[y,g]=m.useState(null),[x,h]=m.useState(null),p=m.useCallback(B=>{B!=_.current&&(_.current=B,g(B))},[g]),w=m.useCallback(B=>{B!==S.current&&(S.current=B,h(B))},[h]),b=i||y,E=l||x,_=m.useRef(null),S=m.useRef(null),k=m.useRef(u),M=Kd(s),I=Kd(o),z=m.useCallback(()=>{if(!_.current||!S.current)return;const B={placement:t,strategy:n,middleware:f};I.current&&(B.platform=I.current),Xw(_.current,S.current,B).then(T=>{const C={...T,isPositioned:!0};L.current&&!pl(k.current,C)&&(k.current=C,Un.flushSync(()=>{d(C)}))})},[f,t,n,I]);Ai(()=>{c===!1&&k.current.isPositioned&&(k.current.isPositioned=!1,d(B=>({...B,isPositioned:!1})))},[c]);const L=m.useRef(!1);Ai(()=>(L.current=!0,()=>{L.current=!1}),[]),Ai(()=>{if(b&&(_.current=b),E&&(S.current=E),b&&E){if(M.current)return M.current(b,E,z);z()}},[b,E,z,M]);const U=m.useMemo(()=>({reference:_,floating:S,setReference:p,setFloating:w}),[p,w]),K=m.useMemo(()=>({reference:b,floating:E}),[b,E]),V=m.useMemo(()=>{const B={position:n,left:0,top:0};if(!K.floating)return B;const T=Gd(K.floating,u.x),C=Gd(K.floating,u.y);return a?{...B,transform:"translate("+T+"px, "+C+"px)",...eh(K.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:T,top:C}},[n,a,K.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:z,refs:U,elements:K,floatingStyles:V}),[u,z,U,K,V])}function qw(e){const[t,n]=m.useState(void 0);return Ct(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,c=Array.isArray(s)?s[0]:s;l=c.inlineSize,a=c.blockSize}else l=e.offsetWidth,a=e.offsetHeight;n({width:l,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const th="Popper",[nh,rh]=Bo(th),[ex,oh]=nh(th),tx=e=>{const{__scopePopper:t,children:n}=e,[r,o]=m.useState(null);return m.createElement(ex,{scope:t,anchor:r,onAnchorChange:o},n)},nx="PopperAnchor",rx=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,i=oh(nx,n),l=m.useRef(null),a=ze(t,l);return m.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||l.current)}),r?null:m.createElement(xe.div,Z({},o,{ref:a}))}),ih="PopperContent",[ox,YE]=nh(ih),ix=m.forwardRef((e,t)=>{var n,r,o,i,l,a,s,c;const{__scopePopper:u,side:d="bottom",sideOffset:f=0,align:v="center",alignOffset:y=0,arrowPadding:g=0,collisionBoundary:x=[],collisionPadding:h=0,sticky:p="partial",hideWhenDetached:w=!1,avoidCollisions:b=!0,onPlaced:E,..._}=e,S=oh(ih,u),[k,M]=m.useState(null),I=ze(t,Ee=>M(Ee)),[z,L]=m.useState(null),U=qw(z),K=(n=U==null?void 0:U.width)!==null&&n!==void 0?n:0,V=(r=U==null?void 0:U.height)!==null&&r!==void 0?r:0,B=d+(v!=="center"?"-"+v:""),T=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},C=Array.isArray(x)?x:[x],D=C.length>0,A={padding:T,boundary:C.filter(lx),altBoundary:D},{refs:F,floatingStyles:W,placement:Q,isPositioned:pe,middlewareData:re}=Jw({strategy:"fixed",placement:B,whileElementsMounted:Qw,elements:{reference:S.anchor},middleware:[Rw({mainAxis:f+V,alignmentAxis:y}),b&&Dw({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?Nw():void 0,...A}),b&&_w({...A}),Aw({...A,apply:({elements:Ee,rects:Qt,availableWidth:Pe,availableHeight:Cn})=>{const{width:zr,height:G}=Qt.reference,Sn=Ee.floating.style;Sn.setProperty("--radix-popper-available-width",`${Pe}px`),Sn.setProperty("--radix-popper-available-height",`${Cn}px`),Sn.setProperty("--radix-popper-anchor-width",`${zr}px`),Sn.setProperty("--radix-popper-anchor-height",`${G}px`)}}),z&&Zw({element:z,padding:g}),ax({arrowWidth:K,arrowHeight:V}),w&&kw({strategy:"referenceHidden"})]}),[le,H]=lh(Q),ee=Nt(E);Ct(()=>{pe&&(ee==null||ee())},[pe,ee]);const ke=(o=re.arrow)===null||o===void 0?void 0:o.x,ae=(i=re.arrow)===null||i===void 0?void 0:i.y,te=((l=re.arrow)===null||l===void 0?void 0:l.centerOffset)!==0,[ne,je]=m.useState();return Ct(()=>{k&&je(window.getComputedStyle(k).zIndex)},[k]),m.createElement("div",{ref:F.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:pe?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(a=re.transformOrigin)===null||a===void 0?void 0:a.x,(s=re.transformOrigin)===null||s===void 0?void 0:s.y].join(" ")},dir:e.dir},m.createElement(ox,{scope:u,placedSide:le,onArrowChange:L,arrowX:ke,arrowY:ae,shouldHideArrow:te},m.createElement(xe.div,Z({"data-side":le,"data-align":H},_,{ref:I,style:{..._.style,animation:pe?void 0:"none",opacity:(c=re.hide)!==null&&c!==void 0&&c.referenceHidden?0:void 0}}))))});function lx(e){return e!==null}const ax=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;const{placement:a,rects:s,middlewareData:c}=t,d=((n=c.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,f=d?0:e.arrowWidth,v=d?0:e.arrowHeight,[y,g]=lh(a),x={start:"0%",center:"50%",end:"100%"}[g],h=((r=(o=c.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+f/2,p=((i=(l=c.arrow)===null||l===void 0?void 0:l.y)!==null&&i!==void 0?i:0)+v/2;let w="",b="";return y==="bottom"?(w=d?x:`${h}px`,b=`${-v}px`):y==="top"?(w=d?x:`${h}px`,b=`${s.floating.height+v}px`):y==="right"?(w=`${-v}px`,b=d?x:`${p}px`):y==="left"&&(w=`${s.floating.width+v}px`,b=d?x:`${p}px`),{data:{x:w,y:b}}}});function lh(e){const[t,n="center"]=e.split("-");return[t,n]}const sx=tx,cx=rx,ux=ix,dx=m.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?Ly.createPortal(m.createElement(xe.div,Z({},o,{ref:t})),r):null});function ml({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=fx({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=Nt(n),s=m.useCallback(c=>{if(i){const d=typeof c=="function"?c(e):c;d!==e&&a(d)}else o(c)},[i,e,o,a]);return[l,s]}function fx({defaultProp:e,onChange:t}){const n=m.useState(e),[r]=n,o=m.useRef(r),i=Nt(t);return m.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}function px(e){const t=m.useRef({value:e,previous:e});return m.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const ah=m.forwardRef((e,t)=>m.createElement(xe.span,Z({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),QE=ah;var mx=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Xn=new WeakMap,di=new WeakMap,fi={},ka=0,sh=function(e){return e&&(e.host||sh(e.parentNode))},hx=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=sh(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},gx=function(e,t,n,r){var o=hx(t,Array.isArray(e)?e:[e]);fi[n]||(fi[n]=new WeakMap);var i=fi[n],l=[],a=new Set,s=new Set(o),c=function(d){!d||a.has(d)||(a.add(d),c(d.parentNode))};o.forEach(c);var u=function(d){!d||s.has(d)||Array.prototype.forEach.call(d.children,function(f){if(a.has(f))u(f);else{var v=f.getAttribute(r),y=v!==null&&v!=="false",g=(Xn.get(f)||0)+1,x=(i.get(f)||0)+1;Xn.set(f,g),i.set(f,x),l.push(f),g===1&&y&&di.set(f,!0),x===1&&f.setAttribute(n,"true"),y||f.setAttribute(r,"true")}})};return u(t),a.clear(),ka++,function(){l.forEach(function(d){var f=Xn.get(d)-1,v=i.get(d)-1;Xn.set(d,f),i.set(d,v),f||(di.has(d)||d.removeAttribute(r),di.delete(d)),v||d.removeAttribute(n)}),ka--,ka||(Xn=new WeakMap,Xn=new WeakMap,di=new WeakMap,fi={})}},vx=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||mx(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),gx(r,o,n,"aria-hidden")):function(){return null}},st=function(){return st=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},st.apply(this,arguments)};function ch(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function yx(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var $i="right-scroll-bar-position",Pi="width-before-scroll-bar",wx="with-scroll-bars-hidden",xx="--removed-body-scroll-bar-size";function bx(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Ex(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function Cx(e,t){return Ex(t||null,function(n){return e.forEach(function(r){return bx(r,n)})})}function Sx(e){return e}function _x(e,t){t===void 0&&(t=Sx);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var l=t(i,r);return n.push(l),function(){n=n.filter(function(a){return a!==l})}},assignSyncMedium:function(i){for(r=!0;n.length;){var l=n;n=[],l.forEach(i)}n={push:function(a){return i(a)},filter:function(){return n}}},assignMedium:function(i){r=!0;var l=[];if(n.length){var a=n;n=[],a.forEach(i),l=n}var s=function(){var u=l;l=[],u.forEach(i)},c=function(){return Promise.resolve().then(s)};c(),n={push:function(u){l.push(u),c()},filter:function(u){return l=l.filter(u),n}}}};return o}function kx(e){e===void 0&&(e={});var t=_x(null);return t.options=st({async:!0,ssr:!1},e),t}var uh=function(e){var t=e.sideCar,n=ch(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,st({},n))};uh.isSideCarExport=!0;function Tx(e,t){return e.useMedium(t),uh}var dh=kx(),Ta=function(){},Hl=m.forwardRef(function(e,t){var n=m.useRef(null),r=m.useState({onScrollCapture:Ta,onWheelCapture:Ta,onTouchMoveCapture:Ta}),o=r[0],i=r[1],l=e.forwardProps,a=e.children,s=e.className,c=e.removeScrollBar,u=e.enabled,d=e.shards,f=e.sideCar,v=e.noIsolation,y=e.inert,g=e.allowPinchZoom,x=e.as,h=x===void 0?"div":x,p=ch(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),w=f,b=Cx([n,t]),E=st(st({},p),o);return m.createElement(m.Fragment,null,u&&m.createElement(w,{sideCar:dh,removeScrollBar:c,shards:d,noIsolation:v,inert:y,setCallbacks:i,allowPinchZoom:!!g,lockRef:n}),l?m.cloneElement(m.Children.only(a),st(st({},E),{ref:b})):m.createElement(h,st({},E,{className:s,ref:b}),a))});Hl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Hl.classNames={fullWidth:Pi,zeroRight:$i};var Yd,Rx=function(){if(Yd)return Yd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Dx(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Rx();return t&&e.setAttribute("nonce",t),e}function Nx(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Ax(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var $x=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Dx())&&(Nx(t,n),Ax(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Px=function(){var e=$x();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},fh=function(){var e=Px(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Mx={left:0,top:0,right:0,gap:0},Ra=function(e){return parseInt(e||"",10)||0},Ix=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Ra(n),Ra(r),Ra(o)]},Ox=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Mx;var t=Ix(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Lx=fh(),Fx=function(e,t,n,r){var o=e.left,i=e.top,l=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(wx,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat($i,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Pi,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat($i," .").concat($i,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Pi," .").concat(Pi,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(xx,": ").concat(a,`px;
  }
`)},zx=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,i=m.useMemo(function(){return Ox(o)},[o]);return m.createElement(Lx,{styles:Fx(i,!t,o,n?"":"!important")})},zs=!1;if(typeof window<"u")try{var pi=Object.defineProperty({},"passive",{get:function(){return zs=!0,!0}});window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{zs=!1}var Zn=zs?{passive:!1}:!1,jx=function(e){return e.tagName==="TEXTAREA"},ph=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!jx(e)&&n[t]==="visible")},Bx=function(e){return ph(e,"overflowY")},Hx=function(e){return ph(e,"overflowX")},Qd=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=mh(e,n);if(r){var o=hh(e,n),i=o[1],l=o[2];if(i>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Vx=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Ux=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},mh=function(e,t){return e==="v"?Bx(t):Hx(t)},hh=function(e,t){return e==="v"?Vx(t):Ux(t)},Wx=function(e,t){return e==="h"&&t==="rtl"?-1:1},Gx=function(e,t,n,r,o){var i=Wx(e,window.getComputedStyle(t).direction),l=i*r,a=n.target,s=t.contains(a),c=!1,u=l>0,d=0,f=0;do{var v=hh(e,a),y=v[0],g=v[1],x=v[2],h=g-x-i*y;(y||h)&&mh(e,a)&&(d+=h,f+=y),a=a.parentNode}while(!s&&a!==document.body||s&&(t.contains(a)||t===a));return(u&&(o&&d===0||!o&&l>d)||!u&&(o&&f===0||!o&&-l>f))&&(c=!0),c},mi=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Xd=function(e){return[e.deltaX,e.deltaY]},Zd=function(e){return e&&"current"in e?e.current:e},Kx=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Yx=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Qx=0,Jn=[];function Xx(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),o=m.useState(Qx++)[0],i=m.useState(function(){return fh()})[0],l=m.useRef(e);m.useEffect(function(){l.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var g=yx([e.lockRef.current],(e.shards||[]).map(Zd),!0).filter(Boolean);return g.forEach(function(x){return x.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),g.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=m.useCallback(function(g,x){if("touches"in g&&g.touches.length===2)return!l.current.allowPinchZoom;var h=mi(g),p=n.current,w="deltaX"in g?g.deltaX:p[0]-h[0],b="deltaY"in g?g.deltaY:p[1]-h[1],E,_=g.target,S=Math.abs(w)>Math.abs(b)?"h":"v";if("touches"in g&&S==="h"&&_.type==="range")return!1;var k=Qd(S,_);if(!k)return!0;if(k?E=S:(E=S==="v"?"h":"v",k=Qd(S,_)),!k)return!1;if(!r.current&&"changedTouches"in g&&(w||b)&&(r.current=E),!E)return!0;var M=r.current||E;return Gx(M,x,g,M==="h"?w:b,!0)},[]),s=m.useCallback(function(g){var x=g;if(!(!Jn.length||Jn[Jn.length-1]!==i)){var h="deltaY"in x?Xd(x):mi(x),p=t.current.filter(function(E){return E.name===x.type&&E.target===x.target&&Kx(E.delta,h)})[0];if(p&&p.should){x.cancelable&&x.preventDefault();return}if(!p){var w=(l.current.shards||[]).map(Zd).filter(Boolean).filter(function(E){return E.contains(x.target)}),b=w.length>0?a(x,w[0]):!l.current.noIsolation;b&&x.cancelable&&x.preventDefault()}}},[]),c=m.useCallback(function(g,x,h,p){var w={name:g,delta:x,target:h,should:p};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(b){return b!==w})},1)},[]),u=m.useCallback(function(g){n.current=mi(g),r.current=void 0},[]),d=m.useCallback(function(g){c(g.type,Xd(g),g.target,a(g,e.lockRef.current))},[]),f=m.useCallback(function(g){c(g.type,mi(g),g.target,a(g,e.lockRef.current))},[]);m.useEffect(function(){return Jn.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",s,Zn),document.addEventListener("touchmove",s,Zn),document.addEventListener("touchstart",u,Zn),function(){Jn=Jn.filter(function(g){return g!==i}),document.removeEventListener("wheel",s,Zn),document.removeEventListener("touchmove",s,Zn),document.removeEventListener("touchstart",u,Zn)}},[]);var v=e.removeScrollBar,y=e.inert;return m.createElement(m.Fragment,null,y?m.createElement(i,{styles:Yx(o)}):null,v?m.createElement(zx,{gapMode:"margin"}):null)}const Zx=Tx(dh,Xx);var gh=m.forwardRef(function(e,t){return m.createElement(Hl,st({},e,{ref:t,sideCar:Zx}))});gh.classNames=Hl.classNames;const Jx=gh,qx=[" ","Enter","ArrowUp","ArrowDown"],e1=[" ","Enter"],Vl="Select",[Ul,Jc,t1]=Vm(Vl),[Fr,XE]=Bo(Vl,[t1,rh]),qc=rh(),[n1,Kn]=Fr(Vl),[r1,o1]=Fr(Vl),i1=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:o,onOpenChange:i,value:l,defaultValue:a,onValueChange:s,dir:c,name:u,autoComplete:d,disabled:f,required:v}=e,y=qc(t),[g,x]=m.useState(null),[h,p]=m.useState(null),[w,b]=m.useState(!1),E=Wc(c),[_=!1,S]=ml({prop:r,defaultProp:o,onChange:i}),[k,M]=ml({prop:l,defaultProp:a,onChange:s}),I=m.useRef(null),z=g?!!g.closest("form"):!0,[L,U]=m.useState(new Set),K=Array.from(L).map(V=>V.props.value).join(";");return m.createElement(sx,y,m.createElement(n1,{required:v,scope:t,trigger:g,onTriggerChange:x,valueNode:h,onValueNodeChange:p,valueNodeHasChildren:w,onValueNodeHasChildrenChange:b,contentId:zl(),value:k,onValueChange:M,open:_,onOpenChange:S,dir:E,triggerPointerDownPosRef:I,disabled:f},m.createElement(Ul.Provider,{scope:t},m.createElement(r1,{scope:e.__scopeSelect,onNativeOptionAdd:m.useCallback(V=>{U(B=>new Set(B).add(V))},[]),onNativeOptionRemove:m.useCallback(V=>{U(B=>{const T=new Set(B);return T.delete(V),T})},[])},n)),z?m.createElement(wh,{key:K,"aria-hidden":!0,required:v,tabIndex:-1,name:u,autoComplete:d,value:k,onChange:V=>M(V.target.value),disabled:f},k===void 0?m.createElement("option",{value:""}):null,Array.from(L)):null))},l1="SelectTrigger",a1=m.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...o}=e,i=qc(n),l=Kn(l1,n),a=l.disabled||r,s=ze(t,l.onTriggerChange),c=Jc(n),[u,d,f]=xh(y=>{const g=c().filter(p=>!p.disabled),x=g.find(p=>p.value===l.value),h=bh(g,y,x);h!==void 0&&l.onValueChange(h.value)}),v=()=>{a||(l.onOpenChange(!0),f())};return m.createElement(cx,Z({asChild:!0},i),m.createElement(xe.button,Z({type:"button",role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":l.value===void 0?"":void 0},o,{ref:s,onClick:he(o.onClick,y=>{y.currentTarget.focus()}),onPointerDown:he(o.onPointerDown,y=>{const g=y.target;g.hasPointerCapture(y.pointerId)&&g.releasePointerCapture(y.pointerId),y.button===0&&y.ctrlKey===!1&&(v(),l.triggerPointerDownPosRef.current={x:Math.round(y.pageX),y:Math.round(y.pageY)},y.preventDefault())}),onKeyDown:he(o.onKeyDown,y=>{const g=u.current!=="";!(y.ctrlKey||y.altKey||y.metaKey)&&y.key.length===1&&d(y.key),!(g&&y.key===" ")&&qx.includes(y.key)&&(v(),y.preventDefault())})})))}),s1="SelectValue",c1=m.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,children:i,placeholder:l,...a}=e,s=Kn(s1,n),{onValueNodeHasChildrenChange:c}=s,u=i!==void 0,d=ze(t,s.onValueNodeChange);return Ct(()=>{c(u)},[c,u]),m.createElement(xe.span,Z({},a,{ref:d,style:{pointerEvents:"none"}}),s.value===void 0&&l!==void 0?l:i)}),u1=m.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...o}=e;return m.createElement(xe.span,Z({"aria-hidden":!0},o,{ref:t}),r||"▼")}),d1=e=>m.createElement(dx,Z({asChild:!0},e)),Ar="SelectContent",f1=m.forwardRef((e,t)=>{const n=Kn(Ar,e.__scopeSelect),[r,o]=m.useState();if(Ct(()=>{o(new DocumentFragment)},[]),!n.open){const i=r;return i?Un.createPortal(m.createElement(vh,{scope:e.__scopeSelect},m.createElement(Ul.Slot,{scope:e.__scopeSelect},m.createElement("div",null,e.children))),i):null}return m.createElement(p1,Z({},e,{ref:t}))}),Mt=10,[vh,Wl]=Fr(Ar),p1=m.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:l,side:a,sideOffset:s,align:c,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:v,sticky:y,hideWhenDetached:g,avoidCollisions:x,...h}=e,p=Kn(Ar,n),[w,b]=m.useState(null),[E,_]=m.useState(null),S=ze(t,H=>b(H)),[k,M]=m.useState(null),[I,z]=m.useState(null),L=Jc(n),[U,K]=m.useState(!1),V=m.useRef(!1);m.useEffect(()=>{if(w)return vx(w)},[w]),lw();const B=m.useCallback(H=>{const[ee,...ke]=L().map(ne=>ne.ref.current),[ae]=ke.slice(-1),te=document.activeElement;for(const ne of H)if(ne===te||(ne==null||ne.scrollIntoView({block:"nearest"}),ne===ee&&E&&(E.scrollTop=0),ne===ae&&E&&(E.scrollTop=E.scrollHeight),ne==null||ne.focus(),document.activeElement!==te))return},[L,E]),T=m.useCallback(()=>B([k,w]),[B,k,w]);m.useEffect(()=>{U&&T()},[U,T]);const{onOpenChange:C,triggerPointerDownPosRef:D}=p;m.useEffect(()=>{if(w){let H={x:0,y:0};const ee=ae=>{var te,ne,je,Ee;H={x:Math.abs(Math.round(ae.pageX)-((te=(ne=D.current)===null||ne===void 0?void 0:ne.x)!==null&&te!==void 0?te:0)),y:Math.abs(Math.round(ae.pageY)-((je=(Ee=D.current)===null||Ee===void 0?void 0:Ee.y)!==null&&je!==void 0?je:0))}},ke=ae=>{H.x<=10&&H.y<=10?ae.preventDefault():w.contains(ae.target)||C(!1),document.removeEventListener("pointermove",ee),D.current=null};return D.current!==null&&(document.addEventListener("pointermove",ee),document.addEventListener("pointerup",ke,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ee),document.removeEventListener("pointerup",ke,{capture:!0})}}},[w,C,D]),m.useEffect(()=>{const H=()=>C(!1);return window.addEventListener("blur",H),window.addEventListener("resize",H),()=>{window.removeEventListener("blur",H),window.removeEventListener("resize",H)}},[C]);const[A,F]=xh(H=>{const ee=L().filter(te=>!te.disabled),ke=ee.find(te=>te.ref.current===document.activeElement),ae=bh(ee,H,ke);ae&&setTimeout(()=>ae.ref.current.focus())}),W=m.useCallback((H,ee,ke)=>{const ae=!V.current&&!ke;(p.value!==void 0&&p.value===ee||ae)&&(M(H),ae&&(V.current=!0))},[p.value]),Q=m.useCallback(()=>w==null?void 0:w.focus(),[w]),pe=m.useCallback((H,ee,ke)=>{const ae=!V.current&&!ke;(p.value!==void 0&&p.value===ee||ae)&&z(H)},[p.value]),re=r==="popper"?Jd:m1,le=re===Jd?{side:a,sideOffset:s,align:c,alignOffset:u,arrowPadding:d,collisionBoundary:f,collisionPadding:v,sticky:y,hideWhenDetached:g,avoidCollisions:x}:{};return m.createElement(vh,{scope:n,content:w,viewport:E,onViewportChange:_,itemRefCallback:W,selectedItem:k,onItemLeave:Q,itemTextRefCallback:pe,focusSelectedItem:T,selectedItemText:I,position:r,isPositioned:U,searchRef:A},m.createElement(Jx,{as:Dr,allowPinchZoom:!0},m.createElement(aw,{asChild:!0,trapped:p.open,onMountAutoFocus:H=>{H.preventDefault()},onUnmountAutoFocus:he(o,H=>{var ee;(ee=p.trigger)===null||ee===void 0||ee.focus({preventScroll:!0}),H.preventDefault()})},m.createElement(rw,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:H=>H.preventDefault(),onDismiss:()=>p.onOpenChange(!1)},m.createElement(re,Z({role:"listbox",id:p.contentId,"data-state":p.open?"open":"closed",dir:p.dir,onContextMenu:H=>H.preventDefault()},h,le,{onPlaced:()=>K(!0),ref:S,style:{display:"flex",flexDirection:"column",outline:"none",...h.style},onKeyDown:he(h.onKeyDown,H=>{const ee=H.ctrlKey||H.altKey||H.metaKey;if(H.key==="Tab"&&H.preventDefault(),!ee&&H.key.length===1&&F(H.key),["ArrowUp","ArrowDown","Home","End"].includes(H.key)){let ae=L().filter(te=>!te.disabled).map(te=>te.ref.current);if(["ArrowUp","End"].includes(H.key)&&(ae=ae.slice().reverse()),["ArrowUp","ArrowDown"].includes(H.key)){const te=H.target,ne=ae.indexOf(te);ae=ae.slice(ne+1)}setTimeout(()=>B(ae)),H.preventDefault()}})}))))))}),m1=m.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...o}=e,i=Kn(Ar,n),l=Wl(Ar,n),[a,s]=m.useState(null),[c,u]=m.useState(null),d=ze(t,S=>u(S)),f=Jc(n),v=m.useRef(!1),y=m.useRef(!0),{viewport:g,selectedItem:x,selectedItemText:h,focusSelectedItem:p}=l,w=m.useCallback(()=>{if(i.trigger&&i.valueNode&&a&&c&&g&&x&&h){const S=i.trigger.getBoundingClientRect(),k=c.getBoundingClientRect(),M=i.valueNode.getBoundingClientRect(),I=h.getBoundingClientRect();if(i.dir!=="rtl"){const te=I.left-k.left,ne=M.left-te,je=S.left-ne,Ee=S.width+je,Qt=Math.max(Ee,k.width),Pe=window.innerWidth-Mt,Cn=Ad(ne,[Mt,Pe-Qt]);a.style.minWidth=Ee+"px",a.style.left=Cn+"px"}else{const te=k.right-I.right,ne=window.innerWidth-M.right-te,je=window.innerWidth-S.right-ne,Ee=S.width+je,Qt=Math.max(Ee,k.width),Pe=window.innerWidth-Mt,Cn=Ad(ne,[Mt,Pe-Qt]);a.style.minWidth=Ee+"px",a.style.right=Cn+"px"}const z=f(),L=window.innerHeight-Mt*2,U=g.scrollHeight,K=window.getComputedStyle(c),V=parseInt(K.borderTopWidth,10),B=parseInt(K.paddingTop,10),T=parseInt(K.borderBottomWidth,10),C=parseInt(K.paddingBottom,10),D=V+B+U+C+T,A=Math.min(x.offsetHeight*5,D),F=window.getComputedStyle(g),W=parseInt(F.paddingTop,10),Q=parseInt(F.paddingBottom,10),pe=S.top+S.height/2-Mt,re=L-pe,le=x.offsetHeight/2,H=x.offsetTop+le,ee=V+B+H,ke=D-ee;if(ee<=pe){const te=x===z[z.length-1].ref.current;a.style.bottom="0px";const ne=c.clientHeight-g.offsetTop-g.offsetHeight,je=Math.max(re,le+(te?Q:0)+ne+T),Ee=ee+je;a.style.height=Ee+"px"}else{const te=x===z[0].ref.current;a.style.top="0px";const je=Math.max(pe,V+g.offsetTop+(te?W:0)+le)+ke;a.style.height=je+"px",g.scrollTop=ee-pe+g.offsetTop}a.style.margin=`${Mt}px 0`,a.style.minHeight=A+"px",a.style.maxHeight=L+"px",r==null||r(),requestAnimationFrame(()=>v.current=!0)}},[f,i.trigger,i.valueNode,a,c,g,x,h,i.dir,r]);Ct(()=>w(),[w]);const[b,E]=m.useState();Ct(()=>{c&&E(window.getComputedStyle(c).zIndex)},[c]);const _=m.useCallback(S=>{S&&y.current===!0&&(w(),p==null||p(),y.current=!1)},[w,p]);return m.createElement(h1,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:v,onScrollButtonChange:_},m.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:b}},m.createElement(xe.div,Z({},o,{ref:d,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}}))))}),Jd=m.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:o=Mt,...i}=e,l=qc(n);return m.createElement(ux,Z({},l,i,{ref:t,align:r,collisionPadding:o,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[h1,g1]=Fr(Ar,{}),qd="SelectViewport",v1=m.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=Wl(qd,n),i=g1(qd,n),l=ze(t,o.onViewportChange),a=m.useRef(0);return m.createElement(m.Fragment,null,m.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),m.createElement(Ul.Slot,{scope:n},m.createElement(xe.div,Z({"data-radix-select-viewport":"",role:"presentation"},r,{ref:l,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:he(r.onScroll,s=>{const c=s.currentTarget,{contentWrapper:u,shouldExpandOnScrollRef:d}=i;if(d!=null&&d.current&&u){const f=Math.abs(a.current-c.scrollTop);if(f>0){const v=window.innerHeight-Mt*2,y=parseFloat(u.style.minHeight),g=parseFloat(u.style.height),x=Math.max(y,g);if(x<v){const h=x+f,p=Math.min(v,h),w=h-p;u.style.height=p+"px",u.style.bottom==="0px"&&(c.scrollTop=w>0?w:0,u.style.justifyContent="flex-end")}}}a.current=c.scrollTop})}))))}),y1="SelectGroup",[ZE,w1]=Fr(y1),x1="SelectLabel",b1=m.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=w1(x1,n);return m.createElement(xe.div,Z({id:o.id},r,{ref:t}))}),js="SelectItem",[E1,yh]=Fr(js),C1=m.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:o=!1,textValue:i,...l}=e,a=Kn(js,n),s=Wl(js,n),c=a.value===r,[u,d]=m.useState(i??""),[f,v]=m.useState(!1),y=ze(t,h=>{var p;return(p=s.itemRefCallback)===null||p===void 0?void 0:p.call(s,h,r,o)}),g=zl(),x=()=>{o||(a.onValueChange(r),a.onOpenChange(!1))};return m.createElement(E1,{scope:n,value:r,disabled:o,textId:g,isSelected:c,onItemTextChange:m.useCallback(h=>{d(p=>{var w;return p||((w=h==null?void 0:h.textContent)!==null&&w!==void 0?w:"").trim()})},[])},m.createElement(Ul.ItemSlot,{scope:n,value:r,disabled:o,textValue:u},m.createElement(xe.div,Z({role:"option","aria-labelledby":g,"data-highlighted":f?"":void 0,"aria-selected":c&&f,"data-state":c?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1},l,{ref:y,onFocus:he(l.onFocus,()=>v(!0)),onBlur:he(l.onBlur,()=>v(!1)),onPointerUp:he(l.onPointerUp,x),onPointerMove:he(l.onPointerMove,h=>{if(o){var p;(p=s.onItemLeave)===null||p===void 0||p.call(s)}else h.currentTarget.focus({preventScroll:!0})}),onPointerLeave:he(l.onPointerLeave,h=>{if(h.currentTarget===document.activeElement){var p;(p=s.onItemLeave)===null||p===void 0||p.call(s)}}),onKeyDown:he(l.onKeyDown,h=>{var p;((p=s.searchRef)===null||p===void 0?void 0:p.current)!==""&&h.key===" "||(e1.includes(h.key)&&x(),h.key===" "&&h.preventDefault())})}))))}),hi="SelectItemText",S1=m.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,...i}=e,l=Kn(hi,n),a=Wl(hi,n),s=yh(hi,n),c=o1(hi,n),[u,d]=m.useState(null),f=ze(t,h=>d(h),s.onItemTextChange,h=>{var p;return(p=a.itemTextRefCallback)===null||p===void 0?void 0:p.call(a,h,s.value,s.disabled)}),v=u==null?void 0:u.textContent,y=m.useMemo(()=>m.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},v),[s.disabled,s.value,v]),{onNativeOptionAdd:g,onNativeOptionRemove:x}=c;return Ct(()=>(g(y),()=>x(y)),[g,x,y]),m.createElement(m.Fragment,null,m.createElement(xe.span,Z({id:s.textId},i,{ref:f})),s.isSelected&&l.valueNode&&!l.valueNodeHasChildren?Un.createPortal(i.children,l.valueNode):null)}),_1="SelectItemIndicator",k1=m.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return yh(_1,n).isSelected?m.createElement(xe.span,Z({"aria-hidden":!0},r,{ref:t})):null}),T1=m.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return m.createElement(xe.div,Z({"aria-hidden":!0},r,{ref:t}))}),wh=m.forwardRef((e,t)=>{const{value:n,...r}=e,o=m.useRef(null),i=ze(t,o),l=px(n);return m.useEffect(()=>{const a=o.current,s=window.HTMLSelectElement.prototype,u=Object.getOwnPropertyDescriptor(s,"value").set;if(l!==n&&u){const d=new Event("change",{bubbles:!0});u.call(a,n),a.dispatchEvent(d)}},[l,n]),m.createElement(ah,{asChild:!0},m.createElement("select",Z({},r,{ref:i,defaultValue:n})))});wh.displayName="BubbleSelect";function xh(e){const t=Nt(e),n=m.useRef(""),r=m.useRef(0),o=m.useCallback(l=>{const a=n.current+l;t(a),function s(c){n.current=c,window.clearTimeout(r.current),c!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(a)},[t]),i=m.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return m.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,o,i]}function bh(e,t,n){const o=t.length>1&&Array.from(t).every(c=>c===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let l=R1(e,Math.max(i,0));o.length===1&&(l=l.filter(c=>c!==n));const s=l.find(c=>c.textValue.toLowerCase().startsWith(o.toLowerCase()));return s!==n?s:void 0}function R1(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const D1=i1,Eh=a1,N1=c1,A1=u1,$1=d1,Ch=f1,P1=v1,Sh=b1,_h=C1,M1=S1,I1=k1,kh=T1;var O1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const L1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),F1=(e,t)=>{const n=m.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,children:a,...s},c)=>m.createElement("svg",{ref:c,...O1,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:`lucide lucide-${L1(e)}`,...s},[...t.map(([u,d])=>m.createElement(u,d)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var Vo=F1;const z1=Vo("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),Th=Vo("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),j1=Vo("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),B1=Vo("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),H1=Vo("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);var Rh=D1,Dh=N1,eu=m.forwardRef(({className:e,children:t,...n},r)=>m.createElement(Eh,{ref:r,className:Ve("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...n},t,m.createElement(A1,{asChild:!0},m.createElement(j1,{className:"h-4 w-4 opacity-50"}))));eu.displayName=Eh.displayName;var tu=m.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>m.createElement($1,null,m.createElement(Ch,{ref:o,className:Ve("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r},m.createElement(P1,{className:Ve("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")},t))));tu.displayName=Ch.displayName;var V1=m.forwardRef(({className:e,...t},n)=>m.createElement(Sh,{ref:n,className:Ve("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));V1.displayName=Sh.displayName;var po=m.forwardRef(({className:e,children:t,...n},r)=>m.createElement(_h,{ref:r,className:Ve("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n},m.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},m.createElement(I1,null,m.createElement(Th,{className:"h-4 w-4"}))),m.createElement(M1,null,t)));po.displayName=_h.displayName;var U1=m.forwardRef(({className:e,...t},n)=>m.createElement(kh,{ref:n,className:Ve("-mx-1 my-1 h-px bg-muted",e),...t}));U1.displayName=kh.displayName;function Nh(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(t=>{const n=e[t],r=typeof n;(r==="object"||r==="function")&&!Object.isFrozen(n)&&Nh(n)}),e}class ef{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ah(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function ln(e,...t){const n=Object.create(null);for(const r in e)n[r]=e[r];return t.forEach(function(r){for(const o in r)n[o]=r[o]}),n}const W1="</span>",tf=e=>!!e.scope,G1=(e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((r,o)=>`${r}${"_".repeat(o+1)}`)].join(" ")}return`${t}${e}`};class K1{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Ah(t)}openNode(t){if(!tf(t))return;const n=G1(t.scope,{prefix:this.classPrefix});this.span(n)}closeNode(t){tf(t)&&(this.buffer+=W1)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const nf=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class nu{constructor(){this.rootNode=nf(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=nf({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(r=>this._walk(t,r)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{nu._collapse(n)}))}}class Y1 extends nu{constructor(t){super(),this.options=t}addText(t){t!==""&&this.add(t)}startScope(t){this.openNode(t)}endScope(){this.closeNode()}__addSublanguage(t,n){const r=t.root;n&&(r.scope=`language:${n}`),this.add(r)}toHTML(){return new K1(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function $o(e){return e?typeof e=="string"?e:e.source:null}function $h(e){return Yn("(?=",e,")")}function Q1(e){return Yn("(?:",e,")*")}function X1(e){return Yn("(?:",e,")?")}function Yn(...e){return e.map(n=>$o(n)).join("")}function Z1(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function ru(...e){return"("+(Z1(e).capture?"":"?:")+e.map(r=>$o(r)).join("|")+")"}function Ph(e){return new RegExp(e.toString()+"|").exec("").length-1}function J1(e,t){const n=e&&e.exec(t);return n&&n.index===0}const q1=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ou(e,{joinWith:t}){let n=0;return e.map(r=>{n+=1;const o=n;let i=$o(r),l="";for(;i.length>0;){const a=q1.exec(i);if(!a){l+=i;break}l+=i.substring(0,a.index),i=i.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?l+="\\"+String(Number(a[1])+o):(l+=a[0],a[0]==="("&&n++)}return l}).map(r=>`(${r})`).join(t)}const eb=/\b\B/,Mh="[a-zA-Z]\\w*",iu="[a-zA-Z_]\\w*",Ih="\\b\\d+(\\.\\d+)?",Oh="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Lh="\\b(0b[01]+)",tb="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",nb=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Yn(t,/.*\b/,e.binary,/\b.*/)),ln({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,r)=>{n.index!==0&&r.ignoreMatch()}},e)},Po={begin:"\\\\[\\s\\S]",relevance:0},rb={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Po]},ob={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Po]},ib={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Gl=function(e,t,n={}){const r=ln({scope:"comment",begin:e,end:t,contains:[]},n);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=ru("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:Yn(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},lb=Gl("//","$"),ab=Gl("/\\*","\\*/"),sb=Gl("#","$"),cb={scope:"number",begin:Ih,relevance:0},ub={scope:"number",begin:Oh,relevance:0},db={scope:"number",begin:Lh,relevance:0},fb={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Po,{begin:/\[/,end:/\]/,relevance:0,contains:[Po]}]}]},pb={scope:"title",begin:Mh,relevance:0},mb={scope:"title",begin:iu,relevance:0},hb={begin:"\\.\\s*"+iu,relevance:0},gb=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var gi=Object.freeze({__proto__:null,MATCH_NOTHING_RE:eb,IDENT_RE:Mh,UNDERSCORE_IDENT_RE:iu,NUMBER_RE:Ih,C_NUMBER_RE:Oh,BINARY_NUMBER_RE:Lh,RE_STARTERS_RE:tb,SHEBANG:nb,BACKSLASH_ESCAPE:Po,APOS_STRING_MODE:rb,QUOTE_STRING_MODE:ob,PHRASAL_WORDS_MODE:ib,COMMENT:Gl,C_LINE_COMMENT_MODE:lb,C_BLOCK_COMMENT_MODE:ab,HASH_COMMENT_MODE:sb,NUMBER_MODE:cb,C_NUMBER_MODE:ub,BINARY_NUMBER_MODE:db,REGEXP_MODE:fb,TITLE_MODE:pb,UNDERSCORE_TITLE_MODE:mb,METHOD_GUARD:hb,END_SAME_AS_BEGIN:gb});function vb(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function yb(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function wb(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=vb,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function xb(e,t){Array.isArray(e.illegal)&&(e.illegal=ru(...e.illegal))}function bb(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Eb(e,t){e.relevance===void 0&&(e.relevance=1)}const Cb=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=n.keywords,e.begin=Yn(n.beforeMatch,$h(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Sb=["of","and","for","in","not","or","if","then","parent","list","value"],_b="keyword";function Fh(e,t,n=_b){const r=Object.create(null);return typeof e=="string"?o(n,e.split(" ")):Array.isArray(e)?o(n,e):Object.keys(e).forEach(function(i){Object.assign(r,Fh(e[i],t,i))}),r;function o(i,l){t&&(l=l.map(a=>a.toLowerCase())),l.forEach(function(a){const s=a.split("|");r[s[0]]=[i,kb(s[0],s[1])]})}}function kb(e,t){return t?Number(t):Tb(e)?0:1}function Tb(e){return Sb.includes(e.toLowerCase())}const rf={},In=e=>{console.error(e)},of=(e,...t)=>{console.log(`WARN: ${e}`,...t)},qn=(e,t)=>{rf[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),rf[`${e}/${t}`]=!0)},hl=new Error;function zh(e,t,{key:n}){let r=0;const o=e[n],i={},l={};for(let a=1;a<=t.length;a++)l[a+r]=o[a],i[a+r]=!0,r+=Ph(t[a-1]);e[n]=l,e[n]._emit=i,e[n]._multi=!0}function Rb(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw In("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),hl;if(typeof e.beginScope!="object"||e.beginScope===null)throw In("beginScope must be object"),hl;zh(e,e.begin,{key:"beginScope"}),e.begin=ou(e.begin,{joinWith:""})}}function Db(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw In("skip, excludeEnd, returnEnd not compatible with endScope: {}"),hl;if(typeof e.endScope!="object"||e.endScope===null)throw In("endScope must be object"),hl;zh(e,e.end,{key:"endScope"}),e.end=ou(e.end,{joinWith:""})}}function Nb(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Ab(e){Nb(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Rb(e),Db(e)}function $b(e){function t(l,a){return new RegExp($o(l),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,s){s.position=this.position++,this.matchIndexes[this.matchAt]=s,this.regexes.push([s,a]),this.matchAt+=Ph(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(s=>s[1]);this.matcherRe=t(ou(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const s=this.matcherRe.exec(a);if(!s)return null;const c=s.findIndex((d,f)=>f>0&&d!==void 0),u=this.matchIndexes[c];return s.splice(0,c),Object.assign(s,u)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const s=new n;return this.rules.slice(a).forEach(([c,u])=>s.addRule(c,u)),s.compile(),this.multiRegexes[a]=s,s}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,s){this.rules.push([a,s]),s.type==="begin"&&this.count++}exec(a){const s=this.getMatcher(this.regexIndex);s.lastIndex=this.lastIndex;let c=s.exec(a);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const u=this.getMatcher(0);u.lastIndex=this.lastIndex+1,c=u.exec(a)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function o(l){const a=new r;return l.contains.forEach(s=>a.addRule(s.begin,{rule:s,type:"begin"})),l.terminatorEnd&&a.addRule(l.terminatorEnd,{type:"end"}),l.illegal&&a.addRule(l.illegal,{type:"illegal"}),a}function i(l,a){const s=l;if(l.isCompiled)return s;[yb,bb,Ab,Cb].forEach(u=>u(l,a)),e.compilerExtensions.forEach(u=>u(l,a)),l.__beforeBegin=null,[wb,xb,Eb].forEach(u=>u(l,a)),l.isCompiled=!0;let c=null;return typeof l.keywords=="object"&&l.keywords.$pattern&&(l.keywords=Object.assign({},l.keywords),c=l.keywords.$pattern,delete l.keywords.$pattern),c=c||/\w+/,l.keywords&&(l.keywords=Fh(l.keywords,e.case_insensitive)),s.keywordPatternRe=t(c,!0),a&&(l.begin||(l.begin=/\B|\b/),s.beginRe=t(s.begin),!l.end&&!l.endsWithParent&&(l.end=/\B|\b/),l.end&&(s.endRe=t(s.end)),s.terminatorEnd=$o(s.end)||"",l.endsWithParent&&a.terminatorEnd&&(s.terminatorEnd+=(l.end?"|":"")+a.terminatorEnd)),l.illegal&&(s.illegalRe=t(l.illegal)),l.contains||(l.contains=[]),l.contains=[].concat(...l.contains.map(function(u){return Pb(u==="self"?l:u)})),l.contains.forEach(function(u){i(u,s)}),l.starts&&i(l.starts,a),s.matcher=o(s),s}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=ln(e.classNameAliases||{}),i(e)}function jh(e){return e?e.endsWithParent||jh(e.starts):!1}function Pb(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return ln(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:jh(e)?ln(e,{starts:e.starts?ln(e.starts):null}):Object.isFrozen(e)?ln(e):e}var Mb="11.8.0";class Ib extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const Da=Ah,lf=ln,af=Symbol("nomatch"),Ob=7,Bh=function(e){const t=Object.create(null),n=Object.create(null),r=[];let o=!0;const i="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Y1};function s(T){return a.noHighlightRe.test(T)}function c(T){let C=T.className+" ";C+=T.parentNode?T.parentNode.className:"";const D=a.languageDetectRe.exec(C);if(D){const A=M(D[1]);return A||(of(i.replace("{}",D[1])),of("Falling back to no-highlight mode for this block.",T)),A?D[1]:"no-highlight"}return C.split(/\s+/).find(A=>s(A)||M(A))}function u(T,C,D){let A="",F="";typeof C=="object"?(A=T,D=C.ignoreIllegals,F=C.language):(qn("10.7.0","highlight(lang, code, ...args) has been deprecated."),qn("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),F=T,A=C),D===void 0&&(D=!0);const W={code:A,language:F};V("before:highlight",W);const Q=W.result?W.result:d(W.language,W.code,D);return Q.code=W.code,V("after:highlight",Q),Q}function d(T,C,D,A){const F=Object.create(null);function W(P,j){return P.keywords[j]}function Q(){if(!G.keywords){De.addText(ce);return}let P=0;G.keywordPatternRe.lastIndex=0;let j=G.keywordPatternRe.exec(ce),Y="";for(;j;){Y+=ce.substring(P,j.index);const oe=Pe.case_insensitive?j[0].toLowerCase():j[0],Me=W(G,oe);if(Me){const[$t,cg]=Me;if(De.addText(Y),Y="",F[oe]=(F[oe]||0)+1,F[oe]<=Ob&&(Uo+=cg),$t.startsWith("_"))Y+=j[0];else{const ug=Pe.classNameAliases[$t]||$t;le(j[0],ug)}}else Y+=j[0];P=G.keywordPatternRe.lastIndex,j=G.keywordPatternRe.exec(ce)}Y+=ce.substring(P),De.addText(Y)}function pe(){if(ce==="")return;let P=null;if(typeof G.subLanguage=="string"){if(!t[G.subLanguage]){De.addText(ce);return}P=d(G.subLanguage,ce,!0,Sn[G.subLanguage]),Sn[G.subLanguage]=P._top}else P=v(ce,G.subLanguage.length?G.subLanguage:null);G.relevance>0&&(Uo+=P.relevance),De.__addSublanguage(P._emitter,P.language)}function re(){G.subLanguage!=null?pe():Q(),ce=""}function le(P,j){P!==""&&(De.startScope(j),De.addText(P),De.endScope())}function H(P,j){let Y=1;const oe=j.length-1;for(;Y<=oe;){if(!P._emit[Y]){Y++;continue}const Me=Pe.classNameAliases[P[Y]]||P[Y],$t=j[Y];Me?le($t,Me):(ce=$t,Q(),ce=""),Y++}}function ee(P,j){return P.scope&&typeof P.scope=="string"&&De.openNode(Pe.classNameAliases[P.scope]||P.scope),P.beginScope&&(P.beginScope._wrap?(le(ce,Pe.classNameAliases[P.beginScope._wrap]||P.beginScope._wrap),ce=""):P.beginScope._multi&&(H(P.beginScope,j),ce="")),G=Object.create(P,{parent:{value:G}}),G}function ke(P,j,Y){let oe=J1(P.endRe,Y);if(oe){if(P["on:end"]){const Me=new ef(P);P["on:end"](j,Me),Me.isMatchIgnored&&(oe=!1)}if(oe){for(;P.endsParent&&P.parent;)P=P.parent;return P}}if(P.endsWithParent)return ke(P.parent,j,Y)}function ae(P){return G.matcher.regexIndex===0?(ce+=P[0],1):(Yl=!0,0)}function te(P){const j=P[0],Y=P.rule,oe=new ef(Y),Me=[Y.__beforeBegin,Y["on:begin"]];for(const $t of Me)if($t&&($t(P,oe),oe.isMatchIgnored))return ae(j);return Y.skip?ce+=j:(Y.excludeBegin&&(ce+=j),re(),!Y.returnBegin&&!Y.excludeBegin&&(ce=j)),ee(Y,P),Y.returnBegin?0:j.length}function ne(P){const j=P[0],Y=C.substring(P.index),oe=ke(G,P,Y);if(!oe)return af;const Me=G;G.endScope&&G.endScope._wrap?(re(),le(j,G.endScope._wrap)):G.endScope&&G.endScope._multi?(re(),H(G.endScope,P)):Me.skip?ce+=j:(Me.returnEnd||Me.excludeEnd||(ce+=j),re(),Me.excludeEnd&&(ce=j));do G.scope&&De.closeNode(),!G.skip&&!G.subLanguage&&(Uo+=G.relevance),G=G.parent;while(G!==oe.parent);return oe.starts&&ee(oe.starts,P),Me.returnEnd?0:j.length}function je(){const P=[];for(let j=G;j!==Pe;j=j.parent)j.scope&&P.unshift(j.scope);P.forEach(j=>De.openNode(j))}let Ee={};function Qt(P,j){const Y=j&&j[0];if(ce+=P,Y==null)return re(),0;if(Ee.type==="begin"&&j.type==="end"&&Ee.index===j.index&&Y===""){if(ce+=C.slice(j.index,j.index+1),!o){const oe=new Error(`0 width match regex (${T})`);throw oe.languageName=T,oe.badRule=Ee.rule,oe}return 1}if(Ee=j,j.type==="begin")return te(j);if(j.type==="illegal"&&!D){const oe=new Error('Illegal lexeme "'+Y+'" for mode "'+(G.scope||"<unnamed>")+'"');throw oe.mode=G,oe}else if(j.type==="end"){const oe=ne(j);if(oe!==af)return oe}if(j.type==="illegal"&&Y==="")return 1;if(Kl>1e5&&Kl>j.index*3)throw new Error("potential infinite loop, way more iterations than matches");return ce+=Y,Y.length}const Pe=M(T);if(!Pe)throw In(i.replace("{}",T)),new Error('Unknown language: "'+T+'"');const Cn=$b(Pe);let zr="",G=A||Cn;const Sn={},De=new a.__emitter(a);je();let ce="",Uo=0,_n=0,Kl=0,Yl=!1;try{if(Pe.__emitTokens)Pe.__emitTokens(C,De);else{for(G.matcher.considerAll();;){Kl++,Yl?Yl=!1:G.matcher.considerAll(),G.matcher.lastIndex=_n;const P=G.matcher.exec(C);if(!P)break;const j=C.substring(_n,P.index),Y=Qt(j,P);_n=P.index+Y}Qt(C.substring(_n))}return De.finalize(),zr=De.toHTML(),{language:T,value:zr,relevance:Uo,illegal:!1,_emitter:De,_top:G}}catch(P){if(P.message&&P.message.includes("Illegal"))return{language:T,value:Da(C),illegal:!0,relevance:0,_illegalBy:{message:P.message,index:_n,context:C.slice(_n-100,_n+100),mode:P.mode,resultSoFar:zr},_emitter:De};if(o)return{language:T,value:Da(C),illegal:!1,relevance:0,errorRaised:P,_emitter:De,_top:G};throw P}}function f(T){const C={value:Da(T),illegal:!1,relevance:0,_top:l,_emitter:new a.__emitter(a)};return C._emitter.addText(T),C}function v(T,C){C=C||a.languages||Object.keys(t);const D=f(T),A=C.filter(M).filter(z).map(re=>d(re,T,!1));A.unshift(D);const F=A.sort((re,le)=>{if(re.relevance!==le.relevance)return le.relevance-re.relevance;if(re.language&&le.language){if(M(re.language).supersetOf===le.language)return 1;if(M(le.language).supersetOf===re.language)return-1}return 0}),[W,Q]=F,pe=W;return pe.secondBest=Q,pe}function y(T,C,D){const A=C&&n[C]||D;T.classList.add("hljs"),T.classList.add(`language-${A}`)}function g(T){let C=null;const D=c(T);if(s(D))return;if(V("before:highlightElement",{el:T,language:D}),T.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(T)),a.throwUnescapedHTML))throw new Ib("One of your code blocks includes unescaped HTML.",T.innerHTML);C=T;const A=C.textContent,F=D?u(A,{language:D,ignoreIllegals:!0}):v(A);T.innerHTML=F.value,y(T,D,F.language),T.result={language:F.language,re:F.relevance,relevance:F.relevance},F.secondBest&&(T.secondBest={language:F.secondBest.language,relevance:F.secondBest.relevance}),V("after:highlightElement",{el:T,result:F,text:A})}function x(T){a=lf(a,T)}const h=()=>{b(),qn("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function p(){b(),qn("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let w=!1;function b(){if(document.readyState==="loading"){w=!0;return}document.querySelectorAll(a.cssSelector).forEach(g)}function E(){w&&b()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",E,!1);function _(T,C){let D=null;try{D=C(e)}catch(A){if(In("Language definition for '{}' could not be registered.".replace("{}",T)),o)In(A);else throw A;D=l}D.name||(D.name=T),t[T]=D,D.rawDefinition=C.bind(null,e),D.aliases&&I(D.aliases,{languageName:T})}function S(T){delete t[T];for(const C of Object.keys(n))n[C]===T&&delete n[C]}function k(){return Object.keys(t)}function M(T){return T=(T||"").toLowerCase(),t[T]||t[n[T]]}function I(T,{languageName:C}){typeof T=="string"&&(T=[T]),T.forEach(D=>{n[D.toLowerCase()]=C})}function z(T){const C=M(T);return C&&!C.disableAutodetect}function L(T){T["before:highlightBlock"]&&!T["before:highlightElement"]&&(T["before:highlightElement"]=C=>{T["before:highlightBlock"](Object.assign({block:C.el},C))}),T["after:highlightBlock"]&&!T["after:highlightElement"]&&(T["after:highlightElement"]=C=>{T["after:highlightBlock"](Object.assign({block:C.el},C))})}function U(T){L(T),r.push(T)}function K(T){const C=r.indexOf(T);C!==-1&&r.splice(C,1)}function V(T,C){const D=T;r.forEach(function(A){A[D]&&A[D](C)})}function B(T){return qn("10.7.0","highlightBlock will be removed entirely in v12.0"),qn("10.7.0","Please use highlightElement now."),g(T)}Object.assign(e,{highlight:u,highlightAuto:v,highlightAll:b,highlightElement:g,highlightBlock:B,configure:x,initHighlighting:h,initHighlightingOnLoad:p,registerLanguage:_,unregisterLanguage:S,listLanguages:k,getLanguage:M,registerAliases:I,autoDetection:z,inherit:lf,addPlugin:U,removePlugin:K}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString=Mb,e.regex={concat:Yn,lookahead:$h,either:ru,optional:X1,anyNumberOfTimes:Q1};for(const T in gi)typeof gi[T]=="object"&&Nh(gi[T]);return Object.assign(e,gi),e},$r=Bh({});$r.newInstance=()=>Bh({});var Lb=$r;$r.HighlightJS=$r;$r.default=$r;const lu=Ws(Lb);function Fb(e){const t=e.regex,n={},r={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:t.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},r]});const o={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},l={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,o]};o.contains.push(l);const a={className:"",begin:/\\"/},s={className:"string",begin:/'/,end:/'/},c={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},u=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],d=e.SHEBANG({binary:`(${u.join("|")})`,relevance:10}),f={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},v=["if","then","else","elif","fi","for","while","until","in","do","done","case","esac","function","select"],y=["true","false"],g={match:/(\/[a-z._-]+)+/},x=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],h=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias"],p=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],w=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:v,literal:y,built_in:[...x,...h,"set","shopt",...p,...w]},contains:[d,e.SHEBANG(),f,c,e.HASH_COMMENT_MODE,i,g,l,a,s,n]}}const gl="[A-Za-z$_][0-9A-Za-z$_]*",Hh=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Vh=["true","false","null","undefined","NaN","Infinity"],Uh=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Wh=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Gh=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Kh=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Yh=[].concat(Gh,Uh,Wh);function zb(e){const t=e.regex,n=(C,{after:D})=>{const A="</"+C[0].slice(1);return C.input.indexOf(A,D)!==-1},r=gl,o={begin:"<>",end:"</>"},i=/<[A-Za-z0-9\\._:-]+\s*\/>/,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(C,D)=>{const A=C[0].length+C.index,F=C.input[A];if(F==="<"||F===","){D.ignoreMatch();return}F===">"&&(n(C,{after:A})||D.ignoreMatch());let W;const Q=C.input.substring(A);if(W=Q.match(/^\s*=/)){D.ignoreMatch();return}if((W=Q.match(/^\s+extends\s+/))&&W.index===0){D.ignoreMatch();return}}},a={$pattern:gl,keyword:Hh,literal:Vh,built_in:Yh,"variable.language":Kh},s="[0-9](_?[0-9])*",c=`\\.(${s})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${s})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},f={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},v={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"css"}},g={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,f],subLanguage:"graphql"}},x={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,f]},p={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},w=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,y,g,x,{match:/\$\d+/},d];f.contains=w.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(w)});const b=[].concat(p,f.contains),E=b.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(b)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:E},S={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,t.concat(r,"(",t.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,match:t.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Uh,...Wh]}},M={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},I={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[_],illegal:/%/},z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function L(C){return t.concat("(?!",C.join("|"),")")}const U={match:t.concat(/\b/,L([...Gh,"super","import"]),r,t.lookahead(/\(/)),className:"title.function",relevance:0},K={begin:t.concat(/\./,t.lookahead(t.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},V={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},_]},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",T={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,t.lookahead(B)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[_]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:E,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),M,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,y,g,x,p,{match:/\$\d+/},d,k,{className:"attr",begin:r+t.lookahead(":"),relevance:0},T,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[p,e.REGEXP_MODE,{className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:E}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:i},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[_,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},K,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[_]},U,z,S,V,{match:/\$[(.]/}]}}function jb(e){const t=zb(e),n=gl,r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],o={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[t.exports.CLASS_REFERENCE]},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},contains:[t.exports.CLASS_REFERENCE]},l={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},a=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],s={$pattern:gl,keyword:Hh.concat(a),literal:Vh,built_in:Yh.concat(r),"variable.language":Kh},c={className:"meta",begin:"@"+n},u=(f,v,y)=>{const g=f.contains.findIndex(x=>x.label===v);if(g===-1)throw new Error("can not find mode to replace");f.contains.splice(g,1,y)};Object.assign(t.keywords,s),t.exports.PARAMS_CONTAINS.push(c),t.contains=t.contains.concat([c,o,i]),u(t,"shebang",e.SHEBANG()),u(t,"use_strict",l);const d=t.contains.find(f=>f.label==="func.def");return d.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}lu.registerLanguage("typescript",jb);lu.registerLanguage("bash",Fb);function Bb(e,t){return lu.highlight(e,{language:t}).value}const Hb={tabSize:2},Vb=({className:e,code:t,language:n})=>{const r=m.useMemo(()=>({__html:Bb(t,n)}),[n,t]),o=Ve("font-mono text-sm w-full justify-center p-4 items-center overflow-scroll rounded bg-slate-100 border border-slate-200",e);return R.jsx(Ub,{_$:o,style:Hb,dangerouslySetInnerHTML:r})},Ub=Fl(null,{block:(e,t,n)=>new Ll(Wb,Gb,e,t??e.key,n??Kb,Yb)}),Wb=Hc("<div><pre><code></code></pre></div>"),Gb=[{p:[],e:[{t:2,n:"dangerouslySetInnerHTML",v:null,h:"dangerouslySetInnerHTML",i:null,l:null,p:null,b:null}],i:[]},{p:[],e:[{t:2,n:"className",v:null,h:"_$",i:null,l:null,p:null,b:null}],i:[]}],Kb=(e,t)=>(e==null?void 0:e._$)!==(t==null?void 0:t._$)||(e==null?void 0:e.style)!==(t==null?void 0:t.style)||(e==null?void 0:e.dangerouslySetInnerHTML)!==(t==null?void 0:t.dangerouslySetInnerHTML),Yb=e=>[Ds.call(Ds.call(e)),e],Bs=Vb,Na="rovingFocusGroup.onEntryFocus",Qb={bubbles:!1,cancelable:!0},au="RovingFocusGroup",[Hs,Qh,Xb]=Vm(au),[Zb,Xh]=Bo(au,[Xb]),[Jb,qb]=Zb(au),eE=m.forwardRef((e,t)=>m.createElement(Hs.Provider,{scope:e.__scopeRovingFocusGroup},m.createElement(Hs.Slot,{scope:e.__scopeRovingFocusGroup},m.createElement(tE,Z({},e,{ref:t}))))),tE=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:l,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:s,onEntryFocus:c,...u}=e,d=m.useRef(null),f=ze(t,d),v=Wc(i),[y=null,g]=ml({prop:l,defaultProp:a,onChange:s}),[x,h]=m.useState(!1),p=Nt(c),w=Qh(n),b=m.useRef(!1),[E,_]=m.useState(0);return m.useEffect(()=>{const S=d.current;if(S)return S.addEventListener(Na,p),()=>S.removeEventListener(Na,p)},[p]),m.createElement(Jb,{scope:n,orientation:r,dir:v,loop:o,currentTabStopId:y,onItemFocus:m.useCallback(S=>g(S),[g]),onItemShiftTab:m.useCallback(()=>h(!0),[]),onFocusableItemAdd:m.useCallback(()=>_(S=>S+1),[]),onFocusableItemRemove:m.useCallback(()=>_(S=>S-1),[])},m.createElement(xe.div,Z({tabIndex:x||E===0?-1:0,"data-orientation":r},u,{ref:f,style:{outline:"none",...e.style},onMouseDown:he(e.onMouseDown,()=>{b.current=!0}),onFocus:he(e.onFocus,S=>{const k=!b.current;if(S.target===S.currentTarget&&k&&!x){const M=new CustomEvent(Na,Qb);if(S.currentTarget.dispatchEvent(M),!M.defaultPrevented){const I=w().filter(V=>V.focusable),z=I.find(V=>V.active),L=I.find(V=>V.id===y),K=[z,L,...I].filter(Boolean).map(V=>V.ref.current);Zh(K)}}b.current=!1}),onBlur:he(e.onBlur,()=>h(!1))})))}),nE="RovingFocusGroupItem",rE=m.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...l}=e,a=zl(),s=i||a,c=qb(nE,n),u=c.currentTabStopId===s,d=Qh(n),{onFocusableItemAdd:f,onFocusableItemRemove:v}=c;return m.useEffect(()=>{if(r)return f(),()=>v()},[r,f,v]),m.createElement(Hs.ItemSlot,{scope:n,id:s,focusable:r,active:o},m.createElement(xe.span,Z({tabIndex:u?0:-1,"data-orientation":c.orientation},l,{ref:t,onMouseDown:he(e.onMouseDown,y=>{r?c.onItemFocus(s):y.preventDefault()}),onFocus:he(e.onFocus,()=>c.onItemFocus(s)),onKeyDown:he(e.onKeyDown,y=>{if(y.key==="Tab"&&y.shiftKey){c.onItemShiftTab();return}if(y.target!==y.currentTarget)return;const g=lE(y,c.orientation,c.dir);if(g!==void 0){y.preventDefault();let h=d().filter(p=>p.focusable).map(p=>p.ref.current);if(g==="last")h.reverse();else if(g==="prev"||g==="next"){g==="prev"&&h.reverse();const p=h.indexOf(y.currentTarget);h=c.loop?aE(h,p+1):h.slice(p+1)}setTimeout(()=>Zh(h))}})})))}),oE={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function iE(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function lE(e,t,n){const r=iE(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return oE[r]}function Zh(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function aE(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const sE=eE,cE=rE;function uE(e,t){return m.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Jh=e=>{const{present:t,children:n}=e,r=dE(t),o=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),i=ze(r.ref,o.ref);return typeof n=="function"||r.isPresent?m.cloneElement(o,{ref:i}):null};Jh.displayName="Presence";function dE(e){const[t,n]=m.useState(),r=m.useRef({}),o=m.useRef(e),i=m.useRef("none"),l=e?"mounted":"unmounted",[a,s]=uE(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const c=vi(r.current);i.current=a==="mounted"?c:"none"},[a]),Ct(()=>{const c=r.current,u=o.current;if(u!==e){const f=i.current,v=vi(c);e?s("MOUNT"):v==="none"||(c==null?void 0:c.display)==="none"?s("UNMOUNT"):s(u&&f!==v?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Ct(()=>{if(t){const c=d=>{const v=vi(r.current).includes(d.animationName);d.target===t&&v&&Un.flushSync(()=>s("ANIMATION_END"))},u=d=>{d.target===t&&(i.current=vi(r.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:m.useCallback(c=>{c&&(r.current=getComputedStyle(c)),n(c)},[])}}function vi(e){return(e==null?void 0:e.animationName)||"none"}const qh="Tabs",[fE,JE]=Bo(qh,[Xh]),eg=Xh(),[pE,su]=fE(qh),mE=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:o,defaultValue:i,orientation:l="horizontal",dir:a,activationMode:s="automatic",...c}=e,u=Wc(a),[d,f]=ml({prop:r,onChange:o,defaultProp:i});return m.createElement(pE,{scope:n,baseId:zl(),value:d,onValueChange:f,orientation:l,dir:u,activationMode:s},m.createElement(xe.div,Z({dir:u,"data-orientation":l},c,{ref:t})))}),hE="TabsList",gE=m.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...o}=e,i=su(hE,n),l=eg(n);return m.createElement(sE,Z({asChild:!0},l,{orientation:i.orientation,dir:i.dir,loop:r}),m.createElement(xe.div,Z({role:"tablist","aria-orientation":i.orientation},o,{ref:t})))}),vE="TabsTrigger",yE=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:o=!1,...i}=e,l=su(vE,n),a=eg(n),s=tg(l.baseId,r),c=ng(l.baseId,r),u=r===l.value;return m.createElement(cE,Z({asChild:!0},a,{focusable:!o,active:u}),m.createElement(xe.button,Z({type:"button",role:"tab","aria-selected":u,"aria-controls":c,"data-state":u?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:s},i,{ref:t,onMouseDown:he(e.onMouseDown,d=>{!o&&d.button===0&&d.ctrlKey===!1?l.onValueChange(r):d.preventDefault()}),onKeyDown:he(e.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&l.onValueChange(r)}),onFocus:he(e.onFocus,()=>{const d=l.activationMode!=="manual";!u&&!o&&d&&l.onValueChange(r)})})))}),wE="TabsContent",xE=m.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:o,children:i,...l}=e,a=su(wE,n),s=tg(a.baseId,r),c=ng(a.baseId,r),u=r===a.value,d=m.useRef(u);return m.useEffect(()=>{const f=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(f)},[]),m.createElement(Jh,{present:o||u},({present:f})=>m.createElement(xe.div,Z({"data-state":u?"active":"inactive","data-orientation":a.orientation,role:"tabpanel","aria-labelledby":s,hidden:!f,id:c,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0}}),f&&i))});function tg(e,t){return`${e}-trigger-${t}`}function ng(e,t){return`${e}-content-${t}`}const bE=mE,rg=gE,og=yE,ig=xE;var EE=bE,lg=m.forwardRef(({className:e,...t},n)=>m.createElement(rg,{ref:n,className:Ve("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));lg.displayName=rg.displayName;var Vs=m.forwardRef(({className:e,...t},n)=>m.createElement(og,{ref:n,className:Ve("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));Vs.displayName=og.displayName;var Us=m.forwardRef(({className:e,...t},n)=>m.createElement(ig,{ref:n,className:Ve("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));Us.displayName=ig.displayName;function CE(e){return e.toLowerCase()}var SE=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],_E=/[^A-Z0-9]+/gi;function kE(e,t){t===void 0&&(t={});for(var n=t.splitRegexp,r=n===void 0?SE:n,o=t.stripRegexp,i=o===void 0?_E:o,l=t.transform,a=l===void 0?CE:l,s=t.delimiter,c=s===void 0?" ":s,u=sf(sf(e,r,"$1\0$2"),i,"\0"),d=0,f=u.length;u.charAt(d)==="\0";)d++;for(;u.charAt(f-1)==="\0";)f--;return u.slice(d,f).split("\0").map(a).join(c)}function sf(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(r,o){return r.replace(o,n)},e)}function TE(e,t){return t===void 0&&(t={}),kE(e,st({delimiter:"."},t))}function RE(e,t){return t===void 0&&(t={}),TE(e,st({delimiter:"_"},t))}const DE=0,NE=2e3,cf=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,uf=Om,AE=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return uf(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:i}=t,l=Object.keys(o).map(c=>{const u=n==null?void 0:n[c],d=i==null?void 0:i[c];if(u===null)return null;const f=cf(u)||cf(d);return o[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,f]=u;return f===void 0||(c[d]=f),c},{}),s=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:d,className:f,...v}=u;return Object.entries(v).every(y=>{let[g,x]=y;return Array.isArray(x)?x.includes({...i,...a}[g]):{...i,...a}[g]===x})?[...c,d,f]:c},[]);return uf(e,l,s,n==null?void 0:n.class,n==null?void 0:n.className)};var $E=AE("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ag=m.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>m.createElement(r?Dr:"button",{className:Ve($E({variant:t,size:n,className:e})),ref:i,...o}));ag.displayName="Button";function PE({value:e,...t}){const[n,r]=m.useState(!1);m.useEffect(()=>{setTimeout(()=>{r(!1)},NE)},[n]);function o(){navigator.clipboard.writeText(e),r(!0)}return R.jsx(ag,{onClick:o,size:"icon",variant:"ghost",...t,children:n?R.jsx(Th,{size:16}):R.jsx(B1,{size:16})})}const ME="modulepreload",IE=function(e){return"/"+e},df={},$=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=IE(i),i in df)return;df[i]=!0;const l=i.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===i&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":ME,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})},OE=e=>{const t=m.lazy("path"in e?async()=>$(()=>import(e.path),[]):e.import),n=Vc(R.jsx(m.Suspense,{fallback:R.jsxs("div",{className:"flex items-center text-sm text-muted-foreground",children:[R.jsx("svg",{className:"mr-2 h-4 w-4 animate-spin",fill:"none",height:"24",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Loading..."]}),children:R.jsx(t,{})}),!1);return R.jsx(LE,{_$:n})},LE=Fl(({_$:e})=>e,{svg:!1,original:null,shouldUpdate:(e,t)=>(e==null?void 0:e._$)!==(t==null?void 0:t._$)}),FE=OE;function Aa({children:e,className:t,isExternal:n,...r}){return R.jsxs("a",{...r,className:Ve("hover:underline underline-offset-2",n&&"flex space-x-3 items-center",t),rel:n?"noreferrer":void 0,target:n?"_blank":void 0,children:[e,n&&R.jsx(H1,{size:16})]})}function zE({children:e,className:t,...n}){return R.jsx("h1",{className:Ve("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",t),...n,children:e})}function $a({children:e,className:t,...n}){return R.jsx("h2",{className:Ve("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",t),...n,children:e})}function Mi({children:e,className:t,...n}){return R.jsx("h3",{className:Ve("scroll-m-20 text-2xl font-semibold tracking-tight",t),...n,children:e})}function jE({demo:e}){const[t,n]=m.useState("default"),r=e.styles.find(l=>l.name===t)??e.styles[DE];function o(l){n(l)}function i(){return R.jsxs(Rh,{onValueChange:o,value:String(t),children:[R.jsxs(eu,{className:"h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4",children:[R.jsx("span",{className:"text-muted-foreground",children:"Style: "}),R.jsx(Dh,{placeholder:"Select style"})]}),R.jsx(tu,{children:e.styles.map(l=>R.jsx(po,{className:"text-xs",value:l.name,children:l.label},l.name))})]})}return R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"flex justify-between",id:e.name,children:[R.jsx(Aa,{href:`https://github.com/lukeshay/ui/blob/main/test/src/demos/${r.name}/${e.name.replace(" ","")}Demo.tsx`,isExternal:!0,children:R.jsx(Mi,{className:"border-0",children:e.name})}),R.jsxs("div",{children:[R.jsxs(Aa,{className:"flex items-center space-x-2",href:"#toc",children:[R.jsx("span",{children:"Back to top"}),R.jsx(z1,{size:16})]}),R.jsx(Aa,{href:`https://ui.shadcn.com/docs/components/${RE(e.name).replace("_","-")}`,className:"space-x-2",isExternal:!0,children:R.jsx("span",{children:"@shadcn/ui"})})]})]}),R.jsxs(EE,{className:"relative mr-auto w-full",defaultValue:"preview",children:[R.jsx("div",{className:"flex items-center justify-between pb-3",children:R.jsxs(lg,{className:"w-full justify-start rounded-none border-b bg-transparent p-0",children:[R.jsx(Vs,{className:"relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",value:"preview",children:"Preview"}),R.jsx(Vs,{className:"relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",value:"code",children:"Code"})]})}),R.jsxs(Us,{className:"relative rounded-md border p-4 space-y-6",value:"preview",children:[R.jsx("div",{className:"flex items-center justify-between h-8",children:R.jsx(i,{})}),R.jsx("div",{className:"flex min-h-[350px] w-full justify-center items-center px-4",children:R.jsx(FE,{import:r.component})})]}),R.jsxs(Us,{className:"relative rounded-md border p-4 space-y-6",value:"code",children:[R.jsxs("div",{className:"flex items-center justify-between h-8",children:[R.jsx(i,{}),R.jsx(PE,{value:r.content})]}),R.jsx(Bs,{code:r.content,language:"typescript"})]})]})]})}const ff=[{name:"Accordion",styles:[{component:async()=>$(()=>import("./AccordionDemo-6c2b78ae.js"),["assets/AccordionDemo-6c2b78ae.js","assets/index-e0f2b848.js","assets/index-c560bf7b.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/AccordionDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./AccordionDemo-0287be45.js"),["assets/AccordionDemo-0287be45.js","assets/index-e0f2b848.js","assets/index-c560bf7b.js","assets/react-icons.esm-3de25e53.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/AccordionDemo.tsx",label:"New York",name:"new-york"}]},{name:"Alert Dialog",styles:[{component:async()=>$(()=>import("./AlertDialogDemo-60394fc5.js"),["assets/AlertDialogDemo-60394fc5.js","assets/index-0f9c9624.js","assets/index-08102ba6.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/AlertDialogDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./AlertDialogDemo-796edc82.js"),["assets/AlertDialogDemo-796edc82.js","assets/chunk-55Z2D7DU-a7a65fb9.js","assets/index-0f9c9624.js","assets/index-08102ba6.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/AlertDialogDemo.tsx",label:"New York",name:"new-york"}]},{name:"Alert",styles:[{component:async()=>$(()=>import("./AlertDemo-5350f281.js"),["assets/AlertDemo-5350f281.js","assets/terminal-2baad106.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/AlertDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./AlertDemo-9c4cddcd.js"),["assets/AlertDemo-9c4cddcd.js","assets/terminal-2baad106.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/AlertDemo.tsx",label:"New York",name:"new-york"}]},{name:"Aspect Ratio",styles:[{component:async()=>$(()=>import("./AspectRatioDemo-c4b2d4cd.js"),["assets/AspectRatioDemo-c4b2d4cd.js","assets/index-fa7c8108.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/AspectRatioDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./AspectRatioDemo-6423b233.js"),["assets/AspectRatioDemo-6423b233.js","assets/index-fa7c8108.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/AspectRatioDemo.tsx",label:"New York",name:"new-york"}]},{name:"Avatar",styles:[{component:async()=>$(()=>import("./AvatarDemo-8dcb70ad.js"),["assets/AvatarDemo-8dcb70ad.js","assets/index-496ef930.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/AvatarDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./AvatarDemo-afbdee3e.js"),["assets/AvatarDemo-afbdee3e.js","assets/index-496ef930.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/AvatarDemo.tsx",label:"New York",name:"new-york"}]},{name:"Badge",styles:[{component:async()=>$(()=>import("./BadgeDemo-b0e1b34b.js"),[]),content:`import * as React from "react"
import { Badge } from "@lshay/ui/components/default/badge"

function BadgeDemo(): React.ReactNode {
	return <Badge variant="outline">Badge</Badge>
}

export default BadgeDemo
`,path:"src/demos/default/BadgeDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./BadgeDemo-4b7ef013.js"),[]),content:`import * as React from "react"
import { Badge } from "@lshay/ui/components/new-york/badge"

function BadgeDemo(): React.ReactNode {
	return <Badge variant="outline">Badge</Badge>
}

export default BadgeDemo
`,path:"src/demos/new-york/BadgeDemo.tsx",label:"New York",name:"new-york"}]},{name:"Button",styles:[{component:async()=>$(()=>import("./ButtonDemo-ce7e1f99.js"),[]),content:`import * as React from "react"
import { Button } from "@lshay/ui/components/default/button"

function ButtonDemo(): React.ReactNode {
	return <Button variant="outline">Button</Button>
}

export default ButtonDemo
`,path:"src/demos/default/ButtonDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./ButtonDemo-1c593dce.js"),["assets/ButtonDemo-1c593dce.js","assets/chunk-55Z2D7DU-a7a65fb9.js"]),content:`import * as React from "react"
import { Button } from "@lshay/ui/components/new-york/button"

function ButtonDemo(): React.ReactNode {
	return <Button variant="outline">Button</Button>
}

export default ButtonDemo
`,path:"src/demos/new-york/ButtonDemo.tsx",label:"New York",name:"new-york"}]},{name:"Calendar",styles:[{component:async()=>$(()=>import("./CalendarDemo-f6b3e074.js"),["assets/CalendarDemo-f6b3e074.js","assets/calendar-746b7d72.js","assets/index.esm-75c7bb4c.js","assets/chevron-right-d243a732.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/CalendarDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./CalendarDemo-c6dfdcc0.js"),["assets/CalendarDemo-c6dfdcc0.js","assets/calendar-02e46bf3.js","assets/chunk-55Z2D7DU-a7a65fb9.js","assets/react-icons.esm-3de25e53.js","assets/index.esm-75c7bb4c.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/CalendarDemo.tsx",label:"New York",name:"new-york"}]},{name:"Card",styles:[{component:async()=>$(()=>import("./CardDemo-c2c60970.js"),[]),content:`import * as React from "react"
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
`,path:"src/demos/default/CardDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./CardDemo-77b48d4e.js"),[]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/CardDemo.tsx",label:"New York",name:"new-york"}]},{name:"Checkbox",styles:[{component:async()=>$(()=>import("./CheckboxDemo-de29b76c.js"),["assets/CheckboxDemo-de29b76c.js","assets/index-6d6727d4.js"]),content:`import * as React from "react"
import { Checkbox } from "@lshay/ui/components/default/checkbox"

function CheckboxDemo(): React.ReactNode {
	return <Checkbox />
}

export default CheckboxDemo
`,path:"src/demos/default/CheckboxDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./CheckboxDemo-d27ac260.js"),["assets/CheckboxDemo-d27ac260.js","assets/index-6d6727d4.js","assets/react-icons.esm-3de25e53.js"]),content:`import * as React from "react"
import { Checkbox } from "@lshay/ui/components/new-york/checkbox"

function CheckboxDemo(): React.ReactNode {
	return <Checkbox />
}

export default CheckboxDemo
`,path:"src/demos/new-york/CheckboxDemo.tsx",label:"New York",name:"new-york"}]},{name:"Collapsible",styles:[{component:async()=>$(()=>import("./CollapsibleDemo-78647d76.js"),["assets/CollapsibleDemo-78647d76.js","assets/index-c560bf7b.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/CollapsibleDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./CollapsibleDemo-08df9a09.js"),["assets/CollapsibleDemo-08df9a09.js","assets/index-c560bf7b.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/CollapsibleDemo.tsx",label:"New York",name:"new-york"}]},{name:"Combobox",styles:[{component:async()=>$(()=>import("./ComboboxDemo-eac1d5b9.js"),["assets/ComboboxDemo-eac1d5b9.js","assets/command-ff415407.js","assets/chunk-DU7JJ3IT-e1c78bd0.js","assets/index-08102ba6.js","assets/index-e1dedda7.js","assets/popover-30da5574.js","assets/index-e1e2cbe9.js","assets/chevrons-up-down-d32b81ef.js"]),content:`"use client"

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
`,path:"src/demos/default/ComboboxDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./ComboboxDemo-c7d5f975.js"),["assets/ComboboxDemo-c7d5f975.js","assets/chunk-55Z2D7DU-a7a65fb9.js","assets/command-ccf80604.js","assets/chunk-MJRFACEY-15e8445a.js","assets/index-08102ba6.js","assets/react-icons.esm-3de25e53.js","assets/index-e1dedda7.js","assets/popover-b1a80f9d.js","assets/index-e1e2cbe9.js","assets/chevrons-up-down-d32b81ef.js"]),content:`"use client"

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
`,path:"src/demos/new-york/ComboboxDemo.tsx",label:"New York",name:"new-york"}]},{name:"Command",styles:[{component:async()=>$(()=>import("./CommandDemo-e8c5ada0.js"),["assets/CommandDemo-e8c5ada0.js","assets/command-ff415407.js","assets/chunk-DU7JJ3IT-e1c78bd0.js","assets/index-08102ba6.js","assets/index-e1dedda7.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/CommandDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./CommandDemo-f9e2adcd.js"),["assets/CommandDemo-f9e2adcd.js","assets/command-ccf80604.js","assets/chunk-MJRFACEY-15e8445a.js","assets/index-08102ba6.js","assets/react-icons.esm-3de25e53.js","assets/index-e1dedda7.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/CommandDemo.tsx",label:"New York",name:"new-york"}]},{name:"Context Menu",styles:[{component:async()=>$(()=>import("./ContextMenuDemo-772f109c.js"),["assets/ContextMenuDemo-772f109c.js","assets/index-a5021cc9.js","assets/index-f66173a9.js","assets/chevron-right-d243a732.js","assets/circle-7d98f245.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/ContextMenuDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./ContextMenuDemo-e5b2d427.js"),["assets/ContextMenuDemo-e5b2d427.js","assets/index-a5021cc9.js","assets/index-f66173a9.js","assets/react-icons.esm-3de25e53.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/ContextMenuDemo.tsx",label:"New York",name:"new-york"}]},{name:"Date Picker",styles:[{component:async()=>$(()=>import("./DatePickerDemo-05570d3e.js"),["assets/DatePickerDemo-05570d3e.js","assets/calendar-746b7d72.js","assets/index.esm-75c7bb4c.js","assets/chevron-right-d243a732.js","assets/popover-30da5574.js","assets/index-e1e2cbe9.js","assets/calendar-09d7354a.js"]),content:`"use client"

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
`,path:"src/demos/default/DatePickerDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./DatePickerDemo-abf31880.js"),["assets/DatePickerDemo-abf31880.js","assets/chunk-55Z2D7DU-a7a65fb9.js","assets/calendar-02e46bf3.js","assets/react-icons.esm-3de25e53.js","assets/index.esm-75c7bb4c.js","assets/popover-b1a80f9d.js","assets/index-e1e2cbe9.js","assets/calendar-09d7354a.js"]),content:`"use client"

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
`,path:"src/demos/new-york/DatePickerDemo.tsx",label:"New York",name:"new-york"}]},{name:"Dialog",styles:[{component:async()=>$(()=>import("./DialogDemo-df2043aa.js"),["assets/DialogDemo-df2043aa.js","assets/chunk-DU7JJ3IT-e1c78bd0.js","assets/index-08102ba6.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/DialogDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./DialogDemo-3bd55ce3.js"),["assets/DialogDemo-3bd55ce3.js","assets/chunk-MJRFACEY-15e8445a.js","assets/index-08102ba6.js","assets/react-icons.esm-3de25e53.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/DialogDemo.tsx",label:"New York",name:"new-york"}]},{name:"Dropdown Menu",styles:[{component:async()=>$(()=>import("./DropdownMenuDemo-13391981.js"),["assets/DropdownMenuDemo-13391981.js","assets/index-d4431e36.js","assets/index-f66173a9.js","assets/chevron-right-d243a732.js","assets/circle-7d98f245.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/DropdownMenuDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./DropdownMenuDemo-1cfea041.js"),["assets/DropdownMenuDemo-1cfea041.js","assets/index-d4431e36.js","assets/index-f66173a9.js","assets/react-icons.esm-3de25e53.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/DropdownMenuDemo.tsx",label:"New York",name:"new-york"}]},{name:"Form",styles:[{component:async()=>$(()=>import("./FormDemo-66ad0961.js"),["assets/FormDemo-66ad0961.js","assets/index-80d58ae2.js","assets/chunk-V7Y6JZDD-eef7fb40.js","assets/index-7e58ea91.js","assets/input-c1221e46.js"]),content:`"use client"
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
`,path:"src/demos/default/FormDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./FormDemo-26da790c.js"),["assets/FormDemo-26da790c.js","assets/index-80d58ae2.js","assets/chunk-55Z2D7DU-a7a65fb9.js","assets/chunk-J72PJGQC-0757b819.js","assets/index-7e58ea91.js","assets/input-dc955122.js"]),content:`"use client"
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
`,path:"src/demos/new-york/FormDemo.tsx",label:"New York",name:"new-york"}]},{name:"Hover Card",styles:[{component:async()=>$(()=>import("./HoverCardDemo-7e184059.js"),["assets/HoverCardDemo-7e184059.js","assets/index-c698822a.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/HoverCardDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./HoverCardDemo-060ec22d.js"),["assets/HoverCardDemo-060ec22d.js","assets/index-c698822a.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/HoverCardDemo.tsx",label:"New York",name:"new-york"}]},{name:"Input",styles:[{component:async()=>$(()=>import("./InputDemo-6f6c3330.js"),["assets/InputDemo-6f6c3330.js","assets/input-c1221e46.js"]),content:`import * as React from "react"
import { Input } from "@lshay/ui/components/default/input"

function InputDemo(): React.ReactNode {
	return <Input />
}

export default InputDemo
`,path:"src/demos/default/InputDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./InputDemo-cb04b2b7.js"),["assets/InputDemo-cb04b2b7.js","assets/input-dc955122.js"]),content:`import * as React from "react"
import { Input } from "@lshay/ui/components/new-york/input"

function InputDemo(): React.ReactNode {
	return <Input />
}

export default InputDemo
`,path:"src/demos/new-york/InputDemo.tsx",label:"New York",name:"new-york"}]},{name:"Label",styles:[{component:async()=>$(()=>import("./LabelDemo-76ff52d6.js"),["assets/LabelDemo-76ff52d6.js","assets/chunk-V7Y6JZDD-eef7fb40.js","assets/index-7e58ea91.js"]),content:`import * as React from "react"
import { Label } from "@lshay/ui/components/default/label"

function LabelDemo(): React.ReactNode {
	return <Label htmlFor="email">Your email address</Label>
}

export default LabelDemo
`,path:"src/demos/default/LabelDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./LabelDemo-53bc2289.js"),["assets/LabelDemo-53bc2289.js","assets/chunk-J72PJGQC-0757b819.js","assets/index-7e58ea91.js"]),content:`import * as React from "react"
import { Label } from "@lshay/ui/components/new-york/label"

function LabelDemo(): React.ReactNode {
	return <Label htmlFor="email">Your email address</Label>
}

export default LabelDemo
`,path:"src/demos/new-york/LabelDemo.tsx",label:"New York",name:"new-york"}]},{name:"Menubar",styles:[{component:async()=>$(()=>import("./MenubarDemo-5f102fbb.js"),["assets/MenubarDemo-5f102fbb.js","assets/index-062bdb6d.js","assets/index-f66173a9.js","assets/chevron-right-d243a732.js","assets/circle-7d98f245.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/MenubarDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./MenubarDemo-f89681c0.js"),["assets/MenubarDemo-f89681c0.js","assets/react-icons.esm-3de25e53.js","assets/index-062bdb6d.js","assets/index-f66173a9.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/MenubarDemo.tsx",label:"New York",name:"new-york"}]},{name:"Navigation Menu",styles:[{component:async()=>$(()=>import("./NavigationMenuDemo-2e1d29c7.js"),["assets/NavigationMenuDemo-2e1d29c7.js","assets/index-b68571e8.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/NavigationMenuDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./NavigationMenuDemo-6e9b687d.js"),["assets/NavigationMenuDemo-6e9b687d.js","assets/react-icons.esm-3de25e53.js","assets/index-b68571e8.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/NavigationMenuDemo.tsx",label:"New York",name:"new-york"}]},{name:"Popover",styles:[{component:async()=>$(()=>import("./PopoverDemo-c80a32e5.js"),["assets/PopoverDemo-c80a32e5.js","assets/popover-30da5574.js","assets/index-e1e2cbe9.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/PopoverDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./PopoverDemo-bd7ecb02.js"),["assets/PopoverDemo-bd7ecb02.js","assets/popover-b1a80f9d.js","assets/index-e1e2cbe9.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/PopoverDemo.tsx",label:"New York",name:"new-york"}]},{name:"Progress",styles:[{component:async()=>$(()=>import("./ProgressDemo-0917db02.js"),["assets/ProgressDemo-0917db02.js","assets/index-107d87d4.js"]),content:`import * as React from "react"
import { Progress } from "@lshay/ui/components/default/progress"

function ProgressDemo(): React.ReactNode {
	return <Progress value={33} />
}

export default ProgressDemo
`,path:"src/demos/default/ProgressDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./ProgressDemo-9f67db48.js"),["assets/ProgressDemo-9f67db48.js","assets/index-107d87d4.js"]),content:`import * as React from "react"
import { Progress } from "@lshay/ui/components/new-york/progress"

function ProgressDemo(): React.ReactNode {
	return <Progress value={33} />
}

export default ProgressDemo
`,path:"src/demos/new-york/ProgressDemo.tsx",label:"New York",name:"new-york"}]},{name:"Radio Group",styles:[{component:async()=>$(()=>import("./RadioGroupDemo-0d444fdf.js"),["assets/RadioGroupDemo-0d444fdf.js","assets/chunk-V7Y6JZDD-eef7fb40.js","assets/index-7e58ea91.js","assets/index-b5b703ac.js","assets/circle-7d98f245.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/RadioGroupDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./RadioGroupDemo-6182ec3d.js"),["assets/RadioGroupDemo-6182ec3d.js","assets/chunk-J72PJGQC-0757b819.js","assets/index-7e58ea91.js","assets/react-icons.esm-3de25e53.js","assets/index-b5b703ac.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/RadioGroupDemo.tsx",label:"New York",name:"new-york"}]},{name:"Scroll Area",styles:[{component:async()=>$(()=>import("./ScrollAreaDemo-bcd68757.js"),["assets/ScrollAreaDemo-bcd68757.js","assets/index-c7413090.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/ScrollAreaDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./ScrollAreaDemo-ce182a4b.js"),["assets/ScrollAreaDemo-ce182a4b.js","assets/index-c7413090.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/ScrollAreaDemo.tsx",label:"New York",name:"new-york"}]},{name:"Select",styles:[{component:async()=>$(()=>import("./SelectDemo-3bae34c8.js"),[]),content:`import * as React from "react"
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
`,path:"src/demos/default/SelectDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./SelectDemo-b6273de0.js"),["assets/SelectDemo-b6273de0.js","assets/react-icons.esm-3de25e53.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/SelectDemo.tsx",label:"New York",name:"new-york"}]},{name:"Separator",styles:[{component:async()=>$(()=>import("./SeparatorDemo-8e1f3b04.js"),["assets/SeparatorDemo-8e1f3b04.js","assets/index-0db46ef2.js"]),content:`import * as React from "react"
import { Separator } from "@lshay/ui/components/default/separator"

function SeparatorDemo(): React.ReactNode {
	return <Separator />
}

export default SeparatorDemo
`,path:"src/demos/default/SeparatorDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./SeparatorDemo-b2bc5826.js"),["assets/SeparatorDemo-b2bc5826.js","assets/index-0db46ef2.js"]),content:`import * as React from "react"
import { Separator } from "@lshay/ui/components/new-york/separator"

function SeparatorDemo(): React.ReactNode {
	return <Separator />
}

export default SeparatorDemo
`,path:"src/demos/new-york/SeparatorDemo.tsx",label:"New York",name:"new-york"}]},{name:"Skeleton",styles:[{component:async()=>$(()=>import("./SkeletonDemo-2bec726b.js"),[]),content:`import * as React from "react"
import { Skeleton } from "@lshay/ui/components/default/skeleton"

function SkeletonDemo(): React.ReactNode {
	return <Skeleton className="w-[100px] h-[20px] rounded-full" />
}

export default SkeletonDemo
`,path:"src/demos/default/SkeletonDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./SkeletonDemo-814bdbd0.js"),[]),content:`import * as React from "react"
import { Skeleton } from "@lshay/ui/components/new-york/skeleton"

function SkeletonDemo(): React.ReactNode {
	return <Skeleton className="w-[100px] h-[20px] rounded-full" />
}

export default SkeletonDemo
`,path:"src/demos/new-york/SkeletonDemo.tsx",label:"New York",name:"new-york"}]},{name:"Slider",styles:[{component:async()=>$(()=>import("./SliderDemo-9685a042.js"),["assets/SliderDemo-9685a042.js","assets/index-99d7b78c.js"]),content:`import * as React from "react"
import { Slider } from "@lshay/ui/components/default/slider"

function SliderDemo(): React.ReactNode {
	return <Slider defaultValue={[33]} max={100} step={1} />
}

export default SliderDemo
`,path:"src/demos/default/SliderDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./SliderDemo-8061b20d.js"),["assets/SliderDemo-8061b20d.js","assets/index-99d7b78c.js"]),content:`import * as React from "react"
import { Slider } from "@lshay/ui/components/new-york/slider"

function SliderDemo(): React.ReactNode {
	return <Slider defaultValue={[33]} max={100} step={1} />
}

export default SliderDemo
`,path:"src/demos/new-york/SliderDemo.tsx",label:"New York",name:"new-york"}]},{name:"Switch",styles:[{component:async()=>$(()=>import("./SwitchDemo-77427fdb.js"),["assets/SwitchDemo-77427fdb.js","assets/index-fa6fa324.js"]),content:`import * as React from "react"
import { Switch } from "@lshay/ui/components/default/switch"

function SwitchDemo(): React.ReactNode {
	return <Switch />
}

export default SwitchDemo
`,path:"src/demos/default/SwitchDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./SwitchDemo-fdd47131.js"),["assets/SwitchDemo-fdd47131.js","assets/index-fa6fa324.js"]),content:`import * as React from "react"
import { Switch } from "@lshay/ui/components/new-york/switch"

function SwitchDemo(): React.ReactNode {
	return <Switch />
}

export default SwitchDemo
`,path:"src/demos/new-york/SwitchDemo.tsx",label:"New York",name:"new-york"}]},{name:"Table",styles:[{component:async()=>$(()=>import("./TableDemo-e8dba5ea.js"),[]),content:`import * as React from "react"
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
`,path:"src/demos/default/TableDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./TableDemo-31fdb65d.js"),[]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/TableDemo.tsx",label:"New York",name:"new-york"}]},{name:"Tabs",styles:[{component:async()=>$(()=>import("./TabsDemo-68a521e7.js"),[]),content:`import * as React from "react"
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
`,path:"src/demos/default/TabsDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./TabsDemo-a1a3bf45.js"),[]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/TabsDemo.tsx",label:"New York",name:"new-york"}]},{name:"Textarea",styles:[{component:async()=>$(()=>import("./TextareaDemo-46d0ba6e.js"),[]),content:`import * as React from "react"
import { Textarea } from "@lshay/ui/components/default/textarea"

function TextareaDemo(): React.ReactNode {
	return <Textarea />
}

export default TextareaDemo
`,path:"src/demos/default/TextareaDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./TextareaDemo-e2ddc058.js"),[]),content:`import * as React from "react"
import { Textarea } from "@lshay/ui/components/new-york/textarea"

function TextareaDemo(): React.ReactNode {
	return <Textarea />
}

export default TextareaDemo
`,path:"src/demos/new-york/TextareaDemo.tsx",label:"New York",name:"new-york"}]},{name:"Toast",styles:[{component:async()=>$(()=>import("./ToastDemo-18150940.js"),["assets/ToastDemo-18150940.js","assets/chunk-QVTDBOAX-c3a393ea.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/ToastDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./ToastDemo-b9115104.js"),["assets/ToastDemo-b9115104.js","assets/chunk-QVTDBOAX-c3a393ea.js","assets/chunk-55Z2D7DU-a7a65fb9.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/ToastDemo.tsx",label:"New York",name:"new-york"}]},{name:"Toggle",styles:[{component:async()=>$(()=>import("./ToggleDemo-b025e10b.js"),["assets/ToggleDemo-b025e10b.js","assets/index-af69ff1e.js"]),content:`import * as React from "react"
import { Toggle } from "@lshay/ui/components/default/toggle"

function ToggleDemo(): React.ReactNode {
	return <Toggle>Toggle</Toggle>
}

export default ToggleDemo
`,path:"src/demos/default/ToggleDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./ToggleDemo-cdfd4b29.js"),["assets/ToggleDemo-cdfd4b29.js","assets/index-af69ff1e.js"]),content:`import * as React from "react"
import { Toggle } from "@lshay/ui/components/new-york/toggle"

function ToggleDemo(): React.ReactNode {
	return <Toggle>Toggle</Toggle>
}

export default ToggleDemo
`,path:"src/demos/new-york/ToggleDemo.tsx",label:"New York",name:"new-york"}]},{name:"Tooltip",styles:[{component:async()=>$(()=>import("./TooltipDemo-594ae2d7.js"),["assets/TooltipDemo-594ae2d7.js","assets/index-e9104775.js"]),content:`import * as React from "react"
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
`,path:"src/demos/default/TooltipDemo.tsx",label:"Default",name:"default"},{component:async()=>$(()=>import("./TooltipDemo-8002a313.js"),["assets/TooltipDemo-8002a313.js","assets/index-e9104775.js"]),content:`import * as React from "react"
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
`,path:"src/demos/new-york/TooltipDemo.tsx",label:"New York",name:"new-york"}]}],sg=()=>R.jsx(BE,{}),BE=Fl(null,{block:(e,t,n)=>new Ll(HE,VE,e,t??e.key,n??UE,WE)});sg.callable=!0;const HE=Hc('<a class="underline" href="https://ui.shadcn.com/" rel="noreferrer" target="_blank">@shadcn/ui</a>'),VE=[],UE=(e,t)=>!0,WE=null,Pa=sg;function pf({children:e}){return R.jsx("p",{className:"bg-slate-100 rounded-sm border border-slate-200 p-4",children:e})}function _t({children:e}){return R.jsx("span",{className:"font-mono px-1 py-0.5 bg-slate-300 rounded text-sm",children:e})}const GE=Fl(function(){const[t,n]=m.useState("npm"),r=t==="npm"?"install":"add";function o(i){n(i)}return R.jsxs("main",{className:"space-y-16 p-8",children:[R.jsx("section",{className:"container space-y-6",children:R.jsxs(zE,{className:"text-center",children:[R.jsx("span",{children:"@lshay/ui - Published version of "}),R.jsx(Pa,{})]})}),R.jsxs("section",{className:"max-w-2xl container space-y-6",children:[R.jsxs("div",{className:"space-y-4",children:[R.jsx($a,{children:"Introduction"}),R.jsxs("p",{children:["This package contains the published components that were created by ",R.jsx(Pa,{}),". All credit to the components and demos goes to them."]})]}),R.jsxs("div",{className:"space-y-8",children:[R.jsx($a,{children:"Getting Started"}),R.jsxs("div",{className:"space-y-4",children:[R.jsx(Mi,{children:"1. Installation"}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs(Rh,{onValueChange:o,value:t,children:[R.jsx(eu,{className:"h-7 w-[80px] text-xs [&_svg]:h-4 [&_svg]:w-4",children:R.jsx(Dh,{placeholder:"Select package manager"})}),R.jsxs(tu,{children:[R.jsx(po,{className:"text-xs",value:"npm",children:"npm"}),R.jsx(po,{className:"text-xs",value:"yarn",children:"yarn"}),R.jsx(po,{className:"text-xs",value:"pnpm",children:"pnpm"})]})]}),R.jsx(Bs,{code:`${t} ${r} @lshay/ui`,language:"bash"})]})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs(Mi,{children:["2. Follow ",R.jsx(Pa,{})," Directions"]}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("p",{children:["Follow the steps ",R.jsx("a",{className:"underline",href:"https://ui.shadcn.com/docs/installation",rel:"noreferrer",target:"_blank",children:"linked here"}),"."]}),R.jsxs(pf,{children:[R.jsx("span",{className:"font-bold",children:"NOTE: "}),"When creating the ",R.jsx(_t,{children:"components.json"})," file, the only configuration that matters is ",R.jsx(_t,{children:"tailwind"}),". The rest is handled by ",R.jsx(_t,{children:"@lshay/ui"})]}),R.jsxs(pf,{children:[R.jsx("span",{className:"font-bold",children:"NOTE: "}),"You do not need to install ",R.jsx(_t,{children:"class-variance-authority"}),", ",R.jsx(_t,{children:"clsx"}),", and ",R.jsx(_t,{children:"tailwind-merge"})," because ",R.jsx(_t,{children:"@lshay/ui"})," provides an export for ",R.jsx(_t,{children:"cn"}),", ",R.jsx(_t,{children:'import { cn } from "@lshay/ui/lib/utils"'}),"."]})]})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsx(Mi,{children:"3. Modify Tailwind CSS Config"}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("p",{children:["Add the following to ",R.jsx(_t,{children:"tailwind.config.js"}),"."]}),R.jsx(Bs,{code:`const { CONTENT } = require("@lshay/ui/lib/utils")

/** @type {import('tailwindcss').Config} */
module.exports = {
	// ...
	content: [
		"node_modules/@lshay/ui/dist/components/**/*.js",
		"./src/**/*.{ts,tsx}",
		/* Other paths here */
	],
	// ...
}`,language:"typescript"})]})]})]})]}),R.jsxs("section",{className:"max-w-2xl container space-y-10",children:[R.jsxs("div",{className:"space-y-6",children:[R.jsx($a,{id:"toc",children:"Components"}),R.jsx("ul",{className:"list-disc px-10",children:ff.map(({name:i})=>R.jsx("li",{children:R.jsx("a",{className:"hover:underline underline-offset-2",href:`#${i}`,children:i})},i))})]}),ff.map(i=>R.jsx(jE,{demo:i},i.name))]})]})});Ma.createRoot(document.querySelector("#root")).render(R.jsx(it.StrictMode,{children:R.jsx(GE,{})}));export{Vm as $,Cx as A,st as B,j1 as C,Pi as D,$i as E,fh as F,yx as G,zx as H,Tx as I,vx as J,Ws as K,dx as L,Jx as M,Dr as N,lw as O,aw as P,rw as Q,it as R,KE as S,rh as T,ux as U,sx as V,cx as W,Xh as X,sE as Y,cE as Z,Z as _,Bo as a,Hm as a0,J0 as a1,QE as a2,Ad as a3,Rh as a4,eu as a5,Dh as a6,tu as a7,po as a8,Eh as a9,A1 as aa,$1 as ab,Ch as ac,P1 as ad,Sh as ae,_h as af,I1 as ag,M1 as ah,kh as ai,D1 as aj,N1 as ak,Fl as al,Vc as am,EE as an,lg as ao,Vs as ap,Us as aq,rg as ar,og as as,ig as at,bE as au,ml as b,Ve as c,ze as d,Wc as e,he as f,xe as g,zl as h,$E as i,R as j,K0 as k,AE as l,Vo as m,Nt as n,Ct as o,ag as p,Th as q,m as r,Jh as s,px as t,qw as u,Tg as v,Un as w,Ly as x,kx as y,ch as z};
