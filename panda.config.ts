import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./pages/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // Dark theme colors
          navy: {
            50: { value: '#f0f4ff' },
            100: { value: '#e0ecff' },
            200: { value: '#c2d9ff' },
            300: { value: '#94bfff' },
            400: { value: '#5c9aff' },
            500: { value: '#2563eb' },
            600: { value: '#1d4ed8' },
            700: { value: '#1e40af' },
            800: { value: '#1e3a8a' },
            900: { value: '#1e2d5f' },
            950: { value: '#131c3d' },
          },
          indigo: {
            50: { value: '#eef2ff' },
            100: { value: '#e0e7ff' },
            200: { value: '#c7d2fe' },
            300: { value: '#a5b4fc' },
            400: { value: '#818cf8' },
            500: { value: '#6366f1' },
            600: { value: '#4f46e5' },
            700: { value: '#4338ca' },
            800: { value: '#3730a3' },
            900: { value: '#312e81' },
            950: { value: '#1e1b4b' },
          },
          // Dark theme semantic colors
          background: {
            primary: { value: '#0f172a' }, // slate-900
            secondary: { value: '#1e293b' }, // slate-800
            tertiary: { value: '#334155' }, // slate-700
          },
          text: {
            primary: { value: '#f8fafc' }, // slate-50
            secondary: { value: '#e2e8f0' }, // slate-200
            muted: { value: '#94a3b8' }, // slate-400
          },
          border: {
            primary: { value: '#475569' }, // slate-600
            secondary: { value: '#64748b' }, // slate-500
          }
        },
        fonts: {
          zen: { value: '"Zen Kaku Gothic New", sans-serif' },
          zilla: { value: '"Zilla Slab", serif' },
          atkinson: { value: '"Atkinson", sans-serif' },
          sans: { value: '"Zen Kaku Gothic New", "Atkinson", system-ui, sans-serif' },
          serif: { value: '"Zilla Slab", Georgia, serif' },
          mono: { value: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace' },
          // Semantic font assignments (reversed)
          body: { value: '"Zilla Slab", Georgia, serif' },
          heading: { value: '"Zen Kaku Gothic New", "Atkinson", system-ui, sans-serif' }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
