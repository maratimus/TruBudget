import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class NewProjectTextfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.props.storeProjectName(event.target.value);
  };

  render() {
    return (
      <div style={{
        width: '40%',
        left: '20%',
        position: 'relative'
      }}>
        <TextField
          floatingLabelText="Origin"
          hintText="e.g. your name or your institute"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NewProjectTextfield;
