import React, { useEffect, useState } from "react";
import axios from "axios";

function Department() {
  const [department, setDepartment] = useState("");
  const [lecturers, setLecturers] = useState([]);

  //Get Lecturers By Department Name
  const getLecturers = async (department) => {
    await axios
      .get(`http://localhost:8080/lecturer/${department}`)
      .then((res) => {
        setLecturers(res.data);
        console.log(lecturers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    getLecturers(department);
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setDepartment(event.target.value);
  };
  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleOnSubmit}>
        <select
          class="form-select"
          aria-label="Default select example"
          name="department"
          id="department"
          onChange={handleOnChange}
          value={department}
        >
          <option selected>Select the Department</option>
          <option value="IT">IT</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Management">Management</option>
        </select>
        <br />
        <button type="submit" className="btn btn-info">
          Show Lecturers
        </button>
      </form>
      <h2 style={{ padding: "20px" }}>Department: {department}</h2>

      {lecturers &&
        lecturers.map((lecturer, index) => {
          return (
            <div
              class="card"
              style={{ width: "18rem", padding: "10px", margin: "20px" }}
            >
              <div class="card-header">{lecturer.name}</div>
              <ul class="list-group list-group-flush" key={index}>
                <li class="list-group-item">{lecturer.mobileNo}</li>
                <li class="list-group-item">{lecturer.email}</li>
                <li class="list-group-item">{lecturer.department}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default Department;
