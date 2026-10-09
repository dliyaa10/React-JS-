import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        {/* Bagian Perkenalan */}
        <div className="col-lg-6">
          <span
            className="badge rounded-pill mb-3 px-3 py-2"
            style={{
              backgroundColor: '#fff0df',
              color: '#1769aa',
              fontSize: '14px'
            }}
          >
            Welcome to My Website
          </span>

          <h1 className="display-5 fw-bold mb-3">
            Halo, Saya{' '}
            <span style={{ color: '#1769aa' }}>
              Alya Dliya
            </span>
          </h1>

          <h5 className="mb-3" style={{ color: '#f28c28' }}>
            Mahasiswa Teknik Informatika
          </h5>

          <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
            Selamat datang di website portofolio saya.
            Website ini dibuat menggunakan React JS dan Bootstrap
            untuk memperkenalkan diri, tim, serta informasi kontak.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <Link
              to="/team"
              className="btn text-white px-4 py-2"
              style={{ backgroundColor: '#1769aa' }}
            >
              <i className="bi bi-people me-2"></i>
              Lihat Team
            </Link>

            <Link
              to="/contact"
              className="btn px-4 py-2"
              style={{
                border: '2px solid #f28c28',
                color: '#f28c28'
              }}
            >
              <i className="bi bi-chat-dots me-2"></i>
              Contact Saya
            </Link>
          </div>

          <div className="d-flex gap-4 mt-5">
            <div>
              <h4 className="fw-bold mb-0" style={{ color: '#1769aa' }}>
                React JS
              </h4>
              <small className="text-secondary">Frontend</small>
            </div>

            <div>
              <h4 className="fw-bold mb-0" style={{ color: '#1769aa' }}>
                Bootstrap
              </h4>
              <small className="text-secondary">Styling</small>
            </div>

            <div>
              <h4 className="fw-bold mb-0" style={{ color: '#1769aa' }}>
                UI/UX
              </h4>
              <small className="text-secondary">Design</small>
            </div>
          </div>
        </div>

        {/* Bagian Ilustrasi */}
        <div className="col-lg-6">
          <div
            className="rounded-4 p-5 text-center shadow-sm"
            style={{
              background: 'linear-gradient(135deg, #1769aa, #4599d8)',
              minHeight: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <i
              className="bi bi-code-slash text-white"
              style={{ fontSize: '100px' }}
            ></i>

            <h2 className="text-white fw-bold mt-3">
              Web Development
            </h2>

            <p className="text-white mb-0">
              Learn, Create, and Innovate
            </p>

            <div className="d-flex gap-2 mt-4 flex-wrap justify-content-center">
              <span className="badge bg-light text-primary p-2">HTML</span>
              <span className="badge bg-light text-primary p-2">CSS</span>
              <span className="badge bg-light text-primary p-2">JavaScript</span>
              <span className="badge bg-light text-primary p-2">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home