export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div>
            <img src="/logo.svg" alt="Hevristika" className="logo-footer" />
            <p>Formación profesional en bartending en Misiones, Argentina. Técnica internacional, entorno único, comunidad real.</p>
          </div>
          <div>
            <h4>Programa</h4>
            <a href="#programa">Contenido</a>
            <a href="#inversion">Inversión</a>
          </div>
          <div>
            <h4>Contacto</h4>
            <a href="https://wa.me/549XXXXXXXXX">WhatsApp</a>
            <a href="mailto:info@hevristika.com">info@hevristika.com</a>
            <a href="#cta-final">Reservar llamada</a>
          </div>
        </div>
        <div className="bottom">
          <p>&copy; 2026 Hevristika. Todos los derechos reservados.</p>
        </div>
      </div>
      <style>{`
        footer{background:#000;color:rgba(255,255,255,0.6);padding:48px 0 32px;font-size:13px}
        footer .grid{display:grid;gap:32px}
        @media(min-width:768px){footer .grid{grid-template-columns:2fr 1fr 1fr;gap:48px}}
        .logo-footer{height:30px;width:auto;margin-bottom:16px;filter:brightness(0) invert(1)}
        footer h4{color:var(--white);font-size:14px;margin-bottom:12px}
        footer a{display:block;margin-bottom:8px;transition:color 0.3s}
        footer a:hover{color:var(--green-light)}
        footer .bottom{border-top:1px solid rgba(255,255,255,0.1);padding-top:24px;margin-top:32px;text-align:center;font-size:12px}
      `}</style>
    </footer>
  )
}
