const COURSES_API = 'http://localhost:4000/api/courses'

const findAllCourses = () =>
  fetch(COURSES_API)
    .then(response => response.json())

const findCourseById = (cid) =>
  fetch(`${COURSES_API}/${cid}`)
    .then(response => response.json())

const updateCourse = (cid, course) =>
  fetch(`${COURSES_API}/${cid}`, {
    method: 'PUT',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const api = {
  findCourseById, findAllCourses,
  updateCourse
}

export default api
