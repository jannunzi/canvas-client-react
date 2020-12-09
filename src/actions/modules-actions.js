import modulesService from '../services/modules-service'
import * as constants from './constants'

const findAllModules = (dispatch) =>
  modulesService.findAllModules()
    .then(modules => dispatch({
      type: constants.FIND_ALL_MODULES,
      modules
    }))

const findModulesForCourse = (dispatch, cid) =>
  modulesService.findModulesForCourse(cid)
    .then(modules => dispatch({
      type: constants.FIND_MODULES_FOR_COURSE,
      modules
    }))

const findModuleById = (dispatch, cid) =>
  modulesService.findModuleById(cid)
    .then(module => dispatch({
      type: constants.FIND_MODULE_BY_ID,
      module
    }))

const createModuleForCourse = (dispatch, cid, module) =>
  modulesService.createModuleForCourse(cid, module)
    .then(module => dispatch({
      type: constants.CREATE_MODULE_FOR_COURSE,
      module
    }))

const updateModule = (dispatch, mid, module) =>
  modulesService.updateModule(mid, module)
    .then(status => dispatch({
      type: constants.UPDATE_MODULE,
      module,
      mid
    }))

const deleteModule = (dispatch, mid) =>
  modulesService.deleteModule(mid)
    .then(status => dispatch({
      type: constants.DELETE_MODULE,
      mid
    }))

const api = {
  findAllModules, findModuleById, findModulesForCourse,
  createModuleForCourse, updateModule, deleteModule
}

export default api
