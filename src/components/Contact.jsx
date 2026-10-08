import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [senderName, setSenderName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const nameInput = e.target.elements.name.value

    setSenderName(nameInput)
    setSubmitted(true)
    e.target.reset()
  }

  const faqs = [
    {
      id: 'faqOne',
      question: 'Apa tujuan dibuatnya website ini?',
      answer:
        'Website ini dibuat sebagai bagian dari praktikum React JS untuk menerapkan penggunaan component, state, dan Bootstrap dalam pembuatan sebuah website.'
    },
    {
      id: 'faqTwo',
      question: 'Teknologi apa saja yang digunakan?',
      answer:
        'Website ini menggunakan React JS, JavaScript, Bootstrap 5, Bootstrap Icons, serta Vite sebagai development environment.'
    },
    {
      id: 'faqThree',
      question: 'Apakah website ini dapat dibuka melalui perangkat lain?',
      answer:
        'Tampilan website dibuat menggunakan Bootstrap sehingga dapat menyesuaikan dengan berbagai ukuran layar seperti laptop, tablet, maupun smartphone.'
    }
  ]

  return (
    <div className="container my-5 py-3">

      {/* Header */}
      <div className="text-center mb-5">
        <span
          className="badge rounded-pill px-3 py-2 mb-3"
          style={{
            backgroundColor: '#fff1e6',
            color: '#f28c28'
          }}
        >
          Let's Connect
        </span>

        <h2
          className="fw-bold"
          style={{ color: '#1769aa' }}
        >
          Hubungi Saya
        </h2>

        <p className="text-muted">
          Jika ingin menyampaikan pesan atau pertanyaan, silakan gunakan
          informasi kontak dan form di bawah ini.
        </p>
      </div>

      {/* Contact Information & Form */}
      <div className="row g-4 mb-5 pb-4 border-bottom">

        {/* Contact Information */}
        <div className="col-md-5">
          <div
            className="card h-100 border-0 p-4 shadow-sm"
            style={{
              borderTop: '5px solid #1769aa'
            }}
          >
            <h5
              className="fw-bold mb-4"
              style={{ color: '#1769aa' }}
            >
              Informasi Saya
            </h5>

            <div className="mb-4">
              <div
                className="d-flex align-items-center gap-2 mb-1"
                style={{ color: '#f28c28' }}
              >
                <i className="bi bi-person-circle"></i>
                <span className="small fw-semibold">
                  Nama
                </span>
              </div>

              <strong>
                Alya Dliya Zahra Andre
              </strong>
            </div>

            <div className="mb-4">
              <div
                className="d-flex align-items-center gap-2 mb-1"
                style={{ color: '#f28c28' }}
              >
                <i className="bi bi-mortarboard-fill"></i>
                <span className="small fw-semibold">
                  Kampus
                </span>
              </div>

              <span>
                STT Terpadu Nurul Fikri
              </span>
            </div>

            <div className="mb-4">
              <div
                className="d-flex align-items-center gap-2 mb-1"
                style={{ color: '#f28c28' }}
              >
                <i className="bi bi-card-text"></i>
                <span className="small fw-semibold">
                  NIM
                </span>
              </div>

              <span>
                0110224055
              </span>
            </div>

            <div className="mb-4">
              <div
                className="d-flex align-items-center gap-2 mb-1"
                style={{ color: '#f28c28' }}
              >
                <i className="bi bi-envelope-fill"></i>
                <span className="small fw-semibold">
                  Email
                </span>
              </div>

              <span>
                alyadliya@gmail.com
              </span>
            </div>

            <div>
              <div
                className="d-flex align-items-center gap-2 mb-1"
                style={{ color: '#f28c28' }}
              >
                <i className="bi bi-whatsapp"></i>
                <span className="small fw-semibold">
                  WhatsApp
                </span>
              </div>

              <span>
                081234567890
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="col-md-7">
          <div
            className="card border-0 p-4 shadow-sm h-100"
            style={{
              borderTop: '5px solid #f28c28'
            }}
          >
            <h5
              className="fw-bold mb-3"
              style={{ color: '#1769aa' }}
            >
              Kirim Pesan
            </h5>

            {submitted && (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Terima kasih <strong>{senderName}</strong>,
                pesan kamu berhasil dikirim!

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSubmitted(false)}
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Masukkan nama kamu"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="nama@email.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Pesan
                </label>

                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Tulis pesan kamu di sini..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn text-white px-4"
                style={{ backgroundColor: '#1769aa' }}
              >
                <i className="bi bi-send me-2"></i>
                Kirim Pesan
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* FAQ */}
      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="text-center mb-4">

            <h4
              className="fw-bold"
              style={{ color: '#1769aa' }}
            >
              Pertanyaan Umum
            </h4>

            <p className="text-muted small">
              Beberapa informasi mengenai website dan praktikum
            </p>

          </div>

          <div
            className="accordion shadow-sm"
            id="faqAccordion"
          >

            {faqs.map((faq, index) => (

              <div
                className="accordion-item"
                key={faq.id}
              >

                <h2
                  className="accordion-header"
                  id={`heading${faq.id}`}
                >

                  <button
                    className={`accordion-button ${
                      index !== 0 ? 'collapsed' : ''
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${faq.id}`}
                    aria-expanded={
                      index === 0 ? 'true' : 'false'
                    }
                    aria-controls={`collapse${faq.id}`}
                  >
                    {faq.question}
                  </button>

                </h2>

                <div
                  id={`collapse${faq.id}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? 'show' : ''
                  }`}
                  aria-labelledby={`heading${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >

                  <div className="accordion-body text-muted">
                    {faq.answer}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact