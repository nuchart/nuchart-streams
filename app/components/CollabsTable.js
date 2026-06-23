import Image from "next/image";

export default function CollabsTable({
  topCollabs,
  data,
  formatNumber,
  TrendDot,
  collabCovers,
}) {
  return (
    <>
        <div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">
                Daily Streams Collaboration
              </h2>

            </div>

            <div
              className="
              overflow-hidden
              rounded-3xl
              bg-zinc-900/60
              backdrop-blur-xl
              border
              border-zinc-800
              shadow-xl
              shadow-black/30
              "
            >

              <table className="w-full text-sm">
                <thead className="bg-zinc-950">
                  <tr>
                    <th className="
                      p-4
                      text-left
                      text-xs
                      uppercase
                      tracking-widest
                      text-zinc-500
                      font-semibold
                      ">Track</th>
                    <th className="
                        p-4
                        text-right
                        text-xs
                        uppercase
                        tracking-widest
                        text-zinc-500
                        font-semibold
                    ">Streams</th>
                    <th className="
                        p-4
                        text-right
                        text-xs
                        uppercase
                        tracking-widest
                        text-zinc-500
                        font-semibold
                    ">Daily</th>
                  </tr>
                </thead>

                <tbody>
                  {topCollabs.map((row, index) => (
                    <tr
                      key={index}
                      className="
                        border-t
                        border-zinc-800
                        hover:bg-zinc-800/30
                        transition-all
                        duration-200
                        "
                    >

                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <Image
                            src={
                              collabCovers[data[row]?.[9]] ||
                              "/covers/eunoia.jpg"
                            }
                            alt={data[row]?.[9]}
                            width={52}
                            height={52}
                            className="
                            rounded-xl
                            border
                            border-zinc-700
                            shadow-md
                            "
                          />

                          <div>
                            <p className="
                              font-semibold
                              text-white
                              leading-tight
                            ">
                              {data[row]?.[9]}
                            </p>
                            
                          </div>
                        </div>
                      </td>

                      <td className="
                        p-4
                        text-right
                        font-bold
                        tabular-nums
                        ">
                        {formatNumber(data[row]?.[10])}
                      </td>

                      <td className="
                        p-4
                        text-right
                        font-bold
                        tabular-nums
                        ">
                        <div className="flex items-center justify-end">
                          <span>{formatNumber(data[row]?.[11])}</span>
                          {TrendDot(data[row]?.[12])}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
        </div>
    </>
  );
}