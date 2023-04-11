import FavoritesTableData from "./FavoritesTableData/FavoritesTableData";
import AddFavoriteForm from "./AddFavoriteForm/AddFavoriteForm";
import Totals from "./Totals";

export default function Favorites() {
  return (
    <div className="flex flex-col h-full w-full md:gap-8">
      <AddFavoriteForm />
      <div>
        <Totals />
        <FavoritesTableData />
      </div>
    </div>
  );
}
