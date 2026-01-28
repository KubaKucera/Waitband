import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SecondaryActionButtonProps = {
  href: string;
  children: React.ReactNode;
  target?: "_self" | "_blank";
  showArrow?: boolean;
  className?: string;
};

export const SecondaryActionButton = ({
  href,
  children,
  target = "_self",
  showArrow = true,
  className = "",
}: SecondaryActionButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`
        group relative inline-flex items-center justify-center
        w-[280px] h-[50px]
        text-[14px] font-semibold tracking-[0.1em]
        rounded-full text-white
        transition-transform duration-250 ease-out will-change-transform transform-gpu
        bg-transparent border-[2px] border-transparent
        [background:linear-gradient(#121212,#121212)_padding-box,linear-gradient(90deg,#888,#bbb)_border-box]
        hover:scale-102 hover:shadow-[0_0_10px_rgba(238,9,121,0.2)]
        hover:[background:linear-gradient(#1a1a1a,#1a1a1a)_padding-box,linear-gradient(90deg,#ff6a00,#ee0979)_border-box]
        focus-visible:outline-none
        focus-visible:shadow-[0_0_0_3px_rgba(238,9,121,0.25)]
        active:scale-[0.98]
        ${className}
      `}
    >
      {children}

      {showArrow && (
        <ArrowRight
          size={20}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            opacity-0
            -translate-x-3
            group-hover:translate-x-0
            group-hover:opacity-100
            transition-all duration-400 ease-out
          "
        />
      )}
    </Link>
  );
};