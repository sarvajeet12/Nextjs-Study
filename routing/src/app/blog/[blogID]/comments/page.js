export default async function Comments({params}) {


    const {blogID} = await params;


    return <div>Comments on {blogID} page</div>;
}