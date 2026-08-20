import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'

const spotImgs = [
  'Cocktails_juices_bar_products_202605111938 (1).jpeg',
  'Cocktails_juices_bar_products_202605111941 (4).jpeg',
  'Cocktails_juices_bar_products_202605111941 (5).jpeg',
]

export default function CtaFinal() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.ctaf-label, .ctaf-title, .ctaf-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.ctaf-card, .ctaf-form-wrap'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="cta-final" ref={sectionRef}>
      <div className="ctaf-glow ctaf-glow-1" />
      <div className="ctaf-glow ctaf-glow-2" />
      <div className="container">
        <p className="ctaf-label">{t('ctaFinal.label')}</p>
        <h2 className="ctaf-title"><span className="ctaf-title-inter">{t('ctaFinal.titleInter')}</span> <span className="ctaf-title-serif">{t('ctaFinal.titleSerif')}</span></h2>
        <p className="ctaf-sub">{t('ctaFinal.sub')}</p>
        <div className="ctaf-main">
          <div className="ctaf-form-wrap">
            {submitted ? (
              <div className="ctaf-success">
                <span className="ctaf-success-icon">✓</span>
                <p>{t('ctaFinal.alert')}</p>
              </div>
            ) : (
            <form onSubmit={e => {
              e.preventDefault()
              const f = id => document.getElementById(id).value
              const msg = `Nuevo lead - Hevristika\n\nNombre: ${f('name2')}\nEmail: ${f('email2')}\nPaís: ${f('country2')}\nPrograma: ${f('programInterest2')}\nDisponibilidad: ${f('availability2')}\nExperiencia: ${f('experience2')}\nTour: ${f('tourExperience2')}`
              window.open(`https://wa.me/5493765005642?text=${encodeURIComponent(msg)}`, '_blank')
              setSubmitted(true)
            }}>
              <div className="ctaf-grid">
                <div className="ctaf-full">
                  <label htmlFor="name2">{t('ctaFinal.form.nameLabel')}</label>
                  <input type="text" id="name2" required placeholder={t('ctaFinal.form.namePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="email2">{t('ctaFinal.form.emailLabel')}</label>
                  <input type="email" id="email2" required placeholder={t('ctaFinal.form.emailPlaceholder')} />
                </div>
                <div>
                  <label htmlFor="country2">{t('ctaFinal.form.countryLabel')}</label>
                  <input type="text" id="country2" required placeholder={t('ctaFinal.form.countryPlaceholder')} />
                </div>
                <div className="ctaf-full">
                  <label htmlFor="programInterest2">{t('ctaFinal.form.programInterestLabel')}</label>
                  <select id="programInterest2">
                    <option value="">{t('ctaFinal.form.programInterestDefault')}</option>
                    <option>{t('ctaFinal.form.programInterestOpt1')}</option>
                    <option>{t('ctaFinal.form.programInterestOpt2')}</option>
                    <option>{t('ctaFinal.form.programInterestOpt3')}</option>
                    <option>{t('ctaFinal.form.programInterestOpt4')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="availability2">{t('ctaFinal.form.availabilityLabel')}</label>
                  <select id="availability2">
                    <option value="">{t('ctaFinal.form.availabilityDefault')}</option>
                    <option>{t('ctaFinal.form.availabilityOpt1')}</option>
                    <option>{t('ctaFinal.form.availabilityOpt2')}</option>
                    <option>{t('ctaFinal.form.availabilityOpt3')}</option>
                    <option>{t('ctaFinal.form.availabilityOpt4')}</option>
                  </select>
                </div>
                <div className="ctaf-full">
                  <label htmlFor="experience2">{t('ctaFinal.form.experienceLabel')}</label>
                  <select id="experience2">
                    <option value="">{t('ctaFinal.form.experienceDefault')}</option>
                    <option>{t('ctaFinal.form.experienceOpt1')}</option>
                    <option>{t('ctaFinal.form.experienceOpt2')}</option>
                    <option>{t('ctaFinal.form.experienceOpt3')}</option>
                  </select>
                </div>
                <div className="ctaf-full">
                  <label htmlFor="tourExperience2">{t('ctaFinal.form.tourExperienceLabel')}</label>
                  <select id="tourExperience2">
                    <option value="">{t('ctaFinal.form.tourExperienceDefault')}</option>
                    <option>{t('ctaFinal.form.tourExperienceOpt1')}</option>
                    <option>{t('ctaFinal.form.tourExperienceOpt2')}</option>
                    <option>{t('ctaFinal.form.tourExperienceOpt3')}</option>
                    <option>{t('ctaFinal.form.tourExperienceOpt4')}</option>
                    <option>{t('ctaFinal.form.tourExperienceOpt5')}</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="ctaf-btn">{t('ctaFinal.submit')}</button>
            </form>
            )}
            <div className="ctaf-whatsapp">
              <span>{t('ctaFinal.whatsappLabel')}</span>
              <a href="https://wa.me/5493765005642" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t('ctaFinal.whatsappLink')}
              </a>
            </div>
          </div>
          <div className="ctaf-cards">
            {[0, 1, 2].map(i => (
              <div key={i} className="ctaf-card" style={{ backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.85) 100%),url("../../imgs/${spotImgs[i]}")` }}>
                <span className="ctaf-card-label">{t(`ctaFinal.cards.${i}.label`)}</span>
                <strong className="ctaf-card-value">{t(`ctaFinal.cards.${i}.value`)}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        #cta-final{background:linear-gradient(135deg,#000 0%,#0d1a14 100%);position:relative;overflow:hidden;padding:120px 0;scroll-margin-top:80px}
        .ctaf-glow{position:absolute;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0}
        .ctaf-glow-1{width:500px;height:500px;background:rgba(156,233,227,0.08);top:-200px;right:-80px}
        .ctaf-glow-2{width:400px;height:400px;background:rgba(218,190,150,0.08);bottom:-150px;left:-60px}
        #cta-final .container{position:relative;z-index:1}
        .ctaf-label{font-family:var(--font);font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ce9e3;text-align:center;margin-bottom:16px}
        .ctaf-title{font-size:clamp(1.5rem,3vw,2.8rem);color:var(--white);text-align:center;line-height:1.1;margin-bottom:16px}
        .ctaf-title-inter{font-family:var(--font);font-weight:800;letter-spacing:-0.03em}
        .ctaf-title-serif{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-style:italic;letter-spacing:-0.02em}
        .ctaf-sub{font-size:clamp(0.9rem,1.1vw,1.05rem);line-height:1.7;color:rgba(255,255,255,0.7);text-align:center;max-width:600px;margin:0 auto 48px}
        .ctaf-main{display:grid;gap:32px}
        .ctaf-form-wrap{background:rgba(255,255,255,0.04);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.06);border-radius:20px;padding:36px 32px}
        .ctaf-form-wrap form{text-align:left}
        .ctaf-grid{display:grid;gap:16px}
        .ctaf-full{grid-column:1/-1}
        .ctaf-grid label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:rgba(255,255,255,0.8)}
        .ctaf-grid input,.ctaf-grid select{width:100%;padding:14px 16px;border:1px solid rgba(255,255,255,0.12);border-radius:10px;font-size:15px;font-family:var(--font);background:rgba(255,255,255,0.06);color:var(--white);transition:all 0.3s ease;outline:none}
        .ctaf-grid input::placeholder{color:rgba(255,255,255,0.3)}
        .ctaf-grid select option{background:#1a1a2e;color:var(--white)}
        .ctaf-grid input:focus,.ctaf-grid select:focus{border-color:#9ce9e3;background:rgba(255,255,255,0.08)}
        .ctaf-btn{width:100%;padding:16px 40px;font-size:17px;font-weight:700;font-family:var(--font);border:none;border-radius:12px;background:#9ce9e3;color:#000;cursor:pointer;transition:all 0.3s ease;margin-top:8px}
        .ctaf-btn:hover{background:#7dd5cf;transform:translateY(-2px)}
        .ctaf-whatsapp{margin-top:20px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:14px;color:rgba(255,255,255,0.5);flex-wrap:wrap}
        .ctaf-whatsapp a{color:#9ce9e3;font-weight:600;display:inline-flex;align-items:center;gap:6px;transition:opacity 0.3s}
        .ctaf-whatsapp a:hover{opacity:0.8}
        .ctaf-success{text-align:center;padding:48px 24px}
        .ctaf-success .ctaf-success-icon{display:inline-flex;width:56px;height:56px;border-radius:50%;background:rgba(156,233,227,0.15);color:#9ce9e3;font-size:26px;align-items:center;justify-content:center;margin-bottom:16px}
        .ctaf-success p{font-size:16px;color:rgba(255,255,255,0.85);line-height:1.6}
        .ctaf-cards{display:grid;gap:16px;align-content:start}
        .ctaf-card{border-radius:16px;padding:28px 24px;min-height:140px;display:flex;flex-direction:column;justify-content:flex-end;background-size:cover;background-position:center;border:1px solid rgba(255,255,255,0.06);transition:all 0.4s cubic-bezier(0.16,1,0.3,1)}
        .ctaf-card:hover{transform:translateY(-3px);border-color:rgba(156,233,227,0.2)}
        .ctaf-card-label{font-family:var(--font);font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:4px}
        .ctaf-card-value{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.1rem,1.3vw,1.4rem);font-weight:700;color:var(--white);line-height:1.2}
        @media(min-width:768px){
          .ctaf-main{grid-template-columns:1.2fr 1fr;gap:40px;align-items:start}
          .ctaf-form-wrap{padding:40px}
          .ctaf-grid{grid-template-columns:1fr 1fr;gap:16px}
        }
        @media(max-width:767px){.ctaf-btn{font-size:15px;padding:14px}}
      `}</style>
    </section>
  )
}
