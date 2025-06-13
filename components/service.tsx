import Link from "next/link"
import { Stethoscope, Shield, Building2, Brain, Apple, Dumbbell, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Telemedicine",
    description:
      "Connect with healthcare providers remotely through secure video consultations, chat, and digital health monitoring.",
    icon: Stethoscope,
    href: "/services/telemedicine",
    image: "/images/doctor-consultation.png",
    features: ["Video Consultations", "Digital Prescriptions", "Health Monitoring"],
  },
  {
    title: "Mental Wellness",
    description:
      "Professional mental health support including therapy sessions, stress management, and mindfulness programs.",
    icon: Brain,
    href: "/services/mental-wellness",
    image: "/images/meditation-wellness.png",
    features: ["Therapy Sessions", "Stress Management", "Mindfulness Programs"],
  },
  {
    title: "Nutrition Therapy",
    description: "Personalized nutrition plans and dietary guidance from certified nutritionists and dietitians.",
    icon: Apple,
    href: "/services/nutrition-therapy",
    image: "/images/nutrition-cooking.png",
    features: ["Personalized Plans", "Dietary Guidance", "Nutritionist Support"],
  },
  {
    title: "Fitness Programs",
    description:
      "Customized fitness routines and exercise programs designed by certified trainers for all fitness levels.",
    icon: Dumbbell,
    href: "/services/fitness-programs",
    image: "/images/fitness-training.png",
    features: ["Custom Routines", "Personal Training", "Progress Tracking"],
  },
  {
    title: "Occupational Healthcare",
    description:
      "Comprehensive workplace health solutions including employee wellness programs and occupational safety.",
    icon: Building2,
    href: "/services/occupational-healthcare",
    image: "/images/workplace-stress.png",
    features: ["Employee Wellness", "Safety Programs", "Health Assessments"],
  },
  {
    title: "Preventive Health",
    description:
      "Proactive healthcare solutions including regular screenings, vaccinations, and personalized wellness plans.",
    icon: Shield,
    href: "/services/preventive-health",
    image: "/images/outdoor-hiking.png",
    features: ["Health Screenings", "Vaccination Programs", "Wellness Plans"],
  },
]

export function ServicesOverview() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Healthcare Services</h2>
          <p className="text-xl text-secondary mx-auto" style={{ maxWidth: "48rem" }}>
            From preventive care to specialized treatments, we offer a complete range of healthcare services designed to
            meet your unique needs and improve your overall well-being.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card scale-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="rounded-lg mb-4"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div className="flex items-center space-x-3 mb-4">
                <div className="service-icon">
                  <service.icon style={{ width: "1.5rem", height: "1.5rem", color: "var(--primary-blue)" }} />
                </div>
                <h3 className="card-title">{service.title}</h3>
              </div>
              <p className="card-description mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-secondary">
                    <div
                      style={{
                        width: "0.375rem",
                        height: "0.375rem",
                        backgroundColor: "var(--primary-blue)",
                        borderRadius: "50%",
                        marginRight: "0.5rem",
                      }}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.href}>
                <button className="btn btn-secondary w-full">
                  Learn More
                  <ArrowRight style={{ width: "1rem", height: "1rem", marginLeft: "0.5rem" }} />
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <button className="btn btn-primary">
              View All Services
              <ArrowRight style={{ width: "1rem", height: "1rem", marginLeft: "0.5rem" }} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
