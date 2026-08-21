import { useEffect, useState } from 'react';
import GradientWaves from '../animations/GradientWaves.jsx';

function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle, Smooth Wave Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <GradientWaves
          horizonColor="#0b0f19"
          waveColor="#1e293b"
          crestColor="#2563eb"
          speed={0.2}
          amplitude={2.5}
          waveScale={0.5}
          waveRatio={0.8}
          swell={25}
          turbulence={12}
          tilt={1.2}
          zoom={1.1}
          height={5}
          fogDepth={14}
          detail="medium"
          brightness={0.85}
          opacity={0.7}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={false}
          grainIntensity={0.02}
        />
      </div>

      {/* Clean Gradient Overlay for Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 40%, rgba(11, 15, 25, 0.6) 0%, rgba(11, 15, 25, 0.95) 85%)',
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '860px',
          padding: '0 1.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Simple Status Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.1rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--color-border)',
            marginBottom: '1.5rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-secondary)',
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#10B981',
              boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
            }}
          />
          <span>Seeking Internship in Software & Web Development</span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          Hi, I'm <span className="gradient-text-red">Ashutosh Basnet</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 600,
            color: 'var(--color-text-secondary)',
            marginBottom: '1.25rem',
            lineHeight: 1.4,
          }}
        >
          Final-Year BSc (Hons) Computing Student @ Islington College
        </p>

        {/* Pitch Summary */}
        <p
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
            color: 'var(--color-text-muted)',
            maxWidth: '680px',
            margin: '0 auto 2rem',
            lineHeight: 1.7,
          }}
        >
          Practical experience in applied data science and software development utilizing{' '}
          <strong style={{ color: '#f8fafc', fontWeight: 600 }}>Python (Pandas, NumPy, ML)</strong>,{' '}
          <strong style={{ color: '#f8fafc', fontWeight: 600 }}>Java (MVC)</strong>, and{' '}
          <strong style={{ color: '#f8fafc', fontWeight: 600 }}>SQL Relational Schemas</strong>. Developing full-stack web applications with modern practices.
        </p>

        {/* Quick Contact Points */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.65rem 1.25rem',
            margin: '0 auto 2.25rem',
            fontSize: '0.85rem',
            color: 'var(--color-text-secondary)',
          }}
        >
          <span>📍 Kathmandu, Nepal</span>
          <span>•</span>
          <a
            href="tel:+9779844811293"
            style={{ color: 'var(--color-text-secondary)', transition: 'color 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            📞 +977 9844811293
          </a>
          <span>•</span>
          <a
            href="mailto:basnetashutosh02@gmail.com"
            style={{ color: 'var(--color-text-secondary)', transition: 'color 0.15s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            ✉️ basnetashutosh02@gmail.com
          </a>
        </div>

        {/* Clean Call To Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '0.85rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            id="hero-cta-projects"
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            Explore Projects
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>

          <a
            id="hero-cta-contact"
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="btn-secondary"
            style={{ textDecoration: 'none' }}
          >
            Get in Touch
          </a>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '0.25rem' }}>
            <a
              href="https://github.com/AshutoshBasnet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/ashutosh-basnet-967a9a3b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--color-border)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
