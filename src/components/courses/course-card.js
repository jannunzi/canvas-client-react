import React from 'react'
import {Link} from "react-router-dom";

export default function CourseCard(
  {
    course
  }) {
  return(
    <div className="canvas-course card" style={{"width": "100%"}}>
      <div className="card-body">
        <h5 className="card-title">
          {course.title}
        </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
          card's content.</p>
        <Link
          to={`/courses/${course._id}`}
          className="btn btn-primary">
          {course.title}
        </Link>
      </div>
    </div>
  )
}
