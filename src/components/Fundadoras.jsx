import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'

export default function Fundadoras() {
  const { t } = useTranslation()
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current?.querySelectorAll('.fd-label, .fd-title, .fd-intro, .fd-outro'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
      gsap.fromTo(ref.current?.querySelectorAll('.fd-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="fundadoras" ref={ref}>
      <div className="container">
        <p className="fd-label">{t('fundadoras.label')}</p>
        <h2 className="fd-title">{t('fundadoras.title')}</h2>
        <p className="fd-intro">{t('fundadoras.intro1')}</p>
        <p className="fd-intro">{t('fundadoras.intro2')}</p>
        <div className="fd-cards">
          <div className="fd-card">
            <div className="fd-card-img">
              <img src="/imgs/Sofialagier.png" alt="Sofía Lagier" />
            </div>
            <div className="fd-card-body">
              <h3 className="fd-card-name">{t('fundadoras.card1Name')}</h3>
              <p className="fd-card-desc">{t('fundadoras.card1Desc')}</p>
            </div>
          </div>
          <div className="fd-card">
            <div className="fd-card-img">
              <img src="/imgs/VerónicaBaez1.jpg" alt="Verónica Báez" />
            </div>
            <div className="fd-card-body">
              <h3 className="fd-card-name">{t('fundadoras.card2Name')}</h3>
              <p className="fd-card-desc">{t('fundadoras.card2Desc')}</p>
            </div>
          </div>
        </div>
        <p className="fd-outro">{t('fundadoras.outro')}</p>
      </div>
      <style>{`
        #fundadoras{background:#1a1a2e;padding:120px 0;position:relative;overflow:hidden}
        #fundadoras::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 50%,rgba(156,233,227,0.06) 0%,transparent 60%);z-index:0}
        #fundadoras .container{position:relative;z-index:1;max-width:960px}
        .fd-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;margin-bottom:16px}
        .fd-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.8rem,3.2vw,2.8rem);font-weight:700;color:var(--white);line-height:1.2;margin-bottom:24px}
        .fd-intro{font-size:clamp(0.95rem,1.1vw,1.05rem);line-height:1.7;color:rgba(255,255,255,0.7);margin-bottom:16px;max-width:720px}
        .fd-cards{display:grid;gap:32px;margin:48px 0}
        .fd-card{display:grid;grid-template-columns:120px 1fr;gap:24px;align-items:start;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:24px;transition:background 0.3s}
        .fd-card:hover{background:rgba(255,255,255,0.07)}
        .fd-card-img{width:120px;height:120px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgba(156,233,227,0.3)}
        .fd-card-img img{width:100%;height:100%;object-fit:cover}
        .fd-card-body{min-width:0}
        .fd-card-name{font-family:var(--font);font-size:1.3rem;font-weight:800;color:var(--white);letter-spacing:-0.02em;margin-bottom:8px}
        .fd-card-desc{font-size:0.95rem;line-height:1.6;color:rgba(255,255,255,0.65)}
        .fd-outro{font-size:clamp(1rem,1.15vw,1.1rem);line-height:1.7;color:rgba(255,255,255,0.8);font-style:italic;border-left:3px solid #9ce9e3;padding-left:24px;margin-top:16px;max-width:720px}
        @media(min-width:768px){
          .fd-card{grid-template-columns:140px 1fr;gap:32px;padding:32px}
          .fd-card-img{width:140px;height:140px}
        }
      `}</style>
    </section>
  )
}
