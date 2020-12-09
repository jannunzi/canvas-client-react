import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import moduleAction from '../../actions/modules-actions'

function ModuleCard(
  {
    module,
    deleteModule,
    updateModule
  }) {
  const [editing, setEditing] = useState(false)
  const [moduleUpdates, setModuleUpdates] = useState({})
  return(
    <div className="canvas-module card" style={{"width": "100%"}}>
      <div className="card-body">
        <h5 className="card-title">
          <button
            onClick={() => deleteModule(module._id)}
            className="float-right btn btn-danger">
            <i className="fa fa-remove"></i>
          </button>
          {
            !editing &&
            <button
              onClick={() => {
                setEditing(true)
                setModuleUpdates(module)
              }}
              className="float-right btn btn-success">
              <i className="fa fa-pencil"></i>
            </button>
          }
          {
            editing &&
            <button
              onClick={() => {
                setEditing(false)
                updateModule(moduleUpdates._id, moduleUpdates)
              }}
              className="float-right btn btn-success">
              <i className="fa fa-check"></i>
            </button>
          }
          {
            editing &&
              <input
                className="form-control canvas-inline"
                onChange={(event) => setModuleUpdates({...moduleUpdates, title: event.target.value})}
                value={moduleUpdates.title}/>
          }
          {
            !editing &&
              <span>{module.title}</span>
          }

        </h5>

        {
          editing &&
            <textarea
              value={module.description}
              onChange={(event) => setModuleUpdates({...moduleUpdates, description: event.target.value})}
              className="form-control">{module.description}</textarea>
        }
        {
          !editing &&
          <p className="card-text">{module.description}</p>
        }

      </div>
    </div>
  )
}

const stateToPropertyMapper = (state) => ({

})

const dispatchToPropertyMapper = (dispatch) => ({
  deleteModule: (mid) => moduleAction.deleteModule(dispatch, mid),
  updateModule: (mid, module) => moduleAction.updateModule(dispatch, mid, module)
})

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)
(ModuleCard)
