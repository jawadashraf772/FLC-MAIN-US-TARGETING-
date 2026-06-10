'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      overflow: 'hidden',
      padding: '2rem'
    }}>
      {/* Decorative Background Elements */}
      <div className="mesh-bg">
        <div className="mesh-ball" style={{ top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'var(--primary)' }}></div>
        <div className="mesh-ball" style={{ bottom: '-10%', left: '-5%', width: '500px', height: '500px', background: 'var(--primary)', animationDelay: '-5s' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '650px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'var(--bg-soft)',
            padding: '3.5rem 3rem',
            borderRadius: '40px',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-premium)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Success Check Icon Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            style={{
              width: '90px',
              height: '90px',
              background: 'var(--primary)',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              color: '#ffffff',
              boxShadow: 'var(--shadow-red)',
              transform: 'rotate(10deg)'
            }}
          >
            <CheckCircle2 size={48} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
              fontWeight: 900,
              color: 'var(--foreground)',
              marginBottom: '1rem',
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}
          >
            Form Submitted <span style={{ color: 'var(--primary)' }}>Successfully!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              lineHeight: 1.6
            }}
          >
            Thank you for reaching out to Faseeh Lall & Co. We have received your request, we are reviewing your business details, and will get back to you within 24 hours to schedule your strategy call.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
              alignItems: 'center'
            }}
          >
            <a
              href="https://wa.me/923244898766"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium primary"
              style={{
                width: '100%',
                height: '60px',
                fontSize: '1.05rem',
                justifyContent: 'center'
              }}
            >
              <MessageSquare size={20} />
              Start Instant WhatsApp Chat
            </a>

            <Link
              href="/"
              className="btn-premium secondary"
              style={{
                width: '100%',
                height: '60px',
                fontSize: '1.05rem',
                justifyContent: 'center'
              }}
            >
              <ArrowLeft size={18} />
              Back to Homepage
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
