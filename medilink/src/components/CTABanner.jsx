export default function CTABanner({ onOpenModal }) {
  return (
    <div className="cta-banner reveal">
      <div className="cta-text">
        <h2>
          Your Health Deserves
          <br />
          The Best Care
        </h2>
        <p>
          Join 50,000+ patients who trust MediLink for their healthcare needs.
        </p>
      </div>
      <button className="btn-cta" onClick={() => onOpenModal("signup")}>
        Get Started Free →
      </button>
    </div>
  );
}
