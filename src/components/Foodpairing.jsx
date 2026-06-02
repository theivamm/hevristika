import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'

export default function Foodpairing() {
  const { t } = useTranslation()
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current?.querySelectorAll('.fp-label, .fp-title, .fp-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
      gsap.fromTo(ref.current?.querySelectorAll('.fp-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="foodpairing" ref={ref}>
      <div className="fp-glow fp-glow-1" />
      <div className="fp-glow fp-glow-2" />
      <div className="container">
        <p className="fp-label">{t('foodpairing.label')}</p>
        <h2 className="fp-title">{t('foodpairing.title')}</h2>
        <p className="fp-sub">{t('foodpairing.subtitle')}</p>
        <div className="fp-grid">
          {[0, 1, 2].map(i => (
            <div key={i} className="fp-card">
              <h3>{t(`foodpairing.cards.${i}.title`)}</h3>
              <p>{t(`foodpairing.cards.${i}.desc`)}</p>
              <div className="fp-tags">
                {[0, 1, 2, 3].map(j => (
                  <span key={j} className="fp-tag">{t(`foodpairing.cards.${i}.tags.${j}`)}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #foodpairing{background:#000;position:relative;overflow:hidden;padding:120px 0}
        .fp-glow{position:absolute;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0}
        .fp-glow-1{width:600px;height:600px;background:rgba(156,233,227,0.08);top:-200px;left:-100px}
        .fp-glow-2{width:500px;height:500px;background:rgba(218,190,150,0.06);bottom:-150px;right:-80px}
        #foodpairing .container{position:relative;z-index:1}
        .fp-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;text-align:center;margin-bottom:16px}
        .fp-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.6rem,3vw,2.6rem);font-weight:700;color:var(--white);text-align:center;line-height:1.15;margin-bottom:16px}
        .fp-sub{font-size:clamp(0.95rem,1.1vw,1.05rem);line-height:1.7;color:rgba(255,255,255,0.65);text-align:center;max-width:640px;margin:0 auto 56px}
        .fp-grid{display:grid;gap:24px}
        .fp-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.06);border-radius:20px;padding:36px 32px;transition:all 0.4s cubic-bezier(0.16,1,0.3,1)}
        .fp-card:hover{background:rgba(255,255,255,0.07);border-color:rgba(156,233,227,0.15);transform:translateY(-4px)}
        .fp-card h3{font-family:var(--font);font-size:19px;font-weight:700;letter-spacing:-0.02em;color:#9ce9e3;margin-bottom:12px}
        .fp-card p{font-size:14px;line-height:1.7;color:rgba(255,255,255,0.65);margin-bottom:20px}
        .fp-tags{display:flex;flex-wrap:wrap;gap:8px}
        .fp-tag{background:rgba(156,233,227,0.12);color:#9ce9e3;font-size:12px;font-weight:600;padding:5px 14px;border-radius:100px;letter-spacing:0.02em}
        @media(min-width:768px){
          .fp-grid{grid-template-columns:repeat(3,1fr);gap:24px}
          .fp-card{padding:40px 32px}
        }
      `}</style>
    </section>
  )
}
