import coursesService from '../services/courses-service'
import * as constants from './constants'

const findAllCourses = (dispatch) =>
  coursesService.findAllCourses()
    .then(courses => dispatch({
      type: constants.FIND_ALL_COURSES,
      courses
    }))

const findCourseById = (dispatch, cid) =>
  coursesService.findCourseById(cid)
    .then(course => dispatch({
      type: constants.FIND_COURSE_BY_ID,
      course
    }))

const updateCourse = (dispatch, cid, course) =>
  coursesService.updateCourse(cid, course)
    .then(status => dispatch({
      type: constants.UPDATE_COURSE,
      cid,
      course
    }))

const api = {
  findCourseById, findAllCourses,
  updateCourse
}

export default api
