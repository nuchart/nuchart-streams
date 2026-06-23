export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import { getDashboardData } from "../lib/sheets";

function formatNumber(value) {
  if (!value) return "-";

  const cleanValue = value
    .toString()
    .replace(/\./g, "")
    .replace(/\+/g, "");

  return Number(cleanValue).toLocaleString("en-US");
}

const singleCovers = {
  "Crolatte 2.0": "/covers/crolatte.jpg",
  "Hilang": "/covers/hilang.jpg",
  "Sekarang, Esok, Selamanya": "/covers/sekarang-esok-selamanya.jpg",
  "Kagum": "/covers/kagum.jpg",
  "Perisai": "/covers/perisai.jpg",
  "Perisai (Acoustic)": "/covers/perisai-accoustic.jpg",
  "Lost Stars": "/covers/lost-stars.jpg",
};

const collabCovers = {
  "Aku Yang Salah": "/covers/aku-yang-salah.jpg",
  "Janji Kita": "/covers/janji-kita.jpg",
  "Meant 2 Be": "/covers/meant-2-be.jpg",
  "Benih": "/covers/benih.jpg",
  "Meant 2 Be (Stripped)": "/covers/meant-2-be-stripped.jpg",
  "Taklukkan Takut (Accoustic)": "/covers/taklukkan-takut-accoustic.jpg",
  "Taklukkan Takut": "/covers/taklukkan-takut.jpg",
};

function TrendDot(value) {
  const trend = value?.toString().toUpperCase();

  if (trend === "UP") {
    return (
      <span className="inline-block w-2 h-2 rounded-full bg-green-500 ml-2"></span>
    );
  }

  if (trend === "DOWN") {
    return (
      <span className="inline-block w-2 h-2 rounded-full bg-red-500 ml-2"></span>
    );
  }

  return (
    <span className="inline-block w-2 h-2 rounded-full bg-zinc-500 ml-2"></span>
  );
}

export default async function Home() {
  const data = await getDashboardData();

  const totalEunoia = data[1]?.[1];
  const totalSingel = data[2]?.[1];
  const totalCollabs = data[3]?.[1];

  const dailyEunoia = data[1]?.[3];
  const dailySingel = data[2]?.[3];
  const dailyCollabs = data[3]?.[3];

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
        <div className="relative mb-12 overflow-hidden rounded-3xl">

          <Image
            src="/banner/nuca.jpg"
            alt="Nuca"
            width={1600}
            height={900}
            className="
              w-full
              h-[320px]
              object-cover
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black
              via-black/40
              to-transparent
            "
          />

          <div
            className="
              absolute bottom-0
              left-0
              p-8
            "
          >

            <h1 className="text-5xl font-black">
              NUCHART STREAMS
            </h1>

            <p className="text-zinc-300 mt-2">
              Spotify Statistics Dashboard
            </p>

            <div className="flex gap-6 mt-4 text-sm text-zinc-400">
              <span>
                Jatuh cinta, patah hati, dan semua cerita indah lainnya. 🎶 Lacak terus perjalanan streams lagu-lagu Nuca di Spotify dan temukan bagaimana setiap melodinya menjadi soundtrack hidup kita!
              </span>
            </div>

            <div
              className="
              inline-flex
              items-center
              mt-4
              px-4
              py-2
              rounded-full
              bg-zinc-900/50
              border
              border-zinc-800
              text-sm
              text-zinc-300
              "
            >
              {lastUpdate}
            </div>

          </div>

        </div>

        {/* MAIN STATS */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">

          <div
              className="
              bg-zinc-900/60
              backdrop-blur-xl
              border
              border-zinc-800
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/10
            ">
            <p className="
              text-zinc-500
              uppercase
              tracking-widest
              text-xs
              font-semibold
              ">📈 Total Catalog</p>
            <h2 className="text-3xl font-black mt-2">
              {formatNumber(totalCatalog)}
            </h2>
          </div>

          <div
              className="
              bg-zinc-900/60
              backdrop-blur-xl
              border
              border-zinc-800
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/10
            ">
            <p className="
              text-zinc-500
              uppercase
              tracking-widest
              text-xs
              font-semibold
              ">🎧 Monthly Listeners</p>
            <h2 className="text-3xl font-black mt-2">
              {formatNumber(monthlyListeners)}
            </h2>
          </div>

          <div
              className="
              bg-zinc-900/60
              backdrop-blur-xl
              border
              border-zinc-800
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/10
            ">
            <p className="
              text-zinc-500
              uppercase
              tracking-widest
              text-xs
              font-semibold
              ">👥  Followers</p>
            <h2 className="text-3xl font-black mt-2">
              {formatNumber(followers)}
            </h2>
          </div>

          <div
              className="
              bg-zinc-900/60
              backdrop-blur-xl
              border
              border-zinc-800
              rounded-3xl
              p-6
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/10
            ">
            <p className="
              text-zinc-500
              uppercase
              tracking-widest
              text-xs
              font-semibold
              ">🔥 Daily Streams</p>
            <h2 className="text-3xl font-black mt-2">
              {formatNumber(dailyStreamsTotal)}
            </h2>
          </div>

        </div>

        {/* CATALOG */}
        <h2 className="text-xl font-bold mb-4">
          Catalog Streams
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-12">

          {/* EUNOIA */}
          <div className="
            bg-zinc-900/60
            backdrop-blur-xl
            border
            border-zinc-800
            rounded-2xl
            p-4 md:p-5
            transition-all
            duration-300
            hover:border-blue-500
            hover:shadow-xl
            hover:shadow-blue-500/10
          ">

            <div className="flex items-center gap-4">

              <Image
                src="/covers/eunoia.jpg"
                alt="Eunoia"
                width={72}
                height={72}
                className="
                  rounded-xl
                  border
                  border-zinc-700
                  shadow-lg
                  shrink-0
                "
              />

              <div className="flex-1">

                <p className="
                  text-zinc-500
                  uppercase
                  tracking-[2px]
                  text-xs
                  font-semibold
                ">
                  Eunoia
                </p>

                <h2 className="text-2xl md:text-3xl font-black mt-1">
                  {formatNumber(totalEunoia)}
                </h2>

                <div className="
                  inline-flex
                  items-center
                  gap-2
                  mt-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-blue-500/10
                  text-blue-400
                  text-xs
                  md:text-sm
                  font-medium
                ">
                  🔥 {formatNumber(dailyEunoia)}
                </div>

              </div>

            </div>

          </div>

          {/* SINGEL */}
          <div className="
            bg-zinc-900/60
            backdrop-blur-xl
            border
            border-zinc-800
            rounded-2xl
            p-4 md:p-5
            transition-all
            duration-300
            hover:border-blue-500
            hover:shadow-xl
            hover:shadow-blue-500/10
          ">

            <div className="flex items-center gap-4">

              <Image
                src="/covers/singel.jpg"
                alt="Singel"
                width={72}
                height={72}
                className="
                  rounded-xl
                  border
                  border-zinc-700
                  shadow-lg
                  shrink-0
                "
              />

              <div className="flex-1">

                <p className="
                  text-zinc-500
                  uppercase
                  tracking-[2px]
                  text-xs
                  font-semibold
                ">
                  Singels
                </p>

                <h2 className="text-2xl md:text-3xl font-black mt-1">
                  {formatNumber(totalSingel)}
                </h2>

                <div className="
                  inline-flex
                  items-center
                  gap-2
                  mt-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-blue-500/10
                  text-blue-400
                  text-xs
                  md:text-sm
                  font-medium
                ">
                  🔥 {formatNumber(dailySingel)}
                </div>

              </div>

            </div>

          </div>

          {/* COLLABS */}
          <div className="
            bg-zinc-900/60
            backdrop-blur-xl
            border
            border-zinc-800
            rounded-2xl
            p-4 md:p-5
            transition-all
            duration-300
            hover:border-blue-500
            hover:shadow-xl
            hover:shadow-blue-500/10
          ">

            <div className="flex items-center gap-4">

              <Image
                src="/covers/collab.jpg"
                alt="Collaborations"
                width={72}
                height={72}
                className="
                  rounded-xl
                  border
                  border-zinc-700
                  shadow-lg
                  shrink-0
                "
              />

              <div className="flex-1">

                <p className="
                  text-zinc-500
                  uppercase
                  tracking-[2px]
                  text-xs
                  font-semibold
                ">
                  Collaborations
                </p>

                <h2 className="text-2xl md:text-3xl font-black mt-1">
                  {formatNumber(totalCollabs)}
                </h2>

                <div className="
                  inline-flex
                  items-center
                  gap-2
                  mt-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-blue-500/10
                  text-blue-400
                  text-xs
                  md:text-sm
                  font-medium
                ">
                  🔥 {formatNumber(dailyCollabs)}
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* TABLES */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* EUNOIA */}
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

          {/* SINGEL */}
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-bold">
                Daily Streams Singels
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
                  {topSingel.map((row, index) => (
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
                              singleCovers[data[row]?.[5]] ||
                              "/covers/eunoia.jpg"
                            }
                            alt={data[row]?.[5]}
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
                        font-bold
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

          {/* COLLABS */}
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

        </div>

      </div>

      <footer className="
        mt-16
        border-t
        border-zinc-800
        py-8
        text-center
      ">
        <p className="text-zinc-500 text-sm">
          Nuchart Streams © 2026
        </p>

        <p className="text-zinc-600 text-xs mt-2">
          Spotify Statistics Tracker
        </p>
      </footer>
    </main>
  );
}