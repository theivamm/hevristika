import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Destino() {
  const sectionRef = useRef(null)
  const imgWrapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(imgWrapRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: imgWrapRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(imgWrapRef.current?.querySelector('img'), { y: -30 }, {
        y: 30,
        scrollTrigger: { trigger: imgWrapRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="destino" ref={sectionRef}>
      <div className="container">
        <div className="grid">
          <div className="image-wrap" ref={imgWrapRef}>
            <img src="/imgs/Cocktails_juices_bar_products_202605111941 (2).jpeg" alt="Misiones, Argentina" />
          </div>
          <div className="text">
            <p className="section-label">El destino</p>
            <h2 className="section-title">Misiones no es solo donde estudiás. Es parte de lo que aprendés.</h2>
            <p className="section-sub">Misiones es la provincia más al noreste de Argentina. Limita con Brasil y Paraguay, cubierta de selva subtropical. Alberga las Cataratas del Iguazú — una de las maravillas naturales del mundo.</p>
            <p className="section-sub" style={{ marginTop: 12 }}>Vivir un mes acá no es solo estudiar en un lugar bonito. Es salir con referencias que ningún programa en Buenos Aires o en Europa puede darte.</p>
          </div>
        </div>
      </div>
      <style>{`
        #destino{background:#e9e1d4;position:relative;overflow:hidden}
        #destino::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--green) 0%,var(--green-dark) 100%);opacity:0.03;z-index:0}
        #destino .grid{display:grid;gap:40px;position:relative;z-index:1}
        @media(min-width:768px){#destino .grid{grid-template-columns:1fr 1fr;gap:60px;align-items:center}}
        #destino .image-wrap{position:relative;border-radius:var(--radius);overflow:hidden;aspect-ratio:4/3}
        #destino .image-wrap img{width:100%;height:100%;object-fit:cover}
        #destino .image-wrap::after{content:'Iguazú Falls, Misiones';position:absolute;bottom:16px;left:16px;font-size:12px;color:rgba(255,255,255,0.7);background:rgba(0,0,0,0.4);padding:4px 12px;border-radius:20px}
      `}</style>
    </section>
  )
}
