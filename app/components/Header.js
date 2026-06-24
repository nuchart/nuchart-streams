import Image from "next/image";

export default function Header({ lastUpdate }) {
  return (
    <div className="relative overflow-hidden">

      <Image
        src="/banner/nuca.jpg"
        alt="Nuca"
        width={1600}
        height={900}
        className="
          w-full
          h-[260px]
          sm:h-[340px]
          md:h-[480px]
          object-cover
          scale-105
        "
        priority
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/70
          to-black/10
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          pb-6
          md:pb-10
        "
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          <div
            className="
              inline-flex
              items-center
              gap-2
              mb-4
            "
          >
            <div className="w-8 h-[2px] bg-blue-300 rounded-full" />

            <span
              className="
                text-[10px]
                md:text-xs
                uppercase
                tracking-[3px]
                text-blue-300
                font-semibold
              "
            >
              Nuca Official Data
            </span>
          </div>

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

          <p
            className="
              mt-3
              text-sm
              md:text-lg
              text-zinc-300
            "
          >
            Spotify Statistics Dashboard
          </p>

          <p
            className="
              mt-2
              max-w-2xl
              text-xs
              md:text-sm
              text-zinc-400
            "
          >
            Jatuh cinta, patah hati, dan semua cerita indah lainnya. 🎶
          </p>

          <div
            className="
              inline-flex
              items-center
              gap-2
              mt-5
              px-4
              py-2
              rounded-full
              bg-zinc-900/60
              backdrop-blur-md
              border
              border-zinc-700/70
              text-xs
              md:text-sm
              text-zinc-300
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />

            <span>
              Updated {lastUpdate}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}