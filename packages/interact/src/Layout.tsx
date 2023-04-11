import { PropsWithChildren } from "react";
import NavigationBar from "./components/NavigationBar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="flex relative md:pb-0 bg-neutral-200">
      <div className="fixed h-20 bottom-0 w-screen md:w-24 md:h-screen md:sticky md:top-0 flex z-10">
        <NavigationBar />
      </div>
      <div className="flex w-full min-h-screen xl:p-10">{children}</div>
    </main>
  );
}
