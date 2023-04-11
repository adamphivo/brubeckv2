import { request, gql } from "graphql-request";
import { constants } from "../config";

export async function fetchDataStaked(address: string) {
  try {
    const query = gql`
            {
              erc20Balances(
                where: {
                  account: "${address.toLowerCase()}"
                  contract: "${constants.DATA_CONTRACT}"
                }
              ) {
                value
              }
            }
          `;

    const data = await request(constants.DATA_GRAPH_URL, query);

    console.log(data);

    return data;
  } catch (e) {
    console.error(e);
  }
}
