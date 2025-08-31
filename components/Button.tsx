"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  href, 
  target, 
  rel, 
  variant = "primary", 
  className = "" 
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer inline-block text-center";
  
  const variantClasses = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}