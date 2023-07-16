import { useAcl } from "../useAcl";
import { httpAcl } from "./mockHttpAcl";
import { it, expect } from "vitest";

let {
  generateRoutesEnableWithUserAcls,
  getUserAcl,
  checkIfExisteRoutes,
  rotasEnableServidor,
  userAcl,
  joinAclPublic,
  clearRoutesEnableWithUserAcls,
} = useAcl();

it("rotasEnableServidor value", () => {
  expect(rotasEnableServidor.value).toStrictEqual([]);
});
it("userAcl value", () => {
  expect(userAcl.value).toStrictEqual([]);
});

it("joinAclPublic", () => {
  joinAclPublic();
  expect(userAcl.value).toStrictEqual([
    {
      ID: 0,
      Name: "Public",
      Routes: [0, 1, 2, 3],
    },
  ]);
});

it("getUserAcl", () => {
  getUserAcl(httpAcl).then(async () => {
    expect(userAcl.value).toStrictEqual([
      {
        ID: 3,
        Name: "Administrador",
        Routes: [1, 2, 3, 4, 5],
      },
      {
        ID: 2,
        Name: "Logged",
        Routes: [4],
      },
    ]);
  });
});

it("checkIfExisteRoutes Public notFound", () => {
  generateRoutesEnableWithUserAcls();
  expect(checkIfExisteRoutes(0)).toBe(true);
});

it("generateRoutesEnableWithUserAcls", async () => {
  await getUserAcl(httpAcl).then(() => {
    generateRoutesEnableWithUserAcls();
    expect(rotasEnableServidor.value).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });
});

it("clearRoutesEnable", async () => {
  await getUserAcl(httpAcl).then(() => {
    clearRoutesEnableWithUserAcls();
    expect(rotasEnableServidor.value).toStrictEqual([0, 1, 2, 3]);
  });
});
