import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import heroVideo from '../assets/4774629-hd_1920_1080_25fps.mp4'

const accentWords = ['Formación', 'profesional', 'en', 'bartending.']
const restWords = ['El', 'único', 'lugar', 'donde', 'aprender', 'es', 'una', 'experiencia', 'de', 'vida.']

export default function Hero() {
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const btnRef = useRef(null)
  const footnoteRef = useRef(null)
  const badgeRef = useRef(null)
  const accentRefs = useRef([])

  useEffect(() => {
    gsap.from(badgeRef.current, { opacity: 0, y: -10, duration: 0.6, delay: 0.3, ease: 'power3.out' })

    const allWords = titleRef.current?.querySelectorAll('.word')
    if (allWords?.length) {
      gsap.set(allWords, { opacity: 0, y: 40 })
      gsap.to(allWords, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.04, ease: 'power3.out', delay: 0.5
      })
    }

    accentRefs.current.forEach(el => {
      if (el) {
        gsap.to(el, {
          backgroundPosition: '200% 0%',
          duration: 4,
          repeat: -1,
          ease: 'linear'
        })
      }
    })

    gsap.set(subRef.current, { opacity: 0, y: 30 })
    gsap.set(btnRef.current, { opacity: 0, y: 20 })
    gsap.set(footnoteRef.current, { opacity: 0, y: 10 })
    gsap.to(subRef.current, { opacity: 1, y: 0, duration: 1, delay: 1.8, ease: 'power3.out' })
    gsap.to(btnRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 2.2, ease: 'power3.out' })
    gsap.to(footnoteRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 2.6, ease: 'power3.out' })
  }, [])

  return (
    <section id="hero">
      <div className="bg-layer">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="bg-overlay" />
      </div>
      <div className="container">
        <div ref={badgeRef} className="hero-badge">Misiones, Argentina — 4 semanas intensivas</div>
        <h1 ref={titleRef} id="hero-title">
          {accentWords.map((w, i) => (
            <span key={i} className="word accent-word" ref={el => accentRefs.current[i] = el}>{w}</span>
          ))}
          {restWords.map((w, i) => (
            <span key={i + accentWords.length} className="word">{w}</span>
          ))}
        </h1>
        <p ref={subRef} className="subheadline">4 semanas intensivas en Misiones, Argentina. Técnica internacional, entorno único, comunidad real.</p>
        <a ref={btnRef} href="#cta-form" className="btn btn-primary">Reservá tu llamada gratuita →</a>
        <p ref={footnoteRef} className="hero-footnote">Sin compromiso. En 30 minutos te explicamos todo sobre el programa.</p>
      </div>
      <style>{`
        #hero{min-height:100vh;display:flex;align-items:center;padding-top:80px;position:relative;overflow:hidden}
        #hero .bg-layer{position:absolute;inset:0;z-index:0}
        #hero .bg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        #hero .bg-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(26,26,46,0.75) 0%,rgba(51,141,116,0.5) 100%);z-index:1}
        #hero .container{position:relative;z-index:2;text-align:center;padding:0 24px;max-width:900px;margin:0 auto}
        .hero-badge{display:inline-block;background:rgba(255,255,255,0.12);backdrop-filter:blur(10px);padding:8px 20px;border-radius:50px;font-size:13px;font-weight:500;color:rgba(255,255,255,0.9);margin-bottom:24px;border:1px solid rgba(255,255,255,0.1)}
        #hero h1{font-size:clamp(2rem,6vw,4.5rem);line-height:1.12;color:var(--white);margin-bottom:20px;text-shadow:0 2px 40px rgba(0,0,0,0.25)}
        .word{font-weight:600;letter-spacing:-0.02em;display:inline-block;margin-right:0.25em}
        .accent-word{background:linear-gradient(90deg,#4db892,#ffffff,#4db892);background-size:200% 100%;background-clip:text;-webkit-background-clip:text;color:transparent;font-weight:900;letter-spacing:-0.04em}
        .subheadline{font-size:clamp(1rem,2vw,1.25rem);color:rgba(255,255,255,0.85);margin-bottom:40px;font-weight:400;max-width:640px;margin-left:auto;margin-right:auto}
        #hero .btn{margin-bottom:16px}
        .hero-footnote{font-size:14px;color:rgba(255,255,255,0.6);max-width:420px;margin-left:auto;margin-right:auto}
        @media(max-width:767px){#hero h1{font-size:1.8rem}.hero-badge{font-size:11px;padding:6px 14px}}
      `}</style>
    </section>
  )
}
