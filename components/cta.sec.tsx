import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
  const benefits = [
    "Free health assessment",
    "Personalized care plan",
    "Access to expert doctors",
    "24/7 support available",
  ]

  return (
    <section className="section" style={{ background: "linear-gradient(to right, #2563eb, #3b82f6)", color: "white" }}>
      <div className="container">
        <div className="mx-auto text-center slide-up" style={{ maxWidth: "64rem" }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#bfdbfe", lineHeight: "1.75" }}>
            Join thousands of patients who have already discovered the future of healthcare. Start your journey to
            better health today with our comprehensive platform.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8 mx-auto" style={{ maxWidth: "32rem" }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center" style={{ color: "#bfdbfe" }}>
                <CheckCircle
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "#4ade80",
                    marginRight: "0.75rem",
                    flexShrink: 0,
                  }}
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <button className="btn btn-primary" style={{ backgroundColor: "white", color: "#2563eb" }}>
                Start Free Assessment
                <ArrowRight style={{ width: "1rem", height: "1rem", marginLeft: "0.5rem" }} />
              </button>
            </Link>
            <Link href="/register">
              <button className="btn btn-secondary" style={{ borderColor: "white", color: "white" }}>
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
