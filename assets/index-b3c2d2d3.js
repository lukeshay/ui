import{r as c,g as $,_ as l}from"./index-4b973fe8.js";const i="horizontal",p=["horizontal","vertical"],d=c.forwardRef((e,t)=>{const{decorative:o,orientation:r=i,...n}=e,a=f(r)?r:i,s=o?{role:"none"}:{"aria-orientation":a==="vertical"?a:void 0,role:"separator"};return c.createElement($.div,l({"data-orientation":a},s,n,{ref:t}))});d.propTypes={orientation(e,t,o){const r=e[t],n=String(r);return r&&!f(r)?new Error(u(n,o)):null}};function u(e,t){return`Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`}function f(e){return p.includes(e)}const x=d;export{x as $};
