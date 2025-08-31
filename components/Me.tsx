import Image from "next/image";

export default function Me() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-black">
      <Image src="/me.png" className="inline-block mb-10 rounded-3xl" alt="Me" width={400} height={400} />
      <p className="text-white/70 text-center -mt-5 italic">
        That's me btw.
      </p>
    </div>
  );
}