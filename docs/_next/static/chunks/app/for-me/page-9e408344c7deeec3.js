(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{8776:(e,s,l)=>{Promise.resolve().then(l.bind(l,5078))},5078:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>j});var a=l(5155),r=l(6246),n=l(2115),t=l(477),i=l.n(t),c=l(2743),d=l.n(c),o=l(4139),x=l.n(o);let h='"Hello, world"は、プログラミング入門で最初に学ぶ典型的な例文で、新しい言語や環境での基本的な出力操作を確認するために使われます。プログラミング文化に深く根付いた簡単なフレーズです。',m=()=>{let[e,s]=(0,n.useState)(null),[l,r]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let e=e=>{e.preventDefault(),s(e),r(!0)};return window.addEventListener("beforeinstallprompt",e),()=>window.removeEventListener("beforeinstallprompt",e)},[]),l)?(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:()=>{r(!1),e.prompt(),e.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),s(null)})},children:"アプリをインストール"})}):null};function g(e){navigator.clipboard.writeText(e).then(()=>{console.log("クリップボードにコピーしました")},e=>{console.error("クリップボードへのコピーに失敗しました",e)})}function u(e){let{colorCode:s}=e;return(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsxs)("div",{className:"shadow-xl m-4 bg-white",onClick:()=>g(s),children:[(0,a.jsxs)("div",{className:"w-full",style:{backgroundColor:s},children:[(0,a.jsx)("div",{className:"text-3xl font-bold text-black p-2",children:s}),(0,a.jsx)("div",{className:"text-3xl font-bold text-white p-2",children:s})]}),(0,a.jsx)("div",{className:"w-full bg-white",children:(0,a.jsx)("div",{className:"text-3xl font-bold p-2",style:{color:s},children:s})})]})})}function b(e){let{backgroundValue:s}=e;return(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)("div",{className:"shadow-xl m-4",onClick:()=>g(s),children:(0,a.jsx)("div",{className:"w-full h-20 bg-white text-white p-2",style:{background:s},children:"background: "+s})})})}function j(){return(0,a.jsxs)("main",{children:[(0,a.jsxs)(r.SectionComponent,{h2text:"",children:[(0,a.jsx)("h2",{children:"自分用ページ"}),(0,a.jsx)("p",{children:"よく使うカラーパレットなどをまとめておく"})]}),(0,a.jsx)(r.SectionComponent,{h2text:"PWAインストール",children:(0,a.jsx)(m,{})}),(0,a.jsx)(r.SectionComponent,{h2text:"リンク集",children:(0,a.jsx)("ul",{className:"underline list-disc list-inside",children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://hashin.net/pi-infra-core/v2",target:"",children:"/pi-infra-core/v2"})})})}),(0,a.jsx)(r.SectionComponent,{h2text:"カラーパレット",children:(0,a.jsxs)("div",{className:"flex flex-wrap",children:[(0,a.jsx)(u,{colorCode:"#009999"}),(0,a.jsx)(u,{colorCode:"#55b535"}),(0,a.jsx)(u,{colorCode:"#ee7a00"}),(0,a.jsx)(u,{colorCode:"#404040"}),(0,a.jsx)(u,{colorCode:"#f2f2f2"}),(0,a.jsx)(u,{colorCode:"#f8f8f8"})]})}),(0,a.jsx)(r.SectionComponent,{h2text:"グラデーションパレット",children:(0,a.jsxs)("div",{className:"flex flex-wrap",children:[(0,a.jsx)(b,{backgroundValue:"linear-gradient(108.4deg, rgb(253, 44, 56) 3.3%, rgb(176, 2, 12) 98.4%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(110.1deg, rgb(241, 115, 30) 18.9%, rgb(231, 29, 54) 90.7%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(107deg, rgb(255, 67, 5) 11.1%, rgb(245, 135, 0) 95.3%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(135deg, rgb(255, 168, 168) 10%, rgb(252, 255, 0) 100%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)"}),(0,a.jsx)(b,{backgroundValue:"radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)"}),(0,a.jsx)(b,{backgroundValue:"radial-gradient(circle at -0.8% 4.3%, rgb(59, 176, 255) 0%, rgb(76, 222, 250) 83.6%)"}),(0,a.jsx)(b,{backgroundValue:"radial-gradient(circle at 10% 20%, rgb(67, 144, 233) 0%, rgb(78, 226, 198) 90.1%)"}),(0,a.jsx)(b,{backgroundValue:"radial-gradient(circle at 84.6% 77.8%, rgb(86, 89, 218) 0%, rgb(95, 208, 248) 90%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(109.6deg, rgb(78, 62, 255) 11.2%, rgb(164, 69, 255) 91.1%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(107deg, rgb(13, 198, 180) 8.1%, rgb(33, 198, 138) 79.5%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 37) 87.1%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(60deg, #29323c 0%, #485563 100%)"}),(0,a.jsx)(b,{backgroundValue:"linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"})]})}),(0,a.jsxs)(r.SectionComponent,{h2text:"よく使うフォント",children:[(0,a.jsx)("a",{className:"underline",href:"https://fonts.google.com/?sort=popularity&subset=japanese&script=Hira",children:"Google Fontsで探す"}),(0,a.jsxs)("div",{className:"py-2 text-xl",children:[(0,a.jsxs)("div",{className:i().className,children:["Noto_Sans_JP_400 ",h]}),(0,a.jsxs)("div",{className:d().className,children:["Noto_Serif_JP_400 ",h]}),(0,a.jsxs)("div",{className:x().className,children:["Zen_Kaku_Gothic_New_400 ",h]})]})]})]})}},6246:(e,s,l)=>{"use strict";l.d(s,{OGPDisplay:()=>o,SectionComponent:()=>d,WorkDisplay:()=>x});var a=l(5155),r=l(2115),n=l(5565),t=l(1536),i=l(2529),c=l(7396);let d=e=>{let{children:s,h2text:l}=e;return(0,a.jsx)("section",{className:"py-6 px-6 odd:bg-gray-100 even:bg-white group",children:(0,a.jsxs)("div",{className:"max-w-[900px] mx-auto",children:[(0,a.jsx)("h2",{className:"sticky top-8 group-odd:bg-gray-100 group-even:bg-white pb-0 z-[990]"+(""===l?" hidden":""),children:l}),s]})})},o=e=>{let{pageLink:s,imageLink:l,pageName:r,pageDescription:t,pageShortURL:i}=e;return(0,a.jsx)("a",{href:s,className:"block mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 my-4",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-1/3",children:(0,a.jsx)(n.default,{src:l,alt:"OGP Image",className:"object-cover w-full h-full",width:500,height:500})}),(0,a.jsxs)("div",{className:"w-2/3 p-4",children:[(0,a.jsx)("h2",{className:"text-base font-semibold text-gray-800 mb-1 line-clamp-2",children:r}),(0,a.jsx)("p",{className:"text-gray-600 text-sm mb-1 line-clamp-3",children:t}),(0,a.jsx)("span",{className:"text-gray-500 text-xs",children:i})]})]})})},x=e=>{let{title:s,img:l,description:d,githubUrl:o,productionUrl:x,techList:h,isShow:m,devPeriod:g,devStarted:u}=e,[b,j]=(0,r.useState)(!1);return void 0===m&&(m=!0),(0,a.jsx)("div",{className:"w-full ".concat(m?"":"hidden"),children:(0,a.jsxs)("div",{className:"shadow-around hover:bg-gray-100 bg-white rounded-xl p-4 m-4 sm:flex",onClick:()=>{j(!b)},children:[(0,a.jsx)("div",{className:"sm:w-2/5",children:l?(0,a.jsx)(n.default,{src:l,alt:s,width:750,height:750}):(0,a.jsx)("div",{className:"w-full bg-gray-300",style:{paddingBottom:"56.25%"}})}),(0,a.jsxs)("div",{className:"sm:w-3/5 sm:pl-4",children:[(0,a.jsx)("h3",{className:"sm:pt-0",children:s}),(0,a.jsxs)("p",{className:"",children:[(0,a.jsx)("span",{className:"text-sm",children:"開始"}),(0,a.jsx)("span",{className:"px-2 underline",children:u}),(0,a.jsx)("span",{className:"text-sm",children:"期間"}),(0,a.jsx)("span",{className:"px-2 underline",children:g})]}),(0,a.jsx)("p",{className:b?"my-2":"my-2 line-clamp-2",children:d}),(0,a.jsxs)("p",{className:"flex items-center",children:[o&&(0,a.jsxs)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-white gray-gradient rounded flex items-center p-1 mr-2 my-1",children:[(0,a.jsx)(t.hL4,{className:"text-xl inline mr-1"}),"リポジトリ"]}),x&&(0,a.jsxs)("a",{href:x,target:"_blank",rel:"noopener noreferrer",className:"text-white gray-gradient rounded flex items-center p-1 mr-2 my-1",children:[(0,a.jsx)(i.G6z,{className:"text-xl inline mr-1"}),"公開ページ"]})]}),(0,a.jsx)("p",{className:"flex flex-wrap",children:h.map(e=>(0,a.jsx)(c.default,{href:"/works/?tag=".concat(e.replaceAll(" ","-")),className:"inline-block text-nowrap text-sm text-blue-500 hover:bg-blue-200 mr-1 my-1 px-2 border border-blue-500 rounded-md",children:e},e))})]})]})})}},477:e=>{e.exports={style:{fontFamily:"'Noto Sans JP', 'Noto Sans JP Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_826667"}},2743:e=>{e.exports={style:{fontFamily:"'Noto Serif JP', 'Noto Serif JP Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_4f6668"}},4139:e=>{e.exports={style:{fontFamily:"'Zen Kaku Gothic New', 'Zen Kaku Gothic New Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_112e12"}}},e=>{var s=s=>e(e.s=s);e.O(0,[8,666,374,711,603,839,766,441,517,358],()=>s(8776)),_N_E=e.O()}]);