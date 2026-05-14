import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import queesVideo from '../assets/videos/quees.mp4'

export default function QueEs() {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: cardRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(cardRef.current?.querySelectorAll('.qe-label, .qe-title, .qe-sub, .qe-pillar'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: cardRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="que-es">
      <div className="qe-video-wrap">
        <video autoPlay muted loop playsInline className="qe-bg-video"><source src={queesVideo} type="video/mp4" /></video>
      </div>
      <div className="qe-overlay" />
      <div className="container">
        <div className="qe-card" ref={cardRef}>
          <p className="qe-label">Qué es Hevristika</p>
          <h2 className="qe-title">Una escuela de bartending profesional en el corazón de la selva misionera.</h2>
          <p className="qe-sub">Hevristika es un programa intensivo de formación en bartending y coctelería profesional, ubicado en Misiones, Argentina — a pasos de las Cataratas del Iguazú. Creado por bartenders formados en la European Bartender School de Tailandia, con el objetivo de traer un estándar internacional a un destino que no se olvida.</p>
          <div className="qe-pillars">
            <div className="qe-pillar">
              <strong>Técnica real</strong>
              <p>El mismo nivel exigente que encontrás en las mejores escuelas del mundo, aplicado desde el primer día.</p>
            </div>
            <div className="qe-pillar">
              <strong>Destino único</strong>
              <p>Vivís y aprendés en Misiones. La región más biodiversa de Argentina, con una cultura gastronómica propia.</p>
            </div>
            <div className="qe-pillar">
              <strong>Comunidad activa</strong>
              <p>Los egresados de Hevristika no desaparecen. Hay una red real de personas que siguen en contacto, colaborando y recomendándose.</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        #que-es{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;padding:100px 0}
        #que-es .qe-video-wrap{position:absolute;inset:-10% 0;width:100%;height:120%}
        #que-es .qe-bg-video{width:100%;height:100%;object-fit:cover}
        #que-es .qe-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.6);z-index:1}
        #que-es .container{position:relative;z-index:2;width:100%}
        .qe-card{background:rgba(0,0,0,0.55);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08);border-radius:24px;padding:48px 40px;max-width:720px;margin:0 auto}
        .qe-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;margin-bottom:16px}
        .qe-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.6rem,3vw,2.6rem);font-weight:700;color:var(--white);line-height:1.2;margin-bottom:20px}
        .qe-sub{font-size:clamp(0.9rem,1.1vw,1.05rem);line-height:1.7;color:rgba(255,255,255,0.75);margin-bottom:32px}
        .qe-pillars{display:grid;gap:16px}
        .qe-pillar{padding:20px 24px;background:rgba(255,255,255,0.06);border-radius:12px;border-left:3px solid #9ce9e3}
        .qe-pillar strong{display:block;font-size:17px;margin-bottom:4px;color:#9ce9e3}
        .qe-pillar p{font-size:14px;color:rgba(255,255,255,0.65);line-height:1.5}
        @media(min-width:768px){
          .qe-card{padding:64px 56px}
          .qe-pillars{grid-template-columns:1fr 1fr 1fr;gap:20px}
        }
      `}</style>
    </section>
  )
}
