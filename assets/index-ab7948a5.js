import{$ as k,a as N,X as O,r as e,e as V,b as B,Y as G,_ as b,g as T,d as L,Z as U,f as m,h}from"./index-6980ecaf.js";import{$ as j,l as Y,a as z,b as X,c as Z,d as q,e as H,f as J,g as Q,h as W,i as ee,j as re,k as ce}from"./index-70d0290e.js";const E="Menubar",[w,te,ae]=k(E),[A,Ee]=N(E,[ae,O]),l=j(),D=O(),[oe,R]=A(E),ne=e.forwardRef((r,a)=>{const{__scopeMenubar:c,value:t,onValueChange:o,defaultValue:v,loop:$=!0,dir:u,...d}=r,p=V(u),n=D(c),[x="",f]=B({prop:t,onChange:o,defaultProp:v}),[g,s]=e.useState(null);return e.createElement(oe,{scope:c,value:x,onMenuOpen:e.useCallback(i=>{f(i),s(i)},[f]),onMenuClose:e.useCallback(()=>f(""),[f]),onMenuToggle:e.useCallback(i=>{f(C=>C?"":i),s(i)},[f]),dir:p,loop:$},e.createElement(w.Provider,{scope:c},e.createElement(w.Slot,{scope:c},e.createElement(G,b({asChild:!0},n,{orientation:"horizontal",loop:$,dir:p,currentTabStopId:g,onCurrentTabStopIdChange:s}),e.createElement(T.div,b({role:"menubar"},d,{ref:a}))))))}),K="MenubarMenu",[de,F]=A(K),se=r=>{const{__scopeMenubar:a,value:c,...t}=r,o=h(),v=c||o||"LEGACY_REACT_AUTO_VALUE",$=R(K,a),u=l(a),d=e.useRef(null),p=e.useRef(!1),n=$.value===v;return e.useEffect(()=>{n||(p.current=!1)},[n]),e.createElement(de,{scope:a,value:v,triggerId:h(),triggerRef:d,contentId:h(),wasKeyboardTriggerOpenRef:p},e.createElement(ce,b({},u,{open:n,onOpenChange:x=>{x||$.onMenuClose()},modal:!1,dir:$.dir},t)))},P="MenubarTrigger",ue=e.forwardRef((r,a)=>{const{__scopeMenubar:c,disabled:t=!1,...o}=r,v=D(c),$=l(c),u=R(P,c),d=F(P,c),p=e.useRef(null),n=L(a,p,d.triggerRef),[x,f]=e.useState(!1),g=u.value===d.value;return e.createElement(w.ItemSlot,{scope:c,value:d.value,disabled:t},e.createElement(U,b({asChild:!0},v,{focusable:!t,tabStopId:d.value}),e.createElement(Y,b({asChild:!0},$),e.createElement(T.button,b({type:"button",role:"menuitem",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":g,"aria-controls":g?d.contentId:void 0,"data-highlighted":x?"":void 0,"data-state":g?"open":"closed","data-disabled":t?"":void 0,disabled:t},o,{ref:n,onPointerDown:m(r.onPointerDown,s=>{!t&&s.button===0&&s.ctrlKey===!1&&(u.onMenuOpen(d.value),g||s.preventDefault())}),onPointerEnter:m(r.onPointerEnter,()=>{if(!!u.value&&!g){var i;u.onMenuOpen(d.value),(i=p.current)===null||i===void 0||i.focus()}}),onKeyDown:m(r.onKeyDown,s=>{t||(["Enter"," "].includes(s.key)&&u.onMenuToggle(d.value),s.key==="ArrowDown"&&u.onMenuOpen(d.value),["Enter"," ","ArrowDown"].includes(s.key)&&(d.wasKeyboardTriggerOpenRef.current=!0,s.preventDefault()))}),onFocus:m(r.onFocus,()=>f(!0)),onBlur:m(r.onBlur,()=>f(!1))})))))}),fe=r=>{const{__scopeMenubar:a,...c}=r,t=l(a);return e.createElement(z,b({},t,c))},I="MenubarContent",be=e.forwardRef((r,a)=>{const{__scopeMenubar:c,align:t="start",...o}=r,v=l(c),$=R(I,c),u=F(I,c),d=te(c),p=e.useRef(!1);return e.createElement(X,b({id:u.contentId,"aria-labelledby":u.triggerId,"data-radix-menubar-content":""},v,o,{ref:a,align:t,onCloseAutoFocus:m(r.onCloseAutoFocus,n=>{if(!!!$.value&&!p.current){var f;(f=u.triggerRef.current)===null||f===void 0||f.focus()}p.current=!1,n.preventDefault()}),onFocusOutside:m(r.onFocusOutside,n=>{const x=n.target;d().some(g=>{var s;return(s=g.ref.current)===null||s===void 0?void 0:s.contains(x)})&&n.preventDefault()}),onInteractOutside:m(r.onInteractOutside,()=>{p.current=!0}),onEntryFocus:n=>{u.wasKeyboardTriggerOpenRef.current||n.preventDefault()},onKeyDown:m(r.onKeyDown,n=>{if(["ArrowRight","ArrowLeft"].includes(n.key)){const x=n.target,f=x.hasAttribute("data-radix-menubar-subtrigger"),g=x.closest("[data-radix-menubar-content]")!==n.currentTarget,i=($.dir==="rtl"?"ArrowRight":"ArrowLeft")===n.key;if(!i&&f||g&&i)return;let M=d().filter(_=>!_.disabled).map(_=>_.value);i&&M.reverse();const S=M.indexOf(u.value);M=$.loop?Me(M,S+1):M.slice(S+1);const[y]=M;y&&$.onMenuOpen(y)}},{checkForDefaultPrevented:!1}),style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))}),$e=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(Z,b({},o,t,{ref:a}))}),ie=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(q,b({},o,t,{ref:a}))}),pe=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(H,b({},o,t,{ref:a}))}),le=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(J,b({},o,t,{ref:a}))}),xe=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(Q,b({},o,t,{ref:a}))}),ge=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(W,b({},o,t,{ref:a}))}),me=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(ee,b({"data-radix-menubar-subtrigger":""},o,t,{ref:a}))}),ve=e.forwardRef((r,a)=>{const{__scopeMenubar:c,...t}=r,o=l(c);return e.createElement(re,b({},o,{"data-radix-menubar-content":""},t,{ref:a,style:{...r.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))});function Me(r,a){return r.map((c,t)=>r[(a+t)%r.length])}const Re=ne,Ce=se,Se=ue,ye=fe,Pe=be,Ie=$e,Oe=ie,Te=pe,Ae=le,De=xe,Ke=ge,Fe=me,ke=ve;export{Re as $,Se as a,Fe as b,ke as c,ye as d,Pe as e,Oe as f,Te as g,De as h,Ae as i,Ie as j,Ke as k,Ce as l};