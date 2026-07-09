import axios from "axios";

const API =
  "https://script.google.com/macros/s/AKfycbzG1SN5wrDEr9EGTcHCqW5-Y3FxJu3Am_-Rl6s6QsEPuu8iFfCyq69cDyE-KAWLKQHUOQ/exec";

export async function getDashboardData(date = null) {
  const url = date
    ? `${API}?action=dashboard&date=${encodeURIComponent(date)}`
    : `${API}?action=dashboard`;

  const { data } = await axios.get(url);

  return data;
}