"use client";

import { useMemo, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  CalendarDays,
  CircleCheckBig,
  LoaderCircle,
} from "lucide-react";

import Calendar from "./Calendar";

function parseDate(dateString) {
  if (!dateString) return undefined;

  const [day, month, year] = dateString.split("/");

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  );
}

function formatDisplayDate(dateString) {
  if (!dateString) return "-";

  const date = parseDate(dateString);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function DatePicker({
  value,
  onChange,
  minDate,
  maxDate,
  updateStatus,
}) {
  const [open, setOpen] = useState(false);

  const selected = useMemo(() => {
    return parseDate(value);
  }, [value]);

  const handleSelect = (date) => {
    if (!date) return;

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();

    onChange(`${dd}/${mm}/${yyyy}`);

    setOpen(false);
  };

  const isCompleted = updateStatus === "completed";

  return (
    <Popover.Root
      open={open}
      onOpenChange={setOpen}
    >
      <Popover.Trigger asChild>

        <button
          className="
            w-full

            flex
            items-center
            justify-between

            rounded-xl
            sm:rounded-2xl

            border
            border-white/10

            bg-white/5
            backdrop-blur-xl

            px-3
            sm:px-4

            py-2
            sm:py-3

            transition-all
            duration-200

            hover:border-blue-500/30
          "
        >

          {/* LEFT */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            {isCompleted ? (

              <CircleCheckBig
                size={15}
                className="
                  text-green-400
                  shrink-0
                "
              />

            ) : (

              <LoaderCircle
                size={15}
                className="
                  text-yellow-400
                  animate-pulse
                  shrink-0
                "
              />

            )}

            <span
              className="
                text-[13px]
                sm:text-[15px]
                md:text-base

                font-semibold

                text-white
              "
            >
              {formatDisplayDate(value)}
            </span>

          </div>

          {/* RIGHT */}

          <CalendarDays
            size={16}
            className="
              text-blue-400
              shrink-0
            "
          />

        </button>

      </Popover.Trigger>

      <Popover.Portal>

        <Popover.Content
          sideOffset={10}
          align="start"
          className="
            z-50

            w-[240px]
            sm:w-[290px]

            rounded-2xl

            border
            border-zinc-800

            bg-zinc-900

            p-2
            sm:p-3

            shadow-2xl
          "
        >

          <Calendar
            selected={selected}
            onSelect={handleSelect}
            fromDate={parseDate(minDate)}
            toDate={parseDate(maxDate)}
          />

        </Popover.Content>

      </Popover.Portal>

    </Popover.Root>
  );
}