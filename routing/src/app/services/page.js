import Link from "next/link";

export const metadata = {
    title:"Services" 
}



export default function ServicePage() {
    return (
        <div>
            <h1>
                This is service page
            </h1>
            <Link href="/">Home</Link>
            <br />
            <Link href="/about">About</Link>
        </div>
    )
}