export default async function BlogPage({params}) {


    const {blogID} = await params;

    return (
        <div>
            <h1>Blog Page {blogID}</h1>
        </div>)
}