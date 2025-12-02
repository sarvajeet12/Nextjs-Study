import Link from "next/link"

export function Services() {
    return (
        <div><h1>All Services</h1>
            <ul>
                <li><Link href='services/web-dev'>Web Development</Link> </li>
                <li>App Development</li>
                <li>Figma Design</li>
                <li><Link href='services/seo'>SEO</Link> </li>
            </ul>
        </div>
    )
}

export default Services