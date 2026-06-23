import Image from "next/image";

export default function EunoiaTable({
  topEunoia,
  data,
  formatNumber,
  TrendDot,
}) {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-tight">
          Daily Streams Eunoia
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Album Tracks Performance
        </p>
      </div>

      <div
        className="
        rounded-3xl
        bg-zinc-900/60
        backdrop-blur-xl
        border
        border-zinc-800
        shadow-xl
        shadow-black/30
        overflow-hidden
        "
      >
        <table className="w-full table-fixed text-sm">
          <thead className="bg-zinc-950/80">
            <tr>
              <th
                className="
                px-4 py-4
                text-left
                text-[11px]
                uppercase
                tracking-[2px]
                text-zinc-500
                font-semibold
                "
              >
                Track
              </th>

              <th
                className="
                w-[110px]
                md:w-[140px]
                px-3 md:px-4
                py-4
                text-right
                text-[11px]
                uppercase
                tracking-[2px]
                text-zinc-500
                font-semibold
                "
              >
                Streams
              </th>

              <th
                className="
                w-[110px]
                md:w-[140px]
                px-3 md:px-4
                py-4
                text-right
                text-[11px]
                uppercase
                tracking-[2px]
                text-zinc-500
                font-semibold
                "
              >
                Daily
              </th>
            </tr>
          </thead>

          <tbody>
            {topEunoia.map((row, index) => (
              <tr
                key={index}
                className="
                border-t
                border-zinc-800/60
                hover:bg-blue-500/5
                transition-all
                duration-200
                "
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/covers/eunoia.jpg"
                      alt="Eunoia"
                      width={42}
                      height={42}
                      className="
                      rounded-lg
                      border
                      border-zinc-700
                      shadow-md
                      flex-shrink-0
                      "
                    />

                    <div className="flex-1 min-w-0">
                      <p
                        className="
                        font-medium
                        text-white
                        text-sm
                        leading-tight
                        truncate
                        "
                      >
                        {data[row]?.[5]}
                      </p>
                    </div>
                  </div>
                </td>

                <td
                  className="
                  px-3 md:px-4
                  py-3
                  text-right
                  font-semibold
                  text-zinc-300
                  tabular-nums
                  whitespace-nowrap
                  "
                >
                  {formatNumber(data[row]?.[6])}
                </td>

                <td
                  className="
                  px-3 md:px-4
                  py-3
                  text-right
                  font-semibold
                  text-zinc-200
                  tabular-nums
                  whitespace-nowrap
                  "
                >
                  <div className="flex items-center justify-end gap-3">
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