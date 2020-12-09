import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Dashboard from "./components/dashboard";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {coursesReducer} from "./reducers/courses-reducer";
import modulesReducer from "./reducers/modules-reducer";
import Course from "./components/courses/course";
import CourseNav from "./components/courses/course-nav";
import CourseSyllabus from "./components/courses/course-syllabus";
import ModuleList from "./components/modules/modules-list";
import AssignmentList from "./components/assignments/assignment-list";
import ExamList from "./components/exams/exam-list";

const reducer = combineReducers({
  coursesReducer, modulesReducer
})

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <br/>
        <Provider store={store}>
          <Router>
            <div className="row">
              <div className="col-sm-2">
                <Route path={[`/courses/:cid`]} component={CourseNav}/>
              </div>
              <div className="col-sm-10">
                <Route path="/" exact>
                  <Dashboard/>
                </Route>
                <Route
                  path="/courses/:cid"
                  component={Course}/>
                <Route
                  path="/courses/:cid/syllabus"
                  exact
                  component={CourseSyllabus}/>
                <Route
                  path="/courses/:cid/modules"
                  exact
                  component={ModuleList}/>
                <Route
                  path="/courses/:cid/assignments"
                  exact
                  component={AssignmentList}/>
                <Route
                  path="/courses/:cid/exams"
                  exact
                  component={ExamList}/>
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
