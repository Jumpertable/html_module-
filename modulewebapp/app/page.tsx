import Link from "next/link";

export default function modulewebapp() {
  return (<div className="grid place-items-center min-h-screen bg-white">
      
      <div className="border-2 border-black rounded bg-white w-full  max-w-lg pt-10 pb-14 p-4 grid">

        <div className="relative border-2 border-green-300 rounded bg-green-400 text-gray-900 text-center py-9 w-full h-80  max-w-lg grid place-items-center">

          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 border-2 border-gray-900 rounded bg-blue-300 text-2xl font-bold text-sm md:text-lg w-40 h-12  max-w-lg grid place-items-center">
            Banner
          </div>
          <button className="absolute top-0 right-0 w-8 max-w-lg h-8 text-center bg-gray-300 drop-shadow-lg border-2 rounded-sm hover:bg-orange-500 active:bg-red-500 transition">x</button>
          <div className="absolute right-108 w-12  max-w-lg h-22 bg-white rounded-r-full"></div>
          <div className="absolute top-65 left-90 w-29  max-w-lg h-28 bg-white rounded-l-full"></div>

          <p className="border-2 border-white border-dotted text-white text-center text-sm md:text-lg w-3/4 max-w-lg p-2">
            This is Next.js position
        </p>
        
        <Link className="border-2 border-blue-800 border-dotted text-blue-900 block w-fit mb-8 hover:border-4" href="/products">Go to Product Page</Link>

        </div>
        
      </div>
      
    </div>
  );
}
