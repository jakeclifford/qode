import { useState } from "react"
import './App.scss';
import Main from "./components/main/Main"
import Header from "./components/Header/Header"
import Welcome from "./components/Welcome/Welcome"
import qrPlaceholder from "./media/qr-placeholder.svg"
import userPlaceholder from "./media/user-placeholder.svg"


function App() {
  const [page, setPage] = useState("welcome")

  const [cardData, setCardData] = useState({
      qrCode: qrPlaceholder, 
      username: "Username", 
      url: "qode.design", 
      image: userPlaceholder,
      background: "#85f6fa",
      qrColor: "#0d303e",
      top:"Scan code to donate to charity",
      bottom: "Thankyou for the donation"
    })
  
  return (
    <div id="content" style={{background: "white"}}>
      <Header setPage={setPage}/>
      {page === "welcome" 
        ? <Welcome page={page} setPage={setPage} cardData={cardData} setCardData={setCardData}/> 
        : <Main page={page} setPage={setPage} cardData={cardData} setCardData={setCardData}/>}
    </div>
  )
}

export default App;
