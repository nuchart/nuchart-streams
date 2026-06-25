export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import { getDashboardData } from "../lib/sheets";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsCards from "./components/StatsCards";
import CatalogCards from "./components/CatalogCards";
import EunoiaTable from "./components/EunoiaTable";
import SingelTable from "./components/SingelTable";
import CollabsTable from "./components/CollabsTable";

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
      <span className="w-2 h-2 rounded-full bg-green-500 block" />
    );
  }

  if (trend === "DOWN") {
    return (
      <span className="w-2 h-2 rounded-full bg-red-500 block" />
    );
  }

  return (
    <span className="w-2 h-2 rounded-full bg-zinc-500 block" />
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

      {/* HERO HEADER */}
      <Header lastUpdate={lastUpdate} />

      {/* CONTENT */}
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

        {/* INTRO */}
        <div className="max-w-3xl mx-auto text-center mb-12">

          <div className="w-16 h-px bg-blue-500 mx-auto mb-5"></div>

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

        {/* MAIN STATS */}
        <section className="mb-12">

          <StatsCards
            totalCatalog={totalCatalog}
            monthlyListeners={monthlyListeners}
            followers={followers}
            dailyStreamsTotal={dailyStreamsTotal}
            formatNumber={formatNumber}
          />

        </section>

        {/* CATALOG */}
        <section className="mb-14">

          <CatalogCards
            totalEunoia={totalEunoia}
            dailyEunoia={dailyEunoia}
            totalSingel={totalSingel}
            dailySingel={dailySingel}
            totalCollabs={totalCollabs}
            dailyCollabs={dailyCollabs}
            formatNumber={formatNumber}
          />

        </section>

        {/* TRACK RANKINGS */}
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

            {/* EUNOIA */}
            <EunoiaTable
              topEunoia={topEunoia}
              data={data}
              formatNumber={formatNumber}
              TrendDot={TrendDot}
            />

            {/* SINGLES */}
            <SingelTable
              topSingel={topSingel}
              data={data}
              formatNumber={formatNumber}
              TrendDot={TrendDot}
              singleCovers={singleCovers}
            />

            {/* COLLABS */}
            <CollabsTable
              topCollabs={topCollabs}
              data={data}
              formatNumber={formatNumber}
              TrendDot={TrendDot}
              collabCovers={collabCovers}
            />

          </div>

        </section>

      </div>

      <Footer />

    </main>
  );
}