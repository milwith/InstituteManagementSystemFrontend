import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Lecturers() {
  const [lecturers, setLecturers] = useState([]);

  //Get All Lecturers
  const getLecturer = async () => {
    await axios
      .get(`http://localhost:8080/api/v1/teachers`)
      .then((res) => {
        console.log(res);
        setLecturers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Delete lecturer By Id
  const onDeleteLecturer = async (id) => {
    if (
      window.confirm(
        "Are you sure that you wanted to delete this teacher record."
      )
    ) {
      await axios
        .delete(`http://localhost:8080/api/v1/teachers/${id}`)
        .then((res) => {
          getLecturer();
          window.alert("Teacher Record has been deleted Successfully.");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getLecturer();
  }, []);

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h4>TEACHERS</h4>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "13px" }}>
          {lecturers &&
            lecturers.map((lecturer, index) => {
              return (
                <tr key={index}>
                  <td>{lecturer.t_firstName}</td>
                  <td>{lecturer.t_lastName}</td>
                  <td>{lecturer.t_email}</td>
                  <td>{lecturer.t_subject}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        onDeleteLecturer(lecturer.t_id);
                      }}
                    >
                      Delete
                    </button>{" "}
                    <Link to={`/lecturer/update/${lecturer.t_id}`}>
                      <button type="button" className="btn btn-info btn-sm">
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Lecturers;
