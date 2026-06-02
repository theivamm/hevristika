import { useTranslation } from '../i18n/i18n.jsx'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div>
            <img src="/logo.svg" alt="Hevristika" className="logo-footer" />
            <p>{t('footer.description')}</p>
          </div>
          <div>
            <h4>{t('footer.programTitle')}</h4>
            <a href="#programa">{t('footer.programLink1')}</a>
            <a href="#inversion">{t('footer.programLink2')}</a>
          </div>
          <div>
            <h4>{t('footer.contactTitle')}</h4>
            <a href="https://wa.me/549XXXXXXXXX">{t('footer.contactWhatsapp')}</a>
            <a href="mailto:info@hevristika.com">info@hevristika.com</a>
            <a href="#cta-final">{t('footer.contactReservar')}</a>
          </div>
        </div>
        <div className="bottom">
          <p>{t('footer.copyright')}</p>
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
