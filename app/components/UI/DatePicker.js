"use client";

import { useMemo, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { CalendarDays } from "lucide-react";

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

            rounded-2xl

            border
            border-white/10

            bg-white/5
            backdrop-blur-xl

            px-4
            py-3

            hover:border-blue-500/30
            transition-colors
          "
        >
          <span
            className="
              text-sm
              sm:text-base
              md:text-lg

              font-semibold
              text-white
            "
          >
            {formatDisplayDate(value)}
          </span>

          <CalendarDays
            size={18}
            className="text-blue-400 shrink-0"
          />
        </button>

      </Popover.Trigger>

      <Popover.Portal>

        <Popover.Content
          sideOffset={10}
          align="start"
          className="
            z-50

            w-[250px]
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