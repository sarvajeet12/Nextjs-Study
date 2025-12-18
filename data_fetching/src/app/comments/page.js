export default async function Comment() {

    // API1   (Simulating delay of 4 seconds to show loading effect)
    const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=4000");

    // API2
    const response = await fetch(" https://jsonplaceholder.typicode.com/comments?_limit=10");
    const comments = await response.json();
    console.log(comments);

    return (
        <div>
            <h1>Comments</h1>
            <ul className="todo">

                {comments.map(comment => (
                    <li key={comment.postId}>
                        <h2>{comment.name}</h2>
                        <p>{comment.body}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
}