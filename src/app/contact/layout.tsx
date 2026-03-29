import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | AI Developer Portfolio',
  description:
    'Get in touch to discuss your AI project. Typical response time under 24 hours. Free project scoping call included.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
