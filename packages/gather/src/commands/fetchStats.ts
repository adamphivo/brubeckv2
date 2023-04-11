import axios from "axios";
import { constants } from "../config";

export async function fetchStats(address: string) {
  try {
    const response = await axios.get(
      `${constants.BRUBECK_NODE_STATS_BASE}${address}`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
