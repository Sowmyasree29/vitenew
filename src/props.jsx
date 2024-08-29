




export default function CustomImage(props)
{
    console.log(props)
    const{source,width,height}=props
    return(
        <div>
              <img  src={source} alt="" height={height} width={width} />
        </div>
 
      
    )
}