import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateHook from './UseStatehook'

function App() {
   let [counter , setCounter]= useState(0)

   const addValue = () =>{
    //counter = counter + 1;
    if(counter <= 19){setCounter(counter + 1)}
   
   }

   const delValue = () =>{
    if(counter > 0){
    setCounter(counter - 1)}
   }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={delValue}>Del value</button>


      <br />
      <UseStateHook/>s
    </>
  )
}

export default App
