import React from "react";

type SocialIconProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  size?: number;
};

export function SocialIcon(props: SocialIconProps) {
  const { href, label, icon, size = 24 } = props;

  return (
    <a
      aria-label={label}
      href={href}
      className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span style={{ width: size, height: size, display: "inline-block" }}>
        {icon}
      </span>
    </a>
  );
}
