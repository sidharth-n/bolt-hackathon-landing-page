import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"

// Dummy track data
const trackData = [
  {
    id: "defi",
    name: "DeFi",
    icon: "💼",
    prize: "$25,000",
    description:
      "Agents that optimize decentralized finance operations, including trading, yield farming, liquidity provision, and portfolio management.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
  {
    id: "treasury",
    name: "Treasury",
    icon: "🏦",
    prize: "$13,000",
    description:
      "Agents that optimize treasury management operations and automate financial decisions for DAOs and protocols.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
  {
    id: "prediction",
    name: "Prediction Market",
    icon: "📊",
    prize: "$18,500",
    description:
      "Build agents for analyzing and participating in prediction markets with automated strategies and insights.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
  {
    id: "ai",
    name: "AI Advancement",
    icon: "🧠",
    prize: "$30,000",
    description:
      "Advanced AI systems and techniques that push the boundaries of agent capabilities and autonomous decision-making.",
    supporters: ["/placeholder-logo.svg", "/placeholder-logo.svg"],
  },
  {
    id: "social",
    name: "Social",
    icon: "👥",
    prize: "$15,000",
    description:
      "Social agents that facilitate community engagement, moderation, and coordination in online spaces.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
  {
    id: "data",
    name: "Data Agents",
    icon: "🔄",
    prize: "$22,000",
    description:
      "Agents for data collection, analysis, transformation, and insights generation across various domains.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
  {
    id: "dev",
    name: "Developer Tools",
    icon: "🛠️",
    prize: "$20,000",
    description:
      "Tools and agents that enhance developer productivity, code quality, and software development workflows.",
    supporters: ["/placeholder-logo.svg", "/placeholder-logo.svg"],
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: "🎮",
    prize: "$17,500",
    description:
      "Game agents, NPCs with advanced behaviors, and AI systems that enhance gaming experiences.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
  {
    id: "security",
    name: "Security",
    icon: "🔐",
    prize: "$28,000",
    description:
      "Security-focused agents for threat detection, vulnerability analysis, and automated defensive measures.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
  {
    id: "web3",
    name: "Web3",
    icon: "🌐",
    prize: "$21,000",
    description:
      "Agents that interface with blockchain protocols, smart contracts, and decentralized applications.",
    supporters: [
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
      "/placeholder-logo.svg",
    ],
  },
]

// Add this judges data array after the trackData array
const judgesData = [
  {
    id: 1,
    name: "Freysa",
    title: "Sovereign Agent, Freysa",
    image: "/placeholder-judge.png",
  },
  {
    id: 2,
    name: "Nader Dabit",
    title: "Director of DevRel, Eigenlayer",
    image: "/placeholder-judge.png",
  },
  {
    id: 3,
    name: "Eric Conner",
    title: "Crypto Investor",
    image: "/placeholder-judge.png",
  },
  {
    id: 4,
    name: "Erik Voorhees",
    title: "Founder, Venice.ai",
    image: "/placeholder-judge.png",
  },
  {
    id: 5,
    name: "Daniele",
    title: "Founder, HeyAnon",
    image: "/placeholder-judge.png",
  },
  {
    id: 6,
    name: "Doug Millett",
    title: "Product Manager, Eliza Labs",
    image: "/placeholder-judge.png",
  },
  {
    id: 7,
    name: "Jeffy Yu",
    title: "Founder, Zerebro",
    image: "/placeholder-judge.png",
  },
  {
    id: 8,
    name: "Francesco Andreoli",
    title: "DevRel, Linea",
    image: "/placeholder-judge.png",
  },
  {
    id: 9,
    name: "Naiane Rosa",
    title: "Senior Software Engineer, Olas",
    image: "/placeholder-judge.png",
  },
  {
    id: 10,
    name: "Louis",
    title: "DevEx, Safe",
    image: "/placeholder-judge.png",
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

  // Function to format number without commas
  const formatNumber = num => {
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

          // Target value
          const targetValue = 1000000
          // Animation duration in ms
          const duration = 2500
          // Start time
          const startTime = Date.now()

          const updateCounter = () => {
            const currentTime = Date.now()
            const elapsed = currentTime - startTime

            // Calculate progress (0 to 1)
            let progress = Math.min(elapsed / duration, 1)

            // Apply easing function for slowing down (ease-out cubic)
            progress = 1 - Math.pow(1 - progress, 3)

            // Calculate current value
            const currentValue = Math.floor(progress * targetValue)

            setPrizeValue(currentValue)

            // Continue animation until complete
            if (progress < 1) {
              requestAnimationFrame(updateCounter)
            } else {
              // Show the final "$1M+" format
              setTimeout(() => {
                setShowFinalValue(true)
              }, 500)
            }
          }

          // Start the animation
          requestAnimationFrame(updateCounter)
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
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <span className="logo-dot"></span>
            <span className="logo-text">Hackathon.dev</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/feature">Feature</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="navbar-buttons">
          <Link to="/signup" className="btn-signup">
            Sign Up
          </Link>
          <Link to="/login" className="btn-login">
            Login
          </Link>
        </div>
      </nav>

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
          <source src="/bg.mp4" type="video/mp4" />
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
      <section className="prize-section">
        <div className="prize-container" ref={prizeRef}>
          <div
            className={`prize-amount ${showFinalValue ? "final-value" : ""}`}
          >
            {showFinalValue ? "$1M+" : formatNumber(prizeValue)}
          </div>
          <div className="prize-description">
            in rewards for innovative
            <br />
            AI projects and agents
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

      {/* Sponsors Section - styled like reference */}
      <section className="sponsors-section">
        <h2 className="sponsors-title">Hackathon Partners</h2>
        <div className="sponsors-grid">
          {sponsorsData.map(sponsor => (
            <div key={sponsor.id} className="sponsor-card">
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="sponsor-logo"
                />
              </div>
              <p className="sponsor-name">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Updated Tracks Section with interactive functionality */}
      <section className="tracks-section">
        <div className="tracks-label">TRACKS</div>
        <h2 className="tracks-title">
          Build across 10 tracks and over 120 prizes
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

      <section className="judges-section">
        <h2 className="judges-title">
          Connect with leading AI x Hackathon judges
        </h2>
        <div className="judges-grid">
          {judgesData.map(judge => (
            <div key={judge.id} className="judge-card">
              <div className="judge-image-container">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="judge-image"
                />
              </div>
              <div className="judge-info">
                <h3 className="judge-name">{judge.name}</h3>
                <p className="judge-title">{judge.title}</p>
              </div>
              <div className="judge-arrow">
                <span className="arrow">→</span>
              </div>
            </div>
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
                  <path d="M18 9C18 9 16.5 7.5 14 7.5C11.5 7.5 10 9 10 9C10 9 7 8.75 5.5 10.5C4 12.25 4 18 4 18C4 18 7 19.5 10 19.5C13 19.5 16 18 16 18C16 18a26.35 26.35 0 0 0 2-4C19 11 18 9 18 9Z"></path>
                  <path d="M13.5 12.5C13.5 13.33 12.83 14 12 14C11.17 14 10.5 13.33 10.5 12.5C10.5 11.67 11.17 11 12 11C12.83 11 13.5 11.67 13.5 12.5Z"></path>
                  <path d="M16.5 14.5C16.5 15.33 15.83 16 15 16C14.17 16 13.5 15.33 13.5 14.5C13.5 13.67 14.17 13 15 13C15.83 13 16.5 13.67 16.5 14.5Z"></path>
                  <path d="M10.5 14.5C10.5 15.33 9.83 16 9 16C8.17 16 7.5 15.33 7.5 14.5C7.5 13.67 8.17 13 9 13C9.83 13 10.5 13.67 10.5 14.5Z"></path>
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
