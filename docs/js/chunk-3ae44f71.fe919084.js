(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae44f71"],{"1dde":function(t,e,s){var i=s("d039"),r=s("b622"),n=s("2d00"),a=r("species");t.exports=function(t){return n>=51||!i((function(){var e=[],s=e.constructor={};return s[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2d00":function(t,e,s){var i,r,n=s("da84"),a=s("342f"),o=n.process,c=o&&o.versions,l=c&&c.v8;l?(i=l.split("."),r=i[0]+i[1]):a&&(i=a.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=a.match(/Chrome\/(\d+)/),i&&(r=i[1]))),t.exports=r&&+r},"342f":function(t,e,s){var i=s("d066");t.exports=i("navigator","userAgent")||""},3590:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"gameName"},[t._v("数字按序点击")]),s("p",{staticClass:"description"},[t._v("说明：在随机生成的方框中按顺序点击从1到25，准确且用时越短越好。")]),s("div",{staticClass:"btnBox"},[s("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.init}},[t._v("生成")])],1),s("div",{staticClass:"resultBox"},[s("div",{staticClass:"result"},[t._v(t._s(t.resultTime))]),s("div",{staticClass:"tempResult"},[s("span",{style:"顺序正确"==t.answer?{color:"green"}:{color:"red"}},[t._v(t._s(t.answer))])])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.datas.length>0,expression:"datas.length>0"}],staticClass:"box"},t._l(t.datas,(function(e,i){return s("li",{key:i},[s("van-button",{class:e<t.result?"clicked":"",attrs:{type:"primary"},on:{click:function(s){return t.check(e)}}},[t._v(t._s(e))])],1)})),0)])},r=[],n=(s("a434"),{name:"OrderClick",data:function(){return{level:0,datas:[],result:1,col:0,answer:"",success:0,fail:0,time:"",begiTime:null,timer:null,finished:!1,resultTime:""}},methods:{init:function(){this.timer&&clearInterval(this.timer);var t=1,e=[];do{e.push(t),t++}while(t<26);for(var s=new Array(25),i=0;i<25;i++){var r=Math.floor(Math.random()*e.length);s[i]=e[r],e.splice(r,1)}this.datas=s,this.answer="",this.finished=!1,this.level=this.level+1,this.beginTime=new Date,this.time=new Date,this.resultTime="",this.result=1,this.timer=setInterval(this.timeUpdate,1e3)},check:function(t){var e=this;if(t<this.result)return!1;t==this.result&&25==this.result?(console.log("清除定时器"),clearInterval(this.timer),this.answer="本局完成",this.result++,this.success=this.success+1,this.finished=!0):(t==this.result?(this.answer="顺序正确",this.result++,this.success=this.success+1):(this.answer="不对",this.fail=this.fail+1),setTimeout((function(){e.answer=""}),1e3))},timeUpdate:function(){if(this.finished&&this.timer)clearInterval(this.timer);else{var t=(new Date).valueOf()-this.beginTime.valueOf(),e=parseInt(t%36e5/6e4),s=Math.floor(t%6e4/1e3);this.resultTime=e+"分"+s+"秒"}}},beforeDestroy:function(){clearInterval(this.timer)}}),a=n,o=(s("86ac"),s("2877")),c=Object(o["a"])(a,i,r,!1,null,"53a730ea",null);e["default"]=c.exports},"35b6":function(t,e,s){},"65f0":function(t,e,s){var i=s("861d"),r=s("e8b5"),n=s("b622"),a=n("species");t.exports=function(t,e){var s;return r(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!r(s.prototype)?i(s)&&(s=s[a],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},8418:function(t,e,s){"use strict";var i=s("c04e"),r=s("9bf2"),n=s("5c6c");t.exports=function(t,e,s){var a=i(e);a in t?r.f(t,a,n(0,s)):t[a]=s}},"86ac":function(t,e,s){"use strict";var i=s("35b6"),r=s.n(i);r.a},a434:function(t,e,s){"use strict";var i=s("23e7"),r=s("23cb"),n=s("a691"),a=s("50c4"),o=s("7b0b"),c=s("65f0"),l=s("8418"),u=s("1dde"),h=s("ae40"),f=u("splice"),v=h("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,p=Math.min,m=9007199254740991,w="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,e){var s,i,u,h,f,v,b=o(this),g=a(b.length),y=r(t,g),C=arguments.length;if(0===C?s=i=0:1===C?(s=0,i=g-y):(s=C-2,i=p(d(n(e),0),g-y)),g+s-i>m)throw TypeError(w);for(u=c(b,i),h=0;h<i;h++)f=y+h,f in b&&l(u,h,b[f]);if(u.length=i,s<i){for(h=y;h<g-i;h++)f=h+i,v=h+s,f in b?b[v]=b[f]:delete b[v];for(h=g;h>g-i+s;h--)delete b[h-1]}else if(s>i)for(h=g-i;h>y;h--)f=h+i-1,v=h+s-1,f in b?b[v]=b[f]:delete b[v];for(h=0;h<s;h++)b[h+y]=arguments[h+2];return b.length=g-i+s,u}})},ae40:function(t,e,s){var i=s("83ab"),r=s("d039"),n=s("5135"),a=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(n(o,t))return o[t];e||(e={});var s=[][t],l=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:c,h=n(e,1)?e[1]:void 0;return o[t]=!!s&&!r((function(){if(l&&!i)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:c}):t[1]=1,s.call(t,u,h)}))}},e8b5:function(t,e,s){var i=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);