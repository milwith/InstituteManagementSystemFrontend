import React from 'react';
import EduImage from '../../Assets/EduImage.png';
import school from '../../Assets/school.jpg';
import './Intro.css';

export default function Intro() {
  return (
    <section className='rounded border-5 intro_section'>
      <div className='container-fluid'>
        <div className='row '>
            <div className='col-md-7 col-sm-7 my-2'>
                <img src={school} className='img-fluid homeImage rounded'/>
            </div>
            <div className='col-md-5 col-sm-5 my-2'>
            <div class="btn-group-vertical" role="group" 
            aria-label="Basic outlined example">
              <a href="/studentPage" class="btn btn-primary"> Student Management System</a>
              <a href="/lecturerPage" class="btn btn-primary"> Teacher Management System</a>
              <a href="/module" class="btn btn-primary"> Subject Management System</a>

        </div>
            </div>
        </div>
      </div>
    </section>
  )
}