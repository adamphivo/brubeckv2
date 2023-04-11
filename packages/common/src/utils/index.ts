export function shortenEthAddress(address: string) {
  const start = address.slice(0, 3);
  const end = address.slice(-3);
  return `${start} ... ${end}`;
}
