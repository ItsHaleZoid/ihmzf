"use client";

import { Gabarito } from "next/font/google";
import Image from "next/image";
import Button from "./Button";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FollowTwitter() {
  return (
    <div className={`${gabarito.className} flex items-center justify-center min-h-screen py-20 bg-black flex-col`}>
      <h2 className="text-4xl font-semibold text-center text-white mb-8">
        Follow Me on <Image src="/X-Logo.png" className="inline-block invert mb-1" alt="X" width={50} height={50} />
      </h2>
      <h3 className="text-white/70 text-center -mt-5 italic">
        to see more about what I'm doing.
      </h3>
 
      <Button className="mt-5" onClick={() => window.open("https://x.com/hamzafaisal", "_blank")}>Follow Me</Button>
 
     
      </div>

  );
}