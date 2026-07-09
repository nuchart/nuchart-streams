import Image from "next/image";

const collabCovers = {
  "Aku Yang Salah": "/covers/aku-yang-salah.jpg",
  "Janji Kita": "/covers/janji-kita.jpg",
  "Meant 2 Be": "/covers/meant-2-be.jpg",
  "Meant 2 Be ( Stripped Version)": "/covers/meant-2-be-stripped.jpg",
  "Benih": "/covers/benih.jpg",
  "Taklukkan Takut": "/covers/taklukkan-takut.jpg",
  "Taklukkan Takut (Accoustic)": "/covers/taklukkan-takut.jpg",
};

function TrendDot({ trend }) {
  const value = trend?.toUpperCase();

  if (value === "UP") {
    return (
      <span className="block w-2 h-2 rounded-full bg-green-500" />
    );
  }

  if (value === "DOWN") {
    return (
      <span className="block w-2 h-2 rounded-full bg-red-500" />
    );
  }

  return (
    <span className="block w-2 h-2 rounded-full bg-zinc-500" />
  );
}

export default function CollabsTable({
  dashboard,
}) {

  {/* Urut data Default
  const tracks = dashboard?.catalogs?.collaborations?.tracks ?? [];
  */}

  const tracks = [...(dashboard?.catalogs?.collaborations?.tracks ?? [])].sort(
    (a, b) => b.daily.value - a.daily.value
  );
  
  return (
    <div>

      {/* TITLE */}

      <div className="mb-5">

        <h2 className="text-xl font-bold tracking-tight">
          Daily Streams Collaborations
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Collaboration Tracks Performance
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
                w-[95px]
                sm:w-[115px]
                md:w-[130px]

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

          <tbody>

            {tracks.map((track) => (

              <tr
                key={track.track}
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
                        collabCovers[track.track] ??
                        "/covers/collab.jpg"
                      }
                      alt={track.track}
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
                      "
                    />

                    <div className="min-w-0">

                      <p
                        className="
                        truncate

                        text-sm
                        md:text-[15px]

                        font-medium
                        text-white
                        "
                        title={track.track}
                      >
                        {track.track}
                      </p>

                    </div>

                  </div>

                </td>

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
                  "
                >
                  {track.total.text}
                </td>

                <td
                  className="
                  py-3
                  pr-3
                  md:pr-4
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-end
                    gap-1.5
                    "
                  >

                    <span
                      className="
                      text-xs
                      sm:text-sm

                      font-medium
                      text-zinc-300

                      whitespace-nowrap
                      "
                    >
                      {track.daily.text}
                    </span>

                    <span className="w-3 flex justify-center">

                      <TrendDot trend={track.daily.trend} />

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