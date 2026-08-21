import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: '🐍', tag: 'Core Strength', desc: 'NumPy, Pandas, Matplotlib, Seaborn, Machine Learning' },
      { name: 'Java', icon: '☕', tag: 'OOP & MVC', desc: 'Enterprise architecture, Web apps, MVC pattern' },
      { name: 'SQL', icon: '🗄️', tag: 'Relational', desc: 'Complex joins, Normalization (UNF–3NF), Subqueries' },
      { name: 'JavaScript', icon: '⚡', tag: 'Frontend & ES6+', desc: 'DOM manipulation, Async/Await, Web APIs' },
      { name: 'HTML5', icon: '🌐', tag: 'Semantic Web', desc: 'Accessible structures & SEO standards' },
      { name: 'CSS3', icon: '🎨', tag: 'Responsive Styling', desc: 'Flexbox, Grid, Custom animations & Themes' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Libraries & Frameworks',
    skills: [
      { name: 'Pandas & NumPy', icon: '📊', tag: 'Data Science', desc: 'Data cleaning, transformation & analysis' },
      { name: 'Matplotlib & Seaborn', icon: '📈', tag: 'Visualization', desc: 'Exploratory data visualization & statistical charts' },
      { name: 'React', icon: '⚛️', tag: 'UI Library', desc: 'Component architecture, Hooks, State management' },
      { name: 'Node.js & Express.js', icon: '🟢', tag: 'Learning', desc: 'RESTful API development & backend routing' },
      { name: 'MongoDB', icon: '🍃', tag: 'NoSQL', desc: 'Document store & MERN stack integration' },
    ],
  },
  {
    id: 'databases_tools',
    title: 'Databases & Tools',
    skills: [
      { name: 'Oracle SQL', icon: '🏛️', tag: 'Schema Design', desc: 'Relational schema design, Normalization & Constraints' },
      { name: 'Git & GitHub', icon: '🐙', tag: 'Version Control', desc: 'Branching, PRs, Collaborative workflows' },
      { name: 'Figma', icon: '📐', tag: 'UI/UX Design', desc: 'Wireframing, UI prototyping, UX workflows' },
      { name: 'Docker', icon: '🐳', tag: 'Learning', desc: 'Containerization fundamentals' },
      { name: 'Slack', icon: '💬', tag: 'Collaboration', desc: 'Team communication & Agile syncs' },
    ],
  },
  {
    id: 'soft_skills',
    title: 'Professional & Soft Skills',
    skills: [
      { name: 'Agile & Scrum Delivery', icon: '🔄', tag: 'Methodology', desc: 'Sprint planning, backlog management, iterative delivery' },
      { name: 'Problem Solving', icon: '💡', tag: 'Analytical', desc: 'Analytical mindset for tackling complex algorithms' },
      { name: 'Critical Thinking', icon: '🧠', tag: 'Logic', desc: 'Data-driven decision making & logic evaluation' },
      { name: 'Effective Communication', icon: '🗣️', tag: 'Interpersonal', desc: 'Clear documentation & constructive team dialogue' },
      { name: 'Time Management', icon: '⏱️', tag: 'Execution', desc: 'Milestone tracking and priority-driven task delivery' },
      { name: 'Teamwork & Collaboration', icon: '🤝', tag: 'Team Dynamics', desc: 'Thriving in diverse peer environments' },
    ],
  },
];

const stats = [
  { number: 4, suffix: '+', label: 'Academic Projects' },
  { number: 4, suffix: '', label: 'AWS Certifications' },
  { number: 3, suffix: '+', label: 'Years of Study' },
  { number: 100, suffix: '%', label: 'Commitment' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span
      className="gradient-text-red"
      style={{
        fontSize: 'clamp(2.2rem, 5vw, 3rem)',
        fontWeight: 800,
        fontFamily: 'var(--font-display)',
      }}
    >
      {count}{suffix}
    </span>
  );
}

function AboutSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

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

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: 'var(--color-bg-secondary)',
        position: 'relative',
        padding: 'var(--section-padding) 0',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          style={{
            marginBottom: '2.5rem',
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
            About Me & Objectives
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
              marginBottom: '1rem',
            }}
          >
            Passionate About <span className="gradient-text-red">Data Science</span> & <span className="gradient-text-blue">Software Engineering</span>
          </h2>
        </div>

        {/* Objective Box */}
        <div
          className="clean-card"
          style={{
            padding: 'clamp(1.5rem, 4vw, 2.25rem)',
            marginBottom: '3rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.1s',
          }}
        >
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>🎯</span> Career Objective
          </h3>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Final-year BSc (Hons) Computing student with practical expertise in applied data science and software development utilizing{' '}
            <strong style={{ color: '#f8fafc' }}>Python (NumPy, Pandas, Matplotlib, Seaborn)</strong>,{' '}
            <strong style={{ color: '#f8fafc' }}>Java (MVC)</strong>, and{' '}
            <strong style={{ color: '#f8fafc' }}>SQL relational schema design</strong>. Currently expanding Full Stack capabilities at Islington College. Comfortable working across the stack with firsthand experience in Agile/Scrum delivery. Seeking an internship in web development or software engineering to apply these skills on real-world systems and advance toward a career as a <strong style={{ color: '#E11D48' }}>Data Scientist</strong> or <strong style={{ color: '#60A5FA' }}>Software Engineer</strong>.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="clean-card"
              style={{
                textAlign: 'center',
                padding: '1.6rem 1rem',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${0.15 + i * 0.08}s`,
              }}
            >
              <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={inView} />
              <div
                style={{
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.88rem',
                  marginTop: '0.4rem',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div id="skills">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#E11D48',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Technical Capabilities
              </span>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)' }}>
                Skills & Technologies
              </h3>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '0.3rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
              }}
            >
              {[
                { id: 'all', label: 'All' },
                { id: 'languages', label: 'Languages' },
                { id: 'frameworks', label: 'Libraries & Frameworks' },
                { id: 'databases_tools', label: 'Databases & Tools' },
                { id: 'soft_skills', label: 'Soft Skills' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.4rem 0.95rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    background: activeTab === tab.id ? '#E11D48' : 'transparent',
                    color: activeTab === tab.id ? '#ffffff' : 'var(--color-text-secondary)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {displayedCategories.map((category) => (
              <div key={category.id}>
                {activeTab === 'all' && (
                  <h4
                    style={{
                      fontSize: '1rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    {category.title}
                  </h4>
                )}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="clean-card"
                      style={{
                        padding: '1.25rem 1.4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '0.65rem',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <span style={{ fontSize: '1.4rem' }}>{skill.icon}</span>
                          <span style={{ fontWeight: 700, fontSize: '0.98rem', color: '#f8fafc' }}>
                            {skill.name}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            padding: '0.2rem 0.55rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(255, 255, 255, 0.06)',
                            color: 'var(--color-text-secondary)',
                            fontWeight: 500,
                          }}
                        >
                          {skill.tag}
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--color-text-muted)',
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
