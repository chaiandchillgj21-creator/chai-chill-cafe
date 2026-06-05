import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Trigger animation when 10% of the element comes into the viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Stop observing once the element is visible
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
    none: "translate-x-0 translate-y-0",
  }[direction];

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[800ms] ease-out will-change-[opacity,transform] ${
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${translateClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}