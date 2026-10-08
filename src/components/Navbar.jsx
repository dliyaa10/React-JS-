function Navbar({ activePage, setActivePage }) {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ backgroundColor: '#1769aa' }}
    >
      <div className="container">

        {/* Logo / Nama Website */}
        <a
          className="navbar-brand fw-bold text-white"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setActivePage('home')
          }}
        >
          <i className="bi bi-code-slash me-2"></i>
          Alya Web
        </a>

        {/* Tombol Menu Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'white' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <button
                type="button"
                className="nav-link btn btn-link text-decoration-none"
                onClick={() => setActivePage('home')}
                style={{
                  color: activePage === 'home' ? '#f28c28' : 'white',
                  fontWeight: activePage === 'home' ? 'bold' : 'normal'
                }}
              >
                <i className="bi bi-house-door me-1"></i>
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link btn btn-link text-decoration-none"
                onClick={() => setActivePage('team')}
                style={{
                  color: activePage === 'team' ? '#f28c28' : 'white',
                  fontWeight: activePage === 'team' ? 'bold' : 'normal'
                }}
              >
                <i className="bi bi-people me-1"></i>
                Team
              </button>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link btn btn-link text-decoration-none"
                onClick={() => setActivePage('contact')}
                style={{
                  color: activePage === 'contact' ? '#f28c28' : 'white',
                  fontWeight: activePage === 'contact' ? 'bold' : 'normal'
                }}
              >
                <i className="bi bi-chat-dots me-1"></i>
                Contact
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar