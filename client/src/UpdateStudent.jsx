import  { useEffect, useState } from 'react';
import { useParams,useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const UpdateStudent = () => {

  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[age,setAge] = useState("")

  const {id} = useParams()
  const navigate = useNavigate('')

useEffect(()=>{
  axios.get(`http://localhost:3001/getstudent/${id}`)
  .then(result =>{
    setName(result.data.name)
    setEmail(result.data.email)
    setAge(result.data.age)
  })
  .catch(err =>{
    console.log(err)
  })
},[])

let UpdateNew = (e)=>{
  e.preventDefault()
  axios.put(`http://localhost:3001/edit/${id}`,{name ,email,age})
  .then(result =>{
    console.log(result)
    navigate('/')
 }).catch(err=>{
    console.log(err)
 })
}
  return (
    <>
    <form className='maindiv ' onSubmit={e =>UpdateNew(e)}>
    <h2 className='headingUpdate'>Update Information</h2>
  <div className='body'>
  <label>Name :</label>
      <input type='text' placeholder='enter name' value={name} onChange={(e) => setName (e.target.value)} /> <br/><br/>
      <label>Email :</label>
        <input type='text' placeholder='enter name' value={email} onChange={(e) =>setEmail(e.target.value) } /><br/><br/>
      <label>Age :</label>

      <input type='text' placeholder='enter name' value={age} onChange={(e) => setAge(e.target.value)} /><br/><br/>

      <button className='editRead'>Submit</button>

  <Link className='editRead' to={'/'}>Back</Link>
</div>
    </form>
    </>
  )
}

export default UpdateStudent