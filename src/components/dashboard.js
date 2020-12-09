import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import coursesAction from '../actions/courses-actions'
import CourseGrid from "./courses/course-grid";

function Dashboard (
  {
    findAllCourses,
    courses
  }) {
  useEffect(() => {
    findAllCourses()
  }, [])
  return(
    <div>
      <h1>Dashboard</h1>
      <CourseGrid courses={courses}/>
    </div>
  )
}

const stateToPropertyMapper = (state) => ({
  courses: state.coursesReducer.courses
})

const dispatchToPropertyMapper = (dispatch) => ({
  findAllCourses: () => coursesAction.findAllCourses(dispatch)
})

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(Dashboard)
