/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  "theme": {
      "extend": {
        "transformStyle": {
            'preserve-3d': 'preserve-3d',
          },
          "backfaceVisibility": {
            hidden: 'hidden',
          },
          "rotate": {
            'y-180': 'rotateY(180deg)',
          },
          "colors": {
              "snow": "#fffbf6",
              "white": "#fff",
              "chocolate": "#d97213",
              "black": "#000",
              "gray": "#fffdfb",
              "midnightblue": "#03045e"
          },
          "spacing": {},
          "fontFamily": {
              "open-sans": "'Open Sans'",
              "lato": "Lato",
              'neue-haas-grotesk': ['"Neue Haas Grotesk Text Pro"', 'sans-serif']
          }
      },
      "fontSize": {
          "base": "16px",
          "5xl": "24px",
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}