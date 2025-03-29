// UsersPage.js (corrected)
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    loadUsers();
  }, [page, location.state?.refresh]);

  const loadUsers = async () => {
    try {
      const data = await getUsers(page);
      setUsers(data.data);
      setTotalPages(data.total_pages);
      if (location.state?.refresh) {
        navigate("/users", { replace: true, state: {} });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        alert("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users List (Page {page})</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Avatar</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">
                <img src={user.avatar} className="w-10 h-10 rounded-full" alt={user.first_name} />
              </td>
              <td className="border p-2">{user.first_name} {user.last_name}</td>
              <td className="border p-2">
                <button
                  onClick={() => navigate(`/edit/${user.id}`, { state: { refresh: true } })}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="mr-2 bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page >= totalPages}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}