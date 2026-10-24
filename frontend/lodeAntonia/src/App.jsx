import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Detalle } from "./pages/Detalle"



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/cabanas/:id" element= {<Detalle/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
