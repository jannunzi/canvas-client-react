import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import courseActions from '../../actions/courses-actions'

function Course(
  {
    match,
    findCourseById,
    updateCourse,
    course = {}
  }) {

  const [editing, setEditing] = useState(false)
  const [courseUpdates, setCourseUpdates] = useState({})

  useEffect(() => {
    findCourseById(match.params.cid)
  }, [])

  return(
    <div>
      <h1>
        {
          !editing &&
          <button
            onClick={() => {
              setEditing(true)
              setCourseUpdates(course)
            }}
            className="btn btn-success float-right">
            <i className="fa fa-pencil"></i>
          </button>
        }
        {
          editing &&
          <button
            onClick={() => {
              setEditing(false)
              updateCourse(course._id, courseUpdates)
            }}
            className="btn btn-success float-right">
            <i className="fa fa-check"></i>
          </button>
        }
        {
          !editing &&
            <span>{course.title} - {course.longTitle}</span>
        }
        {
          editing &&
            <span>
              <input
                value={courseUpdates.title}
                onChange={(event) =>
                  setCourseUpdates({
                    ...courseUpdates,
                    title: event.target.value
                  })}
                className="form-control canvas-inline"/>
              <input
                value={courseUpdates.longTitle}
                onChange={(event) =>
                  setCourseUpdates({
                    ...courseUpdates,
                    longTitle: event.target.value
                  })}
                className="form-control canvas-inline"/>
            </span>
        }
      </h1>
      {
        editing &&
        <textarea
          value={courseUpdates.description}
          onChange={(event) =>
            setCourseUpdates({
              ...courseUpdates,
              description: event.target.value
          })}
          className="form-control">
        </textarea>
      }
      {
        !editing &&
        <p>
          {course.description}
        </p>
      }
    </div>
  )
}

const stateToPropertyMapper = (state) => ({
  course: state.coursesReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
  findCourseById: (cid) =>
    courseActions.findCourseById(dispatch, cid),
  updateCourse: (cid, course) =>
    courseActions.updateCourse(dispatch, cid, course)
})

export default connect(
  stateToPropertyMapper,
  propertyToDispatchMapper
)(Course)
