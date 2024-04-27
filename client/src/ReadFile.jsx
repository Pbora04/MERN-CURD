import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
const ReadFile = () => {
    const[read,setRead] = useState([])
     const {id} = useParams()
  
   
useEffect(()=>{
    axios.get(`http://localhost:3001/readstudent/${id}`)
    .then(result =>{
    //   console.log(result.data)
             setRead(result.data)

    }).catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <>
      <div className='container'>
    <h1> Showing Information </h1>
    <div className='body'></div>
      <div className='bodyparts'><span>Name : </span><span> {read.name}</span></div>
      <div className='bodyparts'> <span>Email : </span><span> {read.email}</span></div>
      <div className='bodyparts'>   <span>Age : </span><span> {read.age}</span></div>
      <Link className='backRead' to='/'>Back</Link>

</div>
    </>
  )
}

export default ReadFile