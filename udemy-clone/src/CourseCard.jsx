function CourseCard({ course, addToCart }) {
  return (
    <div className="card h-100 shadow-sm">

      <img
        src={`https://picsum.photos/300/200?random=${course.id}`}
        className="card-img-top"
        alt={course.title}
      />

      <div className="card-body">

        <h5>{course.title}</h5>

        <p>{course.instructor}</p>

        <p>
          <strong>₹{course.price}</strong>
        </p>

        <button
          className="btn btn-dark"
          onClick={addToCart}
        >
          Add To Cart
        </button>

      </div>
    </div>
  )
}

export default CourseCard