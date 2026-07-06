const testimonials = [
  {
    stars: 5,
    text: "MediLink made it incredibly easy to find a specialist. I booked within minutes and had a wonderful experience with Dr. Arora.",
    name: "Priya Sharma",
    role: "Patient · Delhi",
    initial: "P",
  },
  {
    stars: 5,
    text: "The video consultation feature saved me a 2-hour commute. The platform is smooth and the doctor was excellent and very attentive.",
    name: "Rahul Mehta",
    role: "Patient · Mumbai",
    initial: "R",
  },
  {
    stars: 4,
    text: "Finding a trusted pediatrician has never been easier. My daughter now has a regular doctor she loves, and it took minutes to set up.",
    name: "Anjali Verma",
    role: "Parent · Bengaluru",
    initial: "A",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="reveal" style={{ textAlign: "center" }}>
        <div className="section-tag" style={{ display: "inline-flex" }}>
          Patient Stories
        </div>
        <h2 className="section-title">What Our Patients Say</h2>
      </div>

      <div className="test-grid reveal">
        {testimonials.map((t, i) => (
          <div className="test-card" key={i}>
            <div className="t-stars">
              {"★".repeat(t.stars)}
              {"☆".repeat(5 - t.stars)}
            </div>
            <p className="t-text">{t.text}</p>
            <div className="t-author">
              <div className="t-avatar">{t.initial}</div>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
