import * as constants from '../actions/constants'

export const coursesReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.FIND_ALL_COURSES:
      return {
        ...state,
        courses: action.courses
      }
    case constants.FIND_COURSE_BY_ID:
      return {
        ...state,
        course: action.course
      }
    case constants.UPDATE_COURSE:
      return {
        ...state,
        course: action.course
      }
    default:
      return state
  }
}
