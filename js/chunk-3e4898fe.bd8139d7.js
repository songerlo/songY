(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e4898fe"],{"36bd":function(t,i,e){"use strict";var n=e("4bf8"),h=e("77f1"),s=e("9def");t.exports=function(t){var i=n(this),e=s(i.length),a=arguments.length,c=h(a>1?arguments[1]:void 0,e),r=a>2?arguments[2]:void 0,o=void 0===r?e:h(r,e);while(o>c)i[c++]=t;return i}},"454f":function(t,i,e){e("46a7");var n=e("584a").Object;t.exports=function(t,i,e){return n.defineProperty(t,i,e)}},"46a7":function(t,i,e){var n=e("63b6");n(n.S+n.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"4d34":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("canvas",{attrs:{id:"canvasG"}})])}],s=(e("c7c6"),e("6c7b"),e("d225")),a=e("b0b4"),c=(e("d68e"),function(){function t(){Object(s["a"])(this,t)}return Object(a["a"])(t,[{key:"init",value:function(t){this.canvas=t.canvas,this.ctx=this.canvas.getContext("2d"),this.width=t.width,this.height=t.height}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"render",value:function(){this.clear(),this.ctx.beginPath(),this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.closePath()}}]),t}()),r=new c,o=function(){function t(i,e){Object(s["a"])(this,t),this.x=i,this.y=e,this.hited=!1,this.width=3*Math.random(),this.speed=3*Math.random()}return Object(a["a"])(t,[{key:"update",value:function(){this.x-=this.speed,this.y+=this.speed,this.x<-10&&(this.x=r.width+10+30*Math.random()),this.y>r.height+10&&(this.y=30*Math.random()-10)}},{key:"render",value:function(){r.ctx.beginPath(),r.ctx.fillStyle="white",r.ctx.arc(this.x,this.y,4,0,2*Math.PI),r.ctx.fill()}}]),t}(),u=o,d=Math.random,f=function(){function t(i){Object(s["a"])(this,t),this.x=i.x,this.y=i.y,this.size=i.size||2,this.color=i.color||"#fff",this.vx=4*d()-2,this.vy=4*d()-2,this.destory=!1,this.width=this.size+2*d(),this.height=this.size+2*d(),this.speed=.04}return Object(a["a"])(t,[{key:"update",value:function(){this.x+=this.vx,this.y+=this.vy,this.width-=this.speed,this.height-=this.speed,this.width<0&&(this.destory=!0)}},{key:"render",value:function(){r.ctx.fillStyle=this.color,r.ctx.fillRect(this.x,this.y,this.width,this.height)}}]),t}(),l={data:function(){return{enemys:[],self:{},a:[],x:0,y:0}},mounted:function(){var t=this,i=document.getElementById("canvasG"),e=window.innerWidth,n=window.innerHeight;i.width=e,i.height=n,r.init({canvas:i,width:e,height:n});var h=function(i){for(var e=0;e<i;e++){var n=Math.random()*r.width+r.width,h=Math.random()*r.height;t.enemys.push(new u(n,h))}};h(200),this.animated(),window.addEventListener("mousemove",function(i){i.preventDefault(),t.x=i.clientX,t.y=i.clientY})},methods:{animated:function(){r.render(),r.ctx.fillStyle="red",r.ctx.arc(this.x,this.y,100,0,2*Math.PI),r.ctx.fill();for(var t=0;t<this.enemys.length;t++){this.enemys[t].render(),this.enemys[t].update();var i=this.x-this.enemys[t].x,e=this.y-this.enemys[t].y;if(Math.hypot(i,e)<=104){this.enemys.splice(t,1),this.enemys.push(new u({x:Math.random()*r.width+r.width,y:Math.random()*r.height}));for(t=0;t<20;t++)this.a.push(new f({x:this.x,y:this.y}))}}for(var n=0;n<this.a.length;n++)1==this.a[n].destory?this.a.splice(n,1):(this.a[n].render(),this.a[n].update());requestAnimationFrame(this.animated)}}},y=l,v=(e("c46b"),e("2877")),x=Object(v["a"])(y,n,h,!1,null,null,null);i["default"]=x.exports},"4fa5":function(t,i,e){},"6c7b":function(t,i,e){var n=e("5ca1");n(n.P,"Array",{fill:e("36bd")}),e("9c6c")("fill")},"85f2":function(t,i,e){t.exports=e("454f")},b0b4:function(t,i,e){"use strict";e.d(i,"a",function(){return a});var n=e("85f2"),h=e.n(n);function s(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),h()(t,n.key,n)}}function a(t,i,e){return i&&s(t.prototype,i),e&&s(t,e),t}},c46b:function(t,i,e){"use strict";var n=e("4fa5"),h=e.n(n);h.a},c7c6:function(t,i,e){var n=e("5ca1"),h=Math.abs;n(n.S,"Math",{hypot:function(t,i){var e,n,s=0,a=0,c=arguments.length,r=0;while(a<c)e=h(arguments[a++]),r<e?(n=r/e,s=s*n*n+1,r=e):e>0?(n=e/r,s+=n*n):s+=e;return r===1/0?1/0:r*Math.sqrt(s)}})},d225:function(t,i,e){"use strict";function n(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}e.d(i,"a",function(){return n})},d68e:function(t,i,e){t.exports=e.p+"img/bg.c35a9cdc.png"}}]);
//# sourceMappingURL=chunk-3e4898fe.bd8139d7.js.map