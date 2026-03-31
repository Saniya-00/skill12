import React from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudent fetchStudents={() => window.location.reload()} />
      <StudentList />
    </div>
  );
}

export default App;