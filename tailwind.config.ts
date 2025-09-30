import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',   // Naranja muy claro (casi blanco)
          100: '#ffedd5',  // Naranja claro
          200: '#fed7aa',  // Naranja suave
          300: '#fdba74',  // Naranja medio claro
          400: '#fb923c',  // Naranja brillante
          500: '#f97316',  // Naranja principal
          600: '#ea580c',  // Naranja intenso
          700: '#c2410c',  // Naranja oscuro
          800: '#9a3412',  // Naranja muy oscuro
          900: '#7c2d12',  // Naranja profundo
        },
        accent: {
          50: '#fef3c7',   // Amarillo anaranjado claro
          100: '#fde68a',  // Amarillo cálido
          200: '#fcd34d',  // Amarillo dorado
          300: '#fbbf24',  // Dorado
        }
      },
    },
  },
  plugins: [],
};
export default config;
