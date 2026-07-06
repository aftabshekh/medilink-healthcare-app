const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Search & Browse",
    desc: "Find doctors by specialty, location, or name from our verified network of 500+ professionals.",
  },
  {
    num: "02",
    icon: "📅",
    title: "Pick a Slot",
    desc: "Choose from available time slots that fit your schedule — mornings, evenings, or weekends.",
  },
  {
    num: "03",
    icon: "✅",
    title: "Confirm & Attend",
    desc: "Receive instant confirmation and reminders. Visit in-clinic or attend via video consultation.",
  },
  {
    num: "04",
    icon: "📋",
    title: "Follow-up Care",
    desc: "Access digital prescriptions, medical records, and schedule follow-ups seamlessly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="hiw-section section reveal" id="how">
      <div className="section-tag">Simple Process</div>
      <h2 className="section-title">How MediLink Works</h2>
      <p className="section-sub">
        Four easy steps to connect with the right doctor.
      </p>

      <div className="hiw-steps">
        {steps.map((step, i) => (
          <div className="hiw-step" key={i}>
            <div className="step-num">{step.num}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
