import{r as e,c as d,l as c,j as s}from"./index-6980ecaf.js";import{T as m}from"./terminal-bf3f0cf1.js";var v=c("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),l=e.forwardRef(({className:a,variant:r,...t},o)=>e.createElement("div",{ref:o,role:"alert",className:d(v({variant:r}),a),...t}));l.displayName="Alert";var i=e.forwardRef(({className:a,...r},t)=>e.createElement("h5",{ref:t,className:d("mb-1 font-medium leading-none tracking-tight",a),...r}));i.displayName="AlertTitle";var n=e.forwardRef(({className:a,...r},t)=>e.createElement("div",{ref:t,className:d("text-sm [&_p]:leading-relaxed",a),...r}));n.displayName="AlertDescription";function p(){return s.jsxs(l,{children:[s.jsx(m,{className:"h-4 w-4"}),s.jsx(i,{children:"Heads up!"}),s.jsx(n,{children:"You can add components and dependencies to your app using the cli."})]})}export{p as default};