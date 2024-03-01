(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function g(){}const qe=e=>e;function Ve(e,t){for(const n in t)e[n]=t[n];return e}function xe(e){return e()}function ge(){return Object.create(null)}function j(e){e.forEach(xe)}function _e(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function He(e){return Object.keys(e).length===0}function he(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}const Ee=typeof window<"u";let Fe=Ee?()=>window.performance.now():()=>Date.now(),me=Ee?e=>requestAnimationFrame(e):g;const C=new Set;function Me(e){C.forEach(t=>{t.c(e)||(C.delete(t),t.f())}),C.size!==0&&me(Me)}function Ze(e){let t;return C.size===0&&me(Me),{promise:new Promise(n=>{C.add(t={c:e,f:n})}),abort(){C.delete(t)}}}function v(e,t){e.appendChild(t)}function Oe(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Ke(e){const t=y("style");return t.textContent="/* empty */",Ge(Oe(e),t),t.sheet}function Ge(e,t){return v(e.head||e,t),t.sheet}function I(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function Je(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Qe(e){return document.createTextNode(e)}function ce(){return Qe(" ")}function Te(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e,t){for(const n in t)x(e,n,t[n])}function Xe(e){return Array.from(e.childNodes)}function M(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function Ye(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}const ee=new Map;let te=0;function et(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function tt(e,t){const n={stylesheet:Ke(t),rules:{}};return ee.set(e,n),n}function we(e,t,n,r,o,i,s,c=0){const l=16.666/r;let f=`{
`;for(let p=0;p<=1;p+=l){const O=t+(n-t)*i(p);f+=p*100+`%{${s(O,1-O)}}
`}const m=f+`100% {${s(n,1-n)}}
}`,d=`__svelte_${et(m)}_${c}`,u=Oe(e),{stylesheet:_,rules:a}=ee.get(u)||tt(u,e);a[d]||(a[d]=!0,_.insertRule(`@keyframes ${d} ${m}`,_.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${d} ${r}ms linear ${o}ms 1 both`,te+=1,d}function nt(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=n.length-r.length;o&&(e.style.animation=r.join(", "),te-=o,te||rt())}function rt(){me(()=>{te||(ee.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&E(t)}),ee.clear())})}let q;function U(e){q=e}function ot(){if(!q)throw new Error("Function called outside component initialization");return q}function Se(e){ot().$$.on_mount.push(e)}const L=[],ue=[];let N=[];const ye=[],it=Promise.resolve();let ae=!1;function st(){ae||(ae=!0,it.then(Le))}function V(e){N.push(e)}const fe=new Set;let T=0;function Le(){if(T!==0)return;const e=q;do{try{for(;T<L.length;){const t=L[T];T++,U(t),ct(t.$$)}}catch(t){throw L.length=0,T=0,t}for(U(null),L.length=0,T=0;ue.length;)ue.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];fe.has(n)||(fe.add(n),n())}N.length=0}while(L.length);for(;ye.length;)ye.pop()();ae=!1,fe.clear(),U(e)}function ct(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function ft(e){const t=[],n=[];N.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),N=t}let R;function lt(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function le(e,t,n){e.dispatchEvent(Ye(`${t?"intro":"outro"}${n}`))}const J=new Set;let $;function ut(){$={r:0,c:[],p:$}}function at(){$.r||j($.c),$=$.p}function k(e,t){e&&e.i&&(J.delete(e),e.i(t))}function A(e,t,n,r){if(e&&e.o){if(J.has(e))return;J.add(e),$.c.push(()=>{J.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const dt={duration:0};function be(e,t,n,r){let i=t(e,n,{direction:"both"}),s=r?0:1,c=null,l=null,f=null,m;function d(){f&&nt(e,f)}function u(a,h){const p=a.b-s;return h*=Math.abs(p),{a:s,b:a.b,d:p,duration:h,start:a.start,end:a.start+h,group:a.group}}function _(a){const{delay:h=0,duration:p=300,easing:O=qe,tick:oe=g,css:ie}=i||dt,se={start:Fe()+h,b:a};a||(se.group=$,$.r+=1),"inert"in e&&(a?m!==void 0&&(e.inert=m):(m=e.inert,e.inert=!0)),c||l?l=se:(ie&&(d(),f=we(e,s,a,p,h,O,ie)),a&&oe(0,1),c=u(se,p),V(()=>le(e,a,"start")),Ze(Z=>{if(l&&Z>l.start&&(c=u(l,p),l=null,le(e,c.b,"start"),ie&&(d(),f=we(e,s,c.b,c.duration,0,O,i.css))),c){if(Z>=c.end)oe(s=c.b,1-s),le(e,c.b,"end"),l||(c.b?d():--c.group.r||j(c.group.c)),c=null;else if(Z>=c.start){const De=Z-c.start;s=c.a+c.d*O(De/c.duration),oe(s,1-s)}}return!!(c||l)}))}return{run(a){_e(i)?lt().then(()=>{i=i({direction:a?"in":"out"}),_(a)}):_(a)},end(){d(),c=l=null}}}function _t(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const s=e[i],c=t[i];if(c){for(const l in s)l in c||(r[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);e[i]=c}else for(const l in s)o[l]=1}for(const s in r)s in n||(n[s]=void 0);return n}function Q(e){e&&e.c()}function W(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),V(()=>{const i=e.$$.on_mount.map(xe).filter(_e);e.$$.on_destroy?e.$$.on_destroy.push(...i):j(i),e.$$.on_mount=[]}),o.forEach(V)}function B(e,t){const n=e.$$;n.fragment!==null&&(ft(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(e,t){e.$$.dirty[0]===-1&&(L.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,r,o,i,s=null,c=[-1]){const l=q;U(e);const f=e.$$={fragment:null,ctx:[],props:i,update:g,not_equal:o,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:ge(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};s&&s(f.root);let m=!1;if(f.ctx=n?n(e,t.props||{},(d,u,..._)=>{const a=_.length?_[0]:u;return f.ctx&&o(f.ctx[d],f.ctx[d]=a)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](a),m&&mt(e,d)),u}):[],f.update(),m=!0,j(f.before_update),f.fragment=r?r(f.ctx):!1,t.target){if(t.hydrate){const d=Xe(t.target);f.fragment&&f.fragment.l(d),d.forEach(E)}else f.fragment&&f.fragment.c();t.intro&&k(e.$$.fragment),W(e,t.target,t.anchor),Le()}U(l)}class F{$$=void 0;$$set=void 0;$destroy(){B(this,1),this.$destroy=g}$on(t,n){if(!_e(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!He(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);function ht(e){const t=e-1;return t*t*t+1}function $e(e,{delay:t=0,duration:n=400,easing:r=ht,x:o=0,y:i=0,opacity:s=0}={}){const c=getComputedStyle(e),l=+c.opacity,f=c.transform==="none"?"":c.transform,m=l*(1-s),[d,u]=he(o),[_,a]=he(i);return{delay:t,duration:n,easing:r,css:(h,p)=>`
			transform: ${f} translate(${(1-h)*d}${u}, ${(1-h)*_}${a});
			opacity: ${l-m*p}`}}function pt(e){let t;return{c(){t=y("div"),t.innerHTML="<h1>Markdown Parser</h1>"},m(n,r){I(n,t,r)},p:g,i:g,o:g,d(n){n&&E(t)}}}class wt extends F{constructor(t){super(),H(this,t,null,pt,P,{})}}const S=[];function Ae(e,t=g){let n;const r=new Set;function o(c){if(P(e,c)&&(e=c,n)){const l=!S.length;for(const f of r)f[1](),S.push(f,e);if(l){for(let f=0;f<S.length;f+=2)S[f][0](S[f+1]);S.length=0}}}function i(c){o(c(e))}function s(c,l=g){const f=[c,l];return r.add(f),r.size===1&&(n=t(o,i)||g),c(e),()=>{r.delete(f),r.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:s}}const de=Ae(""),Ce=Ae("");function yt(e){let t,n,r,o;return{c(){t=y("div"),n=y("textarea"),x(n,"class","markdown-input svelte-1r394mn"),x(n,"rows","30"),x(n,"cols","50"),M(n,"padding","20px"),M(t,"height","100%")},m(i,s){I(i,t,s),v(t,n),r||(o=Te(n,"keyup",e[0]),r=!0)},p:g,i:g,o:g,d(i){i&&E(t),r=!1,o()}}}let ve="";function bt(e){let t;const n=o=>{t&&clearTimeout(t),t=setTimeout(()=>{de.set(o)},100)},r=o=>{console.log(o.target.value),console.log(ve),n(o.target.value)};return de.set(ve),[r]}class $t extends F{constructor(t){super(),H(this,t,bt,yt,P,{})}}function vt(e){let t;return{c(){t=y("div"),x(t,"id","preview-container"),x(t,"class","svelte-11w1wda")},m(n,r){I(n,t,r),e[1](t)},p:g,i:g,o:g,d(n){n&&E(t),e[1](null)}}}function kt(e,t,n){let r,o;Se(()=>{Ce.subscribe(s=>{r=s,o&&n(0,o.innerHTML=r,o),console.log("[PREVIEW]",s),console.log(o)})});function i(s){ue[s?"unshift":"push"](()=>{o=s,n(0,o)})}return[o,i]}class xt extends F{constructor(t){super(),H(this,t,kt,vt,P,{})}}function Et(e){let t,n=[{width:e[1]},{height:e[1]},{"stroke-width":"0"},{class:e[2]},e[0].a,e[4],{xmlns:"http://www.w3.org/2000/svg"}],r={};for(let o=0;o<n.length;o+=1)r=Ve(r,n[o]);return{c(){t=Je("svg"),pe(t,r)},m(o,i){I(o,t,i),t.innerHTML=e[3]},p(o,[i]){i&8&&(t.innerHTML=o[3]),pe(t,r=_t(n,[i&2&&{width:o[1]},i&2&&{height:o[1]},{"stroke-width":"0"},i&4&&{class:o[2]},i&1&&o[0].a,i&16&&o[4],{xmlns:"http://www.w3.org/2000/svg"}]))},i:g,o:g,d(o){o&&E(t)}}}function Mt(e,t,n){let{src:r}=t,{size:o="1em"}=t,{color:i=void 0}=t,{title:s=void 0}=t,{className:c=""}=t,l,f;return e.$$set=m=>{"src"in m&&n(0,r=m.src),"size"in m&&n(1,o=m.size),"color"in m&&n(5,i=m.color),"title"in m&&n(6,s=m.title),"className"in m&&n(2,c=m.className)},e.$$.update=()=>{e.$$.dirty&33&&(n(4,f={}),i&&(r.a.stroke!=="none"&&n(4,f.stroke=i,f),r.a.fill!=="none"&&n(4,f.fill=i,f))),e.$$.dirty&65&&n(3,l=(s?`<title>${s}</title>`:"")+r.c)},[r,o,c,l,f,i,s]}class Ot extends F{constructor(t){super(),H(this,t,Mt,Et,P,{src:0,size:1,color:5,title:6,className:2})}}const Tt={a:{viewBox:"0 0 512 512"},c:'<title></title><path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm48.19,121.42,24.1,21.06-73.61,84.1-24.1-23.06ZM191.93,342.63,121.37,272,144,249.37,214.57,320Zm65,.79L185.55,272l22.64-22.62,47.16,47.21L366.48,169.42l24.1,21.06Z"></path>'},St="/markdown-parser-rust/assets/markdown_parser_bg-D7tfr4ib.wasm",Lt=async(e={},t)=>{let n;if(t.startsWith("data:")){const r=t.replace(/^data:.*?base64,/,"");let o;if(typeof Buffer=="function"&&typeof Buffer.from=="function")o=Buffer.from(r,"base64");else if(typeof atob=="function"){const i=atob(r);o=new Uint8Array(i.length);for(let s=0;s<i.length;s++)o[s]=i.charCodeAt(s)}else throw new Error("Cannot decode base64-encoded data URL");n=await WebAssembly.instantiate(o,e)}else{const r=await fetch(t),o=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&o.startsWith("application/wasm"))n=await WebAssembly.instantiateStreaming(r,e);else{const i=await r.arrayBuffer();n=await WebAssembly.instantiate(i,e)}}return n.instance.exports};let w;function Ne(e){w=e}const b=new Array(128).fill(void 0);b.push(void 0,null,!0,!1);function je(e){return b[e]}let D=b.length;function At(e){e<132||(b[e]=D,D=e)}function Ct(e){const t=je(e);return At(e),t}let ne=0,K=null;function X(){return(K===null||K.byteLength===0)&&(K=new Uint8Array(w.memory.buffer)),K}const Nt=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let Y=new Nt("utf-8");const jt=typeof Y.encodeInto=="function"?function(e,t){return Y.encodeInto(e,t)}:function(e,t){const n=Y.encode(e);return t.set(n),{read:e.length,written:n.length}};function Pe(e,t,n){if(n===void 0){const c=Y.encode(e),l=t(c.length,1)>>>0;return X().subarray(l,l+c.length).set(c),ne=c.length,l}let r=e.length,o=t(r,1)>>>0;const i=X();let s=0;for(;s<r;s++){const c=e.charCodeAt(s);if(c>127)break;i[o+s]=c}if(s!==r){s!==0&&(e=e.slice(s)),o=n(o,r,r=s+e.length*3,1)>>>0;const c=X().subarray(o+s,o+r),l=jt(e,c);s+=l.written,o=n(o,r,s,1)>>>0}return ne=s,o}let G=null;function re(){return(G===null||G.byteLength===0)&&(G=new Int32Array(w.memory.buffer)),G}const Pt=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let Ie=new Pt("utf-8",{ignoreBOM:!0,fatal:!0});Ie.decode();function ze(e,t){return e=e>>>0,Ie.decode(X().subarray(e,e+t))}function It(e){let t,n;try{const i=w.__wbindgen_add_to_stack_pointer(-16),s=Pe(e,w.__wbindgen_malloc,w.__wbindgen_realloc),c=ne;w.parse(i,s,c);var r=re()[i/4+0],o=re()[i/4+1];return t=r,n=o,ze(r,o)}finally{w.__wbindgen_add_to_stack_pointer(16),w.__wbindgen_free(t,n,1)}}function zt(e){D===b.length&&b.push(b.length+1);const t=D;return D=b[t],b[t]=e,t}function Re(){const e=new Error;return zt(e)}function Ue(e,t){const n=je(t).stack,r=Pe(n,w.__wbindgen_malloc,w.__wbindgen_realloc),o=ne;re()[e/4+1]=o,re()[e/4+0]=r}function We(e,t){let n,r;try{n=e,r=t,console.error(ze(e,t))}finally{w.__wbindgen_free(n,r,1)}}function Be(e){Ct(e)}URL=globalThis.URL;const z=await Lt({"./markdown_parser_bg.js":{__wbg_new_abda76e883ba8a5f:Re,__wbg_stack_658279fe44541cf6:Ue,__wbg_error_f851667af71bcfc6:We,__wbindgen_object_drop_ref:Be}},St),Rt=z.memory,Ut=z.parse,Wt=z.__wbindgen_add_to_stack_pointer,Bt=z.__wbindgen_malloc,Dt=z.__wbindgen_realloc,qt=z.__wbindgen_free,Vt=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_add_to_stack_pointer:Wt,__wbindgen_free:qt,__wbindgen_malloc:Bt,__wbindgen_realloc:Dt,memory:Rt,parse:Ut},Symbol.toStringTag,{value:"Module"}));Ne(Vt);const Ht=Object.freeze(Object.defineProperty({__proto__:null,__wbg_error_f851667af71bcfc6:We,__wbg_new_abda76e883ba8a5f:Re,__wbg_set_wasm:Ne,__wbg_stack_658279fe44541cf6:Ue,__wbindgen_object_drop_ref:Be,parse:It},Symbol.toStringTag,{value:"Module"}));function ke(e){let t,n,r,o,i,s;return n=new Ot({props:{size:"40",color:"white",src:Tt}}),{c(){t=y("div"),Q(n.$$.fragment),x(t,"class","preview-button svelte-1vmqe1e")},m(c,l){I(c,t,l),W(n,t,null),o=!0,i||(s=Te(t,"click",e[1]),i=!0)},p:g,i(c){o||(k(n.$$.fragment,c),c&&V(()=>{o&&(r||(r=be(t,$e,{y:-50,x:-50},!0)),r.run(1))}),o=!0)},o(c){A(n.$$.fragment,c),c&&(r||(r=be(t,$e,{y:-50,x:-50},!1)),r.run(0)),o=!1},d(c){c&&E(t),B(n),c&&r&&r.end(),i=!1,s()}}}function Ft(e){let t,n,r,o,i,s,c,l,f,m,d;n=new wt({}),s=new $t({}),f=new xt({});let u=e[0]&&ke(e);return{c(){t=y("main"),Q(n.$$.fragment),r=ce(),o=y("div"),i=y("div"),Q(s.$$.fragment),c=ce(),l=y("div"),Q(f.$$.fragment),m=ce(),u&&u.c(),M(i,"height","100%"),M(i,"margin-right","15px"),M(l,"flex","1"),M(l,"min-width","250px"),M(l,"height","100%"),x(o,"class","input-container svelte-1vmqe1e")},m(_,a){I(_,t,a),W(n,t,null),v(t,r),v(t,o),v(o,i),W(s,i,null),v(o,c),v(o,l),W(f,l,null),v(t,m),u&&u.m(t,null),d=!0},p(_,[a]){_[0]?u?(u.p(_,a),a&1&&k(u,1)):(u=ke(_),u.c(),k(u,1),u.m(t,null)):u&&(ut(),A(u,1,1,()=>{u=null}),at())},i(_){d||(k(n.$$.fragment,_),k(s.$$.fragment,_),k(f.$$.fragment,_),k(u),d=!0)},o(_){A(n.$$.fragment,_),A(s.$$.fragment,_),A(f.$$.fragment,_),A(u),d=!1},d(_){_&&E(t),B(n),B(s),B(f),u&&u.d()}}}function Zt(e,t,n){let r;async function o(){r=Ht}Se(()=>{o(),window.addEventListener("keydown",c),de.subscribe(f=>{console.log(f),f&&f.length>10?n(0,i=!0):n(0,i=!1),s=f,l()})});let i=!1,s="";function c(f){console.log(f),f.ctrlKey&&f.keyCode==13&&(console.log("Markdown"),l())}function l(){let f=r.parse(s);Ce.set(f)}return[i,l]}class Kt extends F{constructor(t){super(),H(this,t,Zt,Ft,P,{})}}new Kt({target:document.getElementById("app")});
