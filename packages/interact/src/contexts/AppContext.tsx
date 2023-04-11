import { useState, useEffect, createContext, PropsWithChildren } from "react";
import { send } from "@brubeckscan/common/src";
import type { AppRelease } from "@brubeckscan/common/src/types";

export const AppReleaseContext = createContext<AppRelease | undefined>(
  undefined
);

export function AppReleaseProvider({ children }: PropsWithChildren) {
  const [appRelease, setAppRelease] = useState<AppRelease | undefined>(
    undefined
  );

  useEffect(() => {
    let ignore = false;

    async function fetchAppRelease() {
      try {
        const data = await send("gather", "GET", "/getAppVersion");
        if (data && !ignore) {
          setAppRelease(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    fetchAppRelease();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <AppReleaseContext.Provider value={appRelease}>
      {children}
    </AppReleaseContext.Provider>
  );
}
