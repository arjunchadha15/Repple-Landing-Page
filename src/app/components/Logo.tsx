'use client';

export default function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-48 h-48 md:w-64 md:h-64"> 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        >
          <source src="/JumpRopeLight.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
