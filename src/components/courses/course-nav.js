import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

function CourseNav  (
  {
    course = {},
    match
  }) {
  const [courseId, setCourseId] = useState("")
  useEffect(() => {
    setCourseId(match.params.cid)
  })
  return(
    <div>
      <div className="list-group">
        <Link to="/" className="list-group-item">
          Dashboard
        </Link>
        <Link to={`/courses/${courseId}`} className="list-group-item">
          Home
        </Link>
        {/*<Link to={`/courses/${courseId}/syllabus`} className="list-group-item">*/}
        {/*  Syllabus*/}
        {/*</Link>*/}
        <Link to={`/courses/${courseId}/modules`} className="list-group-item">
          Modules
        </Link>
        <Link to={`/courses/${courseId}/assignments`} className="list-group-item">
          Assignments
        </Link>
        <Link to={`/courses/${courseId}/exams`} className="list-group-item">
          Exams
        </Link>
        <Link to={`/courses/${courseId}/grades`} className="list-group-item">
          Grades
        </Link>
      </div>
    </div>
  )
}

export default CourseNav
