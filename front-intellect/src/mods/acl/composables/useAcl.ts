import { toRefs } from "vue";
import { store } from "./storeAcl";
import { httpAcl } from "./httpAcl";
export const useAcl = () => {
  function checkIfExisteRoutes(rotaID: number) {
    if (store.rotasEnableServidor.includes(rotaID)) {
      return true;
    } else {
      return false;
    }
  }

  function joinAclPublic() {
    if (store.userAcl && store.userAcl[0]) {
      store.userAcl.unshift(store.publicRoutes[0]);
    } else {
      store.userAcl = store.publicRoutes[0];
    }
  }

  async function getUserAcl(id: any, FuncHttpAcl = httpAcl) {
    let useHttpAcl = await FuncHttpAcl().getUserAcl(id);
    store.userAcl = useHttpAcl.data;
  }

  function generateRoutesEnableWithUserAcls() {
    const routesEnable = store.rotasEnableServidor;
    if (store.userAcl && store.userAcl[0]) {
      store.userAcl.forEach((acl: any) => {
        acl.Routes.forEach((rota: any) => {
          if (!routesEnable.includes(rota)) {
            routesEnable.push(rota);
          }
        });
        store.rotasEnableServidor = routesEnable;
      });
    }
    joinAclPublic();
  }

  return {
    ...toRefs(store),
    checkIfExisteRoutes,
    generateRoutesEnableWithUserAcls,
    getUserAcl,
    joinAclPublic,
  };
};
