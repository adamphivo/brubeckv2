import { PropsWithChildren } from "react";
import { useMetaMask } from "metamask-react";
import { Icon } from "@iconify/react";

interface Props {}

export default function Connect(props: PropsWithChildren<Props>) {
  const { status, connect, account } = useMetaMask();
  switch (status) {
    case "connected": {
      return <></>;
    }
    case "unavailable": {
      return (
        <div>
          <p className="flex items-center justify-between gap-2">
            <p>Get Metamask</p>
            <Icon icon="logos:metamask-icon" />
          </p>
        </div>
      );
    }
    case "notConnected": {
      return (
        <button
          className="flex items-center justify-between gap-2"
          onClick={() => connect()}
        >
          <p>Connect</p>
          <Icon icon="logos:metamask-icon" />
        </button>
      );
    }
    default: {
      return <></>;
    }
  }
}
