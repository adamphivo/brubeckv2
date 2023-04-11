interface Props {
  url: string;
  size?: number;
}
export default function Identicon({ url, size = 2 }: Props) {
  return (
    <div className="flex items-center justify-center">
      <img className={`w-6`} src={url} />
    </div>
  );
}
