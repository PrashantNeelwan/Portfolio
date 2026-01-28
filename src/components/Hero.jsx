export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-greeting">Welcome to my portfolio 🚀</div>
        <h1 className="hero-title">Hi, I'm <span className="hero-highlight">Prashant</span></h1>
        <p className="hero-subtitle">Full-Stack Developer | AI-Integrated Systems | Blockchain Specialist</p>
        <p className="hero-description">
          I build intelligent, scalable applications that merge cutting-edge AI, blockchain technology, and cloud architecture. Passionate about creating solutions that make an impact.
        </p>
        <div className="hero-buttons">
          <a href="https://github.com/PrashantNeelwan" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span>→</span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/neelwan-prashant" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <span>→</span> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
