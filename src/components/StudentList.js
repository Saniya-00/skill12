import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = () => {
    axios.get("http://localhost:8081/student")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8081/student/${id}`)
      .then(() => fetchStudents())
      .catch(err => console.log(err));
  };

  const handleEdit = (student) => {
    setEditStudent(student);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8081/student/${editStudent.id}`, editStudent)
      .then(() => {
        setEditStudent(null);
        fetchStudents();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Student List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button onClick={() => handleEdit(s)}>Edit</button>
                <button onClick={() => deleteStudent(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editStudent && (
        <div>
          <h3>Update Student</h3>
          <form onSubmit={handleUpdate}>
            <input
              value={editStudent.name}
              onChange={(e) =>
                setEditStudent({ ...editStudent, name: e.target.value })
              }
            />
            <input
              value={editStudent.email}
              onChange={(e) =>
                setEditStudent({ ...editStudent, email: e.target.value })
              }
            />
            <input
              value={editStudent.course}
              onChange={(e) =>
                setEditStudent({ ...editStudent, course: e.target.value })
              }
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default StudentList;