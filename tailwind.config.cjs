const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '770px'}, //small
        'to': {'max': '500px'}, //toddler
        'ti': {'max': '300px'}, //tiny
      },
    },
  },
  plugins: [],
};

module.exports = config;