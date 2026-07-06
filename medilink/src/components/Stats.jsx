const stats = [
  { num: "500+", label: "Verified Doctors" },
  { num: "50K+", label: "Happy Patients" },
  { num: "30+", label: "Specialties" },
  { num: "4.9★", label: "Average Rating" },
];

export default function Stats() {
  return (
    <div className="stats reveal">
      {stats.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
