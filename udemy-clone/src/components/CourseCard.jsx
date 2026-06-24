import { Link } from 'react-router-dom'
import { Star, Clock } from 'lucide-react'
import './CourseCard.css'

export default function CourseCard({ course }) {
  const discountPct = Math.round((1 - course.price / course.originalPrice) * 100)

  return (
    <Link to={`/course/${course.id}`} className="course-card">
      <div className="course-card__thumb" style={{ background: course.color }}>
        <span>{course.category}</span>
      </div>
      <div className="course-card__body">
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__instructor">{course.instructor}</p>
        <div className="course-card__meta">
          <span className="course-card__rating">
            <strong>{course.rating}</strong>
            <Star size={13} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="course-card__dim">({course.ratingCount.toLocaleString()})</span>
          <span className="course-card__dot" aria-hidden="true">·</span>
          <span className="course-card__dim course-card__hours">
            <Clock size={12} /> {course.hours}h
          </span>
        </div>
        <div className="course-card__price-row">
          <span className="course-card__price">₹{course.price}</span>
          <span className="course-card__original">₹{course.originalPrice}</span>
          <span className="course-card__discount">{discountPct}% off</span>
        </div>
      </div>
    </Link>
  )
}
