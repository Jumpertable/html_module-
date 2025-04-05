import Image from "next/image";

export default function ProductItem({
  index,
  productName,
  description,
  image_url,
}: {
  index: number;
  productName: string;
  description: string;
  image_url: string;
}) {
  return (
    <div
      key={index}
      className="relative shadow-lg rounded-md border w-fit bg-green-100 p-2 m-2"
    >
      <h2>{productName}</h2>
      <p>{description}</p>
      <Image
        className="p-2 m-4 m-auto w-40 rounded-full mt-2 border-5 border-blue-300 hover:rotate-15"
        src={image_url}
        alt={productName}
        width={100}
        height={100}
      />
      <button className="border bg-pink-200 px-2 py-1 mt-2 rounded hover:font-bold active:text-red-700">
        Buy Now
      </button>
      <span className="absolute bottom-2 right-3 border border-blue shadow px-2 rounded-full bg-amber-100">
        {index + 1}
      </span>
    </div>
  );
}
