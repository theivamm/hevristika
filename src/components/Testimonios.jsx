import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import testimonialVideo from '../assets/videos/7608903-uhd_3840_2160_25fps.mp4'

const testimonios = [
  { quote: '"Vine sin saber qué esperar y me fui con un nivel que no imaginaba que podía alcanzar en cuatro semanas. Misiones te cambia la perspectiva — no solo del bartending, sino de muchas cosas."', author: '[Nombre]', origin: '[Ciudad, País]' },
  { quote: '"El entorno te empuja a concentrarte como no podrías hacerlo en una ciudad. Cada día es práctica intensiva, y el grupo se convierte en tu red de apoyo."', author: '[Nombre]', origin: '[Ciudad, País]' },
  { quote: '"Vine desde Europa por la recomendación de un amigo. Lo que más me sorprendió fue el nivel técnico — no esperaba encontrar ese estándar acá. Volví con trabajo asegurado."', author: '[Nombre]', origin: '[Ciudad, País]' },
]

export default function Testimonios() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.section-title'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(Array.from(gridRef.current?.children || []),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="testimonios" ref={sectionRef}>
      <div className="bg-layer">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={testimonialVideo} type="video/mp4" />
        </video>
        <div className="bg-overlay" />
      </div>
      <div className="container">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Testimonios</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Lo que dicen los que ya pasaron por Hevristika.</h2>
        <div className="grid" ref={gridRef}>
          {testimonios.map((t, i) => (
            <div key={i} className="card">
              <p className="quote">{t.quote}</p>
              <p className="author">{t.author}</p>
              <p className="origin">{t.origin}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #testimonios{position:relative;overflow:hidden;color:var(--white)}
        #testimonios .bg-layer{position:absolute;inset:0;z-index:0}
        #testimonios .bg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        #testimonios .bg-overlay{position:absolute;inset:0;background:rgba(0,0,0,0.65);z-index:1}
        #testimonios .container{position:relative;z-index:2}
        #testimonios .section-sub{color:rgba(255,255,255,0.7)}
        #testimonios .grid{display:grid;gap:20px;margin-top:48px}
        @media(min-width:768px){#testimonios .grid{grid-template-columns:repeat(3,1fr);gap:24px}}
        #testimonios .card{background:rgba(255,255,255,0.08);backdrop-filter:blur(10px);padding:28px;border-radius:var(--radius);border:1px solid rgba(255,255,255,0.1)}
        #testimonios .card .quote{font-size:14px;line-height:1.7;margin-bottom:16px;opacity:0.9;font-style:italic}
        #testimonios .card .author{font-weight:600;font-size:14px}
        #testimonios .card .origin{font-size:12px;opacity:0.6;margin-top:4px}
      `}</style>
    </section>
  )
}
