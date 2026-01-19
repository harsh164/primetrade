export default function Auth({
  isRegister,
  setIsRegister,
  name, setName,
  email, setEmail,
  password, setPassword,
  login,
  register
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>

        {isRegister && (
          <input
            className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        )}

        <input
          className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {isRegister ? (
          <button
            onClick={register}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={login}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Login
          </button>
        )}

        <p className="text-center mt-4 text-sm text-gray-600">
          {isRegister ? "Already have an account?" : "New here?"}
          <button
            className="text-indigo-600 ml-1 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Create one"}
          </button>
        </p>
      </div>
    </div>
  )
}
