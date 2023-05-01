import Image from 'next/image';

interface BlackButtonParams {
  name: string;
  width: number;
  height: number;
}

export default function BlackButton({ name, width, height }: BlackButtonParams) {
  return (
    <button type="button" className="w-fit p-4 rounded-lg bg-neutral-900">
      <Image src={`/icons/${name}.svg`} alt="left arrow icon" width={width} height={height} />
    </button>
  );
}
