import { createContext, useReducer, useEffect, PropsWithChildren } from "react";
import { send } from "@brubeckscan/common/src";
import type { BrubeckStats } from "@brubeckscan/common/src/types/gather";

export const NetworkContext = createContext<BrubeckStats | undefined>(
  undefined
);
export const NetworkDispatchContext = createContext<any>(null);

export function NetworkProvider({ children }: PropsWithChildren) {
  const [network, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    let ignore = false;
    async function fetchNetworkData() {
      try {
        const data = await send("gather", "GET", "/getBrubeckData");
        if (data && !ignore) {
          dispatch({ type: "SET_NETWORK", payload: data });
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchNetworkData();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <NetworkContext.Provider value={network}>
      <NetworkDispatchContext.Provider value={dispatch}>
        {children}
      </NetworkDispatchContext.Provider>
    </NetworkContext.Provider>
  );
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_NETWORK": {
      return action.payload;
    }
    default: {
      throw Error("Unknown action");
    }
  }
}
