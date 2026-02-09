'use client';

interface PhoneMockupProps {
  screenshot: string;
  alt?: string;
}

export default function PhoneMockup({ screenshot, alt = 'Repple App' }: PhoneMockupProps) {
  return (
    <div className="phone-mockup">
      <img
        src={screenshot}
        alt={alt}
        className="phone-screenshot"
      />
    </div>
  );
}
