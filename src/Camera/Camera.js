// input image
// Resource: https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa

import React, { Component } from 'react';

class Camera extends Component {
    
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
  }
    

  render() {
    return (
      <div>
        <input type="file" onChange={this.props.TakePic}
        accept="image/*" className="Shutter" capture="camera" />
        
      </div>
    );
  }
}

// Setting capture="camera" should bring up the native picture taking application in order to snap the photo required.

export default Camera;