const constants = {
  DATA_CONTRACT: "0x3a9a81d576d83ff21f26f325066054540720fc34",
  DATA_GRAPH_URL:
    "https://api.thegraph.com/subgraphs/name/streamr-dev/data-on-polygon",
  STREAMR_ETH_ADDRESS: "0x3979f7d6b5c5bfa4bcd441b4f35bfa0731ccfaef",
  MAINNET_TIMESTAMP: 1643673600,
  PAIRS: ["BTCUSDT", "DATAUSDT", "EURUSDT", "MATICUSDT", "ETHUSDT"],
  BINANCE_PRICE_TICKER_URL:
    "https://api.binance.com/api/v3/ticker/price?symbol=",
  BRUBECK_APY: "https://brubeck1.streamr.network:3013/apy",
  BRUBECK_STATS: "https://brubeck1.streamr.network:3013/stats",
  BRUBECK_NODE_REWARDS_BASE:
    "https://brubeck1.streamr.network:3013/datarewards/",
  BRUBECK_NODE_STATS_BASE: "https://brubeck1.streamr.network:3013/stats/",
  POLYGONSCAN_BASE: "https://polygonscan.com/address/",
  IDENTICON_BASE: "https://api.dicebear.com/5.x/identicon/svg?seed=",
};

Object.freeze(constants);

export { constants };
