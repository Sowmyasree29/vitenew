




function TableComponent({rowData})
{
    return(
        <>

    <table className="table">
      <thead>
       
       
          <tr>
         
             <th>name</th>
          <th>email</th>
          <th>occupation</th>
        
          </tr>
      
       
      
      </thead>
      <tbody>
       {
        rowData.map(eachperson=>
        (
            <tr>
            <td>{eachperson.data1}</td>
            <td>{eachperson.data2}</td>
            <td>{eachperson.data3}</td>
          </tr>
        )
          
        
        )
       }
      
      </tbody>
    </table>

</>

    )
}
export default TableComponent;