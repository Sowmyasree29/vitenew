import React from "react"
import TableComponent from "../table-component/table";
import {Recepies} from "./recepie.js";




function RecepieData()
{
   return(
     <TableComponent rowData={Recepies()}/>

   )
}
export default RecepieData;