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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">

        {/* HEADER */}
        <Header lastUpdate={lastUpdate} />

        {/* INTRO TEXT */}
        <div className="max-w-4xl mx-auto text-center mb-12">

          <div className="w-16 h-px bg-blue-500 mx-auto mb-6"></div>

          <p
            className="
              text-lg
              md:text-2xl
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
        <StatsCards
          totalCatalog={totalCatalog}
          monthlyListeners={monthlyListeners}
          followers={followers}
          dailyStreamsTotal={dailyStreamsTotal}
          formatNumber={formatNumber}
        />

        {/* CATALOG CARDS */}
        <CatalogCards
          totalEunoia={totalEunoia}
          dailyEunoia={dailyEunoia}
          totalSingel={totalSingel}
          dailySingel={dailySingel}
          totalCollabs={totalCollabs}
          dailyCollabs={dailyCollabs}
          formatNumber={formatNumber}
        />

        {/* TABLES */}
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6">

          {/* EUNOIA */}
          <EunoiaTable
            topEunoia={topEunoia}
            data={data}
            formatNumber={formatNumber}
            TrendDot={TrendDot}
          />

          {/* SINGEL */}
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

      </div>

    <Footer />
    </main>
  );
}