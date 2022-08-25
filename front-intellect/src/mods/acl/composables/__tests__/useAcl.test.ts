import { useAcl } from "../useAcl";
import { httpAcl } from "./mockHttpAcl";
let {
  generateRoutesEnableWithUserAcls,
  getUserAcl,
  checkIfExisteRoutes,
  rotasEnableServidor,
  userAcl,
  joinAclPublic,
} = useAcl();

test("rotasEnableServidor value", () => {
  expect(rotasEnableServidor.value).toStrictEqual([0, 1, 2, 3]);
});
test("userAcl value", () => {
  expect(userAcl.value).toStrictEqual([]);
});

test("joinAclPublic", () => {
  joinAclPublic();
  expect(userAcl.value).toStrictEqual([
    {
      ID: 1,
      Name: "Public",
      Routes: [0, 1, 2, 3],
    },
  ]);
});

test("getUserAcl", () => {
  getUserAcl(1, httpAcl).then(async () => {
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

test("checkIfExisteRoutes Public notFound", () => {
  generateRoutesEnableWithUserAcls();
  expect(checkIfExisteRoutes(0)).toBe(true);
});

test("generateRoutesEnableWithUserAcls", async () => {
  await getUserAcl(1, httpAcl).then(() => {
    generateRoutesEnableWithUserAcls();
    expect(rotasEnableServidor.value).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });
});
