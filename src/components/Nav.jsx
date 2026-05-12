export default function Nav() {
  return (
    <nav id="nav">
      <div className="container">
        <a href="#" className="logo">
          <img src="/logo.svg" alt="Hevristika" />
        </a>
        <a href="#cta-form" className="nav-cta">Reservá tu llamada</a>
      </div>
      <style>{`
        nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:16px 0;transition:all 0.4s ease}
        nav.scrolled{background:rgba(250,247,243,0.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 2px 40px rgba(0,0,0,0.06)}
        nav .container{display:flex;align-items:center;justify-content:space-between}
        nav .logo{height:36px;width:auto}
        nav .logo img{height:36px;width:auto}
        .nav-cta{background:var(--green);color:var(--white);padding:10px 24px;border-radius:50px;font-size:14px;font-weight:600;transition:all 0.3s ease}
        .nav-cta:hover{background:var(--green-dark);transform:translateY(-1px)}
      `}</style>
    </nav>
  )
}
