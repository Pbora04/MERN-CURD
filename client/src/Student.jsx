import { useEffect, useState } from "react";
import axios from "axios";
import { CgAdd } from "react-icons/cg";
import { AiOutlineRead } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
const Student = () => {
  const[data,setData] = useState([]);
   
  useEffect(()=>{
  axios.get('http://localhost:3001')
  .then(result => {
    console.log(result)
    setData(result.data)
  }).catch(err => console.log(err))
  },[])

  let handleDelete = (id) => {
    axios.delete("http://localhost:3001/deletestudent/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="outer">
        <div className="mainBox">
          <div className="heading">
            <h2>Mern Crud</h2>
          </div>
          <div className="createConnect">
          <Link to={"/create"} className="createbg">
            Add Info <CgAdd />
          </Link>
          </div>
          <div className="tableBox">
          <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item,i) => {
                return (
                  <tr key={i}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>
                      <Link className="LinkHome" to={`/read/${item._id}`}>
                       <AiOutlineRead />
                        Read
                      </Link>
                      <Link className="edit" to={`/update/${item._id}`}>
                        <BiSolidEdit />
                        Update
                      </Link>
                      <button className="delete" onClick={() => handleDelete(item._id)}>
                      <MdDeleteForever /> Delete
                      </button>
                    </td>
                  </tr>
                );
              })
              }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
