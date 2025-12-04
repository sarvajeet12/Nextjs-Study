// Catch all routes


export default  async function File({params}){
    
    const {file} = await params
    
    return(
        <div>
            <h1>File {file.join('/')}</h1>
        </div>
    )   

}