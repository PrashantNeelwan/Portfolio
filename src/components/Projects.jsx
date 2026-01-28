export default function Projects() {
  const projects = [
    {
      title: "AI-OPS Intelligent Load Balancer Agent",
      image: "/AI_OPS.png",
      description: "Built a full-stack AI-driven load-balancing system that uses a fine-tuned LLM to make real-time, explainable routing decisions based on server health metrics instead of static rules.",
      highlights: [
        "Real-time AI-powered routing decisions",
        "Cloud-native architecture with React dashboards",
        "Deterministic AI validation for production safety",
        "Workflow orchestration with n8n"
      ],
      tech: ["React", "Node.js", "Express", "Ollama (Qwen/Mistral LLMs)", "Prompt Engineering", "n8n", "Docker", "REST APIs"],
      github: "https://github.com/PrashantNeelwan/AI-OPS-Intelligent-Load-Balancer-Agent",
      demo: null
    },
    {
      title: "FlowFund - Peer-to-Peer Lending",
      image: "/BlockChain_Architecture.png",
      description: "Developed a full-stack blockchain-based P2P lending platform enabling secure borrowing, lending, collateral management, and repayments without intermediaries.",
      highlights: [
        "Trustless lending without intermediaries",
        "Smart contract-based collateral management",
        "AI-assisted risk scoring for fraud detection",
        "Cloud deployment with Docker orchestration"
      ],
      tech: ["React", "Vite", "Node.js", "Solidity", "Ethereum", "Hardhat", "MongoDB", "Firebase Auth", "Docker", "DigitalOcean"],
      github: "https://github.com/PrashantNeelwan/FlowFund",
      demo: null
    },
    {
      title: "Decentralized AI Marketplace",
      image: "/QuantumTrade.png",
      description: "Built a decentralized marketplace for AI models and datasets with blockchain-based ownership, revenue management, and wallet-based authentication.",
      highlights: [
        "Blockchain-powered ownership and revenue tracking",
        "Serverless cloud-native AWS architecture",
        "Infrastructure as Code with Terraform",
        "Automated CI/CD pipelines for scalability"
      ],
      tech: ["Python", "Django", "Solidity", "Ethereum", "MetaMask", "IPFS", "AWS Lambda", "S3", "DynamoDB", "Terraform", "GitHub Actions"],
      github: "https://github.com/PrashantNeelwan/Quantum-Trade",
      demo: null
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <span>→</span> View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn">
                      <span>→</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
