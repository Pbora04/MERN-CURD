import { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
 
 const CreateStudent = () => {
 


    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setage]=useState()


    const navigate =useNavigate()

    let submit =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/createstudent',{name ,email,age}) 
      .then(result =>{
         console.log(result)
         navigate('/')
      }).catch(err =>{
         console.log(err)

      })
    }
   return (
<>
<div className='Outercreate'>
<h2>Add New Data</h2>
   <form onSubmit={submit} >
   <div className='inputs'>
      <label>Name : </label>
    <input type=" text" placeholder="enter name" onChange={e => setName(e.target.value)} /><br/> <br></br>
    <label>Email : </label>

    <input type="text" placeholder="enter email" onChange={e => setEmail(e.target.value)} /><br/> <br></br>
    <label>Age : </label>

    <input type="text" placeholder="enter age" onChange={e => setage(e.target.value) }/><br/> <br></br>
    <button >Submit</button>
    <Link className='Link' to={`/`}>Back</Link>

    </div>
   </form>
   </div>
</> 
  )
 }
 
 export default CreateStudent