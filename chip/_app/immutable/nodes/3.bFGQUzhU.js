const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as U}from"../chunks/C1FmrZbK.js";import{n as de,a as v,t as A,c as fe}from"../chunks/oLf7OQaa.js";import{an as ue,av as pe,aI as me,t as T,B as _e,ac as g,Y as C,b as N,u as ge,f as Z,ae as he,s as h,J as i,C as ve,i as t,c as y,g as be,$ as xe,r as w,L as Q}from"../chunks/CiJ59dfD.js";import{d as ye,h as we,s as j}from"../chunks/xcIJNa73.js";import{i as J}from"../chunks/NeijCObD.js";import{a as Oe,e as ke,i as Ie,b as Ae}from"../chunks/BiBmY_hh.js";import{E as Ee}from"../chunks/MGv0QS06.js";import{N as Me}from"../chunks/RNh_Y9PL.js";import{r as Ce}from"../chunks/DaLohAwT.js";const Te=[];function De(e,s=!1){return D(e,new Map,"",Te)}function D(e,s,d,l,a=null){if(typeof e=="object"&&e!==null){var _=s.get(e);if(_!==void 0)return _;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(ue(e)){var o=Array(e.length);s.set(e,o),a!==null&&s.set(a,o);for(var u=0;u<e.length;u+=1){var m=e[u];u in e&&(o[u]=D(m,s,d,l))}return o}if(pe(e)===me){o={},s.set(e,o),a!==null&&s.set(a,o);for(var O in e)o[O]=D(e[O],s,d,l);return o}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return D(e.toJSON(),s,d,l,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}const Se=`// Algorithm: Repeated addition
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
{r = a * n}`,Pe=`// Algorithm: Sum of squares
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
{s = n * (n + 1) * (2 * n + 1) / 6}`,Le=`// Algorithm: Doubling
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
{x = exp(2, n)}`,Re=`// Algorithm: Triangular Numbers
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
{t = n * (n + 1) / 2 }`,$e=`// Algorithm: Factorial
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
{f = fac(n)}`,Ve=`// Algorithm: Integer Division
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
{x = q * y + r & 0 <= r & r < y}`,qe=`// Algorithm: Sum of Odd Numbers
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
{s = n * n}`,Fe=`// Algorithm: Fibonacci
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

{ a = fib(n)}`;var Ne=de('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function je(e,s){const d=Ce(s,["$$slots","$$events","$$legacy"]);var l=Ne();let a;T(()=>a=Oe(l,a,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...d})),v(e,l)}const Je=(e,s,d,l)=>{if(t(s)){i(d,null);try{i(l,t(s)(),!0)}catch(a){i(d,a instanceof Error?a.message:"Failed to generate challenge",!0)}}},Be=(e,s,d,l)=>{if(t(s)){i(d,null);try{i(l,t(s)(),!0)}catch(a){i(d,a instanceof Error?a.message:"Failed to generate sample program",!0)}}};var Ge=A('<meta name="description" content="Chip">'),We=A("&nbsp;The program is <b>fully annotated</b>",1),Ye=A("&nbsp;The program is <b><i>not</i> fully annotated</b>",1),ze=A('<span class="ml-4 text-base text-white/80"> </span>'),He=A("<option> </option>"),Ke=A('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <span class="text-[0.9em]"><!></span> <div class="flex-1"></div> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option disabled selected>Loops</option><!></select></div></div>',1);function st(e,s){_e(s,!0);const d=`{ true }
if
  false -> skip
fi
{ true }`,l="chip-program";let a=g(C((typeof localStorage.getItem(l)=="string"?localStorage.getItem(l):null)||d));N(()=>{localStorage.setItem(l,t(a))});let _=g(C({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),o=g(C([])),u=g(!1),m=g("idle"),O=g(null),E=g(null),S=g(null),P=g(null);const X=Object.values(Object.assign({"./prewritten_loops/exercise1.txt":Se,"./prewritten_loops/exercise2.txt":Pe,"./prewritten_loops/exercise3.txt":Le,"./prewritten_loops/exercise4.txt":Re,"./prewritten_loops/exercise5.txt":$e,"./prewritten_loops/exercise6.txt":Ve,"./prewritten_loops/exercise7.txt":qe,"./prewritten_loops/exercise8.txt":Fe}));let B=C(X.map((n,r)=>{const f=n.split(`
`).find(p=>p.startsWith("// Algorithm:"));return{label:f?f.replace("// Algorithm:","").trim():`Exercise ${r+1}`,content:n}}));const ee=n=>{i(a,n,!0)},G=n=>n.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*/g,"").trim().length===0;ge(()=>{(async()=>{const r=await U(()=>import("../chunks/DlW-3WjB.js"),[],import.meta.url);await r.default(),i(O,r.parse,!0),i(S,r.generateSampleProgram,!0),i(P,r.generateChallenge,!0)})().catch(console.error)}),N(()=>{if(!t(O))return;if(i(u,!1),G(t(a))){i(_,{parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1},!0);return}const n=t(O)(t(a));n.parse_error&&i(u,!0),i(_,n,!0)});let M=0;N(()=>{const n=De(t(_));let r=()=>{};if(G(t(a))){++M,i(m,"idle"),i(o,[],!0);return}return(async()=>{const f=++M,k=await U(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);i(o,[],!0),i(m,"verifying");let p=!1,b=!1;for(const x of n.assertions){const{cancel:oe,result:le}=k.run(x.smt,{prelude:n.prelude});r=oe;const I=await le;if(I=="cancelled")return;b||(b=I[I.length-1].trim()==="timeout");const ce=I[I.length-1].trim()==="unsat";if(f!==M){console.info("aborted",f,M,n,I);return}(!ce||b)&&(p=!0,i(o,[...be(()=>t(o)),{severity:"Error",tags:[],message:x.text?x.text:"Verification failed",span:x.span,relatedInformation:[]},...x.related?[{severity:"Info",tags:[],message:x.related[0],span:x.related[1],relatedInformation:[]}]:[]],!0))}p?i(m,b?"timeout":"error",!0):i(m,"verified")})().catch(console.error),()=>{r()}});var W=Ke();we(n=>{var r=Ge();xe.title="Chip",v(n,r)});var Y=Z(W);Me(Y,{title:"Chip",Icon:je,onProgramChange:ee});var z=h(Y,2),H=y(z);const te=he(()=>[...t(_).markers,...t(o)]);Ee(H,{get markers(){return t(te)},get value(){return t(a)},set value(n){i(a,n,!0)}});var L=h(H,2),R=y(L),ne=y(R,!0);w(R);var $=h(R,2),re=y($);{var ae=n=>{var r=fe(),c=Z(r);{var f=p=>{var b=We();Q(),v(p,b)},k=p=>{var b=Ye();Q(),v(p,b)};J(c,p=>{t(_).is_fully_annotated?p(f):p(k,!1)})}v(n,r)};J(re,n=>{!t(u)&&t(m)=="verified"&&n(ae)})}w($);var K=h($,4);{var ie=n=>{var r=ze(),c=y(r,!0);w(r),T(()=>j(c,t(E))),v(n,r)};J(K,n=>{t(E)&&n(ie)})}var V=h(K,2);V.__click=[Be,S,E,a];var q=h(V,2);q.__click=[Je,P,E,a];var F=h(q,2);F.__change=n=>{const r=n.target,c=B.find(f=>f.label===r.value);c&&i(a,c.content,!0),r.selectedIndex=0};var se=h(y(F));ke(se,17,()=>B,Ie,(n,r)=>{var c=He(),f={},k=y(c,!0);w(c),T(()=>{f!==(f=t(r).label)&&(c.value=(c.__value=t(r).label)==null?"":t(r).label),j(k,t(r).label)}),v(n,c)}),w(F),w(L),w(z),T(()=>{Ae(L,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(t(u)?"bg-purple-600":t(m)==="verified"&&!t(_).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[t(m)])??""}`),j(ne,t(u)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified -",error:"Verification error",timeout:"Verification timed out"}[t(m)]),V.disabled=!t(S),q.disabled=!t(P)}),v(e,W),ve()}ye(["click","change"]);export{st as component};
