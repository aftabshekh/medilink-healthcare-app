export default function Hero({ onOpenModal }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          500+ Verified Doctors Online
        </div>

        <h1>
          Book Appointment
          <br />
          With Trusted
          <br />
          Doctors
        </h1>

        <div className="hero-sub">
          <div className="avatar-stack">
            <div className="av">R</div>
            <div className="av">M</div>
            <div className="av">S</div>
          </div>
          <p className="hero-sub-text">
            Simply browse through our extensive list of trusted doctors,
            <br />
            <strong>schedule your appointment hassle-free.</strong>
          </p>
        </div>

        <div className="hero-cta">
          <button
            className="btn-hero"
            onClick={() =>
              document
                .getElementById("doctors")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Appointment →
          </button>
          <a href="#how" className="btn-hero-ghost">
            ▶ How it works
          </a>
        </div>
      </div>
    </section>
  );
}
