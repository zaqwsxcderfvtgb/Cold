Cold.add("anim",["dom"],function(){var e=Cold.dom.$E,n=Cold.dom.css,t=Cold.dom.create,s=Cold.dom.isStyle,h=Cold.dom.getXY,f=1.70158,r=function(){},k=Date.now||function(){return +new Date};var d={linear:function(v){return v},easeIn:function(v){return v*v},easeOut:function(v){return(2-v)*v},easeBoth:function(v){return(v*=2)<1?0.5*v*v:0.5*(1-(--v)*(v-2))},easeInStrong:function(v){return v*v*v*v},easeOutStrong:function(v){return 1-(--v)*v*v*v},easeBothStrong:function(v){return(v*=2)<1?0.5*v*v*v*v:0.5*(2-(v-=2)*v*v*v)},elasticIn:function(v){var x=0.3,w=x/4;if(v===0||v===1){return v}return -(Math.pow(2,10*(v-=1))*Math.sin((v-w)*(2*Math.PI)/x))},elasticOut:function(v){var x=0.3,w=x/4;if(v===0||v===1){return v}return Math.pow(2,-10*v)*Math.sin((v-w)*(2*Math.PI)/x)+1},elasticBoth:function(v){var x=0.45,w=x/4;if(v===0||(v*=2)===2){return v}if(v<1){return -0.5*(Math.pow(2,10*(v-=1))*Math.sin((v-w)*(2*Math.PI)/x))}return Math.pow(2,-10*(v-=1))*Math.sin((v-w)*(2*Math.PI)/x)*0.5+1},backIn:function(v){if(v===1){v-=0.001}return v*v*((f+1)*v-f)},backOut:function(v){return(v-=1)*v*((f+1)*v+f)+1},backBoth:function(v){if((v*=2)<1){return 0.5*(v*v*(((f*=(1.525))+1)*v-f))}return 0.5*((v-=2)*v*(((f*=(1.525))+1)*v+f)+2)},bounceIn:function(v){return 1-d.bounceOut(1-v)},bounceOut:function(v){var w=7.5625,x;if(v<(1/2.75)){x=w*v*v}else{if(v<(2/2.75)){x=w*(v-=(1.5/2.75))*v+0.75}else{if(v<(2.5/2.75)){x=w*(v-=(2.25/2.75))*v+0.9375}else{x=w*(v-=(2.625/2.75))*v+0.984375}}}return x},bounceBoth:function(v){if(v<0.5){return d.bounceIn(v*2)*0.5}return d.bounceOut(v*2-1)*0.5+0.5}};var g={re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i,getRGB:function(v){if(g.re_hex.exec(v)){v="rgb("+[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)].join(", ")+")"}else{if(g.re_hex3.exec(v)){v="rgb("+[parseInt(RegExp.$1+RegExp.$1,16),parseInt(RegExp.$2+RegExp.$2,16),parseInt(RegExp.$3+RegExp.$3,16)].join(", ")+")"}}return v},isColorStyle:function(w){var v=/backgroundColor|borderBottomColor|borderLeftColor|borderRightColor|borderTopColor|color|outlineColor/i;return v.test(w)},init:function(x,z,C){var B,A,w,y,v=g.re_RGB;w=g.getRGB(n(x,z));w=w.match(v);B=[parseInt(w[1],10),parseInt(w[2],10),parseInt(w[3],10)];y=g.getRGB(C);y=y.match(v);A=[parseInt(y[1],10),parseInt(y[2],10),parseInt(y[3],10)];return[B,A]}};var u=function(){this.init.apply(this,arguments)};var j=function(){var v="transition",y=t("div"),x=["Webkit","Moz","O"];if(y.style[v]===undefined){for(var w=0;w<x.length;w++){if(y.style[v=x[w]+"Transition"]!==undefined){return v}}return null}return"transition"};u.DefaultOption={fps:25,duration:1000,onStart:r,onComplete:r,easing:"linear",css3support:true};u.prototype=(function(){return{init:function(x,w,v){this.el=e(x);this.props=w||{};this.from={};this.to={};this.unit={};v=v||{};v=Cold.extend(v,u.DefaultOption);Cold.extend(this,v,true);if(this.css3support){if(/^(linear|easeIn|easeOut|easeInOut|cubic-bezier\(.*\))$/.test(this.easing)){this.transitionName=j()}if(this.transitionName==="MozTransition"){for(var y in this.props){if(/top|left|right|bottom/i.test(y)&&!this.el.style[y]){n(this.el,y,n(this.el,y))}}}if(this.transitionName){this.el.css3AnimNum||this.el.css3AnimNum===1?this.el.css3AnimNum++:(this.el.css3AnimNum=1)}}},initData:function(){this.begin=k();this.end=this.begin+this.duration;for(var w in this.props){var y=this.props[w],v=Cold.isString(y)?y.match(/^(-?\d*)(\.\d*)?(.*)$/):y;if(g.isColorStyle(w)){var x=g.init(this.el,w,y);this.from[w]=x[0];this.to[w]=x[1]}else{if(v!=null){this.from[w]=parseFloat(this.el[w]||n(this.el,w));this.to[w]=v[1]||v;this.unit[w]=v[3]||"px"}else{throw"anim init: Invalid arguments."}}}},step:function(){var v=k();if(v<this.end){this.update((v-this.begin)/this.duration)}else{this.stop&&this.stop();this.update(1);this.onComplete&&this.onComplete()}},update:function(v){for(var w in this.props){var x=this.compute(this.from[w],this.to[w],v);if(s(this.el,w)){if(w!=="opacity"&&!g.isColorStyle(w)){x=parseInt(x,10)+this.unit[w]}n(this.el,w,x)}else{this.el[w]=x}}},compute:function(B,A,w){var z=d[this.easing||"linear"];if(Cold.isArray(B)){var y=parseInt(B[0]+(A[0]-B[0])*z(w),10),v=parseInt(B[1]+(A[1]-B[1])*z(w),10),x=parseInt(B[2]+(A[2]-B[2])*z(w),10);return"rgb("+y+","+v+","+x+")"}return B+(A-B)*z(w)},pause:function(){this.paused=true},resume:function(){this.paused=false},repeat:function(){var v=this.onComplete;this.onComplete=(function(w){return function(){v&&v();w.reset();w.start(false)}})(this)},reset:function(){this.update(0);this.stop()},start:function(w){!this.transitionName&&this.stop();var x=false,v;w=w||false;var y=function(z){return String(z).replace(/[A-Z]/g,"-$&").toLowerCase()};var v=(function(z){return function(){z.initData();var A=z.onComplete,B;z.onStart&&z.onStart();z.onComplete=function(){A&&A();if(x||w){if(z.el.queue!==null){B=z.el.queue.shift();B?B():(z.el.queue=null)}}};if(z.transitionName){var C="all "+z.duration+"ms "+y(z.easing);z.el.style[z.transitionName]=C;setTimeout(function(){z.el.style[z.transitionName]=C;z.update(1)},0);setTimeout(function(){z.stop();z.onComplete&&z.onComplete()},z.duration)}else{z.timer=setInterval(function(){if(z.paused){z.end+=z.fps;return}z.step.call(z)},z.fps||u.DefaultOption.fps)}}})(this);if(this.el.queue==null){x=true;this.el.queue=[];v();return this}w?this.el.queue.push(v):v();return this},stop:function(){if(this.transitionName){if(Cold.isNumber(this.el.css3AnimNum)&&--this.el.css3AnimNum===0){n(this.el,this.transitionName,"")}}else{this.timer&&clearInterval(this.timer);this.timer=null}}}})();var i=function(v){v=v||false;return function(y,x,C,A,B){var w={};if(Cold.isFunction(C)||C===null){w.onComplete=C;w.duration=A;w.easing=B}else{w=C}var z=new u(y,x,w);return z.start(v)}};var l=i();var p=i(true);var o=function(v,w,A,y,z){if(n(v,"position")!=="static"){var x=new u(v,{left:w[0],top:w[1]},{duration:y,onComplete:A,easing:z});x.start()}else{throw"position is static, cant move!"}};var q=function(v,A,z,x,y){var w=new u(v,{opacity:A},{duration:x,onComplete:z,easing:y});return w.start()};var m=function(v,z,x,y){var w=new u(v,{opacity:1},{duration:x,onComplete:z,easing:y});return w.start()};var b=function(v,z,x,y){var w=new u(v,{opacity:0},{duration:x,onComplete:z,easing:y});return w.start()};var a=function(v,A,z,x,y){var w=new u(v,{height:A},{duration:x,onComplete:z,easing:y});return w.start()};var c=function(z,B,y,A){if(Cold.isString(z)){z=h(e(z.match(/\s*#(.*)\s*/)[1]))["y"]}else{z=h(z)["y"]}var x=document,v=x.documentElement;var w=new u(("scrollTop" in v?v:x.body),{scrollTop:z},{duration:Cold.isFunction(B)?y:B,onComplete:Cold.isFunction(B)?B:r,easing:A,css3support:false});return w.start()};return{run:l,queue:p,move:o,fade:q,fadeIn:m,fadeOut:b,slide:a,scrollTo:c,Easing:d}});