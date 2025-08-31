"use client";

import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function WhatILike() {
  return (
    <div className={`${gabarito.className} flex flex-col items-center justify-center min-h-screen py-20 bg-black`}>
      <h2 className="text-4xl font-semibold text-center text-white mb-8">
        What I Like
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-black mb-3">Technological Progress</h3>
            <p className="text-black">
              Technologicl progress is the only way the Humanity and world can grow and understand the universe. Other than bold things, it also helps people on day-to-day tasks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-black mb-3">Mathematics</h3>
            <p className="text-black">
              Mathematics is the greatest thing ever understood by Humans. I hates it in school but when I learned it on my own... I  can&apos;t respect it enough.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-black mb-3">Books</h3>
            <p className="text-black">
              It&apos;s the only right and real education. I love Science Fiction, History, Economics, Some Philosophy, and Some heaby technical books.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}