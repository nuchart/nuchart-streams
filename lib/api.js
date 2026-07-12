import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function getDashboardData(date = null) {
  const url = date
    ? `${API}?action=dashboard&date=${encodeURIComponent(date)}`
    : `${API}?action=dashboard`;

  const { data } = await axios.get(url);

  return data;
}