import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Calendar, Search, Filter, Phone, Mail } from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Internal Medicine",
    rating: 4.9,
    reviews: 127,
    location: "New York, NY",
    experience: "15 years",
    education: "Harvard Medical School",
    languages: ["English", "Spanish"],
    availability: "Available Today",
    image: "/images/doctor-female-1.png",
    bio: "Dr. Johnson specializes in preventive care and chronic disease management with a focus on patient-centered care.",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@provital.com",
    specializations: ["Preventive Care", "Diabetes Management", "Hypertension"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    rating: 4.8,
    reviews: 89,
    location: "Los Angeles, CA",
    experience: "12 years",
    education: "Stanford University School of Medicine",
    languages: ["English", "Mandarin"],
    availability: "Available Tomorrow",
    image: "/images/doctor-male-asian.png",
    bio: "Board-certified cardiologist with expertise in interventional cardiology and heart disease prevention.",
    phone: "+1 (555) 234-5678",
    email: "michael.chen@provital.com",
    specializations: ["Interventional Cardiology", "Heart Disease", "Preventive Cardiology"],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Mental Health",
    rating: 4.9,
    reviews: 156,
    location: "Chicago, IL",
    experience: "10 years",
    education: "Johns Hopkins School of Medicine",
    languages: ["English", "Spanish", "Portuguese"],
    availability: "Available Today",
    image: "/images/doctor-female-2.png",
    bio: "Licensed psychiatrist specializing in anxiety, depression, and cognitive behavioral therapy.",
    phone: "+1 (555) 345-6789",
    email: "emily.rodriguez@provital.com",
    specializations: ["Anxiety Disorders", "Depression", "CBT", "PTSD"],
  },
  {
    id: 4,
    name: "Dr. Robert Wilson",
    specialty: "Occupational Medicine",
    rating: 4.7,
    reviews: 73,
    location: "Seattle, WA",
    experience: "20 years",
    education: "University of Washington School of Medicine",
    languages: ["English"],
    availability: "Available This Week",
    image: "/images/doctor-male-senior.png",
    bio: "Occupational medicine specialist focused on workplace health, injury prevention, and employee wellness programs.",
    phone: "+1 (555) 456-7890",
    email: "robert.wilson@provital.com",
    specializations: ["Workplace Safety", "Injury Prevention", "Employee Wellness"],
  },
  {
    id: 5,
    name: "Dr. James Thompson",
    specialty: "Preventive Medicine",
    rating: 4.8,
    reviews: 94,
    location: "Boston, MA",
    experience: "8 years",
    education: "Harvard Medical School",
    languages: ["English", "French"],
    availability: "Available Tomorrow",
    image: "/images/doctor-male-young.png",
    bio: "Preventive medicine physician dedicated to helping patients maintain optimal health through lifestyle interventions and early detection.",
    phone: "+1 (555) 567-8901",
    email: "james.thompson@provital.com",
    specializations: ["Preventive Care", "Health Screenings", "Lifestyle Medicine"],
  },
]

const specialties = [
  "All Specialties",
  "Internal Medicine",
  "Cardiology",
  "Mental Health",
  "Occupational Medicine",
  "Preventive Medicine",
  "Telemedicine",
  "Nutrition",
  "Fitness",
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find Your Perfect Healthcare Provider</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with board-certified doctors and specialists who are committed to providing exceptional,
              personalized healthcare tailored to your unique needs.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input placeholder="Search by doctor name or condition..." className="pl-10" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty.toLowerCase().replace(" ", "-")}>
                          {specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Available Today</SelectItem>
                      <SelectItem value="tomorrow">Available Tomorrow</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="next-week">Next Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Available Doctors ({doctors.length})</h2>
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                  />
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-blue-600">{doctor.specialty}</CardDescription>

                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500">({doctor.reviews} reviews)</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {doctor.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {doctor.availability}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {doctor.phone}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {doctor.email}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Experience:</span> {doctor.experience}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Education:</span> {doctor.education}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Specializations:</div>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specializations.map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((language) => (
                      <Badge key={language} variant="outline" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{doctor.bio}</p>

                  <div className="flex gap-2 pt-4">
                    <Link href={`/doctors/${doctor.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                    <Link href="/assessment" className="flex-1">
                      <Button className="w-full">Book Appointment</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Advanced Healthcare Technology Meets Personalized Care</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our care coordinators can help you find the perfect healthcare provider based on your specific needs and
            preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Care Coordinator
              </Button>
            </Link>
            <Link href="/assessment">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Take Health Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
