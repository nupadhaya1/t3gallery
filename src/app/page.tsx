import Link from "next/link";

const mockUrls = [
  "https://0u7l26pivo.ufs.sh/f/o8OFMY7zHb4oJduHqX5Lz5fQdTZBSVs4vMDpC9AaNK7iHe83",
  "https://0u7l26pivo.ufs.sh/f/o8OFMY7zHb4odVuiewO1M7yT2lxNK1dXkahWzHsLuItSD0CF",
  "https://0u7l26pivo.ufs.sh/f/o8OFMY7zHb4ovitBdebQCOTYSe9pM2ktJbLRN4q3IUuWf1H8",
  "https://0u7l26pivo.ufs.sh/f/o8OFMY7zHb4ovitBdebQCOTYSe9pM2ktJbLRN4q3IUuWf1H8",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
