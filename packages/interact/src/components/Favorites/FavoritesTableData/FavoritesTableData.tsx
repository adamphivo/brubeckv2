import { useUser } from "../../../hooks";
import Favorite from "./Favorite";
import FavoritesTableDataHead from "./FavoritesTableDataHead";

export default function FavoritesTableData() {
  const user = useUser();

  return (
    <div className="w-full overflow-x-scroll">
      <table className="min-w-[1200px] md:min-w-[unset] w-full overflow-x-scroll">
        <FavoritesTableDataHead />
        <tbody>
          {user &&
            user.Favorite.map((i: any, index: number) => (
              <Favorite key={i.id} favorite={i}></Favorite>
            ))}
        </tbody>
      </table>
    </div>
  );
}
