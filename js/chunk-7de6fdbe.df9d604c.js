(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de6fdbe"],{"36bd":function(t,e,n){"use strict";var i=n("4bf8"),s=n("77f1"),a=n("9def");t.exports=function(t){var e=i(this),n=a(e.length),c=arguments.length,o=s(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,r=void 0===l?n:s(l,n);while(r>o)e[o++]=t;return e}},4938:function(t,e,n){"use strict";var i=n("51d8"),s=n.n(i);s.a},"51d8":function(t,e,n){},"6c7b":function(t,e,n){var i=n("5ca1");i(i.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},ef63:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"om",staticClass:"om"},[n("canvas",{attrs:{id:"canvas"}}),n("canvas",{attrs:{id:"canvas1"}}),n("div",{staticClass:"slider",on:{click:t.slide}},[t._v("slide")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"m",staticClass:"mm"},[n("div",{staticClass:"xp",on:{click:t.clear}},[t._v("clear")]),n("div",{staticClass:"xp",class:[1===t.index?"active":""],on:{click:function(e){return t.km(1)}}},[t._v("line")]),n("div",{staticClass:"xp",class:[2===t.index?"active":""],on:{click:function(e){return t.km(2)}}},[t._v("square")]),n("div",{staticClass:"xp",class:[3===t.index?"active":""],on:{click:function(e){return t.km(3)}}},[t._v("custom")]),n("div",{staticClass:"xp",class:[4===t.index?"active":""],on:{click:function(e){return t.km(4)}}},[t._v("round")]),n("div",{staticClass:"xp",class:[5===t.index?"active":""],on:{click:function(e){return t.km(5)}}},[t._v("clearJuBu")])]),n("div",{staticClass:"axios",on:{click:function(e){return t.getApi()}}},[t._v("axios")]),n("img",{attrs:{src:t.url}})])},s=[],a=(n("6c7b"),{data:function(){return{type:1,index:1,isOpen:!0,url:""}},methods:{getApi:function(){var t=this;this.$m.get("/qrcode/api",{params:{key:"934b96f0fba8ca31fd5aa4365eee4345",text:"songer",bgColor:"ffffff",type:1}}).then(function(t){if(200===t.status&&"success"===t.data.reason)return t.data.result}).then(function(e){console.log(e),t.url="data:image/png;base64,"+e.base64_image}).catch(function(t){console.log(t+"sssss")})},km:function(t){this.type=t,this.index=t},clear:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=this.$refs.om.clientWidth,i=this.$refs.om.clientHeight;e.clearRect(0,0,n,i)},slide:function(){var t=this.$refs.m.children;this.isOpen=!this.isOpen;for(var e=0;e<t.length;e++)t[e].style.transform="translateX(".concat(-60*e,"px)"),function(e){setTimeout(function(){console.log(e),t[e].style.transform="translateX(0px)",t[e].style.transition="all .2s linear"},200)}(e)}},mounted:function(){var t=document.getElementById("canvas1"),e=t.getContext("2d"),n=document.getElementById("canvas"),i=n.getContext("2d"),s=this.$refs.om.clientWidth,a=this.$refs.om.clientHeight;n.width=t.width=s,n.height=t.height=a;var c,o=!1,l={n:0,m:0},r=l.n,h=l.m,u=t.getBoundingClientRect(),d=0,v=0,f=0,p=0,m=0,g=0,k=this,y=0;t.onmousedown=function(){y=new Date,o=!0,f=r=event.clientX-u.left*(t.width/u.width),p=h=event.clientY-u.top*(t.height/u.height)},t.onmousemove=function(){d=event.clientX-u.left*(t.width/u.width),v=event.clientY-u.top*(t.height/u.height),e.strokeStyle="skyblue",5===k.type&&(e.clearRect(0,0,s,a),e.beginPath(),e.arc(d,v,50,0,2*Math.PI),e.fill(),e.closePath()),o&&(2===k.type&&(e.clearRect(0,0,s,a),e.strokeRect(f,p,d-r,v-h)),4===k.type&&(e.clearRect(0,0,s,a),e.lineWidth=1,e.beginPath(),e.arc(d,v,Math.abs((d+v-(r+h))/2),0,2*Math.PI),e.stroke(),e.closePath()),1===k.type&&(e.beginPath(),e.moveTo(r,h),e.lineTo(d,v),e.lineWidth=3,r=d,h=v,e.stroke()),3===k.type&&(i.beginPath(),i.moveTo(r,h),i.lineTo(d,v),i.lineWidth=1,r=d,h=v,i.stroke()),5===k.type&&(console.log(d,v),i.clearRect(d-50,v-50,50,50)))},t.onmouseup=function(){y=(new Date).getTime()-y.getTime(),o=!1,e.clearRect(0,0,s,a),m=d=event.clientX-u.left*(t.width/u.width),g=v=event.clientY-u.top*(t.height/u.height),1===k.type&&(i.beginPath(),i.moveTo(f,p),i.lineTo(m,g),i.stroke()),2===k.type&&i.strokeRect(f,p,d-r,v-h),4===k.type&&(i.beginPath(),i.arc(d,v,Math.abs((d+v-(r+h))/2),0,2*Math.PI),i.stroke(),i.closePath()),f=p=m=g=0},t.addEventListener("touchstart",function(t){t.preventDefault(),o=!0,c=t.touches[0],f=r=c.pageX,p=h=c.pageY}),t.addEventListener("touchmove",function(t){t.preventDefault(),c=t.touches[0],d=c.pageX,v=c.pageY,e.strokeStyle="skyblue",o&&(2===k.type&&(e.clearRect(0,0,s,a),e.strokeRect(f,p,d-r,v-h)),1===k.type&&(e.beginPath(),e.moveTo(r,h),e.lineTo(d,v),e.lineWidth=3,r=d,h=v,e.stroke()),3===k.type&&(i.beginPath(),i.moveTo(r,h),i.lineTo(d,v),i.lineWidth=1,r=d,h=v,i.stroke()))}),t.addEventListener("touchend",function(t){t.preventDefault(),o=!1,e.clearRect(0,0,s,a),m=d,g=v,1===k.type&&(i.beginPath(),i.moveTo(f,p),i.lineTo(m,g),i.stroke()),2===k.type&&i.strokeRect(f,p,d-r,v-h),f=p=m=g=0})}}),c=a,o=(n("4938"),n("2877")),l=Object(o["a"])(c,i,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7de6fdbe.df9d604c.js.map