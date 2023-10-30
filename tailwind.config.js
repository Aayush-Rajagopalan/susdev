/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        noPoverty: "#e5233d", // Add the color for No Poverty
        zeroHunger: "#dda73a", // Add the color for Zero Hunger
        goodHealth: "#4ca146", // Add the color for Good Health and Well-Being
        qualityEducation: "#c5192d", // Add the color for Quality Education
        genderEquality: "#ef402c", // Add the color for Gender Equality
        cleanWater: "#27bfe6", // Add the color for Clean Water and Sanitation
        affordableEnergy: "#fbc412", // Add the color for Affordable and Clean Energy
        decentWork: "#a31c44", // Add the color for Decent Work and Economic Growth
        innovationInfrastructure: "#f26a2d", // Add the color for Industry, Innovation and Infrastructure
        reducedInequalities: "#e01483", // Add the color for Reduced Inequalities
        sustainableCities: "#f89d2a", // Add the color for Sustainable Cities and Communities
        responsibleConsumption: "#bf8d2c", // Add the color for Responsible Consumption and Production
        climateAction: "#407f46", // Add the color for Climate Action
        lifeBelowWater: "#1f97d4", // Add the color for Life Below Water
        lifeOnLand: "#59ba48", // Add the color for Life On Land
        peaceJustice: "#126a9f", // Add the color for Peace, Justice and Strong Institutions
        partnershipsgoals: "#13496b", // Add the color for Partnerships for the Goals
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
