"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CenteredImageProps = {
  src: any;
  alt: string;
  className?: string;
  index: number;
};

const CenteredImage = ({ src, alt, className, index }: CenteredImageProps) => {
  const [isCentered, setIsCentered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 图片在 40%-60% 的视窗区域时视为“正中间”
        setIsCentered(entry.intersectionRatio >= 1);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0.00 到 1.00 的步长
        rootMargin: "0px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      className={`transition-opacity duration-1000 ease-in-out ${
        isCentered ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
};

export default CenteredImage;
