"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, Shield, CheckCircle, ArrowRight, Lock, Calendar, Clock, User, DollarSign } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })

  // Mock appointment data (would come from booking flow)
  const appointmentData = {
    service: "Mental Health Session",
    doctor: "Dr. Emily Rodriguez",
    date: "December 15, 2024",
    time: "2:00 PM",
    duration: "60 minutes",
    price: 89,
    consultationType: "Video Call",
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentComplete(true)
    }, 3000)
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-800 mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">
              Your appointment has been confirmed and paid for. You'll receive a confirmation email shortly.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold mb-4">Payment Receipt:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="font-medium">TXN-{Date.now()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Paid:</span>
                  <span className="font-medium">${appointmentData.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span className="font-medium">•••• •••• •••• {cardInfo.number.slice(-4)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => (window.location.href = "/dashboard")}>Go to Dashboard</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Payment</h1>
          <p className="text-gray-600">Secure payment processing for your healthcare appointment</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Payment Method Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === "card" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <CreditCard className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-center">Credit Card</p>
                    </div>
                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === "paypal" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                      onClick={() => setPaymentMethod("paypal")}
                    >
                      <DollarSign className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-center">PayPal</p>
                    </div>
                    <div
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        paymentMethod === "insurance" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                      }`}
                      onClick={() => setPaymentMethod("insurance")}
                    >
                      <Shield className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm text-center">Insurance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card Details */}
              {paymentMethod === "card" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Card Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        value={cardInfo.name}
                        onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardInfo.number}
                        onChange={(e) => setCardInfo({ ...cardInfo, number: formatCardNumber(e.target.value) })}
                        maxLength={19}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={cardInfo.expiry}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "")
                            if (value.length >= 2) {
                              value = value.substring(0, 2) + "/" + value.substring(2, 4)
                            }
                            setCardInfo({ ...cardInfo, expiry: value })
                          }}
                          maxLength={5}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={cardInfo.cvv}
                          onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value.replace(/\D/g, "") })}
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* PayPal */}
              {paymentMethod === "paypal" && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-lg font-semibold mb-2">Pay with PayPal</h3>
                    <p className="text-gray-600 mb-4">You'll be redirected to PayPal to complete your payment</p>
                    <Button type="button" className="bg-blue-600 hover:bg-blue-700">
                      Continue to PayPal
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Insurance */}
              {paymentMethod === "insurance" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Insurance Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your insurance provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aetna">Aetna</SelectItem>
                          <SelectItem value="bluecross">Blue Cross Blue Shield</SelectItem>
                          <SelectItem value="cigna">Cigna</SelectItem>
                          <SelectItem value="humana">Humana</SelectItem>
                          <SelectItem value="united">UnitedHealthcare</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="memberId">Member ID</Label>
                      <Input id="memberId" placeholder="Enter your member ID" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="groupNumber">Group Number</Label>
                      <Input id="groupNumber" placeholder="Enter your group number" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Security Notice */}
              <Alert>
                <Lock className="h-4 w-4" />
                <AlertDescription>
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect
                  your data.
                </AlertDescription>
              </Alert>

              <Button type="submit" className="w-full" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing Payment...
                  </>
                ) : (
                  <>
                    Complete Payment ${appointmentData.price}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">{appointmentData.service}</p>
                      <p className="text-sm text-gray-600">{appointmentData.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <User className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">{appointmentData.doctor}</p>
                      <p className="text-sm text-gray-600">Licensed Therapist</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="font-medium">{appointmentData.date}</p>
                      <p className="text-sm text-gray-600">{appointmentData.time}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Consultation Fee</span>
                    <span>${appointmentData.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span>$5</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax</span>
                    <span>$7.52</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>${appointmentData.price + 5 + 7.52}</span>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Secure 256-bit SSL encryption</p>
                  <p>• HIPAA compliant payment processing</p>
                  <p>• 24/7 customer support</p>
                  <p>• Full refund if cancelled 24hrs before</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
