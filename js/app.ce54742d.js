(function(n){function e(e){for(var o,r,c=e[0],i=e[1],s=e[2],l=0,f=[];l<c.length;l++)r=c[l],a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o]);d&&d(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var n,e=0;e<u.length;e++){for(var t=u[e],o=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(o=!1)}o&&(u.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={app:0},a={app:0},u=[];function c(n){return i.p+"js/"+({about:"about"}[n]||n)+"."+{about:"1602ce2b","chunk-3e4898fe":"bd8139d7","chunk-6132c63c":"bb075f61","chunk-6555b315":"418964de","chunk-6652b7dc":"f6cf14c4","chunk-7026b5b4":"9e76ea33","chunk-7082667b":"6e09a1e4","chunk-76f24cf0":"627d39b9","chunk-7de6fdbe":"df9d604c","chunk-912c2d52":"76bc65ff","chunk-966408e6":"62223478"}[n]+".js"}function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-3e4898fe":1,"chunk-6652b7dc":1,"chunk-7026b5b4":1,"chunk-7082667b":1,"chunk-76f24cf0":1,"chunk-7de6fdbe":1,"chunk-912c2d52":1,"chunk-966408e6":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise(function(e,t){for(var o="css/"+({about:"about"}[n]||n)+"."+{about:"31d6cfe0","chunk-3e4898fe":"dd71a01f","chunk-6132c63c":"31d6cfe0","chunk-6555b315":"31d6cfe0","chunk-6652b7dc":"53e824e8","chunk-7026b5b4":"bc42f24a","chunk-7082667b":"e18400e9","chunk-76f24cf0":"40a73950","chunk-7de6fdbe":"5879f3dc","chunk-912c2d52":"77bb50e6","chunk-966408e6":"07c885af"}[n]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+n+" failed.\n("+o+")");u.request=o,delete r[n],d.parentNode.removeChild(d),t(u)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[n]=0}));var o=a[n];if(0!==o)if(o)e.push(o[2]);else{var u=new Promise(function(e,t){o=a[n]=[e,t]});e.push(o[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(n),s=function(e){l.onerror=l.onload=null,clearTimeout(f);var t=a[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,u=new Error("Loading chunk "+n+" failed.\n("+o+": "+r+")");u.type=o,u.request=r,t[1](u)}a[n]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/songY/",i.oe=function(n){throw console.error(n),n};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;u.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"46a0":function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[n._v("防抖和节流")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/about"}},[n._v("call,apply")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/canvas1"}},[n._v("canvas1")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/canvas2"}},[n._v("canvas2")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/canvas3"}},[n._v("canvas3")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/canvasGame"}},[n._v("canvasGame")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/com"}},[n._v("com")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/canvasChoose"}},[n._v("canvasChoose")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/imgCanvas"}},[n._v("imgCanvas")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/twoColor"}},[n._v("twoColorBall")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/cssSkills"}},[n._v("css技巧")]),n._v(" |\n    "),t("router-link",{attrs:{to:"/customer"}},[n._v("客户中心")])],1),t("router-view")],1)},a=[],u=(t("5c0b"),t("2877")),c={},i=Object(u["a"])(c,r,a,!1,null,null,null),s=i.exports,l=t("8c4f"),f=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"home"},[t("div",{on:{click:n.chang}},[n._v("改变")]),t("HelloWorld",{attrs:{msg:"Vue.js"}})],1)},d=[],h=(t("7f7f"),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"hello"},[t("div",[n._v(n._s(n.theme.name))]),t("h1",[n._v(n._s(n.msg))]),t("input",{attrs:{type:"text",id:"inp"}})])}),p=[],v={inject:{theme:{default:function(){return{}}}},props:{msg:String},data:function(){return{}},methods:{debounce:function(n){var e=null;return function(){var t=this,o=arguments;clearTimeout(e),e=setTimeout(function(){n.apply(t,o)},500)}},say:function(){console.log("1")},throttle:function(n){var e=!0;return function(){var t=this,o=arguments;e&&(e=!1,setTimeout(function(){n.apply(t,o),e=!0},1e3))}},sayM:function(n){console.log(n),console.log(n.target.innerWidth,n.target.innerHeight)}},mounted:function(){var n=document.getElementById("inp");n.addEventListener("input",this.debounce(this.say)),window.addEventListener("resize",this.throttle(this.sayM))}},m=v,b=(t("a4c4"),Object(u["a"])(m,h,p,!1,null,"32d3a623",null)),k=b.exports,g={name:"home",components:{HelloWorld:k},data:function(){return{name:"sss"}},methods:{chang:function(){this.name="songduoduo"===this.name?"wangyuming":"songduoduo"}},provide:function(){return{theme:this}},beforeMount:function(){console.log(this.$plug)}},_=g,y=Object(u["a"])(_,f,d,!1,null,"a8557e84",null),w=y.exports;o["default"].use(l["a"]);var C=new l["a"]({base:"/songY/",routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/canvas1",name:"canvas1",component:function(){return t.e("chunk-912c2d52").then(t.bind(null,"58f3"))}},{path:"/canvas2",name:"canvas2",component:function(){return t.e("chunk-6132c63c").then(t.bind(null,"c98a"))}},{path:"/canvas3",name:"canvas3",component:function(){return t.e("chunk-7026b5b4").then(t.bind(null,"6e81"))}},{path:"/canvasGame",name:"canvasGame",component:function(){return t.e("chunk-3e4898fe").then(t.bind(null,"4d34"))}},{path:"/com",name:"com",component:function(){return t.e("chunk-966408e6").then(t.bind(null,"705a"))}},{path:"/canvasChoose",name:"canvasChoose",component:function(){return t.e("chunk-7de6fdbe").then(t.bind(null,"ef63"))}},{path:"/imgCanvas",name:"imgCanvas",component:function(){return t.e("chunk-76f24cf0").then(t.bind(null,"93da"))}},{path:"/twoColor",name:"twoColor",component:function(){return t.e("chunk-7082667b").then(t.bind(null,"c7ca"))}},{path:"/cssSkills",name:"cssSkills",component:function(){return t.e("chunk-6652b7dc").then(t.bind(null,"c65d"))}},{path:"/customer",name:"customer",component:function(){return t.e("chunk-6555b315").then(t.bind(null,"656d"))}}]}),j=t("2f62");o["default"].use(j["a"]);var E=new j["a"].Store({state:{},mutations:{},actions:{}}),O=t("5c96"),S=t.n(O),x=(t("0fae"),t("bc3a")),T=t.n(x),P={install:function(n,e){n.plug="plug",Object.defineProperty(n.prototype,"$plug",{value:n.plug})}},M=P;o["default"].prototype.$m=T.a,o["default"].use(S.a),o["default"].use(M),o["default"].config.productionTip=!1,new o["default"]({router:C,store:E,render:function(n){return n(s)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var o=t("5e27"),r=t.n(o);r.a},"5e27":function(n,e,t){},a4c4:function(n,e,t){"use strict";var o=t("46a0"),r=t.n(o);r.a}});
//# sourceMappingURL=app.ce54742d.js.map