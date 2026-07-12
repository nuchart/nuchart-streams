import Image from "next/image";
import {
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

export default function CatalogCards({
  dashboard,
}) {
  const catalogs = [
  {
    title: "Eunoia",
    cover: "/covers/eunoia.jpg",

    total:
      dashboard?.catalogs?.eunoia?.summary?.totalStreams?.text ?? "-",

    today:
      dashboard?.catalogs?.eunoia?.summary?.dailyStreams?.text ?? "-",

    difference:
      dashboard?.catalogs?.eunoia?.summary?.dailyStreams?.difference?.text ?? "-",

    trend:
      dashboard?.catalogs?.eunoia?.summary?.dailyStreams?.trend ?? "same",
  },

  {
    title: "Singles",
    cover: "/covers/singel.jpg",

    total:
      dashboard?.catalogs?.singles?.summary?.totalStreams?.text ?? "-",

    today:
      dashboard?.catalogs?.singles?.summary?.dailyStreams?.text ?? "-",

    difference:
      dashboard?.catalogs?.singles?.summary?.dailyStreams?.difference?.text ?? "-",

    trend:
      dashboard?.catalogs?.singles?.summary?.dailyStreams?.trend ?? "same",
  },

  {
    title: "Collaborations",
    cover: "/covers/collab.jpg",

    total:
      dashboard?.catalogs?.collaborations?.summary?.totalStreams?.text ?? "-",

    today:
      dashboard?.catalogs?.collaborations?.summary?.dailyStreams?.text ?? "-",

    difference:
      dashboard?.catalogs?.collaborations?.summary?.dailyStreams?.difference?.text ?? "-",

    trend:
      dashboard?.catalogs?.collaborations?.summary?.dailyStreams?.trend ?? "same",
  },
];

const TrendIcon = ({ trend }) => {
  switch (trend?.toLowerCase()) {
    case "up":
      return (
        <TrendingUp
          size={13}
          className="text-green-400"
        />
      );

    case "down":
      return (
        <TrendingDown
          size={13}
          className="text-red-400"
        />
      );

    default:
      return (
        <Minus
          size={13}
          className="text-zinc-400"
        />
      );
  }
};

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
                width={70}
                height={70}
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
                  {item.total}
                </h3>

                <div
                  className="
                    mt-2

                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* Daily Today */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                    "
                  >


                    <span
                      className="
                        text-[13px]
                        md:text-[14px]
                        font-bold
                        text-zinc-200
                        tracking-tight
                      "
                    >
                      {item.today}
                    </span>
                  </div>

                  {/* Daily Trend */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1
                    "
                  >

                    <TrendIcon trend={item.trend} />

                    <span
                      className={`

                        text-[11px]
                        font-semibold

                        ${
                          item.trend === "up"
                            ? "text-green-400"
                            : item.trend === "down"
                            ? "text-red-400"
                            : "text-zinc-400"
                        }

                      `}
                    >
                      {item.trend === "up" ? "+" : ""}
                      {item.difference}
                    </span>

                  </div>

                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}