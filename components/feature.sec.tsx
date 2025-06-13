import { Smartphone, Lock, Clock, Users, BarChart3, Zap, Globe, Award } from "lucide-react"

const features = [
  {
    title: "Mobile-First Design",
    description:
      "Access your health information and services seamlessly across all devices with our responsive platform.",
    icon: Smartphone,
  },
  {
    title: "Advanced Security",
    description:
      "Your health data is protected with enterprise-grade encryption and HIPAA-compliant security measures.",
    icon: Lock,
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock access to healthcare services and emergency support whenever you need it.",
    icon: Clock,
  },
  {
    title: "Expert Network",
    description: "Connect with a vast network of certified healthcare professionals and specialists.",
    icon: Users,
  },
  {
    title: "Health Analytics",
    description: "AI-powered insights and analytics to track your health progress and identify potential issues.",
    icon: BarChart3,
  },
  {
    title: "Instant Results",
    description: "Get immediate access to test results, prescriptions, and health recommendations.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description: "Access healthcare services from anywhere in the world with our international network.",
    icon: Globe,
  },
  {
    title: "Quality Assured",
    description: "All our services meet the highest quality standards and are regularly audited for excellence.",
    icon: Award,
  },
]

export function FeaturesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Provital?</h2>
          <p className="text-xl text-secondary mx-auto" style={{ maxWidth: "48rem" }}>
            We combine cutting-edge technology with personalized care to deliver an exceptional healthcare experience
            that puts you in control of your health.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card text-center scale-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-content">
                <div
                  className="flex items-center justify-center mx-auto mb-4 rounded-2xl"
                  style={{ width: "4rem", height: "4rem", background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
                >
                  <feature.icon style={{ width: "2rem", height: "2rem", color: "white" }} />
                </div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
