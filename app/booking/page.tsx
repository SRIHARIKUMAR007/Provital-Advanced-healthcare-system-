"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Clock } from "lucide-react"
import { Video, Brain, Apple, Dumbbell, Shield } from "lucide-react"
import Link from "next/link"

const doctors = [
  { id: "dr-1", name: "Dr. John Smith" },
  { id: "dr-2", name: "Dr. Alice Johnson" },
  { id: "dr-3", name: "Dr. Michael Brown" },
]

const services = [
  {
    id: "telemedicine",
    name: "Telemedicine",
    description: "Virtual consultation with a healthcare provider",
    icon: Video,
    duration: "30 min",
  },
  {
    id: "mental-health",
    name: "Mental Health",
    description: "Therapy and counseling services",
    icon: Brain,
    duration: "60 min",
  },
  {
    id: "nutrition",
    name: "Nutrition Therapy",
    description: "Dietary guidance and nutrition planning",
    icon: Apple,
    duration: "45 min",
  },
  {
    id: "fitness",
    name: "Fitness Programs",
    description: "Personalized exercise and fitness plans",
    icon: Dumbbell,
    duration: "60 min",
  },
  {
    id: "preventive",
    name: "Preventive Health",
    description: "Health screenings and preventive care",
    icon: Shield,
    duration: "90 min",
  },
]

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>(undefined)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)

  const canProceed = selectedDate && selectedTime && selectedDoctor && selectedService

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Book an Appointment</CardTitle>
          <CardDescription>Choose a date and time that works best for you.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* Service Selection */}
          <div>
            <Label htmlFor="service">Select Service</Label>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedService === service.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <service.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <Label>Select Date</Label>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          </div>

          {/* Time Selection */}
          <div>
            <Label htmlFor="time">Select Time</Label>
            <Select onValueChange={setSelectedTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Doctor Selection */}
          <div>
            <Label htmlFor="doctor">Select Doctor</Label>
            <Select onValueChange={setSelectedDoctor}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctors.map((doctor) => (
                  <SelectItem key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Link href="/payment" passHref>
            <Button className="w-full" disabled={!canProceed} asChild>
              <a>Proceed to Payment</a>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
