(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{d2d7:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"h-screen bg-gray-900"},[s("div",{staticClass:"px-auto px-6 py-4"},[s("div",{staticClass:"flex items-center justify-center mt-16"},[s("div",{staticClass:"p-6 max-w-sm w-full bg-gray-800 shadow rounded-md"},[s("h3",{staticClass:"text-white text-xl text-center"},[e._v("Cadastro")]),s("span",[e.auth.erro?s("div",{staticClass:"my-1 block text-sm text-left text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 flex items-center p-2 rounded-sm",attrs:{role:"alert"}},[e._v("\n              "+e._s(e.auth.erro)+"\n            ")]):e._e(),e.auth.token?s("div",{staticClass:"my-1 block text-sm text-left text-gray-300 text-center bg-green-800 border border-green-900 h-8 flex items-center p-2 rounded-sm",attrs:{role:"alert"}},[e._v("\n              Cadastrado com sucesso!\n            ")]):e._e()]),s("div",{staticClass:"mt-2"},[s("label",{staticClass:"block"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.fields.name,expression:"fields.name"}],staticClass:"focus:outline-none focus:shadow-outline border border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-200 focus:bg-gray-800 bg-gray-900",attrs:{type:"name",id:"name",placeholder:"Nome"},domProps:{value:e.fields.name},on:{input:function(t){t.target.composing||e.$set(e.fields,"name",t.target.value)}}})]),s("label",{staticClass:"block mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.fields.email,expression:"fields.email"}],staticClass:"focus:outline-none focus:shadow-outline border border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-200 focus:bg-gray-800 bg-gray-900",attrs:{type:"email",id:"email",placeholder:"Email"},domProps:{value:e.fields.email},on:{input:function(t){t.target.composing||e.$set(e.fields,"email",t.target.value)}}})]),s("label",{staticClass:"block mt-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.fields.password,expression:"fields.password"}],staticClass:"focus:outline-none focus:shadow-outline border border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-200 focus:bg-gray-800 bg-gray-900",attrs:{type:"password",id:"password",placeholder:"Senha"},domProps:{value:e.fields.password},on:{input:function(t){t.target.composing||e.$set(e.fields,"password",t.target.value)}}})]),s("div",{staticClass:"flex justify-between items-center mt-4"},[s("div",{staticClass:"w-1/2"},[s("button",{staticClass:"w-full py-2 px-4 text-center bg-blue-800 rounded-md text-white text-sm hover:bg-blue-800 focus:outline-none",attrs:{id:"login"},on:{click:function(t){return e.register()}}},[e._v("\n                  Cadastrar\n                ")])])])])])])])])])},r=[],l=s("ded3"),o=s.n(l),n=s("2f62"),i={name:"Register",data(){return{fields:{}}},computed:o()({},Object(n["c"])({auth:e=>e.Auth})),methods:o()(o()({},Object(n["b"])("Users",["ActionUsersStore"])),{},{register(){this.ActionUsersStore(this.fields).then((e=>{e.data.auth&&this.$router.push("financeiro")}))}})},d=i,c=s("2877"),u=Object(c["a"])(d,a,r,!1,null,null,null);t["default"]=u.exports}}]);