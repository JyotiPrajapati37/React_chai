import { useState } from "react";


function UseStateHook(){
  let [Count, setCount] = useState(0);
  function addVal(){
      setCount(Count + 1)
  }
  
  function delVal(){
    setCount(Count - 1)
  }
  return(
    <>
    <h1>clicked {Count} times</h1>
    <button onClick={addVal}>Added value</button><br />
    <button onClick={delVal}>Deleted value</button>
    </>
  )
}
export default UseStateHook;