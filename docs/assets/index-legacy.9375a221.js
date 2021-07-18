!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function t(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?e(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=document.createElement("style");o.innerHTML=".vue3-waterfall[data-v-34c9a3d0]{position:relative;width:100%;height:100%}.vue3-waterfall-scroller[data-v-34c9a3d0]{position:relative;width:100%;height:100%;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.vue3-waterfall-item[data-v-34c9a3d0]{position:absolute;box-sizing:border-box;box-shadow:0 2px 6px 0 rgb(0 0 0 / 10%)}.vue3-waterfall-item img[data-v-34c9a3d0]{display:block;width:100%;height:auto}.vue3-waterfall-item_footer[data-v-34c9a3d0]{overflow:hidden}.vue3-waterfall-item_footer .title[data-v-34c9a3d0]{margin:0}.vue3-waterfall-item_footer .info[data-v-34c9a3d0]{margin:0}.vue3-waterfall-loading[data-v-34c9a3d0]{position:absolute;bottom:15px;width:100%;text-align:center}.vue3-waterfall-nomore[data-v-34c9a3d0]{width:100%;text-align:center}#app,body,html{width:100%;height:100%}body{margin:0}#app{width:100%;margin:0 auto;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}.imgbox{border-radius:6px;overflow:hidden}.imgbox img{display:block;width:100%;box-sizing:border-box}",document.head.appendChild(o),System.register(["./vendor-legacy.bcefc4bd.js"],(function(){"use strict";var e,n,o,i,r,l,a,c,d,s,f,u,g,h,m,p,v,y,_,b,w,x,S;return{setters:[function(t){e=t.d,n=t.r,o=t.a,i=t.w,r=t.o,l=t.b,a=t.t,c=t.n,d=t.c,s=t.e,f=t.F,u=t.f,g=t.g,h=t.h,m=t.i,p=t.p,v=t.j,y=t.k,_=t.l,b=t.m,w=t.q,x=t.s,S=t.u}],execute:function(){var E=e({name:"VueWaterfall",props:{width:Number,height:Number,colWidth:Number,cols:Number,gap:{type:Number,default:15},footerHeight:{type:Number,default:0},list:{type:Array,default:function(){return[]}},nomore:{type:Boolean,default:!1},scrollDisabled:{type:Boolean,default:!1},scrollDelay:{type:Number,default:200},scrollDistance:{type:Number,default:0},scrollImmediate:{type:Boolean,default:!0}},setup:function(e,d){var s=n({containerWidth:e.width||0,colW:e.colWidth||240,colC:e.cols||0,beginIndex:0,heightArr:[],waterfallList:[],isPreloading:!1}),f=o(null),u=function(){if(!e.width){var t=document.querySelector("#waterfallBox");t&&(s.containerWidth=t.offsetWidth)}if(e.cols?s.colW=Math.floor((s.containerWidth-(e.cols-1)*e.gap)/e.cols):s.colC=Math.floor(s.containerWidth/(s.colW+e.gap)),0===s.beginIndex){s.waterfallList=[],s.heightArr=new Array(s.colC);for(var n=0;n<s.heightArr.length;n++)s.heightArr[n]=0}g()},g=function(){if(s.isPreloading||!e.list.length)return!1;s.isPreloading=!0;for(var t=function(t){var n=e.list[t],o=new Image;o.src=n.imgSrc,o.onload=o.onerror=function(i){var r=h();n._width=s.colW,n._height=Math.floor(s.colW*o.height/o.width+e.footerHeight),n._top=s.heightArr[r],n._left=r*(n._width+e.gap),s.heightArr[r]+=n._height+e.gap,s.waterfallList.push(n),"error"===i.type&&(n._error=!0,d.emit("imageError",n)),t===e.list.length-1&&(s.beginIndex=e.list.length,d.emit("preLoaded"),s.isPreloading=!1,e.scrollDisabled||e.scrollImmediate&&p())}},n=s.beginIndex;n<e.list.length;n++)t(n)},h=function(){var e=Math.min.apply(null,s.heightArr);return s.heightArr.indexOf(e)},m=function(){s.beginIndex=0,u()},p=function(){if(s.isPreloading||e.nomore)return!1;var t=f.value,n=Math.max.apply(null,s.heightArr);null!==t&&t.scrollTop+t.offsetHeight+e.gap>=n-e.scrollDistance&&(s.isPreloading=!0,d.emit("scrollReachBottom"))};return i((function(){return e.list}),(function(e,t){e.length?t&&t.length?t.length!==e.length&&(s.isPreloading=!1,g()):c((function(){u()})):(s.beginIndex=0,s.isPreloading=!1,u())}),{immediate:!0}),r((function(){window.addEventListener("resize",m),e.scrollDisabled||null===f.value||f.value.addEventListener("scroll",p)})),l((function(){window.removeEventListener("resize",m)})),t(t(t({},a(s)),a(e)),{},{scrollElRef:f})}}),P=m();p("data-v-34c9a3d0");var O={class:"vue3-waterfall",id:"waterfallBox"},W={class:"vue3-waterfall-scroller",ref:"scrollElRef"},M={class:"vue3-waterfall-item_image"},j={class:"title"},A={class:"info"},D={key:0,class:"vue3-waterfall-loading"},I=b(" 加载中... "),L={key:1,class:"vue3-waterfall-nomore"},k=b(" 没有更多数据了 ");v();var R=P((function(e,t,n,o,i,r){return y(),d("div",O,[s("div",W,[(y(!0),d(f,null,u(e.waterfallList,(function(t,n){return y(),d("div",{key:n,class:"vue3-waterfall-item",style:{top:t._top+"px",left:t._left+"px",width:t._width+"px",height:t._height+"px"}},[s("div",M,[g(e.$slots,"default",{item:t},(function(){return[s("img",{src:t.imgSrc},null,8,["src"])]}),!0)]),s("div",{class:"vue3-waterfall-item_footer",style:{height:e.footerHeight+"px"}},[g(e.$slots,"footer",{item:t},(function(){return[s("p",j,_(t.title),1),s("p",A,_(t.info),1)]}),!0)],4)],4)})),128))],512),e.isPreloading&&!e.nomore?(y(),d("div",D,[g(e.$slots,"loading",{},(function(){return[I]}),{})])):h("",!0),e.nomore?(y(),d("div",L,[g(e.$slots,"nomore",{},(function(){return[k]}),{})])):h("",!0)])}));E.render=R,E.__scopeId="data-v-34c9a3d0";var B=e({name:"App",data:function(){return{list:[],noMore:!1}},components:{Waterfall:E},methods:{loadMore:function(){var e=this;this.noMore||setTimeout((function(){e.list=e.list.concat([{id:11,imgSrc:"https://cdn.xnycloud.com/xny-data/_b6314ece09.png",title:"111",info:"222"},{id:12,imgSrc:"https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png",title:"111",info:"222"},{id:13,imgSrc:"https://cdn.xnycloud.com/xny-data/2060_df48245eba.png",title:"111",info:"222"}]),e.list.length>=13&&(e.noMore=!0)}),1e3)},loadedEnd:function(){console.log("图片预加载完成")}},mounted:function(){var e=this;setTimeout((function(){e.list=[{id:1,imgSrc:"https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png",title:"1",info:"222"},{id:2,imgSrc:"https://cdn.xnycloud.com/xny-data/_d53e0ea860.png",title:"6",info:"222"},{id:3,imgSrc:"https://cdn.xnycloud.com/xny-data/_b6314ece09.png",title:"4",info:"222"},{id:4,imgSrc:"https://cdn.xnycloud.com/xny-data/_f26d6f3e95.png",title:"111",info:"222"},{id:5,imgSrc:"https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png",title:"111",info:"222"},{id:6,imgSrc:"https://cdn.xnycloud.com/xny-data/Renewable_Power_Generation_Costs_in_2020_614291a015.png",title:"111",info:"222"},{id:7,imgSrc:"https://cdn.xnycloud.com/xny-data/_8fa7009f0b.png",title:"111",info:"222"},{id:8,imgSrc:"https://cdn.xnycloud.com/xny-data/_b6314ece09.png",title:"111",info:"222"},{id:9,imgSrc:"https://cdn.xnycloud.com/xny-data/Financing_Clean_Energy_Transitionsin_EMD_Es_World_Energy_Investment_2021_Special_Report_29174d6289.png",title:"111",info:"222"},{id:10,imgSrc:"https://cdn.xnycloud.com/xny-data/2060_df48245eba.png",title:"111",info:"222"}]}),3e3)}}),C={class:"imgbox"},N=s("span",null,"正在拼命加载中...",-1),H=s("span",null,"没有更多数据了...",-1);B.render=function(e,t,n,o,i,r){var l=x("waterfall");return y(),d(l,{list:e.list,cols:4,footerHeight:0,gap:15,scrollDistance:10,nomore:e.noMore,onPreLoaded:e.loadedEnd,onScrollReachBottom:e.loadMore},{default:w((function(e){var t=e.item;return[s("div",C,[s("img",{src:t.imgSrc,alt:t.title},null,8,["src","alt"])])]})),footer:w((function(e){var t=e.item;return[s("span",null,_(t.id),1)]})),loading:w((function(){return[N]})),nomore:w((function(){return[H]})),_:1},8,["list","nomore","onPreLoaded","onScrollReachBottom"])},S(B).mount("#app")}}}))}();
