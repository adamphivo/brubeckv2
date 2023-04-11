"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataStaked = void 0;
const graphql_request_1 = require("graphql-request");
const config_1 = require("../config");
async function fetchDataStaked(address) {
    try {
        const query = (0, graphql_request_1.gql) `
            {
              erc20Balances(
                where: {
                  account: "${address.toLowerCase()}"
                  contract: "${config_1.constants.DATA_CONTRACT}"
                }
              ) {
                value
              }
            }
          `;
        const data = await (0, graphql_request_1.request)(config_1.constants.DATA_GRAPH_URL, query);
        console.log(data);
        return data;
    }
    catch (e) {
        console.error(e);
    }
}
exports.fetchDataStaked = fetchDataStaked;
