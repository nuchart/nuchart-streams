export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getDashboardData } from "../lib/sheets";

function formatNumber(value) {
  if (!value) return "-";

  const cleanValue = value
    .toString()
    .replace(/\./g, "")
    .replace(/\+/g, "");

  return Number(cleanValue).toLocaleString("en-US");
}

function TrendDot(value) {
  const trend = value?.toString().toUpperCase();

  if (trend === "UP") {
    return (
      <span className="inline-block w-2 h-2 rounded-full bg-green-500 ml-1"></span>
    );
  }

  if (trend === "DOWN") {
    return (
      <span className="inline-block w-2 h-2 rounded-full bg-red-500 ml-1"></span>
    );
  }

  return (
    <span className="inline-block w-2 h-2 rounded-full bg-zinc-500 ml-1"></span>
  );
}

export default async function Home() {
  const data = await getDashboardData();

  const totalEunoia = data[1]?.[1];
  const totalSingel = data[2]?.[1];
  const totalCollabs = data[3]?.[1];

  const totalCatalog = data[4]?.[1];

  const monthlyListeners = data[6]?.[1];
  const followers = data[7]?.[1];

  const lastUpdate = data[9]?.[1];

  const dailyStreamsTotal = data[4]?.[3];

  const topEunoia = [2, 3, 4, 5, 6, 7, 8, 9];
  const topCollabs = [2, 3, 4, 5, 6, 7, 8];
  const topSingel = [13, 14, 15, 16, 17, 18, 19];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-8">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-2">
            NUCA STREAMS
          </h1>

          <p className="text-zinc-400">
            Spotify Statistics Tracker
          </p>

          <p className="text-sm text-zinc-500 mt-2">
            Last Update: {lastUpdate}
          </p>
        </div>

        {/* MAIN STATS */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Total Catalog</p>
            <h2 className="text-3xl font-bold mt-2">
              {formatNumber(totalCatalog)}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Monthly Listeners</p>
            <h2 className="text-3xl font-bold mt-2">
              {formatNumber(monthlyListeners)}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Followers</p>
            <h2 className="text-3xl font-bold mt-2">
              {formatNumber(followers)}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Daily Streams</p>
            <h2 className="text-3xl font-bold mt-2">
              {formatNumber(dailyStreamsTotal)}
            </h2>
          </div>

        </div>

        {/* CATALOG */}
        <h2 className="text-xl font-bold mb-4">
          Catalog Streams
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-12">

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Eunoia</p>
            <h2 className="text-3xl font-bold mt-2">
              {formatNumber(totalEunoia)}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Singel</p>
            <h2 className="text-3xl font-bold mt-2">
              {formatNumber(totalSingel)}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p className="text-zinc-400">Collabs</p>
            <h2 className="text-3xl font-bold mt-2">
              {formatNumber(totalCollabs)}
            </h2>
          </div>

        </div>

        {/* TABLES */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* EUNOIA */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Daily Streams Eunoia
            </h2>

            <div className="overflow-hidden rounded-2xl bg-zinc-900">

              <table className="w-full text-sm">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="p-3 text-left">#</th>
                    <th className="p-3 text-left">Track</th>
                    <th className="p-3 text-right">Streams</th>
                    <th className="p-3 text-right">Daily</th>
                  </tr>
                </thead>

                <tbody>
                  {topEunoia.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-zinc-800"
                    >
                      <td className="p-3">{index + 1}</td>

                      <td className="p-3">
                        {data[row]?.[5]}
                      </td>

                      <td className="p-3 text-right">
                        {formatNumber(data[row]?.[6])}
                      </td>

                      <td className="p-3 text-right">
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

          {/* SINGEL */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Daily Streams Singel
            </h2>

            <div className="overflow-hidden rounded-2xl bg-zinc-900">

              <table className="w-full text-sm">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="p-3 text-left">#</th>
                    <th className="p-3 text-left">Track</th>
                    <th className="p-3 text-right">Streams</th>
                    <th className="p-3 text-right">Daily</th>
                  </tr>
                </thead>

                <tbody>
                  {topSingel.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-zinc-800"
                    >
                      <td className="p-3">{index + 1}</td>

                      <td className="p-3">
                        {data[row]?.[5]}
                      </td>

                      <td className="p-3 text-right">
                        {formatNumber(data[row]?.[6])}
                      </td>

                      <td className="p-3 text-right">
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

          {/* COLLABS */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Daily Streams Collabs
            </h2>

            <div className="overflow-hidden rounded-2xl bg-zinc-900">

              <table className="w-full text-sm">
                <thead className="bg-zinc-800">
                  <tr>
                    <th className="p-3 text-left">#</th>
                    <th className="p-3 text-left">Track</th>
                    <th className="p-3 text-right">Streams</th>
                    <th className="p-3 text-right">Daily</th>
                  </tr>
                </thead>

                <tbody>
                  {topCollabs.map((row, index) => (
                    <tr
                      key={index}
                      className="border-t border-zinc-800"
                    >
                      <td className="p-3">{index + 1}</td>

                      <td className="p-3">
                        {data[row]?.[9]}
                      </td>

                      <td className="p-3 text-right">
                        {formatNumber(data[row]?.[10])}
                      </td>

                      <td className="p-3 text-right">
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

        </div>

      </div>
    </main>
  );
}