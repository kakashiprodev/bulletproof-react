import{j as s,f as c,R as r}from"./index-D0mVz3ol.js";import{L as N}from"./index-D0mVz3ol.js";import{C as d}from"./ContentLayout-BPYlf98W.js";const x=()=>s.jsx("div",{children:"404"}),h=()=>{var i,l,n,t,a;const e=c();return s.jsxs(d,{title:"Dashboard",children:[s.jsxs("h1",{className:"mt-2 text-xl",children:["Welcome ",s.jsx("b",{children:`${(i=e.data)==null?void 0:i.firstName} ${(l=e.data)==null?void 0:l.lastName}`})]}),s.jsxs("h4",{className:"my-3",children:["Your role is : ",s.jsx("b",{children:(n=e.data)==null?void 0:n.role})]}),s.jsx("p",{className:"font-medium",children:"In this application you can:"}),((t=e.data)==null?void 0:t.role)===r.USER&&s.jsxs("ul",{className:"my-4 list-disc list-inside",children:[s.jsx("li",{children:"Create comments in discussions"}),s.jsx("li",{children:"Delete own comments"})]}),((a=e.data)==null?void 0:a.role)===r.ADMIN&&s.jsxs("ul",{className:"my-4 list-disc list-inside",children:[s.jsx("li",{children:"Create discussions"}),s.jsx("li",{children:"Edit discussions"}),s.jsx("li",{children:"Delete discussions"}),s.jsx("li",{children:"Comment on discussions"}),s.jsx("li",{children:"Delete all comments"})]})]})};export{h as Dashboard,N as Landing,x as NotFound};
