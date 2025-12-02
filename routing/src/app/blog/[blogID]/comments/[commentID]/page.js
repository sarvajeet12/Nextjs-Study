export default async function Comment({params}) {

    const {blogID, commentID} = await params;

    return <div>Page {blogID} Comment {commentID}</div>;
}