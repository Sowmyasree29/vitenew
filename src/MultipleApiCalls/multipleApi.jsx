import {useState,useEffect} from "react"
import axios from "axios"



function MultipleApi()
{
const[recipes,setRecipes]=useState([])
const[products,setProducts]=useState([])

    async function fetchData()
    {
        try{
            const[recipeData,productData]=await axios.all(
                [axios.get('https://dummyjson.com/recipes'),
                    axios.get('https://dummyjson.com/products')
                ]
            )

            const allData1=recipeData.data.recipes
            const allData2=productData.data.products
            setRecipes(allData1)
            setProducts(allData2)
            console.log(allData1)
            console.log(allData2)
        }
        catch(err)
        {
            console.log(err)
        }
    }
    useEffect(()=>
    {
        fetchData();
    },[])
    return(
        <>
        {
            
        }
        </>
    )
}
export default MultipleApi;