'use client';

import Image from 'next/image';

interface LotusLogoProps {
  size?: number;
  className?: string;
}

export default function LotusLogo({ size = 40, className = '' }: LotusLogoProps) {
  return (
    <Image
      src="/images/Nayaved-Logo-Cropped.png"
      alt="NayaVed Logo"
      width={size * 1.5}
      height={size * 1.5}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
