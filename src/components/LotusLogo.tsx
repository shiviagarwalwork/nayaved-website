'use client';

import Image from 'next/image';

interface LotusLogoProps {
  size?: number;
  className?: string;
}

export default function LotusLogo({ size = 40, className = '' }: LotusLogoProps) {
  return (
    <Image
      src="/images/Nayaved.png"
      alt="NayaVed Logo"
      width={size * 2}
      height={size * 2}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
