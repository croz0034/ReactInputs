import React, { Component } from 'react';
import './App.css';
import Camera from './Camera/Camera.js'
import Draw from './Camera/Draw.js'

class App extends Component { 
    
    constructor(props) {
        super(props)
        this.state = {
      EditMode: false,
      file: null,
        Submitted: []
        }
    }
    
    
    
// Without this handle change function, the url returned will be given the path /fakeURL/ For security purposes, javascript is not allowed to acess the file path on your computer.
  TakePic(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
        EditMode: true
    })
  }
  TextInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
PicDone(canvas){
    this.setState({
        file: canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"),
        EditMode: false
    })
}
///////
Submit(ev){
    console.log(this.state)
}

    
  render() {
    return (
      <div className="App">
        
        {this.state.EditMode && (<div> <Draw Image={this.refs.Picture}  PicDone={this.PicDone.bind(this)}/> </div>)}
        


        {!this.state.EditMode && (<div className="BottomBanner">
          <Camera TakePic={this.TakePic.bind(this)} file={this.state.file}/>
            <textarea className="textInput" name="Message" onChange={this.TextInput}/>
                <button className="submit" onClick={this.Submit.bind(this)}> Enter </button>
        </div>)}



        <img src={this.state.file} ref="Picture"/>
      </div>
    );
  }
}

export default App;
