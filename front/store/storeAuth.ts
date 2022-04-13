// store/filters.js
import { defineStore } from 'pinia'


export const storeAuth = defineStore('auth', {
state: () => ({
    ola:  'Ola de dentro do pinia com composition',
    fields: {"email": "", "password": ""},
    auth: {erro: "",  token:""}
  })
})