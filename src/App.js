import { useState } from "react"
import './App.scss';
import Main from "./components/main/Main"
import Header from "./components/Header/Header"
import Welcome from "./components/Welcome/Welcome"
import qrPlaceholder from "./media/qr-placeholder.svg"
import userPlaceholder from "./media/user-placeholder.svg"


function App() {
  const [page, setPage] = useState("welcome")
  const [created, setCreated] = useState(false)

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

  function fetchData() {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${cardData.url}&bgcolor=${cardData.background.substring(1)}&color=${cardData.qrColor.substring(1)}&format=svg`)
        .then(res => res.text())
        .then(response => {
            setCreated(true)
            const holder = document.createElement('div')
            const holder2 = document.createElement('div')
            const holder3 = document.createElement('div')
            const holder4 = document.createElement('div')

            holder.innerHTML = response
            holder2.innerHTML = response
            holder3.innerHTML = response
            holder4.innerHTML = response

            if (page === "welcome"){
              document.getElementById('qr-holder').innerHTML = ""
              document.getElementById('qr-holder').append(holder)
  
              document.getElementById('qr-card').innerHTML = ""
              document.getElementById('qr-card').append(holder2)
  
              document.getElementById('qr-sticker').innerHTML = ""
              document.getElementById('qr-sticker').append(holder3)
            }

            if (page === "card"){
              document.getElementById('qr-card-main').innerHTML = ""
              document.getElementById('qr-card-main').append(holder4)
            }

      })
      .catch(console.log("Request not recieved"))
}
  
  return (
    <div id="content" style={{background: cardData.qrColor}}>
      <Header setPage={setPage}/>
      {page === "welcome" 
        ? <Welcome setPage={setPage} cardData={cardData} setCardData={setCardData} fetchData={fetchData} /> 
        : <Main page={page} setPage={setPage} cardData={cardData} setCardData={setCardData} fetchData={fetchData} />}
    </div>
  )
}

export default App;
