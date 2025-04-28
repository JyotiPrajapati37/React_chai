import Card from '../Components/Card'
import HeaderProps from '../Components/HeaderProps'
import './index.css'
export default function App() {
  return (
    <>
    <h1 className=" bg-green-200 text-black p-4 rounded-xl">
      Hello world!
    </h1>
    <HeaderProps name="yoshita"/>

    <HeaderProps name="jainny"/>
    <HeaderProps name="jyoti"/>
    <Card username="jyoti"/>
    <Card/>
    </>
    
  )
}

