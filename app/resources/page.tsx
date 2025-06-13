"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  BookOpen,
  Video,
  FileText,
  Download,
  Clock,
  User,
  ArrowRight,
  Heart,
  Brain,
  Apple,
  Dumbbell,
  Shield,
} from "lucide-react"
import Link from "next/link"

const resources = [
  {
    id: 1,
    title: "Complete Guide to Telemedicine",
    type: "Article",
    category: "Digital Health",
    description: "Everything you need to know about virtual healthcare consultations and how to prepare for them.",
    author: "Dr. Sarah Johnson",
    readTime: "8 min read",
    date: "2024-01-15",
    image: "/images/doctor-consultation.png",
    featured: true,
    tags: ["Telemedicine", "Digital Health", "Patient Guide"],
  },
  {
    id: 2,
    title: "Mental Health in the Digital Age",
    type: "Video",
    category: "Mental Health",
    description: "Understanding how technology can support mental wellness and when to seek professional help.",
    author: "Dr. Emily Rodriguez",
    readTime: "12 min watch",
    date: "2024-01-12",
    image: "/images/meditation-wellness.png",
    featured: true,
    tags: ["Mental Health", "Digital Wellness", "Therapy"],
  },
  {
    id: 3,
    title: "Nutrition Planning Workbook",
    type: "Guide",
    category: "Nutrition",
    description: "A comprehensive workbook to help you create personalized meal plans and track your nutrition goals.",
    author: "Nutrition Team",
    readTime: "Download",
    date: "2024-01-10",
    image: "/images/nutrition-consultation.png",
    featured: false,
    tags: ["Nutrition", "Meal Planning", "Health Goals"],
  },
  {
    id: 4,
    title: "Workplace Wellness Best Practices",
    type: "Article",
    category: "Occupational Health",
    description:
      "Strategies for maintaining health and wellness in the workplace, including ergonomics and stress management.",
    author: "Dr. Robert Wilson",
    readTime: "6 min read",
    date: "2024-01-08",
    image: "/images/workplace-stress.png",
    featured: false,
    tags: ["Workplace Health", "Ergonomics", "Stress Management"],
  },
  {
    id: 5,
    title: "Home Fitness Routine Builder",
    type: "Course",
    category: "Fitness",
    description: "Learn how to create effective workout routines that you can do from home with minimal equipment.",
    author: "Fitness Team",
    readTime: "45 min course",
    date: "2024-01-05",
    image: "/images/fitness-training.png",
    featured: false,
    tags: ["Home Fitness", "Exercise", "Workout Plans"],
  },
  {
    id: 6,
    title: "Preventive Health Checklist",
    type: "Tool",
    category: "Preventive Care",
    description:
      "Interactive checklist to help you stay on top of important health screenings and preventive measures.",
    author: "Medical Team",
    readTime: "Interactive",
    date: "2024-01-03",
    image: "/images/doctor-consultation.png",
    featured: false,
    tags: ["Preventive Care", "Health Screening", "Wellness"],
  },
  {
    id: 7,
    title: "Understanding Sleep Disorders",
    type: "Video",
    category: "Sleep Health",
    description: "Expert insights into common sleep disorders and evidence-based strategies for better sleep hygiene.",
    author: "Dr. James Thompson",
    readTime: "15 min watch",
    date: "2024-01-01",
    image: "/images/sleep-wellness.png",
    featured: false,
    tags: ["Sleep Health", "Sleep Disorders", "Wellness"],
  },
  {
    id: 8,
    title: "Stress Management Techniques",
    type: "Guide",
    category: "Mental Health",
    description: "Practical techniques and exercises for managing stress in daily life, backed by scientific research.",
    author: "Dr. Emily Rodriguez",
    readTime: "Download",
    date: "2023-12-28",
    image: "/images/meditation-wellness.png",
    featured: false,
    tags: ["Stress Management", "Mental Health", "Mindfulness"],
  },
]

const categories = [
  "All Categories",
  "Digital Health",
  "Mental Health",
  "Nutrition",
  "Fitness",
  "Occupational Health",
  "Preventive Care",
  "Sleep Health",
]
const types = ["All Types", "Article", "Video", "Guide", "Course", "Tool"]

const categoryIcons = {
  "Digital Health": Heart,
  "Mental Health": Brain,
  Nutrition: Apple,
  Fitness: Dumbbell,
  "Occupational Health": Shield,
  "Preventive Care": Shield,
  "Sleep Health": Heart,
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("All Types")

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All Categories" || resource.category === selectedCategory
    const matchesType = selectedType === "All Types" || resource.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const featuredResources = resources.filter((resource) => resource.featured)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Article":
        return FileText
      case "Video":
        return Video
      case "Guide":
        return BookOpen
      case "Course":
        return BookOpen
      case "Tool":
        return Download
      default:
        return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Article":
        return "bg-blue-100 text-blue-600"
      case "Video":
        return "bg-red-100 text-red-600"
      case "Guide":
        return "bg-green-100 text-green-600"
      case "Course":
        return "bg-purple-100 text-purple-600"
      case "Tool":
        return "bg-orange-100 text-orange-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Health Resources & Learning Center</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Access our comprehensive library of health resources, including articles, videos, guides, and tools
              created by our expert healthcare team to support your wellness journey.
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
                      <Input
                        placeholder="Search resources..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
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

      {/* Featured Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredResources.map((resource) => {
              const TypeIcon = getTypeIcon(resource.type)
              const CategoryIcon = categoryIcons[resource.category as keyof typeof categoryIcons] || Heart

              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getTypeColor(resource.type)}>
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {resource.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {resource.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {resource.author}
                      </div>
                      <Button className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Resources</h2>
            <Badge variant="secondary">{filteredResources.length} Resources Found</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const TypeIcon = getTypeIcon(resource.type)
              const CategoryIcon = categoryIcons[resource.category as keyof typeof categoryIcons] || Heart

              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={getTypeColor(resource.type)} size="sm">
                        <TypeIcon className="w-3 h-3 mr-1" />
                        {resource.type}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {resource.category}
                      </Badge>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {resource.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        {resource.author}
                      </div>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All Categories")
                  setSelectedType("All Types")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personalized Health Guidance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            While our resources provide valuable information, nothing replaces personalized medical advice. Connect with
            our healthcare providers for tailored guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <Button size="lg" variant="secondary">
                Take Free Assessment
              </Button>
            </Link>
            <Link href="/doctors">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
