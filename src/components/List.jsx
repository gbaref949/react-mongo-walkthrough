import { useState } from "react"

const List = () => {
    const [data, setData] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }

  return (
    <div style={{border: 'thin', padding: '2rem', margin: '1rem'}}>
    <button onClick={()=>{}}>Click For Ordered List</button>
    <button onClick={()=>{}}>Click For UnOrdered List</button>
    <button onClick={()=>{handleSubmit}}></button>
    </div>
  )
}

export default List