import React, { useState } from "react"
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

export const LandingPage = () => {
  // State to track the currently selected track
  const [selectedTrack, setSelectedTrack] = useState(trackData[0])

  // Function to handle track selection
  const handleTrackSelect = track => {
    setSelectedTrack(track)
  }

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

      <div className="hero-section">
        {/* Background Video - full opacity */}
        <video
          className="hero-background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Left-aligned hero content */}
        <div className="hero-content">
          <h1 className="main-title">
            The World's
            <br />
            Largest Hackathon
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
      </div>

      {/* Prize Section - updated to match reference layout */}
      <section className="prize-section">
        <div className="prize-container">
          <div className="prize-amount">$1M+</div>
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
          {/* First row */}
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="ElizaOS" />
            </div>
            <div className="sponsor-name">ElizaOS</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Virtuals" />
            </div>
            <div className="sponsor-name">Virtuals</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Optimism" />
            </div>
            <div className="sponsor-name">Optimism</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Polymarket" />
            </div>
            <div className="sponsor-name">Polymarket</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Arbitrum" />
            </div>
            <div className="sponsor-name">Arbitrum</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Sonic" />
            </div>
            <div className="sponsor-name">Sonic</div>
          </div>

          {/* Second row */}
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="VaderAI" />
            </div>
            <div className="sponsor-name">VaderAI</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Kiln" />
            </div>
            <div className="sponsor-name">Kiln</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Story" />
            </div>
            <div className="sponsor-name">Story</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Celo" />
            </div>
            <div className="sponsor-name">Celo</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Fileverse" />
            </div>
            <div className="sponsor-name">Fileverse</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="OpenZeppelin" />
            </div>
            <div className="sponsor-name">OpenZeppelin</div>
          </div>

          {/* Third row */}
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Linea" />
            </div>
            <div className="sponsor-name">Linea</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Olas" />
            </div>
            <div className="sponsor-name">Olas</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Gnosis AI" />
            </div>
            <div className="sponsor-name">Gnosis AI</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="HeyAnon" />
            </div>
            <div className="sponsor-name">HeyAnon</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Bitte" />
            </div>
            <div className="sponsor-name">Bitte</div>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo">
              <img src="/placeholder-logo.svg" alt="Freysa" />
            </div>
            <div className="sponsor-name">Freysa</div>
          </div>
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
    </div>
  )
}

export default LandingPage
