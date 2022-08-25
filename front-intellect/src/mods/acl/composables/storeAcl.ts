import { reactive } from "vue";

export const store = reactive({
  rotasEnableServidor: [0, 1, 2, 3] as number[],
  publicRoutes: [
    {
      ID: 1,
      Name: "Public",
      Routes: [0, 1, 2, 3],
    },
  ],
  userAcl: [] as any,
});
