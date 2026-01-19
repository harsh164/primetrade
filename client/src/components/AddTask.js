export default function AddTask({ title, setTitle, addTask }) {
  return (
    <div className="flex mb-6">
      <input
        className="flex-1 border p-2 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-400"
        placeholder="Enter new task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button
        onClick={addTask}
        className="bg-indigo-600 text-white px-6 rounded-r hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </div>
  )
}
