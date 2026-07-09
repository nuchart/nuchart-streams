import Image from "next/image";
import DatePicker from "./UI/DatePicker";

export default function Header({
  dashboard,
  selectedDate,
  onDateChange,
  refreshing,
}) {
  return (
    <header className="relative overflow-hidden">

      {/* Banner */}
      <Image
        src="/banner/nucat.jpg"
        alt="Nuca"
        width={1600}
        height={900}
        priority
        className="
          w-full
          h-[260px]
          sm:h-[340px]
          md:h-[430px]
          lg:h-[520px]
          xl:h-[580px]

          object-cover
          object-center

          md:object-[center_25%]
          lg:object-[center_18%]
          xl:object-[center_15%]
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-44
          bg-gradient-to-t
          from-black
          via-black/80
          to-transparent
        "
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">

        <div
          className="
            w-full
            max-w-7xl
            mx-auto

            px-4
            md:px-6
            lg:px-8

            pb-6
            md:pb-8
            lg:pb-10
          "
        >

          <div className="max-w-3xl">

            {/* Title */}

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-black
                leading-none
                tracking-tight

                text-white
              "
            >
              NUCHART STREAMS
            </h1>

            {/* Subtitle */}

            <p
              className="
                mt-3

                text-sm
                md:text-base

                text-zinc-300
              "
            >
              Spotify Statistics Dashboard
            </p>

            {/* Date Picker */}

            <div className="mt-6 max-w-[240px]">

              <DatePicker
                value={selectedDate}
                onChange={onDateChange}
                minDate="14/06/2026"
                maxDate={dashboard.lastUpdate}
              />

            </div>

            {/* Loading */}

            {refreshing && (

              <p
                className="
                  mt-3

                  text-sm

                  text-blue-400
                "
              >
                Updating data...
              </p>

            )}

          </div>

        </div>

      </div>

    </header>
  );
}