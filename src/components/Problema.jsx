import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Problema() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current?.querySelectorAll('.section-label, .section-title, .section-sub, .highlight'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="problema">
      <div className="container">
        <div className="content" ref={ref}>
          <p className="section-label">La oportunidad</p>
          <h2 className="section-title">Podés hacer un curso de bartending en cualquier ciudad. Acá venís a transformarte.</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Los programas de formación en Europa o en las grandes ciudades de Sudamérica te enseñan técnica. Pero te dejan en el mismo lugar donde empezaste, haciendo lo mismo que hacías antes.</p>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>Hevristika es distinto. No es solo lo que aprendés — es dónde lo aprendés, con quién, y qué te llevás cuando terminás.</p>
          <p className="highlight">Un mes en Misiones. Un programa diseñado para que salgás con un nivel real, una red de contactos concreta y una experiencia que muy pocos en el mundo pueden contar.</p>
        </div>
      </div>
      <style>{`
        #problema{background:var(--cream-light)}
        #problema .content{max-width:720px;margin:0 auto;text-align:center}
        .highlight{font-size:1.25rem;color:var(--green);font-weight:600;margin-top:32px}
      `}</style>
    </section>
  )
}
