module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B7CFA',
        accent: '#FFB84D',
        safe: '#39C48B',
        night: '#111827',
        ink: '#1F2937',
        soft: '#F7F8FC'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(13, 31, 84, 0.08)'
      }
    }
  },
  plugins: []
};
