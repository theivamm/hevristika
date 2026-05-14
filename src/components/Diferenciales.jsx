import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Euro, Building2, Users, GlassWater, Handshake, Plane } from 'lucide-react'

const cards = [
  { icon: Euro, title: 'Nivel internacional sin precio europeo', desc: 'El mismo nivel que las mejores escuelas del mundo, a un costo que refleja el contexto argentino.' },
  { icon: Building2, title: 'Entorno real, no simulado', desc: 'Aprendés en un espacio de trabajo real con los mismos estándares que un bar profesional.' },
  { icon: Users, title: 'Grupos reducidos', desc: 'Grupos chicos para que cada alumno tenga atención directa y personalizada del instructor.' },
  { icon: GlassWater, title: 'Fundadores que ejercen', desc: 'Bartenders en actividad con formación internacional. No académicos — profesionales que enseñan.' },
  { icon: Handshake, title: 'Red de egresados activa', desc: 'Una comunidad real que colabora, se recomienda y trabaja junta después del programa.' },
  { icon: Plane, title: 'Flexibilidad total', desc: 'Orientación sobre alojamiento, traslados y logística para que vengas desde donde estés.' },
]

export default function Diferenciales() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.df-label, .df-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.df-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="diferenciales" ref={sectionRef}>
      <div className="df-glow df-glow-1" />
      <div className="df-glow df-glow-2" />
      <div className="container">
        <p className="df-label">Por qué Hevristika</p>
        <h2 className="df-title"><span className="df-title-inter">¿POR QUÉ HEVRISTIKA</span> <span className="df-title-serif">y no otra escuela?</span></h2>
        <div className="df-grid">
          {cards.map((c, i) => (
            <div key={i} className="df-card">
              <c.icon size={24} className="df-icon" strokeWidth={1.5} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #diferenciales{background:#000;position:relative;overflow:hidden;padding:120px 0}
        .df-glow{position:absolute;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0}
        .df-glow-1{width:600px;height:600px;background:rgba(156,233,227,0.12);top:-200px;right:-100px}
        .df-glow-2{width:500px;height:500px;background:rgba(218,190,150,0.1);bottom:-150px;left:-100px}
        #diferenciales .container{position:relative;z-index:1}
        .df-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;text-align:center;margin-bottom:16px}
        .df-title{font-size:clamp(1.6rem,3.5vw,3rem);color:var(--white);text-align:center;line-height:1.1;margin-bottom:56px}
        .df-title-inter{font-family:var(--font);font-weight:800;letter-spacing:-0.03em}
        .df-title-serif{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-style:italic;letter-spacing:-0.02em}
        .df-grid{display:grid;gap:16px}
        .df-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:28px 24px;transition:all 0.4s cubic-bezier(0.16,1,0.3,1)}
        .df-card:hover{background:rgba(255,255,255,0.08);border-color:rgba(156,233,227,0.2);transform:translateY(-4px) scale(1.01)}
        .df-icon{color:#9ce9e3;margin-bottom:14px;display:block}
        .df-card h3{font-family:var(--font);font-size:17px;font-weight:700;letter-spacing:-0.02em;color:var(--white);margin-bottom:8px}
        .df-card p{font-size:14px;line-height:1.6;color:rgba(255,255,255,0.6)}
        @media(min-width:768px){
          .df-grid{grid-template-columns:repeat(3,1fr);gap:20px}
          .df-card{padding:32px 28px}
        }
      `}</style>
    </section>
  )
}
