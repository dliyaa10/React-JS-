import napila from '../assets/napila.jpg'
import tasya from '../assets/tasya.jpg'
import lia from '../assets/lia.jpg'

function Team() {
  const members = [
    {
      id: 1,
      name: 'Alya Dliya',
      nim: '0110224055',
      role: 'Frontend Developer',
      skills: ['React JS', 'Bootstrap 5', 'JavaScript'],
      image: lia,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'alya@example.com'
    },
    {
      id: 2,
      name: 'Nafila',
      nim: '0110223040',
      role: 'UI/UX Designer',
      skills: ['Figma', 'UI Design', 'CSS'],
      image: napila,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'nafila@example.com'
    },
    {
      id: 3,
      name: 'Tasya',
      nim: '011022440',
      role: 'Web Developer',
      skills: ['JavaScript', 'Database', 'Git & GitHub'],
      image: tasya,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'tasya@example.com'
    }
  ]

  return (
    <div className="container my-5 py-3">

      {/* Judul */}
      <div className="text-center mb-5">
        <span
          className="badge rounded-pill px-3 py-2 mb-3"
          style={{
            backgroundColor: '#fff1e6',
            color: '#f28c28'
          }}
        >
          Our Team
        </span>

        <h2 className="fw-bold" style={{ color: '#1769aa' }}>
          Kenalan dengan Tim Kami
        </h2>

        <p className="text-muted">
          Tim mahasiswa Teknik Informatika yang mengembangkan website ini
          menggunakan React JS dan Bootstrap.
        </p>
      </div>

      {/* Card Team */}
      <div className="row g-4 justify-content-center">
        {members.map((member) => (
          <div className="col-md-4" key={member.id}>
            <div
              className="card h-100 border-0 shadow-sm"
              style={{
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >

              {/* Foto */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #1769aa, #f28c28)',
                  padding: '5px'
                }}
              >
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
              </div>

              {/* Isi Card */}
              <div className="card-body text-center d-flex flex-column">

                <h5
                  className="fw-bold mb-1"
                  style={{ color: '#1769aa' }}
                >
                  {member.name}
                </h5>

                <p
                  className="mb-1 fw-semibold"
                  style={{ color: '#f28c28' }}
                >
                  {member.role}
                </p>

                <small className="text-muted mb-3">
                  NIM: {member.nim}
                </small>

                {/* Skills */}
                <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge"
                      style={{
                        backgroundColor: '#eaf4fb',
                        color: '#1769aa',
                        border: '1px solid #1769aa'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Media */}
                <div
                  className="mt-auto pt-3"
                  style={{
                    borderTop: '1px solid #eee'
                  }}
                >
                  <div className="d-flex justify-content-center gap-3">

                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#1769aa' }}
                      title="GitHub"
                    >
                      <i className="bi bi-github fs-5"></i>
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#1769aa' }}
                      title="LinkedIn"
                    >
                      <i className="bi bi-linkedin fs-5"></i>
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      style={{ color: '#f28c28' }}
                      title="Email"
                    >
                      <i className="bi bi-envelope-fill fs-5"></i>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Team