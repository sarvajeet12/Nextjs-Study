export default async function SlowResponse2(){
    const response = await fetch("https://procodrr.vercel.app/?sleep=4000");
    const data = await response.json();

    return <div className='response2'>{JSON.stringify(data)}</div>
}