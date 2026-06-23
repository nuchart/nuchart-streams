export default function StatsCards({
  totalCatalog,
  monthlyListeners,
  followers,
  dailyStreamsTotal,
  formatNumber,
}) {
  return (
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
      "
      >
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
          📈 Total Catalog
        </p>

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
      "
      >
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
          🎧 Monthly Listeners
        </p>

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
      "
      >
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
          👥 Followers
        </p>

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
      "
      >
        <p className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">
          🔥 Daily Streams
        </p>

        <h2 className="text-3xl font-black mt-2">
          {formatNumber(dailyStreamsTotal)}
        </h2>
      </div>

    </div>
  );
}