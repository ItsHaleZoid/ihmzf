"use client";

import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function WhatIveWorkedOn() {
  return (
    <div className={`${gabarito.className} flex flex-col items-center justify-center min-h-screen py-20 bg-white`}>
      <h2 className="text-4xl font-semibold text-center text-black mb-8">
        What I've Worked On
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-white mb-3">Video Editor</h3>
            <p className="text-white">
              I used to be a small vidoe editor in my ol' days and hit an income of $10k/month at 15. it seemed very cool.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium bg-gradient-to-b from-[#02f7ff] to-[#00d9ff] text-transparent bg-clip-text mb-3 cursor-pointer" onClick={() => {
              window.open("https://thales.cc", "_blank");
            }}>Thales</h3>
            <p className="text-white">
              A tool I made for Video Editors I knew that combined workflow manager, project & income tracker, work sessions tracker and relazing music all in one place.
            </p>
          </div>
        

        </div>
      </div>
    </div>
  );
}