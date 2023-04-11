import { fetchStats } from "./fetchStats";
import { fetchRewards } from "./fetchRewards";
import { fetchDataSent } from "./fetchDataSent";
import { fetchDataStaked } from "./fetchDataStaked";
import { fetchPrices } from "./fetchPrices";
import { fetchBrubeckData } from "./fetchBrubeckData";

export const commands = [
  fetchStats,
  fetchRewards,
  fetchDataSent,
  fetchDataStaked,
];

export {
  fetchStats,
  fetchRewards,
  fetchDataSent,
  fetchPrices,
  fetchBrubeckData,
};
