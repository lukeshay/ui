import{$ as K,r as l,a as S,b as B,d as h,_ as $,e as F,f as ee,g as z,h as te,i as oe,k as r,l as ne}from"./index-16532588.js";const U="Collapsible",[re,j]=K(U),[ce,V]=re(U),ae=l.forwardRef((e,a)=>{const{__scopeCollapsible:t,open:n,defaultOpen:c,disabled:o,onOpenChange:s,...i}=e,[d=!1,f]=S({prop:n,defaultProp:c,onChange:s});return l.createElement(ce,{scope:t,disabled:o,contentId:B(),open:d,onOpenToggle:l.useCallback(()=>f(u=>!u),[f])},l.createElement(h.div,$({"data-state":M(d),"data-disabled":o?"":void 0},i,{ref:a})))}),se="CollapsibleTrigger",le=l.forwardRef((e,a)=>{const{__scopeCollapsible:t,...n}=e,c=V(se,t);return l.createElement(h.button,$({type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":M(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled},n,{ref:a,onClick:F(e.onClick,c.onOpenToggle)}))}),q="CollapsibleContent",ie=l.forwardRef((e,a)=>{const{forceMount:t,...n}=e,c=V(q,e.__scopeCollapsible);return l.createElement(ee,{present:t||c.open},({present:o})=>l.createElement(de,$({},n,{ref:a,present:o})))}),de=l.forwardRef((e,a)=>{const{__scopeCollapsible:t,present:n,children:c,...o}=e,s=V(q,t),[i,d]=l.useState(n),f=l.useRef(null),u=z(a,f),m=l.useRef(0),g=m.current,C=l.useRef(0),A=C.current,E=s.open||i,_=l.useRef(E),v=l.useRef();return l.useEffect(()=>{const b=requestAnimationFrame(()=>_.current=!1);return()=>cancelAnimationFrame(b)},[]),te(()=>{const b=f.current;if(b){v.current=v.current||{transitionDuration:b.style.transitionDuration,animationName:b.style.animationName},b.style.transitionDuration="0s",b.style.animationName="none";const p=b.getBoundingClientRect();m.current=p.height,C.current=p.width,_.current||(b.style.transitionDuration=v.current.transitionDuration,b.style.animationName=v.current.animationName),d(n)}},[s.open,n]),l.createElement(h.div,$({"data-state":M(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!E},o,{ref:u,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":A?`${A}px`:void 0,...e.style}}),E&&c)});function M(e){return e?"open":"closed"}const fe=ae,be=le,$e=ie,x="Accordion",pe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[T,ue,me]=oe(x),[I,Ne]=K(x,[me,j]),L=j(),Y=r.forwardRef((e,a)=>{const{type:t,...n}=e,c=n,o=n;return r.createElement(T.Provider,{scope:e.__scopeAccordion},t==="multiple"?r.createElement(ge,$({},o,{ref:a})):r.createElement(Ce,$({},c,{ref:a})))});Y.propTypes={type(e){const a=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof a=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(a)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[J,ve]=I(x),[Q,xe]=I(x,{collapsible:!1}),Ce=r.forwardRef((e,a)=>{const{value:t,defaultValue:n,onValueChange:c=()=>{},collapsible:o=!1,...s}=e,[i,d]=S({prop:t,defaultProp:n,onChange:c});return r.createElement(J,{scope:e.__scopeAccordion,value:i?[i]:[],onItemOpen:d,onItemClose:r.useCallback(()=>o&&d(""),[o,d])},r.createElement(Q,{scope:e.__scopeAccordion,collapsible:o},r.createElement(W,$({},s,{ref:a}))))}),ge=r.forwardRef((e,a)=>{const{value:t,defaultValue:n,onValueChange:c=()=>{},...o}=e,[s=[],i]=S({prop:t,defaultProp:n,onChange:c}),d=r.useCallback(u=>i((m=[])=>[...m,u]),[i]),f=r.useCallback(u=>i((m=[])=>m.filter(g=>g!==u)),[i]);return r.createElement(J,{scope:e.__scopeAccordion,value:s,onItemOpen:d,onItemClose:f},r.createElement(Q,{scope:e.__scopeAccordion,collapsible:!0},r.createElement(W,$({},o,{ref:a}))))}),[Ae,w]=I(x),W=r.forwardRef((e,a)=>{const{__scopeAccordion:t,disabled:n,dir:c,orientation:o="vertical",...s}=e,i=r.useRef(null),d=z(i,a),f=ue(t),m=ne(c)==="ltr",g=F(e.onKeyDown,C=>{var A;if(!pe.includes(C.key))return;const E=C.target,_=f().filter(O=>{var D;return!((D=O.ref.current)!==null&&D!==void 0&&D.disabled)}),v=_.findIndex(O=>O.ref.current===E),b=_.length;if(v===-1)return;C.preventDefault();let p=v;const R=0,y=b-1,P=()=>{p=v+1,p>y&&(p=R)},N=()=>{p=v-1,p<R&&(p=y)};switch(C.key){case"Home":p=R;break;case"End":p=y;break;case"ArrowRight":o==="horizontal"&&(m?P():N());break;case"ArrowDown":o==="vertical"&&P();break;case"ArrowLeft":o==="horizontal"&&(m?N():P());break;case"ArrowUp":o==="vertical"&&N();break}const Z=p%b;(A=_[Z].ref.current)===null||A===void 0||A.focus()});return r.createElement(Ae,{scope:t,disabled:n,direction:c,orientation:o},r.createElement(T.Slot,{scope:t},r.createElement(h.div,$({},s,{"data-orientation":o,ref:d,onKeyDown:n?void 0:g}))))}),k="AccordionItem",[_e,G]=I(k),Ee=r.forwardRef((e,a)=>{const{__scopeAccordion:t,value:n,...c}=e,o=w(k,t),s=ve(k,t),i=L(t),d=B(),f=n&&s.value.includes(n)||!1,u=o.disabled||e.disabled;return r.createElement(_e,{scope:t,open:f,disabled:u,triggerId:d},r.createElement(fe,$({"data-orientation":o.orientation,"data-state":X(f)},i,c,{ref:a,disabled:u,open:f,onOpenChange:m=>{m?s.onItemOpen(n):s.onItemClose(n)}})))}),he="AccordionHeader",Ie=r.forwardRef((e,a)=>{const{__scopeAccordion:t,...n}=e,c=w(x,t),o=G(he,t);return r.createElement(h.h3,$({"data-orientation":c.orientation,"data-state":X(o.open),"data-disabled":o.disabled?"":void 0},n,{ref:a}))}),H="AccordionTrigger",we=r.forwardRef((e,a)=>{const{__scopeAccordion:t,...n}=e,c=w(x,t),o=G(H,t),s=xe(H,t),i=L(t);return r.createElement(T.ItemSlot,{scope:t},r.createElement(be,$({"aria-disabled":o.open&&!s.collapsible||void 0,"data-orientation":c.orientation,id:o.triggerId},i,n,{ref:a})))}),Re="AccordionContent",ye=r.forwardRef((e,a)=>{const{__scopeAccordion:t,...n}=e,c=w(x,t),o=G(Re,t),s=L(t);return r.createElement($e,$({role:"region","aria-labelledby":o.triggerId,"data-orientation":c.orientation},s,n,{ref:a,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function X(e){return e?"open":"closed"}const Oe=Y,De=Ee,ke=Ie,Se=we,Ve=ye;export{Oe as $,De as a,ke as b,Se as c,Ve as d};
