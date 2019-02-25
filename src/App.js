import React, { Component } from 'react';
import './App.css';
import Camera from './Camera/Camera.js'
import Draw from './Camera/Draw.js'

class App extends Component { 
    
    constructor(props) {
        super(props)
        this.state = {
      file: null
        }
    }
    
    
    
// Without this handle change function, the url returned will be given the path /fakeURL/ For security purposes, javascript is not allowed to acess the file path on your computer.
  TakePic(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
    
    
  render() {
    return (
      <div className="App">
          <Camera TakePic={this.TakePic.bind(this)} file={this.state.file}/>
        <img src={this.state.file} ref="Picture"/>
        {this.state.file && (<div> <Draw Image={this.refs.Picture} />
            </div>)}
      </div>
    );
  }
}

export default App;
