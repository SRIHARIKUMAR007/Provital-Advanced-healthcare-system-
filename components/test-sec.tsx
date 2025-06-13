import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    content:
      "Provital has revolutionized my healthcare experience. The telemedicine consultations are convenient and the doctors are incredibly knowledgeable.",
    rating: 5,
    avatar: "/images/sleep-wellness.png",
  },
  {
    name: "Dr. Michael Chen",
    role: "Healthcare Provider",
    content:
      "As a healthcare provider, I appreciate the seamless integration and comprehensive tools that Provital offers. It enhances patient care significantly.",
    rating: 5,
    avatar: "/images/nutrition-consultation.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Patient",
    content:
      "The mental wellness programs have been life-changing. The platform makes it easy to access quality mental health support when I need it most.",
    rating: 5,
    avatar: "/images/group-therapy.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-secondary mx-auto" style={{ maxWidth: "48rem" }}>
            Don't just take our word for it. Here's what patients and healthcare providers are saying about their
            experience with Provital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card scale-hover fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-content">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      style={{ width: "1.25rem", height: "1.25rem", color: "#facc15", fill: "currentColor" }}
                    />
                  ))}
                </div>
                <p className="text-secondary mb-6" style={{ lineHeight: "1.75" }}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="rounded-full mr-4"
                    style={{ width: "3rem", height: "3rem", objectFit: "cover" }}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-secondary">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
