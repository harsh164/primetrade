import { useState } from "react"
import TaskList from "./TaskList"
import AddTask from "./AddTask"

export default function Dashboard({
  tasks,
  title,
  setTitle,
  addTask,
  deleteTask,
  updateTask,
  logout
}) {
  const [search, setSearch] = useState("")

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Search */}
        <input
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Add Task */}
        <AddTask title={title} setTitle={setTitle} addTask={addTask} />

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />

      </div>
    </div>
  )
}
