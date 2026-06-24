import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(course) {
    setItems((prev) => (prev.some((c) => c.id === course.id) ? prev : [...prev, course]))
  }

  function removeFromCart(courseId) {
    setItems((prev) => prev.filter((c) => c.id !== courseId))
  }

  function isInCart(courseId) {
    return items.some((c) => c.id === courseId)
  }

  function clearCart() {
    setItems([])
  }

  const total = useMemo(() => items.reduce((sum, c) => sum + c.price, 0), [items])

  const value = { items, addToCart, removeFromCart, isInCart, clearCart, total }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
