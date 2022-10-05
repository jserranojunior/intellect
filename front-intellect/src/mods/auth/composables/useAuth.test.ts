import { useAuth } from "./useAuth";
import { it, expect } from "vitest";

const {
  getOla,
  setStateAuthError,
  auth,
  fields,
  Login,
  checkTokenIsEmpty,
  checkOnBrowser,
  setLocalStorageToken,
  setStateToken,
  checkLocalstorageToken,
  setToken,
  Logout,
  checkStateToken,
  isLogged,
  checkFieldsIsValid,
  setStateFields,
} = useAuth();

it("setStateAuthError check set erro", () => {
  setStateAuthError("Falha ao conectar");
  expect(auth.value.erro).toBe("Falha ao conectar");
});
it("setStateToken set state token", () => {
  setStateToken("tokensetstring");
  expect(auth.value.token).toBe("tokensetstring");
});
it("checkTokenIsEmpty check set erro", () => {
  checkTokenIsEmpty("");
  expect(auth.value.erro).toBe("Erro ao fazer login");
});
it("checkOnBrowser check is browser", () => {
  expect(checkOnBrowser()).toBe(false);
});
it("setLocalStorageToken empty", () => {
  expect(setLocalStorageToken("")).toBe(undefined);
});
it("checkLocalstorageToken", () => {
  expect(checkLocalstorageToken()).toBe(false);
});
it("Return message useAuth", () => {
  expect(getOla()).toBe("ola de dentro do reactive");
});

it("setToken", () => {
  setToken("abc");
  expect(auth.value.token).toBe("abc");
});

it("Logout", () => {
  Logout();
  expect(auth.value.erro).toBe("");
  expect(auth.value.token).toBe("");
});
it("checkStateToken false", () => {
  expect(checkStateToken()).toBe(false);
});
it("checkStateToken true", () => {
  setStateToken("tokenset");
  expect(checkStateToken()).toBe(true);
});
it("isLogged false", async () => {
  setStateToken("");
  expect(await isLogged()).toBe(false);
});
it("isLogged true", async () => {
  setToken("abc");
  expect(await isLogged()).toBe(true);
});

it("checkFieldsIsValid  false", () => {
  expect(checkFieldsIsValid()).toBe(false);
});
it("setStateFields", () => {
  setStateFields({ email: "jorgeserranojunior@gmail.com", password: "123" });
  expect(
    fields.value.email == "jorgeserranojunior@gmail.com" &&
      fields.value.password == "123"
  ).toBe(true);
});
it("checkFieldsIsValid  true", () => {
  setStateFields({ email: "jorgeserranojunior@gmail.com", password: "123" });
  expect(checkFieldsIsValid()).toBe(true);
});

it("Login false", async () => {
  setStateFields({ email: "jorgeserranojunior@gmail.com", password: "12" });
  const login = await Login();
  expect(login).toBe(false);
});

it("Login true", async () => {
  setStateFields({ email: "jorgeserranojunior@gmail.com", password: "123" });
  const login = await Login();
  expect(login).toBe(true);
});

it("Login altera token", async () => {
  setStateFields({ email: "jorgeserranojunior@gmail.com", password: "123" });
  const login = await Login().then(() => {
    expect(auth.value.token).toBeTruthy();
  });
});
