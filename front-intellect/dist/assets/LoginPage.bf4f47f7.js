import{e as f,u as y,g,r as v,o as a,c as i,a as e,h as s,t as w,i as c,j as m,v as p,b as h,k}from"./index.f3fc3a9c.js";const L={class:"context"},E={class:"flex items-center justify-center my-4"},V={class:"px-auto my-auto"},B={class:"card w-96 shadow-xl mt-12"},C={class:"card-body bg-base-300"},U=e("h2",{class:"card-title"},"Login",-1),j={key:0},A={key:0,class:"my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg",role:"alert"},N={key:1,class:"my-1 block text-sm text-gray-300 text-center bg-green-800 border border-green-900 h-8 items-center p-2 rounded-sm",role:"alert"},S={class:"form-control"},D={class:"block"},I={class:"block mt-2"},M=e("div",{class:"mt-2 border-t"},null,-1),P={class:"flex justify-between items-center mt-4"},R={class:"w-1/2"},T={class:""},$=e("span",{class:"text-gray-200 text-sm"},"Esqueci a senha",-1),q={class:"w-1/2"},G=e("span",{class:"px-2"},"LOGAR",-1),O=e("div",{class:""},[e("div",{class:"social-auth-links text-center my-3"})],-1),W=f({__name:"Login",setup(b){let{auth:t,router:r,acl:d}=y();function x(o){r.push({path:o})}function u(){t.Login().then(async o=>{o&&await d.getUserAcl().then(()=>{d.generateRoutesEnableWithUserAcls()}).then(()=>{x("/")})})}return g(()=>{document.addEventListener("keyup",function(o){o.key=="Enter"&&u()})}),(o,n)=>{const _=v("Icon");return a(),i("div",null,[e("div",L,[e("div",E,[e("div",V,[e("div",B,[e("div",C,[U,s(t)&&s(t).auth?(a(),i("span",j,[s(t).auth.erro?(a(),i("div",A,w(s(t).auth.erro),1)):c("",!0),s(t).auth.token?(a(),i("div",N,"Logado com sucesso!")):c("",!0)])):c("",!0),e("form",S,[e("label",D,[m(e("input",{id:"email","onUpdate:modelValue":n[0]||(n[0]=l=>s(t).fields.email=l),type:"email",class:"input input-sm w-full max-w-xs input-bordered",placeholder:"Email"},null,512),[[p,s(t).fields.email]])]),e("label",I,[m(e("input",{id:"password","onUpdate:modelValue":n[1]||(n[1]=l=>s(t).fields.password=l),type:"password",class:"input input-sm w-full max-w-xs input-bordered",placeholder:"Senha",autocomplete:"on"},null,512),[[p,s(t).fields.password]])])]),M,e("div",P,[e("div",R,[e("label",T,[h(_,{icon:"fluent:password-16-filled"}),$])]),e("div",q,[e("button",{class:"w-full py-2 px-4 rounded-md btn btn-sm",onClick:n[2]||(n[2]=l=>u())},[G,h(_,{icon:"ri:login-circle-line"})])])]),O])])])])])])}}}),F=f({__name:"LoginPage",setup(b){return(t,r)=>(a(),k(W))}});export{F as default};