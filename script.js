// Gsap animation 

// Tween changes the property of an animation over a specific duration, like color, scale, or any CSS property.
// Timeline is used to manage multiple tweens and can be nested. It allows coordination of animations.

const hero_t1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero-section',
        start: "top top", // Correct start position
        end: '+=400px top', // Extend scroll height by 400px
        scrub: 2,
        pin: true // Pin the section until everything is finished
    }
});

// Updated query selector to target `.name` spans inside the title sections
document.querySelectorAll('.hero-section .hero-contnet .title .name').forEach((span, index) => {
    hero_t1.to(span, {
        y: -1500,
        duration: 4,
        ease: "power1.out"
    }, index * 0.1); // Adding stagger effect
});
gsap.to('.hero-section', {
    y: -1200,
    duration: 4,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: '.hero-section',
        start: "top top", // Start animation when the top of the section reaches the top of the viewport
        end: '+=400px top', // Extend scroll height by 400px
        scrub: 2, // Scrub the animation with scroll
        pin: true // Pin the section until the animation is complete
    }
});
 
// hero animation lenis scrool animation 

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  let horisection = document.querySelector('.horizontal');
  gsap.to(horisection,{
    x:()=>horizontalSection.scrollWidth * -1,
    xPrecent:100,
    scrollTrigger: {
        trigger: '.horisection',
        start: "center center", // Start animation when the top of the section reaches the top of the viewport
        end: '+=2000px top', // Extend scroll height by 400px
        scrub: 2, // Scrub the animation with scroll
        pin: "#horizontal-scrolling" // Pin the section until the animation is complete
    }
  })