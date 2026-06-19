import CourseCard from "./CourseCard"

function CourseList({ courses, addToCart }) {
  return (
    <div className="row">

      {courses.map((course) => (

        <div
          className="col-md-3 mb-4"
          key={course.id}
        >
          <CourseCard
            course={course}
            addToCart={addToCart}
          />
        </div>

      ))}

    </div>
  )
}

export default CourseList