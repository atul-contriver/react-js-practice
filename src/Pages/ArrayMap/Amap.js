import React from 'react'

const Amap = () => {

    const students =[
        { name: "anil", email:"anil@gmail.com", contact:95608540},
        { name: "Atul", email:"atul@gmail.com", contact:95608545},
        { name: "Raj", email:"Raj@gmail.com", contact:95608550},


    ]
  return (
    <div className=' container bg-info w-50 ml-0 mr-0 mx-auto text-center'>
     <h1> Array Map</h1>

     <table className='table' >
     <thead>
     
     <tr>
<th scope="col">    Name </th>
<th scope="col">    Email </th>
<th scope="col">    Number </th>



     </tr>
     </thead>
     

         {students.map((data)=> 
            <tbody>
         <tr>

             <td>{data.name}</td>
             <td>{data.email}</td>
             <td>{data.contact}</td>


         </tr>
         </tbody>
         )}
     </table>
    
    </div>
  )
}

export default Amap