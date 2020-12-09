import * as constants from '../actions/constants'

const initialState = {
  modules: []
}

const modulesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FIND_ALL_MODULES:
      return {
        ...state,
        modules: action.modules
      }
    case constants.FIND_MODULE_BY_ID:
      return {
        ...state,
        module: action.module
      }
    case constants.FIND_MODULES_FOR_COURSE:
      return {
        ...state,
        modules: action.modules
      }
    case constants.CREATE_MODULE_FOR_COURSE:
      return {
        ...state,
        modules: [...state.modules, action.module]
      }
    case constants.DELETE_MODULE:
      return {
        ...state,
        modules: state.modules.filter(module => module._id !== action.mid)
      }
    case constants.UPDATE_MODULE:
      return {
        ...state,
        modules: state.modules.map(module => module._id === action.mid ? action.module : module)
      }
    default:
      return state
  }
}

export default modulesReducer
