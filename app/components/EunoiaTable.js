import Image from "next/image";

export default function EunoiaTable({
  topEunoia,
  data,
  formatNumber,
  TrendDot,
}) {
  return (
    <>
        <div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold">
                    Daily Streams Eunoia
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
                      {topEunoia.map((row, index) => (
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
                                src="/covers/eunoia.jpg"
                                alt="Eunoia"
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
                                  {data[row]?.[5]}
                                </p>
    
                              </div>
    
                            </div>
                          </td>
    
                          <td className="
                            p-4
                            text-right
                            font-semibold
                            text-zinc-200
                            tabular-nums
                            ">
                            {formatNumber(data[row]?.[6])}
                          </td>
    
                          <td className="
                            p-4
                            text-right
                            font-semibold
                            text-zinc-200
                            tabular-nums
                            ">
                            <div className="flex items-center justify-end">
                              <span>{formatNumber(data[row]?.[7])}</span>
                              {TrendDot(data[row]?.[8])}
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