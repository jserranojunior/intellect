import{e as m,u as w,m as x,o as s,c as o,a as e,j as y,v as C,h as a,f as $,F as g,n as h,t as n,i as b,p as k,b as f}from"./index.f3fc3a9c.js";const P={class:"hover:cursor-pointer"},D=m({__name:"Calendario",setup(d){let{financeiro:t}=w();return x(()=>t.Calendario.selectedDate,async()=>{t.setDataCalendario(t.Calendario.selectedDate),await t.getSetCategoriasContas()}),(p,r)=>(s(),o("div",null,[e("form",P,[y(e("input",{"onUpdate:modelValue":r[0]||(r[0]=u=>a(t).Calendario.selectedDate=u),type:"date",name:"calendario",class:"input input-sm w-full max-w-xs hover:cursor-pointer"},null,512),[[C,a(t).Calendario.selectedDate]])])]))}}),_=d=>d?(d/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):"0,00",A={class:"gap-2 columns-3 lg:columns-4"},S={class:"card-body border rounded-lg p-1 border-gray-700 bg-base-300"},T={class:"btn btn-outline btn-sm w-full"},B={class:"w-1/3"},F={class:"flex"},j={class:"w-full text-left"},I=["onClick"],V=["onClick"],E=["onClick"],N={class:"flex"},L={class:"w-1/2 pointer text-sm"},M={class:"inline-block align-middle"},O={key:0,class:"w-1/2 text-right text-sm"},R={key:1,class:"w-1/2"},U={class:"flex flex-wrap justify-between"},X=e("div",{clas:"w-1/2"},"Total",-1),q={clas:"w-1/2"},z=m({__name:"CategoriaContasAPagar",setup(d){let{financeiro:t,router:p}=w();$([1,2,3,4,5,6,7,8,9,10]);async function r(u){}return(u,c)=>(s(),o("div",A,[(s(!0),o(g,null,h(a(t).categoriaContas.CategoriasContasAPagars,i=>(s(),o("div",{class:"card shadow-xl w-full p-1",key:i.id},[e("div",S,[e("div",T,n(i.nome),1),(s(!0),o(g,null,h(i.ContasAPagar,l=>(s(),o("div",{class:"text-center cursor-pointer rounded-lg hover:bg-neutral-focus bg-base-200 w-full shadow flex flex-wrap align-middle p-1 py-0 m-0",key:l.ID},[e("div",B,[e("div",F,[e("div",j,[l.ContasPagas&&l.ContasPagas.ID>0?(s(),o("input",{key:0,type:"checkbox ",class:"toggle toggle-sm toggle-primary",onClick:v=>a(t).deleteBillPayment(l.ContasPagas.ID)},null,8,I)):(s(),o("input",{key:1,type:"checkbox ",class:"toggle toggle-sm toggle-secondary",onClick:v=>a(t).makeBillPayment(l.ID)},null,8,V))])])]),e("div",{class:"w-2/3",onClick:v=>r(l.ID)},[e("div",N,[e("div",L,[e("span",M,n(l.favorecido),1)]),l.ValoresContasAPagar?(s(),o("div",O,n(a(_)(l.ValoresContasAPagar.valor)),1)):(s(),o("div",R,"0"))])],8,E)]))),128)),e("div",U,[X,e("div",q,n(a(_)(i.Soma)),1)])])]))),128))]))}}),G={class:"flex flex-wrap bg-neutral"},H={class:"w-full sm:w-1/2 md:w-1/2 lg:w-full p-1 border-b border-gray-700"},J={class:"shadow-md"},K=e("div",{class:"btn btn-primary btn-sm w-full bg-blue-500 border-blue-400 text-white"}," TOTAIS ",-1),Q={key:0},W={class:"flex flex-wrap"},Y={class:"w-2/3 text-sm"},Z={key:0,class:"w-1/3 text-right text-sm"},ee={key:1,class:"w-1/4"},te={class:"flex justify-center px-1 border-t pt-2 pb-2"},se=e("div",{class:"w-1/3"},"Total",-1),oe={key:0,class:"w-1/3 text-right text-sm font-bold text-blue-300"},ae={class:"w-full sm:w-1/2 md:w-1/2 lg:w-full p-1"},le={class:"painel mt-1 shadow-md text-white"},ne=e("div",{class:"btn btn-primary btn-sm w-full bg-green-500 border-green-400 text-white"}," CAIXA / FREELAS ",-1),ie=e("div",{class:"painel-body p-1"},[e("div",{class:"flex flex-wrap justify-between text-center mt-1 p-1 text-sm"},[e("div",null,"Ls Star"),e("div",null,"0,00")]),e("div",{class:"flex flex-wrap justify-between text-center mt-1 p-1 text-sm"},[e("div",null,"Acolher"),e("div",null,"0,00")])],-1),re={class:"flex justify-center px-1 border-t pt-2 pb-2"},de=e("div",{class:"w-1/3"},"Total",-1),ce={class:"w-1/3 text-right text-sm font-bold text-blue-300"},_e=m({__name:"FeedbackFinanceiro",setup(d){let{financeiro:t,router:p}=w();return(r,u)=>(s(),o("div",G,[e("div",H,[e("div",J,[K,e("div",null,[a(t).categoriaContas&&a(t).categoriaContas.SomaFormaPagamento?(s(),o("div",Q,[(s(!0),o(g,null,h(a(t).categoriaContas.SomaFormaPagamento,(c,i)=>(s(),o("div",{key:c,class:"painel-body p-1 pb-2"},[e("div",W,[e("div",Y,n(i),1),i?(s(),o("div",Z,n(a(_)(c)),1)):(s(),o("div",ee,n(a(_)(0)),1))])]))),128))])):b("",!0)]),e("div",te,[se,a(t).categoriaContas&&a(t).categoriaContas.TotalCategories?(s(),o("div",oe,n(a(_)(a(t).categoriaContas.TotalCategories)),1)):b("",!0)])])]),e("div",ae,[e("div",le,[ne,ie,e("div",re,[de,e("div",ce,n(a(_)(0)),1)])])])]))}}),ue={class:"flex flex-wrap justify-between rounded-xl bg-neutral p-1"},pe={class:"w-full sm:w-1/2 md:w-1/5 lg:w-1/5 p-1"},me={class:"w-full sm:w-1/4 md:w-1/4 text-right p-1"},we={class:"flex flex-wrap mt-1"},fe=e("hr",{class:"border-t border-gray-600 bg-neutral w-full mb-1"},null,-1),ge={class:"w-full sm:w-full md:w-2/3 lg:w-4/5 bg-neutral p-2 rounded-xl"},he={class:"w-full sm:w-full md:w-1/3 lg:w-1/5 border-l border-gray-600"},be=m({__name:"Financeiro",setup(d){let{financeiro:t,router:p}=w();k(async()=>{await t.getSetCategoriasContas()});function r(){p.push("financeiroaddconta")}return(u,c)=>(s(),o("div",null,[e("div",ue,[e("div",pe,[f(D)]),e("div",me,[e("button",{class:"btn btn-accent btn-xs",onClick:c[0]||(c[0]=i=>r())}," Nova conta ")])]),e("div",we,[fe,e("div",ge,[f(z)]),e("div",he,[f(_e)])])]))}});export{be as default};