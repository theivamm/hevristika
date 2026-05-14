import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Programa() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.pg-label, .pg-title, .pg-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.pg-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="programa" ref={sectionRef}>
      <div className="container">
        <div className="pg-top">
          <p className="pg-label">El programa</p>
          <h2 className="pg-title"><span className="pg-title-inter">CUATRO SEMANAS.</span> <span className="pg-title-serif">Un programa diseñado sin relleno.</span></h2>
          <p className="pg-sub">El contenido está construido para que a las cuatro semanas tengas el nivel técnico y la confianza para trabajar en cualquier barra del mundo.</p>
        </div>
        <div className="pg-cards">
          <div className="pg-card">
            <h3 className="pg-card-title">Formación Técnica</h3>
            <ul className="pg-card-list">
              <li><span className="pg-pill">Técnica</span><strong>Técnicas de Flair</strong><span>Manejo del equipo, movimientos de presentación y técnica para espacios de alto nivel.</span></li>
              <li><span className="pg-pill">Precisión</span><strong>Free Pour</strong><span>Precisión sin jigger. Una habilidad que diferencia a los bartenders formados de los autodidactas.</span></li>
              <li><span className="pg-pill">Sustentabilidad</span><strong>Mixología Sustentable</strong><span>Desarrollo de cartas con criterio de temporada, reducción de desperdicio y diferenciación por propuesta.</span></li>
            </ul>
          </div>
          <div className="pg-card">
            <h3 className="pg-card-title">Proyección Profesional</h3>
            <ul className="pg-card-list">
              <li><span className="pg-pill">Maridaje</span><strong>Foodpairing</strong><span>Maridaje entre cocktails y gastronomía. Cómo diseñar experiencias completas para el cliente.</span></li>
              <li><span className="pg-pill">Servicio</span><strong>Operación Profesional de Barra</strong><span>Gestión del servicio, velocidad, lectura de la sala y estándares de un bar de nivel internacional.</span></li>
              <li><span className="pg-pill">Carrera</span><strong>Proyección de Carrera</strong><span>Cómo posicionarte en el mercado, armar tu portafolio y aprovechar la red de egresados.</span></li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        #programa{background:linear-gradient(135deg,#000 0%,#1a2f21 100%);padding:120px 0}
        #programa .pg-top{text-align:center;margin-bottom:64px}
        .pg-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;margin-bottom:16px}
        .pg-title{font-size:clamp(2rem,4.5vw,4rem);line-height:1.05;margin-bottom:16px;color:var(--white)}
        .pg-title-inter{font-family:var(--font);font-weight:800;letter-spacing:-0.03em}
        .pg-title-serif{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-style:italic;letter-spacing:-0.02em}
        .pg-sub{font-size:clamp(0.9rem,1.1vw,1.05rem);line-height:1.7;color:rgba(255,255,255,0.7);max-width:600px;margin:0 auto}
        .pg-cards{display:grid;grid-template-columns:1fr;gap:24px}
        .pg-card{background:rgba(255,255,255,0.06);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:40px 32px}
        .pg-card-title{font-family:var(--font);font-size:clamp(1.1rem,1.3vw,1.3rem);font-weight:800;letter-spacing:-0.02em;color:#9ce9e3;margin-bottom:24px}
        .pg-card-list{list-style:none;padding:0;display:flex;flex-direction:column;gap:20px}
        .pg-card-list li{display:flex;flex-direction:column;gap:4px}
        .pg-card-list li strong{font-family:var(--font);font-size:15px;font-weight:700;color:var(--white);letter-spacing:-0.01em}
        .pg-card-list li span{font-size:14px;line-height:1.5;color:rgba(255,255,255,0.6)}
        .pg-pill{display:inline-block;background:rgba(156,233,227,0.15);color:#9ce9e3;font-size:11px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;padding:3px 12px;border-radius:100px;align-self:flex-start;margin-bottom:2px}
        @media(min-width:768px){
          .pg-cards{grid-template-columns:1fr 1fr;gap:32px}
          .pg-card{padding:48px 40px}
          .pg-card-list{gap:24px}
        }
      `}</style>
    </section>
  )
}
