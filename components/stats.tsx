export function StatsSection() {
  const stats = [
    { number: "50,000+", label: "Patients Served" },
    { number: "1,000+", label: "Healthcare Providers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "4.9/5", label: "Patient Satisfaction" },
  ]

  return (
    <section className="section bg-blue-600 text-white">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trusted by Thousands</h2>
          <p className="text-xl mx-auto" style={{ color: "#bfdbfe", maxWidth: "48rem" }}>
            Join the growing community of patients who trust Provital for their healthcare needs.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div style={{ color: "#bfdbfe", fontSize: "1.125rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
