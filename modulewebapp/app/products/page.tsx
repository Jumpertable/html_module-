import Link from "next/link";
import Image from "next/image";
import ProductItem from "../components/ProductItem";

export default function Products() {
  const products = [
    {
      name: "Computer",
      description: "Product description computer goes here.",
      image_url:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Laptop core i7",
      description: "Product description laptop goes here.",
      image_url:
        "https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Headphone",
      description: "Product description phone goes here.",
      image_url:
        "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "iPad 4th Gen",
      description: "Product description ipad goes here.",
      image_url:
        "https://images.unsplash.com/photo-1604399852419-f67ee7d5f2ef?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mouse",
      description: "Product description iphone goes here.",
      image_url:
        "https://images.unsplash.com/photo-1581270023016-1b7ea9be8fad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="text-black bg-gradient-to-r from-blue-100 to-teal-200">
      <h1 className="font-bold text-xl text-center m-4">Product</h1>
      <div className="flex flex-wrap w-[80%] border-2 rounded m-auto m-4 mb-6 p-4 justify-center bg-slate-100">
        {products.map((product, index) => {
          return (
            <ProductItem
              key={index}
              index={index}
              productName={product.name}
              description={product.description}
              image_url={product.image_url}
            />
          );
        })}
      </div>

      <footer className="bg-blue-200 p-2 text-center font-bold text-xl w-full">
        --- Product footer ---{" "}
      </footer>
      <div className="flex justify-around bg-blue-200  w-full">
        <Link
          className="border-2 border-blue-800 border-dashed text-blue-900 block w-fit mb-8 p-2"
          href="/Foo"
        >
          Go to Foo Page
        </Link>
        <Link
          className="border-2 border-blue-800 left-100 text-blue-900 block w-fit mb-8 p-2 hover:bg-red-100"
          href="/Foo/Bar"
        >
          Go to Bar Page
        </Link>
      </div>
    </div>
  );
}
