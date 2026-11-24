import { Hero } from '../components/Hero'
import { Buscador } from '../components/Buscador'
import { Categorias } from '../components/Categorias'
import { Recomendaciones } from '../components/Recomendaciones'
import { Nosotros } from '../components/Nosotros'

export const Home = () => {
  return (
    <>
    <Hero/>
    <Buscador/>  
    <Categorias/>
    <Recomendaciones/>
    <Nosotros/>
    </>
  )
}
