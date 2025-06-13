import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Apple, Users, BarChart3, Shield, CheckCircle, ArrowRight, Calendar, BookOpen, Utensils } from "lucide-react"

export default function NutritionTherapyPage() {
  const features = [
    {
      icon: Apple,
      title: "Personalized Plans",
      description: "Custom nutrition plans tailored to your health goals, dietary preferences, and lifestyle.",
    },
    {
      icon: Users,
      title: "Expert Nutritionists",
      description: "Work with certified nutritionists and registered dietitians with years of experience.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your nutrition goals with detailed analytics and progress reports.",
    },
    {
      icon: Shield,
      title: "Evidence-Based",
      description: "All recommendations are based on the latest nutritional science and research.",
    },
  ]

  const services = [
    "Personalized Meal Planning",
    "Nutritional Counseling",
    "Weight Management Programs",
    "Sports Nutrition",
    "Medical Nutrition Therapy",
    "Cooking Classes & Workshops",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-up">
              <Badge variant="secondary" className="w-fit">
                🍎 Nutrition Therapy Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">Transform Your Health Through Nutrition</h1>
              <p className="text-xl text-secondary leading-relaxed">
                Discover the power of personalized nutrition with our certified nutritionists and dietitians. Get custom
                meal plans, expert guidance, and ongoing support to achieve your health goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment">
                  <button className="btn-primary">
                    Get Nutrition Plan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="relative fade-in">
              <img src="/images/nutrition-consultation.png" alt="Nutrition Consultation" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Nutrition Support</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Our nutrition therapy services are designed to help you achieve optimal health through personalized
              dietary guidance.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card text-center scale-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-content">
                  <div className="service-icon mx-auto">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nutrition Therapy Pricing</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Invest in your health with our comprehensive nutrition programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="card-content">
                <h3 className="text-2xl font-bold mb-2">Initial Consultation</h3>
                <div className="text-4xl font-bold text-primary mb-4">$79</div>
                <p className="text-secondary mb-6">90-minute comprehensive assessment</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Complete dietary analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Personalized meal plan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Goal setting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Nutrition education
                  </li>
                </ul>
                <Link href="/booking">
                  <button className="btn-primary w-full">Book Consultation</button>
                </Link>
              </div>
            </div>

            <div className="card text-center border-2 border-primary">
              <div className="card-content">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-sm mb-4 w-fit mx-auto">
                  Best Value
                </div>
                <h3 className="text-2xl font-bold mb-2">Follow-up Sessions</h3>
                <div className="text-4xl font-bold text-primary mb-4">$59</div>
                <p className="text-secondary mb-6">per 45-minute session</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Progress monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Plan adjustments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ongoing support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Recipe suggestions
                  </li>
                </ul>
                <Link href="/booking">
                  <button className="btn-primary w-full">Schedule Follow-up</button>
                </Link>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-content">
                <h3 className="text-2xl font-bold mb-2">Cooking Classes</h3>
                <div className="text-4xl font-bold text-primary mb-4">$39</div>
                <p className="text-secondary mb-6">per 2-hour class</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Hands-on cooking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Healthy recipes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Small group setting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Take-home materials
                  </li>
                </ul>
                <Link href="/booking">
                  <button className="btn-primary w-full">Join Class</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary mb-4">
              Package deals available • Insurance may cover medical nutrition therapy
            </p>
            <p className="text-sm text-gray-500">HSA/FSA eligible • Group discounts for families</p>
          </div>
        </div>
      </section>

      {/* Cooking Classes Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold">Cooking Classes & Workshops</h2>
              <p className="text-xl text-secondary">
                Learn to prepare healthy, delicious meals with our interactive cooking classes. Our expert chefs and
                nutritionists will teach you practical skills to maintain a healthy lifestyle.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <Link href="/assessment">
                <button className="btn-primary">
                  Join Cooking Class
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="fade-in">
              <img src="/images/nutrition-cooking.png" alt="Healthy Cooking Class" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Nutrition Therapy Works</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Get personalized nutrition guidance in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="service-icon mx-auto">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">1. Initial Assessment</h3>
              <p className="card-description">
                Complete a comprehensive nutrition assessment to understand your goals and dietary needs.
              </p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon mx-auto">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">2. Custom Plan</h3>
              <p className="card-description">
                Receive a personalized nutrition plan with meal recommendations and dietary guidelines.
              </p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="service-icon mx-auto">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">3. Ongoing Support</h3>
              <p className="card-description">
                Get continuous support and plan adjustments as you progress towards your health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Your Nutrition Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Take control of your health with personalized nutrition guidance from our expert team of nutritionists and
            dietitians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Get Your Nutrition Plan
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                Contact Nutritionist
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
