'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'AI Agent Development',
    description:
      'Custom AI agents and chatbots that handle complex workflows. Multi-agent systems, RAG pipelines, and intelligent automation built with Claude, GPT-4, and open-source models.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.147 2.146m0 0a2.25 2.25 0 01-3.182 0l-.471-.471m3.653.471L18 18.75m-3.653-.471l-.471.471m0 0a2.25 2.25 0 01-3.182 0M12 18v.75" />
      </svg>
    ),
  },
  {
    title: 'MVP Development',
    description:
      'Full-stack MVPs delivered in 1-2 weeks. From idea to deployed product with Next.js, FastAPI, and modern cloud infrastructure. Move fast without breaking things.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: 'Code Migration',
    description:
      'Modernize legacy codebases with confidence. Python 2 to 3, JavaScript to TypeScript, monolith to microservices. Comprehensive testing and zero-downtime migrations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'AI Automation',
    description:
      'Automate repetitive tasks with intelligent scripts. Data processing pipelines, document analysis, content generation, and custom AI workflows that save hundreds of hours.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const caseStudies = [
  {
    title: 'SlideAI',
    subtitle: 'AI-Powered Presentation Generator',
    description:
      'An AI-powered tool that transforms text prompts into professional presentations. Generates structured slide decks with intelligent content organization, design suggestions, and export capabilities. Reduced presentation creation time by 90%.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Python', 'Tailwind CSS'],
    highlights: ['90% time reduction', 'Smart layout engine', 'Multiple export formats'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    liveUrl: 'https://slideai-ppt.onrender.com',
    techColors: ['tech-badge-blue', 'tech-badge-blue', 'tech-badge-green', 'tech-badge-orange', 'tech-badge-cyan'],
  },
  {
    title: 'HireAI',
    subtitle: 'Multi-Agent AI Office Simulation',
    description:
      'Built a sophisticated multi-agent system simulating an AI-powered office environment. Multiple AI agents collaborate in real-time to handle hiring workflows, from resume screening to interview scheduling. Features real-time WebSocket communication and dynamic agent orchestration.',
    tech: ['FastAPI', 'Python', 'WebSockets', 'Claude API', 'React', 'Redis'],
    highlights: ['Multi-agent orchestration', 'Real-time collaboration', 'Production-grade architecture'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    liveUrl: null,
    techColors: ['tech-badge-green', 'tech-badge-orange', 'tech-badge-cyan', 'tech-badge-purple', 'tech-badge-blue', 'tech-badge-pink'],
  },
  {
    title: 'DeerFlow',
    subtitle: 'AI-Powered Research Workflow Engine',
    description:
      'A research workflow automation engine that uses AI agents to gather, analyze, and synthesize information from multiple sources. Streamlines the research process from data collection to report generation with intelligent summarization and citation management.',
    tech: ['Python', 'LangChain', 'FastAPI', 'PostgreSQL', 'Docker', 'Claude API'],
    highlights: ['Automated research pipeline', 'Multi-source synthesis', 'Citation management'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    liveUrl: null,
    techColors: ['tech-badge-orange', 'tech-badge-green', 'tech-badge-green', 'tech-badge-blue', 'tech-badge-cyan', 'tech-badge-purple'],
  },
];

const techStack = [
  'Python',
  'TypeScript',
  'React',
  'Next.js',
  'FastAPI',
  'Node.js',
  'Claude API',
  'OpenAI',
  'LangChain',
  'Docker',
  'PostgreSQL',
  'Redis',
  'AWS',
  'Vercel',
  'Git',
  'Tailwind CSS',
];

const testimonials = [
  {
    quote:
      'Delivered our AI chatbot MVP in just 10 days. The quality was exceptional and the agent handles 80% of our customer inquiries automatically now.',
    author: 'Sarah K.',
    role: 'CEO, TechStart Inc.',
    rating: 5,
  },
  {
    quote:
      'Migrated our entire Python 2 codebase to Python 3 with zero downtime. Thorough testing and documentation throughout. Highly recommend.',
    author: 'Michael R.',
    role: 'CTO, DataFlow Labs',
    rating: 5,
  },
  {
    quote:
      'The AI automation scripts saved our team 40+ hours per week on data processing. ROI was achieved within the first month.',
    author: 'Jennifer L.',
    role: 'VP Engineering, ScaleUp Co.',
    rating: 5,
  },
];

const howIWork = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your vision, requirements, and goals. I analyze feasibility and propose the optimal approach.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'I design the system architecture, choose the right tech stack, and create a detailed project roadmap.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Build',
    description: 'Rapid development with daily progress updates. You see working features every few days, not just at the end.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'Production deployment with monitoring, documentation, and handoff. Plus 2 weeks of free post-launch support.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: 'How fast can you deliver?',
    answer:
      'Most MVPs and AI agents are delivered within 1-2 weeks. Larger projects with multiple integrations typically take 3-4 weeks. I provide a detailed timeline during the discovery phase so you know exactly what to expect.',
  },
  {
    question: "What's your tech stack?",
    answer:
      'I primarily work with Python (FastAPI, Django), TypeScript/JavaScript (Next.js, React, Node.js), and AI/ML tools (Claude API, OpenAI, LangChain). For databases I use PostgreSQL, MongoDB, and Redis. Deployment is typically on AWS, Vercel, or Railway.',
  },
  {
    question: 'Do you provide source code?',
    answer:
      'Absolutely. You get full ownership of all source code, documentation, and assets. Everything is version-controlled on GitHub with clean commit history and comprehensive README files.',
  },
  {
    question: 'How do we communicate during the project?',
    answer:
      'I provide daily progress updates via Slack, Discord, or your preferred platform. We also have weekly video calls to demo progress and discuss next steps. You have full visibility into the project at all times.',
  },
  {
    question: 'What if I need changes after delivery?',
    answer:
      'I include 2 weeks of free post-launch support for bug fixes and minor adjustments. For ongoing development, I offer retainer packages at discounted rates. I am committed to your long-term success.',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericValue = parseInt(target.replace(/\D/g, ''));
          const duration = 2000;
          const steps = 60;
          const increment = numericValue / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold gradient-text animate-count-up">
      {count}{suffix}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-card card-hover overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-white pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-grid bg-particles overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            I Build AI-Powered
            <br />
            <span className="gradient-text">Solutions 10x Faster</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Senior AI developer specializing in custom agents, full-stack MVPs, and automation.
            From concept to production in days, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-gray-300 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter Section */}
      <section className="py-20 relative bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { target: '50', suffix: '+', label: 'Projects Delivered' },
              { target: '10', suffix: 'x', label: 'Faster Delivery' },
              { target: '99', suffix: '%', label: 'Client Satisfaction' },
              { target: '7', suffix: '+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <div className="text-sm text-gray-500 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What I <span className="gradient-text">Build</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end development services focused on AI-powered solutions that deliver real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card card-hover p-8 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 relative bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              See It <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Try SlideAI - my AI-powered presentation generator that creates professional slides from text prompts in seconds.
            </p>
          </div>

          <div className="glass-card overflow-hidden animate-pulse-glow">
            <div className="h-1 bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-cyan-500/40" />
            <div className="relative aspect-video bg-gray-900/50">
              <iframe
                src="https://slideai-ppt.onrender.com"
                className="w-full h-full border-0"
                title="SlideAI Live Demo"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">SlideAI - AI Presentation Generator</h3>
                <p className="text-gray-400 text-sm mt-1">Transform text prompts into professional presentations instantly</p>
              </div>
              <a
                href="https://slideai-ppt.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-8 !py-3 flex-shrink-0"
              >
                Try it Live
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real-world AI solutions I have built. Each project was delivered on time and exceeded expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((project) => (
              <div
                key={project.title}
                className={`glass-card case-card overflow-hidden group`}
              >
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-8">
                  <div className={`text-sm font-medium ${project.accentColor} mb-2`}>
                    {project.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`inline-flex items-center gap-1 text-xs ${project.accentColor}`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Colored Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t, i) => (
                      <span key={t} className={project.techColors[i] || 'tech-badge-blue'}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Hover reveal details */}
                  <div className="case-details">
                    <div className="pt-4 border-t border-white/10">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm !px-6 !py-2.5 w-full"
                        >
                          View Live
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Private / Client Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 relative bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How I <span className="gradient-text">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven 4-step process that ensures your project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howIWork.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="glass-card card-hover p-6 text-center h-full">
                  <div className="text-xs font-bold text-indigo-400 mb-3 tracking-widest">STEP {step.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-indigo-500/40">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Battle-tested technologies I use to build reliable, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Client <span className="gradient-text">Feedback</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What clients say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="glass-card card-hover p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to know before starting a project with me.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something
            <br />
            <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss your project. I typically respond within 24 hours and can start
            within a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
              Get In Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="mailto:hello@devai.com"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-gray-300 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              hello@devai.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
