import { useEffect, useRef, useState } from 'react';

const educationData = [
  {
    degree: 'BSc (Hons) Computing',
    institution: 'Islington College, affiliated with London Metropolitan University',
    location: 'Kamal Marg, Kamalpokhari, Kathmandu',
    period: '2024 – Present',
    status: 'In Progress (Final Year)',
    description:
      'Focusing on applied data science, database architectures, machine learning foundations, software engineering methodologies, and full-stack web development.',
    icon: '🎓',
  },
  {
    degree: 'SLC / High School (+2 Science / NEB)',
    institution: 'NAST College — National Examination Board (NEB)',
    location: 'Nepal',
    period: '2022 – 2024',
    status: 'Completed',
    description: 'Specialized in Science & Mathematics, establishing core analytical and computing foundations.',
    icon: '🏫',
  },
  {
    degree: 'Secondary Education Examination (SEE)',
    institution: 'Axis Vidyashram Secondary School — NEB',
    location: 'Nepal',
    period: '2020',
    status: 'Completed',
    description: 'Completed secondary school with strong academic standing in science and computer fundamentals.',
    icon: '📜',
  },
];

const certifications = [
  {
    title: 'AWS Academy Graduate — Data Engineering',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud & Data Engineering',
    url: 'https://www.credly.com/badges/6be1c322-ccdb-45b4-8969-49644713a809/public_url',
    description: 'Data ingestion, ETL pipelines, distributed processing, and cloud database optimization on AWS.',
    badgeIcon: '☁️',
  },
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud Architecture',
    url: 'https://www.credly.com/badges/4f1ea22d-e141-45b4-aee8-2c717a9ad4ba/public_url',
    description: 'Cloud computing concepts, security, architecture, pricing, and foundational AWS infrastructure.',
    badgeIcon: '🛡️',
  },
  {
    title: 'AWS Academy Graduate — Machine Learning for NLP',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Artificial Intelligence & NLP',
    url: 'https://www.credly.com/badges/91f29a09-0245-4051-baea-7644ae8810e4/public_url',
    description: 'Natural Language Processing models, text pre-processing, transformer pipelines, and model evaluation.',
    badgeIcon: '🤖',
  },
  {
    title: 'AWS Academy Graduate — Machine Learning Foundations',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Machine Learning',
    url: 'https://www.credly.com/badges/b1c6b292-70c5-4ba2-aea1-ac5cd8ca5c27/public_url',
    description: 'Supervised & unsupervised learning principles, algorithmic formulation, and ML model lifecycles.',
    badgeIcon: '📊',
  },
];

function EducationCertificationsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        background: 'var(--color-bg-secondary)',
        position: 'relative',
        padding: 'var(--section-padding) 0',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div
          style={{
            marginBottom: '3rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#E11D48',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            Academic & Industry Credentials
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              marginBottom: '0.75rem',
            }}
          >
            Education & <span className="gradient-text-red">Certifications</span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '620px',
              lineHeight: 1.65,
            }}
          >
            Rigorous university education in computing combined with 4 AWS Academy certifications in cloud architecture, data engineering, and machine learning.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Column 1: Educational Background */}
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.25rem', fontWeight: 700 }}>
              🎓 Educational Background
            </h3>

            {/* Timeline */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                paddingLeft: '1.25rem',
                borderLeft: '2px solid var(--color-border)',
              }}
            >
              {educationData.map((edu, idx) => (
                <div
                  key={edu.degree}
                  className="clean-card"
                  style={{
                    padding: '1.4rem',
                    position: 'relative',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-15px)',
                    transition: `all 0.5s ease ${0.15 + idx * 0.1}s`,
                  }}
                >
                  {/* Timeline Dot */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '-1.65rem',
                      top: '1.5rem',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#E11D48',
                      border: '2px solid var(--color-bg-secondary)',
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', margin: 0, fontWeight: 700 }}>
                      {edu.degree}
                    </h4>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: 'var(--color-text-secondary)',
                        fontWeight: 500,
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#60A5FA', fontWeight: 600, margin: '0 0 0.35rem 0' }}>
                    {edu.institution}
                  </p>

                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0 0 0.65rem 0' }}>
                    📍 {edu.location}
                  </p>

                  <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Training & Certifications */}
          <div id="certifications">
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.25rem', fontWeight: 700 }}>
              📜 AWS Academy Certifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {certifications.map((cert, idx) => (
                <div
                  key={cert.title}
                  className="clean-card"
                  style={{
                    padding: '1.35rem',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(15px)',
                    transition: `all 0.5s ease ${0.15 + idx * 0.08}s`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '0.65rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ fontSize: '1.35rem' }}>{cert.badgeIcon}</span>
                    <div>
                      <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#f8fafc', margin: 0, lineHeight: 1.3 }}>
                        {cert.title}
                      </h4>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                        {cert.issuer} • {cert.category}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {cert.description}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.2rem' }}>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.78rem',
                        color: '#60A5FA',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      Verify on Credly ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Reference Section */}
        <div
          className="clean-card"
          style={{
            padding: '1.75rem 2.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.6s ease 0.3s',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#E11D48',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                display: 'block',
                marginBottom: '0.25rem',
              }}
            >
              Academic Reference
            </span>
            <h4
              style={{
                fontSize: '1.25rem',
                color: '#f8fafc',
                fontWeight: 700,
                marginBottom: '0.25rem',
              }}
            >
              Sanjeep Lama
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>
              Assistant Lecturer | Supervisor | Module Leader, Islington College
            </p>
          </div>

          <a
            href="mailto:sanjeeplama24@gmail.com"
            className="btn-secondary"
            style={{
              fontSize: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>sanjeeplama24@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default EducationCertificationsSection;
