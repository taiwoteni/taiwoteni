"use client";

import { useRouter } from "next/navigation";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";

export default function ProjectCard({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  className?: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  const router = useRouter();

  const navigate = () => router.push(href);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    // Let inner anchors (e.g. the live-site link) behave normally.
    if ((e.target as HTMLElement).closest("a")) return;
    navigate();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate();
    }
  };

  return (
    <article
      className={className}
      data-case={href}
      role="link"
      tabIndex={0}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </article>
  );
}
