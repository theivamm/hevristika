import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'

export default function HevristikaMetodo() {
  const { t } = useTranslation()
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current?.querySelectorAll('.hm-label, .hm-title, .hm-text'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="hevristika" ref={ref}>
      <div className="container">
        <p className="hm-label">{t('hevristika.label')}</p>
        <h2 className="hm-title">{t('hevristika.title')}</h2>
        <p className="hm-text">{t('hevristika.text1')}</p>
        <p className="hm-text">{t('hevristika.text2')}</p>
        <p className="hm-text">{t('hevristika.text3')}</p>
      </div>
      <style>{`
        #hevristika{background:linear-gradient(135deg,#0d1a14 0%,#000 100%);padding:120px 0;position:relative;overflow:hidden}
        #hevristika::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,rgba(156,233,227,0.05) 0%,transparent 60%);z-index:0}
        #hevristika .container{position:relative;z-index:1;max-width:720px}
        .hm-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;margin-bottom:16px}
        .hm-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.8rem,3.2vw,2.8rem);font-weight:700;color:var(--white);line-height:1.2;margin-bottom:32px}
        .hm-text{font-size:clamp(1rem,1.15vw,1.1rem);line-height:1.8;color:rgba(255,255,255,0.75);margin-bottom:20px;padding-left:20px;border-left:2px solid rgba(156,233,227,0.25)}
        .hm-text:last-child{margin-bottom:0}
      `}</style>
    </section>
  )
}
