import TransactionsData from "./transactionsData";
import {useMemo} from "react"

function PortoFolioTracker({transactions,startDate,endDate})
{
    const filtered=useMemo(()=>
    {
        const start=new Date(startDate)
        const end=new Date(endDate)

        return transactions.filter(each=>
        {
            const transactionDate=new Date(each.date)
        
        return transactionDate>start && transactionDate<=end
        }
        )
    },[transactions,startDate,endDate])
          
    
    const totalValue=filtered.reduce((accumulator,currentValue)=>
    {

    },)
   
   
    return(
        <>
  <h2>Transactions dates from ranges</h2>
         {
            filtered.length>0 && 
            (
                <div>
                    {
                        filtered.map(each=>
                        (
                            <div>{each.date}</div>
                        )
                        
                        )
                    }
                </div>
            )
         }
        </>
    )
}
export default PortoFolioTracker;