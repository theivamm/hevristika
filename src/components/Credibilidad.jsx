import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, GraduationCap, MapPin, Users, Calendar } from 'lucide-react'

const items = [
  { icon: Globe, stat: '5+ países', label: 'Alumnos internacionales' },
  { icon: GraduationCap, stat: 'EBS Thailand', label: 'Fundadores formados en' },
  { icon: MapPin, stat: 'Destino único', label: 'Misiones, Argentina' },
  { icon: Users, stat: 'Grupos reducidos', label: 'Máx. 12 alumnos' },
  { icon: Calendar, stat: 'Desde 2025', label: 'Programa activo' },
]

export default function Credibilidad() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current?.querySelectorAll('.item'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="credibility" ref={ref}>
      <div className="container">
        <div className="grid">
          {items.map((Item, i) => (
            <div key={i} className="item">
              <Item.icon size={22} className="icon" strokeWidth={1.5} />
              <span className="stat">{Item.stat}</span>
              <span className="label">{Item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #credibility{background:var(--white);padding:40px 0;position:relative;z-index:2}
        #credibility .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
        @media(min-width:768px){#credibility .grid{grid-template-columns:repeat(5,1fr);gap:0}}
        #credibility .item{text-align:center;padding:16px;border-right:none;border-bottom:1px solid var(--cream-dark)}
        #credibility .item:last-child{border-bottom:none}
        @media(min-width:768px){#credibility .item{border-right:1px solid var(--cream-dark);border-bottom:none}}
        @media(min-width:768px){#credibility .item:last-child{border-right:none}}
        #credibility .icon{display:block;margin:0 auto 8px;color:var(--green)}
        #credibility .stat{font-weight:700;font-size:18px;color:var(--green);display:block}
        #credibility .label{font-size:13px;color:var(--text-light);display:block;margin-top:4px}
        @media(max-width:767px){
          #credibility .item:nth-child(odd){border-right:1px solid var(--cream-dark)}
          #credibility .item:nth-child(1),#credibility .item:nth-child(2){border-bottom:1px solid var(--cream-dark)}
        }
      `}</style>
    </section>
  )
}
