import { useTranslation } from '../i18n/i18n.jsx'

const LANGUAGES = ['ES', 'EN', 'FR']
const LANGS = { ES: 'es', EN: 'en', FR: 'fr' }

export default function Nav() {
  const { lang, setLang, t } = useTranslation()

  return (
    <nav id="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <img src="/logo.svg" alt="Hevristika" />
        </a>
        <div className="nav-lang">
          {LANGUAGES.map(l => (
            <button
              key={l}
              className={`nav-lang-btn${LANGS[l] === lang ? ' active' : ''}`}
              onClick={() => setLang(LANGS[l])}
            >
              {l}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => document.getElementById('cta-final')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{t('nav.cta')}</button>
      </div>
      <style>{`
        nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:16px 0;transition:all 0.4s ease}
        nav .nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;transition:all 0.4s ease}
        nav.scrolled{padding:0;background:transparent;backdrop-filter:none;box-shadow:none}
        nav.scrolled .nav-inner{max-width:none;padding:0;justify-content:space-between;position:fixed;top:24px;right:24px;background:rgba(0,0,0,0.6);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08);border-radius:100px;padding:6px 6px 6px 16px;box-shadow:0 8px 32px rgba(0,0,0,0.2);gap:12px}
        nav.scrolled .logo{display:block;height:28px}
        nav.scrolled .logo img{height:28px;width:auto;filter:brightness(0) invert(1)}
        nav .logo{height:36px;width:auto}
        nav .logo img{height:36px;width:auto}
        .nav-lang{display:flex;gap:2px;background:rgba(255,255,255,0.08);border-radius:50px;padding:3px;margin:0 8px}
        .nav-lang-btn{background:none;border:none;color:rgba(255,255,255,0.5);font-size:11px;font-weight:600;padding:4px 8px;border-radius:50px;cursor:pointer;transition:all 0.3s ease;font-family:var(--font);letter-spacing:0.5px}
        .nav-lang-btn.active{background:rgba(255,255,255,0.15);color:var(--white)}
        .nav-lang-btn:hover{color:rgba(255,255,255,0.8)}
        .nav-cta{background:#99e4df;color:#000;padding:10px 24px;border-radius:50px;font-size:14px;font-weight:600;transition:opacity 0.3s ease;white-space:nowrap}
        .nav-cta:hover{opacity:0.9}
        @media(max-width:767px){.nav-lang-btn{font-size:10px;padding:3px 6px}.nav-cta{padding:8px 16px;font-size:12px}}
        @media(min-width:768px){nav .nav-inner{padding:0 40px}}
      `}</style>
    </nav>
  )
}
