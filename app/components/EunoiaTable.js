import Image from "next/image";

export default function EunoiaTable({
  topEunoia,
  data,
  formatNumber,
  TrendDot,
}) {
  return (
    <div>
      {/* TITLE */}
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-tight">
          Daily Streams Eunoia
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Album Tracks Performance
        </p>
      </div>

      {/* TABLE CARD */}
      <div
        className="
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/40
        backdrop-blur-xl
        overflow-hidden
        "
      >
        <table className="w-full text-sm">

          {/* HEADER */}
          <thead>
            <tr
              className="
              text-zinc-500
              text-[10px]
              md:text-[11px]
              uppercase
              tracking-[2px]
              "
            >
              <th
                className="
                px-2.5
                md:px-4
                py-3
                text-left
                font-semibold
                "
              >
                Track
              </th>

              <th
                className="
                w-[75px]
                sm:w-[85px]
                md:w-[105px]

                px-1.5
                md:px-2

                py-3
                text-right
                font-semibold
                "
              >
                Streams
              </th>

              <th
                className="
                w-[80px]
                sm:w-[90px]
                md:w-[105px]

                px-1.5
                md:px-2

                py-3
                text-right
                font-semibold
                "
              >
                Daily
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {topEunoia.map((row, index) => (
              <tr
                key={index}
                className="
                group

                transition-all
                duration-300

                hover:bg-white/[0.03]
                "
              >
                {/* TRACK */}
                <td
                  className="
                  px-2.5
                  md:px-4

                  py-2.5
                  "
                >
                  <div className="flex items-center gap-2">

                    <Image
                      src="/covers/eunoia.jpg"
                      alt="Eunoia"
                      width={34}
                      height={34}
                      className="
                      rounded-lg
                      border
                      border-zinc-700
                      shrink-0

                      transition-transform
                      duration-300

                      group-hover:scale-105
                      "
                    />

                    <div className="flex-1 min-w-0">

                      <p
                        className="
                        text-sm
                        font-medium
                        text-white
                        truncate

                        transition-colors
                        duration-300

                        group-hover:text-zinc-100
                        "
                      >
                        {data[row]?.[5]}
                      </p>

                    </div>

                  </div>
                </td>

                {/* STREAMS */}
                <td
                  className="
                  px-1.5
                  md:px-2

                  py-2.5

                  text-right

                  text-xs
                  sm:text-sm

                  font-semibold
                  text-zinc-300

                  tabular-nums
                  whitespace-nowrap
                  "
                >
                  {formatNumber(data[row]?.[6])}
                </td>

                {/* DAILY */}
                <td
                  className="
                  px-1.5
                  md:px-2

                  py-2.5

                  text-right

                  text-xs
                  sm:text-sm

                  font-semibold
                  text-zinc-300

                  tabular-nums
                  whitespace-nowrap
                  "
                >
                  <div className="inline-flex items-center justify-end gap-1">

                    <span>
                      {formatNumber(data[row]?.[7])}
                    </span>

                    {TrendDot(data[row]?.[8])}

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