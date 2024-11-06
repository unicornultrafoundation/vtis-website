'use client'

import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observers = []
    const elements = document.getElementsByClassName("animated-text")
    // console.log(elements)
    for (const el of elements) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            for (const c of entry.target.classList) {
              if (String(c).includes('animated-text-delay')) {
                const classBuffer = String(c).split('-')
                const delay = classBuffer[classBuffer.length - 1]
                entry.target.style.animationDelay = delay
              }
            }
            entry.target.classList.add("animate-[slide-in-up_1s_ease_forwards]")
            observer.unobserve(entry.target); // Unobserve to trigger only once
          }
        },
        { threshold: 0.5 }
      );
      el.classList.add("opacity-0")
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const observers = []
    const elements = document.getElementsByClassName("animated-card-image")
    // console.log(elements)
    for (const el of elements) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-[card-image-animation_1s_ease_forwards]")
            observer.unobserve(entry.target); // Unobserve to trigger only once
          }
        },
        { threshold: 0.1 }
      );
      el.classList.add("scale-125")
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className=" min-h-screen bg-[white] text-black top-14">
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
    </div>
  );
}
