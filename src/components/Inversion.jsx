import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Inversion() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.inv-label, .inv-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.inv-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.inv-footnote'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="inversion" ref={sectionRef}>
      <div className="inv-glow inv-glow-1" />
      <div className="inv-glow inv-glow-2" />
      <div className="container">
        <p className="inv-label">Inversión</p>
        <h2 className="inv-title">La inversión en tu formación.</h2>
        <div className="inv-grid">
          <div className="inv-card">
            <h3>Módulo Estándar</h3>
            <div className="inv-price">USD 2.800 <span>/ programa</span></div>
            <p className="inv-sub">4 semanas de programa completo</p>
            <ul>
              <li>Programa completo de 4 semanas</li>
              <li>Materiales de estudio</li>
              <li>Acceso a instalaciones</li>
              <li>Certificación internacional</li>
            </ul>
            <a href="#cta-form" className="btn btn-outline" style={{ width: '100%', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--white)' }}>Reservar llamada</a>
          </div>
          <div className="inv-card inv-featured">
            <span className="inv-badge">Recomendado</span>
            <h3>Experiencia Completa</h3>
            <div className="inv-price">USD 4.200 <span>/ programa</span></div>
            <p className="inv-sub">Programa estándar + alojamiento y actividades</p>
            <ul>
              <li>Todo lo del Módulo Estándar</li>
              <li>Alojamiento durante el programa</li>
              <li>Actividades y experiencias adicionales</li>
              <li>Transfer desde/a aeropuerto</li>
              <li>Acompañamiento logístico completo</li>
            </ul>
            <a href="#cta-form" className="btn btn-primary" style={{ width: '100%', background: '#9ce9e3', color: '#000', border: 'none' }}>Reservar llamada</a>
          </div>
        </div>
        <p className="inv-footnote">Para alumnos del exterior, la inversión es comparable a la de una escuela de bartending en España o Francia — con la diferencia de que acá sumás el viaje, el entorno y la experiencia de vivir un mes en Misiones.</p>
      </div>
      <style>{`
        #inversion{background:linear-gradient(135deg,#000 0%,#0d1a14 100%);position:relative;overflow:hidden;padding:120px 0}
        .inv-glow{position:absolute;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0}
        .inv-glow-1{width:500px;height:500px;background:rgba(156,233,227,0.1);top:-150px;left:-100px}
        .inv-glow-2{width:400px;height:400px;background:rgba(26,47,33,0.3);bottom:-100px;right:-80px}
        #inversion .container{position:relative;z-index:1}
        .inv-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;text-align:center;margin-bottom:16px}
        .inv-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.6rem,3.5vw,3rem);font-weight:700;color:var(--white);text-align:center;line-height:1.15;margin-bottom:48px}
        .inv-grid{display:grid;gap:24px;max-width:800px;margin:0 auto}
        .inv-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.06);border-radius:20px;padding:40px 32px;text-align:center}
        .inv-card.inv-featured{border-color:rgba(156,233,227,0.25);position:relative}
        .inv-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#9ce9e3;color:#000;font-size:11px;font-weight:700;padding:4px 16px;border-radius:20px;letter-spacing:1px;text-transform:uppercase}
        .inv-card h3{font-family:var(--font);font-size:20px;font-weight:700;color:var(--white);margin-bottom:8px}
        .inv-price{font-size:48px;font-weight:800;color:#9ce9e3;margin:16px 0;line-height:1}
        .inv-price span{font-size:18px;font-weight:400;color:rgba(255,255,255,0.4)}
        .inv-sub{font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:24px}
        .inv-card ul{text-align:left;list-style:none;margin:24px 0}
        .inv-card ul li{padding:8px 0;font-size:14px;color:rgba(255,255,255,0.7);display:flex;align-items:flex-start;gap:10px}
        .inv-card ul li::before{content:'✓';color:#9ce9e3;font-weight:700}
        .inv-footnote{text-align:center;max-width:640px;margin:48px auto 0;font-size:14px;color:rgba(255,255,255,0.5);line-height:1.7}
        @media(min-width:768px){
          .inv-grid{grid-template-columns:1fr 1fr;gap:32px}
          .inv-card{padding:48px 40px}
        }
        @media(max-width:767px){.inv-price{font-size:36px}}
      `}</style>
    </section>
  )
}
