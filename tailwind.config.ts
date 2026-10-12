import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: 'var(--ink)', accent: 'var(--accent)', muted: 'var(--muted)', warning: 'var(--warning)' } } }, plugins: [] } satisfies Config;
