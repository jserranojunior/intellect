import { useAcl } from "./useAcl";

let {
  generateRoutesEnableWithUserAcls,
  getUserAcl,
  checkIfExisteRoutes,
  rotasEnableServidor,
} = useAcl();

test("checkIfExisteRoutes Public notFound", () => {
  generateRoutesEnableWithUserAcls();
  expect(checkIfExisteRoutes(0)).toBe(true);
});

test("generateRoutesEnableWithUserAcls", () => {
  getUserAcl();
  generateRoutesEnableWithUserAcls();
  expect(rotasEnableServidor.value).toStrictEqual([0, 1, 2, 3, 4]);
});
