export default function FavoritesTableDataHead() {
  return (
    <thead>
      <tr>
        <th className="w-16">
          <input type="checkbox" />
        </th>
        <th>Icon</th>
        <th>Name</th>
        <th>Status</th>
        <th>Address</th>
        <th>Staked</th>
        <th>To be received</th>
        <th>Rewarded</th>
        <th>Already sent</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}
