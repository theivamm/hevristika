import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const faqs = [
  { q: '¿Necesito visa para ingresar a Argentina?', a: 'Depende de tu país de origen. La mayoría de los países de Europa y Sudamérica tienen acuerdo de ingreso libre con Argentina para estadías de hasta 90 días. Si tenés dudas sobre tu caso específico, te lo confirmamos en la llamada.' },
  { q: '¿Dónde me alojo durante el programa?', a: 'Para alumnos del exterior orientamos sobre opciones de alojamiento cerca de las instalaciones. La experiencia completa (USD 4.200) incluye alojamiento. En la llamada te detallamos las opciones disponibles según tu presupuesto y preferencia.' },
  { q: '¿El programa es en español? ¿Puedo seguirlo si no hablo bien el idioma?', a: 'El programa se dicta en español. Si tu nivel de español es básico, hablalo con nosotros en la llamada — en función de tu perfil evaluamos juntos si es viable y cómo acompañarte durante el programa.' },
  { q: '¿Qué nivel previo de bartending necesito?', a: 'No es necesario tener experiencia previa. El programa está diseñado para que tanto principiantes como personas con base previa puedan aprovechar al máximo las cuatro semanas. Si ya tenés experiencia, en la llamada evaluamos en qué aspectos el programa te suma más.' },
  { q: '¿Se puede pagar en cuotas?', a: 'Sí. En la llamada te explicamos las opciones de pago disponibles para alumnos del exterior.' },
  { q: '¿Qué pasa si tengo que cambiar la fecha después de inscribirme?', a: 'Hay flexibilidad para cambios de fecha con aviso previo. Las condiciones exactas te las explicamos en detalle durante la llamada.' },
]

export default function Faq() {
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
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Preguntas frecuentes.</h2>
          <div className="faq-list" ref={listRef}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                  {faq.q} <span className="icon">+</span>
                </button>
                <div className="faq-answer"><p>{faq.a}</p></div>
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
