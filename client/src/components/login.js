export default function Login({ email, password, setEmail, setPassword, onLogin }) {
  return (
    <>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
  Tailwind Works
</button>

      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br/>
      <button onClick={onLogin}>Login</button>
    </>
  )
}
