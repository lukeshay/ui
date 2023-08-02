import{r as e,c as l,j as t}from"./index-6980ecaf.js";var o=e.forwardRef(({className:a,...r},s)=>e.createElement("div",{className:"w-full overflow-auto"},e.createElement("table",{ref:s,className:l("w-full caption-bottom text-sm",a),...r})));o.displayName="Table";var i=e.forwardRef(({className:a,...r},s)=>e.createElement("thead",{ref:s,className:l("[&_tr]:border-b",a),...r}));i.displayName="TableHeader";var n=e.forwardRef(({className:a,...r},s)=>e.createElement("tbody",{ref:s,className:l("[&_tr:last-child]:border-0",a),...r}));n.displayName="TableBody";var x=e.forwardRef(({className:a,...r},s)=>e.createElement("tfoot",{ref:s,className:l("bg-primary font-medium text-primary-foreground",a),...r}));x.displayName="TableFooter";var m=e.forwardRef(({className:a,...r},s)=>e.createElement("tr",{ref:s,className:l("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...r}));m.displayName="TableRow";var c=e.forwardRef(({className:a,...r},s)=>e.createElement("th",{ref:s,className:l("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...r}));c.displayName="TableHead";var d=e.forwardRef(({className:a,...r},s)=>e.createElement("td",{ref:s,className:l("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...r}));d.displayName="TableCell";var f=e.forwardRef(({className:a,...r},s)=>e.createElement("caption",{ref:s,className:l("mt-4 text-sm text-muted-foreground",a),...r}));f.displayName="TableCaption";function h(){return t.jsxs(o,{children:[t.jsx(f,{children:"A list of your recent invoices."}),t.jsx(i,{children:t.jsxs(m,{children:[t.jsx(c,{className:"w-[100px]",children:"Invoice"}),t.jsx(c,{children:"Status"}),t.jsx(c,{children:"Method"}),t.jsx(c,{className:"text-right",children:"Amount"})]})}),t.jsx(n,{children:t.jsxs(m,{children:[t.jsx(d,{className:"font-medium",children:"INV001"}),t.jsx(d,{children:"Paid"}),t.jsx(d,{children:"Credit Card"}),t.jsx(d,{className:"text-right",children:"$250.00"})]})})]})}export{h as default};
