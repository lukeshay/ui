import{$ as m,s as F,r as e,a as S,b as x,g as _,d as D,_ as l,e as b,f as v,t as y,u as L,q as k,v as G,w as W,x as U,y as q,z}from"./index-16532588.js";const A="Dialog",[C,O]=m(A),[H,$]=C(A),K=t=>{const{__scopeDialog:n,children:o,open:c,defaultOpen:a,onOpenChange:r,modal:s=!0}=t,d=e.useRef(null),i=e.useRef(null),[f=!1,u]=S({prop:c,defaultProp:a,onChange:r});return e.createElement(H,{scope:n,triggerRef:d,contentRef:i,contentId:x(),titleId:x(),descriptionId:x(),open:f,onOpenChange:u,onOpenToggle:e.useCallback(()=>u(T=>!T),[u]),modal:s},o)},V="DialogTrigger",Y=e.forwardRef((t,n)=>{const{__scopeDialog:o,...c}=t,a=$(V,o),r=_(n,a.triggerRef);return e.createElement(D.button,l({type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":R(a.open)},c,{ref:r,onClick:b(t.onClick,a.onOpenToggle)}))}),P="DialogPortal",[Z,h]=C(P,{forceMount:void 0}),j=t=>{const{__scopeDialog:n,forceMount:o,children:c,container:a}=t,r=$(P,n);return e.createElement(Z,{scope:n,forceMount:o},e.Children.map(c,s=>e.createElement(v,{present:o||r.open},e.createElement(y,{asChild:!0,container:a},s))))},E="DialogOverlay",B=e.forwardRef((t,n)=>{const o=h(E,t.__scopeDialog),{forceMount:c=o.forceMount,...a}=t,r=$(E,t.__scopeDialog);return r.modal?e.createElement(v,{present:c||r.open},e.createElement(J,l({},a,{ref:n}))):null}),J=e.forwardRef((t,n)=>{const{__scopeDialog:o,...c}=t,a=$(E,o);return e.createElement(L,{as:k,allowPinchZoom:!0,shards:[a.contentRef]},e.createElement(D.div,l({"data-state":R(a.open)},c,{ref:n,style:{pointerEvents:"auto",...c.style}})))}),g="DialogContent",Q=e.forwardRef((t,n)=>{const o=h(g,t.__scopeDialog),{forceMount:c=o.forceMount,...a}=t,r=$(g,t.__scopeDialog);return e.createElement(v,{present:c||r.open},r.modal?e.createElement(X,l({},a,{ref:n})):e.createElement(ee,l({},a,{ref:n})))}),X=e.forwardRef((t,n)=>{const o=$(g,t.__scopeDialog),c=e.useRef(null),a=_(n,o.contentRef,c);return e.useEffect(()=>{const r=c.current;if(r)return G(r)},[]),e.createElement(I,l({},t,{ref:a,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:b(t.onCloseAutoFocus,r=>{var s;r.preventDefault(),(s=o.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:b(t.onPointerDownOutside,r=>{const s=r.detail.originalEvent,d=s.button===0&&s.ctrlKey===!0;(s.button===2||d)&&r.preventDefault()}),onFocusOutside:b(t.onFocusOutside,r=>r.preventDefault())}))}),ee=e.forwardRef((t,n)=>{const o=$(g,t.__scopeDialog),c=e.useRef(!1),a=e.useRef(!1);return e.createElement(I,l({},t,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var s;if((s=t.onCloseAutoFocus)===null||s===void 0||s.call(t,r),!r.defaultPrevented){var d;c.current||(d=o.triggerRef.current)===null||d===void 0||d.focus(),r.preventDefault()}c.current=!1,a.current=!1},onInteractOutside:r=>{var s,d;(s=t.onInteractOutside)===null||s===void 0||s.call(t,r),r.defaultPrevented||(c.current=!0,r.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const i=r.target;((d=o.triggerRef.current)===null||d===void 0?void 0:d.contains(i))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&a.current&&r.preventDefault()}}))}),I=e.forwardRef((t,n)=>{const{__scopeDialog:o,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:r,...s}=t,d=$(g,o),i=e.useRef(null),f=_(n,i);return W(),e.createElement(e.Fragment,null,e.createElement(U,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:a,onUnmountAutoFocus:r},e.createElement(q,l({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":R(d.open)},s,{ref:f,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),M="DialogTitle",te=e.forwardRef((t,n)=>{const{__scopeDialog:o,...c}=t,a=$(M,o);return e.createElement(D.h2,l({id:a.titleId},c,{ref:n}))}),oe="DialogDescription",ae=e.forwardRef((t,n)=>{const{__scopeDialog:o,...c}=t,a=$(oe,o);return e.createElement(D.p,l({id:a.descriptionId},c,{ref:n}))}),ce="DialogClose",ne=e.forwardRef((t,n)=>{const{__scopeDialog:o,...c}=t,a=$(ce,o);return e.createElement(D.button,l({type:"button"},c,{ref:n,onClick:b(t.onClick,()=>a.onOpenChange(!1))}))});function R(t){return t?"open":"closed"}const re="DialogTitleWarning",[se,Ne]=F(re,{contentName:g,titleName:M,docsSlug:"dialog"}),le=K,de=Y,$e=j,fe=B,ie=Q,pe=te,ue=ae,N=ne,be="AlertDialog",[ge,we]=m(be,[O]),p=O(),_e=t=>{const{__scopeAlertDialog:n,...o}=t,c=p(n);return e.createElement(le,l({},c,o,{modal:!0}))},De=e.forwardRef((t,n)=>{const{__scopeAlertDialog:o,...c}=t,a=p(o);return e.createElement(de,l({},a,c,{ref:n}))}),xe=t=>{const{__scopeAlertDialog:n,...o}=t,c=p(n);return e.createElement($e,l({},c,o))},Ee=e.forwardRef((t,n)=>{const{__scopeAlertDialog:o,...c}=t,a=p(o);return e.createElement(fe,l({},a,c,{ref:n}))}),w="AlertDialogContent",[ve,Re]=ge(w),me=e.forwardRef((t,n)=>{const{__scopeAlertDialog:o,children:c,...a}=t,r=p(o),s=e.useRef(null),d=_(n,s),i=e.useRef(null);return e.createElement(se,{contentName:w,titleName:Ae,docsSlug:"alert-dialog"},e.createElement(ve,{scope:o,cancelRef:i},e.createElement(ie,l({role:"alertdialog"},r,a,{ref:d,onOpenAutoFocus:b(a.onOpenAutoFocus,f=>{var u;f.preventDefault(),(u=i.current)===null||u===void 0||u.focus({preventScroll:!0})}),onPointerDownOutside:f=>f.preventDefault(),onInteractOutside:f=>f.preventDefault()}),e.createElement(z,null,c),!1)))}),Ae="AlertDialogTitle",Ce=e.forwardRef((t,n)=>{const{__scopeAlertDialog:o,...c}=t,a=p(o);return e.createElement(pe,l({},a,c,{ref:n}))}),Oe=e.forwardRef((t,n)=>{const{__scopeAlertDialog:o,...c}=t,a=p(o);return e.createElement(ue,l({},a,c,{ref:n}))}),Pe=e.forwardRef((t,n)=>{const{__scopeAlertDialog:o,...c}=t,a=p(o);return e.createElement(N,l({},a,c,{ref:n}))}),he="AlertDialogCancel",Ie=e.forwardRef((t,n)=>{const{__scopeAlertDialog:o,...c}=t,{cancelRef:a}=Re(he,o),r=p(o),s=_(n,a);return e.createElement(N,l({},r,c,{ref:s}))}),Te=_e,Fe=De,Se=xe,ye=Ee,Le=me,ke=Pe,Ge=Ie,We=Ce,Ue=Oe;export{Te as $,Fe as a,Se as b,ye as c,Le as d,We as e,Ue as f,ke as g,Ge as h};
