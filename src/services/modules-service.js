const MODULES_API = 'http://localhost:4000/api/modules'
const COURSES_API = 'http://localhost:4000/api/courses'

const findAllModules = () =>
  fetch(MODULES_API)
    .then(response => response.json())

const findModuleById = (mid) =>
  fetch(`${MODULES_API}/${mid}`)
    .then(response => response.json())

const findModulesForCourse = (cid) =>
  fetch(`${COURSES_API}/${cid}/modules`)
    .then(response => response.json())

const createModuleForCourse = (cid, module) =>
  fetch(`${COURSES_API}/${cid}/modules`, {
    method: 'POST',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const updateModule = (mid, module) =>
  fetch(`${MODULES_API}/${mid}`, {
    method: 'PUT',
    body: JSON.stringify(module),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

const deleteModule = (mid) =>
  fetch(`${MODULES_API}/${mid}`, {
    method: 'DELETE'
  })
    .then(response => response.json())

const api = {
  findAllModules, findModuleById, findModulesForCourse,
  createModuleForCourse, updateModule, deleteModule
}

export default api
