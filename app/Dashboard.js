"use client";

import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsCards from "./components/StatsCards";
import CatalogCards from "./components/CatalogCards";
import EunoiaTable from "./components/EunoiaTable";
import SingelTable from "./components/SingelTable";
import CollabsTable from "./components/CollabsTable";

import { getDashboardData } from "../lib/sheets";

export default function Dashboard({
  initialData,
}) {
  const [dashboard, setDashboard] = useState(initialData);

  const [selectedDate, setSelectedDate] = useState(
    initialData.selectedDate
  );

  const [refreshing, setRefreshing] = useState(false);

  const handleDateChange = async (date) => {
    try {
      setRefreshing(true);

      const data = await getDashboardData(date);

      setDashboard(data);
      setSelectedDate(data.selectedDate);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      <Header
        dashboard={dashboard}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
        refreshing={refreshing}
      />

      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          md:px-6
          lg:px-8
          pt-10
          pb-8
        "
      >
        <div className="max-w-3xl mx-auto text-center mb-12">

          <div className="w-16 h-px bg-blue-500 mx-auto mb-5" />

          <p
            className="
              text-base
              md:text-xl
              font-medium
              text-zinc-300
              leading-relaxed
            "
          >
            Real-time insights into Nuca streaming journey across
            albums, singles, and collaborations.
          </p>

        </div>

        <section className="mb-12">
          <StatsCards dashboard={dashboard} />
        </section>

        <section className="mb-14">
          <CatalogCards dashboard={dashboard} />
        </section>

        <section>

          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-2
              2xl:grid-cols-3
              gap-8
            "
          >

            <EunoiaTable dashboard={dashboard} />

            <SingelTable dashboard={dashboard} />

            <CollabsTable dashboard={dashboard} />

          </div>

        </section>

      </div>

      <Footer />

    </main>
  );
}