import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const modules = [
  { num: '01', title: 'Técnicas de Flair', desc: 'Manejo del equipo, movimientos de presentación y técnica para espacios de alto nivel.' },
  { num: '02', title: 'Free Pour', desc: 'Precisión sin jigger. Una habilidad que diferencia a los bartenders formados de los autodidactas.' },
  { num: '03', title: 'Mixología Sustentable', desc: 'Desarrollo de cartas con criterio de temporada, reducción de desperdicio y diferenciación por propuesta.' },
  { num: '04', title: 'Foodpairing', desc: 'Maridaje entre cocktails y gastronomía. Cómo diseñar experiencias completas para el cliente.' },
  { num: '05', title: 'Operación Profesional de Barra', desc: 'Gestión del servicio, velocidad, lectura de la sala y estándares de un bar de nivel internacional.' },
  { num: '06', title: 'Proyección de Carrera', desc: 'Cómo posicionarte en el mercado, armar tu portafolio y aprovechar la red de egresados.' },
]

export default function Programa() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(Array.from(gridRef.current?.children || []),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="programa" ref={sectionRef}>
      <div className="container">
        <p className="section-label">El programa</p>
        <h2 className="section-title">Cuatro semanas. Un programa diseñado sin relleno.</h2>
        <p className="section-sub intro">El contenido está construido para que a las cuatro semanas tengas el nivel técnico y la confianza para trabajar en cualquier barra del mundo.</p>
        <div className="grid" ref={gridRef}>
          {modules.map((m, i) => (
            <div key={i} className="module">
              <span className="num">{m.num}</span>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #programa{background:linear-gradient(180deg,var(--cream-light) 0%,var(--cream) 100%)}
        #programa .intro{max-width:640px;margin-bottom:32px}
        #programa .grid{display:grid;gap:16px}
        @media(min-width:768px){#programa .grid{grid-template-columns:repeat(2,1fr);gap:20px}}
        #programa .module{background:var(--white);padding:24px;border-radius:var(--radius);box-shadow:var(--shadow);transition:all 0.4s ease;cursor:default;border-left:4px solid var(--green)}
        #programa .module:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
        #programa .module .num{font-size:11px;font-weight:700;color:var(--green);letter-spacing:2px;margin-bottom:8px;display:block}
        #programa .module h3{font-size:18px;font-weight:700;margin-bottom:8px;color:var(--dark);letter-spacing:-0.02em}
        #programa .module p{font-size:14px;font-weight:400;color:var(--text-light);line-height:1.6}
      `}</style>
    </section>
  )
}
