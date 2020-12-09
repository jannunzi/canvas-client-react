import React from 'react'
import CourseCard from "./course-card";

export default function CourseGrid (
  {
    courses = []
  }) {
  return(
    <div className="canvas-grid">
      <h2>Courses</h2>
      <div className="row">
      {
        courses.map((course, ndx) =>
        <div key={ndx} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <CourseCard course={course}/>
        </div>
        )
      }
      </div>
    </div>
  )
}
