import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#f28c28' : 'white',
    fontWeight: isActive ? 'bold' : 'normal',
    transition: 'color 0.2s ease'
  })

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ backgroundColor: '#1769aa' }}
    >
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold text-white"
          to="/"
          end
        >
          <i className="bi bi-code-slash me-2"></i>
          Alya Web
        </NavLink>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="nav-link text-decoration-none"
                style={linkStyle}
              >
                <i className="bi bi-house-door me-1"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/team"
                className="nav-link text-decoration-none"
                style={linkStyle}
              >
                <i className="bi bi-people me-1"></i>
                Team
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-decoration-none"
                style={linkStyle}
              >
                <i className="bi bi-chat-dots me-1"></i>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar