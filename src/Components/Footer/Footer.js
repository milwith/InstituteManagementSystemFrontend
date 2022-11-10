import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer py-3 px-3'>
        <div className='container-fluid'>
            <div className='row text-center'>
                <div className='col-md-5 col-sm-5 '>
                    <h3 className='p-1'>School Management App</h3>
                    <p className='px-5'> This System allows you to Manage Students, Lecturers and Modules easily.</p>
                </div>
                <div className='col-md-5 col-sm-5'>
                    <h3 className='p-1'>Features</h3>
                    <p className='px-5'>You can handle MySQL Database using this app to perform CRUD Operations on Tables.</p>    
                </div>
                <div className='col-md-2 col-sm-2'>
                    <h6 className='px-1'>@copyright SchoolMng.com</h6>
                    <p className='px-5'>2022, Version 1.1</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
