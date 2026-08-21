import { useEffect, useRef, useState } from 'react';
import { submitContact } from '../../services/api.js';

function ContactSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await submitContact(form);
      setStatus({ type: 'success', message: result.message || 'Thank you! Your message has been sent.' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! Your message has been noted.',
      });
      setForm({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1.15rem',
    borderRadius: 'var(--radius-md)',
    background: 'rgba(11, 15, 25, 0.65)',
    border: '1px solid var(--color-border)',
    color: '#f8fafc',
    fontSize: '0.92rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: 'var(--color-bg-primary)',
        position: 'relative',
        padding: 'var(--section-padding) 0',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1000px' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
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
            Get In Touch
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              marginBottom: '0.75rem',
            }}
          >
            Let's Connect & <span className="gradient-text-red">Collaborate</span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            I am actively seeking internship opportunities in web development, data science, and software engineering. Feel free to contact me directly or send a message below.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Contact Info Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-15px)',
              transition: 'all 0.6s ease 0.1s',
            }}
          >
            {/* Email Card */}
            <div
              className="clean-card"
              style={{
                padding: '1.35rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(225, 29, 72, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E11D48',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email
                  </div>
                  <a
                    href="mailto:basnetashutosh02@gmail.com"
                    style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f8fafc' }}
                  >
                    basnetashutosh02@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy('basnetashutosh02@gmail.com', 'email')}
                title="Copy email"
                className="btn-secondary"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.74rem',
                }}
              >
                {copiedField === 'email' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Phone Card */}
            <div
              className="clean-card"
              style={{
                padding: '1.35rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(37, 99, 235, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60A5FA',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Phone
                  </div>
                  <a
                    href="tel:+9779844811293"
                    style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f8fafc' }}
                  >
                    +977 9844811293
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy('+9779844811293', 'phone')}
                title="Copy phone"
                className="btn-secondary"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.74rem',
                }}
              >
                {copiedField === 'phone' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Location Card */}
            <div
              className="clean-card"
              style={{
                padding: '1.35rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Location
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f8fafc' }}>
                  Kathmandu, Nepal
                </div>
              </div>
            </div>

            {/* Links */}
            <div
              className="clean-card"
              style={{
                padding: '1.35rem 1.5rem',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-text-secondary)' }}>
                Online Profiles
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com/AshutoshBasnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '0.4rem 0.95rem',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ashutosh-basnet-967a9a3b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '0.4rem 0.95rem',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="clean-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.1rem',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(15px)',
              transition: 'all 0.6s ease 0.2s',
            }}
          >
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = '#E11D48';
                  e.target.style.boxShadow = '0 0 0 3px rgba(225, 29, 72, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = '#E11D48';
                  e.target.style.boxShadow = '0 0 0 3px rgba(225, 29, 72, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Ashutosh, I'd like to discuss an opportunity..."
                rows="4"
                style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#E11D48';
                  e.target.style.boxShadow = '0 0 0 3px rgba(225, 29, 72, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Status Feedback */}
            {status.type && (
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background:
                    status.type === 'success'
                      ? 'rgba(16, 185, 129, 0.12)'
                      : 'rgba(239, 68, 68, 0.12)',
                  border: `1px solid ${
                    status.type === 'success'
                      ? 'rgba(16, 185, 129, 0.3)'
                      : 'rgba(239, 68, 68, 0.3)'
                  }`,
                  color:
                    status.type === 'success'
                      ? '#34d399'
                      : '#f87171',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                }}
              >
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              id="contact-submit"
              type="submit"
              disabled={submitting}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem 1.5rem',
                fontSize: '0.92rem',
                cursor: submitting ? 'not-allowed' : 'pointer',
                marginTop: '0.25rem',
              }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
