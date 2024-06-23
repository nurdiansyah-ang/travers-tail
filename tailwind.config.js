module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'berem':'#DF2935',
        'hideng':'#222831'
      },
      boxShadow:{
        // 'bayangan': [
        // '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
        // '0 6.7px 5.3px rgba(0, 0, 0, 0.048)',
        // '0 12.5px 10px rgba(0, 0, 0, 0.06)',
        // '0 22.3px 17.9px rgba(0, 0, 0, 0.072)',
        // '0 41.8px 33.4px rgba(0, 0, 0, 0.086)',
        // '0 100px 80px rgba(0, 0, 0, 0.12)',]
        'bayangan':' rgba(149, 157, 165, 0.2) 0px 8px 24px'
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}