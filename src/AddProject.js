import React, { Component } from "react";
 
class AddProject extends Component {
	constructor(props){
		super(props);
		this.state={
			projectName: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(){
		this.props.addNewProject(this.state.value);
	}
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
       <h2>Add a Project</h2>
	   <br/>
	   <form onSubmit={this.handleSubmit}>
  <h4>Project name:</h4>
  <input type="text" onChange={this.handleChange} name="projectname"/>
  <br/>
  <h4>Description:</h4>
  <input type="text" name="description"/>
  <br/><br/>
  <input type="submit" value="Submit" />
</form> 
      </div>
);
}
} 
export default AddProject;