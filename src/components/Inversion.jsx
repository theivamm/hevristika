import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'

export default function Inversion() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.inv-label, .inv-title, .inv-subtitle'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.inv-card'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.inv-breakdown, .inv-footnote'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="inversion" ref={sectionRef}>
      <div className="inv-glow inv-glow-1" />
      <div className="inv-glow inv-glow-2" />
      <div className="container">
        <p className="inv-label">{t('inversion.label')}</p>
        <h2 className="inv-title">{t('inversion.title')}</h2>
        <p className="inv-subtitle">{t('inversion.subtitle')}</p>
        <div className="inv-grid">
          {[0, 1, 2].map(i => (
            <div key={i} className={`inv-card${i === 2 ? ' inv-featured' : ''}`}>
              {i === 2 && <span className="inv-badge">{t('inversion.programs.2.badge')}</span>}
              <span className="inv-card-badge">{t(`inversion.programs.${i}.badge`)}</span>
              <h3>{t(`inversion.programs.${i}.title`)}</h3>
              <div className="inv-price">{t(`inversion.programs.${i}.price`)} <span>{t(`inversion.programs.${i}.period`)}</span></div>
              <p className="inv-sub">{t(`inversion.programs.${i}.sub`)}</p>
              <ul>
                {Array.from({ length: t(`inversion.programs.${i}.features`).length }, (_, j) => (
                  <li key={j}>{t(`inversion.programs.${i}.features.${j}`)}</li>
                ))}
              </ul>
              {i === 0 && <p className="inv-extra">{t('inversion.programs.0.extra')}</p>}
              {i === 0 && <p className="inv-optional">{t('inversion.programs.0.optional')}</p>}
              <a href="#cta-form" className="inv-btn">{t(`inversion.programs.${i}.cta`)}</a>
            </div>
          ))}
        </div>
        <div className="inv-breakdown">
          <h3 className="inv-breakdown-title">{t('inversion.breakdownTitle')}</h3>
          <table>
            <thead>
              <tr>
                <th>Programa</th>
                <th>Precio</th>
                <th>Incluye</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: t('inversion.breakdown').length }, (_, i) => (
                <tr key={i}>
                  <td>{t(`inversion.breakdown.${i}.name`)}{(() => { const n = t(`inversion.breakdown.${i}.note`); return n.startsWith('inversion.breakdown') ? '' : <span className="inv-note"> — {n}</span> })()}</td>
                  <td className="inv-bd-price">{t(`inversion.breakdown.${i}.price`)}</td>
                  <td className="inv-bd-includes">{t(`inversion.breakdown.${i}.includes`)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="inv-footnote">{t('inversion.footnote')}</p>
      </div>
      <style>{`
        #inversion{background:linear-gradient(135deg,#000 0%,#0d1a14 100%);position:relative;overflow:hidden;padding:120px 0}
        .inv-glow{position:absolute;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0}
        .inv-glow-1{width:500px;height:500px;background:rgba(156,233,227,0.1);top:-150px;left:-100px}
        .inv-glow-2{width:400px;height:400px;background:rgba(26,47,33,0.3);bottom:-100px;right:-80px}
        #inversion .container{position:relative;z-index:1}
        .inv-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;text-align:center;margin-bottom:16px}
        .inv-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.6rem,3.5vw,3rem);font-weight:700;color:var(--white);text-align:center;line-height:1.15;margin-bottom:12px}
        .inv-subtitle{font-size:clamp(0.9rem,1.05vw,1rem);line-height:1.7;color:rgba(255,255,255,0.55);text-align:center;max-width:600px;margin:0 auto 48px}
        .inv-grid{display:grid;gap:24px;max-width:1100px;margin:0 auto}
        .inv-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.06);border-radius:20px;padding:40px 32px;display:flex;flex-direction:column;transition:all 0.4s cubic-bezier(0.16,1,0.3,1)}
        .inv-card:hover{background:rgba(255,255,255,0.07);border-color:rgba(156,233,227,0.15);transform:translateY(-4px)}
        .inv-card.inv-featured{border-color:rgba(156,233,227,0.25);position:relative}
        .inv-badge{position:absolute;top:-12px;right:24px;background:#9ce9e3;color:#000;font-size:10px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:1px;text-transform:uppercase}
        .inv-card-badge{font-family:var(--font);font-size:11px;font-weight:600;letter-spacing:0.08em;color:rgba(156,233,227,0.6);margin-bottom:8px}
        .inv-card h3{font-family:var(--font);font-size:20px;font-weight:700;color:var(--white);margin-bottom:4px}
        .inv-price{font-size:40px;font-weight:800;color:#9ce9e3;margin:16px 0 4px;line-height:1}
        .inv-price span{font-size:16px;font-weight:400;color:rgba(255,255,255,0.4)}
        .inv-sub{font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:24px}
        .inv-card ul{text-align:left;list-style:none;margin:0 0 24px;padding:0;flex:1}
        .inv-card ul li{padding:7px 0;font-size:14px;color:rgba(255,255,255,0.7);display:flex;align-items:flex-start;gap:10px;border-bottom:1px solid rgba(255,255,255,0.04)}
        .inv-card ul li::before{content:'✓';color:#9ce9e3;font-weight:700;flex-shrink:0}
        .inv-card ul li:last-child{border-bottom:none}
        .inv-extra{font-size:14px;color:rgba(156,233,227,0.8);font-style:italic;margin-bottom:8px;line-height:1.5}
        .inv-optional{font-size:13px;color:rgba(255,255,255,0.45);margin-bottom:20px;line-height:1.5}
        .inv-btn{display:inline-block;padding:14px 32px;background:transparent;border:1px solid rgba(156,233,227,0.3);color:#9ce9e3;border-radius:12px;font-size:15px;font-weight:600;font-family:var(--font);text-align:center;text-decoration:none;transition:all 0.3s ease;margin-top:auto}
        .inv-btn:hover{background:rgba(156,233,227,0.1);border-color:#9ce9e3}
        .inv-breakdown{max-width:900px;margin:64px auto 0;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:32px}
        .inv-breakdown-title{font-family:var(--font);font-size:18px;font-weight:700;color:var(--white);margin-bottom:20px}
        .inv-breakdown table{width:100%;border-collapse:collapse}
        .inv-breakdown th{text-align:left;font-size:12px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:rgba(255,255,255,0.35);padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06)}
        .inv-breakdown td{padding:12px;font-size:14px;color:rgba(255,255,255,0.7);border-bottom:1px solid rgba(255,255,255,0.04)}
        .inv-breakdown tr:last-child td{border-bottom:none}
        .inv-bd-price{font-weight:700;color:#9ce9e3;white-space:nowrap}
        .inv-bd-includes{font-size:13px;color:rgba(255,255,255,0.5)}
        .inv-note{color:rgba(156,233,227,0.5);font-size:12px}
        .inv-footnote{text-align:center;max-width:640px;margin:48px auto 0;font-size:13px;color:rgba(255,255,255,0.4);line-height:1.7}
        @media(min-width:768px){
          .inv-grid{grid-template-columns:repeat(3,1fr);gap:24px}
          .inv-card{padding:40px 28px}
          .inv-price{font-size:36px}
        }
        @media(max-width:767px){
          .inv-price{font-size:32px}
          .inv-breakdown{overflow-x:auto}
          .inv-breakdown table{min-width:500px}
        }
      `}</style>
    </section>
  )
}
