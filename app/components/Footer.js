export default function Footer() {
  return (
    <footer
      className="
      relative
      mt-16
      border-t
      border-zinc-800
      overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-500/[0.02]
        via-transparent
        to-transparent
        pointer-events-none
        "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        lg:px-8

        py-8
        md:py-10
        "
      >
        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          "
        >
          {/* Left */}
          <div className="text-center md:text-left">

            <h3
              className="
              text-sm
              font-semibold
              tracking-wide
              text-zinc-300
              "
            >
              NUCHART STREAMS
            </h3>

            <p
              className="
              text-xs
              text-zinc-500
              mt-1
              "
            >
              Spotify Statistics Dashboard
            </p>

          </div>

          {/* Center */}
          <div
            className="
            hidden
            md:flex
            items-center
            gap-2
            "
          >
            <div className="w-12 h-px bg-zinc-800" />

            <div className="w-2 h-2 rounded-full bg-blue-400" />

            <div className="w-12 h-px bg-zinc-800" />
          </div>

          {/* Right */}
          <div
            className="
            text-center
            md:text-right
            "
          >
            <p
              className="
              text-xs
              text-zinc-500
              "
            >
              © 2026 Nuchart Streams
            </p>

            <p
              className="
              text-[11px]
              text-zinc-600
              mt-1
              "
            >
              Built for Nuca streaming analytics
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}