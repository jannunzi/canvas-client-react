import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import moduleActions from '../../actions/modules-actions'
import ModuleCard from "./module-card";

function ModuleList(
  {
    match,
    modules,
    findModulesForCourse,
    createModuleForCourse
  }) {
  useEffect(() =>
    findModulesForCourse(match.params.cid), [])
  return(
    <div>
      <h2>
        Modules
        <button
          onClick={() => createModuleForCourse(match.params.cid, {title: 'New Module'})}
          className="btn btn-primary float-right">
          <i className="fa fa-plus"></i>
          &nbsp;
          Module
        </button>
      </h2>
      {
        modules.map(module =>
          <ModuleCard key={module._id} module={module}/>
        )
      }
    </div>
  )
}

const stateToPropertyMapper = (state) => ({
  modules: state.modulesReducer.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
  findModulesForCourse: (cid) => moduleActions.findModulesForCourse(dispatch, cid),
  createModuleForCourse: (cid, module) => moduleActions.createModuleForCourse(dispatch, cid, module)
})

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)
(ModuleList)
