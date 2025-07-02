import { reactive } from "vue";

export const store = reactive({
  nameRoutesEnable: [] as string[], // explicitamente array de strings
  rotasEnableServidor: [
    // IDs numéricos das rotas habilitadas
    0, 1, 2, 8,
  ] as number[],
  publicRoutes: [
    {
      ID: 0,
      Name: "Public",
      Routes: [0, 1, 2, 8],
    },
  ],
  userAcl: [] as any,
});
