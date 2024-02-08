(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const Ce=(e,t)=>e===t,ve=Symbol("solid-track"),U={equals:Ce};let le=ce;const N=1,D=2,ie={owned:null,cleanups:null,context:null,owner:null};var h=null;let z=null,$e=null,d=null,g=null,A=null,Y=0;function O(e,t){const n=d,s=h,l=e.length===0,i=t===void 0?s:t,o=l?ie:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=l?e:()=>e(()=>_(()=>K(o)));h=o,d=null;try{return B(r,!0)}finally{d=n,h=s}}function M(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),oe(n,l));return[re.bind(n),s]}function q(e,t,n){const s=V(e,t,!1,N);k(s)}function Se(e,t,n){le=je;const s=V(e,t,!1,N);(!n||!n.render)&&(s.user=!0),A?A.push(s):k(s)}function F(e,t,n){n=n?Object.assign({},U,n):U;const s=V(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,k(s),re.bind(s)}function _(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function Ae(e){Se(()=>_(e))}function _e(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function re(){if(this.sources&&this.state)if(this.state===N)k(this);else{const e=g;g=null,B(()=>R(this),!1),g=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function oe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=z&&z.running;o&&z.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?g.push(i):A.push(i),i.observers&&fe(i)),o||(i.state=N)}if(g.length>1e6)throw g=[],new Error},!1)),t}function k(e){if(!e.fn)return;K(e);const t=Y;Ee(e,e.value,t)}function Ee(e,t,n){let s;const l=h,i=d;d=h=e;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=N,e.owned&&e.owned.forEach(K),e.owned=null),e.updatedAt=n+1,ue(o)}finally{d=i,h=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,s):e.value=s,e.updatedAt=n)}function V(e,t,n,s=N,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==ie&&(h.owned?h.owned.push(i):h.owned=[i]),i}function Q(e){if(e.state===0)return;if(e.state===D)return R(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===N)k(e);else if(e.state===D){const s=g;g=null,B(()=>R(e,t[0]),!1),g=s}}function B(e,t){if(g)return e();let n=!1;t||(g=[]),A?n=!0:A=[],Y++;try{const s=e();return Ne(n),s}catch(s){n||(A=null),g=null,ue(s)}}function Ne(e){if(g&&(ce(g),g=null),e)return;const t=A;A=null,t.length&&B(()=>le(t),!1)}function ce(e){for(let t=0;t<e.length;t++)Q(e[t])}function je(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:Q(s)}for(t=0;t<n;t++)Q(e[t])}function R(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===N?s!==t&&(!s.updatedAt||s.updatedAt<Y)&&Q(s):l===D&&R(s,t)}}}function fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=D,n.pure?g.push(n):A.push(n),n.observers&&fe(n))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),o=n.observerSlots.pop();s<l.length&&(i.sourceSlots[o]=s,l[s]=i,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Te(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ue(e,t=h){throw Te(e)}const Le=Symbol("fallback");function J(e){for(let t=0;t<e.length;t++)e[t]()}function Pe(e,t,n={}){let s=[],l=[],i=[],o=0,r=t.length>1?[]:null;return _e(()=>J(i)),()=>{let f=e()||[],a,c;return f[ve],_(()=>{let u=f.length,m,C,j,T,E,y,x,w,$;if(u===0)o!==0&&(J(i),i=[],s=[],l=[],o=0,r&&(r=[])),n.fallback&&(s=[Le],l[0]=O(p=>(i[0]=p,n.fallback())),o=1);else if(o===0){for(l=new Array(u),c=0;c<u;c++)s[c]=f[c],l[c]=O(b);o=u}else{for(j=new Array(u),T=new Array(u),r&&(E=new Array(u)),y=0,x=Math.min(o,u);y<x&&s[y]===f[y];y++);for(x=o-1,w=u-1;x>=y&&w>=y&&s[x]===f[w];x--,w--)j[w]=l[x],T[w]=i[x],r&&(E[w]=r[x]);for(m=new Map,C=new Array(w+1),c=w;c>=y;c--)$=f[c],a=m.get($),C[c]=a===void 0?-1:a,m.set($,c);for(a=y;a<=x;a++)$=s[a],c=m.get($),c!==void 0&&c!==-1?(j[c]=l[a],T[c]=i[a],r&&(E[c]=r[a]),c=C[c],m.set($,c)):i[a]();for(c=y;c<u;c++)c in j?(l[c]=j[c],i[c]=T[c],r&&(r[c]=E[c],r[c](c))):l[c]=O(b);l=l.slice(0,o=u),s=f.slice(0)}return l});function b(u){if(i[c]=u,r){const[m,C]=M(c);return r[c]=C,t(f[c],m)}return t(f[c])}}}function I(e,t){return _(()=>e(t||{}))}const Me=e=>`Stale read from <${e}>.`;function ke(e){const t="fallback"in e&&{fallback:()=>e.fallback};return F(Pe(()=>e.each,e.children,t||void 0))}function ee(e){const t=e.keyed,n=F(()=>e.when,void 0,{equals:(s,l)=>t?s===l:!s==!l});return F(()=>{const s=n();if(s){const l=e.children;return typeof l=="function"&&l.length>0?_(()=>l(t?s:()=>{if(!_(n))throw Me("Show");return e.when})):l}return e.fallback},void 0,void 0)}function Be(e,t,n){let s=n.length,l=t.length,i=s,o=0,r=0,f=t[l-1].nextSibling,a=null;for(;o<l||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===o){const c=i<s?r?n[r-1].nextSibling:n[i-r]:f;for(;r<i;)e.insertBefore(n[r++],c)}else if(i===r)for(;o<l;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[l]=n[i]}else{if(!a){a=new Map;let b=r;for(;b<i;)a.set(n[b],b++)}const c=a.get(t[o]);if(c!=null)if(r<c&&c<i){let b=o,u=1,m;for(;++b<l&&b<i&&!((m=a.get(t[b]))==null||m!==c+u);)u++;if(u>c-r){const C=t[o];for(;r<c;)e.insertBefore(n[r++],C)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const te="_$DX_DELEGATE";function Oe(e,t,n,s={}){let l;return O(i=>{l=i,t===document?e():S(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function P(e,t,n){let s;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},i=t?()=>_(()=>document.importNode(s||(s=l()),!0)):()=>(s||(s=l())).cloneNode(!0);return i.cloneNode=i,i}function Ie(e,t=window.document){const n=t[te]||(t[te]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Ue))}}function G(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ne(e,t,n){return _(()=>e(t,n))}function S(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return W(e,t,s,n);q(l=>W(e,t(),l,n),s)}function Ue(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?s.call(n,l,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function W(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=L(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=L(e,n,s);else{if(i==="function")return q(()=>{let r=t();for(;typeof r=="function";)r=r();n=W(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],f=n&&Array.isArray(n);if(H(r,t,n,l))return q(()=>n=W(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=L(e,n,s),o)return n}else f?n.length===0?se(e,r,s):Be(e,n,r):(n&&L(e),se(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=L(e,n,s,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function H(e,t,n,s){let l=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],f=n&&n[i],a;if(!(r==null||r===!0||r===!1))if((a=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=H(e,r,f)||l;else if(a==="function")if(s){for(;typeof r=="function";)r=r();l=H(e,Array.isArray(r)?r:[r],Array.isArray(f)?f:[f])||l}else e.push(r),l=!0;else{const c=String(r);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return l}function se(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function L(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const f=r.parentNode===e;!i&&!o?f?e.replaceChild(l,r):e.insertBefore(l,n):f&&r.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}const De="https://angeljohank.github.io/para-mi-chicolac/assets/bg-P6wtj3Wl.png",qe="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201440%20320'%3e%3cpath%20fill='%23f43f5e'%20fill-opacity='1'%20d='M0,64L21.8,80C43.6,96,87,128,131,138.7C174.5,149,218,139,262,122.7C305.5,107,349,85,393,117.3C436.4,149,480,235,524,234.7C567.3,235,611,149,655,112C698.2,75,742,85,785,90.7C829.1,96,873,96,916,112C960,128,1004,160,1047,154.7C1090.9,149,1135,107,1178,96C1221.8,85,1265,107,1309,106.7C1352.7,107,1396,85,1418,74.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z'%3e%3c/path%3e%3c/svg%3e",Fe="https://angeljohank.github.io/para-mi-chicolac/assets/cat-T8dDP3bU.gif",ae=Ye(),[Qe,Re]=M(ae),We=new IntersectionObserver(e=>{e[0].isIntersecting&&Re(n=>n.concat(ae))},{rootMargin:"100px"});function Ye(){let e=[];const t="mucho",n=["🍄","❤️","🐥","🍣","🍍","🦓","🧂","🪳","☕","🌙","🐈","🦖","🌱"];for(const s of n)e.push(`${s} ${t} ${s}`);return e}var Ke=P('<div class="p-4 max-w-xl mx-auto"><div class="flex justify-end mb-2"><div class="rounded-lg py-2 px-3"style=background-color:#015d4b><p class="text-sm mt-1"style=color:#e5efec>Ya lo sabía amorcito</p><p class="text-right text-xs mt-1"style=color:#76a79e></p></div></div><div class="flex justify-end mb-2"><div class="rounded-lg py-2 px-3"style=background-color:#015d4b><p class="text-sm mt-1"style=color:#e5efec>Te amo &lt;3</p><p class="text-right text-xs mt-1"style=color:#76a79e></p></div></div><div class="flex justify-end mb-2"><div class=py-2><img class=w-40><p class="text-right text-xs mt-1"style=color:#838283>'),ze=P('<p class="text-4xl text-center text-white font-bold mb-2 px-4">Me Quieres?'),Ge=P('<button type=button class="text-center block mx-auto mb-4 px-8 py-3 min-w-40 font-semibold rounded bg-red-400 text-white">Si'),He=P('<button type=button class="block mx-auto inlineblock px-8 py-3 min-w-40 max-h-12 font-semibold rounded bg-slate-600 text-white">'),Ve=P('<div class="min-h-screen max-w-6xl mx-auto overflow-hidden"><div><img class="w-screen h-32 object-cover rotate-180"style="object-position:80% 50%;"><h1 class="text-5xl text-center text-white font-bold px-4 max-w-xl mx-auto">Feliz Mes Fantasma <span>❤️</span></h1><img class="mx-auto object-cover h-40"></div><p class="text-4xl mt-4 text-center text-white font-bold mb-2 px-4">¿Quieres Saber Cuánto Te Quiero?</p><p class="text-white text-center px-4">hay una forma de expresar lo que no se puede medir <span class="text-center text-red-300">(baja tanto como quieras)</span></p><div class="flex-col items-center justify-center"></div><div class=h-4>'),Xe=P('<p class="px-8 py-3 text-4xl font-bold text-center text-white">');const Ze=()=>{let e,t;const[n,s]=M(!1),[l,i]=M(0),[o,r]=M(""),f=()=>l()*10+16,a=()=>{const u=["No","No me quieres?","Segura?","Segurísima?","Brenda Melissa!!!","Última oportunidad","Amor???","beterraga en ensalada","Piénsalo otra vez","Estás completamente segura?","Me soplas el ojito","cuchurrumin de chicolac?","No seas tan fría","Cambiaste de parecer?","No lo reconsiderarías?","Esa es tu respuesta final?","Estás rompiendo mi corazón </3"];return u[Math.min(l(),u.length-1)]},c=()=>{i(u=>u+1),t&&(t.style.width=`${t.offsetWidth*1.05}px`)},b=()=>{let m=new Date().toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0});r(m),s(!0)};return Ae(()=>{We.observe(e)}),(()=>{var u=Ve(),m=u.firstChild,C=m.firstChild,j=C.nextSibling,T=j.nextSibling,E=m.nextSibling,y=E.nextSibling,x=y.nextSibling,w=x.nextSibling;G(C,"src",qe),G(T,"src",De),S(u,I(ee,{get when(){return n()},get children(){var p=Ke(),v=p.firstChild,de=v.firstChild,he=de.firstChild,pe=he.nextSibling,X=v.nextSibling,ge=X.firstChild,me=ge.firstChild,xe=me.nextSibling,be=X.nextSibling,ye=be.firstChild,Z=ye.firstChild,we=Z.nextSibling;return S(pe,o),S(xe,o),G(Z,"src",Fe),S(we,o),p}}),E),S(u,I(ee,{get when(){return!n()},get children(){return[ze(),(()=>{var p=Ge();p.$$click=b;var v=t;return typeof v=="function"?ne(v,p):t=p,q(()=>`${f()}px`!=null?p.style.setProperty("font-size",`${f()}px`):p.style.removeProperty("font-size")),p})(),(()=>{var p=He();return p.$$click=c,S(p,(()=>{var v=F(()=>l()==0);return()=>v()?"No":a()})()),p})()]}}),E),S(x,I(ke,{get each(){return Qe()},children:p=>(()=>{var v=Xe();return S(v,p),v})()}));var $=e;return typeof $=="function"?ne($,w):e=w,u})()};Ie(["click"]);const Je=document.getElementById("root");Oe(()=>I(Ze,{}),Je);