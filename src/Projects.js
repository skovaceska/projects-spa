import React, { Component } from "react";
 
class Projects extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <p>All active projects are listed here.</p>
        <ol>
			{
				this.props.projects != null ?
				(
					this.props.projects.map((project)=>(
					<li key={project.id}>
						{project.Title}
					</li>
					))
				)
				:
				null
			}
        </ol>
      </div>
    );
  }
}
 
export default Projects;