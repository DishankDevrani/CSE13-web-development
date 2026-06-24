import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { courses, categories } from '../data/courses.js'
import CourseCard from '../components/CourseCard.jsx'
import './CourseList.css'

export default function CourseList() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const activeCategory = params.get('category') || ''
  const [sort, setSort] = useState('relevance')

  const filtered = useMemo(() => {
    let list = courses

    if (activeCategory) {
      list = list.filter((c) => c.category === activeCategory)
    }

    if (q) {
      const needle = q.toLowerCase()
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(needle) ||
          c.instructor.toLowerCase().includes(needle) ||
          c.tags.some((t) => t.toLowerCase().includes(needle))
      )
    }

    const sorted = [...list]
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating)
    if (sort === 'price-low') sorted.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') sorted.sort((a, b) => b.price - a.price)
    if (sort === 'newest') sorted.sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated))

    return sorted
  }, [q, activeCategory, sort])

  function setCategory(cat) {
    const next = new URLSearchParams(params)
    if (cat) next.set('category', cat)
    else next.delete('category')
    setParams(next)
  }

  return (
    <div className="container list-page">
      <div className="list-page__head">
        <h1>{q ? `Results for "${q}"` : 'All courses'}</h1>
        <p>{filtered.length} course{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="list-page__body">
        <aside className="filters">
          <h3>Category</h3>
          <button
            className={`filters__item ${activeCategory === '' ? 'filters__item--active' : ''}`}
            onClick={() => setCategory('')}
          >
            All categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filters__item ${activeCategory === cat ? 'filters__item--active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </aside>

        <div className="list-page__results">
          <div className="list-page__sort">
            <label htmlFor="sort">Sort by</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="relevance">Relevance</option>
              <option value="rating">Highest rated</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="list-page__empty">
              <p>No courses match that search.</p>
              <button className="btn btn--ghost-dark" onClick={() => setParams({})}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="course-grid course-grid--list">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
