const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as H}from"../chunks/C1FmrZbK.js";import{n as ce,a as b,t as A,c as de}from"../chunks/BIVcZvF3.js";import{C as ue,av as fe,aI as _e,t as C,Z as me,ar as g,af as k,P as F,O as pe,f as K,at as ge,s as h,a3 as a,_ as xe,j as t,c as w,R as ve,$ as he,r as I,a4 as U}from"../chunks/DbnQEXcm.js";import{d as be,h as ye,s as G}from"../chunks/H6IxwAr8.js";import{i as q}from"../chunks/fYx0udOX.js";import{e as we,i as Ie}from"../chunks/Dl63Qx_J.js";import{a as Oe,b as Ee}from"../chunks/DiqXLsPs.js";import{E as Ae}from"../chunks/ie6cfN5Z.js";import{N as Se}from"../chunks/DyroL-H0.js";import{r as ke}from"../chunks/BvKHFP65.js";const Ce=[];function Te(e,s=!1){return T(e,new Map,"",Ce)}function T(e,s,d,l,i=null){if(typeof e=="object"&&e!==null){var x=s.get(e);if(x!==void 0)return x;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(ue(e)){var c=Array(e.length);s.set(e,c),i!==null&&s.set(i,c);for(var f=0;f<e.length;f+=1){var p=e[f];f in e&&(c[f]=T(p,s,d,l))}return c}if(fe(e)===_e){c={},s.set(e,c),i!==null&&s.set(i,c);for(var O in e)c[O]=T(e[O],s,d,l);return c}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return T(e.toJSON(),s,d,l,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}const Re=`{x > 4} //GENERATED PRECONDITION
// Algorithm: Repeated addition
/*
  In this program we compute a * n using repeated addition
  TODO: Make the program fully annotated and verified
*/

do [I]
  i != n ->
    r := r + a;
    i := i + 1
od
{i = n & r = a * n}`,De=`// Solution: Repeated addition
{i != n & r = a * i}
do [r = a * i]
  i != n ->
    {r = a * (i + 1) - a}
    r := r + a;
    {r = a * (i + 1)}
    i := i + 1
    {r = a * i}
od
{i = n & r = a * n}`,Pe=`// Algorithm: Sum of squares
/*
  In this program we compute 1^2 + 2^2 + ... + n^2
  TODO: Make the program fully annotated and verified
*/

{ i = 0 & s = 0}
do [I]
  i != n ->
    i := i + 1;
    s := s + i * i
od

{ i = n & s = n * (n + 1) * (2 * n + 1) / 6 }`,Le=`// Solution: Sum of Squares
{ i != n & s = i * (i + 1) * (2 * i + 1) / 6}
do [s = i * (i + 1) * (2 * i + 1) / 6]
  i != n ->
    {s + (i + 1) * (i + 1) = (i + 1) * ((i + 1) + 1) * (2 * (i + 1) + 1) / 6}
    {s = (i + 1) * (i + 2) * (2 * i + 3) / 6 - exp(i + 1, 2)}
    i := i + 1;
    {s + i * i = i * (i + 1) * (2 * i + 1) / 6}
    s := s + i * i
    { s = i * (i + 1) * (2 * i + 1) / 6 }
od
{ i = n & s = n * (n + 1) * (2 * n + 1) / 6 }`,Me=`// Algorithm: Doubling
/*
  In this program we compute 2^n
  TODO: Add invariant [I] to make the program verify
*/
do [I]
  i < n ->
    i := i + 1;
    x := 2 * x
od
{i = n & x = exp(2, n)}`,Ne=`// Solution: Doubling
{0 <= i & i <= n & x = exp(2, i)}
do [0 <= i & i <= n & x = exp(2, i)]
  i < n ->
    {0 <= i + 1 & i + 1 <= n & 2 * x = exp(2, i + 1)}
    i := i + 1;
    {0 <= i & i <= n & 2 * x = exp(2, i)}
    x := 2 * x
    {0 <= i & i <= n & x = exp(2, i)}
od
{i = n & x = exp(2, n)}`,$e=`// Algorithm: Triangular Numbers
/*
  Your good friend says that this program computes the sum of the first n natural numbers - 
  However he's not used to writing GCL and his program does not parse.
  t = 1 + 2 + ... + n
  TODO: Fix his program and prove that the algorithm is correct for all inputs
*/

i := 0
t := 0
n := 3

do while [i != n]:
    i := i + 1;
    t := t + i + 1
od
{i = n & t := 1 + 2 + ... + n}`,Ve=`// Solution: Triangular Numbers
{i != n & t = i * (i + 1) / 2}
do [t = i * (i + 1) / 2] 
  i != n ->
    {t = i * (i + 1) / 2}
    {t = (i + 1) * i / 2}
    {t = (i + 1) * ((i + 1) - 1) / 2}
    i := i + 1;
    {t = i * (i - 1) / 2}
    {t = i * (i + 1) / 2 - i}
    {t + i = i * (i + 1) / 2}
    t := t + i
    {t = i * (i + 1) / 2}
od
{i = n & t = n * (n + 1) / 2}`;var je=ce('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function Fe(e,s){const d=ke(s,["$$slots","$$events","$$legacy"]);var l=je();let i;C(()=>i=Oe(l,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...d})),b(e,l)}const Ge=(e,s,d,l)=>{if(t(s)){a(d,null);try{a(l,t(s)(),!0)}catch(i){a(d,i instanceof Error?i.message:"Failed to generate challenge",!0)}}},qe=(e,s,d,l)=>{if(t(s)){a(d,null);try{a(l,t(s)(),!0)}catch(i){a(d,i instanceof Error?i.message:"Failed to generate sample program",!0)}}};var Je=A('<meta name="description" content="Chip">'),We=A("The program is <b>fully annotated</b>",1),Ye=A("The program is <b><i>not</i> fully annotated</b>",1),Ze=A('<span class="ml-4 text-base text-white/80"> </span>'),ze=A("<option> </option>"),Be=A('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <div class="flex-1"></div> <span class="text-xl"><!></span> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option disabled selected>Loops</option><!></select></div></div>',1);function st(e,s){me(s,!0);const d=`{ true }
if
  false -> skip
fi
{ true }`,l="chip-program";let i=g(k((typeof localStorage.getItem(l)=="string"?localStorage.getItem(l):null)||d));F(()=>{localStorage.setItem(l,t(i))});let x=g(k({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),c=g(k([])),f=g(!1),p=g("idle"),O=g(null),S=g(null),R=g(null),D=g(null);const Q=Object.values(Object.assign({"./exercises/exercise1.txt":Re,"./exercises/exercise1s.txt":De,"./exercises/exercise2.txt":Pe,"./exercises/exercise2s.txt":Le,"./exercises/exercise3.txt":Me,"./exercises/exercise3s.txt":Ne,"./exercises/exercise4.txt":$e,"./exercises/exercise4s.txt":Ve}));let J=k(Q.map((r,n)=>{const o=r.split(`
`),u=o.find(_=>_.startsWith("// Algorithm:")),v=o.find(_=>_.startsWith("// Solution:"));return{label:u?u.replace("// Algorithm:","").trim():v?v.replace("// Solution:","S:").trim():`Exercise ${n+1}`,content:r}}));const X=r=>{a(i,r,!0)};pe(()=>{(async()=>{const n=await H(()=>import("../chunks/c0FNs335.js"),[],import.meta.url);await n.default(),a(O,n.parse,!0),a(R,n.generateSampleProgram,!0),a(D,n.generateChallenge,!0)})().catch(console.error)}),F(()=>{if(!t(O))return;a(f,!1);const r=t(O)(t(i));r.parse_error&&a(f,!0),a(x,r,!0)});let P=0;F(()=>{const r=Te(t(x));let n=()=>{};return(async()=>{const u=++P,v=await H(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);a(c,[],!0),a(p,"verifying");let m=!1,_=!1;for(const y of r.assertions){const{cancel:se,result:oe}=v.run(y.smt,{prelude:r.prelude});n=se;const E=await oe;if(E=="cancelled")return;_||(_=E[E.length-1].trim()==="timeout");const le=E[E.length-1].trim()==="unsat";if(u!==P){console.info("aborted",u,P,r,E);return}(!le||_)&&(m=!0,a(c,[...ve(()=>t(c)),{severity:"Error",tags:[],message:y.text?y.text:"Verification failed",span:y.span,relatedInformation:[]},...y.related?[{severity:"Info",tags:[],message:y.related[0],span:y.related[1],relatedInformation:[]}]:[]],!0))}m?a(p,_?"timeout":"error",!0):a(p,"verified")})().catch(console.error),()=>{n()}});var W=Be();ye(r=>{var n=Je();he.title="Chip",b(r,n)});var Y=K(W);Se(Y,{title:"Chip",Icon:Fe,onProgramChange:X});var Z=h(Y,2),z=w(Z);const ee=ge(()=>[...t(x).markers,...t(c)]);Ae(z,{get markers(){return t(ee)},get value(){return t(i)},set value(r){a(i,r,!0)}});var L=h(z,2),M=w(L),te=w(M,!0);I(M);var N=h(M,4),re=w(N);{var ne=r=>{var n=de(),o=K(n);{var u=m=>{var _=We();U(),b(m,_)},v=m=>{var _=Ye();U(),b(m,_)};q(o,m=>{t(x).is_fully_annotated?m(u):m(v,!1)})}b(r,n)};q(re,r=>{!t(f)&&t(p)=="verified"&&r(ne)})}I(N);var B=h(N,2);{var ie=r=>{var n=Ze(),o=w(n,!0);I(n),C(()=>G(o,t(S))),b(r,n)};q(B,r=>{t(S)&&r(ie)})}var $=h(B,2);$.__click=[qe,R,S,i];var V=h($,2);V.__click=[Ge,D,S,i];var j=h(V,2);j.__change=r=>{const n=r.target,o=J.find(u=>u.label===n.value);o&&a(i,o.content,!0),n.selectedIndex=0};var ae=h(w(j));we(ae,17,()=>J,Ie,(r,n)=>{var o=ze(),u={},v=w(o,!0);I(o),C(()=>{u!==(u=t(n).label)&&(o.value=(o.__value=t(n).label)==null?"":t(n).label),G(v,t(n).label)}),b(r,o)}),I(j),I(L),I(Z),C(()=>{Ee(L,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(t(f)?"bg-purple-600":t(p)==="verified"&&!t(x).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[t(p)])??""}`),G(te,t(f)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified",error:"Verification error",timeout:"Verification timed out"}[t(p)]),$.disabled=!t(R),V.disabled=!t(D)}),b(e,W),xe()}be(["click","change"]);export{st as component};
