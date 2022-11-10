import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";

// Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import StudentPage from "./Components/StudentPage/StudentPage";
import LecturerPage from "./Components/LecturerPage/LecturerPage";
import LecturerAdding from "./Components/LecturerPage/LecturerAdding";
import Department from "./Components/LecturerPage/Department";
import ModulePage from './Components/ModulePage/ModulePage';
import AddModule from './Components/addModulePage/AddModule';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer position="top-center" />
        <div>
          <Routes>
            <Route exact path="/studentPage" element={<StudentPage />} />
            <Route exact path="/" element={<Intro />} />
            <Route exact path="/lecturerPage" element={<LecturerPage />} />
            <Route
              exact
              path="/lecturer/addLecturer/"
              element={<LecturerAdding />}
            />
            <Route
              exact
              path="lecturer/update/:id"
              element={<LecturerAdding />}
            />
            <Route exact path="lecturer/department" element={<Department />} />
            <Route exact path="/module" element={<ModulePage/>}/>
             <Route exact path="/addModule" element={<AddModule/>}/>
          </Routes>
        </div>
  
      </Router>
    </div>
  );
}

export default App;
