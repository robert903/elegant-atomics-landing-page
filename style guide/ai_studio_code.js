module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // CHANGED: From Neon Mint (#26E2C3) to Rich Emerald
        // This is darker, more mature, and easier on the eyes.
        primary: "#059669",

        // A lighter version for hover states only
        "primary-hover": "#10B981",

        // CHANGED: A slightly greener black for the background
        "background-dark": "#010F0A",

        // Deeper Jungle tone for cards
        "card-dark": "#041C15",

        // Subtle moss border
        "border-dark": "#0F382C",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        // Reduced glow intensity for a more "matte" premium look
        'soft-glow': '0 0 20px rgba(5, 150, 105, 0.25)',
      }
    },
  },
};