import Marquee from "react-fast-marquee";
import { useNetwork } from "../hooks/useNetwork";
import { formatNumberWithSpaces } from "@brubeckscan/common/src";

export default function HomeMarquee() {
  const network = useNetwork();

  return (
    <div className="flex w-full">
      <Marquee
        className="bg-neutral-800 text-neutral-100 text-md flex justify-between w-full"
        gradient={false}
        speed={75}
      >
        <div className="flex gap-9 p-1">
          <div>
            APY{" "}
            <span className="text-orange-500">
              {network && network?.stats?.SPOTAPY}%
            </span>
          </div>
          <div>
            APR{" "}
            <span className="text-orange-500">
              {network && network?.stats?.SPOTAPR}%
            </span>
          </div>
          <div>
            TVL{" "}
            <span className="text-orange-500">
              {network &&
                formatNumberWithSpaces(network?.stats?.SPOTDATASTAKED || 0)}
            </span>
          </div>
        </div>
      </Marquee>
    </div>
  );
}
