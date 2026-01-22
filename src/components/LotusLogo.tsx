'use client';

import Image from 'next/image';

interface LotusLogoProps {
  size?: number;
  className?: string;
}

export default function LotusLogo({ size = 40, className = '' }: LotusLogoProps) {
  return (
    <div
      style={{
        width: size * 1.5,
        height: size * 1.5,
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: 'var(--parchment-light, #FFF8E7)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '4px'
      }}
      className={className}
    >
      <Image
        src="/images/Nayaved Logo.png"
        alt="NayaVed Logo"
        width={size * 2.5}
        height={size * 2.5}
        style={{
          objectFit: 'contain',
          objectPosition: 'top center',
          marginTop: '-2%'
        }}
      />
    </div>
  );
}
