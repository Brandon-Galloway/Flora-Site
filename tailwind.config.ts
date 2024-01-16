import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#7b4d3d",
          "secondary": "#5c824b",
          "accent": "#e4c487",
          "neutral": "#888888",
          "base-100": "#ffffff"
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#ffffff",
          "secondary": "#a0a0a0",
          "accent": "#e4c487",
          "neutral": "#666666",
          "base-100": "#1a1a1a"
        }
      },
    ],
  },
}
export default config

