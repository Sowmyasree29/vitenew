

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../redux/products/actions';
import { useEffect } from 'react';

function ProductList() {
   const {products,error,loading}=useSelector(state=>state.product)
   const dispatch=useDispatch()
   useEffect(()=>
{
    dispatch((fetchProductsData()))

},[])
console.log(products)
  if(loading)
  {
    return <h2>please wait....</h2>
  }
  if(error)
  {
    return <h2>{error}</h2>
  }
  return (
    <div>
        {
            products.length>0 &&
            <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,2fr)",gap:"10px"}}>
            {
              products.map((each,id)=>
            (
                <div style={{border:"1px solid black",width:"300px",padding:"20px"}}>
                        <div><b>region is:</b>{each.region}</div>
                        {
                            each.altSpellings.map(each=>
                            (
                              
                                  <li> {each}</li>
                     
                              
                              
                            )
                            )
                        }
                        {
                           each.continents.map(each=>
                           (
                            <div><b>continents:</b>{each}</div>
                           )
                           )


                        }
                </div>
            
            ))  
            }
        </div>
            </>

        }
        
      
    </div>
  )
}

export default ProductList;