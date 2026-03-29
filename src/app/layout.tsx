import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hire AI Developer | Full-Stack AI Agent & MVP Development | Ex-Google Engineer',
  description:
    'Senior AI developer with Google experience. I build custom AI agents, chatbots, RAG pipelines, full-stack MVPs, and automation solutions using Python, Next.js, Claude API, and OpenAI. Ship your AI product in 1-2 weeks with 99% client satisfaction.',
  keywords: [
    'AI developer',
    'AI agent',
    'chatbot development',
    'full-stack developer',
    'MVP development',
    'AI automation',
    'freelance developer',
    'Next.js',
    'FastAPI',
    'Python',
    'TypeScript',
    'hire AI developer',
    'AI consultant',
    'RAG pipeline',
    'LLM integration',
    'Claude API developer',
    'OpenAI developer',
    'ex-Google engineer',
  ],
  authors: [{ name: 'AI Developer' }],
  metadataBase: new URL('https://devai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hire AI Developer | Full-Stack AI Agent & MVP Development',
    description:
      'Senior AI developer with Google experience. Custom AI agents, full-stack MVPs, and automation. Ship in 1-2 weeks with 99% client satisfaction.',
    type: 'website',
    locale: 'en_US',
    url: 'https://devai.com',
    siteName: 'DevAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire AI Developer | Full-Stack AI Agent & MVP Development',
    description:
      'Senior AI developer with Google experience. Custom AI agents, full-stack MVPs, and automation. Ship in 1-2 weeks.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
