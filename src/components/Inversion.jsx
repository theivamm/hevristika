import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Inversion() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)
  const footnoteRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.section-label, .section-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(Array.from(gridRef.current?.children || []),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(footnoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: footnoteRef.current, start: 'top 75%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="inversion" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Inversión</p>
        <h2 className="section-title">La inversión en tu formación.</h2>
        <div className="grid" ref={gridRef}>
          <div className="card">
            <h3 style={{ fontSize: 20 }}>Módulo Estándar</h3>
            <div className="price">USD 2.800 <span>/ programa</span></div>
            <p style={{ fontSize: 14, color: 'var(--text-light)' }}>4 semanas de programa completo</p>
            <ul>
              <li>Programa completo de 4 semanas</li>
              <li>Materiales de estudio</li>
              <li>Acceso a instalaciones</li>
              <li>Certificación internacional</li>
            </ul>
            <a href="#cta-form" className="btn btn-outline" style={{ width: '100%' }}>Reservar llamada</a>
          </div>
          <div className="card featured">
            <span className="badge">Recomendado</span>
            <h3 style={{ fontSize: 20 }}>Experiencia Completa</h3>
            <div className="price">USD 4.200 <span>/ programa</span></div>
            <p style={{ fontSize: 14, color: 'var(--text-light)' }}>Programa estándar + alojamiento y actividades</p>
            <ul>
              <li>Todo lo del Módulo Estándar</li>
              <li>Alojamiento durante el programa</li>
              <li>Actividades y experiencias adicionales</li>
              <li>Transfer desde/a aeropuerto</li>
              <li>Acompañamiento logístico completo</li>
            </ul>
            <a href="#cta-form" className="btn btn-primary" style={{ width: '100%' }}>Reservar llamada</a>
          </div>
        </div>
        <p className="footnote" ref={footnoteRef}>Para alumnos del exterior, la inversión es comparable a la de una escuela de bartending en España o Francia — con la diferencia de que acá sumás el viaje, el entorno y la experiencia de vivir un mes en Misiones.</p>
      </div>
      <style>{`
        #inversion{background:var(--cream-light)}
        #inversion .grid{display:grid;gap:24px;margin-top:40px}
        @media(min-width:768px){#inversion .grid{grid-template-columns:repeat(2,1fr);gap:32px}}
        #inversion .card{background:var(--white);padding:32px;border-radius:var(--radius);box-shadow:var(--shadow);text-align:center}
        #inversion .card.featured{border:2px solid var(--green);position:relative}
        #inversion .card.featured .badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--green);color:var(--white);font-size:11px;font-weight:700;padding:4px 16px;border-radius:20px;letter-spacing:1px;text-transform:uppercase}
        #inversion .card .price{font-size:48px;font-weight:800;color:var(--green);margin:16px 0}
        #inversion .card .price span{font-size:18px;font-weight:400;color:var(--text-light)}
        #inversion .card ul{text-align:left;list-style:none;margin:24px 0}
        #inversion .card ul li{padding:8px 0;font-size:14px;color:var(--text-light);display:flex;align-items:flex-start;gap:10px}
        #inversion .card ul li::before{content:'✓';color:var(--green);font-weight:700}
        #inversion .footnote{text-align:center;max-width:640px;margin:40px auto 0;font-size:14px;color:var(--text-light);line-height:1.7}
        @media(max-width:767px){#inversion .card .price{font-size:36px}}
      `}</style>
    </section>
  )
}
