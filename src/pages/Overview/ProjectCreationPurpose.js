import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class ProjectCreationPurpose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.props.storeProjectPurpose(event.target.value);
  };

  render() {
    var hintText = "Define the purpose of the project"
    var floatingLabelText = "Project Purpose"

    if (this.props.type==='subproject'){
      floatingLabelText="Sub-project purpose"
      hintText="Define the purpose of the sub-project"
    }else if (this.props.type==='workflow'){
      floatingLabelText="Workflow Purpose"
      hintText="Define the purpose of your  workflow"
    }
    return (
      <div style={{
        width: '40%',
        left: '20%',
        position: 'relative'
      }}>
        <TextField
          multiLine={true}
          rows={2}
          floatingLabelText={floatingLabelText}
          hintText={hintText}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ProjectCreationPurpose;
