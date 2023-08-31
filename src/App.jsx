import './App.css'
import { useState } from "react";
import Navbar from './components/Navbar'
import UserList from './components/UserList'

function App() {

  const [showData, setShowData] = useState(false);
  const handleClick = () => {
    console.log("click");
    setShowData(true);
  }

  return (
    <>
    <Navbar handleClick={handleClick}/>
    {showData && <UserList />}
    </>
  )
}

export default App
