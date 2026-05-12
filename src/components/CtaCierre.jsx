import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CtaCierre() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.section-label, .section-title, .section-sub, .btn, .footnote'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="cta-cierre" ref={sectionRef}>
      <div className="container">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Últimos lugares</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Las cohortes son grupos reducidos. Los lugares para el próximo programa son limitados.</h2>
        <p className="section-sub" style={{ margin: '0 auto 32px', color: 'rgba(255,255,255,0.75)' }}>Si estás pensando en venir, el mejor momento para hablar con el equipo es ahora.</p>
        <a href="#cta-form" className="btn" style={{ background: 'var(--white)', color: 'var(--green)', fontSize: 18, padding: '18px 48px' }}>Reservar mi llamada gratuita →</a>
        <p className="footnote" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 16 }}>Sin compromiso. Sin presión. Una conversación para que decidas con toda la información.</p>
      </div>
      <style>{`
        #cta-cierre{background:linear-gradient(135deg,var(--green) 0%,var(--green-dark) 100%);text-align:center;position:relative;overflow:hidden}
        #cta-cierre::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 30% 50%,rgba(255,255,255,0.05) 0%,transparent 70%)}
        #cta-cierre .container{position:relative;z-index:1}
        #cta-cierre .btn:hover{background:var(--cream)!important;box-shadow:0 8px 30px rgba(0,0,0,0.2)}
      `}</style>
    </section>
  )
}
