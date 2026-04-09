const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as K}from"../chunks/C1FmrZbK.js";import{n as ce,a as h,t as A,c as de}from"../chunks/D6li6ETi.js";import{C as fe,au as ue,aH as me,t as P,Z as ge,aq as p,ae as C,P as N,O as pe,f as U,as as _e,s as v,a3 as s,_ as ve,j as t,c as y,R as he,$ as be,r as w,aI as W}from"../chunks/DOsZ2GvS.js";import{d as xe,h as ye,s as G}from"../chunks/CvP5BAC0.js";import{i as q}from"../chunks/BUxDgxZy.js";import{e as we,i as Ie}from"../chunks/D80uqNTj.js";import{a as Oe,b as ke}from"../chunks/C-Y2yspH.js";import{E as Ae}from"../chunks/DxSMqW40.js";import{N as Ee}from"../chunks/BfMra1es.js";import{r as Ce}from"../chunks/DArhy4lI.js";const Pe=[];function Te(e,i=!1){return T(e,new Map,"",Pe)}function T(e,i,d,o,a=null){if(typeof e=="object"&&e!==null){var _=i.get(e);if(_!==void 0)return _;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(fe(e)){var l=Array(e.length);i.set(e,l),a!==null&&i.set(a,l);for(var u=0;u<e.length;u+=1){var g=e[u];u in e&&(l[u]=T(g,i,d,o))}return l}if(ue(e)===me){l={},i.set(e,l),a!==null&&i.set(a,l);for(var I in e)l[I]=T(e[I],i,d,o);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return T(e.toJSON(),i,d,o,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}const Re=`// Algorithm: Repeated addition
/*
  In this program we compute a * n using repeated addition
  TODO: Make the program fully annotated and verified
*/

do [I]
  i != n ->
    r := r + a;
    i := i + 1
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

{ i = n & s = n * (n + 1) * (2 * n + 1) / 6 }`,Me=`// Algorithm: Doubling
/*
  In this program we compute 2^n
  TODO: Add invariant [I] to make the program verify
*/
x := 1;
i := 0;
{i = 0 & x = 1 & n >= 0}
do [I]
  i != n ->
    i := i + 1;
    x := 2 * x
od
{ i = n & x = exp(2, n)}`,Se=`// Algorithm: Triangular Numbers
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
{i = n & t := 1 + 2 + ... + n}`;var $e=ce('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function Le(e,i){const d=Ce(i,["$$slots","$$events","$$legacy"]);var o=$e();let a;P(()=>a=Oe(o,a,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...d})),h(e,o)}const Ve=(e,i,d,o)=>{if(t(i)){s(d,null);try{s(o,t(i)(),!0)}catch(a){s(d,a instanceof Error?a.message:"Failed to generate challenge",!0)}}},je=(e,i,d,o)=>{if(t(i)){s(d,null);try{s(o,t(i)(),!0)}catch(a){s(d,a instanceof Error?a.message:"Failed to generate sample program",!0)}}};var Fe=A('<meta name="description" content="Chip">'),Ne=A("The program is <b>fully annotated</b>",1),Ge=A("The program is <b><i>not</i> fully annotated</b>",1),qe=A('<span class="ml-4 text-base text-white/80"> </span>'),He=A("<option> </option>"),Je=A('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <div class="flex-1"></div> <span class="text-xl"><!></span> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option disabled selected>Loops</option><!></select></div></div>',1);function rt(e,i){ge(i,!0);const d=`{ true }
if
  false -> skip
fi
{ true }`,o="chip-program";let a=p(C((typeof localStorage.getItem(o)=="string"?localStorage.getItem(o):null)||d));N(()=>{localStorage.setItem(o,t(a))});let _=p(C({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),l=p(C([])),u=p(!1),g=p("idle"),I=p(null),E=p(null),R=p(null),D=p(null);const Q=Object.values(Object.assign({"./exercises/exercise1.txt":Re,"./exercises/exercise2.txt":De,"./exercises/exercise3.txt":Me,"./exercises/exercise4.txt":Se}));let H=C(Q.map((r,n)=>{const f=r.split(`
`).find(m=>m.startsWith("// Algorithm:"));return{label:f?f.replace("// Algorithm:","").trim():`Exercise ${n+1}`,content:r}}));const X=r=>{s(a,r,!0)};pe(()=>{(async()=>{const n=await K(()=>import("../chunks/Doc3GtEQ.js"),[],import.meta.url);await n.default(),s(I,n.parse,!0),s(R,n.generateSampleProgram,!0),s(D,n.generateChallenge,!0)})().catch(console.error)}),N(()=>{if(!t(I))return;s(u,!1);const r=t(I)(t(a));r.parse_error&&s(u,!0),s(_,r,!0)});let M=0;N(()=>{const r=Te(t(_));let n=()=>{};return(async()=>{const f=++M,O=await K(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);s(l,[],!0),s(g,"verifying");let m=!1,b=!1;for(const x of r.assertions){const{cancel:ie,result:oe}=O.run(x.smt,{prelude:r.prelude});n=ie;const k=await oe;if(k=="cancelled")return;b||(b=k[k.length-1].trim()==="timeout");const le=k[k.length-1].trim()==="unsat";if(f!==M){console.info("aborted",f,M,r,k);return}(!le||b)&&(m=!0,s(l,[...he(()=>t(l)),{severity:"Error",tags:[],message:x.text?x.text:"Verification failed",span:x.span,relatedInformation:[]},...x.related?[{severity:"Info",tags:[],message:x.related[0],span:x.related[1],relatedInformation:[]}]:[]],!0))}m?s(g,b?"timeout":"error",!0):s(g,"verified")})().catch(console.error),()=>{n()}});var J=Je();ye(r=>{var n=Fe();be.title="Chip",h(r,n)});var Y=U(J);Ee(Y,{title:"Chip",Icon:Le,onProgramChange:X});var Z=v(Y,2),z=y(Z);const ee=_e(()=>[...t(_).markers,...t(l)]);Ae(z,{get markers(){return t(ee)},get value(){return t(a)},set value(r){s(a,r,!0)}});var S=v(z,2),$=y(S),te=y($,!0);w($);var L=v($,4),re=y(L);{var ne=r=>{var n=de(),c=U(n);{var f=m=>{var b=Ne();W(),h(m,b)},O=m=>{var b=Ge();W(),h(m,b)};q(c,m=>{t(_).is_fully_annotated?m(f):m(O,!1)})}h(r,n)};q(re,r=>{!t(u)&&t(g)=="verified"&&r(ne)})}w(L);var B=v(L,2);{var ae=r=>{var n=qe(),c=y(n,!0);w(n),P(()=>G(c,t(E))),h(r,n)};q(B,r=>{t(E)&&r(ae)})}var V=v(B,2);V.__click=[je,R,E,a];var j=v(V,2);j.__click=[Ve,D,E,a];var F=v(j,2);F.__change=r=>{const n=r.target,c=H.find(f=>f.label===n.value);c&&s(a,c.content,!0),n.selectedIndex=0};var se=v(y(F));we(se,17,()=>H,Ie,(r,n)=>{var c=He(),f={},O=y(c,!0);w(c),P(()=>{f!==(f=t(n).label)&&(c.value=(c.__value=t(n).label)==null?"":t(n).label),G(O,t(n).label)}),h(r,c)}),w(F),w(S),w(Z),P(()=>{ke(S,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(t(u)?"bg-purple-600":t(g)==="verified"&&!t(_).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[t(g)])??""}`),G(te,t(u)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified",error:"Verification error",timeout:"Verification timed out"}[t(g)]),V.disabled=!t(R),j.disabled=!t(D)}),h(e,J),ve()}xe(["click","change"]);export{rt as component};
