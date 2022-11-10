import React from "react";
import { Link } from "react-router-dom";
import LecturerAdding from "./LecturerAdding";
import Lecturers from "./Lecturers";
import lecture from "../../Assets/Lecturer.jpg";

function LecturerPage() {
  return (
    <div>
      <div class="container text-center">
        <div class="row g-2">
          <div class="col-6">
            <div class="p-3 border bg-light">
              <div class="container text-center">
                    <div class="col ">
                    <LecturerAdding />
                    </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light">
            <Lecturers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LecturerPage;
