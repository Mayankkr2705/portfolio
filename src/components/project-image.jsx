"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ProjectImage({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <Image
      src={images[activeIndex]}
      alt={`${title} preview ${activeIndex + 1}`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover object-center transition-opacity duration-500"
    />
  );
}
