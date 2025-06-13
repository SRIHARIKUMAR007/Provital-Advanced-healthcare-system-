import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Dumbbell, Target, Users, Trophy, CheckCircle, ArrowRight, Calendar, Play, BarChart3 } from "lucide-react"

export default function FitnessProgramsPage() {
  const features = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one sessions with certified personal trainers tailored to your fitness level and goals.",
    },
    {
      icon: Target,
      title: "Goal-Oriented Programs",
      description: "Structured programs designed to help you achieve specific fitness goals efficiently.",
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Motivating group fitness classes that make working out fun and social.",
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Advanced analytics to monitor your progress and celebrate your achievements.",
    },
  ]

  const programs = [
    "Strength Training Programs",
    "Cardio & Endurance Training",
    "Weight Loss Programs",
    "Muscle Building Plans",
    "Functional Fitness",
    "Sports-Specific Training",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-up">
              <Badge variant="secondary" className="w-fit">
                💪 Fitness Programs
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">Achieve Your Fitness Goals</h1>
              <p className="text-xl text-secondary leading-relaxed">
                Transform your body and mind with our comprehensive fitness programs. Get personalized training plans,
                expert coaching, and the motivation you need to reach your fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment">
                  <button className="btn-primary">
                    Start Training
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="relative fade-in">
              <img src="/images/fitness-training.png" alt="Fitness Training Session" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Fitness Solutions</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Our fitness programs are designed to meet you where you are and take you where you want to be.
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

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img src="/images/outdoor-hiking.png" alt="Outdoor Fitness Activities" className="hero-image" />
            </div>
            <div className="space-y-6 slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold">Diverse Training Programs</h2>
              <p className="text-xl text-secondary">
                Whether you're a beginner or an experienced athlete, we have programs designed to challenge and inspire
                you. From strength training to outdoor adventures, find the perfect fit for your lifestyle.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {programs.map((program, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{program}</span>
                  </div>
                ))}
              </div>
              <Link href="/assessment">
                <button className="btn-primary">
                  Choose Your Program
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Our Fitness Programs Work</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Get started with your fitness journey in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="service-icon mx-auto">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">1. Fitness Assessment</h3>
              <p className="card-description">
                Complete a comprehensive fitness assessment to determine your current level and goals.
              </p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon mx-auto">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">2. Custom Program</h3>
              <p className="card-description">
                Receive a personalized fitness program designed specifically for your goals and preferences.
              </p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="service-icon mx-auto">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">3. Track Progress</h3>
              <p className="card-description">
                Monitor your progress with detailed analytics and adjust your program as you improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Fitness?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of people who have achieved their fitness goals with our expert-designed programs and
            personalized coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Start Your Fitness Journey
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                Contact Trainer
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
