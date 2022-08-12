import { reactive } from "vue";

export const store = reactive({
  ola: "ola de dentro do reactive",
  fields: {
    email: "",
    password: "",
  },
  confirmPassword: "",
  auth: {
    erro: "",
    token: "",
  },
});
