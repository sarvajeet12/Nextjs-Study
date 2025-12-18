export default async function SlowResponse1(){
    const response = await fetch("https://procodrr.vercel.app/?sleep=2000");
    const data = await response.json();

    return <div className='response1'>{JSON.stringify(data)}</div>
}