import { useState, useEffect, useCallback } from "react"
import { API } from "./services/api"
import Auth from "./components/Auth"
import Dashboard from "./components/Dashboard"

function App() {
  const [isRegister, setIsRegister] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")

  const token = localStorage.getItem("token")

  // ---------- AUTH ----------

  const register = async () => {
    try {
      await API.post("/auth/register", { name, email, password })
      alert("Signup successful! Please login.")
      setIsRegister(false)
      setName("")
      setEmail("")
      setPassword("")
    } catch (err) {
      alert("Signup failed")
    }
  }

  const login = async () => {
    try {
      const res = await API.post("/auth/login", { email, password })
      localStorage.setItem("token", res.data.token)
      window.location.reload()
    } catch (err) {
      alert("Login failed")
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  // ---------- TASKS ----------

  const getTasks = useCallback(async () => {
  const res = await API.get("/tasks", {
    headers: { authorization: token }
  })
  setTasks(res.data)
}, [token])


  const addTask = async () => {
    if (!title) return

    await API.post(
      "/tasks",
      { title },
      { headers: { authorization: token } }
    )

    setTitle("")
    getTasks()
  }

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`, {
      headers: { authorization: token }
    })
    getTasks()
  }

  const updateTask = async (id, newTitle) => {
    await API.put(
      `/tasks/${id}`,
      { title: newTitle },
      { headers: { authorization: token } }
    )
    getTasks()
  }

  // ---------- LOAD TASKS ----------

  useEffect(() => {
  if (token) getTasks()
}, [token, getTasks])


  // ---------- AUTH UI ----------

  if (!token) {
    return (
      <Auth
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        login={login}
        register={register}
      />
    )
  }

  // ---------- DASHBOARD UI ----------

  return (
    <Dashboard
      tasks={tasks}
      title={title}
      setTitle={setTitle}
      addTask={addTask}
      deleteTask={deleteTask}
      updateTask={updateTask}
      logout={logout}
    />
  )
}

export default App
