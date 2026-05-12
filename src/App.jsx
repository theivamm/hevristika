import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Credibilidad from './components/Credibilidad'
import Problema from './components/Problema'
import QueEs from './components/QueEs'
import Programa from './components/Programa'
import Destino from './components/Destino'
import Diferenciales from './components/Diferenciales'
import Testimonios from './components/Testimonios'
import Inversion from './components/Inversion'
import CtaForm from './components/CtaForm'
import Faq from './components/Faq'
import CtaCierre from './components/CtaCierre'
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
      <Credibilidad />
      <Problema />
      <QueEs />
      <Programa />
      <Destino />
      <Diferenciales />
      <Testimonios />
      <Inversion />
      <CtaForm />
      <Faq />
      <CtaCierre />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
