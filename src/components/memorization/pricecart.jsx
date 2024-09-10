import PriceRanges from "./price-ranges";


function Price()
{
   const cartItems=[
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 },
    { name: "Monitor", price: 300 },
    { name: "USB Drive", price: 20 },
    { name: "Headphones", price: 150 },
    { name: "Webcam", price: 80 },
    { name: "Desk Chair", price: 200 },
    { name: "External Hard Drive", price: 120 },
    { name: "Printer", price: 250 }
  ]
  
      
    return(
        <>
<PriceRanges cart={cartItems}  minPrice="100" maxPrice="1000"/>
        </>
    )
}
export default Price;