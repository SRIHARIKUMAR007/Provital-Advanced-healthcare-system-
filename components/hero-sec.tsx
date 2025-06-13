"use client"
import Link from "next/link"
import { ArrowRight, Play, Shield, Clock, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 slide-up">
            <div className="space-y-4">
              <div className="badge badge-secondary fade-in">🚀 Advanced Healthcare Technology</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Advanced Healthcare Technology <span className="text-blue">Meets Personalized Care</span>
              </h1>
              <p className="text-xl text-secondary">
                Experience the future of healthcare with our comprehensive platform offering telemedicine, preventive
                care, mental wellness, and AI-powered health insights tailored just for you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment">
                <button className="btn btn-primary">
                  Start Free Assessment
                  <ArrowRight className="ml-2" style={{ width: "1rem", height: "1rem" }} />
                </button>
              </Link>
              <button className="btn btn-secondary">
                <Play style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                Watch Demo
              </button>
            </div>

            <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", paddingTop: "2rem" }}>
              <div className="text-center">
                <div className="service-icon mx-auto">
                  <Shield style={{ width: "1.5rem", height: "1.5rem", color: "var(--primary-blue)" }} />
                </div>
                <p className="text-sm font-medium">HIPAA Compliant</p>
              </div>
              <div className="text-center">
                <div className="service-icon mx-auto">
                  <Clock style={{ width: "1.5rem", height: "1.5rem", color: "var(--primary-blue)" }} />
                </div>
                <p className="text-sm font-medium">24/7 Available</p>
              </div>
              <div className="text-center">
                <div className="service-icon mx-auto">
                  <Users style={{ width: "1.5rem", height: "1.5rem", color: "var(--primary-blue)" }} />
                </div>
                <p className="text-sm font-medium">Expert Doctors</p>
              </div>
            </div>
          </div>

          <div className="relative fade-in">
            <div className="relative z-10">
              <img
                src="/images/doctor-consultation.png"
                alt="Healthcare Technology Dashboard"
                className="rounded-2xl shadow-xl"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              className="absolute"
              style={{
                top: "-1rem",
                right: "-1rem",
                width: "18rem",
                height: "18rem",
                background: "#bfdbfe",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                filter: "blur(24px)",
                opacity: "0.7",
              }}
            ></div>
            <div
              className="absolute"
              style={{
                bottom: "-2rem",
                left: "-1rem",
                width: "18rem",
                height: "18rem",
                background: "#a7f3d0",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                filter: "blur(24px)",
                opacity: "0.7",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
