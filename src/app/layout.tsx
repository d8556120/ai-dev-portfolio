import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Developer | Full-Stack & AI Agent Solutions',
  description:
    'Senior AI developer specializing in custom AI agents, chatbots, full-stack MVPs, and automation solutions. Ship your AI-powered product in 1-2 weeks.',
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
  ],
  authors: [{ name: 'AI Developer' }],
  openGraph: {
    title: 'AI Developer | Full-Stack & AI Agent Solutions',
    description:
      'Senior AI developer specializing in custom AI agents, chatbots, full-stack MVPs, and automation solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Developer | Full-Stack & AI Agent Solutions',
    description:
      'Senior AI developer specializing in custom AI agents, chatbots, full-stack MVPs, and automation solutions.',
  },
  robots: {
    index: true,
    follow: true,
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
