import { constants } from "../config";
import axios from "axios";

export async function fetchBrubeckData() {
  try {
    const urls = [constants.BRUBECK_APY, constants.BRUBECK_STATS];

    const requests = urls.map((url) => axios.get(url).then((res) => res.data));

    const data = await Promise.all(requests);

    return data;
  } catch (e) {
    throw e;
  }
}
