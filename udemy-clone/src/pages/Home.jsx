import { Link } from 'react-router-dom'
import { courses, categories } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'
import './Home.css'

export default function Home() {
  const featured = courses.slice(0, 4)

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">Skills, not certificates</p>
            <h1>
              Learn the thing you've been<br />putting off.
            </h1>
            <p className="hero__sub">
              8 courses, taught by people who actually do the work — code, design, run a P&amp;L,
              shoot a portrait. Start today, keep what you learn.
            </p>
            <div className="hero__actions">
              <Link to="/courses" className="btn btn--primary">Browse courses</Link>
              <Link to="/courses?q=React" className="btn btn--ghost">Try a search</Link>
            </div>
          </div>
          <div className="hero__panel" aria-hidden="true">
            <div className="hero__panel-row" style={{ background: '#1f6f6b' }} />
            <div className="hero__panel-row" style={{ background: '#b8691a', width: '78%' }} />
            <div className="hero__panel-row" style={{ background: '#8a4fae', width: '62%' }} />
            <div className="hero__panel-row" style={{ background: '#c1456e', width: '90%' }} />
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2>Browse by category</h2>
        </div>
        <div className="cat-grid">
          {categories.map((cat) => (
            <Link key={cat} to={`/courses?category=${encodeURIComponent(cat)}`} className="cat-chip">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2>Featured courses</h2>
          <Link to="/courses" className="section__link">See all →</Link>
        </div>
        <div className="course-grid">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  )
}
