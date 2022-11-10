import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
//import "./AddingLecturer.css";

const initialLecturer = {
  t_firstName: "",
  t_lastName: "",
  t_email: "",
  t_subject: "",
};

function LecturerAdding() {
  const [lecturer, setLecturer] = useState(initialLecturer);
  let { t_firstName, t_lastName, t_email, t_subject } = lecturer;
  const navigate = useNavigate();
  const { id } = useParams();

  //Create new Lecturer - Send form data to the Backend
  const addLecturer = async (lecturerData) => {
    await axios
      .post("http://localhost:8080/api/v1/teachers", lecturerData)
      .then((res) => {
        window.alert("Teacher Added Successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Update existing Lecture record - Send form data to the Backend
  const updateLecturer = async (lecturerData, id) => {
    await axios
      .put(`http://localhost:8080/api/v1/teachers/${id}`, lecturerData)
      .then((res) => {
        window.alert("Teacher Details Updated Successfully.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Get Single Lecture By Id
  const getSingleLecturer = async (id) => {
    await axios.get(`http://localhost:8080/api/v1/teachers/${id}`).then((res) => {
      setLecturer({ ...res.data });
    });
  };

  useEffect(() => {
    if (id) {
      getSingleLecturer(id);
    }
  }, [id]);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    let { name, value } = event.target;
    setLecturer({ ...lecturer, [name]: value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(lecturer);
    if (!id) {
      addLecturer(lecturer);
    } else {
      updateLecturer(lecturer, id);
      navigate("/lecturerPage");
    }
    window.location.reload();
  };

  return (
    <div style={{ maxWidth: "100%" }} className='p-5'>
      <h3> {id ? "Update Existing Teacher Record" : "Add New Teacher"}</h3>
      <div style={{ padding: "30px" }} >
        <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
            <label for="name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="t_firstName"
              name="t_firstName"
              onChange={handleOnChange}
              value={t_firstName}
            />
          </div>
          <div className="mb-3">
            <label for="name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="t_lastName"
              name="t_lastName"
              onChange={handleOnChange}
              value={t_lastName}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="t_email"
              id="t_email"
              onChange={handleOnChange}
              value={t_email}
            />
          </div>
          <div className="mb-3">
            <label for="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              name="t_subject"
              id="t_subject"
              onChange={handleOnChange}
              value={t_subject}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LecturerAdding;
