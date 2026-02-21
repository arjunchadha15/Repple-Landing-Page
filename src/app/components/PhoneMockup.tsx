'use client';

import Image from 'next/image';

interface PhoneMockupProps {
  screenshot: string;
  alt?: string;
}

export default function PhoneMockup({ screenshot, alt = 'Repple App' }: PhoneMockupProps) {
  return (
    <div className="phone-mockup">
      <Image
        src={screenshot}
        alt={alt}
        fill
        className="phone-screenshot"
        sizes="(max-width: 768px) 260px, 290px"
      />
    </div>
  );
}
