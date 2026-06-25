import Image from "next/image";

export default function SingelTable({
  topSingel,
  data,
  formatNumber,
  TrendDot,
  singleCovers,
}) {
  return (
    <div>
      {/* TITLE */}
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-tight">
          Daily Streams Singles
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Single Tracks Performance
        </p>
      </div>

      {/* TABLE */}
      <div
        className="
        bg-zinc-900/20
        backdrop-blur-xl
        rounded-2xl
        overflow-hidden
        "
      >
        <table className="w-full table-fixed text-sm">

          {/* HEADER */}
          <thead>
            <tr className="border-b border-zinc-800/60">

              <th
                className="
                px-3
                md:px-4
                py-3
                text-left
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[3px]
                text-zinc-500
                font-semibold
                "
              >
                Track
              </th>

              <th
                className="
                w-[85px]
                sm:w-[95px]
                md:w-[120px]

                px-2
                py-3

                text-right
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[3px]
                text-zinc-500
                font-semibold
                "
              >
                Streams
              </th>

              <th
                className="
                w-[75px]
                sm:w-[85px]
                md:w-[110px]

                px-2
                py-3

                text-right
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[3px]
                text-zinc-500
                font-semibold
                "
              >
                Daily
              </th>

            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {topSingel.map((row, index) => (
              <tr
                key={index}
                className="
                group
                border-b
                border-zinc-800/40

                transition-all
                duration-300

                hover:bg-gradient-to-r
                hover:from-blue-500/[0.06]
                hover:to-transparent
                "
              >
                {/* TRACK */}
                <td
                  className="
                  px-3
                  md:px-4
                  py-3
                  "
                >
                  <div className="flex items-center gap-2.5">

                    <Image
                      src={
                        singleCovers[data[row]?.[5]] ||
                        "/covers/singel.jpg"
                      }
                      alt={data[row]?.[5]}
                      width={32}
                      height={32}
                      className="
                      rounded-lg
                      border
                      border-zinc-700/70
                      shadow-sm
                      shrink-0

                      transition-all
                      duration-300

                      group-hover:scale-105
                      group-hover:border-blue-500/30
                      "
                    />

                    <div className="min-w-0 max-w-[140px] sm:max-w-none">

                      <p
                        className="
                        truncate
                        text-sm
                        md:text-[15px]
                        font-medium
                        text-white

                        transition-colors
                        duration-300

                        group-hover:text-blue-50
                        "
                        title={data[row]?.[5]}
                      >
                        {data[row]?.[5]}
                      </p>

                    </div>

                  </div>
                </td>

                {/* STREAMS */}
                <td
                  className="
                  px-2
                  py-3

                  text-right
                  text-xs
                  sm:text-sm

                  font-semibold
                  text-zinc-300

                  whitespace-nowrap
                  tabular-nums
                  "
                >
                  {formatNumber(data[row]?.[6])}
                </td>

                {/* DAILY */}
                <td
                  className="
                  px-2
                  py-3

                  text-xs
                  sm:text-sm

                  font-semibold
                  text-zinc-300

                  tabular-nums
                  "
                >
                  <div className="flex items-center justify-end">

                    <span className="text-right">
                      {formatNumber(data[row]?.[7])}
                    </span>

                    <span className="w-4 flex justify-center ml-1">
                      {TrendDot(data[row]?.[8])}
                    </span>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}