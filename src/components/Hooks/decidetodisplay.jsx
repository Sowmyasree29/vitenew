


function Decide({updated,trueornot})
{
    return(
        <div>
             {
             trueornot && (<div>item is {updated}</div>
               
            )}
        </div>
    )
}
export default Decide;