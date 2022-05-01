var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(){return d("")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function v(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}function y(t,e,n){t.classList[n?"add":"remove"](e)}let b;function _(t){b=t}function k(){if(!b)throw new Error("Function called outside component initialization");return b}function x(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const w=[],E=[],N=[],C=[],P=Promise.resolve();let I=!1;function A(t){N.push(t)}const M=new Set;let S=0;function D(){const t=b;do{for(;S<w.length;){const t=w[S];S++,_(t),O(t.$$)}for(_(null),w.length=0,S=0;E.length;)E.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];M.has(e)||(M.add(e),e())}N.length=0}while(w.length);for(;C.length;)C.pop()();I=!1,M.clear(),_(t)}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const R=new Set;let W;function j(){W={r:0,c:[],p:W}}function q(){W.r||o(W.c),W=W.p}function L(t,e){t&&t.i&&(R.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),W.c.push((()=>{R.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function F(t){t&&t.c()}function T(t,n,s,c){const{fragment:u,on_mount:l,on_destroy:i,after_update:a}=t.$$;u&&u.m(n,s),c||A((()=>{const n=l.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(A)}function z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function V(t,e){-1===t.$$.dirty[0]&&(w.push(t),I||(I=!0,P.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(e,r,s,c,u,i,a,d=[-1]){const f=b;_(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||f.$$.root};a&&a(p.root);let m=!1;if(p.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&V(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&L(e.$$.fragment),T(e,r.target,r.anchor,r.customElement),D()}_(f)}class H{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){let n,r,s;return{c(){n=a("div"),$(n,"--width",e[1]-.47*e[1]*!e[5]+"px"),$(n,"transform","translate("+e[4]+"px)"),g(n,"draggable","false"),g(n,"class","svelte-1hi9ixy"),y(n,"accidental",!e[5]),y(n,"natural",e[5]),y(n,"pressed",e[0])},m(t,o){u(t,n,o),r||(s=[m(n,"mousedown",h(e[2])),m(n,"mouseup",h(e[3])),m(n,"mouseenter",e[7]),m(n,"mouseleave",e[8]),m(n,"touchstart",h(e[2])),m(n,"touchend",h(e[3]))],r=!0)},p(t,[e]){2&e&&$(n,"--width",t[1]-.47*t[1]*!t[5]+"px"),16&e&&$(n,"transform","translate("+t[4]+"px)"),1&e&&y(n,"pressed",t[0])},i:t,o:t,d(t){t&&l(n),r=!1,o(s)}}}function K(t,e,n){let{noteNum:o}=e,{keyWidth:r=56}=e,{pressed:s=!1}=e;const c=x();let u=![1,3,6,8,10].includes(o%12),l=0;function i(t){s||(c("noteon",o),console.log(o,t),n(0,s=!0))}function a(t){s&&(c("noteoff",o),n(0,s=!1))}u||([1,6].includes(o%12)?l=-r/12:[3,10].includes(o%12)&&(l=r/12));return t.$$set=t=>{"noteNum"in t&&n(6,o=t.noteNum),"keyWidth"in t&&n(1,r=t.keyWidth),"pressed"in t&&n(0,s=t.pressed)},[s,r,i,a,l,u,o,t=>{t.buttons&&i()},t=>{t.buttons&&a()}]}class Q extends H{constructor(t){super(),G(this,t,K,J,s,{noteNum:6,keyWidth:1,pressed:0,keyPressed:2,keyReleased:3})}get keyPressed(){return this.$$.ctx[2]}get keyReleased(){return this.$$.ctx[3]}}function U(t,e,n){const o=t.slice();return o[14]=e[n],o}function X(t,e,n){const o=t.slice();return o[17]=e[n],o[18]=e,o[19]=n,o}function Y(t){let e,n,o=t[17];const r=()=>t[10](e,o),s=()=>t[10](null,o);let c={noteNum:t[17],pressed:t[0].includes(t[17])};return e=new Q({props:c}),r(),e.$on("noteon",t[11]),e.$on("noteoff",t[12]),{c(){F(e.$$.fragment)},m(t,o){T(e,t,o),n=!0},p(t,n){o!==t[17]&&(s(),o=t[17],r());const c={};4&n&&(c.noteNum=t[17]),5&n&&(c.pressed=t[0].includes(t[17])),e.$set(c)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){s(),z(e,t)}}}function Z(t){let e,n=t[3],o=[];for(let e=0;e<n.length;e+=1)o[e]=tt(U(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=p()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);u(t,e,n)},p(t,r){if(8&r){let s;for(n=t[3],s=0;s<n.length;s+=1){const c=U(t,n,s);o[s]?o[s].p(c,r):(o[s]=tt(c),o[s].c(),o[s].m(e.parentNode,e))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){i(o,t),t&&l(e)}}}function tt(t){let e,n,o=t[14]+"";return{c(){e=a("div"),n=d(o)},m(t,o){u(t,e,o),c(e,n)},p(t,e){8&e&&o!==(o=t[14]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,o)},d(t){t&&l(e)}}}function et(t){let e,n,o,r,s,d=t[2],m=[];for(let e=0;e<d.length;e+=1)m[e]=Y(X(t,d,e));const h=t=>B(m[t],1,1,(()=>{m[t]=null}));let $=t[1]&&Z(t);return{c(){e=a("div"),n=a("div");for(let t=0;t<m.length;t+=1)m[t].c();o=f(),$&&$.c(),r=p(),g(n,"class","svelte-e1a7d6"),g(e,"class","keyboard svelte-e1a7d6")},m(t,l){u(t,e,l),c(e,n);for(let t=0;t<m.length;t+=1)m[t].m(n,null);u(t,o,l),$&&$.m(t,l),u(t,r,l),s=!0},p(t,[e]){if(245&e){let o;for(d=t[2],o=0;o<d.length;o+=1){const r=X(t,d,o);m[o]?(m[o].p(r,e),L(m[o],1)):(m[o]=Y(r),m[o].c(),L(m[o],1),m[o].m(n,null))}for(j(),o=d.length;o<m.length;o+=1)h(o);q()}t[1]?$?$.p(t,e):($=Z(t),$.c(),$.m(r.parentNode,r)):$&&($.d(1),$=null)},i(t){if(!s){for(let t=0;t<d.length;t+=1)L(m[t]);s=!0}},o(t){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)B(m[t]);s=!1},d(t){t&&l(e),i(m,t),t&&l(o),$&&$.d(t),t&&l(r)}}}function nt(t,e,n){let{octaves:o=2}=e,{middleC:r=60}=e,{keysPressed:s=[]}=e,{verbose:c}=e;const u=12*o;let l,i=[];function a(t,e=0){n(3,i=[`Note ${t} was pressed!`,...i])}function d(t){n(3,i=[`Note ${t} was released!`,...i])}function f(t){var e,n,o;if(c){let e="MIDI message received at timestamp "+t.timeStamp+"["+t.data.length+" bytes]: ";for(let n=0;n<t.data.length;n++)e+="0x"+t.data[n].toString(16)+" ",t.data;console.log(e)}const r=t.data[0],s=t.data[1]%u,l=t.data.length>2?t.data[2]:0;switch(r){case 144:l>0?null===(e=m[s])||void 0===e||e.keyPressed(s):null===(n=m[s])||void 0===n||n.keyReleased(s);break;case 128:null===(o=m[s])||void 0===o||o.keyReleased(s)}}var p;p=async()=>{try{let t=await navigator.requestMIDIAccess();console.log("MIDI ready!"),c&&function(t){for(const e of t.inputs){const t=e[1];console.log("Input port [type:'"+t.type+"'] id:'"+t.id+"' manufacturer:'"+t.manufacturer+"' name:'"+t.name+"' version:'"+t.version+"'")}for(const e of t.outputs){const t=e[1];console.log("Output port [type:'"+t.type+"'] id:'"+t.id+"' manufacturer:'"+t.manufacturer+"' name:'"+t.name+"' version:'"+t.version+"'")}}(t),t.inputs.forEach((t=>{t.onmidimessage=f}))}catch(t){console.log("Failed to get MIDI access - "+t)}},k().$$.on_mount.push(p);let m={};return t.$$set=t=>{"octaves"in t&&n(8,o=t.octaves),"middleC"in t&&n(9,r=t.middleC),"keysPressed"in t&&n(0,s=t.keysPressed),"verbose"in t&&n(1,c=t.verbose)},t.$$.update=()=>{768&t.$$.dirty&&n(2,l=[...Array(12*o+1).keys()].map((t=>t+(r-12*Math.floor(o/2)))))},[s,c,l,i,m,u,a,d,o,r,function(t,e){E[t?"unshift":"push"]((()=>{m[e%u]=t,n(4,m)}))},({detail:t})=>a(t),({detail:t})=>d(t)]}class ot extends H{constructor(t){super(),G(this,t,nt,et,s,{octaves:8,middleC:9,keysPressed:0,verbose:1})}}function rt(t){let e,n;return e=new ot({props:{octaves:t[0],verbose:t[1]}}),{c(){F(e.$$.fragment)},m(t,o){T(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.octaves=t[0]),2&n&&(o.verbose=t[1]),e.$set(o)},i(t){n||(L(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){z(e,t)}}}function st(e){let n,r,i,h,$,y,b,_,k,x,w,E,N,C,P,I,M=e[0],S=rt(e);return{c(){n=f(),r=a("label"),i=d("Octaves:\n    "),h=a("select"),$=a("option"),$.textContent="1",y=a("option"),y.textContent="2",b=a("option"),b.textContent="3",_=f(),k=a("label"),x=d("Verbose:\n    "),w=a("input"),E=f(),S.c(),N=p(),document.title="Svelte Piano",$.__value=1,$.value=$.__value,y.__value=2,y.value=y.__value,b.__value=3,b.value=b.__value,void 0===e[0]&&A((()=>e[2].call(h))),g(w,"type","checkbox")},m(t,o){u(t,n,o),u(t,r,o),c(r,i),c(r,h),c(h,$),c(h,y),c(h,b),v(h,e[0]),u(t,_,o),u(t,k,o),c(k,x),c(k,w),w.checked=e[1],u(t,E,o),S.m(t,o),u(t,N,o),C=!0,P||(I=[m(h,"change",e[2]),m(w,"change",e[3])],P=!0)},p(e,[n]){1&n&&v(h,e[0]),2&n&&(w.checked=e[1]),1&n&&s(M,M=e[0])?(j(),B(S,1,1,t),q(),S=rt(e),S.c(),L(S),S.m(N.parentNode,N)):S.p(e,n)},i(t){C||(L(S),C=!0)},o(t){B(S),C=!1},d(t){t&&l(n),t&&l(r),t&&l(_),t&&l(k),t&&l(E),t&&l(N),S.d(t),P=!1,o(I)}}}function ct(t,e,n){let o=3,r=!1;return[o,r,function(){o=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,o)},function(){r=this.checked,n(1,r)}]}return new class extends H{constructor(t){super(),G(this,t,ct,st,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map