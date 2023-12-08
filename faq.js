const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

gsap.fromTo(
  ".qa-section",
  { opacity: 0,},
  { opacity: 1, duration: 2 }
);
