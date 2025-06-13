"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Clock,
  User,
  Heart,
  Activity,
  Bell,
  FileText,
  Video,
  Phone,
  MessageCircle,
  TrendingUp,
  Shield,
  Plus,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Get user data from localStorage (in real app, this would come from your auth system)
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Internal Medicine",
      date: "2024-01-20",
      time: "10:00 AM",
      type: "Video Call",
      status: "confirmed",
      image: "/images/doctor-female-1.png",
    },
    {
      id: 2,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Mental Health",
      date: "2024-01-22",
      time: "2:30 PM",
      type: "Phone Call",
      status: "pending",
      image: "/images/doctor-female-2.png",
    },
  ]

  const healthMetrics = [
    { name: "Blood Pressure", value: "120/80", status: "normal", trend: "stable" },
    { name: "Heart Rate", value: "72 bpm", status: "normal", trend: "improving" },
    { name: "Weight", value: "165 lbs", status: "normal", trend: "decreasing" },
    { name: "BMI", value: "24.1", status: "normal", trend: "stable" },
  ]

  const recentActivity = [
    { type: "appointment", message: "Completed consultation with Dr. Johnson", time: "2 hours ago" },
    { type: "health", message: "Blood pressure reading recorded", time: "1 day ago" },
    { type: "medication", message: "Medication reminder: Take vitamin D", time: "2 days ago" },
    { type: "report", message: "Lab results available for review", time: "3 days ago" },
  ]

  const healthGoals = [
    { name: "Daily Steps", current: 8500, target: 10000, unit: "steps" },
    { name: "Water Intake", current: 6, target: 8, unit: "glasses" },
    { name: "Sleep", current: 7.5, target: 8, unit: "hours" },
    { name: "Exercise", current: 4, target: 5, unit: "days/week" },
  ]

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Please log in to access your dashboard</h2>
            <Link href="/login">
              <Button>Go to Login</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name || "User"}!</h1>
          <p className="text-gray-600">Here's your health overview for today</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Next Appointment</p>
                      <p className="text-2xl font-bold">Today</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Health Score</p>
                      <p className="text-2xl font-bold">85/100</p>
                    </div>
                    <Heart className="h-8 w-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Goals</p>
                      <p className="text-2xl font-bold">4</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Medications</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                    <Shield className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <Link href="/booking" passHref>
                    <Button size="sm" asChild>
                      <a>
                        <Plus className="h-4 w-4 mr-2" />
                        Book New
                      </a>
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img
                          src={appointment.image || "/placeholder.svg"}
                          alt={appointment.doctor}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium">{appointment.doctor}</h4>
                          <p className="text-sm text-gray-600">{appointment.specialty}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              {appointment.date}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {appointment.time}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                          {appointment.status}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          {appointment.type === "Video Call" && <Video className="h-4 w-4" />}
                          {appointment.type === "Phone Call" && <Phone className="h-4 w-4" />}
                          {appointment.type === "Chat" && <MessageCircle className="h-4 w-4" />}
                        </div>
                        <Button size="sm" variant="outline">
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Health Metrics</CardTitle>
                <CardDescription>Your latest health measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{metric.name}</h4>
                        <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {metric.status}
                          </Badge>
                          <span className="text-xs text-gray-500">{metric.trend}</span>
                        </div>
                      </div>
                      <Activity className="h-8 w-8 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Health Goals Progress</CardTitle>
                <CardDescription>Track your daily health goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {healthGoals.map((goal, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{goal.name}</h4>
                        <span className="text-sm text-gray-600">
                          {goal.current} / {goal.target} {goal.unit}
                        </span>
                      </div>
                      <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/booking" passHref>
                  <Button className="w-full justify-start" asChild>
                    <a>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </a>
                  </Button>
                </Link>
                <Link href="/assessment">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Health Assessment
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Find Doctor
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                        {activity.type === "appointment" && <Calendar className="h-4 w-4 text-blue-600" />}
                        {activity.type === "health" && <Heart className="h-4 w-4 text-red-500" />}
                        {activity.type === "medication" && <Shield className="h-4 w-4 text-purple-500" />}
                        {activity.type === "report" && <FileText className="h-4 w-4 text-green-500" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Appointment Reminder</p>
                    <p className="text-xs text-blue-600">Your consultation is in 2 hours</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-green-800">Lab Results Ready</p>
                    <p className="text-xs text-green-600">Your blood test results are available</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm font-medium text-orange-800">Medication Reminder</p>
                    <p className="text-xs text-orange-600">Time to take your evening medication</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
