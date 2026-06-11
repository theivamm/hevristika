import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from '../i18n/i18n.jsx'

const images = [
  { img: 'Alumnos-estudiando-en-el-predio.JPEG', title: 'Alumnos estudiando en el predio' },
  { img: 'Botánica-y-biotecnología.JPEG', title: 'Botánica y biotecnología' },
  { img: 'Clases-sensoriales.JPEG', title: 'Clases sensoriales' },
  { img: 'Disfrute-del-día-a-día.JPEG', title: 'Disfrute del día a día' },
  { img: 'Fogatas-nocturnas.JPEG', title: 'Fogatas nocturnas' },
]

export default function Destino() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const imgWrapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current?.querySelectorAll('.section-label, .section-title, .section-sub'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(sectionRef.current?.querySelectorAll('.galeria-item'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      )
      gsap.fromTo(imgWrapRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: imgWrapRef.current, start: 'top 80%' } }
      )
      gsap.fromTo(imgWrapRef.current?.querySelector('img'), { y: -30 }, {
        y: 30,
        scrollTrigger: { trigger: imgWrapRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="destino" ref={sectionRef}>
      <div className="container">
        <div className="grid">
          <div className="image-wrap" ref={imgWrapRef}>
            <img src="/imgs/puerto-o1.jpeg" alt="Puerto Lagier, Misiones" />
            <span className="img-credit">{t('destino.imageCredit')}</span>
          </div>
          <div className="text">
            <p className="section-label">{t('destino.label')}</p>
            <h2 className="section-title">{t('destino.title')}</h2>
            <p className="section-sub">{t('destino.sub1')}</p>
            <p className="section-sub" style={{ marginTop: 12 }}>{t('destino.sub2')}</p>
          </div>
        </div>
        <div className="galeria-grid">
          {images.map((item, i) => (
            <div key={i} className="galeria-item">
              <img src={`/imgs/galeria/${item.img}`} alt={item.title} />
              <span className="galeria-label">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        #destino{background:#e9e1d4;position:relative;overflow:hidden}
        #destino::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--green) 0%,var(--green-dark) 100%);opacity:0.03;z-index:0}
        #destino .grid{display:grid;gap:40px;position:relative;z-index:1}
        @media(min-width:768px){#destino .grid{grid-template-columns:1fr 1fr;gap:60px;align-items:center}}
        #destino .image-wrap{position:relative;border-radius:var(--radius);overflow:hidden;aspect-ratio:4/3}
        #destino .image-wrap img{width:100%;height:100%;object-fit:cover}
        #destino .image-wrap .img-credit{position:absolute;bottom:16px;left:16px;font-size:12px;color:rgba(255,255,255,0.7);background:rgba(0,0,0,0.4);padding:4px 12px;border-radius:20px}
        #destino .galeria-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:64px;position:relative;z-index:1}
        #destino .galeria-item{border-radius:12px;overflow:hidden;position:relative}
        #destino .galeria-item img{width:100%;aspect-ratio:1;object-fit:cover;display:block}
        #destino .galeria-label{display:block;padding:12px 0 4px;font-size:13px;font-weight:600;color:rgba(26,26,46,0.85);letter-spacing:-0.01em;line-height:1.3}
        @media(min-width:640px){
          #destino .galeria-grid{grid-template-columns:repeat(3,1fr);gap:20px;margin-top:80px}
          #destino .galeria-item:nth-child(4),
          #destino .galeria-item:nth-child(5){grid-column:span 1}
        }
        @media(min-width:1024px){
          #destino .galeria-grid{grid-template-columns:repeat(5,1fr);gap:24px;margin-top:96px}
          #destino .galeria-label{font-size:14px;padding:14px 0 4px}
        }
      `}</style>
    </section>
  )
}
