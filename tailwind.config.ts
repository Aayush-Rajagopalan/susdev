import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        noPoverty: '#e5233d', // Add the color for No Poverty
        zeroHunger: '#dda73a', // Add the color for Zero Hunger
        goodHealth: '#4ca146', // Add the color for Good Health and Well-Being
        qualityEducation: '#c5192d', // Add the color for Quality Education
        genderEquality: '#ef402c', // Add the color for Gender Equality
        cleanWater: '#27bfe6', // Add the color for Clean Water and Sanitation
        affordableEnergy: '#fbc412', // Add the color for Affordable and Clean Energy
        decentWork: '#a31c44', // Add the color for Decent Work and Economic Growth
        innovationInfrastructure: '#f26a2d', // Add the color for Industry, Innovation and Infrastructure
        reducedInequalities: '#e01483', // Add the color for Reduced Inequalities
        sustainableCities: '#f89d2a', // Add the color for Sustainable Cities and Communities
        responsibleConsumption: '#bf8d2c', // Add the color for Responsible Consumption and Production
        climateAction: '#407f46', // Add the color for Climate Action
        lifeBelowWater: '#1f97d4', // Add the color for Life Below Water
        lifeOnLand: '#59ba48', // Add the color for Life On Land
        peaceJustice: '#126a9f', // Add the color for Peace, Justice and Strong Institutions
        partnershipsgoals: '#13496b', // Add the color for Partnerships for the Goals
      }
    },
  },
  plugins: [],
}
export default config
