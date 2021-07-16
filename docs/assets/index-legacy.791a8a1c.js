!function(){function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function e(e){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=document.createElement("style");i.innerHTML=".vue3-waterfall[data-v-03f14f6f]{position:relative;width:100%;height:100%}.vue3-waterfall-scroller[data-v-03f14f6f]{position:relative;width:100%;height:100%;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.vue3-waterfall-item[data-v-03f14f6f]{position:absolute;box-sizing:border-box;box-shadow:0 2px 6px 0 rgb(0 0 0 / 10%)}.vue3-waterfall-item img[data-v-03f14f6f]{display:block;width:100%;height:auto}.vue3-waterfall-item_footer[data-v-03f14f6f]{overflow:hidden}.vue3-waterfall-item_footer .title[data-v-03f14f6f]{margin:0}.vue3-waterfall-item_footer .info[data-v-03f14f6f]{margin:0}.vue3-waterfall-loading[data-v-03f14f6f]{position:absolute;bottom:15px;width:100%;text-align:center}#app,body,html{width:100%;height:100%}body{margin:0}#app{width:100%;margin:0 auto;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}.imgbox{border-radius:6px;overflow:hidden}.imgbox img{display:block;width:100%;box-sizing:border-box}",document.head.appendChild(i),System.register(["./vendor-legacy.bcefc4bd.js"],(function(){"use strict";var t,n,i,o,r,l,a,c,d,s,f,u,g,h,p,m,v,y,_,b,w,x,S;return{setters:[function(e){t=e.d,n=e.r,i=e.a,o=e.w,r=e.o,l=e.b,a=e.t,c=e.n,d=e.c,s=e.e,f=e.F,u=e.f,g=e.g,h=e.h,p=e.i,m=e.p,v=e.j,y=e.k,_=e.l,b=e.m,w=e.q,x=e.s,S=e.u}],execute:function(){var E=t({name:"VueWaterfall",props:{width:Number,height:Number,colWidth:Number,cols:Number,gap:{type:Number,default:15},footerHeight:{type:Number,default:0},list:{type:Array,default:function(){return[]}},scrollDisabled:{type:Boolean,default:!1},scrollDelay:{type:Number,default:200},scrollDistance:{type:Number,default:0},scrollImmediate:{type:Boolean,default:!0}},setup:function(t,d){var s=n({containerWidth:t.width||0,colW:t.colWidth||240,colC:t.cols||0,beginIndex:0,heightArr:[],waterfallList:[],isPreloading:!1}),f=i(null),u=function(){if(!t.width){var e=document.querySelector("#waterfallBox");e&&(s.containerWidth=e.offsetWidth)}if(t.cols?s.colW=Math.floor((s.containerWidth-(t.cols-1)*t.gap)/t.cols):s.colC=Math.floor(s.containerWidth/(s.colW+t.gap)),0===s.beginIndex){s.waterfallList=[],s.heightArr=new Array(s.colC);for(var n=0;n<s.heightArr.length;n++)s.heightArr[n]=0}g()},g=function(){if(s.isPreloading||!t.list.length)return!1;s.isPreloading=!0;for(var e=function(e){var n=t.list[e],i=new Image;i.src=n.imgSrc,i.onload=i.onerror=function(o){var r=h();n._width=s.colW,n._height=Math.floor(s.colW*i.height/i.width+t.footerHeight),n._top=s.heightArr[r],n._left=r*(n._width+t.gap),s.heightArr[r]+=n._height+t.gap,s.waterfallList.push(n),"error"===o.type&&(n._error=!0,d.emit("imageError",n)),e===t.list.length-1&&(s.beginIndex=t.list.length,d.emit("preLoaded"),s.isPreloading=!1,t.scrollDisabled||t.scrollImmediate&&m())}},n=s.beginIndex;n<t.list.length;n++)e(n)},h=function(){var t=Math.min.apply(null,s.heightArr);return s.heightArr.indexOf(t)},p=function(){s.beginIndex=0,u()},m=function(){if(s.isPreloading)return!1;var e=f.value,n=Math.max.apply(null,s.heightArr);null!==e&&e.scrollTop+e.offsetHeight+t.gap>=n-t.scrollDistance&&(s.isPreloading=!0,d.emit("scrollReachBottom"))};return o((function(){return t.list}),(function(t,e){t.length?e&&e.length?e.length!==t.length&&(s.isPreloading=!1,g()):(console.log("watch了！ ",t,e),c((function(){u()}))):(s.beginIndex=0,s.isPreloading=!1,u())}),{immediate:!0}),r((function(){window.addEventListener("resize",p),t.scrollDisabled||null===f.value||f.value.addEventListener("scroll",m)})),l((function(){window.removeEventListener("resize",p)})),e(e(e({},a(s)),a(t)),{},{scrollElRef:f})}}),P=p();m("data-v-03f14f6f");var O={class:"vue3-waterfall",id:"waterfallBox"},W={class:"vue3-waterfall-scroller",ref:"scrollElRef"},j={class:"vue3-waterfall-item_image"},A={class:"title"},D={class:"info"},I={key:0,class:"vue3-waterfall-loading"},L=b(" 加载中... ");v();var M=P((function(t,e,n,i,o,r){return y(),d("div",O,[s("div",W,[(y(!0),d(f,null,u(t.waterfallList,(function(e,n){return y(),d("div",{key:n,class:"vue3-waterfall-item",style:{top:e._top+"px",left:e._left+"px",width:e._width+"px",height:e._height+"px"}},[s("div",j,[g(t.$slots,"default",{item:e},(function(){return[s("img",{src:e.imgSrc},null,8,["src"])]}),!0)]),s("div",{class:"vue3-waterfall-item_footer",style:{height:t.footerHeight+"px"}},[g(t.$slots,"footer",{item:e},(function(){return[s("p",A,_(e.title),1),s("p",D,_(e.info),1)]}),!0)],4)],4)})),128))],512),t.isPreloading?(y(),d("div",I,[g(t.$slots,"loading",{},(function(){return[L]}),{})])):h("",!0)])}));E.render=M,E.__scopeId="data-v-03f14f6f";var R=t({name:"App",data:function(){return{list:[]}},components:{Waterfall:E},methods:{loadMore:function(){var t=this;this.list.length>100&&(this.list=[]),setTimeout((function(){t.list=t.list.concat([{id:11,imgSrc:"https://cdn.xnycloud.com/xny-data/_b6314ece09.png",title:"111",info:"222"},{id:12,imgSrc:"https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png",title:"111",info:"222"},{id:13,imgSrc:"https://cdn.xnycloud.com/xny-data/2060_df48245eba.png",title:"111",info:"222"}])}),1e3)},loadedEnd:function(){console.log("图片预加载完成")}},mounted:function(){var t=this;setTimeout((function(){t.list=[{id:1,imgSrc:"https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png",title:"1",info:"222"},{id:2,imgSrc:"https://cdn.xnycloud.com/xny-data/_d53e0ea860.png",title:"6",info:"222"},{id:3,imgSrc:"https://cdn.xnycloud.com/xny-data/_b6314ece09.png",title:"4",info:"222"},{id:4,imgSrc:"https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png",title:"111",info:"222"},{id:5,imgSrc:"https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png",title:"111",info:"222"},{id:6,imgSrc:"https://cdn.xnycloud.com/xny-data/Renewable_Power_Generation_Costs_in_2020_614291a015.png",title:"111",info:"222"},{id:7,imgSrc:"https://cdn.xnycloud.com/xny-data/_8fa7009f0b.png",title:"111",info:"222"},{id:8,imgSrc:"https://cdn.xnycloud.com/xny-data/_b6314ece09.png",title:"111",info:"222"},{id:9,imgSrc:"https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png",title:"111",info:"222"},{id:10,imgSrc:"https://cdn.xnycloud.com/xny-data/2060_df48245eba.png",title:"111",info:"222"}]}),3e3)}}),k={class:"imgbox"},C=s("span",null,"正在拼命加载中...",-1);R.render=function(t,e,n,i,o,r){var l=x("waterfall");return y(),d(l,{list:t.list,cols:4,footerHeight:0,gap:15,scrollDistance:10,onPreLoaded:t.loadedEnd,onScrollReachBottom:t.loadMore},{default:w((function(t){var e=t.item;return[s("div",k,[s("img",{src:e.imgSrc,alt:e.title},null,8,["src","alt"])])]})),footer:w((function(t){var e=t.item;return[s("span",null,_(e.id),1)]})),loading:w((function(){return[C]})),_:1},8,["list","onPreLoaded","onScrollReachBottom"])},S(R).mount("#app")}}}))}();
