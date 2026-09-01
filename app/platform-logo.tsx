"use client";

import Image from "next/image";
import { useState } from "react";

type PlatformLogoProps = {
  name: string;
  logo: string;
};

export function PlatformLogo({ name, logo }: PlatformLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-display text-sm font-bold tracking-wide text-ink-soft">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <Image
      src={logo}
      alt={`${name} logo`}
      width={96}
      height={96}
      className="size-20 object-contain sm:size-24"
      onError={() => setFailed(true)}
    />
  );
}
