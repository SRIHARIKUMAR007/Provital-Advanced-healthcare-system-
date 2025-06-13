"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface AssessmentData {
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: string
    gender: string
  }
  healthHistory: {
    conditions: string[]
    medications: string
    allergies: string
    surgeries: string
  }
  lifestyle: {
    exercise: string
    smoking: string
    alcohol: string
    sleep: string
  }
  symptoms: {
    current: string[]
    description: string
    duration: string
  }
  goals: {
    primary: string
    secondary: string[]
  }
}

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
    },
    healthHistory: {
      conditions: [],
      medications: "",
      allergies: "",
      surgeries: "",
    },
    lifestyle: {
      exercise: "",
      smoking: "",
      alcohol: "",
      sleep: "",
    },
    symptoms: {
      current: [],
      description: "",
      duration: "",
    },
    goals: {
      primary: "",
      secondary: [],
    },
  })

  const [showResults, setShowResults] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any>(null)

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Assessment submitted:", assessmentData)

    // Analyze the assessment data
    const analysis = analyzeAssessment(assessmentData)
    setAnalysisResults(analysis)
    setShowResults(true)
  }

  const analyzeAssessment = (data: AssessmentData) => {
    const riskFactors = []
    const recommendations = []
    let overallScore = 85 // Base score

    // Analyze health history
    if (data.healthHistory.conditions.length > 2) {
      riskFactors.push("Multiple chronic conditions")
      overallScore -= 10
    }

    // Analyze lifestyle
    if (data.lifestyle.exercise === "never" || data.lifestyle.exercise === "rarely") {
      riskFactors.push("Insufficient physical activity")
      recommendations.push("Start with 30 minutes of walking daily")
      overallScore -= 15
    }

    if (data.lifestyle.smoking === "daily") {
      riskFactors.push("Smoking habit")
      recommendations.push("Consider smoking cessation programs")
      overallScore -= 20
    }

    if (data.lifestyle.sleep === "less-than-5" || data.lifestyle.sleep === "5-6") {
      riskFactors.push("Insufficient sleep")
      recommendations.push("Aim for 7-8 hours of sleep nightly")
      overallScore -= 10
    }

    // Analyze symptoms
    if (data.symptoms.current.length > 3) {
      riskFactors.push("Multiple active symptoms")
      recommendations.push("Schedule consultation with healthcare provider")
      overallScore -= 15
    }

    // Generate personalized recommendations
    if (data.goals.primary === "weight-loss") {
      recommendations.push("Consider nutrition therapy consultation")
      recommendations.push("Explore our fitness programs")
    }

    if (data.goals.primary === "mental-health") {
      recommendations.push("Book mental wellness consultation")
      recommendations.push("Try our stress management resources")
    }

    return {
      overallScore: Math.max(overallScore, 0),
      riskLevel: overallScore >= 80 ? "Low" : overallScore >= 60 ? "Moderate" : "High",
      riskFactors,
      recommendations,
      suggestedServices: getSuggestedServices(data),
      nextSteps: getNextSteps(overallScore, riskFactors),
    }
  }

  const getSuggestedServices = (data: AssessmentData) => {
    const services = []

    if (
      data.goals.primary === "mental-health" ||
      data.symptoms.current.includes("Anxiety") ||
      data.symptoms.current.includes("Depression")
    ) {
      services.push({ name: "Mental Wellness", href: "/services/mental-wellness", priority: "high" })
    }

    if (data.goals.primary === "weight-loss" || data.goals.primary === "nutrition") {
      services.push({ name: "Nutrition Therapy", href: "/services/nutrition-therapy", priority: "medium" })
    }

    if (data.lifestyle.exercise === "never" || data.goals.primary === "fitness") {
      services.push({ name: "Fitness Programs", href: "/services/fitness-programs", priority: "medium" })
    }

    if (data.symptoms.current.length > 0) {
      services.push({ name: "Telemedicine Consultation", href: "/services/telemedicine", priority: "high" })
    }

    services.push({ name: "Preventive Health Screening", href: "/services/preventive-health", priority: "low" })

    return services
  }

  const getNextSteps = (score: number, riskFactors: string[]) => {
    if (score >= 80) {
      return [
        "Continue maintaining your healthy lifestyle",
        "Schedule annual preventive health screening",
        "Consider ProHealth Premium for ongoing monitoring",
      ]
    } else if (score >= 60) {
      return [
        "Schedule consultation with healthcare provider",
        "Address identified risk factors",
        "Consider lifestyle modifications",
        "Book follow-up assessment in 3 months",
      ]
    } else {
      return [
        "Immediate consultation recommended",
        "Address multiple risk factors urgently",
        "Consider comprehensive health evaluation",
        "Follow up within 1 month",
      ]
    }
  }

  const updatePersonalInfo = (field: string, value: string) => {
    setAssessmentData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }))
  }

  const updateHealthHistory = (field: string, value: string | string[]) => {
    setAssessmentData((prev) => ({
      ...prev,
      healthHistory: { ...prev.healthHistory, [field]: value },
    }))
  }

  const updateLifestyle = (field: string, value: string) => {
    setAssessmentData((prev) => ({
      ...prev,
      lifestyle: { ...prev.lifestyle, [field]: value },
    }))
  }

  const updateSymptoms = (field: string, value: string | string[]) => {
    setAssessmentData((prev) => ({
      ...prev,
      symptoms: { ...prev.symptoms, [field]: value },
    }))
  }

  const updateGoals = (field: string, value: string | string[]) => {
    setAssessmentData((prev) => ({
      ...prev,
      goals: { ...prev.goals, [field]: value },
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Free Health Assessment</h1>
          <p className="text-gray-600">
            Get personalized health insights and recommendations based on your unique profile
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Health History"}
              {currentStep === 3 && "Lifestyle Factors"}
              {currentStep === 4 && "Current Symptoms"}
              {currentStep === 5 && "Health Goals"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "Share your medical background"}
              {currentStep === 3 && "Help us understand your daily habits"}
              {currentStep === 4 && "Describe any current health concerns"}
              {currentStep === 5 && "What would you like to achieve?"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={assessmentData.personalInfo.firstName}
                      onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={assessmentData.personalInfo.lastName}
                      onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={assessmentData.personalInfo.email}
                    onChange={(e) => updatePersonalInfo("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={assessmentData.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={assessmentData.personalInfo.dateOfBirth}
                      onChange={(e) => updatePersonalInfo("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <Select
                      value={assessmentData.personalInfo.gender}
                      onValueChange={(value) => updatePersonalInfo("gender", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Health History */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Do you have any of the following conditions? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Diabetes",
                      "High Blood Pressure",
                      "Heart Disease",
                      "Asthma",
                      "Arthritis",
                      "Depression",
                      "Anxiety",
                      "Other",
                    ].map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={condition}
                          checked={assessmentData.healthHistory.conditions.includes(condition)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateHealthHistory("conditions", [...assessmentData.healthHistory.conditions, condition])
                            } else {
                              updateHealthHistory(
                                "conditions",
                                assessmentData.healthHistory.conditions.filter((c) => c !== condition),
                              )
                            }
                          }}
                        />
                        <Label htmlFor={condition}>{condition}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea
                    id="medications"
                    placeholder="List any medications you're currently taking..."
                    value={assessmentData.healthHistory.medications}
                    onChange={(e) => updateHealthHistory("medications", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    placeholder="List any known allergies..."
                    value={assessmentData.healthHistory.allergies}
                    onChange={(e) => updateHealthHistory("allergies", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="surgeries">Previous Surgeries</Label>
                  <Textarea
                    id="surgeries"
                    placeholder="List any previous surgeries or major medical procedures..."
                    value={assessmentData.healthHistory.surgeries}
                    onChange={(e) => updateHealthHistory("surgeries", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Lifestyle Factors */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>How often do you exercise?</Label>
                  <RadioGroup
                    value={assessmentData.lifestyle.exercise}
                    onValueChange={(value) => updateLifestyle("exercise", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="exercise-never" />
                      <Label htmlFor="exercise-never">Never</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rarely" id="exercise-rarely" />
                      <Label htmlFor="exercise-rarely">Rarely (1-2 times per month)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sometimes" id="exercise-sometimes" />
                      <Label htmlFor="exercise-sometimes">Sometimes (1-2 times per week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regularly" id="exercise-regularly" />
                      <Label htmlFor="exercise-regularly">Regularly (3-4 times per week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="exercise-daily" />
                      <Label htmlFor="exercise-daily">Daily</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Do you smoke?</Label>
                  <RadioGroup
                    value={assessmentData.lifestyle.smoking}
                    onValueChange={(value) => updateLifestyle("smoking", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="smoke-never" />
                      <Label htmlFor="smoke-never">Never</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="former" id="smoke-former" />
                      <Label htmlFor="smoke-former">Former smoker</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="occasionally" id="smoke-occasionally" />
                      <Label htmlFor="smoke-occasionally">Occasionally</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="smoke-daily" />
                      <Label htmlFor="smoke-daily">Daily</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>How often do you drink alcohol?</Label>
                  <RadioGroup
                    value={assessmentData.lifestyle.alcohol}
                    onValueChange={(value) => updateLifestyle("alcohol", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="alcohol-never" />
                      <Label htmlFor="alcohol-never">Never</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rarely" id="alcohol-rarely" />
                      <Label htmlFor="alcohol-rarely">Rarely</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="socially" id="alcohol-socially" />
                      <Label htmlFor="alcohol-socially">Socially (1-2 drinks per week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="regularly" id="alcohol-regularly" />
                      <Label htmlFor="alcohol-regularly">Regularly (3-7 drinks per week)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="alcohol-daily" />
                      <Label htmlFor="alcohol-daily">Daily</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>How many hours of sleep do you get per night?</Label>
                  <RadioGroup
                    value={assessmentData.lifestyle.sleep}
                    onValueChange={(value) => updateLifestyle("sleep", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="less-than-5" id="sleep-less-than-5" />
                      <Label htmlFor="sleep-less-than-5">Less than 5 hours</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5-6" id="sleep-5-6" />
                      <Label htmlFor="sleep-5-6">5-6 hours</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="7-8" id="sleep-7-8" />
                      <Label htmlFor="sleep-7-8">7-8 hours</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="more-than-8" id="sleep-more-than-8" />
                      <Label htmlFor="sleep-more-than-8">More than 8 hours</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Step 4: Current Symptoms */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Are you currently experiencing any of the following symptoms? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Headaches",
                      "Fatigue",
                      "Joint Pain",
                      "Back Pain",
                      "Chest Pain",
                      "Shortness of Breath",
                      "Dizziness",
                      "Nausea",
                      "Sleep Problems",
                      "Anxiety",
                      "Depression",
                      "Other",
                    ].map((symptom) => (
                      <div key={symptom} className="flex items-center space-x-2">
                        <Checkbox
                          id={symptom}
                          checked={assessmentData.symptoms.current.includes(symptom)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateSymptoms("current", [...assessmentData.symptoms.current, symptom])
                            } else {
                              updateSymptoms(
                                "current",
                                assessmentData.symptoms.current.filter((s) => s !== symptom),
                              )
                            }
                          }}
                        />
                        <Label htmlFor={symptom}>{symptom}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptomDescription">Please describe your symptoms in detail</Label>
                  <Textarea
                    id="symptomDescription"
                    placeholder="Describe any symptoms you're experiencing, their severity, and how they affect your daily life..."
                    value={assessmentData.symptoms.description}
                    onChange={(e) => updateSymptoms("description", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>How long have you been experiencing these symptoms?</Label>
                  <Select
                    value={assessmentData.symptoms.duration}
                    onValueChange={(value) => updateSymptoms("duration", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-week">Less than a week</SelectItem>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1-month">About a month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="6-months">About 6 months</SelectItem>
                      <SelectItem value="more-than-year">More than a year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 5: Health Goals */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>What is your primary health goal?</Label>
                  <Select value={assessmentData.goals.primary} onValueChange={(value) => updateGoals("primary", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="weight-gain">Weight Gain</SelectItem>
                      <SelectItem value="fitness">Improve Fitness</SelectItem>
                      <SelectItem value="nutrition">Better Nutrition</SelectItem>
                      <SelectItem value="mental-health">Mental Health</SelectItem>
                      <SelectItem value="chronic-condition">Manage Chronic Condition</SelectItem>
                      <SelectItem value="preventive-care">Preventive Care</SelectItem>
                      <SelectItem value="stress-management">Stress Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>What other health goals are important to you? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Better Sleep",
                      "More Energy",
                      "Pain Management",
                      "Heart Health",
                      "Mental Clarity",
                      "Immune Support",
                      "Digestive Health",
                      "Skin Health",
                    ].map((goal) => (
                      <div key={goal} className="flex items-center space-x-2">
                        <Checkbox
                          id={goal}
                          checked={assessmentData.goals.secondary.includes(goal)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateGoals("secondary", [...assessmentData.goals.secondary, goal])
                            } else {
                              updateGoals(
                                "secondary",
                                assessmentData.goals.secondary.filter((g) => g !== goal),
                              )
                            }
                          }}
                        />
                        <Label htmlFor={goal}>{goal}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Complete Assessment
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {showResults && analysisResults && (
          <Card className="mt-8">
            <CardHeader className="text-center">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-4 ${
                  analysisResults.riskLevel === "Low"
                    ? "bg-green-100"
                    : analysisResults.riskLevel === "Moderate"
                      ? "bg-yellow-100"
                      : "bg-red-100"
                }`}
              >
                <div
                  className={`text-3xl font-bold ${
                    analysisResults.riskLevel === "Low"
                      ? "text-green-600"
                      : analysisResults.riskLevel === "Moderate"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {analysisResults.overallScore}
                </div>
              </div>
              <CardTitle className="text-2xl">Your Health Assessment Results</CardTitle>
              <CardDescription>Based on your responses, here's your personalized health analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Overall Score */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Overall Health Score</h3>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl font-bold text-blue-600">{analysisResults.overallScore}/100</div>
                  <Badge
                    variant={
                      analysisResults.riskLevel === "Low"
                        ? "default"
                        : analysisResults.riskLevel === "Moderate"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {analysisResults.riskLevel} Risk
                  </Badge>
                </div>
              </div>

              {/* Risk Factors */}
              {analysisResults.riskFactors.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Identified Risk Factors</h3>
                  <div className="space-y-2">
                    {analysisResults.riskFactors.map((factor: string, index: number) => (
                      <div key={index} className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-red-800">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Personalized Recommendations</h3>
                <div className="space-y-2">
                  {analysisResults.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-blue-800">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Services */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Recommended Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {analysisResults.suggestedServices.map((service: any, index: number) => (
                    <Card
                      key={index}
                      className={`${service.priority === "high" ? "border-red-200 bg-red-50" : service.priority === "medium" ? "border-yellow-200 bg-yellow-50" : "border-gray-200"}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{service.name}</h4>
                          <Badge
                            variant={
                              service.priority === "high"
                                ? "destructive"
                                : service.priority === "medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {service.priority} priority
                          </Badge>
                        </div>
                        <Link href={service.href}>
                          <Button size="sm" className="mt-2 w-full">
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                <div className="space-y-2">
                  {analysisResults.nextSteps.map((step: string, index: number) => (
                    <div key={index} className="flex items-start p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm font-bold mr-3 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-green-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <Link href="/booking" className="flex-1">
                  <Button className="w-full">Book Consultation</Button>
                </Link>
                <Link href="/doctors" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Find Doctor
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => setShowResults(false)}>
                  Retake Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
