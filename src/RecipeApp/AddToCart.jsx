


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../reduxToolkit/cart/cart'

function AddToCart() {
    const {carts}=useSelector(state=>state.cartData)
    const dispatch=useDispatch()
    function removeHandler(indx)
    {
        const deleted=carts.filter(each=>each.id!==indx)
        dispatch(removeItemFromCart(deleted))

    }
  return (
    <div>
        {
            carts.length>0 &&(
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}}>
                    {
                        carts.map((each,id)=>
                        (
                            <div style={{width:"400px",border:"1px solid black",padding:"20px"}}>
                           <div><b>title</b>{each.title}</div>
                           <div><b>price</b>{each.price}</div>
                           <button onClick={()=>removeHandler(each.id)}>remove from cart</button>
                                </div>
                        ))
                    }
                    
                </div>
            )
        }
      
    </div>
  )
}

export default AddToCart
