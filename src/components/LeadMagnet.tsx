'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const LeadMagnet = () => {
  const [email, setEmail] = React.useState('');
  const [downloaded, setDownloaded] = React.useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setDownloaded(true);
      // Trigger download or webhook
      window.open('https://faseehlall.com/logoflc.png', '_blank'); // fallback asset or similar
    }
  };

  return (
    <section id="guide" className="section-padding" style={{ background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          background: 'var(--foreground)',
          color: '#ffffff',
          borderRadius: '40px',
          padding: '4rem 3rem',
          boxShadow: 'var(--shadow-premium)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative mesh */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '400px',
            height: '400px',
            background: 'var(--primary)',
            filter: 'blur(100px)',
            opacity: 0.15,
            pointerEvents: 'none'
          }}></div>

          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--primary)', 
                fontSize: '0.8rem', 
                fontWeight: 900, 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                marginBottom: '1.5rem',
                background: 'rgba(225, 29, 72, 0.1)',
                padding: '8px 16px',
                borderRadius: '50px'
              }}>
                <FileText size={16} /> Free Resource
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.2 }}>
                Get the <span style={{ color: 'var(--primary)' }}>"High-Conversion"</span> Guide For Free
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Discover the exact copy strategies, layout structures, and psychological hooks we use to design landing pages that consistently convert 5%+ of traffic.
              </p>
            </div>

            <div>
              {downloaded ? (
                <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '24px' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank you!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>Your download should begin automatically. If not, click below.</p>
                  <a href="#" className="btn-premium primary" style={{ marginTop: '1.5rem' }}>
                    Click to Download
                  </a>
                </div>
              ) : (
                <form onSubmit={handleDownload} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.8 }}>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your business email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        padding: '1rem 1.5rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#ffffff',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'var(--transition-smooth)',
                        width: '100%',
                        cursor: 'none'
                      }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn-premium primary" 
                    style={{ width: '100%', justifyContent: 'center', height: '56px', fontSize: '1.1rem', cursor: 'none' }}
                  >
                    <Download size={18} />
                    Download Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
