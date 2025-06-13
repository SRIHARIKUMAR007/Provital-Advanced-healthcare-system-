import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Heart, Activity, Users, CheckCircle, ArrowRight } from "lucide-react"

export default function PreventiveHealthPage() {
  const features = [
    {
      icon: Shield,
      title: "Health Screenings",
      description: "Comprehensive health screenings to detect potential issues before they become serious problems.",
    },
    {
      icon: Heart,
      title: "Risk Assessment",
      description: "Personalized risk assessments based on your family history, lifestyle, and health data.",
    },
    {
      icon: Activity,
      title: "Lifestyle Counseling",
      description: "Expert guidance on nutrition, exercise, and lifestyle modifications for optimal health.",
    },
    {
      icon: Users,
      title: "Wellness Programs",
      description: "Structured wellness programs designed to help you maintain and improve your health.",
    },
  ]

  const services = [
    "Annual Physical Examinations",
    "Cancer Screening Programs",
    "Cardiovascular Health Assessments",
    "Diabetes Prevention Programs",
    "Vaccination and Immunization",
    "Mental Health Screenings",
    "Nutritional Assessments",
    "Fitness and Exercise Planning",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                🛡️ Preventive Health Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">Prevention is the Best Medicine</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay ahead of health issues with our comprehensive preventive care programs. Early detection and
                prevention are key to maintaining optimal health and preventing serious conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment">
                  <Button size="lg" className="group">
                    Start Health Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button variant="outline" size="lg">
                    Find a Specialist
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/doctor-consultation.png"
                alt="Preventive Health Care"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Preventive Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our preventive health services are designed to keep you healthy and catch potential issues early.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Preventive Services</h2>
              <p className="text-xl text-gray-600">
                We offer a comprehensive range of preventive health services tailored to your age, gender, and risk
                factors to help you maintain optimal health.
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
                <Button className="group">
                  Schedule Your Screening
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/doctor-consultation.png"
                alt="Health Screening"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Preventive Care Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to preventive care ensures comprehensive health monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Assessment</h3>
              <p className="text-gray-600">Complete comprehensive health assessment and risk evaluation.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Plan</h3>
              <p className="text-gray-600">Receive a customized preventive care plan based on your needs.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Monitoring</h3>
              <p className="text-gray-600">Regular follow-ups and monitoring to maintain optimal health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Invest in Your Future Health Today</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Take control of your health with our comprehensive preventive care programs. Early detection saves lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" variant="secondary">
                Start Your Health Journey
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
