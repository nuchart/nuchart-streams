import Image from "next/image";

export default function Header({ lastUpdate }) {
  return (
    <div className="relative mb-12 overflow-hidden rounded-3xl">

      <Image
        src="/banner/nuca.jpg"
        alt="Nuca"
        width={1600}
        height={900}
        className="
          w-full
          h-[320px]
          object-cover
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />

      <div className="absolute bottom-0 left-0 p-8">

        <h1 className="text-5xl font-black">
          NUCHART STREAMS
        </h1>

        <p className="text-zinc-300 mt-2">
          Spotify Statistics Dashboard
        </p>

        <div className="flex gap-6 mt-4 text-sm text-zinc-400">
          <span>
            Jatuh cinta, patah hati, dan semua cerita indah lainnya. 🎶
          </span>
        </div>

        <div
          className="
            inline-flex
            items-center
            mt-4
            px-4
            py-2
            rounded-full
            bg-zinc-900/50
            border
            border-zinc-800
            text-sm
            text-zinc-300
          "
        >
          {lastUpdate}
        </div>

      </div>

    </div>
  );
}