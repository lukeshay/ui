import{a as N,T as M,r as o,s as G,_ as y,d as H,Q as F,U as B,k as U,a2 as V,h as j,b as K,V as Y,W as q,g as X,f as T}from"./index-6980ecaf.js";const[P,$e]=N("Tooltip",[M]),O=M(),Q="TooltipProvider",W=700,D="tooltip.open",[z,R]=P(Q),J=t=>{const{__scopeTooltip:n,delayDuration:e=W,skipDelayDuration:r=300,disableHoverableContent:c=!1,children:i}=t,[s,u]=o.useState(!0),a=o.useRef(!1),f=o.useRef(0);return o.useEffect(()=>{const l=f.current;return()=>window.clearTimeout(l)},[]),o.createElement(z,{scope:n,isOpenDelayed:s,delayDuration:e,onOpen:o.useCallback(()=>{window.clearTimeout(f.current),u(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:a,onPointerInTransitChange:o.useCallback(l=>{a.current=l},[]),disableHoverableContent:c},i)},k="Tooltip",[Z,_]=P(k),ee=t=>{const{__scopeTooltip:n,children:e,open:r,defaultOpen:c=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:u}=t,a=R(k,t.__scopeTooltip),f=O(n),[l,d]=o.useState(null),b=j(),p=o.useRef(0),$=s??a.disableHoverableContent,x=u??a.delayDuration,v=o.useRef(!1),[g=!1,h]=K({prop:r,defaultProp:c,onChange:I=>{I?(a.onOpen(),document.dispatchEvent(new CustomEvent(D))):a.onClose(),i==null||i(I)}}),C=o.useMemo(()=>g?v.current?"delayed-open":"instant-open":"closed",[g]),m=o.useCallback(()=>{window.clearTimeout(p.current),v.current=!1,h(!0)},[h]),E=o.useCallback(()=>{window.clearTimeout(p.current),h(!1)},[h]),L=o.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{v.current=!0,h(!0)},x)},[x,h]);return o.useEffect(()=>()=>window.clearTimeout(p.current),[]),o.createElement(Y,f,o.createElement(Z,{scope:n,contentId:b,open:g,stateAttribute:C,trigger:l,onTriggerChange:d,onTriggerEnter:o.useCallback(()=>{a.isOpenDelayed?L():m()},[a.isOpenDelayed,L,m]),onTriggerLeave:o.useCallback(()=>{$?E():window.clearTimeout(p.current)},[E,$]),onOpen:m,onClose:E,disableHoverableContent:$},e))},A="TooltipTrigger",te=o.forwardRef((t,n)=>{const{__scopeTooltip:e,...r}=t,c=_(A,e),i=R(A,e),s=O(e),u=o.useRef(null),a=H(n,u,c.onTriggerChange),f=o.useRef(!1),l=o.useRef(!1),d=o.useCallback(()=>f.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),o.createElement(q,y({asChild:!0},s),o.createElement(X.button,y({"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute},r,{ref:a,onPointerMove:T(t.onPointerMove,b=>{b.pointerType!=="touch"&&!l.current&&!i.isPointerInTransitRef.current&&(c.onTriggerEnter(),l.current=!0)}),onPointerLeave:T(t.onPointerLeave,()=>{c.onTriggerLeave(),l.current=!1}),onPointerDown:T(t.onPointerDown,()=>{f.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:T(t.onFocus,()=>{f.current||c.onOpen()}),onBlur:T(t.onBlur,c.onClose),onClick:T(t.onClick,c.onClose)})))}),oe="TooltipPortal",[be,ne]=P(oe,{forceMount:void 0}),w="TooltipContent",re=o.forwardRef((t,n)=>{const e=ne(w,t.__scopeTooltip),{forceMount:r=e.forceMount,side:c="top",...i}=t,s=_(w,t.__scopeTooltip);return o.createElement(G,{present:r||s.open},s.disableHoverableContent?o.createElement(S,y({side:c},i,{ref:n})):o.createElement(ce,y({side:c},i,{ref:n})))}),ce=o.forwardRef((t,n)=>{const e=_(w,t.__scopeTooltip),r=R(w,t.__scopeTooltip),c=o.useRef(null),i=H(n,c),[s,u]=o.useState(null),{trigger:a,onClose:f}=e,l=c.current,{onPointerInTransitChange:d}=r,b=o.useCallback(()=>{u(null),d(!1)},[d]),p=o.useCallback(($,x)=>{const v=$.currentTarget,g={x:$.clientX,y:$.clientY},h=se(g,v.getBoundingClientRect()),C=le(g,h),m=ie(x.getBoundingClientRect()),E=fe([...C,...m]);u(E),d(!0)},[d]);return o.useEffect(()=>()=>b(),[b]),o.useEffect(()=>{if(a&&l){const $=v=>p(v,l),x=v=>p(v,a);return a.addEventListener("pointerleave",$),l.addEventListener("pointerleave",x),()=>{a.removeEventListener("pointerleave",$),l.removeEventListener("pointerleave",x)}}},[a,l,p,b]),o.useEffect(()=>{if(s){const $=x=>{const v=x.target,g={x:x.clientX,y:x.clientY},h=(a==null?void 0:a.contains(v))||(l==null?void 0:l.contains(v)),C=!ue(g,s);h?b():C&&(b(),f())};return document.addEventListener("pointermove",$),()=>document.removeEventListener("pointermove",$)}},[a,l,s,f,b]),o.createElement(S,y({},t,{ref:i}))}),[ae,ve]=P(k,{isInside:!1}),S=o.forwardRef((t,n)=>{const{__scopeTooltip:e,children:r,"aria-label":c,onEscapeKeyDown:i,onPointerDownOutside:s,...u}=t,a=_(w,e),f=O(e),{onClose:l}=a;return o.useEffect(()=>(document.addEventListener(D,l),()=>document.removeEventListener(D,l)),[l]),o.useEffect(()=>{if(a.trigger){const d=b=>{const p=b.target;p!=null&&p.contains(a.trigger)&&l()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[a.trigger,l]),o.createElement(F,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:l},o.createElement(B,y({"data-state":a.stateAttribute},f,u,{ref:n,style:{...u.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),o.createElement(U,null,r),o.createElement(ae,{scope:e,isInside:!0},o.createElement(V,{id:a.contentId,role:"tooltip"},c||r))))});function se(t,n){const e=Math.abs(n.top-t.y),r=Math.abs(n.bottom-t.y),c=Math.abs(n.right-t.x),i=Math.abs(n.left-t.x);switch(Math.min(e,r,c,i)){case i:return"left";case c:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function le(t,n,e=5){const r=[];switch(n){case"top":r.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":r.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":r.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":r.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return r}function ie(t){const{top:n,right:e,bottom:r,left:c}=t;return[{x:c,y:n},{x:e,y:n},{x:e,y:r},{x:c,y:r}]}function ue(t,n){const{x:e,y:r}=t;let c=!1;for(let i=0,s=n.length-1;i<n.length;s=i++){const u=n[i].x,a=n[i].y,f=n[s].x,l=n[s].y;a>r!=l>r&&e<(f-u)*(r-a)/(l-a)+u&&(c=!c)}return c}function fe(t){const n=t.slice();return n.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),de(n)}function de(t){if(t.length<=1)return t.slice();const n=[];for(let r=0;r<t.length;r++){const c=t[r];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(c.y-s.y)>=(i.y-s.y)*(c.x-s.x))n.pop();else break}n.push(c)}n.pop();const e=[];for(let r=t.length-1;r>=0;r--){const c=t[r];for(;e.length>=2;){const i=e[e.length-1],s=e[e.length-2];if((i.x-s.x)*(c.y-s.y)>=(i.y-s.y)*(c.x-s.x))e.pop();else break}e.push(c)}return e.pop(),n.length===1&&e.length===1&&n[0].x===e[0].x&&n[0].y===e[0].y?n:n.concat(e)}const xe=J,he=ee,ge=te,Te=re;export{Te as $,xe as a,he as b,ge as c};
