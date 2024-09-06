




function TableComponent({rowData,head1,head2})
{
    return(
        <>

    <table className="table">
      <thead>
       
       
          <tr>
         
             <th>{head1}</th>
          <th>{head2}</th>
          {/* <th>occupation</th> */}
        
          </tr>
      
       
      
      </thead>
      <tbody>
       {
        rowData.map((eachperson,index)=>
        (
            <tr key={index}>
            <td>{eachperson.data1}</td>
            <td>{eachperson.data2}</td>
          
            {/* <td>{eachperson.data3}</td> */}
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