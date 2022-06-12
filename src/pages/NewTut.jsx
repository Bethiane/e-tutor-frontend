import React, { useState } from 'react'
import axios from "axios"

export default function NewTut() {

 const [title,setTitle] = useState('')
 const [description, setDescription] = useState('')

  return (
    <section>
        <h1>NewTut</h1>
        <form onSubmit={async (e) => {
             e.preventDefault()


             const data = await axios.post("http://localhost:8080/api/tutorials", {
                 title,
                 description
             })

             console.log(data)

        }}>
          <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
          <input type="text" placeholder="description" value={description} onChange={(e)=> setDescription(e.currentTarget.value)}/>
          <button type="submit">submit</button>
        </form>
    
    </section>
  )
}
