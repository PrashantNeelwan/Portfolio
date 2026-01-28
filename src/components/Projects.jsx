export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="card">
        <h3>AI-OPS-Intelligent-Load-Balancer-Agent</h3>
        <img src="/AI_OPS.png" alt="AI-OPS Illustration" style={{ width: '100%', height: 'auto' }} />
        <p>
            Built a full-stack AI-driven load-balancing system that uses a fine-tuned LLM to make real-time, explainable routing decisions based on server health metrics instead of static rules.
Designed a cloud-native architecture with React dashboards, Node.js APIs, workflow orchestration, and deterministic AI validation for production-safe automation.
        </p>
        <p><b>Tech:</b>React, Node.js, Express, Ollama (Qwen/Mistral LLMs), Prompt Engineering, n8n, Docker, REST APIs, Cloud-Native Architecture</p>
        <a href="https://github.com/PrashantNeelwan/AI-OPS-Intelligent-Load-Balancer-Agent">GitHub</a>
      </div>

      <div className="card">
        <h3>FlowFund : Peer-to-peer lending using Blockchain</h3>
        <img src="/BlockChain_Architecture.png" alt="AI-OPS Illustration" style={{ width: '100%', height: 'auto' }} />
        <p>Developed a full-stack blockchain-based P2P lending platform enabling secure borrowing, lending, collateral management, and repayments without intermediaries.
Implemented smart contracts, REST APIs, authentication, and cloud deployment with an AI-assisted risk-scoring approach for fraud detection and credit assessment.</p>
        <p><b>Tech:</b>React, Vite, Node.js, Express.js, MongoDB, Solidity, Ethereum (Hardhat), Ethers.js, Firebase Authentication, Docker, Docker Compose, DigitalOcean, REST APIs, AI-based risk scoring</p>
        <a href="https://github.com/PrashantNeelwan/FlowFund">GitHub</a>
      </div>

      <div className="card">
        <h3>Decentralized AI Marketplace : Blockchain-powered platform for AI models and datasets</h3>
        <img src="/QuantumTrade.png" alt="AI-OPS Illustration" style={{ width: '100%', height: 'auto' }} />
        <p>Built a decentralized marketplace for AI models and datasets with blockchain-based ownership, revenue management, and wallet-based authentication.
Implemented a serverless, cloud-native architecture on AWS using Django REST APIs, Infrastructure as Code, CI/CD pipelines, and automated testing for scalability and security.</p>
        <p><b>Tech:</b>Python, Django, Django REST Framework, Solidity, Ethereum, MetaMask, IPFS, AWS (Lambda, S3, DynamoDB, CloudFront, IAM), Terraform, Docker, GitHub Actions, JWT, Google OAuth2</p>
        <a href="https://github.com/PrashantNeelwan/Quantum-Trade">GitHub</a>
      </div>
    </section>
  );
}
