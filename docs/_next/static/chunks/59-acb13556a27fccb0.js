"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{39348:(t,e,s)=>{s.d(e,{default:()=>p});var n=s(95155),o=s(12115),u=s(58581),r=s(28064),i=s(15255),a=s(12800),l=s(66963),m=s(27112),c=s(86354),C=s(14969);let d={2025:{1:{commitCount:0,prCount:0,issueCount:0}},2024:{12:{commitCount:107,prCount:5,issueCount:2},11:{commitCount:97,prCount:6,issueCount:4},10:{commitCount:123,prCount:11,issueCount:8},9:{commitCount:206,prCount:21,issueCount:19},8:{commitCount:163,prCount:27,issueCount:21},7:{commitCount:188,prCount:38,issueCount:43},6:{commitCount:125,prCount:32,issueCount:0},5:{commitCount:187,prCount:38,issueCount:0},4:{commitCount:114,prCount:36,issueCount:0},3:{commitCount:179,prCount:45,issueCount:0},2:{commitCount:138,prCount:32,issueCount:0},1:{commitCount:141,prCount:26,issueCount:0}},2023:{12:{commitCount:192,prCount:16,issueCount:0},11:{commitCount:180,prCount:31,issueCount:4},10:{commitCount:74,prCount:0,issueCount:0},9:{commitCount:100,prCount:11,issueCount:0},8:{commitCount:94,prCount:5,issueCount:0},7:{commitCount:48,prCount:0,issueCount:0},6:{commitCount:63,prCount:0,issueCount:0},5:{commitCount:53,prCount:0,issueCount:0},4:{commitCount:101,prCount:0,issueCount:0},3:{commitCount:49,prCount:0,issueCount:0},2:{commitCount:45,prCount:0,issueCount:0},1:{commitCount:64,prCount:0,issueCount:0}},2022:{12:{commitCount:55,prCount:0,issueCount:0},11:{commitCount:88,prCount:0,issueCount:9},10:{commitCount:87,prCount:0,issueCount:2},9:{commitCount:53,prCount:1,issueCount:0},8:{commitCount:23,prCount:0,issueCount:0},7:{commitCount:0,prCount:0,issueCount:3},6:{commitCount:0,prCount:0,issueCount:4},5:{commitCount:8,prCount:0,issueCount:0},4:{commitCount:8,prCount:0,issueCount:0},3:{commitCount:25,prCount:0,issueCount:0},2:{commitCount:29,prCount:0,issueCount:0},1:{commitCount:35,prCount:0,issueCount:0}},2021:{12:{commitCount:30,prCount:0,issueCount:0},11:{commitCount:12,prCount:0,issueCount:0},10:{commitCount:57,prCount:2,issueCount:0},9:{commitCount:0,prCount:0,issueCount:0},8:{commitCount:0,prCount:0,issueCount:0},7:{commitCount:0,prCount:0,issueCount:0},6:{commitCount:0,prCount:0,issueCount:0},5:{commitCount:0,prCount:0,issueCount:0},4:{commitCount:0,prCount:0,issueCount:0},3:{commitCount:0,prCount:0,issueCount:0},2:{commitCount:0,prCount:0,issueCount:0},1:{commitCount:0,prCount:0,issueCount:0}}},p=()=>{let[t,e]=(0,o.useState)("monthly"),s=Object.entries(d).flatMap(t=>{let[e,s]=t;return Object.entries(s).map(t=>{let[s,n]=t;return{date:"".concat(e,"/").concat(s),commits:n.commitCount,pullRequests:n.prCount,issues:n.issueCount}})}),p=Object.entries(d).map(t=>{let[e,s]=t,n=Object.values(s).reduce((t,e)=>({commits:t.commits+e.commitCount,pullRequests:t.pullRequests+e.prCount,issues:t.issues+e.issueCount}),{commits:0,pullRequests:0,issues:0});return{date:e,commits:n.commits,pullRequests:n.pullRequests,issues:n.issues}}),x=t=>"\n    px-4 py-2 text-sm font-medium \n    ".concat(t?"text-blue-600 border-b-2 border-blue-600":"text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300","\n    cursor-pointer\n    transition-colors\n  ");return(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("div",{className:"mb-4 border-b border-gray-200",children:(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsx)("button",{className:x("monthly"===t),onClick:()=>e("monthly"),children:"月間"}),(0,n.jsx)("button",{className:x("annual"===t),onClick:()=>e("annual"),children:"年間"})]})}),(0,n.jsx)("div",{className:"h-96",children:(0,n.jsx)(u.u,{width:"100%",height:"100%",children:(0,n.jsxs)(r.E,{data:"monthly"===t?s:p,margin:{top:20,right:30,left:20,bottom:5},children:[(0,n.jsx)(i.d,{strokeDasharray:"3 3"}),(0,n.jsx)(a.W,{dataKey:"date",angle:0,textAnchor:"middle",height:60,tickFormatter:e=>{if("monthly"===t){let[t,s]=e.split("/");return[1,7].includes(parseInt(s))?"".concat(t,"/0").concat(s):""}return e},interval:"monthly"===t?0:void 0}),(0,n.jsx)(l.h,{}),(0,n.jsx)(m.m,{}),(0,n.jsx)(c.s,{}),(0,n.jsx)(C.y,{dataKey:"commits",stackId:"a",fill:"#4ade80",name:"Commits"}),(0,n.jsx)(C.y,{dataKey:"pullRequests",stackId:"a",fill:"#60a5fa",name:"Pull Requests"}),(0,n.jsx)(C.y,{dataKey:"issues",stackId:"a",fill:"#f87171",name:"Issues"})]})})})]})}},6246:(t,e,s)=>{s.d(e,{ArticleLinkGenerator:()=>j,OGPDisplay:()=>d,SectionComponent:()=>C,SocialLinks:()=>x,TechLinksGenerator:()=>h,WorkDisplay:()=>p});var n=s(95155),o=s(12115),u=s(5565),r=s(11536),i=s(34367),a=s(12529),l=s(79967),m=s(48173),c=s.n(m);let C=t=>{let{children:e,h2text:s}=t;return(0,n.jsx)("section",{className:"py-6 px-6 odd:bg-gray-100 even:bg-white group",id:s,children:(0,n.jsxs)("div",{className:"max-w-[900px] mx-auto",children:[(0,n.jsx)("h2",{className:"sticky top-8 group-odd:bg-gray-100 group-even:bg-white pb-0 z-[990]"+(""===s?" hidden":""),children:s}),e]})})},d=t=>{let{pageLink:e,imageLink:s,pageName:o,pageDescription:r,pageShortURL:i}=t;return(0,n.jsx)("a",{href:e,className:"block mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 my-4",children:(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"w-1/3",children:(0,n.jsx)(u.default,{src:s,alt:"OGP Image",className:"object-cover w-full h-full",width:500,height:500})}),(0,n.jsxs)("div",{className:"w-2/3 p-4",children:[(0,n.jsx)("h2",{className:"text-base font-semibold text-gray-800 mb-1 line-clamp-2",children:o}),(0,n.jsx)("p",{className:"text-gray-600 text-sm mb-1 line-clamp-3",children:r}),(0,n.jsx)("span",{className:"text-gray-500 text-xs",children:i})]})]})})},p=t=>{let{title:e,img:s,description:i,githubUrl:l,productionUrl:m,techList:C,isShow:d,devPeriod:p,devStarted:x}=t,[h,j]=(0,o.useState)(!1);return void 0===d&&(d=!0),(0,n.jsx)("div",{className:"w-full ".concat(d?"":"hidden"),children:(0,n.jsxs)("div",{className:"shadow-around hover:bg-gray-100 bg-white rounded-xl p-4 m-4 sm:flex",onClick:()=>{j(!h)},children:[(0,n.jsx)("div",{className:"sm:w-2/5",children:s?(0,n.jsx)(u.default,{src:s,alt:e,width:750,height:750}):(0,n.jsx)("div",{className:"w-full bg-gray-300",style:{paddingBottom:"56.25%"}})}),(0,n.jsxs)("div",{className:"sm:w-3/5 sm:pl-4",children:[(0,n.jsx)("h3",{className:"sm:pt-0",children:e}),(0,n.jsxs)("p",{className:"",children:[(0,n.jsx)("span",{className:"text-sm",children:"開始"}),(0,n.jsx)("span",{className:"px-2 underline",children:x}),(0,n.jsx)("span",{className:"text-sm",children:"期間"}),(0,n.jsx)("span",{className:"px-2 underline",children:p})]}),(0,n.jsx)("p",{className:h?"my-2":"my-2 line-clamp-2",children:i}),(0,n.jsxs)("p",{className:"flex items-center",children:[l&&(0,n.jsxs)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"text-white gray-gradient rounded flex items-center p-1 mr-2 my-1",children:[(0,n.jsx)(r.hL4,{className:"text-xl inline mr-1"}),"リポジトリ"]}),m&&(0,n.jsxs)("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"text-white gray-gradient rounded flex items-center p-1 mr-2 my-1",children:[(0,n.jsx)(a.G6z,{className:"text-xl inline mr-1"}),"公開ページ"]})]}),(0,n.jsx)("p",{className:"flex flex-wrap",children:C.map(t=>(0,n.jsx)(c(),{href:"/works/?tag=".concat(t.replaceAll(" ","-")),className:"inline-block text-nowrap text-sm text-blue-500 hover:bg-blue-200 mr-1 my-1 px-2 border border-blue-500 rounded-md",children:t},t))})]})]})})},x=()=>{let t=[{name:"GitHub",icon:r.hL4,url:"https://github.com/hashin2425",color:"text-gray-800"},{name:"Twitter",icon:r.feZ,url:"https://x.com/HashIn2425",color:"text-blue-400"},{name:"Qiita",icon:l.N0Z,url:"https://qiita.com/hashin2425",color:"text-green-500"}];return(0,n.jsx)("div",{className:"flex space-x-6 my-1",children:t.map(t=>(0,n.jsxs)(c(),{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"".concat(t.color," hover:opacity-80 transition-opacity duration-300 flex justify-center content-center"),children:[t.icon&&(0,n.jsx)(t.icon,{className:"text-4xl"}),(0,n.jsx)("span",{className:"sr-only",children:t.name})]},t.name))})};function h(t){let{techListText:e}=t,s=e.split(",");return(0,n.jsx)("div",{className:"flex flex-wrap",children:s.map(t=>(0,n.jsx)(c(),{href:"/works/?tag=".concat(t.replaceAll(" ","-")),className:"whitespace-nowrap text-blue-500 hover:bg-blue-200 m-1 px-2 border border-blue-500 rounded-md",children:t},t))})}function j(t){let{articleLink:e,postedAt:s,articleTitle:o}=t;return(0,n.jsx)("li",{children:(0,n.jsxs)("a",{className:"block shadow-around hover:bg-gray-100 bg-white rounded-xl p-2 m-4",href:e,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(i.x5Z,{className:"inline-block text-base"}),(0,n.jsx)("p",{className:"whitespace-nowrap text-sm",children:s})]}),(0,n.jsx)("p",{className:"text-base py-1",children:o})]})})}}}]);