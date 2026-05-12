import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CtaForm() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(wrapRef.current?.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: wrapRef.current, start: 'top 85%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="cta-form">
      <div className="container">
        <div className="wrap" ref={wrapRef}>
          <p className="section-label">Reservá tu llamada</p>
          <h2 className="section-title">¿Querés saber si este programa es para vos?</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Hablá con el equipo de Hevristika. En 30 minutos te contamos todo sobre el programa, las fechas disponibles y cómo organizarte para venir desde donde estés.</p>
          <form onSubmit={e => { e.preventDefault(); alert('Gracias por tu interés. Te contactaremos pronto para coordinar tu llamada gratuita.') }}>
            <div className="form-grid">
              <div className="full">
                <label htmlFor="name">Nombre completo</label>
                <input type="text" id="name" required placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="country">País / Ciudad de origen</label>
                <input type="text" id="country" required placeholder="Ej: Madrid, España" />
              </div>
              <div>
                <label htmlFor="availability">¿Cuándo estarías disponible?</label>
                <select id="availability">
                  <option value="">Seleccioná un mes</option>
                  <option>Próximos 3 meses</option>
                  <option>3 a 6 meses</option>
                  <option>6 a 12 meses</option>
                  <option>Aún no lo sé</option>
                </select>
              </div>
              <div className="full">
                <label htmlFor="experience">¿Tenés experiencia previa?</label>
                <select id="experience">
                  <option value="">Seleccioná una opción</option>
                  <option>No, soy principiante</option>
                  <option>Tengo algo de experiencia</option>
                  <option>Soy bartender profesional</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Reservar mi llamada gratuita</button>
          </form>
          <div className="whatsapp-alt">
            <span>O escribinos directamente por WhatsApp</span>
            <a href="https://wa.me/549XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribinos por WhatsApp
            </a>
          </div>
        </div>
      </div>
      <style>{`
        #cta-form{background:var(--white)}
        #cta-form .wrap{max-width:600px;margin:0 auto;text-align:center}
        #cta-form form{text-align:left;margin-top:32px}
        #cta-form .form-grid{display:grid;gap:16px}
        @media(min-width:768px){#cta-form .form-grid{grid-template-columns:1fr 1fr;gap:16px}}
        #cta-form .full{grid-column:1/-1}
        #cta-form label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--dark)}
        #cta-form input,#cta-form select{width:100%;padding:14px 16px;border:2px solid var(--cream-dark);border-radius:10px;font-size:15px;font-family:var(--font);background:var(--cream-light);transition:all 0.3s ease;outline:none}
        #cta-form input:focus,#cta-form select:focus{border-color:var(--green);background:var(--white);box-shadow:0 0 0 4px rgba(51,141,116,0.1)}
        #cta-form .btn{width:100%;margin-top:8px;font-size:17px;padding:18px 40px}
        #cta-form .whatsapp-alt{margin-top:20px;display:flex;align-items:center;justify-content:center;gap:12px;font-size:14px;color:var(--text-light);flex-wrap:wrap}
        #cta-form .whatsapp-alt a{color:#25D366;font-weight:600;display:inline-flex;align-items:center;gap:6px}
        @media(max-width:767px){#cta-form .btn{font-size:15px;padding:16px}}
      `}</style>
    </section>
  )
}
