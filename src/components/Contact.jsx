export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: ["neelwanprashant@email.com", "pprashantkumar@clarku.edu"],
      links: ["mailto:neelwanprashant@email.com", "mailto:pprashantkumar@clarku.edu"]
    },
    {
      icon: "📱",
      title: "Phone",
      details: ["+1-774-502-3742"],
      links: ["tel:+17745023742"]
    },
    {
      icon: "💼",
      title: "Professional",
      details: ["LinkedIn", "GitHub"],
      links: ["https://www.linkedin.com/in/neelwan-prashant", "https://github.com/PrashantNeelwan"]
    },
    {
      icon: "📍",
      title: "Location",
      details: ["Available for remote and on-site opportunities"],
      links: [null]
    }
  ];

  return (
    <section>
      <h2>Let's Connect</h2>
      <div className="contact-grid">
        {contactInfo.map((item, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">{item.icon}</div>
            <h3 className="contact-title">{item.title}</h3>
            <div className="contact-details">
              {item.details.map((detail, i) => (
                item.links[i] ? (
                  <a key={i} href={item.links[i]} target="_blank" rel="noopener noreferrer" className="contact-link">
                    {detail}
                  </a>
                ) : (
                  <span key={i} className="contact-text">{detail}</span>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
