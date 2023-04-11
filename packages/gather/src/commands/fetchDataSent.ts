import { request, gql } from "graphql-request";
import { constants } from "../config";

export async function fetchDataSent(address: string) {
  try {
    const query = gql`
              {
                  erc20Transfers(
                      where: {
                          from: "${constants.STREAMR_ETH_ADDRESS}"
                          to: "${address}"
                          timestamp_gt: ${constants.MAINNET_TIMESTAMP}
                      }
                  ) {
                      value timestamp
                  }
              }
      `;

    const data = await request(constants.DATA_GRAPH_URL, query);

    return data;
  } catch (e) {
    console.error(e);
  }
}
