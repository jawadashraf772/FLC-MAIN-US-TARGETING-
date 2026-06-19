'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Trophy, Settings, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      title: 'Data-Driven Approach',
      description: 'We track every click, conversion, and dollar spent. Our strategies are backed by hard data, not intuition.',
      icon: <BarChart size={32} />
    },
    {
      title: 'Proven Track Record',
      description: 'Years of building successful funnels and generating qualified meetings for top-tier agencies.',
      icon: <Trophy size={32} />
    },
    {
      title: 'Customized Strategies',
      description: 'No copy-paste templates. We build bespoke client acquisition systems tailored specifically to your offer.',
      icon: <Settings size={32} />
    },
    {
      title: 'Dedicated Support',
      description: 'Direct Slack access and weekly strategy calls with our core team. We are extensions of your business.',
      icon: <Headphones size={32} />
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>
            Why <span style={{ color: 'var(--primary)' }}>Choose Us?</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
            We align our goals with yours. We focus on results, transparency, and scaling your business sustainably.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="problem-card"
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2rem',
                alignItems: 'start',
                padding: '3rem',
                borderRadius: '40px',
                border: '1px solid var(--border)',
                background: '#ffffff',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div className="icon-box" style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-soft)',
                color: 'var(--primary)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginBottom: 0
              }}>
                {point.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>{point.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
