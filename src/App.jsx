import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problema from './components/Problema'
import QueEs from './components/QueEs'
import Fundadoras from './components/Fundadoras'
import HevristikaMetodo from './components/HevristikaMetodo'
import Programa from './components/Programa'
import Foodpairing from './components/Foodpairing'
import Destino from './components/Destino'
import Diferenciales from './components/Diferenciales'
import Testimonios from './components/Testimonios'
import Inversion from './components/Inversion'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    ScrollTrigger.refresh()
    window.addEventListener('scroll', () => {
      document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 60)
    })
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Problema />
      <QueEs />
      <Fundadoras />
      <HevristikaMetodo />
      <Programa />
      <Foodpairing />
      <Destino />
      <Diferenciales />
      <Testimonios />
      <Inversion />
      <CtaFinal />
      <Footer />
      <div className="float-stack">
        <button className="float-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Volver arriba">↑</button>
        <WhatsAppFloat />
      </div>
    </>
  )
}
