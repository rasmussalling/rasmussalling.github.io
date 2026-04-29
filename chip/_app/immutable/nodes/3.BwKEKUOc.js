const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/BQp3cmfl.js","../chunks/C1FmrZbK.js","../chunks/D6-XlEtG.js"])))=>i.map(i=>d[i]);
import{_ as Z}from"../chunks/C1FmrZbK.js";import{n as dn,a as y,t as k,c as mn}from"../chunks/CJALf1xi.js";import{an as gn,av as xn,aJ as bn,t as M,B as vn,ac as b,Y as D,b as L,u as hn,f as Q,ae as yn,s as h,c as w,i as n,C as wn,J as o,g as Sn,$ as An,r as S,L as X}from"../chunks/JbDwdyrW.js";import{d as On,h as kn,s as J}from"../chunks/WEOOz9LT.js";import{i as B}from"../chunks/buKgg9GH.js";import{a as In,e as qn,i as En,b as Dn}from"../chunks/DEvD6W48.js";import{N as Ln,a as Mn}from"../chunks/CXCoHPly.js";import{E as Tn}from"../chunks/DrI9rVqn.js";import{r as Cn}from"../chunks/Bcmapue9.js";const $n=[];function Pn(e,s=!1){return T(e,new Map,"",$n)}function T(e,s,p,c,r=null){if(typeof e=="object"&&e!==null){var v=s.get(e);if(v!==void 0)return v;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(gn(e)){var l=Array(e.length);s.set(e,l),r!==null&&s.set(r,l);for(var d=0;d<e.length;d+=1){var g=e[d];d in e&&(l[d]=T(g,s,p,c))}return l}if(xn(e)===bn){l={},s.set(e,l),r!==null&&s.set(r,l);for(var A in e)l[A]=T(e[A],s,p,c);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return T(e.toJSON(),s,p,c,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}const Fn=`// Algorithm: Repeated addition
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

{ a = fib(n)}`;var Xn=dn('<svg><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.75 3.75 0 0 1-1.043 3.296a3.75 3.75 0 0 1-3.296 1.043A3.75 3.75 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043a3.75 3.75 0 0 1-1.043-3.296A3.75 3.75 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.296a3.75 3.75 0 0 1 3.296-1.043A3.75 3.75 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043a3.75 3.75 0 0 1 1.043 3.296A3.75 3.75 0 0 1 21 12"></path></svg>');function ne(e,s){const p=Cn(s,["$$slots","$$events","$$legacy"]);var c=Xn();let r;M(()=>r=In(c,r,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...p})),y(e,c)}const ee=(e,s,p,c)=>{if(n(s)){o(p,null);try{o(c,n(s)(),!0)}catch(r){o(p,r instanceof Error?r.message:"Failed to generate challenge",!0)}}},te=(e,s,p,c)=>{if(n(s)){o(p,null);try{o(c,n(s)(),!0)}catch(r){o(p,r instanceof Error?r.message:"Failed to generate sample program",!0)}}};var ie=k('<meta name="description" content="Chip">'),re=k("&nbsp;The program is <b>fully annotated</b>",1),oe=k("&nbsp;The program is <b><i>not</i> fully annotated</b>",1),se=k('<span class="ml-4 text-base text-white/80"> </span>'),ae=k("<option> </option>"),le=k('<!> <div class="relative grid grid-rows-[2fr_auto_auto] overflow-hidden bg-slate-800"><!> <div><span class="font-bold"> </span> <span class="text-[0.9em]"><!></span> <div class="flex-1"></div> <!> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Example</button> <button class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900 disabled:opacity-60">Challenge</button> <select class="ml-4 rounded bg-slate-900/60 px-3 py-1 text-lg transition hover:bg-slate-900"><option disabled>Loops</option><!></select></div></div>',1);function ve(e,s){vn(s,!0);const p=`{ true }
if
  false -> skip
fi
{ true }`,c="chip-program";let r=b(D((typeof localStorage.getItem(c)=="string"?localStorage.getItem(c):null)||p));L(()=>{localStorage.setItem(c,n(r))});let v=b(D({parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1})),l=b(D([])),d=b(!1),g=b("idle"),A=b(null),I=b(null),C=b(null),$=b(null);const nn=Object.values(Object.assign({"./prewritten_loops/exercise1.txt":Fn,"./prewritten_loops/exercise1s.txt":Rn,"./prewritten_loops/exercise2.txt":Nn,"./prewritten_loops/exercise2s.txt":Vn,"./prewritten_loops/exercise3.txt":jn,"./prewritten_loops/exercise3s.txt":Wn,"./prewritten_loops/exercise4.txt":Jn,"./prewritten_loops/exercise4s.txt":Bn,"./prewritten_loops/exercise5.txt":Gn,"./prewritten_loops/exercise5s.txt":Yn,"./prewritten_loops/exercise6.txt":zn,"./prewritten_loops/exercise6s.txt":Hn,"./prewritten_loops/exercise7.txt":Kn,"./prewritten_loops/exercise7s.txt":Un,"./prewritten_loops/exercise8.txt":Zn,"./prewritten_loops/exercise8s.txt":Qn}));let en=D(nn.map((t,i)=>{const a=t.split(`
`),u=a.find(q=>q.startsWith("// Algorithm:")),x=a.find(q=>q.startsWith("// Solution:")),_=u||x,m=u?"A":"S",f=_?_.replace("// Algorithm:","").replace("// Solution:","").trim():`Exercise ${i+1}`;return{label:`${m}: ${f}`,content:t}}));const tn=t=>{const i=t.split(`
`),a=i.find(f=>f.startsWith("// Algorithm:")),u=i.find(f=>f.startsWith("// Solution:")),x=a||u;if(!x)return null;const _=a?"A":"S",m=x.replace("// Algorithm:","").replace("// Solution:","").trim();return`${_}: ${m}`};let rn=b(null);L(()=>{o(rn,tn(n(r)),!0)});const on=t=>{o(r,t,!0)},G=t=>t.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\/\/.*/g,"").trim().length===0;hn(()=>{(async()=>{const i=await Z(()=>import("../chunks/CSjZZWLC.js"),[],import.meta.url);await i.default(),o(A,i.parse,!0),o(C,i.generateSampleProgram,!0),o($,i.generateChallenge,!0)})().catch(console.error)}),L(()=>{if(!n(A))return;if(o(d,!1),G(n(r))){o(v,{parse_error:!1,prelude:"",assertions:[],markers:[],is_fully_annotated:!1},!0);return}const t=n(A)(n(r));t.parse_error&&o(d,!0),o(v,t,!0)});let E=0;L(()=>{const t=Pn(n(v));let i=()=>{};if(G(n(r))){++E,o(g,"idle"),o(l,[],!0);return}return(async()=>{const u=++E,x=await Z(()=>import("../chunks/BQp3cmfl.js"),__vite__mapDeps([0,1,2]),import.meta.url);o(l,[],!0),o(g,"verifying");let _=!1,m=!1;for(const f of t.assertions){const{cancel:q,result:fn}=x.run(f.smt,{prelude:t.prelude});i=q;const O=await fn;if(O=="cancelled")return;m||(m=O[O.length-1].trim()==="timeout");const un=O[O.length-1].trim()==="unsat";if(u!==E){console.info("aborted",u,E,t,O);return}(!un||m)&&(_=!0,o(l,[...Sn(()=>n(l)),{severity:"Error",tags:[],message:f.text?f.text:"Verification failed",span:f.span,relatedInformation:[]},...f.related?[{severity:"Info",tags:[],message:f.related[0],span:f.related[1],relatedInformation:[]}]:[]],!0))}_?o(g,m?"timeout":"error",!0):o(g,"verified")})().catch(console.error),()=>{i()}});var Y=le();kn(t=>{var i=ie();An.title="Chip",y(t,i)});var z=Q(Y);Ln(z,{title:"Chip",Icon:ne,onProgramChange:on});var H=h(z,2),K=w(H);const sn=yn(()=>[...n(v).markers,...n(l)]);Tn(K,{get markers(){return n(sn)},get value(){return n(r)},set value(t){o(r,t,!0)}});var P=h(K,2),F=w(P),an=w(F,!0);S(F);var R=h(F,2),ln=w(R);{var cn=t=>{var i=mn(),a=Q(i);{var u=_=>{var m=re();X(),y(_,m)},x=_=>{var m=oe();X(),y(_,m)};B(a,_=>{n(v).is_fully_annotated?_(u):_(x,!1)})}y(t,i)};B(ln,t=>{!n(d)&&n(g)=="verified"&&t(cn)})}S(R);var U=h(R,4);{var _n=t=>{var i=se(),a=w(i,!0);S(i),M(()=>J(a,n(I))),y(t,i)};B(U,t=>{n(I)&&t(_n)})}var N=h(U,2);N.__click=[te,C,I,r];var V=h(N,2);V.__click=[ee,$,I,r];var j=h(V,2),W=w(j);W.value=((W.__value="")==null,"");var pn=h(W);qn(pn,17,()=>en,En,(t,i)=>{var a=ae(),u={},x=w(a,!0);S(a),M(()=>{u!==(u=n(i).content)&&(a.value=(a.__value=n(i).content)==null?"":n(i).content),J(x,n(i).label)}),y(t,a)}),S(j),S(P),S(H),M(()=>{Dn(P,1,`flex items-center p-2 text-2xl text-white transition duration-500 ${(n(d)?"bg-purple-600":n(g)==="verified"&&!n(v).is_fully_annotated?"bg-emerald-400":{idle:"bg-gray-500",verifying:"bg-yellow-500",verified:"bg-green-500",error:"bg-red-500",timeout:"bg-blue-500"}[n(g)])??""}`),J(an,n(d)?"Parse error":{idle:"Idle",verifying:"Verifying...",verified:"Verified -",error:"Verification error",timeout:"Verification timed out"}[n(g)]),N.disabled=!n(C),V.disabled=!n($)}),Mn(j,()=>n(r),t=>o(r,t)),y(e,Y),wn()}On(["click"]);export{ve as component};
