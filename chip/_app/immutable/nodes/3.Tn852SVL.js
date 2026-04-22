const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as K}from"../chunks/C1FmrZbK.js";import{n as de,a as b,t as A,c as ue}from"../chunks/BIVcZvF3.js";import{C as fe,av as pe,aI as me,t as T,Z as _e,ar as x,af as C,P as F,O as ge,f as U,at as xe,s as h,a3 as a,_ as ve,j as t,c as E,R as he,$ as be,r as I,a4 as Q}from"../chunks/DbnQEXcm.js";import{d as ye,h as Ee,s as G}from"../chunks/H6IxwAr8.js";import{i as q}from"../chunks/fYx0udOX.js";import{e as Ie,i as we}from"../chunks/Dl63Qx_J.js";import{a as Oe,b as Ae}from"../chunks/DiqXLsPs.js";import{E as Se}from"../chunks/BJc2dmXh.js";import{N as ke}from"../chunks/BonRsx0x.js";import{r as Ce}from"../chunks/BvKHFP65.js";const Te=[];function Re(e,s=!1){return R(e,new Map,"",Te)}function R(e,s,d,c,i=null){if(typeof e=="object"&&e!==null){var g=s.get(e);if(g!==void 0)return g;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(fe(e)){var l=Array(e.length);s.set(e,l),i!==null&&s.set(i,l);for(var f=0;f<e.length;f+=1){var m=e[f];f in e&&(l[f]=R(m,s,d,c))}return l}if(pe(e)===me){l={},s.set(e,l),i!==null&&s.set(i,l);for(var w in e)l[w]=R(e[w],s,d,c);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return R(e.toJSON(),s,d,c,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}const De=`{r = a * i}//GENERATED PRECONDITION
// Algorithm: Repeated addition
/*
  In this program we compute a * n using repeated addition
  TODO: Make the program fully annotated and verified
*/
i := 0;
r := 0;
do [I]
  i != n ->
    r := r + a;
    i := i + 1
od
{r = a * n}`,Pe=`{r = a * i}//GENERATED PRECONDITION
// Solution: Repeated addition
{a * 0 = 0}
i := 0;
{a * i = 0}
r := 0;
{r = a * i}
do [r = a * i]
  i != n ->
    {r + a = a * (i + 1)}
    r := r + a;
    {r = a * (i + 1)}
    i := i + 1
    {r = a * i}
od
{r = a * n}`,Ne=`// Algorithm: Sum of squares
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
{i = n & t = n * (n + 1) / 2}`;var Fe=de('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function Ge(e,s){const d=Ce(s,["$$slots","$$events","$$legacy"]);var c=Fe();let i;T(()=>i=Oe(c,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...d})),b(e,c)}const qe=(e,s,d,c)=>{if(t(s)){a(d,null);try{a(c,t(s)(),!0)}catch(i){a(d,i instanceof Error?i.message:"Failed to generate challenge",!0)}}},Je=(e,s,d,c)=>{if(t(s)){a(d,null);try{a(c,t(s)(),!0)}catch(i){a(d,i instanceof Error?i.message:"Failed to generate sample program",!0)}}};var We=A('<meta name="description" content="Chip">'),Ye=A("&nbsp;The program is <b>fully annotated</b>",1),Ze=A("&nbsp;The program is <b><i>not</i> fully annotated</b>",1),ze=A('<span class="ml-4 text-base text-white/80"> </span>'),Be=A("<option> </option>"),He=A('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <span class="text-[0.9em]"><!></span> <div class="flex-1"></div> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option disabled selected>Loops</option><!></select></div></div>',1);function ot(e,s){_e(s,!0);const d=`{ true }
if
  false -> skip
fi
{ true }`,c="chip-program";let i=x(C((typeof localStorage.getItem(c)=="string"?localStorage.getItem(c):null)||d));F(()=>{localStorage.setItem(c,t(i))});let g=x(C({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),l=x(C([])),f=x(!1),m=x("idle"),w=x(null),S=x(null),D=x(null),P=x(null);const X=Object.values(Object.assign({"./exercises/exercise1.txt":De,"./exercises/exercise1s.txt":Pe,"./exercises/exercise2.txt":Ne,"./exercises/exercise2s.txt":Le,"./exercises/exercise3.txt":Me,"./exercises/exercise3s.txt":$e,"./exercises/exercise4.txt":Ve,"./exercises/exercise4s.txt":je}));let J=C(X.map((r,n)=>{const o=r.split(`
`),u=o.find(p=>p.startsWith("// Algorithm:")),v=o.find(p=>p.startsWith("// Solution:"));return{label:u?u.replace("// Algorithm:","").trim():v?v.replace("// Solution:","S:").trim():`Exercise ${n+1}`,content:r}}));const ee=r=>{a(i,r,!0)},W=r=>r.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*/g,"").trim().length===0;ge(()=>{(async()=>{const n=await K(()=>import("../chunks/c0FNs335.js"),[],import.meta.url);await n.default(),a(w,n.parse,!0),a(D,n.generateSampleProgram,!0),a(P,n.generateChallenge,!0)})().catch(console.error)}),F(()=>{if(!t(w))return;if(a(f,!1),W(t(i))){a(g,{parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1},!0);return}const r=t(w)(t(i));r.parse_error&&a(f,!0),a(g,r,!0)});let k=0;F(()=>{const r=Re(t(g));let n=()=>{};if(W(t(i))){++k,a(m,"idle"),a(l,[],!0);return}return(async()=>{const u=++k,v=await K(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);a(l,[],!0),a(m,"verifying");let _=!1,p=!1;for(const y of r.assertions){const{cancel:oe,result:le}=v.run(y.smt,{prelude:r.prelude});n=oe;const O=await le;if(O=="cancelled")return;p||(p=O[O.length-1].trim()==="timeout");const ce=O[O.length-1].trim()==="unsat";if(u!==k){console.info("aborted",u,k,r,O);return}(!ce||p)&&(_=!0,a(l,[...he(()=>t(l)),{severity:"Error",tags:[],message:y.text?y.text:"Verification failed",span:y.span,relatedInformation:[]},...y.related?[{severity:"Info",tags:[],message:y.related[0],span:y.related[1],relatedInformation:[]}]:[]],!0))}_?a(m,p?"timeout":"error",!0):a(m,"verified")})().catch(console.error),()=>{n()}});var Y=He();Ee(r=>{var n=We();be.title="Chip",b(r,n)});var Z=U(Y);ke(Z,{title:"Chip",Icon:Ge,onProgramChange:ee});var z=h(Z,2),B=E(z);const te=xe(()=>[...t(g).markers,...t(l)]);Se(B,{get markers(){return t(te)},get value(){return t(i)},set value(r){a(i,r,!0)}});var N=h(B,2),L=E(N),re=E(L,!0);I(L);var M=h(L,2),ne=E(M);{var ie=r=>{var n=ue(),o=U(n);{var u=_=>{var p=Ye();Q(),b(_,p)},v=_=>{var p=Ze();Q(),b(_,p)};q(o,_=>{t(g).is_fully_annotated?_(u):_(v,!1)})}b(r,n)};q(ne,r=>{!t(f)&&t(m)=="verified"&&r(ie)})}I(M);var H=h(M,4);{var ae=r=>{var n=ze(),o=E(n,!0);I(n),T(()=>G(o,t(S))),b(r,n)};q(H,r=>{t(S)&&r(ae)})}var $=h(H,2);$.__click=[Je,D,S,i];var V=h($,2);V.__click=[qe,P,S,i];var j=h(V,2);j.__change=r=>{const n=r.target,o=J.find(u=>u.label===n.value);o&&a(i,o.content,!0),n.selectedIndex=0};var se=h(E(j));Ie(se,17,()=>J,we,(r,n)=>{var o=Be(),u={},v=E(o,!0);I(o),T(()=>{u!==(u=t(n).label)&&(o.value=(o.__value=t(n).label)==null?"":t(n).label),G(v,t(n).label)}),b(r,o)}),I(j),I(N),I(z),T(()=>{Ae(N,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(t(f)?"bg-purple-600":t(m)==="verified"&&!t(g).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[t(m)])??""}`),G(re,t(f)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified -",error:"Verification error",timeout:"Verification timed out"}[t(m)]),$.disabled=!t(D),V.disabled=!t(P)}),b(e,Y),ve()}ye(["click","change"]);export{ot as component};
