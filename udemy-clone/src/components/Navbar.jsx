import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Search, ShoppingCart, Menu, X, GraduationCap } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import './Navbar.css'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { items } = useCart()

  function handleSearch(e) {
    e.preventDefault()
    navigate(query.trim() ? `/courses?q=${encodeURIComponent(query.trim())}` : '/courses')
    setMenuOpen(false)
  }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          <GraduationCap size={22} strokeWidth={2.2} />
          <span>Learnly</span>
        </Link>

        <form className="nav__search" onSubmit={handleSearch} role="search">
          <Search size={17} className="nav__search-icon" />
          <input
            type="text"
            placeholder="Search for courses, instructors, skills"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search courses"
          />
        </form>

        <nav className="nav__links">
          <Link to="/courses">Browse</Link>
          <Link to="/cart" className="nav__cart">
            <ShoppingCart size={20} />
            {items.length > 0 && <span className="nav__cart-badge">{items.length}</span>}
          </Link>
        </nav>

        <button
          className="nav__menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="nav__mobile container">
          <form onSubmit={handleSearch} role="search">
            <Search size={17} />
            <input
              type="text"
              placeholder="Search courses"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Browse courses</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({items.length})</Link>
        </div>
      )}
    </header>
  )
}
