import { commands, fetchPrices, fetchBrubeckData } from "./commands";
import { formatNodeData, formatPrices, formatBrubeckStats } from "./format";

export async function getNodeData(address: string) {
  try {
    const promises = commands.map((p) => p(address));

    const data = await Promise.all(promises);

    const formated = formatNodeData(data, address);

    return formated;
  } catch (e) {
    console.error(e);
  }
}

export async function getPrices() {
  try {
    const data = await fetchPrices();

    const formated = formatPrices(data);

    return formated;
  } catch (e) {
    console.error(e);
  }
}

export async function getBrubeckData() {
  try {
    const data = await fetchBrubeckData();

    const formated = formatBrubeckStats(data);

    return formated;
  } catch (e) {
    console.error(e);
  }
}
