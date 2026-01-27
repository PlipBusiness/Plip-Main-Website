interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-full h-full object-contain" }: LogoProps) {
  return (
    <img
      src="/images/image_logo.png"
      alt="Plip Logo"
      className={className}
    />
  );
}
