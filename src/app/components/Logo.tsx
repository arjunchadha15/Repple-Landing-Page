'use client';

export default function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[100.5%] object-cover -translate-y-[0.25%]"
        >
          <source src="/JumpRopeLight.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
