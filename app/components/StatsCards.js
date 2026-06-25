export default function StatsCards({
  totalCatalog,
  monthlyListeners,
  followers,
  dailyStreamsTotal,
  formatNumber,
}) {
  const stats = [
    {
      title: "Total Catalog",
      value: formatNumber(totalCatalog),
      icon: "🎵",
    },
    {
      title: "Monthly Listeners",
      value: formatNumber(monthlyListeners),
      icon: "🎧",
    },
    {
      title: "Followers",
      value: formatNumber(followers),
      icon: "👥",
    },
    {
      title: "Daily Streams",
      value: formatNumber(dailyStreamsTotal),
      icon: "🔥",
    },
  ];

  return (
    <div
      className="
      grid
      grid-cols-2
      lg:grid-cols-4
      gap-3
      md:gap-4
      mb-10
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
          group
          relative
          overflow-hidden

          rounded-2xl
          border
          border-zinc-800

          bg-zinc-900/40
          backdrop-blur-xl

          px-4
          py-4

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

          <div className="relative z-10">

            <div className="flex items-center justify-between mb-2">

              <span
                className="
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[2px]
                text-zinc-500
                font-semibold
                "
              >
                {stat.title}
              </span>

              <span
                className="
                text-sm
                transition-transform
                duration-300
                group-hover:scale-110
                "
              >
                {stat.icon}
              </span>

            </div>

            <h2
              className="
              text-xl
              sm:text-2xl
              font-black
              tracking-tight

              text-white

              transition-colors
              duration-300

              group-hover:text-blue-50
              "
            >
              {stat.value}
            </h2>

          </div>
        </div>
      ))}
    </div>
  );
}