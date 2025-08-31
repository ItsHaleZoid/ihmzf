"use client";

import { Gabarito } from "next/font/google";
import Image from "next/image";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function WorkingOn() {
  return (
    <div className={`${gabarito.className} flex flex-col items-center justify-center min-h-screen py-20 bg-gray-50`}>
      <h2 className="text-4xl font-semibold text-center text-black mb-8">
        What I'm Working On
      </h2>
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <Image src="/asimov-full.png" alt="Asimov" className=" invert mb-3" width={200} height={200} />
          <p className="text-gray-700 text-sm">
            An application where you'd be able to use RAG, System-Tuning, MCP and Agetic Framworks with interactive visual interface. Right now you can create educational animations with an AI model there made through the same technology.
          </p>
          <a href="https://asimov.mov" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4">Visit Asimov</a>
        </div>
      </div>
    </div>
  );
}
        