function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h3 className="text-white m-0">
        Udemy Clone
      </h3>

      <button className="btn btn-warning">
        Cart ({cartCount})
      </button>
    </nav>
  )
}

export default Navbar