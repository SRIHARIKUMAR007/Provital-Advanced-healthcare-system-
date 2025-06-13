# 🏥 Provital Healthcare Platform

A comprehensive, AI-powered healthcare platform built with Next.js, featuring telemedicine, appointment booking, payment processing, and an intelligent health assistant.

## ✨ Features

### 🩺 Healthcare Services
- **Telemedicine Consultations** - Video/phone consultations with licensed providers
- **Mental Health Support** - Individual and group therapy sessions
- **Nutrition Therapy** - Personalized meal plans and dietary counseling
- **Fitness Programs** - Personal training and wellness programs
- **Preventive Care** - Health screenings and wellness programs
- **Occupational Healthcare** - Workplace health solutions

### 🤖 AI Health Assistant
- **24/7 Availability** - Intelligent health guidance anytime
- **Symptom Assessment** - Advanced symptom analysis and triage
- **Emergency Detection** - Automatic emergency situation recognition
- **Medication Information** - Drug interactions and side effects
- **Appointment Booking** - AI-powered scheduling assistance

### 💳 Payment & Booking
- **Secure Payment Processing** - Multiple payment methods supported
- **Insurance Integration** - Direct insurance billing
- **Flexible Scheduling** - Same-day and advance booking options
- **Pricing Transparency** - Clear, upfront pricing for all services

### 📱 Modern Features
- **Responsive Design** - Optimized for all devices
- **Progressive Web App** - App-like experience on mobile
- **Real-time Chat** - Instant communication with providers
- **Health Records** - Secure medical record management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/provital-healthcare.git
   cd provital-healthcare
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## 🌐 Deployment

### GitHub Pages Deployment

1. **Fork this repository**

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

3. **Access your site**
   \`\`\`
   https://yourusername.github.io/provital-healthcare/
   \`\`\`

### Manual Deployment

\`\`\`bash
# Build for production
npm run build

# Export static files
npm run export

# Deploy the 'out' folder to your hosting provider
\`\`\`

## 📁 Project Structure

\`\`\`
provital-healthcare/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Page components
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── ai-assistant.tsx  # AI chat component
│   └── navbar.tsx        # Navigation
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── manifest.json    # PWA manifest
├── .github/             # GitHub workflows
└── README.md
\`\`\`

## 🛠️ Technology Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Deployment:** GitHub Pages
- **AI:** Custom healthcare AI assistant

## 💰 Service Pricing

| Service | Duration | Price |
|---------|----------|-------|
| Teleconsultation | 15-45 min | $39-69 |
| Telemedicine | 30-60 min | $49-89 |
| Mental Health | 45-60 min | $89-129 |
| Nutrition Therapy | 45-60 min | $79 |
| Fitness Programs | 45-90 min | $69 |
| Preventive Care | 60-120 min | $99-199 |

## 🔒 Security & Compliance

- **HIPAA Compliant** - Healthcare data protection
- **SSL Encryption** - Secure data transmission
- **Privacy First** - User data protection
- **Secure Payments** - PCI DSS compliant processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email:** support@provital.com
- **Phone:** 1-800-PROVITAL
- **Chat:** Available 24/7 through the AI assistant

## 🌟 Acknowledgments

- Built with ❤️ for better healthcare access
- Powered by advanced AI technology
- Designed for healthcare professionals and patients

---

**Made with ❤️ by the Provital Team**
\`\`\`

Now let me update the services with detailed pricing pages:

```typescriptreact file="app/services/mental-wellness/page.tsx"
[v0-no-op-code-block-prefix]import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Heart, Users, Shield, CheckCircle, ArrowRight, Calendar, MessageCircle } from 'lucide-react'

export default function MentalWellnessPage() {
  const features = [
    {
      icon: Brain,
      title: "Professional Therapy",
      description: "Licensed therapists and counselors available for individual and group sessions.",
    },
    {
      icon: Heart,
      title: "Stress Management",
      description: "Evidence-based techniques to help you manage stress and improve mental resilience.",
    },
    {
      icon: Users,
      title: "Group Support",
      description: "Connect with others in supportive group therapy sessions and peer support networks.",
    },
    {
      icon: Shield,
      title: "Confidential Care",
      description: "All sessions are completely confidential and conducted in a safe, judgment-free environment.",
    },
  ]

  const services = [
    "Individual Therapy Sessions",
    "Group Therapy Programs",
    "Stress Management Workshops",
    "Mindfulness & Meditation",
    "Cognitive Behavioral Therapy",
    "Crisis Intervention Support",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-up">
              <Badge variant="secondary" className="w-fit">
                🧠 Mental Wellness Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold">Your Mental Health Matters</h1>
              <p className="text-xl text-secondary leading-relaxed">
                Professional mental health support designed to help you thrive. Our licensed therapists and counselors
                provide personalized care for anxiety, depression, stress management, and overall mental wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/assessment">
                  <button className="btn-primary">
                    Book Session
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="relative fade-in">
              <img src="/images/meditation-wellness.png" alt="Mental Wellness and Meditation" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Mental Health Support</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Our mental wellness platform provides a full range of services to support your mental health journey.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card text-center scale-hover fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-content">
                  <div className="service-icon mx-auto">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mental Health Pricing</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Transparent, affordable pricing for professional mental health support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="card-content">
                <h3 className="text-2xl font-bold mb-2">Individual Therapy</h3>
                <div className="text-4xl font-bold text-primary mb-4">$89</div>
                <p className="text-secondary mb-6">per 60-minute session</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />One-on-one therapy</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Licensed therapists</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Video or in-person</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Personalized treatment</li>
                </ul>
                <Link href="/booking">
                  <button className="btn-primary w-full">Book Session</button>
                </Link>
              </div>
            </div>

            <div className="card text-center border-2 border-primary">
              <div className="card-content">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-sm mb-4 w-fit mx-auto">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2">Group Therapy</h3>
                <div className="text-4xl font-bold text-primary mb-4">$45</div>
                <p className="text-secondary mb-6">per 90-minute session</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Small group setting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Peer support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Specialized topics</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Expert facilitation</li>
                </ul>
                <Link href="/booking">
                  <button className="btn-primary w-full">Join Group</button>
                </Link>
              </div>
            </div>

            <div className="card text-center">
              <div className="card-content">
                <h3 className="text-2xl font-bold mb-2">Crisis Support</h3>
                <div className="text-4xl font-bold text-primary mb-4">$150</div>
                <p className="text-secondary mb-6">per emergency session</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />24/7 availability</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Immediate response</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Crisis intervention</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Safety planning</li>
                </ul>
                <Link href="/booking">
                  <button className="btn-primary w-full">Get Help Now</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary mb-4">Insurance accepted • Flexible payment plans available</p>
            <p className="text-sm text-gray-500">HSA/FSA eligible • No hidden fees</p>
          </div>
        </div>
      </section>

      {/* Group Therapy Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img src="/images/group-therapy.png" alt="Group Therapy Session" className="hero-image" />
            </div>
            <div className="space-y-6 slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold">Group Therapy & Support</h2>
              <p className="text-xl text-secondary">
                Connect with others who understand your journey. Our group therapy sessions provide a supportive
                environment where you can share experiences and learn from others facing similar challenges.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <Link href="/assessment">
                <button className="btn-primary">
                  Join Support Group
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Mental Wellness Works</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Getting mental health support is simple and confidential with our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="service-icon mx-auto">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">1. Schedule Session</h3>
              <p className="card-description">
                Book your appointment with a licensed therapist at a time that works for you.
              </p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="service-icon mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">2. Connect Securely</h3>
              <p className="card-description">Join your session through our secure, HIPAA-compliant video platform.</p>
            </div>
            <div className="text-center fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="service-icon mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="card-title">3. Begin Healing</h3>
              <p className="card-description">
                Work with your therapist to develop coping strategies and improve your mental wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Take the First Step Towards Better Mental Health</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your mental health journey starts with a single step. Our compassionate team is here to support you every
            step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
                Start Free Assessment
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
