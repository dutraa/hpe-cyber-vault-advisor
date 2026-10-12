import './globals.css';
import type { Metadata } from 'next';
import { Shell } from '@/components/Shell';
export const metadata: Metadata = { title: 'Design Your Own HPE Cyber Resilience Vault', description: 'Internal pre-sales architecture designer' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><Shell>{children}</Shell></body></html>; }
