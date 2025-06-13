import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Stethoscope,
  Shield,
  Building2,
  Brain,
  Apple,
  Dumbbell,
  Search,
  ArrowRight,
  Video,
  Clock,
  Users,
  Activity,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    name: "Telemedicine",
    category: "Digital Health",
    description: "Connect with healthcare providers through secure video consultations from anywhere.",
    icon: Video,
    features: ["HD Video Calls", "Secure Platform", "24/7 Access", "Prescription Management"],
    price: "Starting from $49",
    duration: "30-60 minutes",
    href: "/services/telemedicine",
    image: "/images/doctor-consultation.png",
  },
  {
    id: 2,
    name: "Teleconsultation",
    category: "Digital Health",
    description: "Expert medical advice and consultation through phone and video calls.",
    icon: Stethoscope,
    features: ["Expert Consultation", "Follow-up Care", "Medical Records", "Specialist Referrals"],
    price: "Starting from $39",
    duration: "15-45 minutes",
    href: "/services/teleconsultation",
    image: "/images/doctor-consultation.png",
  },
  {
    id: 3,
    name: "Preventive Health",
    category: "Wellness",
    description: "Comprehensive health screenings and preventive care programs.",
    icon: Shield,
    features: ["Health Screenings", "Vaccination Programs", "Risk Assessment", "Lifestyle Counseling"],
    price: "Starting from $99",
    duration: "1-2 hours",
    href: "/services/preventive-health",
    image: "/images/doctor-consultation.png",
  },
  {
    id: 4,
    name: "Occupational Healthcare",
    category: "Corporate",
    description: "Workplace health solutions and employee wellness programs.",
    icon: Building2,
    features: ["Employee Health", "Safety Programs", "Injury Prevention", "Wellness Workshops"],
    price: "Custom Pricing",
    duration: "Ongoing",
    href: "/services/occupational-healthcare",
    image: "/images/workplace-stress.png",
  },
  {
    id: 5,
    name: "Mental Wellness",
    category: "Mental Health",
    description: "Professional mental health support and therapy services.",
    icon: Brain,
    features: ["Individual Therapy", "Group Sessions", "Stress Management", "Crisis Support"],
    price: "Starting from $89",
    duration: "45-60 minutes",
    href: "/services/mental-wellness",
    image: "/images/meditation-wellness.png",
  },
  {
    id: 6,
    name: "Nutrition Therapy",
    category: "Wellness",
    description: "Personalized nutrition plans and dietary counseling.",
    icon: Apple,
    features: ["Custom Meal Plans", "Nutritional Counseling", "Weight Management", "Cooking Classes"],
    price: "Starting from $79",
    duration: "60 minutes",
    href: "/services/nutrition-therapy",
    image: "/images/nutrition-consultation.png",
  },
  {
    id: 7,
    name: "Fitness Programs",
    category: "Fitness",
    description: "Personalized fitness training and wellness programs.",
    icon: Dumbbell,
    features: ["Personal Training", "Group Classes", "Fitness Assessment", "Progress Tracking"],
    price: "Starting from $69",
    duration: "45-90 minutes",
    href: "/services/fitness-programs",
    image: "/images/fitness-training.png",
  },
  {
    id: 8,
    name: "ProHealth Programs",
    category: "Premium",
    description: "Comprehensive health management with advanced technology.",
    icon: Activity,
    features: ["Health Monitoring", "AI-Powered Insights", "Personalized Care", "24/7 Support"],
    price: "Starting from $199",
    duration: "Ongoing",
    href: "/services/prohealth",
    image: "/images/doctor-consultation.png",
  },
]

const categories = ["All Categories", "Digital Health", "Wellness", "Mental Health", "Fitness", "Corporate", "Premium"]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Advanced Healthcare Technology Meets Personalized Care
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover our comprehensive range of healthcare services designed to meet your unique needs. From
              telemedicine to preventive care, we're here to support your health journey.
            </p>
            <Link href="/assessment">
              <Button size="lg" className="group">
                Get Started with Free Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input placeholder="Search services..." className="pl-10" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Healthcare Services</h2>
            <Badge variant="secondary" className="text-sm">
              {services.length} Services Available
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Features:</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="font-medium text-blue-600">{service.price}</div>
                      <div className="text-gray-500">{service.duration}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={service.href} className="flex-1">
                      <Button className="w-full" size="sm">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/assessment">
                      <Button variant="outline" size="sm">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Provital?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with personalized care to deliver exceptional healthcare experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Access healthcare services anytime, anywhere</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">HIPAA-compliant platform with enterprise security</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Providers</h3>
              <p className="text-gray-600">Board-certified physicians and specialists</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mx-auto mb-4">
                <Activity className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">Advanced analytics for personalized care</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Healthcare Experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of patients who have discovered the convenience and quality of our comprehensive healthcare
            services.
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
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
