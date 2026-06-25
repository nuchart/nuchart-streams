import Image from "next/image";

export default function CatalogCards({
  totalEunoia,
  dailyEunoia,
  totalSingel,
  dailySingel,
  totalCollabs,
  dailyCollabs,
  formatNumber,
}) {
  const catalogs = [
    {
      title: "Eunoia",
      cover: "/covers/eunoia.jpg",
      total: totalEunoia,
      daily: dailyEunoia,
    },
    {
      title: "Singles",
      cover: "/covers/singel.jpg",
      total: totalSingel,
      daily: dailySingel,
    },
    {
      title: "Collaborations",
      cover: "/covers/collab.jpg",
      total: totalCollabs,
      daily: dailyCollabs,
    },
  ];

  return (
    <>
      {/* SECTION TITLE */}
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-tight">
          Catalog Streams
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Performance by release category
        </p>
      </div>

      {/* CARDS */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-3
        mb-10
        "
      >
        {catalogs.map((item) => (
          <div
            key={item.title}
            className="
            group
            relative
            overflow-hidden

            rounded-2xl
            border
            border-zinc-800

            bg-zinc-900/40
            backdrop-blur-xl

            p-3.5

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-blue-500/20
            hover:bg-zinc-900/60
            hover:shadow-lg
            hover:shadow-black/40
            "
          >
            {/* Hover Glow */}
            <div
              className="
              absolute
              inset-0

              opacity-0
              transition-opacity
              duration-300

              group-hover:opacity-100

              bg-gradient-to-r
              from-blue-500/[0.03]
              via-transparent
              to-transparent

              pointer-events-none
              "
            />

            <div className="relative z-10 flex items-center gap-2.5">

              <Image
                src={item.cover}
                alt={item.title}
                width={48}
                height={48}
                className="
                rounded-lg
                border
                border-zinc-700

                shrink-0

                transition-all
                duration-300

                group-hover:scale-105
                "
              />

              <div className="flex-1 min-w-0">

                <p
                  className="
                  text-[9px]
                  uppercase
                  tracking-[2px]
                  text-zinc-500
                  font-semibold
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                  text-lg
                  md:text-xl
                  font-black
                  tracking-tight
                  mt-0.5

                  transition-colors
                  duration-300

                  group-hover:text-white
                  "
                >
                  {formatNumber(item.total)}
                </h3>

                <div
                  className="
                  inline-flex
                  items-center
                  gap-1
                  mt-1.5

                  px-2
                  py-0.5

                  rounded-full

                  bg-zinc-800/80

                  text-[10px]
                  text-zinc-300

                  transition-all
                  duration-300

                  group-hover:bg-zinc-700
                  "
                >
                  🔥 {formatNumber(item.daily)}
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}