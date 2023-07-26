import{r as t,c as f,j as r}from"./index-16532588.js";import{$ as h,a as p,b as u,c as m,d as b}from"./index-7508113f.js";function x(e,s){if(e==null)return{};var a={},l=Object.keys(e),o,n;for(n=0;n<l.length;n++)o=l[n],!(s.indexOf(o)>=0)&&(a[o]=e[o]);return a}var v=["color"],$=t.forwardRef(function(e,s){var a=e.color,l=a===void 0?"currentColor":a,o=x(e,v);return t.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:s}),t.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:l,fillRule:"evenodd",clipRule:"evenodd"}))}),w=h,i=t.forwardRef(({className:e,...s},a)=>t.createElement(p,{ref:a,className:f("border-b",e),...s}));i.displayName="AccordionItem";var c=t.forwardRef(({className:e,children:s,...a},l)=>t.createElement(u,{className:"flex"},t.createElement(m,{ref:l,className:f("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...a},s,t.createElement($,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"}))));c.displayName=m.displayName;var d=t.forwardRef(({className:e,children:s,...a},l)=>t.createElement(b,{ref:l,className:f("overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",e),...a},t.createElement("div",{className:"pb-4 pt-0"},s)));d.displayName=b.displayName;function N(){return r.jsxs(w,{type:"single",collapsible:!0,className:"w-full",children:[r.jsxs(i,{value:"item-1",children:[r.jsx(c,{children:"Is it accessible?"}),r.jsx(d,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),r.jsxs(i,{value:"item-2",children:[r.jsx(c,{children:"Is it styled?"}),r.jsx(d,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),r.jsxs(i,{value:"item-3",children:[r.jsx(c,{children:"Is it animated?"}),r.jsx(d,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})}export{N as default};