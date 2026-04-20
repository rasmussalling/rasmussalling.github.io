const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as H}from"../chunks/C1FmrZbK.js";import{n as ce,a as b,t as k,c as de}from"../chunks/BIVcZvF3.js";import{C as ue,av as fe,aI as _e,t as C,Z as me,ar as g,af as E,P as F,O as pe,f as K,at as ge,s as h,a3 as a,_ as xe,j as t,c as w,R as ve,$ as he,r as I,a4 as U}from"../chunks/DbnQEXcm.js";import{d as be,h as ye,s as G}from"../chunks/H6IxwAr8.js";import{i as q}from"../chunks/fYx0udOX.js";import{e as we,i as Ie}from"../chunks/Dl63Qx_J.js";import{a as Oe,b as Se}from"../chunks/DiqXLsPs.js";import{E as ke}from"../chunks/ie6cfN5Z.js";import{N as Ae}from"../chunks/DyroL-H0.js";import{r as Ee}from"../chunks/BvKHFP65.js";const Ce=[];function Te(e,s=!1){return T(e,new Map,"",Ce)}function T(e,s,d,l,i=null){if(typeof e=="object"&&e!==null){var x=s.get(e);if(x!==void 0)return x;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(ue(e)){var c=Array(e.length);s.set(e,c),i!==null&&s.set(i,c);for(var f=0;f<e.length;f+=1){var p=e[f];f in e&&(c[f]=T(p,s,d,l))}return c}if(fe(e)===_e){c={},s.set(e,c),i!==null&&s.set(i,c);for(var O in e)c[O]=T(e[O],s,d,l);return c}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return T(e.toJSON(),s,d,l,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}const Pe=`// Algorithm: Repeated addition
/*
  In this program we compute a * n using repeated addition
  TODO: Make the program fully annotated and verified
*/

do [I]
  i != n ->
    r := r + a;
    i := i + 1
od
{i = n & r = a * n}`,Re=`// Solution: Repeated addition
{i != n & r = a * i}
do [r = a * i]
  i != n ->
    {r = a * (i + 1) - a}
    r := r + a;
    {r = a * (i + 1)}
    i := i + 1
    {r = a * i}
od
{i = n & r = a * n}`,De=`// Algorithm: Sum of squares
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
{i = n & x = exp(2, n)}`,$e=`// Solution: Doubling
{0 <= i & i <= n & x = exp(2, i)}
do [0 <= i & i <= n & x = exp(2, i)]
  i < n ->
    {0 <= i + 1 & i + 1 <= n & 2 * x = exp(2, i + 1)}
    i := i + 1;
    {0 <= i & i <= n & 2 * x = exp(2, i)}
    x := 2 * x
    {0 <= i & i <= n & x = exp(2, i)}
od
{i = n & x = exp(2, n)}`,Ve=`// Algorithm: Triangular Numbers
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
{i = n & t := 1 + 2 + ... + n}`,je=`// Solution: Triangular Numbers
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
{i = n & t = n * (n + 1) / 2}`;var Ne=ce('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function Fe(e,s){const d=Ee(s,["$$slots","$$events","$$legacy"]);var l=Ne();let i;C(()=>i=Oe(l,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...d})),b(e,l)}const Ge=(e,s,d,l)=>{if(t(s)){a(d,null);try{a(l,t(s)(),!0)}catch(i){a(d,i instanceof Error?i.message:"Failed to generate challenge",!0)}}},qe=(e,s,d,l)=>{if(t(s)){a(d,null);try{a(l,t(s)(),!0)}catch(i){a(d,i instanceof Error?i.message:"Failed to generate sample program",!0)}}};var Je=k('<meta name="description" content="Chip">'),We=k("The program is <b>fully annotated</b>",1),Ye=k("The program is <b><i>not</i> fully annotated</b>",1),Ze=k('<span class="ml-4 text-base text-white/80"> </span>'),ze=k("<option> </option>"),Be=k('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <div class="flex-1"></div> <span class="text-xl"><!></span> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option disabled selected>Loops</option><!></select></div></div>',1);function st(e,s){me(s,!0);const d=`{ true }
if
  false -> skip
fi
{ true }`,l="chip-program";let i=g(E((typeof localStorage.getItem(l)=="string"?localStorage.getItem(l):null)||d));F(()=>{localStorage.setItem(l,t(i))});let x=g(E({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),c=g(E([])),f=g(!1),p=g("idle"),O=g(null),A=g(null),P=g(null),R=g(null);const Q=Object.values(Object.assign({"./exercises/exercise1.txt":Pe,"./exercises/exercise1s.txt":Re,"./exercises/exercise2.txt":De,"./exercises/exercise2s.txt":Le,"./exercises/exercise3.txt":Me,"./exercises/exercise3s.txt":$e,"./exercises/exercise4.txt":Ve,"./exercises/exercise4s.txt":je}));let J=E(Q.map((r,n)=>{const o=r.split(`
`),u=o.find(_=>_.startsWith("// Algorithm:")),v=o.find(_=>_.startsWith("// Solution:"));return{label:u?u.replace("// Algorithm:","").trim():v?v.replace("// Solution:","S:").trim():`Exercise ${n+1}`,content:r}}));const X=r=>{a(i,r,!0)};pe(()=>{(async()=>{const n=await H(()=>import("../chunks/BSldNIXn.js"),[],import.meta.url);await n.default(),a(O,n.parse,!0),a(P,n.generateSampleProgram,!0),a(R,n.generateChallenge,!0)})().catch(console.error)}),F(()=>{if(!t(O))return;a(f,!1);const r=t(O)(t(i));r.parse_error&&a(f,!0),a(x,r,!0)});let D=0;F(()=>{const r=Te(t(x));let n=()=>{};return(async()=>{const u=++D,v=await H(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);a(c,[],!0),a(p,"verifying");let m=!1,_=!1;for(const y of r.assertions){const{cancel:se,result:oe}=v.run(y.smt,{prelude:r.prelude});n=se;const S=await oe;if(S=="cancelled")return;_||(_=S[S.length-1].trim()==="timeout");const le=S[S.length-1].trim()==="unsat";if(u!==D){console.info("aborted",u,D,r,S);return}(!le||_)&&(m=!0,a(c,[...ve(()=>t(c)),{severity:"Error",tags:[],message:y.text?y.text:"Verification failed",span:y.span,relatedInformation:[]},...y.related?[{severity:"Info",tags:[],message:y.related[0],span:y.related[1],relatedInformation:[]}]:[]],!0))}m?a(p,_?"timeout":"error",!0):a(p,"verified")})().catch(console.error),()=>{n()}});var W=Be();ye(r=>{var n=Je();he.title="Chip",b(r,n)});var Y=K(W);Ae(Y,{title:"Chip",Icon:Fe,onProgramChange:X});var Z=h(Y,2),z=w(Z);const ee=ge(()=>[...t(x).markers,...t(c)]);ke(z,{get markers(){return t(ee)},get value(){return t(i)},set value(r){a(i,r,!0)}});var L=h(z,2),M=w(L),te=w(M,!0);I(M);var $=h(M,4),re=w($);{var ne=r=>{var n=de(),o=K(n);{var u=m=>{var _=We();U(),b(m,_)},v=m=>{var _=Ye();U(),b(m,_)};q(o,m=>{t(x).is_fully_annotated?m(u):m(v,!1)})}b(r,n)};q(re,r=>{!t(f)&&t(p)=="verified"&&r(ne)})}I($);var B=h($,2);{var ie=r=>{var n=Ze(),o=w(n,!0);I(n),C(()=>G(o,t(A))),b(r,n)};q(B,r=>{t(A)&&r(ie)})}var V=h(B,2);V.__click=[qe,P,A,i];var j=h(V,2);j.__click=[Ge,R,A,i];var N=h(j,2);N.__change=r=>{const n=r.target,o=J.find(u=>u.label===n.value);o&&a(i,o.content,!0),n.selectedIndex=0};var ae=h(w(N));we(ae,17,()=>J,Ie,(r,n)=>{var o=ze(),u={},v=w(o,!0);I(o),C(()=>{u!==(u=t(n).label)&&(o.value=(o.__value=t(n).label)==null?"":t(n).label),G(v,t(n).label)}),b(r,o)}),I(N),I(L),I(Z),C(()=>{Se(L,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(t(f)?"bg-purple-600":t(p)==="verified"&&!t(x).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[t(p)])??""}`),G(te,t(f)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified",error:"Verification error",timeout:"Verification timed out"}[t(p)]),V.disabled=!t(P),j.disabled=!t(R)}),b(e,W),xe()}be(["click","change"]);export{st as component};
