
import { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Shruti", email: "shruti@gmail.com" },
    { id: 2, name: "Priya", email: "priya@gmail.com" },
    { id: 3, name: "Amit", email: "amit@gmail.com" },
  ]);

  // DELETE operation
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-5 text-2xl font-bold text-blue-600">
          Student Management
        </h1>

        <table className="w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {students.length === 0 && (
          <p className="mt-4 text-center text-gray-500">
            No students found!
          </p>
        )}
      </div>
    </div>
  );
}
