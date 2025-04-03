import Image from 'next/image'
import { Bungee_Tint } from "next/font/google";

const bungee = Bungee_Tint({ 
  subsets: ["latin"],
  weight: "400",
});

export default function modulewebapp (){
  return (<div>
  <h1 className={`${bungee.className} "font-bold m-2 p-2"`}>Hello World!!</h1>

    
    <div className=' w-[60%] border rounded border-blue-300 m-auto p-4 
    grid 
    grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
            
      <Image
            className="mb-4"
            src="https://plus.unsplash.com/premium_photo-1669018131211-5283d80e7104?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={250}
            height={150}
            alt="Picture of the author"
          />
    
          <Image
            className="mb-4"
            src="https://images.unsplash.com/photo-1742201835840-1325b7546403?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={250}
            height={150}
            alt="Picture of the author"
          />
        <p className=' border border-amber-200 w-50 mb-4 p-2 rounded bg-cyan-300 text-gray-900'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo debitis 
          magni eius repudiandae veniam, eaque est, velit, nulla ducimus molestias? 
          Laudantium sunt at itaque!
        </p> 
        <p className=' border border-green-300 w-2/3 mb-4 p-2 rounded bg-purple-300 text-gray-900'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo debitis 
          magni eius repudiandae veniam, eaque est, velit, nulla ducimus molestias? 
          Laudantium sunt at itaque!
        </p> 
        <p className=' border border-amber-500 w-3/3 mb-4 p-2 rounded bg-amber-100 text-gray-900'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quo debitis 
          magni eius repudiandae veniam, eaque est, velit, nulla ducimus molestias? 
          Laudantium sunt at itaque!
        </p> 
    </div>
    
    </div>
  )
}