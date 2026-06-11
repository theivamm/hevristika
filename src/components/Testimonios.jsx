import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'
import testimonialVideo from '../assets/videos/7608903-uhd_3840_2160_25fps.mp4'

export default function Testimonios() {
  const { t } = useTranslation()
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
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('testimonios.label')}</p>
        <h2 className="section-title" style={{ color: 'var(--white)' }}><span style={{ fontFamily: 'var(--font)', fontWeight: 800, letterSpacing: '-0.03em' }}>{t('testimonios.titleInter')}</span> <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 700, fontStyle: 'italic' }}>{t('testimonios.titleSerif')}</span></h2>
        <div className="grid" ref={gridRef}>
          {[0, 1, 2].map(i => {
            const imgs = ['Hanna.jpg', 'Ale.jpeg', 'Catherine.jpeg']
            return (
              <div key={i} className="card">
                <div className="card-img">
                  <img src={`/imgs/testimonios/${imgs[i]}`} alt="" />
                </div>
                <div className="card-body">
                  <span className="author">{t(`testimonios.items.${i}.author`)}</span>
                  <p className="quote">{t(`testimonios.items.${i}.quote`)}</p>
                </div>
              </div>
            )
          })}
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
        #testimonios .card{border-radius:12px;border:1px solid rgba(255,255,255,0.1);overflow:hidden;display:flex;flex-direction:column;height:100%}
        #testimonios .card-img{height:220px;overflow:hidden;flex-shrink:0;border-radius:12px 12px 0 0}
        #testimonios .card-img img{width:100%;height:100%;object-fit:cover}
        #testimonios .card-body{padding:20px 24px 24px;display:flex;flex-direction:column;gap:8px;flex:1}
        #testimonios .card .author{font-weight:700;font-size:15px;color:#9ce9e3;letter-spacing:-0.01em}
        #testimonios .card .quote{font-size:13px;line-height:1.7;color:rgba(255,255,255,0.85);font-style:italic}
        @media(min-width:768px){#testimonios .card-img{height:260px}}
      `}</style>
    </section>
  )
}
