(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function p(){}const Fe=e=>e;function Ze(e,t){for(const n in t)e[n]=t[n];return e}function xe(e){return e()}function me(){return Object.create(null)}function N(e){e.forEach(xe)}function de(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ke(e){return Object.keys(e).length===0}function pe(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Ee=typeof window<"u";let Ge=Ee?()=>window.performance.now():()=>Date.now(),_e=Ee?e=>requestAnimationFrame(e):p;const S=new Set;function Me(e){S.forEach(t=>{t.c(e)||(S.delete(t),t.f())}),S.size!==0&&_e(Me)}function Je(e){let t;return S.size===0&&_e(Me),{promise:new Promise(n=>{S.add(t={c:e,f:n})}),abort(){S.delete(t)}}}function $(e,t){e.appendChild(t)}function Te(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Qe(e){const t=w("style");return t.textContent="/* empty */",Xe(Te(e),t),t.sheet}function Xe(e,t){return $(e.head||e,t),t.sheet}function P(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function Ye(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function et(e){return document.createTextNode(e)}function oe(){return et(" ")}function Ae(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function he(e,t){for(const n in t)k(e,n,t[n])}function tt(e){return Array.from(e.childNodes)}function E(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function nt(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}const Q=new Map;let X=0;function rt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function ot(e,t){const n={stylesheet:Qe(t),rules:{}};return Q.set(e,n),n}function ge(e,t,n,r,o,i,s,c=0){const l=16.666/r;let f=`{
`;for(let g=0;g<=1;g+=l){const M=t+(n-t)*i(g);f+=g*100+`%{${s(M,1-M)}}
`}const m=f+`100% {${s(n,1-n)}}
}`,d=`__svelte_${rt(m)}_${c}`,u=Te(e),{stylesheet:_,rules:a}=Q.get(u)||ot(u,e);a[d]||(a[d]=!0,_.insertRule(`@keyframes ${d} ${m}`,_.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${d} ${r}ms linear ${o}ms 1 both`,X+=1,d}function it(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=n.length-r.length;o&&(e.style.animation=r.join(", "),X-=o,X||st())}function st(){_e(()=>{X||(Q.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&x(t)}),Q.clear())})}let D;function z(e){D=e}function ct(){if(!D)throw new Error("Function called outside component initialization");return D}function Oe(e){ct().$$.on_mount.push(e)}const O=[],le=[];let C=[];const we=[],ft=Promise.resolve();let ue=!1;function lt(){ue||(ue=!0,ft.then(Le))}function q(e){C.push(e)}const ie=new Set;let T=0;function Le(){if(T!==0)return;const e=D;do{try{for(;T<O.length;){const t=O[T];T++,z(t),ut(t.$$)}}catch(t){throw O.length=0,T=0,t}for(z(null),O.length=0,T=0;le.length;)le.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];ie.has(n)||(ie.add(n),n())}C.length=0}while(O.length);for(;we.length;)we.pop()();ue=!1,ie.clear(),z(e)}function ut(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function at(e){const t=[],n=[];C.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),C=t}let U;function dt(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function se(e,t,n){e.dispatchEvent(nt(`${t?"intro":"outro"}${n}`))}const Z=new Set;let b;function _t(){b={r:0,c:[],p:b}}function mt(){b.r||N(b.c),b=b.p}function v(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function L(e,t,n,r){if(e&&e.o){if(Z.has(e))return;Z.add(e),b.c.push(()=>{Z.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const pt={duration:0};function ye(e,t,n,r){let i=t(e,n,{direction:"both"}),s=r?0:1,c=null,l=null,f=null,m;function d(){f&&it(e,f)}function u(a,h){const g=a.b-s;return h*=Math.abs(g),{a:s,b:a.b,d:g,duration:h,start:a.start,end:a.start+h,group:a.group}}function _(a){const{delay:h=0,duration:g=300,easing:M=Fe,tick:te=p,css:ne}=i||pt,re={start:Ge()+h,b:a};a||(re.group=b,b.r+=1),"inert"in e&&(a?m!==void 0&&(e.inert=m):(m=e.inert,e.inert=!0)),c||l?l=re:(ne&&(d(),f=ge(e,s,a,g,h,M,ne)),a&&te(0,1),c=u(re,g),q(()=>se(e,a,"start")),Je(F=>{if(l&&F>l.start&&(c=u(l,g),l=null,se(e,c.b,"start"),ne&&(d(),f=ge(e,s,c.b,c.duration,0,M,i.css))),c){if(F>=c.end)te(s=c.b,1-s),se(e,c.b,"end"),l||(c.b?d():--c.group.r||N(c.group.c)),c=null;else if(F>=c.start){const He=F-c.start;s=c.a+c.d*M(He/c.duration),te(s,1-s)}}return!!(c||l)}))}return{run(a){de(i)?dt().then(()=>{i=i({direction:a?"in":"out"}),_(a)}):_(a)},end(){d(),c=l=null}}}function ht(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const s=e[i],c=t[i];if(c){for(const l in s)l in c||(r[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);e[i]=c}else for(const l in s)o[l]=1}for(const s in r)s in n||(n[s]=void 0);return n}function K(e){e&&e.c()}function R(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),q(()=>{const i=e.$$.on_mount.map(xe).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...i):N(i),e.$$.on_mount=[]}),o.forEach(q)}function W(e,t){const n=e.$$;n.fragment!==null&&(at(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(e,t){e.$$.dirty[0]===-1&&(O.push(e),lt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,n,r,o,i,s,c=[-1]){const l=D;z(e);const f=e.$$={fragment:null,ctx:[],props:i,update:p,not_equal:o,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:me(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};s&&s(f.root);let m=!1;if(f.ctx=n?n(e,t.props||{},(d,u,..._)=>{const a=_.length?_[0]:u;return f.ctx&&o(f.ctx[d],f.ctx[d]=a)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](a),m&&gt(e,d)),u}):[],f.update(),m=!0,N(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const d=tt(t.target);f.fragment&&f.fragment.l(d),d.forEach(x)}else f.fragment&&f.fragment.c();t.intro&&v(e.$$.fragment),R(e,t.target,t.anchor),Le()}z(l)}class H{$$=void 0;$$set=void 0;$destroy(){W(this,1),this.$destroy=p}$on(t,n){if(!de(n))return p;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const wt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(wt);function yt(e){const t=e-1;return t*t*t+1}function be(e,{delay:t=0,duration:n=400,easing:r=yt,x:o=0,y:i=0,opacity:s=0}={}){const c=getComputedStyle(e),l=+c.opacity,f=c.transform==="none"?"":c.transform,m=l*(1-s),[d,u]=pe(o),[_,a]=pe(i);return{delay:t,duration:n,easing:r,css:(h,g)=>`
			transform: ${f} translate(${(1-h)*d}${u}, ${(1-h)*_}${a});
			opacity: ${l-m*g}`}}function bt(e){let t;return{c(){t=w("div"),t.innerHTML="<h1>Markdown Parser</h1>"},m(n,r){P(n,t,r)},p,i:p,o:p,d(n){n&&x(t)}}}class $t extends H{constructor(t){super(),V(this,t,null,bt,I,{})}}const A=[];function Se(e,t=p){let n;const r=new Set;function o(c){if(I(e,c)&&(e=c,n)){const l=!A.length;for(const f of r)f[1](),A.push(f,e);if(l){for(let f=0;f<A.length;f+=2)A[f][0](A[f+1]);A.length=0}}}function i(c){o(c(e))}function s(c,l=p){const f=[c,l];return r.add(f),r.size===1&&(n=t(o,i)||p),c(e),()=>{r.delete(f),r.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:s}}const ae=Se(""),Ce=Se("");function vt(e){let t,n,r,o;return{c(){t=w("div"),n=w("textarea"),k(n,"class","markdown-input svelte-1r394mn"),k(n,"rows","30"),k(n,"cols","50"),E(n,"padding","20px"),E(t,"height","100%")},m(i,s){P(i,t,s),$(t,n),r||(o=Ae(n,"keyup",e[0]),r=!0)},p,i:p,o:p,d(i){i&&x(t),r=!1,o()}}}let $e="";function kt(e){let t;const n=o=>{t&&clearTimeout(t),t=setTimeout(()=>{ae.set(o)},100)},r=o=>{console.log(o.target.value),console.log($e),n(o.target.value)};return ae.set($e),[r]}class xt extends H{constructor(t){super(),V(this,t,kt,vt,I,{})}}function Et(e){let t;return{c(){t=w("div"),k(t,"id","preview-container"),k(t,"class","svelte-11w1wda")},m(n,r){P(n,t,r),e[1](t)},p,i:p,o:p,d(n){n&&x(t),e[1](null)}}}function Mt(e,t,n){let r,o;Oe(()=>{Ce.subscribe(s=>{r=s,o&&n(0,o.innerHTML=r,o),console.log("[PREVIEW]",s),console.log(o)})});function i(s){le[s?"unshift":"push"](()=>{o=s,n(0,o)})}return[o,i]}class Tt extends H{constructor(t){super(),V(this,t,Mt,Et,I,{})}}function At(e){let t,n=[{width:e[1]},{height:e[1]},{"stroke-width":"0"},{class:e[2]},e[0].a,e[4],{xmlns:"http://www.w3.org/2000/svg"}],r={};for(let o=0;o<n.length;o+=1)r=Ze(r,n[o]);return{c(){t=Ye("svg"),he(t,r)},m(o,i){P(o,t,i),t.innerHTML=e[3]},p(o,[i]){i&8&&(t.innerHTML=o[3]),he(t,r=ht(n,[i&2&&{width:o[1]},i&2&&{height:o[1]},{"stroke-width":"0"},i&4&&{class:o[2]},i&1&&o[0].a,i&16&&o[4],{xmlns:"http://www.w3.org/2000/svg"}]))},i:p,o:p,d(o){o&&x(t)}}}function Ot(e,t,n){let{src:r}=t,{size:o="1em"}=t,{color:i=void 0}=t,{title:s=void 0}=t,{className:c=""}=t,l,f;return e.$$set=m=>{"src"in m&&n(0,r=m.src),"size"in m&&n(1,o=m.size),"color"in m&&n(5,i=m.color),"title"in m&&n(6,s=m.title),"className"in m&&n(2,c=m.className)},e.$$.update=()=>{e.$$.dirty&33&&(n(4,f={}),i&&(r.a.stroke!=="none"&&n(4,f.stroke=i,f),r.a.fill!=="none"&&n(4,f.fill=i,f))),e.$$.dirty&65&&n(3,l=(s?`<title>${s}</title>`:"")+r.c)},[r,o,c,l,f,i,s]}class Lt extends H{constructor(t){super(),V(this,t,Ot,At,I,{src:0,size:1,color:5,title:6,className:2})}}const St={a:{viewBox:"0 0 512 512"},c:'<title></title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48.19,121.42,24.1,21.06-73.61,84.1-24.1-23.06ZM191.93,342.63,121.37,272,144,249.37,214.57,320Zm65,.79L185.55,272l22.64-22.62,47.16,47.21L366.48,169.42l24.1,21.06Z"></path>'},Ct="/markdown-parser-rust/assets/markdown_parser_bg-a7af16c4.wasm",Nt=async(e={},t)=>{let n;if(t.startsWith("data:")){const r=t.replace(/^data:.*?base64,/,"");let o;if(typeof Buffer=="function"&&typeof Buffer.from=="function")o=Buffer.from(r,"base64");else if(typeof atob=="function"){const i=atob(r);o=new Uint8Array(i.length);for(let s=0;s<i.length;s++)o[s]=i.charCodeAt(s)}else throw new Error("Cannot decode base64-encoded data URL");n=await WebAssembly.instantiate(o,e)}else{const r=await fetch(t),o=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&o.startsWith("application/wasm"))n=await WebAssembly.instantiateStreaming(r,e);else{const i=await r.arrayBuffer();n=await WebAssembly.instantiate(i,e)}}return n.instance.exports},y=new Array(32).fill(void 0);y.push(void 0,null,!0,!1);function Ne(e){return y[e]}let B=y.length;function It(e){e<36||(y[e]=B,B=e)}function Pt(e){const t=Ne(e);return It(e),t}let Y=0,ce=new Uint8Array;function G(){return ce.byteLength===0&&(ce=new Uint8Array(Be.buffer)),ce}const jt=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let J=new jt("utf-8");const Ut=typeof J.encodeInto=="function"?function(e,t){return J.encodeInto(e,t)}:function(e,t){const n=J.encode(e);return t.set(n),{read:e.length,written:n.length}};function Ie(e,t,n){if(n===void 0){const c=J.encode(e),l=t(c.length);return G().subarray(l,l+c.length).set(c),Y=c.length,l}let r=e.length,o=t(r);const i=G();let s=0;for(;s<r;s++){const c=e.charCodeAt(s);if(c>127)break;i[o+s]=c}if(s!==r){s!==0&&(e=e.slice(s)),o=n(o,r,r=s+e.length*3);const c=G().subarray(o+s,o+r),l=Ut(e,c);s+=l.written}return Y=s,o}let fe=new Int32Array;function ee(){return fe.byteLength===0&&(fe=new Int32Array(Be.buffer)),fe}const zt=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Pe=new zt("utf-8",{ignoreBOM:!0,fatal:!0});Pe.decode();function je(e,t){return Pe.decode(G().subarray(e,e+t))}function Rt(e){try{const r=ve(-16),o=Ie(e,De,qe);Bt(r,o,Y);var t=ee()[r/4+0],n=ee()[r/4+1];return je(t,n)}finally{ve(16),Ve(t,n)}}function Wt(e){B===y.length&&y.push(y.length+1);const t=B;return B=y[t],y[t]=e,t}function Ue(){const e=new Error;return Wt(e)}function ze(e,t){const n=Ne(t).stack,r=Ie(n,De,qe),o=Y;ee()[e/4+1]=o,ee()[e/4+0]=r}function Re(e,t){try{console.error(je(e,t))}finally{Ve(e,t)}}function We(e){Pt(e)}URL=globalThis.URL;const j=await Nt({"./markdown_parser_bg.js":{__wbg_new_693216e109162396:Ue,__wbg_stack_0ddaca5d1abfb52f:ze,__wbg_error_09919627ac0992f5:Re,__wbindgen_object_drop_ref:We}},Ct),Be=j.memory,Bt=j.parse,ve=j.__wbindgen_add_to_stack_pointer,De=j.__wbindgen_malloc,qe=j.__wbindgen_realloc,Ve=j.__wbindgen_free,Dt=Object.freeze(Object.defineProperty({__proto__:null,__wbg_error_09919627ac0992f5:Re,__wbg_new_693216e109162396:Ue,__wbg_stack_0ddaca5d1abfb52f:ze,__wbindgen_object_drop_ref:We,parse:Rt},Symbol.toStringTag,{value:"Module"}));function ke(e){let t,n,r,o,i,s;return n=new Lt({props:{size:"40",color:"white",src:St}}),{c(){t=w("div"),K(n.$$.fragment),k(t,"class","preview-button svelte-1vmqe1e")},m(c,l){P(c,t,l),R(n,t,null),o=!0,i||(s=Ae(t,"click",e[1]),i=!0)},p,i(c){o||(v(n.$$.fragment,c),c&&q(()=>{o&&(r||(r=ye(t,be,{y:-50,x:-50},!0)),r.run(1))}),o=!0)},o(c){L(n.$$.fragment,c),c&&(r||(r=ye(t,be,{y:-50,x:-50},!1)),r.run(0)),o=!1},d(c){c&&x(t),W(n),c&&r&&r.end(),i=!1,s()}}}function qt(e){let t,n,r,o,i,s,c,l,f,m,d;n=new $t({}),s=new xt({}),f=new Tt({});let u=e[0]&&ke(e);return{c(){t=w("main"),K(n.$$.fragment),r=oe(),o=w("div"),i=w("div"),K(s.$$.fragment),c=oe(),l=w("div"),K(f.$$.fragment),m=oe(),u&&u.c(),E(i,"height","100%"),E(i,"margin-right","15px"),E(l,"flex","1"),E(l,"min-width","250px"),E(l,"height","100%"),k(o,"class","input-container svelte-1vmqe1e")},m(_,a){P(_,t,a),R(n,t,null),$(t,r),$(t,o),$(o,i),R(s,i,null),$(o,c),$(o,l),R(f,l,null),$(t,m),u&&u.m(t,null),d=!0},p(_,[a]){_[0]?u?(u.p(_,a),a&1&&v(u,1)):(u=ke(_),u.c(),v(u,1),u.m(t,null)):u&&(_t(),L(u,1,1,()=>{u=null}),mt())},i(_){d||(v(n.$$.fragment,_),v(s.$$.fragment,_),v(f.$$.fragment,_),v(u),d=!0)},o(_){L(n.$$.fragment,_),L(s.$$.fragment,_),L(f.$$.fragment,_),L(u),d=!1},d(_){_&&x(t),W(n),W(s),W(f),u&&u.d()}}}function Vt(e,t,n){let r;async function o(){r=Dt}Oe(()=>{o(),window.addEventListener("keydown",c),ae.subscribe(f=>{console.log(f),f&&f.length>10?n(0,i=!0):n(0,i=!1),s=f,l()})});let i=!1,s="";function c(f){console.log(f),f.ctrlKey&&f.keyCode==13&&(console.log("Markdown"),l())}function l(){let f=r.parse(s);Ce.set(f)}return[i,l]}class Ht extends H{constructor(t){super(),V(this,t,Vt,qt,I,{})}}new Ht({target:document.getElementById("app")});
