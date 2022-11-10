import axios from 'axios'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddModule() {

    let navigate=useNavigate()
    const [module,setModule]=useState({
        sub_name:"",
        sub_stream:"",
    })

    const {sub_name,sub_stream}=module

    const onInputChange=(e)=>{
        setModule({...module,[e.target.name]:e.target.value})

    }

    const  onSubmit= async(e)=>{
        console.log(module);
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/subjects",module)
                    .then((res)=>{
                        window.alert("Module added Successfully");
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
        navigate("/module");
    }

  return (
    <div className="container">
        <div className="conatainer">
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Add New Subject</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>

                    <div className='mb-3'>
                        <label htmlFor='courseCode' className='form-label'>
                            Subject
                        </label>
                        <input type={"text"}
                        className="form-control"
                        placeholder='Enter Module Name'
                        name="sub_name"
                        defaultValue={sub_stream}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='courseCode' className='form-label'>
                            Stream
                        </label>
                        <input type={"text"}
                        className="form-control"
                        placeholder='Enter Module Stream'
                        name="sub_stream"
                        defaultValue={sub_stream}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-2' to={"/module"}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
