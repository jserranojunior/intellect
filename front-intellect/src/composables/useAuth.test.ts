import {useAuth} from "./useAuth"


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
} = useAuth() 

test('Return message useAuth', () => {
  expect(getOla()).toBe("Ola de dentro do useAuth com composition sem store");
});

test('setStateAuthError check set erro', () => {
  setStateAuthError("Falha ao conectar")
  expect(auth.value.erro).toBe("Falha ao conectar");
});
test('setStateToken set state token', () => {
  setStateToken("tokensetstring")
  expect(auth.value.token).toBe("tokensetstring");
});
test('checkTokenIsEmpty check set erro', () => {
  checkTokenIsEmpty("")
  expect(auth.value.erro).toBe("Erro ao fazer login");
});
test('checkOnBrowser check is browser', () => {  
  expect(checkOnBrowser()).toBe(false);
});
test('setLocalStorageToken empty', () => {  
  expect(setLocalStorageToken("")).toBe(undefined);
});
test('checkLocalstorageToken', () => {  
  expect(checkLocalstorageToken()).toBe(false);
});
test('setToken', () => {  
  setToken("abc")
    expect(auth.value.erro).toBe("");
    expect(auth.value.token).toBe("abc");
});
test('Logout', () => {  
  Logout()
    expect(auth.value.erro).toBe("");
    expect(auth.value.token).toBe("");
});
test('checkStateToken false', () => {   
    expect(checkStateToken()).toBe(false);
});
test('checkStateToken true', () => { 
    setStateToken("tokenset")  
    expect(checkStateToken()).toBe(true);
});
test('isLogged false', () => { 
  setStateToken("")
    expect(isLogged()).toBe(false);
});
test('isLogged false', () => { 
  setToken("abc")
    expect(isLogged()).toBe(true);
});

test('checkFieldsIsValid',()=>{
  expect(checkFieldsIsValid()).toBe(false)
})

test('checkFieldsIsValid',()=>{
  setStateFields({email:"jorgeserranojunior@gmail.com", password:"123"})
  expect(checkFieldsIsValid()).toBe(true)
})
test('setStateFields',()=>{
  setStateFields({email:"jorgeserranojunior@gmail.com", password:"123"})
  expect(fields.value.email == "jorgeserranojunior@gmail.com" && fields.value.password == "123").toBe(true)
})

test('Login false',async()=>{
  setStateFields({email:"jorgeserranojunior@gmail.com", password:"12"})
  const login = await Login()
   expect(login).toBe(false)  
})

test('Login true',async()=>{
  setStateFields({email:"jorgeserranojunior@gmail.com", password:"123"})
  const login = await Login()
   expect(login).toBe(true)  
})


/* test('Login true',()=>{
  setStateFields({email:"jorgeserranojunior@gmail.com", password:"12"})  
  expect(Login()).toBe(true)
}) */
