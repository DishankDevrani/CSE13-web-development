import { useParams, Link } from 'react-router-dom'
import { Star, Clock, BarChart3, Layers, CheckCircle2 } from 'lucide-react'
import { getCourseById } from '../data/courses.js'
import { useCart } from '../context/CartContext.jsx'
import './CourseDetail.css'

export default function CourseDetail() {
  const { id } = useParams()
  const course = getCourseById(id)
  const { addToCart, isInCart } = useCart()

  if (!course) {
    return (
      <div className="container detail-page">
        <p>Course not found. <Link to="/courses">Back to all courses</Link></p>
      </div>
    )
  }

  const inCart = isInCart(course.id)
  const discountPct = Math.round((1 - course.price / course.originalPrice) * 100)

  const outcomes = [
    `Build real projects using ${course.tags[0]}`,
    'Understand the underlying concepts, not just the syntax',
    'Apply what you learn to your own work immediately',
    'Avoid the common mistakes beginners make',
  ]

  return (
    <div className="detail-page">
      <div className="detail-hero">
        <div className="container detail-hero__inner">
          <p className="detail-hero__category">{course.category}</p>
          <h1>{course.title}</h1>
          <p className="detail-hero__summary">{course.summary}</p>
          <div className="detail-hero__meta">
            <span className="detail-hero__rating">
              <strong>{course.rating}</strong>
              <Star size={14} fill="currentColor" strokeWidth={0} />
            </span>
            <span>({course.ratingCount.toLocaleString()} ratings)</span>
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <p className="detail-hero__instructor">Created by <strong>{course.instructor}</strong></p>
        </div>
      </div>

      <div className="container detail-body">
        <div className="detail-main">
          <section className="detail-card">
            <h2>What you'll learn</h2>
            <ul className="outcomes">
              {outcomes.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-card">
            <h2>Course details</h2>
            <div className="stat-grid">
              <div className="stat">
                <Clock size={18} />
                <div>
                  <strong>{course.hours} hours</strong>
                  <p>on-demand video</p>
                </div>
              </div>
              <div className="stat">
                <Layers size={18} />
                <div>
                  <strong>{course.lectures} lectures</strong>
                  <p>across all sections</p>
                </div>
              </div>
              <div className="stat">
                <BarChart3 size={18} />
                <div>
                  <strong>{course.level}</strong>
                  <p>difficulty level</p>
                </div>
              </div>
            </div>
          </section>

          <section className="detail-card">
            <h2>Tags</h2>
            <div className="tag-row">
              {course.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </section>
        </div>

        <aside className="purchase-card">
          <div className="purchase-card__thumb" style={{ background: course.color }} />
          <div className="purchase-card__price-row">
            <span className="purchase-card__price">₹{course.price}</span>
            <span className="purchase-card__original">₹{course.originalPrice}</span>
          </div>
          <p className="purchase-card__discount">{discountPct}% off — limited time</p>

          {inCart ? (
            <Link to="/cart" className="btn btn--primary purchase-card__btn">
              Go to cart
            </Link>
          ) : (
            <button className="btn btn--primary purchase-card__btn" onClick={() => addToCart(course)}>
              Add to cart
            </button>
          )}

          <p className="purchase-card__note">Full lifetime access · Certificate of completion</p>
        </aside>
      </div>
    </div>
  )
}
