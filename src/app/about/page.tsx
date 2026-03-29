import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | AI Developer Portfolio',
  description:
    'Senior AI developer with 3+ years of experience building AI agents, full-stack applications, and automation solutions.',
};

const skills = [
  {
    category: 'AI & Machine Learning',
    items: [
      'LLM Integration (Claude, GPT-4, Llama)',
      'Multi-Agent Systems',
      'RAG Pipelines',
      'Prompt Engineering',
      'AI Workflow Automation',
      'Vector Databases (Pinecone, Weaviate)',
    ],
  },
  {
    category: 'Backend Development',
    items: [
      'Python (FastAPI, Django, Flask)',
      'Node.js (Express, NestJS)',
      'REST & GraphQL APIs',
      'PostgreSQL, MongoDB, Redis',
      'WebSocket & Real-time Systems',
      'Microservices Architecture',
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
      'State Management (Zustand, Redux)',
      'Server-Side Rendering',
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      'Docker & Docker Compose',
      'AWS (EC2, S3, Lambda)',
      'Vercel & Railway',
      'CI/CD Pipelines',
      'Git & GitHub Actions',
      'Linux Server Administration',
    ],
  },
];

const timeline = [
  {
    period: 'Present',
    title: 'Freelance AI Developer',
    description:
      'Building custom AI solutions for clients worldwide. Specializing in AI agents, full-stack MVPs, and automation systems. Delivered 50+ projects with 100% client satisfaction.',
  },
  {
    period: 'Previously',
    title: 'Senior Full-Stack Developer',
    description:
      'Led development of AI-powered products at multiple startups. Built scalable backend systems, real-time collaboration tools, and data processing pipelines.',
  },
  {
    period: 'Foundation',
    title: 'Software Engineer',
    description:
      'Developed strong fundamentals in software engineering, system design, and best practices. Worked across the full stack with a focus on Python and JavaScript ecosystems.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative bg-grid">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in-up">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              I am a senior AI developer who turns ambitious ideas into production-ready software.
              With deep expertise in AI agent development and full-stack engineering, I help
              businesses leverage AI to move faster and build smarter.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              My philosophy is simple:{' '}
              <span className="text-white font-semibold">&ldquo;Ship fast, iterate faster.&rdquo;</span>{' '}
              I believe the best way to validate an idea is to get it in front of users as quickly as
              possible, then refine based on real feedback. Every project I take on is treated as my
              own - I care deeply about quality, performance, and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ship Fast',
                description:
                  'I focus on delivering working software quickly. MVPs in 1-2 weeks, not months. Time-to-market matters, and I optimize for it without cutting corners.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
              {
                title: 'Quality Code',
                description:
                  'Clean, well-documented, and tested code that your team can maintain and extend. I write code as if the next developer reading it is a violent psychopath who knows where I live.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'Clear Communication',
                description:
                  'Daily updates, transparent timelines, and proactive problem-solving. You will always know exactly where your project stands and what is coming next.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Skills <span className="gradient-text">Breakdown</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="glass-card p-8">
                <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            My <span className="gradient-text">Journey</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div key={item.period} className="relative pl-8 border-l-2 border-indigo-500/20">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-indigo-500 border-4 border-[#0a0a1a]" />
                <div className="text-sm text-indigo-400 font-medium mb-1">{item.period}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-indigo-500/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Have a project in mind? I&apos;m always open to discussing new opportunities and interesting challenges.
          </p>
          <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
