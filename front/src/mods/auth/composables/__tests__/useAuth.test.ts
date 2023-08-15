import Auth from "../Auth";
import { it, expect } from "vitest";
import ClassUseMockApiConnect from "./mockApiConnect";
const MockApiConnect = new ClassUseMockApiConnect();

it("setStateAuthError check set erro", () => {
  Auth.setStateAuthError("Falha ao conectar");
  expect(Auth.store.auth.erro).toBe("Falha ao conectar");
});
it("setStateToken set state token", () => {
  Auth.setStateToken("tokensetstring");
  expect(Auth.store.auth.token).toBe("tokensetstring");
});
it("checkTokenIsEmpty check set erro", () => {
  Auth.checkTokenIsEmpty("");
  expect(Auth.store.auth.erro).toBe("Erro ao fazer login");
});
it("checkOnBrowser check is browser", () => {
  expect(Auth.checkOnBrowser()).toBe(false);
});
it("setLocalStorageToken empty", () => {
  expect(Auth.setLocalStorageToken("")).toBe(undefined);
});
it("checkLocalstorageToken", () => {
  expect(Auth.checkLocalstorageToken()).toBe(false);
});
it("Return message useAuth", () => {
  expect(Auth.getOla()).toBe("ola de dentro do reactive");
});

it("setToken", () => {
  Auth.setToken("abc");
  expect(Auth.store.auth.token).toBe("abc");
});

it("Logout", () => {
  Auth.Logout();
  expect(Auth.store.auth.erro).toBe("");
  expect(Auth.store.auth.token).toBe("");
});
it("checkStateToken false", () => {
  expect(Auth.checkStateToken()).toBe(false);
});
it("checkStateToken true", () => {
  Auth.setStateToken("tokenset");
  expect(Auth.checkStateToken()).toBe(true);
});

it("isLogged true", async () => {
  Auth.setStateToken("abc");
  await Auth.isLogged().then((res) => {
    expect(res).toBe(true);
  });
});

it("isLogged false", async () => {
  Auth.setStateToken("");
  expect(await Auth.isLogged()).toBe(false);
});

it("checkFieldsIsValid  false", () => {
  expect(Auth.checkFieldsIsValid()).toBe(false);
});
it("setStateFields", () => {
  Auth.setStateFields({
    email: "jorgeserranojunior@gmail.com",
    password: "123",
  });
  expect(
    Auth.store.fields.email == "jorgeserranojunior@gmail.com" &&
      Auth.store.fields.password == "123"
  ).toBe(true);
});
it("checkFieldsIsValid  true", () => {
  Auth.setStateFields({
    email: "jorgeserranojunior@gmail.com",
    password: "123",
  });
  expect(Auth.checkFieldsIsValid()).toBe(true);
});

it("Login false", async () => {
  Auth.setStateFields({
    email: "jorgeserranojunior@gmail.com",
    password: "12",
  });
  const login = await Auth.Login(MockApiConnect);
  expect(login).toBe(false);
});

it("Login true", async () => {
  Auth.setStateFields({
    email: "jorgeserranojunior@gmail.com",
    password: "123",
  });
  const login = await Auth.Login(MockApiConnect);
  expect(login).toBe(true);
});

it("Login altera token", async () => {
  Auth.setStateFields({
    email: "jorgeserranojunior@gmail.com",
    password: "123",
  });
  await Auth.Login(MockApiConnect).then(() => {
    expect(Auth.store.auth.token).toBeTruthy();
  });
});
