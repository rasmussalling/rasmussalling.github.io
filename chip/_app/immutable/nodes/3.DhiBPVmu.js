const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as nn}from"../chunks/C1FmrZbK.js";import{n as mn,a as y,t as q,c as gn}from"../chunks/CJALf1xi.js";import{an as bn,av as xn,aJ as vn,t as T,B as hn,ac as g,Y as M,b as I,u as yn,f as en,ae as wn,s as h,c as w,i as n,C as Sn,J as r,g as An,$ as On,r as S,L as tn}from"../chunks/JbDwdyrW.js";import{d as kn,h as In,s as G}from"../chunks/WEOOz9LT.js";import{i as Y}from"../chunks/buKgg9GH.js";import{a as qn,e as En,b as Dn}from"../chunks/DEvD6W48.js";import{N as Ln,a as Mn}from"../chunks/CXCoHPly.js";import{E as Tn}from"../chunks/DrI9rVqn.js";import{r as Cn}from"../chunks/Bcmapue9.js";const $n=[];function Pn(t,s=!1){return C(t,new Map,"",$n)}function C(t,s,_,c,o=null){if(typeof t=="object"&&t!==null){var v=s.get(t);if(v!==void 0)return v;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(bn(t)){var l=Array(t.length);s.set(t,l),o!==null&&s.set(o,l);for(var d=0;d<t.length;d+=1){var b=t[d];d in t&&(l[d]=C(b,s,_,c))}return l}if(xn(t)===vn){l={},s.set(t,l),o!==null&&s.set(o,l);for(var A in t)l[A]=C(t[A],s,_,c);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function")return C(t.toJSON(),s,_,c,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}const Fn=`// Algorithm: Repeated addition
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
{r = a * n}`,Rn=`// Solution: Repeated addition
{n >= 0}

i := 0;
{i <= n & 0 = a * i}
r := 0;
{i <= n & r = a * i}
do [ i <= n & r = a * i]
  i < n ->
    {(i + 1) <= n & (r + a) = a * (i + 1)}
    r := r + a;
    {(i + 1) <= n & r = a * (i + 1)}
    i := i + 1
    {i <= n & r = a * i}
od
{r = a * n}`,Nn=`// Algorithm: Sum of squares
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
{s = n * (n + 1) * (2 * n + 1) / 6}`,Vn=`// Solution: Sum of squares
{n >= 0}

i := 0;
{i <= n & 0 = i * (i + 1) * (2 * i + 1) / 6}
s := 0;
{i <= n & s = i * (i + 1) * (2 * i + 1) / 6}
do [i <= n & s = i * (i + 1) * (2 * i + 1) / 6]
  i < n ->
    {i < n & s = i * (i + 1) * (2 * i + 1) / 6}
    i := i + 1;
    {i <= n & (s + i * i) = i * (i + 1) * (2 * i + 1) / 6}
    s := s + i * i
    {i <= n & s = i * (i + 1) * (2 * i + 1) / 6}
od
{s = n * (n + 1) * (2 * n + 1) / 6}`,jn=`// Algorithm: Doubling
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
{x = exp(2, n)}`,Wn=`// Solution: Doubling
{n >= 0}

i := 0;
{0 <= i & i <= n & 1 = exp(2, i)}
x := 1;
{0 <= i & i <= n & x = exp(2, i)}
do [0 <= i & i <= n & x = exp(2, i)]
  i < n ->
    {0 <= i & i < n & x = exp(2, i)}
    x := 2 * x;
    {0 <= (i + 1) & (i + 1) <= n & x = exp(2, (i + 1))}
    i := i + 1
    {0 <= i & i <= n & x = exp(2, i)}
od
{x = exp(2, n)}`,Jn=`// Algorithm: Triangular Numbers
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
{t = n * (n + 1) / 2 }`,Bn=`// Solution: Triangular Numbers
{ n >= 0 }

i := n;
{0 <= i & i <= n & 0 = (n * (n+1) / 2) - (i * (i + 1) / 2)}
t := 0;
{0 <= i & i <= n & t = (n * (n+1) / 2) - (i * (i + 1) / 2)}
do [0 <= i & i <= n & t = (n * (n+1) / 2) - (i * (i + 1) / 2)]
  i != 0 ->
    {0 < i & i <= n & t = (n * (n+1) / 2) - (i * (i + 1) / 2)}
    t := t + i;
    {0 <= (i - 1) & (i - 1) <= n & t = (n * (n+1) / 2) - ((i - 1) * ((i - 1) + 1) / 2)}
    i := i - 1
    {0 <= i & i <= n & t = (n * (n+1) / 2) - (i * (i + 1) / 2)}
od
{t = n * (n + 1) / 2 }`,Gn=`// Algorithm: Factorial
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
{f = fac(n)}`,Yn=`// Solution: Factorial
{n >= 0}

i := 0;
{0 <= i & i <= n & fac(i) = 1}
f := 1;
{0 <= i & i <= n & f = fac(i)}
do [0 <= i & i <= n & f = fac(i)]
  i < n ->
    {0 <= i & (i + 1) <= n & f * (i + 1) = fac(i + 1)}
    i := i + 1;
    {0 <= i & i <= n & f * i = fac(i)}
    f := f * i
    {0 <= i & i <= n & f = fac(i)}
od
{f = fac(n)}`,zn=`// Algorithm: Integer Division
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
{x = q * y + r & 0 <= r & r < y}`,Hn=`// Solution: Integer Division
{x >= 0 & y > 0}

q := 0;
{x = q * y + x  &  x >= 0}
r := x;
{x = q * y + r  &  r >= 0}
do [x = q * y + r  &  r >= 0]
  r >= y ->
    {x = (q + 1) * y + r - y  &  r >= y}
    r := r - y;
    {x = (q + 1) * y + r  &  r >= 0}
    q := q + 1
    {x = q * y + r  &  r >= 0}
od
{x = q * y + r & 0 <= r & r < y}`,Kn=`// Algorithm: Sum of Odd Numbers
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
{s = n * n}`,Un=`// Solution: Sum of Odd Numbers
{n >= 0}

i := 0;
{0 <= n & 0 = i * i}
s := 0;
{0 <= i & i <= n & s = i * i}
do [0 <= i & i <= n & s = i * i]
  i < n ->
    {0 <= i & i < n & s = i * i}
    s := s + (2 * i + 1);
    {0 <= (i + 1) & (i + 1) <= n & s = (i + 1) * (i + 1)}
    i := i + 1
    {0 <= i & i <= n & s = i * i}
od
{s = n * n}`,Zn=`// Algorithm: Fibonacci
/*
  In this program we compute the n-th Fibonacci number.
  TODO: Make the program verified
*/
{ n >= 0 & a = 0 & b = 1 & i = 0}

do [false] 
  i < n ->
    temp := a + b;
    a := b;
    b := temp;
    i := i + 1
od

{ a = fib(n)}`,Qn=`// Solution: Fibonacci
{ n >= 0 & a = 0 & b = 1 & i = 0}

do [0 <= i & i <= n & a = fib(i) & b = fib(i + 1)] 
  i < n ->
    temp := a + b;
    a := b;
    b := temp;
    i := i + 1
od

{ a = fib(n)}`;var Xn=mn('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function ne(t,s){const _=Cn(s,["$$slots","$$events","$$legacy"]);var c=Xn();let o;T(()=>o=qn(c,o,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",..._})),y(t,c)}const ee=(t,s,_,c)=>{if(n(s)){r(_,null);try{r(c,n(s)(),!0)}catch(o){r(_,o instanceof Error?o.message:"Failed to generate challenge",!0)}}},te=(t,s,_,c)=>{if(n(s)){r(_,null);try{r(c,n(s)(),!0)}catch(o){r(_,o instanceof Error?o.message:"Failed to generate sample program",!0)}}};var ie=q('<meta name="description" content="Chip">'),re=q("&nbsp;The program is <b>fully annotated</b>",1),oe=q("&nbsp;The program is <b><i>not</i> fully annotated</b>",1),se=q('<span class="ml-4 text-base text-white/80"> </span>'),ae=q("<option> </option>"),le=q('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <span class="text-[0.9em]"><!></span> <div class="flex-1"></div> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option>Loops</option><!></select></div></div>',1);function ve(t,s){hn(s,!0);const _=`{ true }
if
  false -> skip
fi
{ true }`,c="chip-program";let o=g(M((typeof localStorage.getItem(c)=="string"?localStorage.getItem(c):null)||_));I(()=>{localStorage.setItem(c,n(o))});let v=g(M({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),l=g(M([])),d=g(!1),b=g("idle"),A=g(null),E=g(null),$=g(null),P=g(null);const rn=Object.values(Object.assign({"./prewritten_loops/exercise1.txt":Fn,"./prewritten_loops/exercise1s.txt":Rn,"./prewritten_loops/exercise2.txt":Nn,"./prewritten_loops/exercise2s.txt":Vn,"./prewritten_loops/exercise3.txt":jn,"./prewritten_loops/exercise3s.txt":Wn,"./prewritten_loops/exercise4.txt":Jn,"./prewritten_loops/exercise4s.txt":Bn,"./prewritten_loops/exercise5.txt":Gn,"./prewritten_loops/exercise5s.txt":Yn,"./prewritten_loops/exercise6.txt":zn,"./prewritten_loops/exercise6s.txt":Hn,"./prewritten_loops/exercise7.txt":Kn,"./prewritten_loops/exercise7s.txt":Un,"./prewritten_loops/exercise8.txt":Zn,"./prewritten_loops/exercise8s.txt":Qn}));let z=M(rn.map((e,i)=>{const a=e.split(`
`),p=a.find(D=>D.startsWith("// Algorithm:")),x=a.find(D=>D.startsWith("// Solution:")),u=p||x,m=p?"A":"S",f=u?u.replace("// Algorithm:","").replace("// Solution:","").trim():`Exercise ${i+1}`;return{label:`${m}: ${f}`,content:e}}));const on=e=>{const i=e.split(`
`),a=i.find(f=>f.startsWith("// Algorithm:")),p=i.find(f=>f.startsWith("// Solution:")),x=a||p;if(!x)return null;const u=a?"A":"S",m=x.replace("// Algorithm:","").replace("// Solution:","").trim();return`${u}: ${m}`};let F=g(null),O=g(null);I(()=>{r(F,on(n(o)),!0)}),I(()=>{n(F)===null?r(O,null):r(O,n(F),!0)}),I(()=>{if(n(O)!==null){const e=z.find(i=>i.label===n(O));e&&r(o,e.content,!0)}});const sn=e=>{r(o,e,!0)},H=e=>e.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*/g,"").trim().length===0;yn(()=>{(async()=>{const i=await nn(()=>import("../chunks/B5tHmblk.js"),[],import.meta.url);await i.default(),r(A,i.parse,!0),r($,i.generateSampleProgram,!0),r(P,i.generateChallenge,!0)})().catch(console.error)}),I(()=>{if(!n(A))return;if(r(d,!1),H(n(o))){r(v,{parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1},!0);return}const e=n(A)(n(o));e.parse_error&&r(d,!0),r(v,e,!0)});let L=0;I(()=>{const e=Pn(n(v));let i=()=>{};if(H(n(o))){++L,r(b,"idle"),r(l,[],!0);return}return(async()=>{const p=++L,x=await nn(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);r(l,[],!0),r(b,"verifying");let u=!1,m=!1;for(const f of e.assertions){const{cancel:D,result:pn}=x.run(f.smt,{prelude:e.prelude});i=D;const k=await pn;if(k=="cancelled")return;m||(m=k[k.length-1].trim()==="timeout");const dn=k[k.length-1].trim()==="unsat";if(p!==L){console.info("aborted",p,L,e,k);return}(!dn||m)&&(u=!0,r(l,[...An(()=>n(l)),{severity:"Error",tags:[],message:f.text?f.text:"Verification failed",span:f.span,relatedInformation:[]},...f.related?[{severity:"Info",tags:[],message:f.related[0],span:f.related[1],relatedInformation:[]}]:[]],!0))}u?r(b,m?"timeout":"error",!0):r(b,"verified")})().catch(console.error),()=>{i()}});var K=le();In(e=>{var i=ie();On.title="Chip",y(e,i)});var U=en(K);Ln(U,{title:"Chip",Icon:ne,onProgramChange:sn});var Z=h(U,2),Q=w(Z);const an=wn(()=>[...n(v).markers,...n(l)]);Tn(Q,{get markers(){return n(an)},get value(){return n(o)},set value(e){r(o,e,!0)}});var R=h(Q,2),N=w(R),ln=w(N,!0);S(N);var V=h(N,2),cn=w(V);{var un=e=>{var i=gn(),a=en(i);{var p=u=>{var m=re();tn(),y(u,m)},x=u=>{var m=oe();tn(),y(u,m)};Y(a,u=>{n(v).is_fully_annotated?u(p):u(x,!1)})}y(e,i)};Y(cn,e=>{!n(d)&&n(b)=="verified"&&e(un)})}S(V);var X=h(V,4);{var _n=e=>{var i=se(),a=w(i,!0);S(i),T(()=>G(a,n(E))),y(e,i)};Y(X,e=>{n(E)&&e(_n)})}var j=h(X,2);j.__click=[te,$,E,o];var W=h(j,2);W.__click=[ee,P,E,o];var J=h(W,2),B=w(J);B.value=(B.__value=null)==null?"":null;var fn=h(B);En(fn,17,()=>z,e=>e.label,(e,i)=>{var a=ae(),p={},x=w(a,!0);S(a),T(()=>{p!==(p=n(i).label)&&(a.value=(a.__value=n(i).label)==null?"":n(i).label),G(x,n(i).label)}),y(e,a)}),S(J),S(R),S(Z),T(()=>{Dn(R,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(n(d)?"bg-purple-600":n(b)==="verified"&&!n(v).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[n(b)])??""}`),G(ln,n(d)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified -",error:"Verification error",timeout:"Verification timed out"}[n(b)]),j.disabled=!n($),W.disabled=!n(P)}),Mn(J,()=>n(O),e=>r(O,e)),y(t,K),Sn()}kn(["click"]);export{ve as component};
