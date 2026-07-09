"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames,
} from "react-day-picker";

import "react-day-picker/style.css";

const defaultClassNames = getDefaultClassNames();

export default function Calendar({
  selected,
  onSelect,
  fromDate,
  toDate,
}) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      startMonth={fromDate}
      endMonth={toDate}
      disabled={[
        {
          before: fromDate,
        },
        {
          after: toDate,
        },
      ]}
      showOutsideDays={false}
      animate={false}
      components={{
        Chevron: ({ orientation, className, ...props }) =>
          orientation === "left" ? (
            <ChevronLeft
              {...props}
              className={className}
              size={14}
            />
          ) : (
            <ChevronRight
              {...props}
              className={className}
              size={14}
            />
          ),
      }}
      classNames={{
        root: `${defaultClassNames.root} p-0`,
        months: defaultClassNames.months,

        month:
          `${defaultClassNames.month} space-y-2`,

        month_caption:
          "flex items-center justify-between mb-2",

        caption_label:
          "text-xs sm:text-sm font-semibold text-white",

        nav:
          "flex items-center gap-1",

        button_previous:
          "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-800 transition-colors",

        button_next:
          "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-800 transition-colors",

        weekdays:
          "flex mb-1",

        weekday:
          "w-8 sm:w-9 text-[10px] sm:text-xs font-medium text-zinc-500",

        week:
          "flex mt-0.5 sm:mt-1",

        day:
          "h-8 w-8 sm:h-9 sm:w-9 p-0 text-center",

        day_button:
          "h-8 w-8 sm:h-9 sm:w-9 rounded-lg text-[12px] sm:text-sm text-white hover:bg-blue-500/15 transition-colors",

        selected:
          "bg-blue-600 text-white",

        today:
          "border border-blue-500",

        disabled:
          "text-zinc-700 opacity-40",

        outside:
          "text-zinc-700",

        hidden:
          "invisible",
      }}
    />
  );
}