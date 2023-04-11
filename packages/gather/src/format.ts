import { constants } from "./config";
import {
  NodeData,
  BrubeckStats,
  NetworkRewardCode,
} from "@brubeckscan/common/src/types/gather";

export function formatPrices(data: any) {
  let prices: any = {};

  data.forEach((item: any) => {
    prices[item.symbol] = +item.price;
  });

  return prices;
}

export function formatNodeData(data: any, address: string): NodeData {
  const totalDATASent: number = data[2]?.erc20Transfers.reduce(
    (previous: any, current: any) => {
      return previous + +current.value;
    },
    0
  );

  const firstClaim = data[0].claimedRewardCodes[0];
  const lastClaim = data[0].claimedRewardCodes.at(-1);

  const claimedRewardCodes = data[0].claimedRewardCodes.slice(-10).reverse();

  return {
    address: address,
    staked: +data[3]?.erc20Balances[0].value || 0,
    toBeReceived: data[1].DATA - totalDATASent,
    sent: +totalDATASent || 0,
    rewarded: data[1].DATA || 0,
    firstClaim: firstClaim || null,
    lastClaim: lastClaim || null,
    claimCount: +data[0].claimCount,
    claimPercentage: +data[0].claimPercentage,
    payouts: data[2]?.erc20Transfers,
    claimedRewardCodes: claimedRewardCodes,
    polygonScanURL: `${constants.POLYGONSCAN_BASE}${address}`,
    identiconURL: `${constants.IDENTICON_BASE}${address}`,
  };
}

export function formatBrubeckStats(data: Array<any>): BrubeckStats {
  const averages = getAverages(data[1].lastRewards);

  return {
    stats: {
      "24APR": data[0]["24h-APR"],
      "24APY": data[0]["24h-APY"],
      SPOTAPR: data[0]["spot-APR"],
      SPOTAPY: data[0]["spot-APY"],
      "24DATASTAKED": data[0]["24h-data-staked"],
      SPOTDATASTAKED: data[0]["spot-data-staked"],
    },
    averages: averages,
    latestRewardCodes: data[1].lastRewards,
  };
}

function getAverages(codes: NetworkRewardCode[]) {
  let totalTopologySize = 0;
  let totalReceivedClaims = 0;
  let totalMeanPropagationDelay = 0;

  codes.map((code) => {
    totalTopologySize += code.topologySize;
    totalReceivedClaims += code.receivedClaims;
    totalMeanPropagationDelay += code.meanPropagationDelay;
  });

  let averageTopologySize = totalTopologySize / codes.length;
  let averageReceivedClaims = totalReceivedClaims / codes.length;
  let averageMeanPropagationDelay = totalMeanPropagationDelay / codes.length;

  return {
    averageTopologySize,
    averageReceivedClaims,
    averageMeanPropagationDelay,
  };
}
