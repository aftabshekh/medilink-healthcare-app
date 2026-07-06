const allDoctors = [
  {
    name: "Dr. Ananya Mehta",
    spec: "General Physician",
    exp: "8 yrs exp",
    rating: 4.9,
    reviews: 312,
    fee: 500,
    available: true,
    initial: "A",
  },
  {
    name: "Dr. Rahul Kapoor",
    spec: "Cardiology",
    exp: "12 yrs exp",
    rating: 4.8,
    reviews: 540,
    fee: 800,
    available: true,
    initial: "R",
  },
  {
    name: "Dr. Sunita Rao",
    spec: "Gynecology",
    exp: "10 yrs exp",
    rating: 4.9,
    reviews: 289,
    fee: 700,
    available: false,
    initial: "S",
  },
  {
    name: "Dr. Vikram Singh",
    spec: "Neurology",
    exp: "15 yrs exp",
    rating: 4.7,
    reviews: 197,
    fee: 1000,
    available: true,
    initial: "V",
  },
  {
    name: "Dr. Pooja Nair",
    spec: "Dermatology",
    exp: "6 yrs exp",
    rating: 4.8,
    reviews: 421,
    fee: 600,
    available: true,
    initial: "P",
  },
  {
    name: "Dr. Arjun Sharma",
    spec: "Pediatrics",
    exp: "9 yrs exp",
    rating: 4.9,
    reviews: 365,
    fee: 550,
    available: true,
    initial: "A",
  },
  {
    name: "Dr. Deepa Iyer",
    spec: "Gastroenterology",
    exp: "11 yrs exp",
    rating: 4.6,
    reviews: 152,
    fee: 750,
    available: false,
    initial: "D",
  },
  {
    name: "Dr. Karan Patel",
    spec: "General Physician",
    exp: "5 yrs exp",
    rating: 4.7,
    reviews: 210,
    fee: 450,
    available: true,
    initial: "K",
  },
];

const colors = [
  "#6366f1",
  "#0891b2",
  "#7c3aed",
  "#059669",
  "#dc2626",
  "#d97706",
  "#be185d",
  "#0f766e",
];

export default function Doctors({ filter, onBook }) {
  const list =
    filter === "all"
      ? allDoctors
      : allDoctors.filter((d) => d.spec.includes(filter));

  const doctors = list.length ? list : allDoctors;

  return (
    <section className="section" id="doctors">
      <div className="doctors-header reveal">
        <div>
          <div className="section-tag">Top Rated</div>
          <h2 className="section-title">Meet Our Doctors</h2>
          <p className="section-sub">
            Trusted professionals ready to care for you
          </p>
        </div>
        <button className="btn-outline">View All →</button>
      </div>

      <div className="doctors-grid">
        {doctors.map((doc, i) => (
          <div className="doctor-card reveal" key={i}>
            <div
              className="doctor-img-wrap"
              style={{
                background: `linear-gradient(135deg, ${colors[i % colors.length]}18, ${colors[(i + 2) % colors.length]}18)`,
              }}
            >
              <div
                className="doctor-avatar"
                style={{
                  background: `linear-gradient(135deg, ${colors[i % colors.length]}, ${colors[(i + 2) % colors.length]})`,
                }}
              >
                {doc.initial}
              </div>
              <div className={`avail-badge ${doc.available ? "" : "busy"}`}>
                {doc.available ? "● Available" : "● Busy"}
              </div>
            </div>

            <div className="doctor-info">
              <div className="doctor-name">{doc.name}</div>
              <div className="doctor-spec">{doc.spec}</div>
              <div className="doctor-meta">
                <div className="meta-item">
                  <span className="stars">★</span> {doc.rating} ({doc.reviews})
                </div>
                <div className="meta-item">🕐 {doc.exp}</div>
              </div>
              <div className="doctor-footer">
                <div className="fee">
                  Fee: <strong>₹{doc.fee}</strong>
                </div>
                <button className="btn-book" onClick={() => onBook(doc.name)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
