"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Bell,
  Menu,
  X,
  Heart,
  Brain,
  Dumbbell,
  Apple,
  Shield,
  Building2,
  Video,
  Phone,
  Activity,
} from "lucide-react"
import "./navbar.css"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications] = useState(3)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <Heart className="navbar-logo-svg" />
            </div>
            <span className="navbar-logo-text">Provital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            <div className="navbar-menu-item">
              <button
                className="navbar-menu-trigger"
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
              >
                Services
              </button>
              {servicesMenuOpen && (
                <div
                  className="navbar-dropdown"
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                >
                  <div className="navbar-dropdown-grid">
                    <div>
                      <h4 className="navbar-dropdown-heading">Digital Health</h4>
                      <Link href="/services/telemedicine" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Video className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">Telemedicine</div>
                            <p className="navbar-dropdown-link-desc">
                              HD video consultations with healthcare providers
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services/teleconsultation" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Phone className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">Teleconsultation</div>
                            <p className="navbar-dropdown-link-desc">Phone and chat consultations</p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div>
                      <h4 className="navbar-dropdown-heading">Wellness & Prevention</h4>
                      <Link href="/services/preventive-health" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Shield className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">Preventive Health</div>
                            <p className="navbar-dropdown-link-desc">Health screenings and prevention programs</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services/mental-wellness" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Brain className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">Mental Wellness</div>
                            <p className="navbar-dropdown-link-desc">Therapy and mental health support</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services/nutrition-therapy" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Apple className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">Nutrition Therapy</div>
                            <p className="navbar-dropdown-link-desc">Personalized nutrition plans</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services/fitness-programs" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Dumbbell className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">Fitness Programs</div>
                            <p className="navbar-dropdown-link-desc">Personal training and fitness plans</p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div>
                      <h4 className="navbar-dropdown-heading">Premium & Corporate</h4>
                      <Link href="/services/prohealth" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Activity className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">ProHealth Premium</div>
                            <p className="navbar-dropdown-link-desc">AI-powered comprehensive health management</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/services/occupational-healthcare" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-content">
                          <Building2 className="navbar-dropdown-icon" />
                          <div className="navbar-dropdown-link-text">
                            <div className="navbar-dropdown-link-title">Occupational Healthcare</div>
                            <p className="navbar-dropdown-link-desc">Workplace health and safety solutions</p>
                          </div>
                        </div>
                      </Link>
                      <div className="navbar-dropdown-footer">
                        <Link href="/services" className="navbar-dropdown-link navbar-dropdown-link-all">
                          <div className="navbar-dropdown-link-title text-blue">View All Services →</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="navbar-menu-item">
              <button
                className="navbar-menu-trigger"
                onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}
                onMouseEnter={() => setResourcesMenuOpen(true)}
                onMouseLeave={() => setResourcesMenuOpen(false)}
              >
                Resources
              </button>
              {resourcesMenuOpen && (
                <div
                  className="navbar-dropdown navbar-dropdown-small"
                  onMouseEnter={() => setResourcesMenuOpen(true)}
                  onMouseLeave={() => setResourcesMenuOpen(false)}
                >
                  <div className="navbar-dropdown-grid navbar-dropdown-grid-small">
                    <div>
                      <h4 className="navbar-dropdown-heading">Learn & Explore</h4>
                      <Link href="/resources" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-text">
                          <div className="navbar-dropdown-link-title">Health Library</div>
                          <p className="navbar-dropdown-link-desc">Articles, videos, and guides</p>
                        </div>
                      </Link>
                      <Link href="/resources?type=tool" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-text">
                          <div className="navbar-dropdown-link-title">Health Tools</div>
                          <p className="navbar-dropdown-link-desc">Interactive health calculators</p>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h4 className="navbar-dropdown-heading">Support</h4>
                      <Link href="/contact" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-text">
                          <div className="navbar-dropdown-link-title">Contact Support</div>
                          <p className="navbar-dropdown-link-desc">Get help from our team</p>
                        </div>
                      </Link>
                      <Link href="/resources?category=guides" className="navbar-dropdown-link">
                        <div className="navbar-dropdown-link-text">
                          <div className="navbar-dropdown-link-title">User Guides</div>
                          <p className="navbar-dropdown-link-desc">How to use our platform</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/doctors" className="navbar-menu-link">
              Doctors
            </Link>

            <Link href="/about" className="navbar-menu-link">
              About
            </Link>

            <Link href="/dashboard" className="navbar-menu-link">
              Dashboard
            </Link>
          </div>

          {/* Search Bar */}
          <div className="navbar-actions">
            <form onSubmit={handleSearch} className="navbar-search">
              <Search className="navbar-search-icon" />
              <input
                type="search"
                placeholder="Search health topics..."
                className="navbar-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Notifications */}
            <div className="navbar-notifications">
              <button className="navbar-notifications-button">
                <Bell className="navbar-notifications-icon" />
                {notifications > 0 && <span className="navbar-notifications-badge">{notifications}</span>}
              </button>
              <div className="navbar-notifications-dropdown">
                <div className="navbar-notification-item">
                  <div className="navbar-notification-content">
                    <p className="navbar-notification-title">Appointment Reminder</p>
                    <p className="navbar-notification-desc">Your consultation with Dr. Smith is tomorrow at 2 PM</p>
                  </div>
                </div>
                <div className="navbar-notification-item">
                  <div className="navbar-notification-content">
                    <p className="navbar-notification-title">Health Report Ready</p>
                    <p className="navbar-notification-desc">Your latest blood test results are available</p>
                  </div>
                </div>
                <div className="navbar-notification-item">
                  <div className="navbar-notification-content">
                    <p className="navbar-notification-title">Wellness Tip</p>
                    <p className="navbar-notification-desc">Don't forget to take your daily vitamins</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/assessment">
              <button className="btn btn-outline">Free Assessment</button>
            </Link>
            <Link href="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="navbar-mobile-icon" /> : <Menu className="navbar-mobile-icon" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navbar-mobile">
            <div className="navbar-mobile-content">
              <form onSubmit={handleSearch} className="navbar-mobile-search">
                <Search className="navbar-search-icon" />
                <input
                  type="search"
                  placeholder="Search health topics..."
                  className="navbar-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

              <div className="navbar-mobile-links">
                <Link href="/services" className="navbar-mobile-link">
                  Services
                </Link>
                <Link href="/resources" className="navbar-mobile-link">
                  Resources
                </Link>
                <Link href="/doctors" className="navbar-mobile-link">
                  Doctors
                </Link>
                <Link href="/about" className="navbar-mobile-link">
                  About
                </Link>
                <Link href="/assessment" className="navbar-mobile-link">
                  Free Assessment
                </Link>
                <Link href="/login" className="navbar-mobile-link">
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
