import { Buscador } from "./components/Buscador"
import { Categorias } from "./components/Categorias"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Recomendaciones } from "./components/Recomendaciones"
import {Hero} from "./pages/Hero"



function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Buscador/>
      <Categorias/>
      <Recomendaciones/>
      <Footer/>
    </>
  )
}

export default App
