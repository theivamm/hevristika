import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Euro, Building2, Users, GlassWater, Handshake, Plane } from 'lucide-react'

const cards = [
  { icon: Euro, title: 'Nivel internacional sin precio europeo', desc: 'La formación es equivalente a la de las mejores escuelas del mundo. El costo refleja el contexto argentino — lo que en Europa te costaría el doble o el triple, acá tiene otro precio.' },
  { icon: Building2, title: 'Entorno real, no simulado', desc: 'No aprendés en un aula con una barra de práctica. Aprendés en un espacio de trabajo real, con los mismos estándares que vas a encontrar cuando ejerzas.' },
  { icon: Users, title: 'Grupos reducidos', desc: 'El programa no escala a costa de la calidad. Los grupos son chicos para que cada alumno tenga atención directa del instructor.' },
  { icon: GlassWater, title: 'Fundadores que ejercen', desc: 'Las personas que diseñaron el programa son bartenders en actividad, con formación internacional. No son académicos — son profesionales que también enseñan.' },
  { icon: Handshake, title: 'Red de egresados activa', desc: 'Al terminar el programa sos parte de una comunidad real. Personas que se conocieron en Hevristika trabajan juntas, se recomiendan y colaboran.' },
  { icon: Plane, title: 'Flexibilidad para alumnos de afuera', desc: 'El programa está pensado para que vengas desde donde estés. Hay orientación sobre alojamiento, traslados y organización logística.' },
]

export default function Diferenciales() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.section-label, .section-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(Array.from(gridRef.current?.children || []),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="diferenciales" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Por qué Hevristika</p>
        <h2 className="section-title">¿Por qué Hevristika y no otra escuela?</h2>
        <div className="grid" ref={gridRef}>
          {cards.map((c, i) => (
            <div key={i} className="card">
              <c.icon size={28} className="card-icon" strokeWidth={1.5} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #diferenciales{background:var(--white)}
        #diferenciales .grid{display:grid;gap:20px}
        @media(min-width:768px){#diferenciales .grid{grid-template-columns:repeat(2,1fr);gap:24px}}
        #diferenciales .card{background:var(--cream);padding:28px 24px;border-radius:var(--radius);transition:all 0.4s ease}
        #diferenciales .card:hover{transform:translateY(-4px)!important;box-shadow:var(--shadow)}
        #diferenciales .card .card-icon{color:var(--green);margin-bottom:16px;display:block}
        #diferenciales .card h3{font-size:18px;font-weight:700;margin-bottom:10px;color:var(--dark);letter-spacing:-0.02em}
        #diferenciales .card p{font-size:14px;font-weight:400;color:var(--text-light);line-height:1.7}
      `}</style>
    </section>
  )
}
