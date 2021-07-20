import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const textAnim = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.letter', {
    scale: 1,
    ease: 'elastic',
    duration: 0.8,
    stagger: 0.08,
  });

  const leftHandTl = gsap.timeline({ repeat: -1, delay: 1.2 });
  leftHandTl.to('#left-hand', {
    rotation: 45,
    ease: 'linear',
    duration: 0.8,
  });
  leftHandTl.to('#left-hand', {
    rotation: 0,
    ease: 'linear',
    duration: 0.8,
  });

  const rightHandTl = gsap.timeline({ repeat: -1, delay: 1.2 });
  rightHandTl.to('#right-hand', {
    rotation: -45,
    ease: 'linear',
    duration: 0.8,
  });
  rightHandTl.to('#right-hand', {
    rotation: 0,
    ease: 'linear',
    duration: 0.8,
  });

  gsap.to('#bulle', {
    scale: 1,
    ease: 'elastic',
    delay: 1.8,
    duration: 1.2,
  });

  const handShake = gsap.timeline({ repeat: -1 });
  handShake.to('#hands', {
    yPercent: 8,
  });

  //titles text reveal
  const subTitles = gsap.utils.toArray('.subtitles');

  subTitles.forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top +=60%',
        end: 'bottom +=80%',
        toggleActions: 'restart none none none',
        scrub: 1,
      },
      yPercent: 100,
    });
  });
};

export default textAnim;
