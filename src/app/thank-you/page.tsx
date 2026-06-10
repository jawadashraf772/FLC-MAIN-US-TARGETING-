'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, Mail, Phone, Home, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Client';
  const email = searchParams.get('email') || '';
  const whatsapp = searchParams.get('whatsapp') || '';

  const whatsappLink = `https://wa.me/923244898766?text=${encodeURIComponent(
    `Hi Faseeh Lall & Co, I just filled out the form. Name: ${name}, Email: ${email}, WhatsApp: ${whatsapp}. I'd like to discuss my strategy call.`
  )}`;

  return (
    <section className="section-padding" style={{ background: '#ffffff', minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Blur Orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '350px', height: '350px', background: 'var(--primary-soft)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '350px', height: '350px', background: 'var(--primary-soft)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            background: '#ffffff', 
            padding: '3.5rem 2.5rem', 
            borderRadius: '40px', 
            maxWidth: '650px', 
            width: '100%',
            textAlign: 'center', 
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-premium)'
          }}
        >
          {/* Animated Success Checkmark Ring */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            style={{ 
              width: '90px', 
              height: '90px', 
              background: 'linear-gradient(135deg, var(--primary) 0%, #1e1e1e 100%)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 2rem', 
              color: '#ffffff',
              boxShadow: '0 10px 30px var(--primary-soft)'
            }}
          >
            <Check size={44} strokeWidth={3} />
          </motion.div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Thank You, <span style={{ color: 'var(--primary)' }}>{name}</span>!
          </h1>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 500 }}>
            Your request has been successfully received. We are preparing your ICP draft and will reach out to you within 24 hours to schedule your strategy call.
          </p>

          {/* Form details overview card */}
          <div style={{ 
            background: 'var(--bg-soft)', 
            borderRadius: '24px', 
            padding: '1.75rem', 
            textAlign: 'left', 
            marginBottom: '2.5rem', 
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--foreground)', opacity: 0.8, borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem', marginBottom: '0.25rem' }}>
              Submission Details
            </h3>
            
            {email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#ffffff', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', color: 'var(--primary)' }}>
                  <Mail size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>Email Address</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--foreground)' }}>{email}</div>
                </div>
              </div>
            )}

            {whatsapp && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#ffffff', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', color: 'var(--primary)' }}>
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase' }}>WhatsApp Number</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--foreground)' }}>{whatsapp}</div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              data-cursor="call"
              className="btn-premium primary" 
              style={{ 
                justifyContent: 'center', 
                height: '60px', 
                fontSize: '1.05rem', 
                textDecoration: 'none', 
                width: '100%',
                fontWeight: 700
              }}
            >
              <MessageSquare size={20} />
              Start WhatsApp Chat
            </a>

            <a 
              href="/" 
              className="btn-premium secondary" 
              style={{ 
                justifyContent: 'center', 
                height: '60px', 
                fontSize: '1.05rem', 
                textDecoration: 'none', 
                width: '100%',
                fontWeight: 700,
                border: '1px solid var(--border)'
              }}
            >
              <Home size={18} />
              Back to Homepage
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <main style={{ background: '#ffffff' }}>
      <Suspense fallback={
        <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="animate-pulse" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Loading confirmation details...</div>
        </div>
      }>
        <ThankYouContent />
      </Suspense>
      <Footer />
    </main>
  );
}
