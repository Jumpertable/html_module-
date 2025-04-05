import Link from "next/link";

export default function Bar() {
    return (<div>Bar
            <Link className="border-2 border-blue-800 bg-white text-blue-900 block w-fit mb-8 p-2 hover:bg-red-200" href="/">Go to the Home Page</Link>

    </div>)
}