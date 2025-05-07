import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/planet.png" alt="Tucik Logo" className="logo-image" />
          <h2 className="logo-text">Tucik</h2>
        </div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#beta">Join Beta</a>
          <a href="https://t.me/bobkin_dev" target="_blank" rel="noopener noreferrer">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Stay Connected with Friends & Family</h1>
        <p>
          Share your location in real-time, discover nearby friends, and never miss a moment with Tucik.
        </p>
        <a href="https://t.me/bobkin_dev" target="_blank" rel="noopener noreferrer" className="cta-button">
          Contact Us to Join Closed Beta
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose Tucik?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Real-Time Location Sharing</h3>
            <p>Know where your friends are, instantly and securely.</p>
          </div>
          <div className="feature-card">
            <h3>Private & Customizable</h3>
            <p>Control who sees your location and when with easy settings.</p>
          </div>
          <div className="feature-card">
            <h3>Fun & Interactive</h3>
            <p>Send messages, emojis, and check-ins to stay in touch.</p>
          </div>
        </div>
      </section>

      {/* Closed Beta Section */}
      <section id="beta" className="cta-section">
        <h2>Join the Tucik Closed Beta</h2>
        <p>
          Tucik is in an exclusive closed testing phase. Contact us to become one of the first to test our app and help shape its future!
        </p>
        <div className="cta-buttons">
          <a
            href="https://t.me/bobkin_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Message Us on Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Tucik. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://tucik.fun/privacy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://t.me/bobkin_dev" target="_blank" rel="noopener noreferrer">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;