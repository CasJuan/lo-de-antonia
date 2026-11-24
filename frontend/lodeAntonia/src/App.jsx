import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Detalle } from "./pages/Detalle"
import { Administracion } from "./pages/Administracion"
import { ListaProductos } from "./pages/ListaProductos"
import { AgregarCabana } from "./pages/AgregarCabana"
import { PanelLayout } from "./components/PanelLayout"



function App() {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-crema">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabanas/:id" element={<Detalle />} />
          <Route path="administracion" element={<PanelLayout />}>
            <Route index element={<Administracion />} />
            <Route path="listado" element={<ListaProductos />} />
            <Route path="agregar" element={<AgregarCabana />} />
          </Route>
        </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App
