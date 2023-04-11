import { useNetwork } from "../../../../hooks";
import type { NodeData } from "@brubeckscan/common/src/types/gather";

interface Props {
  externalData?: NodeData;
}

export default function FavoriteStatus({ externalData }: Props) {
  const network = useNetwork();
  if (network) {
    if (network.latestRewardCodes) {
      const latestCode = network.latestRewardCodes[0].code;
      const latestNodeCode = externalData?.lastClaim?.id;
      if (latestCode === latestNodeCode) {
        return <div className="text-green-500 font-bold">OK</div>;
      }
    }
  }
  return <div className="text-red-500 font-bold">KO</div>;
}
