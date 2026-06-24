import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Page not found</h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: 24 }}>
        That page doesn't exist. Let's get you back on track.
      </p>
      <Link to="/" className="btn btn--primary">Go home</Link>
    </div>
  )
}
