import { useState, useEffect } from 'react';
import PokeballIcon from './PokeballIcon.jsx';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.25s ease',
        background: scrolled ? 'rgba(11, 15, 25, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: 'var(--content-max-width)',
          margin: '0 auto',
          padding: '0.9rem clamp(1.25rem, 4vw, 2.5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
          }}
        >
          <PokeballIcon size={22} color="#E11D48" />
          <span>
            Ashutosh <span className="gradient-text-red">Basnet</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul
          style={{
            display: 'flex',
            gap: '1.75rem',
            listStyle: 'none',
            alignItems: 'center',
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-primary"
              style={{
                padding: '0.45rem 1.15rem',
                fontSize: '0.82rem',
                textDecoration: 'none',
              }}
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1001,
          }}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: '22px',
              height: '2px',
              background: 'var(--color-text-primary)',
              borderRadius: '2px',
              transition: 'var(--transition-base)',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              width: '22px',
              height: '2px',
              background: 'var(--color-text-primary)',
              borderRadius: '2px',
              transition: 'var(--transition-base)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: '22px',
              height: '2px',
              background: 'var(--color-text-primary)',
              borderRadius: '2px',
              transition: 'var(--transition-base)',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className="nav-mobile-menu"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 15, 25, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.6rem',
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? 'all' : 'none',
            transition: 'all 0.25s ease',
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-primary"
            style={{
              marginTop: '0.75rem',
              padding: '0.75rem 2rem',
              fontSize: '0.95rem',
            }}
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 820px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
        @media (min-width: 821px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
