

import { useState } from '#app'

const  useFoo = () => {
  const state =  {
    foo: useState('foo', () => 'baar'),
    bar:  useState('bar', () => 'USEEEE')
    }
    function setFoo(){
      state.foo.value ="NOVA"
            state.bar.value ="VELHO"
            console.log("Alterou")
    }
  return {...state, setFoo}
}
export default useFoo

