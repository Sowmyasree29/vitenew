import {useMemo} from "react"
import Price from "./pricecart"


function PriceRanges({cart,minPrice,maxPrice})

{
    const filtered=useMemo(()=>
    {
        const arr= cart.filter(each=>
        (
            each.price>=minPrice && each.price<=maxPrice
        )
        )
  return arr;
    },[cart,minPrice,maxPrice])
    console.log(filtered)
    return(
        <>
        <h2>price ranges from 100 to 1000</h2>
        {
           filtered.length>0 &&
           (
            <div>
                {
                    filtered.map(each=>
                    (
                        <div>
                             <div>product name:{each.name}</div>
                             <div>product price:{each.price}</div>
                        </div>
                       
                    )
                    )
                }
            </div>
           )
        }
          
        </>
    )
}
export default PriceRanges;