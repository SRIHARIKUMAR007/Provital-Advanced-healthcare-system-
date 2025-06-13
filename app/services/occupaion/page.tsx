import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Building2, Shield, Users, Activity, CheckCircle, ArrowRight, Briefcase, Heart } from "lucide-react"

export default function OccupationalHealthcarePage() {
  const features = [
    {
      icon: Building2,
      title: "Workplace Assessments",
      description: "Comprehensive workplace health and safety assessments to identify and mitigate risks.",
    },
    {
      icon: Shield,
      title: "Injury Prevention",
      description: "Proactive programs to prevent workplace injuries and promote employee safety.",
    },
    {
      icon: Users,
      title: "Employee Wellness",
      description: "Wellness programs designed to improve employee health and productivity.",
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Regular health monitoring and surveillance for occupational health risks.",
    },
  ]

  const services = [
    "Pre-employment Health Screenings",
    "Workplace Safety Training",
    "Ergonomic Assessments",
    "Occupational Health Surveillance",
    "Return-to-Work Programs",
    "Stress Management Workshops",
    "Employee Assistance Programs",
    "Health and Wellness Seminars",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                🏢 Occupational Healthcare
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">Healthy Employees, Thriving Business</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Protect your workforce and boost productivity with our comprehensive occupational health services. We
                help create safer, healthier workplaces for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment">
                  <Button size="lg" className="group">
                    Get Workplace Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/workplace-stress.png"
                alt="Occupational Healthcare"
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Workplace Health Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our occupational health services are designed to protect your employees and enhance workplace
              productivity.
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/workplace-stress.png"
                alt="Workplace Wellness"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Occupational Health Services</h2>
              <p className="text-xl text-gray-600">
                From pre-employment screenings to ongoing wellness programs, we provide comprehensive occupational
                health solutions tailored to your industry and workforce needs.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Benefits for Your Organization</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Investing in occupational health delivers measurable returns for your business and employees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reduced Absenteeism</h3>
              <p className="text-blue-100">Healthier employees take fewer sick days</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Increased Productivity</h3>
              <p className="text-blue-100">Wellness programs boost employee performance</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lower Insurance Costs</h3>
              <p className="text-blue-100">Preventive care reduces healthcare expenses</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Employee Satisfaction</h3>
              <p className="text-blue-100">Show you care about employee wellbeing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Workplace Health?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our occupational health services can benefit your organization and employees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Request Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/assessment">
              <Button variant="outline" size="lg">
                Workplace Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
