const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/DeaPzKNl.js","../chunks/Cic9dYu4.js","../chunks/D1zmhctr.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as Q}from"../chunks/Cic9dYu4.js";import{n as se,a as b,t as I,c as ie}from"../chunks/BBR7ip-6.js";import{D as le,ar as ce,aE as fe,T as N,a1 as ue,an as _,ab as V,a as G,u as de,Q as U,ap as _e,R as v,a2 as me,g as t,a5 as a,S as k,b as pe,$ as ge,P as w,aF as Y}from"../chunks/D1zmhctr.js";import{d as ve,h as be,s as Z}from"../chunks/DkSVXInp.js";import{i as j}from"../chunks/D5kVYFOq.js";import{a as xe,b as he}from"../chunks/-S1AqI95.js";import{E as ye}from"../chunks/CSpg6HGH.js";import{N as ke}from"../chunks/f3PxN2Tj.js";import{r as we}from"../chunks/BNigkoUp.js";const Ie=[];function Oe(e,r=!1){return E(e,new Map,"",Ie)}function E(e,r,s,i,n=null){if(typeof e=="object"&&e!==null){var m=r.get(e);if(m!==void 0)return m;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(le(e)){var c=Array(e.length);r.set(e,c),n!==null&&r.set(n,c);for(var f=0;f<e.length;f+=1){var u=e[f];f in e&&(c[f]=E(u,r,s,i))}return c}if(ce(e)===fe){c={},r.set(e,c),n!==null&&r.set(n,c);for(var x in e)c[x]=E(e[x],r,s,i);return c}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return E(e.toJSON(),r,s,i,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}const Ce=`// Goal: Compute r = a * n using repeated addition
// TODO: Make the program fully annotated and verified
do [I]
  i != n ->
    r := r + a;
    i := i + 1
od
{i = n & r = a * n}`,Ee=`// Goal: Compute the sum of numbers from 1 to n
// TODO: Annotate loop invariant to compute sum
r := 0;
i := 1;
do [I]
  i <= n ->
    r := r + i;
    i := i + 1
od
{r = n * (n + 1) / 2}`,Ae=`// Goal: Compute n!
// TODO: Annotate loop invariant to compute factorial
r := 1;
i := 1;
do [I]
  i <= n ->
    r := r * i;
    i := i + 1
od
{r = n!}`,Te=`// Goal: Compute r = x * y using repeated addition
// TODO: Annotate loop invariant
r := 0;
i := 0;
do [I]
  i != y ->
    r := r + x;
    i := i + 1
od
{i = y & r = x * y}`,Me=`do [I]
  i != n ->
    r := r + s + t + 1;
    s := s + 2 * t + 3;
    t := t + 3;
    i := i + 1
od
{i = n & r = n * n * n}`;var Re=se('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function De(e,r){const s=we(r,["$$slots","$$events","$$legacy"]);var i=Re();let n;N(()=>n=xe(i,n,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s})),b(e,i)}const Pe=(e,r,s,i)=>{if(r.length===0){a(s,"No loop exercises available");return}a(i,r[Math.floor(Math.random()*r.length)],!0),a(s,null)},Se=(e,r,s,i)=>{if(t(r)){a(s,null);try{a(i,t(r)(),!0)}catch(n){a(s,n instanceof Error?n.message:"Failed to generate challenge",!0)}}},$e=(e,r,s,i)=>{if(t(r)){a(s,null);try{a(i,t(r)(),!0)}catch(n){a(s,n instanceof Error?n.message:"Failed to generate sample program",!0)}}};var Le=I('<meta name="description" content="Chip">'),Ve=I("The program is <b>fully annotated</b>",1),Ge=I("The program is <b><i>not</i> fully annotated</b>",1),je=I('<span class="ml-4 text-base text-white/80"> </span>'),Ne=I('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <div class="flex-1"></div> <span class="text-xl"><!></span> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Loops</button></div></div>',1);function He(e,r){ue(r,!0);const s=`{ true }
if
  false -> skip
fi
{ true }`,i="chip-program";let n=_(V((typeof localStorage.getItem(i)=="string"?localStorage.getItem(i):null)||s));G(()=>{localStorage.setItem(i,t(n))});let m=_(V({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),c=_(V([])),f=_(!1),u=_("idle"),x=_(null),h=_(null),A=_(null),T=_(null);const q=Object.values(Object.assign({"./exercises/exercise1.txt":Ce,"./exercises/exercise2.txt":Ee,"./exercises/exercise3.txt":Ae,"./exercises/exercise4.txt":Te,"./exercises/exercise5.txt":Me}));de(()=>{(async()=>{const l=await Q(()=>import("../chunks/IvK3kVDg.js"),[],import.meta.url);await l.default(),a(x,l.parse,!0),a(A,l.generateSampleProgram,!0),a(T,l.generateChallenge,!0)})().catch(console.error)}),G(()=>{if(!t(x))return;a(f,!1);const o=t(x)(t(n));o.parse_error&&a(f,!0),a(m,o,!0)});let M=0;G(()=>{const o=Oe(t(m));let l=()=>{};return(async()=>{const C=++M,L=await Q(()=>import("../chunks/DeaPzKNl.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);a(c,[],!0),a(u,"verifying");let d=!1,p=!1;for(const g of o.assertions){const{cancel:ne,result:ae}=L.run(g.smt,{prelude:o.prelude});l=ne;const y=await ae;if(y=="cancelled")return;p||(p=y[y.length-1].trim()==="timeout");const oe=y[y.length-1].trim()==="unsat";if(C!==M){console.info("aborted",C,M,o,y);return}(!oe||p)&&(d=!0,a(c,[...pe(()=>t(c)),{severity:"Error",tags:[],message:g.text?g.text:"Verification failed",span:g.span,relatedInformation:[]},...g.related?[{severity:"Info",tags:[],message:g.related[0],span:g.related[1],relatedInformation:[]}]:[]],!0))}d?a(u,p?"timeout":"error",!0):a(u,"verified")})().catch(console.error),()=>{l()}});var F=Ne();be(o=>{var l=Le();ge.title="Chip",b(o,l)});var J=U(F);ke(J,{title:"Chip",Icon:De});var z=v(J,2),B=k(z);const H=_e(()=>[...t(m).markers,...t(c)]);ye(B,{get markers(){return t(H)},get value(){return t(n)},set value(o){a(n,o,!0)}});var R=v(B,2),D=k(R),W=k(D,!0);w(D);var P=v(D,4),X=k(P);{var ee=o=>{var l=ie(),O=U(l);{var C=d=>{var p=Ve();Y(),b(d,p)},L=d=>{var p=Ge();Y(),b(d,p)};j(O,d=>{t(m).is_fully_annotated?d(C):d(L,!1)})}b(o,l)};j(X,o=>{!t(f)&&t(u)=="verified"&&o(ee)})}w(P);var K=v(P,2);{var te=o=>{var l=je(),O=k(l,!0);w(l),N(()=>Z(O,t(h))),b(o,l)};j(K,o=>{t(h)&&o(te)})}var S=v(K,2);S.__click=[$e,A,h,n];var $=v(S,2);$.__click=[Se,T,h,n];var re=v($,2);re.__click=[Pe,q,h,n],w(R),w(z),N(()=>{he(R,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(t(f)?"bg-purple-600":t(u)==="verified"&&!t(m).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[t(u)])??""}`),Z(W,t(f)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified",error:"Verification error",timeout:"Verification timed out"}[t(u)]),S.disabled=!t(A),$.disabled=!t(T)}),b(e,F),me()}ve(["click"]);export{He as component};
