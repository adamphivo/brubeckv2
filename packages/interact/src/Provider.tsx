import { PropsWithChildren } from "react";
import { MetaMaskProvider } from "metamask-react";
import { AppReleaseProvider, UserProvider, NetworkProvider } from "./contexts";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <MetaMaskProvider>
      <UserProvider>
        <NetworkProvider>
          <AppReleaseProvider>{children}</AppReleaseProvider>
        </NetworkProvider>
      </UserProvider>
    </MetaMaskProvider>
  );
}
