import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Phone, Video, MessageCircle, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function TeleconsultationPage() {
  const features = [
    {
      icon: Phone,
      title: "Phone Consultations",
      description: "Connect with healthcare providers through secure phone calls for immediate medical advice.",
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "Face-to-face consultations through high-quality video calls for comprehensive care.",
    },
    {
      icon: MessageCircle,
      title: "Chat Support",
      description: "Text-based consultations for quick questions and follow-up care.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book appointments that fit your schedule with same-day availability options.",
    },
  ]

  const benefits = [
    "Immediate access to healthcare providers",
    "No travel time or waiting rooms",
    "Secure and private consultations",
    "Follow-up care coordination",
    "Prescription management",
    "Medical record integration",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                📞 Teleconsultation Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">Expert Medical Advice at Your Fingertips</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get immediate access to qualified healthcare providers through phone, video, or chat consultations.
                Receive expert medical advice and care from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment">
                  <Button size="lg" className="group">
                    Start Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button variant="outline" size="lg">
                    Find a Doctor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/doctor-consultation.png"
                alt="Teleconsultation Service"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Multiple Ways to Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the consultation method that works best for you and your healthcare needs.
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

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Benefits of Teleconsultation</h2>
              <p className="text-xl text-blue-100 mb-8">
                Experience the convenience and efficiency of remote healthcare consultations.
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
                  <CardTitle>Same-Day Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get medical advice when you need it most with same-day appointment availability.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Follow-up Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Seamless follow-up consultations to monitor your progress and adjust treatment plans.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Connect with a Healthcare Provider?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your teleconsultation today and experience the convenience of remote healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" className="group">
                Book Consultation Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
