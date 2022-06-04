import { useState } from "react"
import './App.scss';
import Main from "./components/main/Main"
import Header from "./components/Header/Header"
import Welcome from "./components/Welcome/Welcome"


function App() {
  const [page, setPage] = useState("welcome")
  
  return (
    <div id="content">
      <Header />
      {page === "welcome" 
        ? <Welcome setPage={setPage}/> 
        : <Main page={page} setPage={setPage}/>}
    </div>
  )
}

export default App;
