import { reactive } from "vue";

export const store = reactive({
  rotasEnableServidor: [] as number[],
  acls: [
    {
      id: 1,
      name: "Public",
      rotas: [0, 1, 2, 3],
    },
    {
      id: 2,
      name: "Logged",
      rotas: [4],
    },
    {
      id: 3,
      name: "Administrador",
      rotas: [0, 1, 2, 3, 4],
    },
  ],
  userAcl: [1] as number[],
});
