import Ecommerec from "./ecommerce";

function CartItems()
{
    const cartItems = [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Mouse", price: 50, quantity: 2 },
        { name: "Keyboard", price: 100, quantity: 1 }
      ];
      
      const discount = 10; // 10% discount
      return(
        <>
        <Ecommerec cart={cartItems}/>
        </>
      )

}
export default CartItems




  