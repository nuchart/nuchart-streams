export const dynamic = "force-dynamic";
export const revalidate = 0;

import Dashboard from "./Dashboard";
import { getDashboardData } from "../lib/sheets";

export default async function Home() {
  const dashboard = await getDashboardData();

  return (
    <Dashboard initialData={dashboard} />
  );
}