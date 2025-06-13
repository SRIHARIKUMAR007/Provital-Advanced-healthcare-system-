import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import "./footer.css"

export function Footer() {
  const services = [
    { name: "Telemedicine", href: "/services/telemedicine" },
    { name: "Teleconsultation", href: "/services/telec onsultation" },
    { name: "Mental Wellness", href: "/services/mental-wellness" },
    { name: "Nutrition Therapy", href: "/services/nutrition-therapy" },
    { name: "Fitness Programs", href: "/services/fitness-programs" },
    { name: "Preventive Health", href: "/services/preventive-health" },
    { name: "Occupational Healthcare", href: "/services/occupational-healthcare" },
    { name: "ProHealth Premium", href: "/services/prohealth" },
  ]

  const resources = [
    { name: "Health Library", href: "/resources" },
    { name: "Health Tools", href: "/resources?type=tool" },
    { name: "User Guides", href: "/resources?category=guides" },
    { name: "FAQs", href: "/resources?category=faqs" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Heart className="footer-logo-svg" />
              </div>
              <span className="footer-logo-text">Provital</span>
            </Link>
            <p className="footer-tagline">Advanced Healthcare Technology Meets Personalized Care</p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Facebook className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin className="footer-social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-list">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link href={resource.href} className="footer-link">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>support@provital.health</span>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>123 Health Avenue, San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} Provital Health. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-bottom-link">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="footer-bottom-link">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
