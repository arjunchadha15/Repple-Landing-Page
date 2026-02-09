'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <Image
          src="/Repple_Monkey_Vector.png"
          alt="Repple Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
