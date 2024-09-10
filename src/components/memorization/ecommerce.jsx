import CartItems from "./cart-Items";


function Ecommerec({cart})
{
   
        const total=cart.reduce((accumulator,currentValue)=>
        {
          return   accumulator+(currentValue.price*currentValue.quantity)
        },0)
    
    console.log(total)
    return(
        <>
<div>total price is {total}</div>
        </>
    )
}
export default Ecommerec;