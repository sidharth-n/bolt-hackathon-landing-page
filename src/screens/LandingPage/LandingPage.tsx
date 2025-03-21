import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"

// Create a function to generate random logos for track supporters
const getRandomLogos = count => {
  const sponsorLogos = [
    "sponser-logos/cloudfare.webp",
    "sponser-logos/loops.jpg",
    "sponser-logos/superBase.png",
    "sponser-logos/netlify.png",
    "sponser-logos/getsentry.jpeg",
    "sponser-logos/algorandfoundation.jpeg",
  ]

  // Shuffle array and get random elements
  return [...sponsorLogos].sort(() => 0.5 - Math.random()).slice(0, count)
}

// Updated track data with 6 tracks, $50,000 total prize, and random logos
const trackData = [
  {
    id: "ai",
    name: "AI Advancement",
    icon: "🧠",
    prize: "$15,000",
    description:
      "Advanced AI systems and techniques that push the boundaries of agent capabilities and autonomous decision-making.",
    supporters: getRandomLogos(2),
  },
  {
    id: "social",
    name: "Social",
    icon: "👥",
    prize: "$10,000",
    description:
      "Social agents that facilitate community engagement, moderation, and coordination in online spaces.",
    supporters: getRandomLogos(3),
  },
  {
    id: "data",
    name: "Data Agents",
    icon: "🔄",
    prize: "$8,000",
    description:
      "Agents for data collection, analysis, transformation, and insights generation across various domains.",
    supporters: getRandomLogos(2),
  },
  {
    id: "dev",
    name: "Developer Tools",
    icon: "🛠️",
    prize: "$7,000",
    description:
      "Tools and agents that enhance developer productivity, code quality, and software development workflows.",
    supporters: getRandomLogos(2),
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "🎮",
    prize: "$5,000",
    description:
      "Game agents, NPCs with advanced behaviors, and AI systems that enhance gaming experiences.",
    supporters: getRandomLogos(3),
  },
  {
    id: "web3",
    name: "Web3",
    icon: "🌐",
    prize: "$5,000",
    description:
      "Agents that interface with blockchain protocols, smart contracts, and decentralized applications.",
    supporters: getRandomLogos(3),
  },
]

// Update judges with real images and X (Twitter) links
const judgesData = [
  {
    id: 1,
    name: "Evan You",
    title: "Creator of Vue.js",
    image: "/judges/evan-you.jpeg",
    xLink: "https://x.com/youyuxi?s=11",
  },
  {
    id: 2,
    name: "Pieter Levels",
    title: "Founder, Nomad List",
    image: "/judges/levelsio.jpeg",
    xLink: "https://x.com/levelsio?s=11",
  },
  {
    id: 3,
    name: "Logan Kilpatrick",
    title: "Developer Relations, OpenAI",
    image: "/judges/logan-kilpatrick.jpeg",
    xLink: "https://x.com/officiallogank?s=11",
  },
  {
    id: 4,
    name: "Sarah Guo",
    title: "Founder, Conviction",
    image: "/judges/sarah-guo.jpeg",
    xLink: "https://x.com/saranormous?s=11",
  },
  {
    id: 5,
    name: "Theo",
    title: "Founder, t3.gg",
    image: "/judges/theo.jpeg",
    xLink: "https://x.com/theo?s=11",
  },
  {
    id: 6,
    name: "KP",
    title: "Engineering Leader",
    image: "/judges/kp.jpg",
    xLink: "https://x.com/thisiskp_?s=11",
  },
]

// Use the actual image files from public/sponsor-logos with their correct company names
const sponsorsData = [
  { id: 1, logo: "sponser-logos/cloudfare.webp", name: "Cloudflare" },
  { id: 2, logo: "sponser-logos/netlify.png", name: "Netlify" },
  { id: 3, logo: "sponser-logos/loops.jpg", name: "Loops" },
  {
    id: 4,
    logo: "sponser-logos/algorandfoundation.jpeg",
    name: "Algorand Foundation",
  },
  { id: 5, logo: "sponser-logos/getsentry.jpeg", name: "Sentry" },
  { id: 6, logo: "sponser-logos/superBase.png", name: "Supabase" },
  { id: 7, logo: "sponser-logos/netlify.png", name: "Netlify" },
  { id: 8, logo: "sponser-logos/getsentry.jpeg", name: "Sentry" },
  { id: 9, logo: "sponser-logos/superBase.png", name: "Supabase" },
  { id: 10, logo: "sponser-logos/loops.jpg", name: "Loops" },
  { id: 11, logo: "sponser-logos/cloudfare.webp", name: "Cloudflare" },
  {
    id: 12,
    logo: "sponser-logos/algorandfoundation.jpeg",
    name: "Algorand Foundation",
  },
  { id: 13, logo: "sponser-logos/superBase.png", name: "Supabase" },
  { id: 14, logo: "sponser-logos/getsentry.jpeg", name: "Sentry" },
  { id: 15, logo: "sponser-logos/netlify.png", name: "Netlify" },
  {
    id: 16,
    logo: "sponser-logos/algorandfoundation.jpeg",
    name: "Algorand Foundation",
  },
  { id: 17, logo: "sponser-logos/loops.jpg", name: "Loops" },
  { id: 18, logo: "sponser-logos/cloudfare.webp", name: "Cloudflare" },
  { id: 19, logo: "sponser-logos/getsentry.jpeg", name: "Sentry" },
  { id: 20, logo: "sponser-logos/superBase.png", name: "Supabase" },
  { id: 21, logo: "sponser-logos/netlify.png", name: "Netlify" },
  {
    id: 22,
    logo: "sponser-logos/algorandfoundation.jpeg",
    name: "Algorand Foundation",
  },
  { id: 23, logo: "sponser-logos/loops.jpg", name: "Loops" },
  { id: 24, logo: "sponser-logos/cloudfare.webp", name: "Cloudflare" },
]

export const LandingPage = () => {
  // State to track the currently selected track
  const [selectedTrack, setSelectedTrack] = useState(trackData[0])

  // New states and refs for prize counter animation
  const [prizeValue, setPrizeValue] = useState(0)
  const [showFinalValue, setShowFinalValue] = useState(false)
  const prizeRef = useRef(null)
  const animationStarted = useRef(false)

  // Add this inside the LandingPage component
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Function to format number without changing size
  const formatNumber = num => {
    if (num >= 1000000) {
      return "$1M+"
    }
    return "$" + num.toString()
  }

  // Function to handle track selection
  const handleTrackSelect = track => {
    setSelectedTrack(track)
  }

  // Effect for prize counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries

        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true
          let startValue = 0
          const endValue = 999999 // Count up to just below 1M
          const duration = 2500 // Slightly longer duration for larger number
          const increment = Math.ceil(endValue / (duration / 20))

          const timer = setInterval(() => {
            startValue += increment
            if (startValue >= endValue) {
              startValue = endValue
              clearInterval(timer)
              setTimeout(() => {
                setShowFinalValue(true) // This will show "$1M+"
              }, 500)
            }
            setPrizeValue(startValue)
          }, 20)
        }
      },
      { threshold: 0.5 }
    )

    if (prizeRef.current) {
      observer.observe(prizeRef.current)
    }

    return () => {
      if (prizeRef.current) {
        observer.unobserve(prizeRef.current)
      }
    }
  }, [])

  return (
    <div className="landing-container">
      {/* Navigation Bar - Updated with scroll to section functionality */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo.png" alt="Hackathon.dev Logo" />
            <span className="logo-text">Hackathon.dev</span>
          </Link>
        </div>
        <div className="navbar-links">
          <a href="#tracks-section" className="nav-link">
            Tracks
          </a>
          <a href="#prize-section" className="nav-link">
            Prizes
          </a>
          <a href="#sponsors-section" className="nav-link">
            Partners
          </a>
          <a href="#judges-section" className="nav-link">
            Judges
          </a>
        </div>
        <div className="navbar-buttons">
          <Link to="/register" className="btn-signup">
            Register
          </Link>
          <Link to="/submit" className="btn-login">
            Submit Project
          </Link>
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <button
          className="mobile-menu-close"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <div className="mobile-menu-links">
          <a href="#tracks-section" onClick={() => setMobileMenuOpen(false)}>
            Tracks
          </a>
          <a href="#prize-section" onClick={() => setMobileMenuOpen(false)}>
            Prizes
          </a>
          <a href="#sponsors-section" onClick={() => setMobileMenuOpen(false)}>
            Partners
          </a>
          <a href="#judges-section" onClick={() => setMobileMenuOpen(false)}>
            Judges
          </a>
        </div>
        <div className="mobile-menu-buttons">
          <a className="mobile-register" href="/register">
            Register
          </a>
          <a className="mobile-submit" href="/submit">
            Submit Project
          </a>
        </div>
      </div>

      {/* Hero Section - Updated with date and location info */}
      <section className="hero-section">
        {/* Restore the background video */}
        <video
          className="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg4.mp4" type="video/mp4" />
        </video>

        <div className="hero-content">
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="meta-label">DATE</span>
              <span className="meta-value">TBD</span>
            </div>
            <div className="meta-separator"></div>
            <div className="hero-meta-item">
              <span className="meta-label">LOCATION</span>
              <span className="meta-value">Virtual</span>
            </div>
          </div>

          <h1 className="main-title">
            The World's
            <br />
            Largest
            <br />
            Hackathon
          </h1>

          <p className="subtitle">
            Join thousands of developers to build revolutionary projects with
            the latest tech stack
          </p>

          <div className="cta-buttons">
            <Link to="/register" className="register-button">
              Register now <span className="arrow">→</span>
            </Link>
            <Link to="/learn" className="learn-button">
              Learn to build
            </Link>
          </div>
        </div>
      </section>

      {/* Prize Section - Updated with animation */}
      <section id="prize-section" className="prize-section">
        <div className="prize-container" ref={prizeRef}>
          <div className="prize-counter">
            <span className="counter-value">
              {showFinalValue ? "$1M+" : formatNumber(prizeValue)}
            </span>
          </div>
          <div className="prize-description">
            <p>in total prizes</p>
          </div>
        </div>
        <div className="prize-cta-buttons">
          <Link to="/register" className="register-button">
            Register now <span className="arrow">→</span>
          </Link>
          <Link to="/learn" className="learn-button">
            Learn to build
          </Link>
        </div>
      </section>

      {/* Sponsors Section - Updated with correct website links and spacing */}
      <section id="sponsors-section" className="sponsors-section">
        <h2 className="sponsors-title">Our Partners</h2>
        <div className="sponsors-grid">
          {sponsorsData.map(sponsor => {
            // Generate website URL based on sponsor name (or use actual URLs if you have them)
            const websiteUrl = `https://${sponsor.name
              .toLowerCase()
              .replace(/\s+/g, "")}.com`

            return (
              <a
                key={sponsor.id}
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                referrerpolicy="no-referrer"
                className="sponsor-link"
              >
                <div className="sponsor-card">
                  <div className="sponsor-logo-container">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="sponsor-logo"
                    />
                  </div>
                  <p className="sponsor-name">{sponsor.name}</p>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      {/* Updated Tracks Section with interactive functionality */}
      <section id="tracks-section" className="tracks-section">
        <div className="tracks-label">TRACKS</div>
        <h2 className="tracks-title">
          Compete across <span className="highlight">6 tracks</span> with over{" "}
          <span className="highlight">50</span> prizes
        </h2>

        {/* Track selector tabs - now with onClick handlers */}
        <div className="track-tabs">
          {trackData.map(track => (
            <button
              key={track.id}
              className={`track-tab ${
                selectedTrack.id === track.id ? "active" : ""
              }`}
              onClick={() => handleTrackSelect(track)}
            >
              <span className="tab-icon">{track.icon}</span> {track.name}
            </button>
          ))}
        </div>

        {/* Active track details - now dynamic based on selectedTrack */}
        <div className="track-details">
          <div className="track-info">
            <div className="track-prize">{selectedTrack.prize}</div>
            <div className="track-content">
              <div className="track-icon-large">
                <span className="tab-icon">{selectedTrack.icon}</span>{" "}
                {selectedTrack.name}
              </div>
              <p className="track-description">{selectedTrack.description}</p>
              <div className="track-supported">
                <p>Supported by</p>
                <div className="supporter-logos">
                  {selectedTrack.supporters.map((logo, index) => (
                    <div key={index} className="supporter-logo">
                      <img src={logo} alt={`${selectedTrack.name} Supporter`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons at the bottom of tracks section */}
        <div className="tracks-cta">
          <Link to="/register" className="register-button">
            Register Now <span className="arrow">→</span>
          </Link>
          <Link to="/learn" className="learn-button">
            Learn to build
          </Link>
        </div>
      </section>

      {/* Judges Section - Updated with actual X links */}
      <section id="judges-section" className="judges-section">
        <h2 className="judges-title">Meet Our Judges</h2>
        <div className="judges-grid">
          {judgesData.map(judge => (
            <a key={judge.id} href="#" className="judge-link">
              <div className="judge-card">
                <div className="judge-image-container">
                  <img
                    src={judge.image}
                    alt={`${judge.name}`}
                    className="judge-image"
                  />
                </div>
                <div className="judge-info">
                  <div className="judge-header">
                    <div>
                      <h3 className="judge-name">{judge.name}</h3>
                      <p className="judge-title">{judge.title}</p>
                    </div>
                    <a
                      href={judge.xLink}
                      className="judge-social"
                      title="X (Twitter)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-dot"></span>
              <span className="logo-text">Hackathon.dev</span>
            </div>
            <p className="footer-tagline">Build the future of AI</p>
          </div>

          <div className="footer-links-container">
            <div className="footer-links-column">
              <h3 className="footer-category">HACKATHON</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/schedule">Schedule</Link>
                </li>
                <li>
                  <Link to="/prizes">Prizes</Link>
                </li>
                <li>
                  <Link to="/rules">Rules</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-category">RESOURCES</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/docs">Documentation</Link>
                </li>
                <li>
                  <Link to="/tutorials">Tutorials</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-category">COMMUNITY</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/discord">Discord</Link>
                </li>
                <li>
                  <Link to="/forum">Forum</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-category">PARTNERS</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/sponsors">Sponsors</Link>
                </li>
                <li>
                  <Link to="/judges">Judges</Link>
                </li>
                <li>
                  <Link to="/partners">Partners</Link>
                </li>
                <li>
                  <Link to="/become-sponsor">Become a Sponsor</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <h3 className="footer-category">FOLLOW US</h3>
            <div className="social-icons">
              <a
                href="https://twitter.com/hackathondev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="https://discord.gg/hackathondev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="3"></rect>
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <path d="M8 8h.01"></path>
                  <path d="M16 8h.01"></path>
                  <path d="M8 16l4-4 4 4"></path>
                </svg>
              </a>
              <a
                href="https://github.com/hackathondev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://youtube.com/hackathondev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-legal">
            <p>© 2025 Hackathon.dev. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
