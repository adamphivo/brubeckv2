import { useEffect } from "react";
import { useMetaMask } from "metamask-react";
import { useNavigate } from "react-router-dom";
import Favorites from "../components/Favorites/Favorites";
import { useUser } from "../hooks";

export default function Dashboard() {
  const { account, status } = useMetaMask();
  const user = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (status !== "initializing" && !account) {
      navigate("/");
    }
  }, [account, status]);

  return (
    <div className="flex md:h-full w-full flex-col md:gap-8">
      <div className="text-5xl md:text-5xl fontAlt font-bold text-neutral-100 bg-black p-4 flex gap-4 items-center">
        <h1>Dashboard</h1>
        {user && (
          <div className="text-4xl text-neutral-500">
            ({user.Favorite.length})
          </div>
        )}
      </div>
      <Favorites />
    </div>
  );
}
