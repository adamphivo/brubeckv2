import { constants } from "../config";
import axios from "axios";

export async function fetchPrices() {
  try {
    const requests = constants.PAIRS.map((symbol) =>
      axios
        .get(`${constants.BINANCE_PRICE_TICKER_URL}${symbol}`)
        .then((res) => res.data)
    );

    const data = await Promise.all(requests);

    return data;
  } catch (e) {
    throw e;
  }
}
