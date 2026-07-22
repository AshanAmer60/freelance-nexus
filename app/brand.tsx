import Image from "next/image";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
];

export function SiteLogo({
  size = 44,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Freelance Nexus logo"
      width={size}
      height={size}
      priority={priority}
      className={`bg-paper object-contain p-1 shadow-[0_8px_30px_rgba(6,40,88,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
