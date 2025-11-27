import Link from "next/link";


export default function About() {
    return (
        <div>
            <h1>This is about page</h1>
            <Link href="/">Home</Link>
            <br />
            <Link href="/services">Services</Link>
        </div>

    )
}
