export default function Register({ name, email, password, setName, setEmail, setPassword, onRegister }) {
  return (
    <>
      <h2>Sign Up</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <br/>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br/>
      <button onClick={onRegister}>Sign Up</button>
    </>
  )
}
