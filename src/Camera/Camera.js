// input image
// Resource: https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa

import React, { Component } from 'react';

class Camera extends Component {

  render() {
    return (
      <div>
        <label htmlFor="Shutter"><img src={require('./Camera.png')} className="Shutter"/></label>
        
        <input type="file" onChange={this.props.TakePic}
        accept="image/*" id="Shutter" className="Hidden" capture="camera" /> 
        
      </div>
    );
  }
}

// Setting capture="camera" should bring up the native picture taking application in order to snap the photo required.

export default Camera;