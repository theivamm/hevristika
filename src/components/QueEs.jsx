import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import queesVideo from '../assets/videos/quees.mp4'

export default function QueEs() {
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current?.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: textRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(imgRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: imgRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(textRef.current?.querySelectorAll('.pillar'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: textRef.current, start: 'top 75%' } }
      )
      gsap.fromTo(imgRef.current?.querySelector('video'), { y: -30 }, {
        y: 30,
        scrollTrigger: { trigger: imgRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="que-es">
      <div className="container">
        <div className="grid">
          <div className="text">
            <div ref={textRef}>
              <p className="section-label">Qué es Hevristika</p>
              <h2 className="section-title">Una escuela de bartending profesional en el corazón de la selva misionera.</h2>
              <p className="section-sub">Hevristika es un programa intensivo de formación en bartending y coctelería profesional, ubicado en Misiones, Argentina — a pasos de las Cataratas del Iguazú.</p>
              <p className="section-sub" style={{ marginTop: 12 }}>Creado por bartenders formados en la European Bartender School de Tailandia, con el objetivo de traer un estándar internacional a un destino que no se olvida.</p>
              <div className="pillars">
                <div className="pillar">
                  <strong>Técnica real</strong>
                  <p style={{ fontSize: 14, color: 'var(--text-light)' }}>El mismo nivel exigente que encontrás en las mejores escuelas del mundo, aplicado desde el primer día.</p>
                </div>
                <div className="pillar">
                  <strong>Destino único</strong>
                  <p style={{ fontSize: 14, color: 'var(--text-light)' }}>Vivís y aprendés en Misiones. La región más biodiversa de Argentina, con una cultura gastronómica propia.</p>
                </div>
                <div className="pillar">
                  <strong>Comunidad activa</strong>
                  <p style={{ fontSize: 14, color: 'var(--text-light)' }}>Los egresados de Hevristika no desaparecen. Hay una red real de personas que siguen en contacto, colaborando y recomendándose.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrap" ref={imgRef}>
            <video autoPlay muted loop playsInline className="quees-video"><source src={queesVideo} type="video/mp4" /></video>
          </div>
        </div>
      </div>
      <style>{`
        #que-es{background:var(--white);position:relative}
        #que-es .grid{display:grid;gap:40px}
        @media(min-width:768px){#que-es .grid{grid-template-columns:1fr 1fr;gap:80px;align-items:center}}
        #que-es .image-wrap{position:relative;border-radius:var(--radius)}
        #que-es .image-wrap video{width:100%;display:block}
        #que-es .pillars{display:grid;gap:20px;margin-top:32px}
        #que-es .pillar{padding:20px 24px;background:var(--cream);border-radius:12px;border-left:4px solid var(--green)}
        #que-es .pillar strong{display:block;font-size:18px;margin-bottom:6px;color:var(--green-dark)}
      `}</style>
    </section>
  )
}
