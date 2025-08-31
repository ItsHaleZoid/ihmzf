"use client";

import { Gabarito } from "next/font/google";
import SplitText from "../components/SplitText";
import WorkingOn from "../components/WorkingOn";
import WhatILike from "@/components/WhatILike";
import WhatIveWorkedOn from "../components/WhatIveWorkedOn";
import FollowTwitter from "../components/FollowTwitter";
import Me from "@/components/Me";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return <div className={`${gabarito.className} relative`}>
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-10">
      <div className="flex flex-col items-center justify-center">
        <SplitText
          text="hi i'm Hamza"
          className="text-6xl font-semibold text-center text-white"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <p className="text-lg text-white">just a guy who loves making useful stuff</p>
      <p className="text-lg italic font-light tracking-tighter text-white/50 mx-auto max-w-xl text-center mt-4">I love to make things that are useful and help people. It is my goal in life to create things that pushes technology and humanity forward, and I hope to be the greatest benefactor of it.</p>
    </div>
    <div className="relative z-20 mt-[100vh]">
      <WorkingOn />
    </div>
    <div className="relative z-30">
      <WhatILike />
    </div>
    <div className="relative z-40">
      <WhatIveWorkedOn />
    </div>
    <div className="relative z-50">
      <FollowTwitter />
    </div>
    <div className="relative z-60">
      <Me />
    </div>
  </div>



  
}

