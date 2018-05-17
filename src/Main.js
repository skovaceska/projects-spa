import React, { Component } from "react";
 import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

//components
import Home from "./Home";
import Projects from "./Projects";
import AddProject from "./AddProject";

class Main extends Component {
	constructor(){
		super();
		this.state = {
			projects:[
				{ "Title": "title 1", "Description":"desc 1", "id":"1" },
				{ "Title": "title 2", "Description":"desc 1", "id":"2" },
				{ "Title": "title 3", "Description":"desc 1", "id":"3" }
			]
		}
	}
	AddProject(Title){
		var projectsNew = this.state.projects.slice(0);
    projectsNew.push({Title:Title,id:this.state.projects.length+1});
    console.log(projectsNew.id);
		this.setState({projects: projectsNew});	
	}
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink to="/AddProject">Add a Project</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Projects" component={()=><Projects projects={this.state.projects}/>} />
            <Route path="/AddProject" component={()=><AddProject addNewProject={this.AddProject.bind(this)}/>}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;