import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'

export default function Faq() {
  const { t } = useTranslation()
  const listRef = useRef(null)
  const [openIdx, setOpenIdx] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(listRef.current?.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: listRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="faq">
      <div className="container">
        <div className="wrap">
          <p className="section-label">{t('faq.label')}</p>
          <h2 className="section-title">{t('faq.title')}</h2>
          <div className="faq-list" ref={listRef}>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                  {t(`faq.items.${i}.q`)} <span className="icon">+</span>
                </button>
                <div className="faq-answer"><p>{t(`faq.items.${i}.a`)}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        #faq{background:var(--cream-light)}
        #faq .wrap{max-width:720px;margin:0 auto}
        .faq-item{border-bottom:1px solid var(--cream-dark)}
        .faq-question{width:100%;text-align:left;padding:20px 0;background:none;border:none;font-size:16px;font-weight:600;font-family:var(--font);color:var(--dark);cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:color 0.3s}
        .faq-question:hover{color:var(--green)}
        .faq-question .icon{width:24px;height:24px;display:flex;align-items:center;justify-content:center;transition:transform 0.3s;font-size:20px;color:var(--green);flex-shrink:0}
        .faq-item.open .faq-question .icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height 0.4s ease,padding 0.4s ease;padding:0}
        .faq-answer p{padding-bottom:20px;font-size:14px;color:var(--text-light);line-height:1.7}
        .faq-item.open .faq-answer{max-height:500px}
      `}</style>
    </section>
  )
}
