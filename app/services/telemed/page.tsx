import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Video, Clock, Shield, Users, CheckCircle, ArrowRight, Smartphone, Monitor, Headphones } from "lucide-react"

export default function TelemedicinePage() {
  const features = [
    {
      icon: Video,
      title: "HD Video Consultations",
      description: "Crystal clear video calls with healthcare providers using secure, HIPAA-compliant technology.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access healthcare services anytime, anywhere with our round-the-clock telemedicine platform.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health information is protected with enterprise-grade encryption and security measures.",
    },
    {
      icon: Users,
      title: "Expert Providers",
      description: "Connect with board-certified physicians and specialists from the comfort of your home.",
    },
  ]

  const benefits = [
    "No travel time or waiting rooms",
    "Reduced healthcare costs",
    "Access to specialists nationwide",
    "Prescription management",
    "Follow-up care coordination",
    "Medical record integration",
  ]

  const howItWorks = [
    {
      step: 1,
      title: "Schedule Appointment",
      description: "Book your consultation online or through our mobile app at your convenience.",
    },
    {
      step: 2,
      title: "Join Video Call",
      description: "Connect with your healthcare provider through our secure video platform.",
    },
    {
      step: 3,
      title: "Receive Care",
      description: "Get diagnosis, treatment recommendations, and prescriptions as needed.",
    },
    {
      step: 4,
      title: "Follow Up",
      description: "Access your visit summary, prescriptions, and schedule follow-up appointments.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                🏥 Telemedicine Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">Healthcare at Your Fingertips</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience convenient, high-quality healthcare through secure video consultations with licensed
                healthcare providers. Get the care you need, when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment">
                  <Button size="lg" className="group">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Telemedicine Consultation"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Our Telemedicine Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our telemedicine platform combines cutting-edge technology with personalized care to deliver exceptional
              healthcare experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
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

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Telemedicine Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting healthcare through our telemedicine platform is simple and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Benefits of Telemedicine</h2>
              <p className="text-xl text-blue-100 mb-8">
                Discover how telemedicine can transform your healthcare experience and provide convenient access to
                quality medical care.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-8 w-8" />
                    <CardTitle>Mobile Access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Access healthcare from your smartphone, tablet, or computer with our user-friendly mobile app.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Monitor className="h-8 w-8" />
                    <CardTitle>Desktop Platform</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Full-featured desktop experience with advanced tools for comprehensive consultations.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Headphones className="h-8 w-8" />
                    <CardTitle>24/7 Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Round-the-clock technical support to ensure your telemedicine experience is seamless.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Experience Telemedicine?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of patients who have discovered the convenience and quality of our telemedicine services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" className="group">
                Start Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
