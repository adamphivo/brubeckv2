export interface NodeData {
    address: string;
    staked: number;
    toBeReceived: number;
    sent: number;
    rewarded: number;
    firstClaim: RewardCode | null;
    lastClaim: RewardCode | null;
    claimCount: number;
    claimPercentage: number;
    claimedRewardCodes: RewardCode[];
    payouts: Payout[];
    polygonScanURL: string;
    identiconURL: string;
}
interface Payout {
    value: string;
    timestamp: string;
}
interface RewardCode {
    id: string;
    claimTime: string;
}
export interface BrubeckStats {
    stats: Stats;
    latestRewardCodes: NetworkRewardCode[];
    averages: Averages;
}
export interface Stats {
    "24APR": number;
    "24APY": number;
    SPOTAPR: number;
    SPOTAPY: number;
    "24DATASTAKED": number;
    SPOTDATASTAKED: number;
}
export interface NetworkRewardCode {
    code: string;
    topologySize: number;
    receivedClaims: number;
    meanPropagationDelay: number;
}
export interface Averages {
    averageTopologySize: number;
    averageReceivedClaims: number;
    averageMeanPropagationDelay: number;
}
export {};
