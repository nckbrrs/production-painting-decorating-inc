"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const close = () => setSelectedIndex(null);
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("scroll", close);
    };
  }, [selectedIndex]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              width={600}
              height={400}
              loading={index < 4 ? "eager" : "lazy"}
              priority={index < 4}
              className="object-cover w-full max-h-48 rounded-lg drop-shadow-sm transition-transform duration-75 lg:hover:-translate-y-1"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="max-h-full h-[70%] w-full rounded-md overflow-hidden">
            <Image
              src={images[selectedIndex] ?? ""}
              alt="Full size project image"
              width={2400}
              height={1600}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
