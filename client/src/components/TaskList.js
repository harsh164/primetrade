import { useState } from "react"

export default function TaskList({ tasks, deleteTask, updateTask }) {
  const [editId, setEditId] = useState(null)
  const [editTitle, setEditTitle] = useState("")

  return (
    <ul className="space-y-3">
      {tasks.map(task => (
        <li
          key={task._id}
          className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
        >
          {editId === task._id ? (
            <input
              className="flex-1 border p-2 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
            />
          ) : (
            <span className="flex-1">{task.title}</span>
          )}

          <div className="space-x-2">
            {editId === task._id ? (
              <button
                onClick={() => {
                  updateTask(task._id, editTitle)
                  setEditId(null)
                }}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(task._id)
                  setEditTitle(task.title)
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
