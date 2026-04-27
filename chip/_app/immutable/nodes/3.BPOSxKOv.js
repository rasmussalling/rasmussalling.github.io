const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as X}from"../chunks/C1FmrZbK.js";import{n as me,a as v,t as M,c as _e}from"../chunks/oLf7OQaa.js";import{an as ge,av as he,aI as ve,t as S,B as be,ac as _,Y as D,b as P,u as xe,f as ee,ae as ye,s as h,J as i,c as w,C as we,i as e,g as Ae,$ as Oe,r as A,L as te}from"../chunks/CiJ59dfD.js";import{d as ke,h as Ie,s as W}from"../chunks/xcIJNa73.js";import{i as B}from"../chunks/NeijCObD.js";import{a as Ee,e as Me,i as Ce,b as Te}from"../chunks/BiBmY_hh.js";import{N as De,i as Pe,s as Se}from"../chunks/bMkdzag5.js";import{E as Le}from"../chunks/B9DsRVo_.js";import{r as Re}from"../chunks/DaLohAwT.js";const $e=[];function Fe(t,s=!1){return L(t,new Map,"",$e)}function L(t,s,d,c,a=null){if(typeof t=="object"&&t!==null){var g=s.get(t);if(g!==void 0)return g;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(ge(t)){var l=Array(t.length);s.set(t,l),a!==null&&s.set(a,l);for(var f=0;f<t.length;f+=1){var m=t[f];f in t&&(l[f]=L(m,s,d,c))}return l}if(he(t)===ve){l={},s.set(t,l),a!==null&&s.set(a,l);for(var O in t)l[O]=L(t[O],s,d,c);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function")return L(t.toJSON(),s,d,c,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}const Ve=`// Algorithm: Repeated addition
/*
  In this program we compute a * n using repeated addition
  TODO: Make the program fully annotated and verified
*/
{n >= 0}

i := 0;
r := 0;

do [false]
  i < n ->
    r := r + a;
    i := i + 1
od
{r = a * n}`,qe=`// Algorithm: Sum of squares
/*
  In this program we compute 1^2 + 2^2 + ... + n^2
  TODO: Make the program fully annotated and verified
*/
{n >= 0}

i := 0;
s := 0;

do [false]
  i < n ->
    i := i + 1;
    s := s + i * i
od
{s = n * (n + 1) * (2 * n + 1) / 6}`,Ne=`// Algorithm: Doubling
/*
  In this program we compute 2^n using iterative doubling.
  Verified with Hoare Logic.
*/
{n >= 0}

i := 0;
x := 1;

do [false]
  i < n ->
    x := 2 * x;
    i := i + 1
od
{x = exp(2, n)}`,je=`// Algorithm: Triangular Numbers
/*
  We compute the sum n + (n-1) + ... + 1
*/
{ n >= 0 }

i := n;
t := 0;

do [false]
  i != 0 ->
    t := t + i;
    i := i - 1
od
{t = n * (n + 1) / 2 }`,Je=`// Algorithm: Factorial
/*
  In this program we compute n! (n factorial) using iterative multiplication.
  TODO: Make the program fully annotated and verified
*/
{n >= 0}

i := 0;
f := 1;

do [false]
  i < n ->
    i := i + 1;
    f := f * i
od
{f = fac(n)}`,We=`// Algorithm: Integer Division
/*
  In this program we compute the quotient and remainder of x divided by y 
  using repeated subtraction.
  TODO: Make the program fully annotated and verified
*/
{x >= 0 & y > 0}

q := 0;
r := x;

do [false]
  r >= y ->
    r := r - y;
    q := q + 1
od
{x = q * y + r & 0 <= r & r < y}`,Be=`// Algorithm: Sum of Odd Numbers
/*
  In this program we compute the sum of the first n odd numbers.
  Mathematically, the sum of the first n odd integers equals n^2.
  TODO: Make the program fully annotated and verified
*/
{n >= 0}

i := 0;
s := 0;

do [false]
  i < n ->
    s := s + (2 * i + 1);
    i := i + 1
od
{s = n * n}`,Ge=`// Algorithm: Fibonacci
/*
  In this program we compute the n-th Fibonacci number.
  TODO: Make the program fully annotated and verified
*/
{ n >= 0 & a = 0 & b = 1 & i = 0}

do [false] 
  i < n ->
    temp := a + b;
    a := b;
    b := temp;
    i := i + 1
od

{ a = fib(n)}`;var Ye=me('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function ze(t,s){const d=Re(s,["$$slots","$$events","$$legacy"]);var c=Ye();let a;S(()=>a=Ee(c,a,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...d})),v(t,c)}const He=(t,s,d,c)=>{if(e(s)){i(d,null);try{i(c,e(s)(),!0)}catch(a){i(d,a instanceof Error?a.message:"Failed to generate challenge",!0)}}},Ke=(t,s,d,c)=>{if(e(s)){i(d,null);try{i(c,e(s)(),!0)}catch(a){i(d,a instanceof Error?a.message:"Failed to generate sample program",!0)}}};var Ue=M('<meta name="description" content="Chip">'),Ze=M("&nbsp;The program is <b>fully annotated</b>",1),Qe=M("&nbsp;The program is <b><i>not</i> fully annotated</b>",1),Xe=M('<span class="ml-4 text-base text-white/80"> </span>'),et=M("<option> </option>"),tt=M('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <span class="text-[0.9em]"><!></span> <div class="flex-1"></div> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option disabled>Loops</option><!></select></div></div>',1);function ft(t,s){be(s,!0);const d=`{ true }
if
  false -> skip
fi
{ true }`,c="chip-program";let a=_(D((typeof localStorage.getItem(c)=="string"?localStorage.getItem(c):null)||d));P(()=>{localStorage.setItem(c,e(a))});let g=_(D({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),l=_(D([])),f=_(!1),m=_("idle"),O=_(null),C=_(null),R=_(null),$=_(null);const ne=Object.values(Object.assign({"./prewritten_loops/exercise1.txt":Ve,"./prewritten_loops/exercise2.txt":qe,"./prewritten_loops/exercise3.txt":Ne,"./prewritten_loops/exercise4.txt":je,"./prewritten_loops/exercise5.txt":Je,"./prewritten_loops/exercise6.txt":We,"./prewritten_loops/exercise7.txt":Be,"./prewritten_loops/exercise8.txt":Ge}));let G=D(ne.map((n,r)=>{const u=n.split(`
`).find(p=>p.startsWith("// Algorithm:"));return{label:u?u.replace("// Algorithm:","").trim():`Exercise ${r+1}`,content:n}}));const re=n=>{const o=n.split(`
`).find(u=>u.startsWith("// Algorithm:"));return o?o.replace("// Algorithm:","").trim():null};let k=_(null);P(()=>{i(k,re(e(a)),!0)});const ae=n=>{i(a,n,!0)},Y=n=>n.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*/g,"").trim().length===0;xe(()=>{(async()=>{const r=await X(()=>import("../chunks/DlW-3WjB.js"),[],import.meta.url);await r.default(),i(O,r.parse,!0),i(R,r.generateSampleProgram,!0),i($,r.generateChallenge,!0)})().catch(console.error)}),P(()=>{if(!e(O))return;if(i(f,!1),Y(e(a))){i(g,{parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1},!0);return}const n=e(O)(e(a));n.parse_error&&i(f,!0),i(g,n,!0)});let T=0;P(()=>{const n=Fe(e(g));let r=()=>{};if(Y(e(a))){++T,i(m,"idle"),i(l,[],!0);return}return(async()=>{const u=++T,I=await X(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);i(l,[],!0),i(m,"verifying");let p=!1,x=!1;for(const y of n.assertions){const{cancel:de,result:fe}=I.run(y.smt,{prelude:n.prelude});r=de;const E=await fe;if(E=="cancelled")return;x||(x=E[E.length-1].trim()==="timeout");const pe=E[E.length-1].trim()==="unsat";if(u!==T){console.info("aborted",u,T,n,E);return}(!pe||x)&&(p=!0,i(l,[...Ae(()=>e(l)),{severity:"Error",tags:[],message:y.text?y.text:"Verification failed",span:y.span,relatedInformation:[]},...y.related?[{severity:"Info",tags:[],message:y.related[0],span:y.related[1],relatedInformation:[]}]:[]],!0))}p?i(m,x?"timeout":"error",!0):i(m,"verified")})().catch(console.error),()=>{r()}});var z=tt();Ie(n=>{var r=Ue();Oe.title="Chip",v(n,r)});var H=ee(z);De(H,{title:"Chip",Icon:ze,onProgramChange:ae});var K=h(H,2),U=w(K);const ie=ye(()=>[...e(g).markers,...e(l)]);Le(U,{get markers(){return e(ie)},get value(){return e(a)},set value(n){i(a,n,!0)}});var F=h(U,2),V=w(F),se=w(V,!0);A(V);var q=h(V,2),oe=w(q);{var le=n=>{var r=_e(),o=ee(r);{var u=p=>{var x=Ze();te(),v(p,x)},I=p=>{var x=Qe();te(),v(p,x)};B(o,p=>{e(g).is_fully_annotated?p(u):p(I,!1)})}v(n,r)};B(oe,n=>{!e(f)&&e(m)=="verified"&&n(le)})}A(q);var Z=h(q,4);{var ce=n=>{var r=Xe(),o=w(r,!0);A(r),S(()=>W(o,e(C))),v(n,r)};B(Z,n=>{e(C)&&n(ce)})}var N=h(Z,2);N.__click=[Ke,R,C,a];var j=h(N,2);j.__click=[He,$,C,a];var b=h(j,2);Pe(b,()=>e(k)??"");var Q;b.__change=n=>{const r=n.target,o=G.find(u=>u.label===r.value);o&&i(a,o.content,!0),r.selectedIndex=0};var J=w(b);J.value=((J.__value="")==null,"");var ue=h(J);Me(ue,17,()=>G,Ce,(n,r)=>{var o=et(),u={},I=w(o,!0);A(o),S(()=>{u!==(u=e(r).label)&&(o.value=(o.__value=e(r).label)==null?"":e(r).label),W(I,e(r).label)}),v(n,o)}),A(b),A(F),A(K),S(()=>{Te(F,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(e(f)?"bg-purple-600":e(m)==="verified"&&!e(g).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[e(m)])??""}`),W(se,e(f)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified -",error:"Verification error",timeout:"Verification timed out"}[e(m)]),N.disabled=!e(R),j.disabled=!e($),Q!==(Q=e(k)??"")&&(b.value=(b.__value=e(k)??"")==null?"":e(k)??"",Se(b,e(k)??""))}),v(t,z),we()}ke(["click","change"]);export{ft as component};
