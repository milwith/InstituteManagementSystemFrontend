import {useState, useEffect,React} from 'react';
import axios from "axios";
import { render } from 'react-dom';
import userEvent from '@testing-library/user-event';
import { Link, useParams } from 'react-router-dom'


export default function ModulePage() {

    const [modules,setModules]=useState([]);

    const {id}=useParams()

    useEffect(()=>{
        loadModules();
    },[]);

    const loadModules=async()=>{
        const result=await axios.get("http://localhost:8080/api/v1/subjects");
        setModules(result.data);
    }
    const deleteModule=async (id)=>{
        await axios.delete(`http://localhost:8080/api/v1/subjects/${id}`)
        loadModules()
    }

  return (
    <div className='modulePage p-5'>
        <div className='upperPart'>
            <h4>Subject List</h4>

            <Link className='btn btn-outline-primary mx-2 my-2' to={"/addModule"}>Add New Subject</Link>
        </div>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Subject </th>
                        <th scope="col">Stream</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        modules.map((module,index)=>(
                            <tr key={module.sub_id}>
                                <td>{module.sub_id}</td>
                                <td>{module.sub_name}</td>
                                <td>{module.sub_stream}</td>
                                <td>
                                    <button  className='btn btn-outline-danger mx-2 my-2' 
                                        onClick={()=>deleteModule(module.sub_id)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}
