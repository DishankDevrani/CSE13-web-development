import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import './Cart.css'

export default function Cart() {
  const { items, removeFromCart, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="container cart-page cart-page--empty">
        <h1>Your cart is empty</h1>
        <p>Find a course worth starting today.</p>
        <Link to="/courses" className="btn btn--primary">Browse courses</Link>
      </div>
    )
  }

  return (
    <div className="container cart-page">
      <h1>Your cart</h1>
      <p className="cart-page__count">{items.length} course{items.length !== 1 ? 's' : ''} in cart</p>

      <div className="cart-page__body">
        <ul className="cart-list">
          {items.map((course) => (
            <li key={course.id} className="cart-item">
              <div className="cart-item__thumb" style={{ background: course.color }} />
              <div className="cart-item__info">
                <Link to={`/course/${course.id}`} className="cart-item__title">{course.title}</Link>
                <p className="cart-item__instructor">{course.instructor}</p>
              </div>
              <span className="cart-item__price">₹{course.price}</span>
              <button
                className="cart-item__remove"
                onClick={() => removeFromCart(course.id)}
                aria-label={`Remove ${course.title} from cart`}
              >
                <X size={18} />
              </button>
            </li>
          ))}
        </ul>

        <aside className="cart-summary">
          <h2>Total</h2>
          <p className="cart-summary__total">₹{total}</p>
          <button className="btn btn--primary cart-summary__btn">Checkout</button>
          <button className="cart-summary__clear" onClick={clearCart}>Clear cart</button>
        </aside>
      </div>
    </div>
  )
}
