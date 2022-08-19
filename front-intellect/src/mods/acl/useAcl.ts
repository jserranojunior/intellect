import { toRefs } from "vue";
import { store } from "../acl/storeAcl";

export const useAcl = () => {
  function checkIfExisteRoutes(rotaID: number) {
    if (store.rotasEnableServidor.includes(rotaID)) {
      return true;
    } else {
      return false;
    }
  }

  async function getUserAcl() {
    store.userAcl = [2];
  }

  function generateRoutesEnableWithUserAcls() {
    const routesEnable = store.rotasEnableServidor;
    store.userAcl.forEach((aclType) => {
      store.acls
        .find((acl) => acl.id === aclType)
        ?.rotas.forEach((rota) => {
          if (!routesEnable.includes(rota)) {
            routesEnable.push(rota);
          }
        });
    });
    store.rotasEnableServidor = routesEnable;
  }

  return {
    ...toRefs(store),
    checkIfExisteRoutes,
    generateRoutesEnableWithUserAcls,
    getUserAcl,
  };
};
