import Image from "next/image";

export default function Header({ lastUpdate }) {
  return (
    <header className="relative overflow-hidden">

      <Image
        src="/banner/nuca.jpg"
        alt="Nuca"
        width={1600}
        height={900}
        priority
        className="
          w-full
          h-[240px]
          sm:h-[320px]
          md:h-[400px]
          object-cover
          scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black
        via-black/60
        to-black/20
        "
      />

      {/* Bottom Fade */}
      <div
        className="
        absolute
        bottom-0
        left-0
        right-0
        h-32
        bg-gradient-to-t
        from-black
        to-transparent
        "
      />

      {/* Content */}
      <div
        className="
        absolute
        inset-x-0
        bottom-0
        pb-5
        md:pb-8
        "
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Label */}
          <div className="flex items-center gap-2 mb-3">

            <div className="w-8 h-[2px] bg-blue-400 rounded-full" />

            <span
              className="
              text-[10px]
              uppercase
              tracking-[3px]
              text-blue-300
              font-semibold
              "
            >
              Nuca Official Data
            </span>

          </div>

          {/* Title */}
          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            font-black
            leading-none
            tracking-tight
            "
          >
            NUCHART STREAMS
          </h1>

          {/* Subtitle */}
          <p
            className="
            mt-2
            text-sm
            md:text-base
            text-zinc-300
            "
          >
            Spotify Statistics Dashboard
          </p>

          {/* Update Badge */}
          <div
            className="
            inline-flex
            items-center
            gap-2

            mt-4

            px-3
            py-1.5

            rounded-full

            bg-zinc-900/40
            backdrop-blur-sm

            border
            border-zinc-800

            text-xs
            text-zinc-400
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />

            <span>{lastUpdate}</span>
          </div>

        </div>
      </div>

    </header>
  );
}