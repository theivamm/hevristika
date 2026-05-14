import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Problema() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current?.querySelectorAll('.section-label, .section-title, .section-sub, .highlight'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="problema">
      <div className="container">
        <div className="split" ref={ref}>
          <h2 className="split-title"><span className="split-title-inter">NO ES SOLO UN CURSO,</span><br /><span className="split-title-serif">es tu transformación.</span></h2>
          <p className="split-text">Mientras otros te enseñan técnica, en Hevristika cambiamos tu realidad. Un mes en Misiones para obtener nivel profesional, contactos reales y una experiencia que pocos en el mundo pueden contar.</p>
        </div>
        <div className="cards-row">
          <div className="card card-dark">
            <span className="card-label">El Destino</span>
            <h3 className="card-title">Misiones: Tu campus de 30 días</h3>
            <p className="card-text">Olvidate de las aulas tradicionales. Formate en un entorno único diseñado para llevar tu técnica y tu mentalidad al siguiente nivel. Un mes de inmersión total que no vas a encontrar en ninguna otra ciudad.</p>
          </div>
          <div className="card card-image">
            <span className="card-label">El Impacto</span>
            <h3 className="card-title">De Estudiante a Profesional Real</h3>
            <p className="card-text">En Hevristika no solo aprendés a mezclar bebidas; construís una red de contactos y un perfil profesional de élite. Salí con la confianza y el nivel que las mejores barras del mundo exigen.</p>
          </div>
        </div>
        <div className="pills-row">
          <span className="glass-pill">5+ países</span>
          <span className="glass-pill">Alumnos internacionales</span>
          <span className="glass-pill">EBS Thailand</span>
          <span className="glass-pill">Fundadores formados en</span>
          <span className="glass-pill">Destino único</span>
          <span className="glass-pill">Misiones, Argentina</span>
          <span className="glass-pill">Grupos reducidos</span>
          <span className="glass-pill">Máx. 12 alumnos</span>
          <span className="glass-pill">Desde 2025</span>
          <span className="glass-pill">Programa activo</span>
        </div>
      </div>
      <style>{`
        #problema{background:#f5f5f5;padding:120px 0}
        #problema .split{display:grid;grid-template-columns:1fr;gap:24px;align-items:center;margin-bottom:80px}
        .split-title{font-size:clamp(2rem,4vw,3.5rem);line-height:1.15;color:#1a1a2e}
        .split-title-inter{font-family:var(--font);font-weight:800;letter-spacing:-0.03em}
        .split-title-serif{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-style:italic}
        .split-text{font-size:clamp(1rem,1.25vw,1.2rem);line-height:1.7;color:rgba(26,26,46,0.75);max-width:520px}
        .cards-row{display:grid;grid-template-columns:1fr;gap:24px}
        .card{border-radius:24px;padding:48px 40px;display:flex;flex-direction:column;justify-content:flex-end;min-height:420px}
        .card-dark{background:#000}
        .card-dark .card-label{color:rgba(255,255,255,0.5)}
        .card-dark .card-title{color:var(--white)}
        .card-dark .card-text{color:rgba(255,255,255,0.75)}
        .card-image{background:linear-gradient(180deg,rgba(0,0,0,0.25) 0%,rgba(0,0,0,0.75) 100%),url("../../imgs/Cocktails_juices_bar_products_202605111941.jpeg") center/cover no-repeat}
        .card-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:12px}
        .card-title{font-family:var(--font);font-size:clamp(1.5rem,2.5vw,2.2rem);font-weight:800;letter-spacing:-0.03em;color:var(--white);line-height:1.15;margin-bottom:16px}
        .card-text{font-size:clamp(0.9rem,1vw,1rem);line-height:1.6;color:rgba(255,255,255,0.75);max-width:440px}
        .pills-row{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:64px}
        .glass-pill{background:rgba(255,255,255,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.6);border-radius:100px;padding:10px 24px;font-size:14px;font-weight:500;color:#1a1a2e;box-shadow:0 4px 20px rgba(0,0,0,0.03)}
        @media(min-width:768px){
          #problema .split{grid-template-columns:1fr 1fr;gap:64px}
          .split-text{max-width:100%}
          .cards-row{grid-template-columns:1fr 1fr;gap:32px}
          .card{min-height:480px;padding:56px 48px}
          .pills-row{gap:16px;margin-top:80px}
          .glass-pill{padding:12px 28px;font-size:15px}
        }
      `}</style>
    </section>
  )
}
