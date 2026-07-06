import { useState } from "react";

const specialties = [
  { id: "all", icon: "🏥", name: "All", count: "500+ doctors" },
  { id: "General", icon: "🩺", name: "General", count: "120 doctors" },
  { id: "Gynecology", icon: "👶", name: "Gynecology", count: "68 doctors" },
  { id: "Dermatology", icon: "✨", name: "Dermatology", count: "55 doctors" },
  { id: "Pediatrics", icon: "🧒", name: "Pediatrics", count: "80 doctors" },
  { id: "Neurology", icon: "🧠", name: "Neurology", count: "42 doctors" },
  { id: "Gastroenterology", icon: "💊", name: "Gastro", count: "36 doctors" },
  { id: "Cardiology", icon: "❤️", name: "Cardiology", count: "58 doctors" },
];

export default function Specialties({ onFilter }) {
  const [active, setActive] = useState("all");

  const handleClick = (spec) => {
    setActive(spec.id);
    onFilter(spec.id);
  };

  return (
    <section className="spec-section section reveal">
      <div className="spec-header">
        <div>
          <div className="section-tag">Browse by Specialty</div>
          <h2 className="section-title">Find Doctors By Specialisation</h2>
        </div>
        <a href="#doctors" className="btn-outline">
          View All Doctors →
        </a>
      </div>

      <div className="spec-grid">
        {specialties.map((spec) => (
          <div
            key={spec.id}
            className={`spec-card ${active === spec.id ? "active" : ""}`}
            onClick={() => handleClick(spec)}
          >
            <div className="spec-icon">{spec.icon}</div>
            <div className="spec-name">{spec.name}</div>
            <div className="spec-count">{spec.count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
