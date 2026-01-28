export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["JavaScript (ES6+)", "TypeScript", "Java", "C++", "Python", "Solidity"]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Vite", "HTML5, CSS3", "Bootstrap", "Material UI"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Django", "Django REST Framework", "REST API Design"]
    },
    {
      title: "AI & Applied Intelligence",
      icon: "🤖",
      skills: ["Large Language Models (LLMs)", "Prompt Engineering", "Few-shot Learning", "AI Decision Systems", "Deterministic AI Validation"]
    },
    {
      title: "Blockchain & Web3",
      icon: "⛓️",
      skills: ["Ethereum", "Smart Contracts (Solidity)", "MetaMask", "IPFS", "Hardhat", "Ethers.js"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "DynamoDB"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["Docker & Docker Compose", "AWS (Lambda, S3, CloudFront, IAM)", "Terraform (Infrastructure as Code)", "DigitalOcean", "CI/CD (GitHub Actions)"]
    },
    {
      title: "Authentication & Security",
      icon: "🔐",
      skills: ["JWT Authentication", "Firebase Authentication", "Google OAuth2", "AWS Secrets Manager"]
    },
    {
      title: "Tools & Testing",
      icon: "🛠️",
      skills: ["Git & GitHub", "n8n (Workflow Automation)", "pytest", "Playwright"]
    }
  ];

  return (
    <section>
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
