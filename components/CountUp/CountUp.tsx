"use client";
import { FC, useEffect, useState, useRef } from "react";

type Props = {
  endValue: number;
  duration: number;
};

const CountUp: FC<Props> = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        setCount(Math.min(endValue, (progress / duration) * endValue));
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        // Start the animation when the component comes into view
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        // Stop the animation when the component goes out of view
        cancelAnimationFrame(animationFrameId);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as needed
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration]);

  return (
    <span ref={countRef} className="font-bold">
      {Math.round(count)}
    </span>
  );
};

export default CountUp;
