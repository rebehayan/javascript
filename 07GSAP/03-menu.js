gsap.to("div", {
  keyframes: {
    "0%": {
      x: 0,
    },

    "35%": {
      y: 0,
      ease: "sine.in",
    },
    "50%": {
      y: -50,
    },

    "65%": {
      y: 0,
      ease: "sine.in",
    },
    "100%": {
      x: 110 + "vw",
    },
  },
  duration: 2,
  stagger: 0.2,
});
