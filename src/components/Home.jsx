function Home({ setActivePage }) {
  const techStack = [
    {
      name: 'HTML5',
      icon: 'bi-filetype-html',
      desc: 'Membangun struktur halaman web'
    },
    {
      name: 'CSS3',
      icon: 'bi-filetype-css',
      desc: 'Mengatur tampilan website'
    },
    {
      name: 'JavaScript',
      icon: 'bi-filetype-js',
      desc: 'Membuat halaman lebih interaktif'
    },
    {
      name: 'React JS',
      icon: 'bi-code-square',
      desc: 'Membangun UI berbasis komponen'
    },
    {
      name: 'Bootstrap',
      icon: 'bi-bootstrap',
      desc: 'Membantu membuat desain responsif'
    },
    {
      name: 'GitHub',
      icon: 'bi-github',
      desc: 'Menyimpan dan mengelola project'
    }
  ]

  return (
    <div className="container my-5 py-3">

      {/* Bagian Pembuka */}
      <div className="row align-items-center g-4 mb-5 pb-4 border-bottom">

        <div className="col-md-6">

          <span
            className="badge rounded-pill mb-3 px-3 py-2"
            style={{
              backgroundColor: '#fff1e6',
              color: '#f28c28'
            }}
          >
            Mahasiswa Teknik Informatika
          </span>

          <h1 className="fw-bold mb-3">
            Halo, Selamat Datang! 👋
          </h1>

          <p className="text-muted mb-4">
            Saya{' '}
            <strong style={{ color: '#1769aa' }}>
              Alya Dliya Zahra Andre
            </strong>
            , mahasiswa Teknik Informatika di STT Terpadu Nurul Fikri
            dengan NIM <strong>0110224055</strong>.
          </p>

          <p className="text-muted mb-4">
            Website ini dibuat sebagai bagian dari praktikum React JS
            Pertemuan 1 untuk menerapkan konsep component dan Bootstrap
            dalam pembuatan antarmuka website.
          </p>

          <div className="d-flex gap-2">
            <button
              className="btn text-white"
              style={{ backgroundColor: '#1769aa' }}
              onClick={() => setActivePage('team')}
            >
              Lihat Team
            </button>

            <button
              className="btn"
              style={{
                border: '2px solid #f28c28',
                color: '#f28c28'
              }}
              onClick={() => setActivePage('contact')}
            >
              Contact Saya
            </button>
          </div>

        </div>

        {/* Gambar Ilustrasi */}
        <div className="col-md-6 text-center">

          <div
            className="p-2 rounded-4"
            style={{
              background: 'linear-gradient(135deg, #1769aa, #f28c28)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format&fit=crop&q=80"
              alt="Ilustrasi desain dan teknologi"
              className="img-fluid rounded-4"
              style={{
                height: '430px',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

        </div>

      </div>

      {/* Teknologi */}
      <div>

        <div className="text-center mb-4">

          <h3
            className="fw-bold"
            style={{ color: '#1769aa' }}
          >
            Teknologi yang Saya Pelajari
          </h3>

          <p className="text-muted">
            Beberapa teknologi yang digunakan dalam proses
            pembelajaran Pemrograman Web.
          </p>

        </div>

        <div className="row g-3">

          {techStack.map((tech, index) => (
            <div
              className="col-6 col-md-4 col-lg-2"
              key={index}
            >
              <div
                className="card h-100 text-center p-3 border-0 shadow-sm"
                style={{
                  borderTop: '4px solid #1769aa',
                  borderRadius: '12px'
                }}
              >

                <div
                  className="fs-1 mb-2"
                  style={{ color: '#f28c28' }}
                >
                  <i className={`bi ${tech.icon}`}></i>
                </div>

                <h6
                  className="fw-semibold mb-2"
                  style={{ color: '#1769aa' }}
                >
                  {tech.name}
                </h6>

                <small className="text-muted">
                  {tech.desc}
                </small>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Home