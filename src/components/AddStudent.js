import React, { useState } from "react";
import axios from "axios";

function AddStudent({ fetchStudents }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8081/student", student)
      .then(() => {
        fetchStudents();   // refresh list
        setStudent({ name: "", email: "", course: "" }); // clear form
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name"
          value={student.name} onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email"
          value={student.email} onChange={handleChange} required />

        <input type="text" name="course" placeholder="Course"
          value={student.course} onChange={handleChange} required />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;