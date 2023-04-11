"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataSent = void 0;
const graphql_request_1 = require("graphql-request");
const config_1 = require("../config");
async function fetchDataSent(address) {
    try {
        const query = (0, graphql_request_1.gql) `
              {
                  erc20Transfers(
                      where: {
                          from: "${config_1.constants.STREAMR_ETH_ADDRESS}"
                          to: "${address}"
                          timestamp_gt: ${config_1.constants.MAINNET_TIMESTAMP}
                      }
                  ) {
                      value timestamp
                  }
              }
      `;
        const data = await (0, graphql_request_1.request)(config_1.constants.DATA_GRAPH_URL, query);
        return data;
    }
    catch (e) {
        console.error(e);
    }
}
exports.fetchDataSent = fetchDataSent;
