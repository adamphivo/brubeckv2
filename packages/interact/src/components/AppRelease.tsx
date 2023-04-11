import { useAppRelease } from "../hooks";

export default function AppRelease() {
  const release = useAppRelease();

  return release ? (
    <div className="flex w-full justify-end items-end flex-col text-xl">
      <span>{release.tag_name}</span>
    </div>
  ) : (
    <div></div>
  );
}
