import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const heroTitle = { inter: 'MÁS QUE BARTENDING:', serif: 'Una experiencia real.' }

export default function Hero() {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const btnRef = useRef(null)
  const footnoteRef = useRef(null)
  const badgeRef = useRef(null)
  const circlesRef = useRef([])
  const gradientRef = useRef(null)

  useEffect(() => {
    gsap.to(gradientRef.current, {
      backgroundPosition: '100% 100%',
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    circlesRef.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, {
        x: () => gsap.utils.random(-60, 60),
        y: () => gsap.utils.random(-60, 60),
        scale: () => gsap.utils.random(0.8, 1.2),
        duration: () => gsap.utils.random(6, 10),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4
      })
    })

    gsap.from(badgeRef.current, { opacity: 0, y: -10, duration: 0.6, delay: 0.3, ease: 'power3.out' })

    const lines = titleRef.current?.querySelectorAll('.hero-line')
    if (lines?.length) {
      gsap.set(lines, { opacity: 0, y: 40 })
      gsap.to(lines, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', delay: 0.5
      })
    }

    gsap.set(subRef.current, { opacity: 0, y: 30 })
    gsap.set(btnRef.current, { opacity: 0, y: 20 })
    gsap.set(footnoteRef.current, { opacity: 0, y: 10 })
    gsap.to(subRef.current, { opacity: 1, y: 0, duration: 1, delay: 1.8, ease: 'power3.out' })
    gsap.to(btnRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 2.2, ease: 'power3.out' })
    gsap.to(footnoteRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 2.6, ease: 'power3.out' })
  }, [])

  return (
    <section id="hero">
      <div className="hero-gradient" ref={gradientRef} />
      <div className="hero-circles">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="hero-circle" ref={el => circlesRef.current[i] = el} />
        ))}
      </div>
      <div className="container">
        <div ref={badgeRef} className="hero-badge">Misiones, Argentina — 4 semanas intensivas</div>
        <h1 ref={titleRef} id="hero-title">
          <span className="hero-line hero-line-inter">{heroTitle.inter}</span>
          <span className="hero-line hero-line-serif">{heroTitle.serif}</span>
        </h1>
        <p ref={subRef} className="subheadline">4 semanas intensivas en Misiones, Argentina. Técnica internacional, entorno único, comunidad real.</p>
        <a ref={btnRef} href="#cta-form" className="btn btn-primary" style={{ background: '#99e4df', color: '#000', border: 'none' }}>Reservá tu llamada gratuita →</a>
        <p ref={footnoteRef} className="hero-footnote">Sin compromiso. En 30 minutos te explicamos todo sobre el programa.</p>
      </div>
      <style>{`
        #hero{min-height:100vh;display:flex;align-items:center;padding-top:80px;position:relative;overflow:hidden;background:#000}
        #hero .hero-gradient{position:absolute;inset:0;background:linear-gradient(135deg,#001510 0%,#00281e 25%,#0a1a12 50%,#00100c 75%,#000 100%);background-size:200% 200%;z-index:0}
        #hero .container{position:relative;z-index:1;text-align:center;padding:0 24px;max-width:900px;margin:0 auto}
        .hero-badge{display:inline-block;background:rgba(255,255,255,0.12);backdrop-filter:blur(10px);padding:8px 20px;border-radius:50px;font-size:13px;font-weight:500;color:rgba(255,255,255,0.9);margin-bottom:24px;border:1px solid rgba(255,255,255,0.1)}
        #hero h1{display:flex;flex-direction:column;align-items:center;gap:0;margin-bottom:20px;text-shadow:0 2px 40px rgba(0,0,0,0.25)}
        .hero-line{display:block;line-height:1.02}
        .hero-line-inter{font-size:clamp(2rem,7vw,5.5rem);font-weight:800;letter-spacing:0.03em;color:var(--white)}
        .hero-line-serif{font-size:clamp(2.2rem,7.5vw,6rem);font-family:'Playfair Display',Georgia,serif;font-style:italic;font-weight:400;color:rgba(255,255,255,0.85)}
        .subheadline{font-size:clamp(1rem,2vw,1.25rem);color:rgba(255,255,255,0.85);margin-bottom:40px;font-weight:400;max-width:640px;margin-left:auto;margin-right:auto}
        #hero .btn{margin-bottom:16px}
        .hero-footnote{font-size:14px;color:rgba(255,255,255,0.6);max-width:420px;margin-left:auto;margin-right:auto}
        @media(max-width:767px){.hero-line-inter{font-size:1.8rem}.hero-line-serif{font-size:2rem}.hero-badge{font-size:11px;padding:6px 14px}}
      `}</style>
    </section>
  )
}
