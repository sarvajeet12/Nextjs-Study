// Lec : 30
// Parallel Data Fetching
// In this we didn't break the components
// Using Promise.all to fetch multiple data sources concurrently
// It takes less time than fetching them sequentially
// Each fetch request is initiated at the same time
// The total wait time is determined by the slowest request


async function fetchAlbums(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


const urls = [
    'https://jsonplaceholder.typicode.com/albums?_limit=10',
    'https://procodrr.vercel.app/?sleep=2000',
    'https://procodrr.vercel.app/?sleep=8000',  
]

export default async function AlbumsPage() {
    // Fetch all data in parallel
    const [albums, slowData1, slowData2] = await Promise.all(
        urls.map(url => fetchAlbums(url))
    );

    return(

        <>
            <h1>Albums</h1>
             <div className='response1'>{JSON.stringify(slowData1)}</div>
            <ul className='todo'>
                {albums.map(album => (
                    <li key={album.id}>
                        <h2>{album.title}   </h2>
                    </li>
                ))}
            </ul>
           
            <div className='response2'>{JSON.stringify(slowData2)}</div>
        
        </>
    )

}