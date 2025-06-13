import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Crown, Zap, Shield, Users, CheckCircle, ArrowRight, Star, Activity, Brain, Heart } from "lucide-react"

export default function ProHealthPage() {
  const premiumFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Health Insights",
      description:
        "Advanced AI algorithms analyze your health data to provide personalized recommendations and early risk detection.",
    },
    {
      icon: Shield,
      title: "24/7 Priority Support",
      description:
        "Immediate access to healthcare providers with priority scheduling and emergency consultation services.",
    },
    {
      icon: Users,
      title: "Dedicated Care Team",
      description: "Personal care coordinator and dedicated medical team for comprehensive health management.",
    },
    {
      icon: Activity,
      title: "Advanced Health Monitoring",
      description: "Continuous health monitoring with wearable device integration and real-time health tracking.",
    },
  ]

  const includedServices = [
    "Unlimited Teleconsultations",
    "Priority Appointment Scheduling",
    "Advanced Health Analytics",
    "Personalized Care Plans",
    "24/7 Emergency Support",
    "Specialist Consultations",
    "Health Coaching Sessions",
    "Preventive Care Programs",
    "Mental Health Support",
    "Nutrition & Fitness Guidance",
    "Medication Management",
    "Family Health Plans Available",
  ]

  const plans = [
    {
      name: "ProHealth Individual",
      price: "$199",
      period: "per month",
      description: "Comprehensive health management for individuals",
      features: [
        "All basic services included",
        "AI health insights",
        "Priority support",
        "Personal care coordinator",
        "Advanced monitoring",
      ],
      popular: false,
    },
    {
      name: "ProHealth Family",
      price: "$399",
      period: "per month",
      description: "Complete healthcare solution for families up to 4 members",
      features: [
        "Everything in Individual",
        "Family health dashboard",
        "Pediatric care included",
        "Family wellness programs",
        "Shared health insights",
      ],
      popular: true,
    },
    {
      name: "ProHealth Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for organizations and large groups",
      features: [
        "Everything in Family",
        "Employee wellness programs",
        "Occupational health services",
        "Custom integrations",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700">
              <Crown className="w-4 h-4 mr-2" />
              Premium Healthcare Experience
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              ProHealth <span className="text-purple-600">Premium</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Experience the future of healthcare with our premium ProHealth programs. Advanced technology meets
              personalized care for comprehensive health management and optimal wellness outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                  Start Premium Assessment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Advanced Healthcare Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ProHealth Premium combines cutting-edge technology with personalized care to deliver exceptional health
              outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-purple-100"
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600" />
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

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Everything You Need for Optimal Health</h2>
              <p className="text-xl text-gray-600">
                ProHealth Premium includes all our healthcare services plus exclusive features designed for
                comprehensive health management.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-500 to-blue-600 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Brain className="h-8 w-8" />
                    <CardTitle>AI Health Intelligence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Advanced AI analyzes your health patterns, predicts risks, and provides personalized recommendations
                    for optimal wellness.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-teal-600 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8" />
                    <CardTitle>Continuous Monitoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Real-time health monitoring with wearable integration and instant alerts for any concerning changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8" />
                    <CardTitle>Dedicated Care Team</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Personal care coordinator and dedicated medical team available 24/7 for immediate support and
                    guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your ProHealth Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the plan that best fits your healthcare needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-purple-500 border-2" : ""} hover:shadow-lg transition-shadow`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-purple-600 mt-4">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button
                        className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Experience Premium Healthcare?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of patients who have transformed their health with ProHealth Premium. Advanced technology
            meets personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" variant="secondary">
                Start Free Assessment
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
