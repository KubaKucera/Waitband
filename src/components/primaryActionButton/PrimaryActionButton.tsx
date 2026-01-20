import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PrimaryActionButtonProps = {
  href: string;
  children: React.ReactNode;
  target?: "_self" | "_blank";
  showArrow?: boolean;
  className?: string;
};

export const PrimaryActionButton = ({
  href,
  children,
  target = "_self",
  showArrow = true,
  className = "",
}: PrimaryActionButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`
        group relative inline-flex items-center justify-center
        w-[320px] h-[55px]
        text-[15px] font-semibold tracking-[0.12em]
        rounded-full text-white
        transition-transform duration-300 ease-out will-change-transform transform-gpu
        bg-transparent border-[2px] border-transparent
        [background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
        hover:scale-105 hover:shadow-[0_0_18px_rgba(238,9,121,0.4)]
        hover:[background:linear-gradient(#121212,#121212)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
        focus-visible:outline-none
        focus-visible:shadow-[0_0_0_3px_rgba(238,9,121,0.35)]
        active:scale-[0.98]
        ${className}
      `}
    >
      {children}

      {showArrow && (
        <ArrowRight
          size={22}
          className="
            absolute right-5 top-1/2 -translate-y-1/2
            opacity-0
            -translate-x-4
            group-hover:translate-x-0
            group-hover:opacity-100
            transition-all duration-500 ease-out
          "
        />
      )}
    </Link>
  );
};