'use client';

export default function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <video
        src="/JumpRopeLight.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="max-w-xs md:max-w-md w-auto h-auto"
      />
    </div>
  );
}
