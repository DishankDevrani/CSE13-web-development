import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Navbar from "./Navbar"
import Hero from "./Hero"
import CourseList from "./CourseList"
import courses from "./courses"

function App() {

  const [cartCount, setCartCount] = useState(0)
  const [search, setSearch] = useState("")

  function addToCart() {
    setCartCount(cartCount + 1)
  }

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <>
      <Navbar cartCount={cartCount} />

      <div className="container mt-4">

        <Hero />

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search Courses"
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <CourseList
          courses={filteredCourses}
          addToCart={addToCart}
        />

      </div>
    </>
  )
}

export default App