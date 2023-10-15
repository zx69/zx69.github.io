(function(){"use strict";var e={422:function(e,t,a){a.d(t,{ZP:function(){return u}});var n=a(4161),r={VUE_APP_API_DOMAIN:"services.dev.dropshipzone.com.au"},l=a(5987);const o=n.Z.create({baseURL:`//${r.VUE_APP_API_DOMAIN}/api/dsz-api/`}),i={code:500,message:"System Error"};o.interceptors.request.use((e=>{const t=l.Z.get();t&&e.url&&(e.headers.Authorization=`Jwt ${t}`);let a=e.url??"";if(a=a.startsWith("/")?a:`/${a}`,!a.includes("//")){let t=e.baseURL??"";t=t.endsWith("/")?t.substr(0,t.length-1):t,a=`${t}${a}`}return e}),(e=>Promise.reject(e))),o.interceptors.response.use((e=>{if(!e.headers["content-type"].includes("json"))return e;const t=e.data??i;return{...t}}),(e=>{let t;e.response?({response:t}=e):e.message.includes("timeout")&&(t={status:408,data:{code:408,message:e.message},headers:{}}),t=t??{status:426,data:{code:426,message:e.message},headers:{}};const a="string"===typeof t.data?{message:t.data,code:t.status}:t.data;return{...a}}));var u=o},2545:function(e,t,a){var n=a(9242),r=a(3396);function l(e,t){const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(a)}var o=a(89);const i={},u=(0,o.Z)(i,[["render",l]]);var s=u,c=a(2483),d=a(5987),p={email:"test_account@dsz.com.au",password:"asdf_123456"},v=a(422);const g=async e=>{const t=await(0,v.ZP)({method:"post",url:"/auth",data:e});return t},m=async()=>{try{d.Z.remove();const{token:e}=await g({...p});d.Z.set(e)}catch(e){console.log(e)}};a(6743);const f=[{path:"/",name:"home",redirect:"category",meta:{title:"Home"}},{path:"/category",name:"category",component:()=>a.e(34).then(a.bind(a,9020)),redirect:"/category/new-arrivals",children:[{path:"new-arrivals",meta:{title:"New Arrivals"},component:()=>Promise.resolve().then(a.bind(a,6743))}]}],h=(0,c.p7)({history:(0,c.r5)(),routes:f});let y;h.beforeEach((async(e,t)=>{const a=d.Z.get();a&&a===y||(await m(),y=a)})),h.onError((e=>{console.error(e)}));var b=h;(0,n.ri)(s).use(b).mount("#app")},5987:function(e,t,a){var n=a(680);const r=/\d+\.\d+\.\d+\.\d+/,l="u",o=document.domain;function i(){const e="/";return"localhost"===o||r.test(o)?{path:e}:{domain:`.${o}`,path:e}}t.Z={get(){return n.Z.get(l)},set(e){n.Z.set(l,e,i())},remove(){n.Z.remove(l,i())}}},6743:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(639),r=(a(1758),a(6962),a(3191)),l=(a(3069),a(8131)),o=(a(2064),a(7113),a(3755)),i=(a(1792),a(7960),a(2809)),u=(a(3449),a(4357),a(3396)),s=a(7139),c=a(4870),d=a(422);const p=async e=>{const t=await(0,d.ZP)({method:"get",url:"/products",params:e});return t};var v=a(877),g=(a(9395),a(927),a(7916));a(802);const m={class:"square-image wrapper"},f={class:"inner"};var h={__name:"SquareImage",props:{imgUrl:{type:String,required:!0}},setup(e){return(t,a)=>{const n=g.F8;return(0,u.wg)(),(0,u.iD)("div",m,[(0,u._)("div",f,[(0,u.WI)(t.$slots,"default",{},(()=>[(0,u.Wm)(n,{src:e.imgUrl,loading:"lazy"},null,8,["src"])])),(0,u.WI)(t.$slots,"inner")])])}}},y=a(89);const b=(0,y.Z)(h,[["__scopeId","data-v-1a131b3e"]]);var w=b;const _={class:"product-tile-item"},S={class:"sub-gallery"},k={key:0,class:"free-tag"},z={class:"sub-gallery"},P={class:"name text-two-line"},U={class:"price-tag"};var W={__name:"ProductTileItem",props:{data:{type:Object,required:!0}},setup(e){const t=e,a=(0,u.Fl)((()=>t.data?.gallery?.slice(0,4)??[])),n=(0,c.iH)(0),r=(0,u.Fl)((()=>a.value[n.value]));return(t,l)=>{const o=v.uy,i=v.vk;return(0,u.wg)(),(0,u.iD)("div",_,[(0,u.Wm)(i,{loading:!e.data.title,animated:""},{template:(0,u.w5)((()=>[(0,u.Wm)(w,{class:"cover",imgUrl:r.value},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{variant:"image",style:{height:"100%"}})])),_:1},8,["imgUrl"]),(0,u._)("div",S,[((0,u.wg)(),(0,u.iD)(u.HY,null,(0,u.Ko)(4,(e=>(0,u.Wm)(w,{class:"cover",imgUrl:"",key:e},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{variant:"image",style:{height:"100%"}})])),_:2},1024))),64))]),(0,u.Wm)(o,{variant:"text",style:{"margin-top":"10px"}}),(0,u.Wm)(o,{variant:"text"}),(0,u.Wm)(o,{variant:"text",style:{width:"30%"}})])),default:(0,u.w5)((()=>[(0,u.Wm)(w,{class:"cover",imgUrl:r.value},{inner:(0,u.w5)((()=>["1"===e.data.freeshipping?((0,u.wg)(),(0,u.iD)("span",k,"Free AU")):(0,u.kq)("",!0)])),_:1},8,["imgUrl"]),(0,u._)("div",z,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(a.value,((e,t)=>((0,u.wg)(),(0,u.j4)(w,{key:e,imgUrl:e,class:(0,s.C_)({active:n.value===t}),onClick:e=>n.value=t},null,8,["imgUrl","class","onClick"])))),128))]),(0,u._)("h3",P,(0,s.zw)(e.data.title),1),(0,u._)("p",U,"$"+(0,s.zw)(e.data.price),1)])),_:1},8,["loading"])])}}};const A=(0,y.Z)(W,[["__scopeId","data-v-03cff055"]]);var C=A,O=a(2483);const j={class:"page__product-list"},E={class:"nav-bar"},H={class:"search-bar"},D={class:"list-content"},N=(0,u._)("div",{class:"compare-box"},"COMPARE PRODUCTS",-1),Z=(0,u._)("div",null,"You have no items to compare.",-1);var x={__name:"ProductView",setup(e){const t=(0,O.yj)();console.log(t);const a=[{title:"Home",to:"/"},...t.matched.filter((e=>!!e.meta?.title)).map((e=>({title:e.meta?.title,to:e.path===t.path?void 0:e.path})))],d=(0,c.iH)(Array.from({length:20}).fill({})),v=(0,c.iH)(""),g=(0,c.iH)("0"),m=(0,c.iH)(""),f=(0,c.iH)({page:1,pageSize:40,totalSize:1}),h=[{label:"Relevance",value:"0"},{label:"Bestseller",value:"1"},{label:"Availability",value:"2"},{label:"Name",value:"3"},{label:"Price",value:"4"}],y=[{label:"Free AU Shipping",value:"1"},{label:"Bulky Items",value:"2"},{label:"In Stock",value:"3"},{label:"Out Of Stock",value:"4"},{label:"Discontinued",value:"5"},{label:"Not On My SKU",value:"6"},{label:"Supplier SKU",value:"7"},{label:"New Aim SKU",value:"8"},{label:"NZ Available",value:"9"}],b=async()=>{const e=await p({keywords:v.value,page_no:f.value.page,limit:f.value.pageSize});d.value=e.result,f.value.totalSize=e.total},w=e=>{f.value.pageSize=e,f.value.page=1,b()},_=e=>{f.value.page=e,b()};return(0,u.bv)((async()=>{await b()})),(e,t)=>{const c=i.PJ,p=i.qc,v=o.BT,b=o.km,S=l.nH,k=l.ly,z=r.R,P=n.$t;return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u._)("div",j,[(0,u._)("nav",E,[(0,u.Wm)(p,{separator:"/"},{default:(0,u.w5)((()=>[((0,u.wg)(),(0,u.iD)(u.HY,null,(0,u.Ko)(a,(e=>(0,u.Wm)(c,{key:e.title,to:{path:e.to}},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.title),1)])),_:2},1032,["to"]))),64))])),_:1})]),(0,u._)("div",H,[(0,u.Wm)(k,{class:"search-form","label-width":"80"},{default:(0,u.w5)((()=>[(0,u.Wm)(S,{label:"Filter By"},{default:(0,u.w5)((()=>[(0,u.Wm)(b,{modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=e=>m.value=e),placeholder:"Please Select"},{default:(0,u.w5)((()=>[((0,u.wg)(),(0,u.iD)(u.HY,null,(0,u.Ko)(y,(e=>(0,u.Wm)(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1}),(0,u.Wm)(S,{label:"Sort By"},{default:(0,u.w5)((()=>[(0,u.Wm)(b,{modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=e=>g.value=e),placeholder:"Please Select"},{default:(0,u.w5)((()=>[((0,u.wg)(),(0,u.iD)(u.HY,null,(0,u.Ko)(h,(e=>(0,u.Wm)(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),(0,u.Wm)(z,{class:"header-pagination","current-page":f.value.age,"onUpdate:currentPage":t[2]||(t[2]=e=>f.value.age=e),"page-size":f.value.pageSize,"onUpdate:pageSize":t[3]||(t[3]=e=>f.value.pageSize=e),"pager-count":5,size:"small",layout:"total, prev, pager, next",total:f.value.totalSize,onSizeChange:w,onCurrentChange:_},null,8,["current-page","page-size","total"])]),(0,u._)("main",D,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(d.value,(e=>((0,u.wg)(),(0,u.j4)(C,{key:e.eancode,data:e},null,8,["data"])))),128))]),(0,u.Wm)(z,{class:"footer-pagination","current-page":f.value.age,"onUpdate:currentPage":t[4]||(t[4]=e=>f.value.age=e),"page-size":f.value.pageSize,"onUpdate:pageSize":t[5]||(t[5]=e=>f.value.pageSize=e),"page-sizes":[10,20,40,80],background:"","pager-count":5,layout:"total, sizes, prev, pager, next, jumper",total:f.value.totalSize,onSizeChange:w,onCurrentChange:_},null,8,["current-page","page-size","total"])]),(0,u.Wm)(P,{placement:"top-end",width:250,trigger:"click"},{reference:(0,u.w5)((()=>[N])),default:(0,u.w5)((()=>[Z])),_:1})],64)}}};const I=x;var T=I}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,l){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],l=e[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(i=!1,l<o&&(o=l));if(i){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,r,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/category.5f42e26e.js"}}(),function(){a.miniCssF=function(e){return"css/category.f8c40210.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="newaim:";a.l=function(n,r,l,o){if(e[n])e[n].push(r);else{var i,u;if(void 0!==l)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+l){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+l),i.src=n),e[n]=[r];var p=function(t,a){i.onerror=i.onload=null,clearTimeout(v);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,r){var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var o=function(a){if(l.onerror=l.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=i,l.parentNode&&l.parentNode.removeChild(l),r(u)}};return l.onerror=l.onload=o,l.href=t,a?a.parentNode.insertBefore(l,a.nextSibling):document.head.appendChild(l),l},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===e||l===t))return r}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){r=o[n],l=r.getAttribute("data-href");if(l===e||l===t)return r}},n=function(n){return new Promise((function(r,l){var o=a.miniCssF(n),i=a.p+o;if(t(o,i))return r();e(n,i,null,r,l)}))},r={143:0};a.f.miniCss=function(e,t){var a={34:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var l=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=l);var o=a.p+a.u(t),i=new Error,u=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var l=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+o+")",i.name="ChunkLoadError",i.type=l,i.request=o,r[1](i)}};a.l(o,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,o=n[0],i=n[1],u=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(u)var c=u(a)}for(t&&t(n);s<o.length;s++)l=o[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunknewaim"]=self["webpackChunknewaim"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2545)}));n=a.O(n)})();
//# sourceMappingURL=app.3c42cb69.js.map