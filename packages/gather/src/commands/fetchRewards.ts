import axios from "axios";
import { constants } from "../config";

export async function fetchRewards(address: string) {
  try {
    const response = await axios.get(
      `${constants.BRUBECK_NODE_REWARDS_BASE}${address}`
    );

    return response.data;
  } catch (e) {
    console.error(e);
  }
}
