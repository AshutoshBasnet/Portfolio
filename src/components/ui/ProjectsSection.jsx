import { useEffect, useRef, useState } from 'react';
import FlowingMenu from '../animations/FlowingMenu.jsx';
import { fetchProjects } from '../../services/api.js';
import mockProjects from '../../data/mockProjects.js';

function ProjectsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'interactive'

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

  useEffect(() => {
    async function loadProjects() {
      const data = await fetchProjects();
      setProjects(data && data.length > 0 ? data : mockProjects);
      setLoading(false);
    }
    loadProjects();
  }, []);

  // Transform projects for FlowingMenu
  const menuItems = projects.map((p) => ({
    link: p.github_url || p.live_url || '#',
    text: p.title,
    image: p.image_url,
  }));

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: 'relative',
        background: 'var(--color-bg-primary)',
        padding: 'var(--section-padding) 0',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: '3rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <div>
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
              Portfolio Work
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                marginBottom: '0.5rem',
              }}
            >
              Featured <span className="gradient-text-red">Academic Projects</span>
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-text-secondary)',
                maxWidth: '600px',
                lineHeight: 1.65,
              }}
            >
              Demonstrated experience in database schema design, machine learning pipelines, object-oriented software, and Agile teamwork.
            </p>
          </div>

          {/* View toggle */}
          <div
            className="view-toggle-desktop"
            style={{
              display: 'flex',
              gap: '0.35rem',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '0.3rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)',
            }}
          >
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: viewMode === 'grid' ? '#E11D48' : 'transparent',
                color: viewMode === 'grid' ? '#ffffff' : 'var(--color-text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('interactive')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: viewMode === 'interactive' ? '#E11D48' : 'transparent',
                color: viewMode === 'interactive' ? '#ffffff' : 'var(--color-text-secondary)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
            >
              Interactive View
            </button>
          </div>
        </div>

        {/* Interactive Flow View */}
        {!loading && projects.length > 0 && viewMode === 'interactive' && (
          <div
            className="projects-flowing-menu"
            style={{
              height: `${Math.max(400, projects.length * 85)}px`,
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.15s',
            }}
          >
            <FlowingMenu
              items={menuItems}
              speed={12}
              textColor="#f8fafc"
              bgColor="#0b0f19"
              marqueeBgColor="#E11D48"
              marqueeTextColor="#ffffff"
              borderColor="rgba(255,255,255,0.08)"
            />
          </div>
        )}

        {/* Grid Card View */}
        {!loading && projects.length > 0 && (viewMode === 'grid' || true) && (
          <div
            className={`projects-grid-container ${viewMode === 'interactive' ? 'projects-grid-hidden-desktop' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.6rem',
            }}
          >
            {projects.map((project, i) => (
              <div
                key={project.id || project.title}
                className="clean-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.4s ease',
                  transitionDelay: `${0.1 + i * 0.08}s`,
                }}
              >
                {/* Project Image Header */}
                <div
                  style={{
                    height: '200px',
                    position: 'relative',
                    backgroundImage: `url(${project.image_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(11,15,25,0.1) 0%, rgba(21,31,50,0.95) 100%)',
                    }}
                  />

                  {project.category && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.85rem',
                        left: '0.85rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(11, 15, 25, 0.8)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#60A5FA',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                      }}
                    >
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '1.5rem',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.65rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.tech_stack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.2rem 0.6rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-secondary)',
                            fontSize: '0.74rem',
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{
                            padding: '0.45rem 1.1rem',
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                          }}
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Repository</span>
                        </a>
                      )}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                          style={{
                            padding: '0.45rem 1rem',
                            fontSize: '0.8rem',
                            textDecoration: 'none',
                          }}
                        >
                          <span>Live Demo ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
              color: 'var(--color-text-muted)',
            }}
          >
            <span>Loading projects...</span>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .view-toggle-desktop { display: none !important; }
          .projects-flowing-menu { display: none !important; }
          .projects-grid-container { display: grid !important; }
        }
        @media (min-width: 769px) {
          .projects-grid-hidden-desktop { display: none !important; }
        }
      `}</style>
    </section>
  );
}

export default ProjectsSection;
